/* ═══════════════════════════════════════════════════════════════════
   ZENTREVO AI TRAVEL CONCIERGE — POWERED BY GROQ API & KNOWLEDGE BASE
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
   - Paris Romance & Culture: 6 Days · 5 Nights — From $2,650/person (Luxury stay near Seine, skip-the-line Eiffel Tower, Louvre, Champagne river cruise, Versailles)
   - Maldives Overwater Escape: 7 Days · 6 Nights — From $3,290/person (Flights, Private Overwater Villa, Spa Credit)
   - East Africa Safari Trail: 10 Days · 9 Nights — From $4,150/person (4x4 Safari, Luxury Lodges, Serengeti & Masai Mara Guide)
   - Japan Heritage Journey: 8 Days · 7 Nights — From $2,980/person (Bullet Train, Ryokan Stay with Onsen, Tokyo & Kyoto)
   - Swiss Alps Retreat: 5 Days · 4 Nights — From $3,690/person (Luxury Chalet, Glacier Express, Jungfraujoch, Matterhorn views)
   - Santorini Honeymoon: 6 Days · 5 Nights — From $2,450/person (Cave Suite in Oia, Sunset Catamaran Cruise, Wine Tasting)
   - Dubai City & Desert Escape: 5 Days · 4 Nights — From $2,190/person (5-Star Hotel, Desert Safari, Burj Khalifa, Marina Yacht)
   - Bali Cultural Retreat: 6 Days · 5 Nights — From $1,890/person (Private Pool Villa, Ubud, Uluwatu, Nusa Penida)
   - Iceland Northern Lights Tour: 7 Days · 6 Nights — From $3,450/person (Aurora Hunt, Glacier Hike, Blue Lagoon)
   - Italian Grandeur (Rome, Florence & Amalfi): 8 Days · 7 Nights — From $3,150/person
   - Incredible India: Rajasthan Palaces (From $1,450), Kerala Backwaters (From $1,190), Ladakh Adventure (From $1,390)

3. Global Visa Assistance Services:
   - Types: Tourist Visa, Business Visa, Student Visa, Digital Nomad Visa, Family Visa, Transit Visa.
   - Destinations: USA, UK, Schengen Area (France, Switzerland, Germany, Italy, etc.), Canada, Australia, Japan, Dubai/UAE, Singapore.
   - Document checklist, application verification, appointment scheduling, and fast-track tracking.

Formatting instructions:
- Keep answers concise, inspiring, and structured with bold text and bullet points.
- Include starting prices, duration, and key inclusions.
- Invite the guest to message Zentrevo on WhatsApp (+91 8619928710) or book via the contact form.`;

  // ── BUILT-IN KNOWLEDGE ENGINE ──
  // Instant, richly formatted answers for all destinations, tours, and services
  function getLocalResponse(query) {
    const q = query.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|hola|namaste|good morning|good evening|good afternoon)/i.test(q)) {
      return "Hello and welcome to **Zentrevo**! ✨\n\nI am your personal AI Travel Concierge. I can help you explore:\n\n• **Luxury Tour Packages:** Paris, Swiss Alps, Maldives, Japan, Dubai, Bali, Safari, Iceland, Santorini, and more\n• **Global Visa Assistance:** Schengen, US, UK, Canada, Australia, Japan, and Dubai\n• **Custom Tailor-Made Itineraries:** Personalized 1:1 planning tailored to your exact dates, style, and budget\n\nWhat destination or journey are you dreaming of?";
    }

    // Paris / France
    if (q.includes('paris') || q.includes('france') || q.includes('eiffel') || q.includes('louvre')) {
      return "🗼 **Paris & French Romance Escape**\n\n• **Duration:** 6 Days · 5 Nights\n• **Starting Price:** From $2,650 / person\n• **Curated Inclusions:**\n  • Boutique 5-star hotel stay near the Seine & Champs-Élysées\n  • Skip-the-line Eiffel Tower summit access & private guided Louvre Museum tour\n  • Romantic sunset Champagne dinner cruise along the Seine River\n  • Day excursion to the Palace of Versailles & Montmartre artist quarter\n  • Complete Schengen Visa application & appointment assistance\n\nWould you like our specialists to customize this itinerary for your dates? [Book or Enquire Here](contact.html) or chat on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**!";
    }

    // Swiss Alps / Switzerland
    if (q.includes('swiss') || q.includes('switzerland') || q.includes('alps') || q.includes('zermatt') || q.includes('matterhorn')) {
      return "🏔️ **Swiss Alps Luxury Retreat**\n\n• **Duration:** 5 Days · 4 Nights\n• **Starting Price:** From $3,690 / person\n• **Curated Inclusions:**\n  • Panoramic First-Class Swiss Rail & Glacier Express passes\n  • Luxury 5-star mountain chalet stays in Zermatt & Interlaken with Matterhorn views\n  • Cable car excursion to Jungfraujoch (Top of Europe)\n  • Private alpine fondue dining experience & scenic guided glacier walk\n  • Schengen Visa documentation assistance included\n\nReady to book? Contact us on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** or submit your enquiry on our [Contact Page](contact.html).";
    }

    // Maldives
    if (q.includes('maldives') || q.includes('overwater')) {
      return "🏖️ **Maldives Overwater Escape**\n\n• **Duration:** 7 Days · 6 Nights\n• **Starting Price:** From $3,290 / person\n• **Curated Inclusions:**\n  • Round-trip scenic seaplane airport transfers\n  • Private overwater pool villa with direct lagoon access\n  • Daily breakfast & fine-dining credits included\n  • Complimentary couple's spa therapy & sunset dolphin cruise\n\nPerfect for honeymoons and milestone anniversaries. Chat with our specialist on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** to reserve!";
    }

    // Safari / Africa
    if (q.includes('safari') || q.includes('africa') || q.includes('serengeti') || q.includes('kenya') || q.includes('tanzania')) {
      return "🦁 **East Africa Safari Trail**\n\n• **Duration:** 10 Days · 9 Nights\n• **Starting Price:** From $4,150 / person\n• **Curated Inclusions:**\n  • Private 4x4 Land Cruiser safari drives across Serengeti & Masai Mara\n  • Handpicked luxury eco-safari lodges & tented camps under the stars\n  • Dedicated professional wildlife tracker & guide\n  • Sunrise hot air balloon safari with bush champagne breakfast\n\nConnect with our Africa experts on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** for custom dates.";
    }

    // Japan
    if (q.includes('japan') || q.includes('tokyo') || q.includes('kyoto') || q.includes('cherry blossom')) {
      return "⛩️ **Japan Heritage Journey**\n\n• **Duration:** 8 Days · 7 Nights\n• **Starting Price:** From $2,980 / person\n• **Curated Inclusions:**\n  • Unlimited 7-Day First-Class Shinkansen Bullet Train pass\n  • Authentic luxury Ryokan stay with private thermal Onsen in Hakone\n  • Guided cultural explorations of Tokyo, Kyoto (Fushimi Inari, Gion), and Nara\n  • Private traditional Japanese tea ceremony & culinary tastings\n  • Japan Tourist Visa application assistance\n\nInquire online via our [Contact Page](contact.html) or **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
    }

    // Dubai / UAE
    if (q.includes('dubai') || q.includes('uae') || q.includes('abu dhabi') || q.includes('burj')) {
      return "🏙️ **Dubai City & Desert Luxe Escape**\n\n• **Duration:** 5 Days · 4 Nights\n• **Starting Price:** From $2,190 / person\n• **Curated Inclusions:**\n  • 5-star luxury stay in Downtown Dubai or Palm Jumeirah\n  • Private VIP Desert Safari with dune bashing, sunset dinner & live shows\n  • Fast-track tickets to Burj Khalifa 'At The Top' & Museum of the Future\n  • Private luxury sunset yacht cruise departing Dubai Marina\n  • Express UAE Tourist Visa assistance included\n\nBook directly via **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**!";
    }

    // Bali / Indonesia
    if (q.includes('bali') || q.includes('indonesia') || q.includes('ubud')) {
      return "🌺 **Bali Cultural & Tropical Retreat**\n\n• **Duration:** 6 Days · 5 Nights\n• **Starting Price:** From $1,890 / person\n• **Curated Inclusions:**\n  • Private luxury pool villa stay in Ubud and beachfront resort in Seminyak\n  • Private guided day tour: Tegallalang Rice Terraces & Uluwatu cliff temple\n  • Speedboat day excursion to Nusa Penida (Kelingking Beach)\n  • Authentic Balinese spa therapy & floating breakfast experience\n\nChat with our team on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** to reserve.";
    }

    // Santorini / Greece
    if (q.includes('santorini') || q.includes('greece') || q.includes('athens')) {
      return "🇬🇷 **Santorini Honeymoon & Cyclades Escape**\n\n• **Duration:** 6 Days · 5 Nights\n• **Starting Price:** From $2,450 / person\n• **Curated Inclusions:**\n  • Cliffside cave suite in Oia with private outdoor Jacuzzi and Caldera views\n  • Semi-private sunset catamaran cruise with Greek BBQ and open bar\n  • Private volcanic vineyard tour with sommelier wine tasting\n  • Schengen Visa document verification\n\nInquire at our [Contact Page](contact.html) or **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
    }

    // Iceland
    if (q.includes('iceland') || q.includes('aurora') || q.includes('northern lights')) {
      return "🌌 **Iceland Northern Lights & Glaciers**\n\n• **Duration:** 7 Days · 6 Nights\n• **Starting Price:** From $3,450 / person\n• **Curated Inclusions:**\n  • Guided Northern Lights (Aurora Borealis) night hunts with pro photographer\n  • Premium admission to the Blue Lagoon & Sky Lagoon geothermal spas\n  • Golden Circle: Gullfoss Waterfall, Geysir, and Thingvellir National Park\n  • Certified glacier hike and crystalline ice cave exploration\n\nConnect on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** for departure dates!";
    }

    // Italy / Rome
    if (q.includes('italy') || q.includes('rome') || q.includes('amalfi') || q.includes('florence') || q.includes('venice')) {
      return "🇮🇹 **Italian Grandeur: Rome, Florence & Amalfi Coast**\n\n• **Duration:** 8 Days · 7 Nights\n• **Starting Price:** From $3,150 / person\n• **Curated Inclusions:**\n  • VIP skip-the-line Colosseum, Roman Forum & Vatican Museums tour\n  • High-speed Frecciarossa rail between Rome and Florence\n  • Private boat charter along the Amalfi Coast (Positano & Capri)\n  • Tuscan winery cellar tour with olive oil and pasta masterclass\n\nReach our European specialists on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
    }

    // India
    if (q.includes('india') || q.includes('rajasthan') || q.includes('kerala') || q.includes('goa') || q.includes('ladakh') || q.includes('taj mahal')) {
      return "🇮🇳 **Incredible India Luxury Bespoke Tours**\n\n• **Rajasthan Royal Palaces (7D/6N):** Jaipur, Udaipur, and Jodhpur heritage palace stays — From $1,450/person\n• **Kerala Backwaters & Hills (6D/5N):** Private luxury houseboat & Munnar tea plantations — From $1,190/person\n• **Ladakh High-Pass Expedition (7D/6N):** Pangong Lake & Nubra Valley luxury glamping — From $1,390/person\n• **Goa Coastal Serenity (5D/4N):** Private heritage beach villa & sunset yachting — From $990/person\n• **Golden Triangle (6D/5N):** Delhi, Agra (Taj Mahal sunrise), and Jaipur.\n\nCustomize your India journey on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
    }

    // Visa services
    if (q.includes('visa') || q.includes('passport') || q.includes('document') || q.includes('embassy')) {
      return "🛂 **Zentrevo Global Visa Assistance Services**\n\nWe provide end-to-end visa consulting and processing:\n• **Supported Types:** Tourist, Business, Student, Digital Nomad, Transit, and Family Visas\n• **Top Destinations:** Schengen Area (Europe), USA (B1/B2), UK, Canada, Australia, New Zealand, Japan, Dubai/UAE, Singapore\n• **Our Assistance Includes:**\n  • 1:1 personalized document checklist and financial review\n  • Fast-track appointment booking\n  • Cover letter drafting and itinerary verification\n  • Mock visa interview preparation\n\nNeed visa assistance? Fill out our [Contact Page](contact.html) or message on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)**.";
    }

    // Pricing / cost / packages overview
    if (q.includes('price') || q.includes('cost') || q.includes('package') || q.includes('rate') || q.includes('budget')) {
      return "✨ **Zentrevo Handcrafted Tour Packages & Starting Rates:**\n\n• **Bali Cultural Retreat:** From $1,890 / person (6D · 5N)\n• **Dubai City & Desert:** From $2,190 / person (5D · 4N)\n• **Santorini Honeymoon:** From $2,450 / person (6D · 5N)\n• **Paris Romance & Culture:** From $2,650 / person (6D · 5N)\n• **Japan Heritage Journey:** From $2,980 / person (8D · 7N)\n• **Italian Grandeur:** From $3,150 / person (8D · 7N)\n• **Maldives Overwater Escape:** From $3,290 / person (7D · 6N)\n• **Iceland Northern Lights:** From $3,450 / person (7D · 6N)\n• **Swiss Alps Luxury:** From $3,690 / person (5D · 4N)\n• **East Africa Safari:** From $4,150 / person (10D · 9N)\n\n*All packages include premium accommodations, private transfers, curated experiences, and 24/7 concierge.*";
    }

    // Contact / booking / whatsapp / phone / email
    if (q.includes('contact') || q.includes('book') || q.includes('phone') || q.includes('whatsapp') || q.includes('email') || q.includes('call')) {
      return "📞 **Get In Touch With Zentrevo Travel Specialists:**\n\n• **WhatsApp (Instant):** [+91 8619928710](https://wa.me/918619928710)\n• **Email:** [zentrevo.official@outlook.com](mailto:zentrevo.official@outlook.com)\n• **Working Hours:** Mon–Sat: 9 AM – 8 PM IST\n• **Online Booking Form:** [Plan Your Trip Here](contact.html)\n\nShare your desired dates, group size, and destination — our specialists craft your personalized itinerary within 24 hours!";
    }

    // Custom tours / tailor made
    if (q.includes('custom') || q.includes('tailor') || q.includes('itinerary') || q.includes('group') || q.includes('family') || q.includes('honeymoon')) {
      return "✨ **Bespoke Tailor-Made Itineraries**\n\nEvery journey with Zentrevo can be customized to match your preferences:\n• Flexible travel dates and preferred flight routes\n• Handpicked 5-star boutique hotels, chalets, or overwater villas\n• Private chauffeurs and dedicated local expert guides\n• Special requests (anniversaries, honeymoons, private dining, yacht charters)\n\nTell us your travel vision on our [Contact Page](contact.html) or WhatsApp our senior planner at **[+91 8619928710](https://wa.me/918619928710)**.";
    }

    // Comprehensive Fallback
    return "Thank you for asking! Zentrevo crafts bespoke luxury journeys worldwide, complete with 5-star stays, private guides, flight coordination, and visa processing.\n\n• **Popular Tours:** Paris, Swiss Alps, Maldives, East Africa Safari, Japan, Bali, Dubai, Santorini, and Iceland.\n• **Visas:** Schengen, USA, UK, Canada, Australia, Japan, Dubai.\n• **Personalized Quote:** Share your dates and destination with our team on **WhatsApp: [+91 8619928710](https://wa.me/918619928710)** or submit your enquiry at our [Contact Page](contact.html).\n\n*(You can also connect your free Groq AI key in ⚙ Settings above for unlimited live reasoning.)*";
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
            <span id="zc-api-status" style="font-size:0.68rem;color:#bf8a3d">Built-in Knowledge</span>
          </div>
          <p>Instant Zentrevo tour & visa intelligence is built-in. To unlock live open-ended AI conversation, paste your free key from <a href="https://console.groq.com/keys" target="_blank" rel="noopener">console.groq.com/keys</a>.</p>
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
          <button class="zc-chip" data-prompt="Tell me about the Paris trip">🗼 Paris Escape</button>
          <button class="zc-chip" data-prompt="Tell me about the Maldives tour">🏖️ Maldives Escape</button>
          <button class="zc-chip" data-prompt="What visas do you assist with?">🛂 Visa Services</button>
          <button class="zc-chip" data-prompt="What are your popular tours and prices?">💰 Tour Pricing</button>
          <button class="zc-chip" data-prompt="Tell me about the Swiss Alps tour">🏔️ Swiss Alps</button>
          <button class="zc-chip" data-prompt="How can I book a customized trip?">💬 How to Book</button>
        </div>

        <!-- Input Bar -->
        <div class="zc-input-bar">
          <input type="text" id="zc-input" placeholder="Ask about Paris, Maldives, visas, pricing..." autocomplete="off">
          <button class="zc-send-btn" id="zc-send-btn" aria-label="Send Message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <div class="zc-footer-note">Powered by Groq Cloud & Zentrevo Knowledge Engine</div>
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

    // Multi-line and bullet lists
    const lines = html.replace(/\\n/g, '\n').split('\n');
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

    // Check saved API Key
    const savedKey = (localStorage.getItem('zentrevo_groq_api_key') || '').trim();
    if (savedKey && savedKey.startsWith('gsk_')) {
      keyInput.value = savedKey;
      apiStatus.textContent = 'Active Key ✓';
      apiStatus.style.color = '#25d366';
    } else {
      apiStatus.textContent = 'Built-in Knowledge';
      apiStatus.style.color = '#bf8a3d';
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
      if (key && key.startsWith('gsk_')) {
        localStorage.setItem('zentrevo_groq_api_key', key);
        apiStatus.textContent = 'Key Saved ✓';
        apiStatus.style.color = '#25d366';
        settingsPanel.classList.remove('open');
        appendMessage('bot', '✅ **Groq API Key Saved!** Real-time Llama 3.3 AI reasoning is now active for all your queries.');
      } else {
        localStorage.removeItem('zentrevo_groq_api_key');
        apiStatus.textContent = 'Built-in Knowledge';
        apiStatus.style.color = '#bf8a3d';
        settingsPanel.classList.remove('open');
        appendMessage('bot', 'ℹ️ **Using Built-in Zentrevo Travel Intelligence.** Instant knowledge for all tour packages, visas, and destinations is active.');
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

      const apiKey = (localStorage.getItem('zentrevo_groq_api_key') || '').trim();

      try {
        if (apiKey && apiKey.startsWith('gsk_')) {
          // Attempt Groq API call
          history.push({ role: 'user', content: text });
          const reply = await callGroqAPI(history, apiKey);
          history.push({ role: 'assistant', content: reply });
          removeTyping();
          appendMessage('bot', reply);
        } else {
          // Instant Built-in Knowledge Engine
          await new Promise(r => setTimeout(r, 350));
          removeTyping();
          const localAnswer = getLocalResponse(text);
          appendMessage('bot', localAnswer);
        }
      } catch (err) {
        removeTyping();
        console.warn('Groq call error, falling back to local intelligence:', err);
        // Seamless fallback to local intelligence so user never faces an error screen
        const localAnswer = getLocalResponse(text);
        appendMessage('bot', localAnswer);
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
