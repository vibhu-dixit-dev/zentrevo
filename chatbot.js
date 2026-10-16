/* ═══════════════════════════════════════════════════════════════════
   ZENTREVO AI TRAVEL CONCIERGE — POWERED BY GROQ API
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── KNOWLEDGE BASE FOR ZENTREVO ──
  const ZENTREVO_SYSTEM_PROMPT = `You are the official AI Travel Concierge for "Zentrevo" (https://zentrevo.github.io/), a premier luxury bespoke travel agency.
Your mission is to provide helpful, elegant, accurate, and inspiring information about Zentrevo's tour packages, destinations, visa services, booking processes, and itineraries.

Tone: Professional, warm, sophisticated, adventurous, and luxurious.

Key Details about Zentrevo:
1. Contact & Booking:
   - Email: zentrevo.official@outlook.com
   - Direct WhatsApp Specialist: +91 8619928710
   - Booking process: Travelers get 1:1 personal planning with real human specialists, no hidden fees, 24/7 dedicated support.

2. Handpicked Tour Packages & Pricing:
   - Maldives Overwater Escape: 7 Days · 6 Nights — From $3,290/person (Inclusions: Flights, Villa Stay, Spa Credit)
   - East Africa Safari Trail: 10 Days · 9 Nights — From $4,150/person (Inclusions: 4x4 Safari, Luxury Lodges, Expert Guide)
   - Japan Heritage Journey: 8 Days · 7 Nights — From $2,980/person (Inclusions: Bullet Train, Local Guide, Authentic Ryokan Stay)
   - Santorini Honeymoon: 6 Days · 5 Nights — From $2,450/person (Inclusions: Sunset Cruise, Cave Suite, Wine Tasting)
   - Swiss Alps Retreat: 5 Days · 4 Nights — From $3,690/person (Inclusions: Luxury Chalet Stay, Cable Car Pass, Fine Dining)
   - Patagonia Trekking Expedition: 9 Days · 8 Nights — From $3,120/person (Inclusions: Guided Treks, Eco Lodge, All Gear)
   - Bali Cultural Retreat: 6 Days · 5 Nights — From $1,890/person (Inclusions: Private Villa, Temple Tours, Yoga Sessions)
   - Iceland Northern Lights Tour: 7 Days · 6 Nights — From $3,450/person (Inclusions: Aurora Hunt, Glacier Hike, Blue Lagoon/Hot Springs)
   - Dubai City & Desert Escape: 5 Days · 4 Nights — From $2,190/person (Inclusions: 5-Star Hotel, Desert Safari, Burj Khalifa)
   - Australia Outback & Reef: 11 Days · 10 Nights — From $4,390/person (Great Barrier Reef, Uluru, Sydney)
   - Scotland Highlands Explorer: 7 Days · 6 Nights — From $2,850/person (Highlands, Castles, Isle of Skye)
   - Thailand Island Hopping, Vietnam Discovery, Morocco Desert & Medina, Egypt Ancient Wonders, Costa Rica Rainforest, and Peru Machu Picchu Trek.

3. Global Visa Assistance Services:
   - Types: Tourist Visa, Business Visa, Student Visa, Digital Nomad Visa, Family & Dependent Visa, Medical Visa, Transit Visa, Visa-on-Arrival Assistance.
   - Destinations handled: USA, UK, Schengen/Europe, Canada, Australia, New Zealand, Japan, Singapore, UAE/Dubai, South Korea, etc.
   - What Zentrevo does: Customized document checklist, end-to-end form reviews, appointment scheduling, fast-track tracking to prevent rejections or delays.

4. Top Destinations:
   - International: Bali, Maldives, Paris, Rome, Tokyo, Dubai, Swiss Alps, Iceland, London, Sydney, Cairo, New York, Santorini.
   - Incredible India: Jaipur, Goa, Munnar, Kerala Backwaters, Ladakh, Udaipur, Varanasi, Andaman Islands, Agra (Taj Mahal), Rishikesh.

Formatting instructions:
- Keep answers concise, informative, and beautifully formatted with bullet points and bold text where helpful.
- When quoting packages, mention duration, inclusions, and starting price.
- Invite the guest to message Zentrevo on WhatsApp (+91 8619928710) or book via the website contact form to customize any itinerary.`;

  // Pre-compiled local instant answers (works even if Groq API key is not yet set)
  function getLocalResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('maldives')) {
      return "🏖️ **Maldives Overwater Escape**\\n\\n• **Duration:** 7 Days · 6 Nights\\n• **Price:** From $3,290 / person\\n• **Includes:** International flights, private overwater villa stay, and luxury spa credit.\\n\\nWould you like to book or customize this trip with our specialists via WhatsApp (+91 8619928710)?";
    }
    if (q.includes('safari') || q.includes('africa')) {
      return "🦁 **East Africa Safari Trail**\\n\\n• **Duration:** 10 Days · 9 Nights\\n• **Price:** From $4,150 / person\\n• **Includes:** Private 4x4 safari drives, vetted luxury safari lodges, and expert local wildlife guides across the Serengeti and Masai Mara.";
    }
    if (q.includes('japan')) {
      return "⛩️ **Japan Heritage Journey**\\n\\n• **Duration:** 8 Days · 7 Nights\\n• **Price:** From $2,980 / person\\n• **Includes:** High-speed Shinkansen bullet train passes, authentic traditional Ryokan stays with onsen, and private cultural guided tours across Tokyo, Kyoto, and Nara.";
    }
    if (q.includes('visa')) {
      return "🛂 **Zentrevo Visa Assistance Services**\\n\\nWe provide end-to-end visa consulting and processing for:\\n• **Types:** Tourist, Business, Student, Digital Nomad, and Transit Visas\\n• **Top Countries:** USA, UK, Schengen Area (Europe), Canada, Australia, Japan, Dubai/UAE, Singapore, and New Zealand.\\n\\nWe review all documents in advance to ensure 100% compliance and error-free submissions.";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('package')) {
      return "✨ **Popular Zentrevo Tour Packages:**\\n\\n• **Bali Cultural Retreat:** From $1,890\\n• **Dubai City & Desert:** From $2,190\\n• **Santorini Honeymoon:** From $2,450\\n• **Japan Heritage:** From $2,980\\n• **Maldives Overwater:** From $3,290\\n• **Iceland Northern Lights:** From $3,450\\n• **Swiss Alps Retreat:** From $3,690\\n• **East Africa Safari:** From $4,150\\n\\nAll packages include handpicked accommodations and dedicated 24/7 personal travel support.";
    }
    if (q.includes('contact') || q.includes('book') || q.includes('phone') || q.includes('email')) {
      return "📞 **Contact Zentrevo Directly**\\n\\n• **WhatsApp Specialist:** [+91 8619928710](https://wa.me/918619928710)\\n• **Official Email:** [zentrevo.official@outlook.com](mailto:zentrevo.official@outlook.com)\\n• **Booking:** Visit our [Contact Page](contact.html) to request a customized itinerary.";
    }
    return null;
  }

  // ── BUILD CHATBOT DOM ──
  function initChatbot() {
    if (document.getElementById('zentrevo-chat-root')) return;

    const root = document.createElement('div');
    root.id = 'zentrevo-chat-root';
    root.innerHTML = `
      <!-- Launcher Button -->
      <button class="zentrevo-chat-launcher" id="zc-launcher" aria-label="Open AI Concierge Chat">
        <span class="zc-launcher-badge"></span>
        <span class="zc-launcher-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <path d="M9.5 9h.01M14.5 9h.01M12 12.5c1 .8 2 0 2 0" stroke-width="2"/>
          </svg>
        </span>
        <span class="zc-launcher-close">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      </button>

      <!-- Chat Window -->
      <div class="zentrevo-chat-window" id="zc-window" role="dialog" aria-label="Zentrevo AI Travel Concierge">
        <!-- Header -->
        <div class="zc-header">
          <div class="zc-header-brand">
            <img src="logo-icon.png" alt="Zentrevo" class="zc-header-avatar">
            <div class="zc-header-info">
              <h4>Zentrevo Concierge</h4>
              <span class="zc-header-status"><span class="zc-status-dot"></span> Online · AI Travel Assistant</span>
            </div>
          </div>
          <div class="zc-header-actions">
            <button class="zc-btn-icon" id="zc-btn-settings" title="API Key Settings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
            <button class="zc-btn-icon" id="zc-btn-clear" title="Clear Chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
            <button class="zc-btn-icon" id="zc-btn-close" title="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Settings Panel -->
        <div class="zc-settings-panel" id="zc-settings">
          <div class="zc-settings-title">
            <span>Groq Cloud API Key</span>
            <span id="zc-api-status" style="font-size:0.68rem;color:#bf8a3d">Free tier</span>
          </div>
          <p>Get a free key in 30 seconds at <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a> to power unlimited high-speed AI answers.</p>
          <div class="zc-api-input-wrap">
            <input type="password" id="zc-api-key-input" class="zc-api-input" placeholder="gsk_...">
            <button class="zc-api-save-btn" id="zc-api-save-btn">Save</button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="zc-messages" id="zc-messages">
          <div class="zc-msg bot">
            <img src="logo-icon.png" class="zc-msg-avatar" alt="Zentrevo">
            <div class="zc-bubble">
              <p>Welcome to <strong>Zentrevo</strong>! I am your AI Travel Concierge.</p>
              <p>I can help you explore our luxury tour packages, visa services, destinations, and pricing. How may I assist your next journey?</p>
            </div>
          </div>
        </div>

        <!-- Quick Prompt Chips -->
        <div class="zc-quick-prompts" id="zc-chips">
          <button class="zc-chip" data-prompt="Tell me about the Maldives tour">🏖️ Maldives Escape</button>
          <button class="zc-chip" data-prompt="What visas do you assist with?">🛂 Visa Services</button>
          <button class="zc-chip" data-prompt="What are your popular tours and prices?">💰 Tour Pricing</button>
          <button class="zc-chip" data-prompt="Tell me about the East Africa Safari">🦁 Africa Safari</button>
          <button class="zc-chip" data-prompt="How can I book a customized trip?">💬 How to Book</button>
        </div>

        <!-- Input Bar -->
        <div class="zc-input-bar">
          <input type="text" id="zc-input" placeholder="Ask about tours, visas, destinations..." autocomplete="off">
          <button class="zc-send-btn" id="zc-send-btn" aria-label="Send Message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <div class="zc-footer-note">Powered by Groq Cloud · Ultra-fast Llama 3.3 AI</div>
      </div>
    `;

    document.body.appendChild(root);
    setupEvents();
  }

  // ── MARKDOWN FORMATTER ──
  function formatMarkdown(text) {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic *text*
    html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

    // Links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    // Bullet lists
    const lines = html.split('\\n');
    let inList = false;
    let result = '';

    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList) {
          result += '<ul>';
          inList = true;
        }
        result += `<li>${trimmed.substring(2)}</li>`;
      } else {
        if (inList) {
          result += '</ul>';
          inList = false;
        }
        if (trimmed.length > 0) {
          result += `<p>${trimmed}</p>`;
        }
      }
    }
    if (inList) result += '</ul>';
    return result;
  }

  // ── GROQ API CALL ──
  async function callGroqAPI(messages, apiKey) {
    const url = 'https://api.groq.com/openai/v1/chat/completions';
    const payload = {
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: ZENTREVO_SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.6,
      max_tokens: 650
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${res.status}: Failed to reach Groq API`);
    }

    const data = await res.json();
    return data.choices[0]?.message?.content || 'I apologize, but I could not generate a response. Please try again.';
  }

  // ── CHAT LOGIC & EVENTS ──
  function setupEvents() {
    const launcher = document.getElementById('zc-launcher');
    const win = document.getElementById('zc-window');
    const closeBtn = document.getElementById('zc-btn-close');
    const settingsBtn = document.getElementById('zc-btn-settings');
    const clearBtn = document.getElementById('zc-btn-clear');
    const settingsPanel = document.getElementById('zc-settings');
    const keyInput = document.getElementById('zc-api-key-input');
    const saveKeyBtn = document.getElementById('zc-api-save-btn');
    const apiStatus = document.getElementById('zc-api-status');
    const msgContainer = document.getElementById('zc-messages');
    const input = document.getElementById('zc-input');
    const sendBtn = document.getElementById('zc-send-btn');
    const chips = document.querySelectorAll('.zc-chip');

    let history = [];
    const DEFAULT_GROQ_API_KEY = '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';

    // Load saved API Key
    const savedKey = localStorage.getItem('zentrevo_groq_api_key') || DEFAULT_GROQ_API_KEY;
    if (savedKey) {
      keyInput.value = savedKey;
      apiStatus.textContent = 'Active Key ✓';
      apiStatus.style.color = '#25d366';
    }

    // Toggle Chat Window
    function toggleChat() {
      const isOpen = win.classList.toggle('active');
      launcher.classList.toggle('open', isOpen);
      if (isOpen) {
        setTimeout(() => input.focus(), 200);
      }
    }

    launcher.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Settings Toggle
    settingsBtn.addEventListener('click', () => {
      settingsPanel.classList.toggle('open');
    });

    // Save API Key
    saveKeyBtn.addEventListener('click', () => {
      const key = keyInput.value.trim();
      if (key) {
        localStorage.setItem('zentrevo_groq_api_key', key);
        apiStatus.textContent = 'Key Saved ✓';
        apiStatus.style.color = '#25d366';
        settingsPanel.classList.remove('open');
        appendMessage('bot', '✅ **Groq API Key Saved!** I am now powered by Groq Llama 3.3 for deep, real-time travel intelligence.');
      } else {
        localStorage.removeItem('zentrevo_groq_api_key');
        apiStatus.textContent = 'Free Knowledge';
        apiStatus.style.color = '#bf8a3d';
      }
    });

    // Clear Chat
    clearBtn.addEventListener('click', () => {
      history = [];
      msgContainer.innerHTML = `
        <div class="zc-msg bot">
          <img src="logo-icon.png" class="zc-msg-avatar" alt="Zentrevo">
          <div class="zc-bubble">
            <p>Chat cleared. How can I assist you with Zentrevo tours, visas, or destinations?</p>
          </div>
        </div>
      `;
    });

    // Append Message helper
    function appendMessage(role, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `zc-msg ${role}`;
      const avatarHTML = role === 'bot'
        ? `<img src="logo-icon.png" class="zc-msg-avatar" alt="Zentrevo">`
        : '';

      msgDiv.innerHTML = `
        ${avatarHTML}
        <div class="zc-bubble">${formatMarkdown(text)}</div>
      `;
      msgContainer.appendChild(msgDiv);
      msgContainer.scrollTop = msgContainer.scrollHeight;
      return msgDiv;
    }

    // Show Typing Indicator
    function showTyping() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'zc-msg bot zc-typing-wrap';
      typingDiv.id = 'zc-typing-indicator';
      typingDiv.innerHTML = `
        <img src="logo-icon.png" class="zc-msg-avatar" alt="Zentrevo">
        <div class="zc-bubble zc-typing">
          <div class="zc-typing-dot"></div>
          <div class="zc-typing-dot"></div>
          <div class="zc-typing-dot"></div>
        </div>
      `;
      msgContainer.appendChild(typingDiv);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    function removeTyping() {
      const el = document.getElementById('zc-typing-indicator');
      if (el) el.remove();
    }

    // Handle Send
    async function handleSend(customText) {
      const text = customText || input.value.trim();
      if (!text) return;

      appendMessage('user', text);
      if (!customText) input.value = '';
      sendBtn.disabled = true;
      input.disabled = true;

      showTyping();

      const apiKey = localStorage.getItem('zentrevo_groq_api_key') || DEFAULT_GROQ_API_KEY;

      try {
        if (apiKey && apiKey.startsWith('gsk_')) {
          // Call Groq API directly
          history.push({ role: 'user', content: text });
          const reply = await callGroqAPI(history, apiKey);
          history.push({ role: 'assistant', content: reply });
          removeTyping();
          appendMessage('bot', reply);
        } else {
          // Fast local knowledge assistant response
          await new Promise(r => setTimeout(r, 600));
          removeTyping();

          const localAnswer = getLocalResponse(text);
          if (localAnswer) {
            appendMessage('bot', localAnswer);
          } else {
            appendMessage('bot',
              `I can provide detailed information on all Zentrevo tours, visas, and destinations!\\n\\n` +
              `• For custom questions, you can update your free Groq API key in the ⚙️ settings above (generated at [console.groq.com/keys](https://console.groq.com/keys)).\\n` +
              `• Or chat directly with our travel specialists on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**!`
            );
          }
        }
      } catch (err) {
        removeTyping();
        const localAnswer = getLocalResponse(text);
        if (localAnswer) {
          appendMessage('bot', localAnswer);
        } else {
          appendMessage('bot',
            `⚠️ **Groq API:** ${err.message}.\\n\\n` +
            `You can enter an active free key in the ⚙️ settings above (free at [console.groq.com/keys](https://console.groq.com/keys)).\\n\\n` +
            `In the meantime, feel free to ask about Maldives, Safari, Japan, Bali, Visa services, or contact details!`
          );
        }
      } finally {
        sendBtn.disabled = false;
        input.disabled = false;
        input.focus();
      }
    }

    sendBtn.addEventListener('click', () => handleSend());
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });

    // Quick prompt chips
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt');
        handleSend(prompt);
      });
    });
  }

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
