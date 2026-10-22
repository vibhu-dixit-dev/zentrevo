// ═══════════════════════════════════════════════════════════════════
// VERCEL SERVERLESS FUNCTION: /api/chat
// Proxies requests to Groq Cloud with intelligent fallback
// ═══════════════════════════════════════════════════════════════════

function getLocalAnswer(query) {
  const q = (query || '').toLowerCase().trim();

  // Vrindavan / Mathura / Spiritual Trips
  if (q.includes('vrindavan') || q.includes('mathura') || q.includes('braj') || q.includes('barsana') || q.includes('govardhan') || (q.includes('gurgaon') && q.includes('trip')) || (q.includes('gurugoan') && q.includes('trip'))) {
    return "🌸 **Bespoke Vrindavan & Mathura Spiritual Escape (From Gurgaon / Delhi NCR)**\n\nYes, absolutely! Zentrevo crafts luxury private spiritual journeys tailored to your schedule:\n\n• **Travel Route:** Gurgaon / Delhi NCR to Vrindavan via Yamuna Expressway (~2.5 to 3 hours drive)\n• **Duration Options:** Same-Day VIP Pilgrimage or 2 Days · 1 Night Weekend Retreat\n• **Curated Inclusions:**\n  • Private luxury AC chauffeur vehicle with doorstep pickup from Gurgaon/Delhi NCR\n  • VIP Fast-Track Temple Darshan: Bankey Bihari Ji, Prem Mandir (evening musical light show), ISKCON Temple, and Radha Raman Temple\n  • Dedicated local spiritual storyteller & cultural escort\n  • Luxury boutique stay options (Nidhivan Sarovar Portico or Brij View)\n  • Authentic Braj Sattvik dining & legendary Mathura Peda tasting experience\n  • Optional extension to Govardhan Hill Parikrama & Barsana (Radha Rani Temple)\n\nWould you like our private trip designer to finalize a vehicle and custom itinerary for your preferred dates? Message us directly on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** or enquire on our [Contact Page](contact.html)!";
  }

  // Trip planning general queries
  if (q.includes('trips that') || q.includes('what trips') || q.includes('can you plan') || q.includes('can u plan') || q.includes('destinations you') || q.includes('where do you') || q.includes('places you') || q.includes('planning to')) {
    return "✈️ **Yes! Zentrevo Plans Bespoke Luxury Journeys Worldwide & Across India**\n\nWhether you need an international luxury vacation, a romantic honeymoon, or a curated weekend road trip, we handle every detail from doorstep to destination:\n\n🌍 **Top International Escapes:**\n• **Paris & France Romance (6D/5N):** Louvre, Eiffel Tower, Champagne Seine cruise — From $2,650\n• **Swiss Alps Luxury (5D/4N):** Glacier Express, Zermatt, Jungfraujoch chalets — From $3,690\n• **Maldives Overwater (7D/6N):** Private water villa, seaplane, spa credits — From $3,290\n• **Japan Heritage (8D/7N):** Bullet train, Tokyo, Kyoto, traditional onsen — From $2,980\n• **East Africa Safari (10D/9N):** Serengeti, Masai Mara private 4x4 drives — From $4,150\n• **Dubai & Desert Luxe (5D/4N):** 5-star beachfront, Burj Khalifa, private yacht — From $2,190\n• **Bali, Santorini, Iceland, Italy & More**\n\n🇮🇳 **India Bespoke & Weekend Journeys:**\n• **Spiritual Escapes:** Private chauffeured trips to Vrindavan, Mathura, Varanasi & Rishikesh\n• **Royal Heritage:** Jaipur, Udaipur & Jodhpur palace stays (From $1,450)\n• **Nature & Hills:** Kerala houseboats, Munnar hills, and Ladakh expeditions\n• **Beach Getaways:** Goa private heritage villas & yachting\n\nTell us your starting city, dates, and dream destination — our travel designers will craft a custom day-by-day plan within 24 hours. Connect with us on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** or via our [Contact Page](contact.html)!";
  }

  // Paris
  if (q.includes('paris') || q.includes('france') || q.includes('eiffel')) {
    return "🗼 **Paris & French Romance Escape (6D · 5N)**\n\n• **Starting Price:** From $2,650 / person\n• **Inclusions:** Boutique 5-star hotel near Seine & Champs-Élysées, skip-the-line Eiffel Tower summit access, private Louvre Museum tour, sunset Champagne dinner cruise, and Versailles day trip.\n\nInquire online via our [Contact Page](contact.html) or **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
  }

  // Maldives
  if (q.includes('maldives') || q.includes('overwater')) {
    return "🏖️ **Maldives Overwater Escape (7D · 6N)**\n\n• **Starting Price:** From $3,290 / person\n• **Inclusions:** Scenic seaplane transfers, private overwater pool villa, daily dining credits, couples spa therapy & dolphin cruise.\n\nReserve via **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
  }

  // Swiss
  if (q.includes('swiss') || q.includes('switzerland') || q.includes('alps')) {
    return "🏔️ **Swiss Alps Luxury Retreat (5D · 4N)**\n\n• **Starting Price:** From $3,690 / person\n• **Inclusions:** First-Class Swiss Rail & Glacier Express, 5-star chalets in Zermatt & Interlaken, Jungfraujoch cable car & Matterhorn views.\n\nConnect on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
  }

  // India
  if (q.includes('india') || q.includes('rajasthan') || q.includes('kerala') || /\bgoa\b/.test(q) || q.includes('ladakh') || q.includes('taj mahal')) {
    return "🇮🇳 **Incredible India Luxury Bespoke Tours**\n\n• **Rajasthan Royal Palaces (7D/6N):** Jaipur, Udaipur & Jodhpur palace stays — From $1,450\n• **Kerala Backwaters & Hills (6D/5N):** Private luxury houseboat & tea hills — From $1,190\n• **Ladakh High-Pass Expedition (7D/6N):** Pangong Lake luxury glamping — From $1,390\n• **Goa Coastal Serenity (5D/4N):** Private beach villa & yachting — From $990\n\nCustomize your journey on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
  }

  // Default Fallback
  return "Thank you for asking! Zentrevo crafts bespoke luxury journeys worldwide and across India, complete with 5-star stays, private chauffeur cars, guided temple and heritage tours, flight coordination, and personalized itinerary planning.\n\n• **Popular International Escapes:** Paris, Swiss Alps, Maldives, East Africa Safari, Japan, Bali, Dubai, Santorini, and Iceland.\n• **India Tailor-Made Tours:** Private spiritual escapes to Vrindavan & Mathura, royal Rajasthan palace stays, Kerala backwaters, Goa villas, and Ladakh.\n• **Visas:** Complete end-to-end processing for Schengen, USA, UK, Canada, Australia, Japan, and Dubai.\n\nTell us your starting city, dates, and group size — our senior travel planners will design your personalized itinerary within 24 hours! Message us directly on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** or submit your request on our [Contact Page](contact.html).";
}

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

  const { messages, systemPrompt } = req.body || {};
  const lastUserMsg = (messages && messages.length > 0)
    ? (messages[messages.length - 1].content || '')
    : '';

  const apiKey = (process.env.GROQ_API_KEY || '').trim();

  // If no API key configured, use local intelligent fallback immediately
  if (!apiKey) {
    return res.status(200).json({ reply: getLocalAnswer(lastUserMsg) });
  }

  try {
    const payload = {
      model: 'openai/gpt-oss-120b',
      messages: [
        {
          role: 'system',
          content: systemPrompt || 'You are the official AI Travel Concierge for Zentrevo (https://zentrevo.github.io/). Provide rich, elegant, helpful itinerary advice.'
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
      console.warn('Groq API returned status', response.status, 'using local intelligent responder.');
      return res.status(200).json({ reply: getLocalAnswer(lastUserMsg) });
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || getLocalAnswer(lastUserMsg);
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Vercel API chat proxy error, falling back:', error.message);
    return res.status(200).json({ reply: getLocalAnswer(lastUserMsg) });
  }
};
