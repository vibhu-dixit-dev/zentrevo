// ═══════════════════════════════════════════════════════════════════
// VERCEL SERVERLESS FUNCTION: /api/chat
// Securely proxies requests to Groq Cloud using process.env.GROQ_API_KEY
// ═══════════════════════════════════════════════════════════════════

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const apiKey = (process.env.GROQ_API_KEY || '').trim();
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY is not configured in Vercel Environment Variables.'
    });
  }

  try {
    const { messages, systemPrompt } = req.body || {};
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing or invalid messages array' });
    }

    const payload = {
      model: 'openai/gpt-oss-120b',
      messages: [
        {
          role: 'system',
          content: systemPrompt || 'You are the official AI Travel Concierge for Zentrevo (https://zentrevo.github.io/).'
        },
        ...messages
      ],
      temperature: 0.6,
      max_tokens: 1200
    };

    let response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    // If primary model errors, try fallback model
    if (!response.ok) {
      payload.model = 'openai/gpt-oss-20b';
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
      });
    }

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: err.error?.message || `Groq API responded with status ${response.status}`
      });
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || 'I could not generate a response. Please try again.';
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Vercel API chat proxy error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};
