/* ============ DATA ============ */
const services = [
  {icon:"btp", title:"SAP BTP Development", desc:"Custom cloud-native applications and extensions built on the SAP Business Technology Platform."},
  {icon:"cpi", title:"SAP CPI Development", desc:"Robust integration flows connecting SAP and non-SAP systems with SAP Cloud Platform Integration."},
  {icon:"suite", title:"SAP Integration Suite", desc:"End-to-end integration strategy, iFlow design and governance across your landscape."},
  {icon:"api", title:"SAP API Management", desc:"Design, secure and monetize APIs with full lifecycle governance and analytics."},
  {icon:"mesh", title:"SAP Event Mesh", desc:"Event-driven architecture for real-time, decoupled enterprise communication."},
  {icon:"process", title:"SAP Build Process Automation", desc:"Low-code workflows and RPA bots that eliminate manual, repetitive processes."},
  {icon:"apps", title:"SAP Build Apps", desc:"Rapid, low-code enterprise application development on SAP BTP."},
  {icon:"fiori", title:"SAP Fiori", desc:"Elegant, role-based user experiences across desktop and mobile."},
  {icon:"ai", title:"AI Automation", desc:"Intelligent agents and machine learning models embedded into core business processes."},
];

const industries = [
  {name:"Manufacturing", desc:"Connected shop floors and predictive supply chains."},
  {name:"Healthcare", desc:"Secure, compliant clinical and operational data flows."},
  {name:"Retail", desc:"Real-time inventory, order and omnichannel integration."},
  {name:"Logistics", desc:"End-to-end visibility across fleets and warehouses."},
  {name:"Banking", desc:"Resilient, auditable core-to-cloud financial integration."},
  {name:"Automotive", desc:"Integrated manufacturing, dealer and supplier networks."},
];

const whyCards = [
  {title:"SAP Experts", desc:"Certified architects with deep, hands-on SAP BTP and Integration Suite experience."},
  {title:"AI Driven", desc:"Every engagement is built with intelligent automation at its core, not bolted on after."},
  {title:"Enterprise Security", desc:"Zero-trust architecture, encrypted data flows and continuous compliance monitoring."},
  {title:"24/7 Support", desc:"Global support coverage keeping mission-critical integrations always online."},
];

const portfolio = [
  {tag:"Enterprise Integration", title:"Global Manufacturer — Unified SAP Landscape", desc:"Consolidated 14 regional SAP instances into a single BTP-governed integration layer."},
  {tag:"Cloud Migration", title:"Healthcare Network — Zero-Downtime BTP Migration", desc:"Migrated legacy PI/PO to SAP Integration Suite with no disruption to patient systems."},
  {tag:"Automation", title:"Retail Chain — Autonomous Order Orchestration", desc:"AI agents now manage 80% of exception handling across order-to-cash."},
  {tag:"Cloud Transformation", title:"Logistics Group — Real-Time Event Mesh", desc:"Rebuilt fleet and warehouse systems around an event-driven SAP architecture."},
];

const stack = ["SAP","Azure","AWS","OpenAI","Python","Java","Node.js","React","Next.js","Docker","Kubernetes","GitHub"];

const timeline = [
  {step:"Discovery", desc:"We map your current SAP landscape, integration points and automation opportunities."},
  {step:"Architecture", desc:"A governed, scalable blueprint spanning SAP BTP, APIs and AI automation layers."},
  {step:"Development", desc:"Agile delivery of integration flows, extensions and intelligent process automation."},
  {step:"Testing", desc:"Rigorous functional, load and security testing across every integration path."},
  {step:"Deployment", desc:"Zero-downtime go-live with full rollback and monitoring in place."},
  {step:"Support", desc:"24/7 managed operations, proactive monitoring and continuous optimization."},
];

const testimonials = [
  {quote:"Styuva rebuilt our entire SAP integration layer without a single hour of downtime. The AI-driven monitoring alone paid for the engagement.", name:"Head of IT Architecture", role:"Global Manufacturing Enterprise"},
  {quote:"Their SAP BTP expertise combined with real automation engineering is rare. Our exception handling dropped by 80% within a quarter.", name:"VP of Digital Operations", role:"Retail & Logistics Group"},
  {quote:"A true enterprise partner — Styuva's architecture team understood our compliance constraints from day one.", name:"CTO", role:"Regional Banking Institution"},
];

const faqs = [
  {q:"What SAP platforms does Styuva specialize in?", a:"We specialize in SAP BTP, SAP Integration Suite, SAP CPI, API Management, Event Mesh, Build Process Automation, Build Apps and SAP Fiori."},
  {q:"Can you migrate our existing SAP PI/PO landscape?", a:"Yes. We run zero-downtime migrations from SAP PI/PO to SAP Integration Suite, including full iFlow re-architecture and validation."},
  {q:"Do you support industries with strict compliance requirements?", a:"Our architecture is built around zero-trust security and continuous compliance monitoring, and we've delivered for healthcare, banking and manufacturing clients."},
  {q:"How does AI factor into your integration work?", a:"AI automation is embedded from the design phase — from intelligent exception handling to self-optimizing integration flows and monitoring agents."},
  {q:"What does a typical engagement timeline look like?", a:"Most engagements move from Discovery to production Deployment within 8–16 weeks, followed by ongoing 24/7 managed support."},
];

/* ============ ICONS ============ */
function icon(name){
  const icons = {
    btp:'<path d="M4 17V7l6-4 6 4v10l-6 4-6-4z"/><path d="M4 7l6 4 6-4M10 11v10"/>',
    cpi:'<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8 7l6 9M16 7l-6 9"/>',
    suite:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h3M8 16h6"/>',
    api:'<circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2L18 18M6 18l2.8-2.8M15.2 8.8L18 6"/>',
    mesh:'<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="12" cy="12" r="2.4"/><path d="M6.6 7.2L10 10.6M17.4 7.2L14 10.6M6.6 16.8L10 13.4M17.4 16.8L14 13.4"/>',
    process:'<path d="M4 7h11a3 3 0 010 6H9a3 3 0 000 6h11"/><path d="M12 4l3 3-3 3M15 17l-3 3 3 3" transform="translate(0,-3)"/>',
    apps:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    fiori:'<path d="M12 3l2.6 6.2L21 10l-5 4.4L17.4 21 12 17.6 6.6 21 8 14.4 3 10l6.4-.8z"/>',
    ai:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  };
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#89D5FF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${icons[name]||icons.ai}</svg>`;
}

/* ============ RENDER ============ */
function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

const servicesGrid = document.getElementById('servicesGrid');
services.forEach((s,i)=>{
  servicesGrid.appendChild(el(`
    <div class="glass-card p-7 tilt reveal reveal-delay-${(i%3)+1}">
      <div class="w-11 h-11 rounded-xl border border-[var(--border)] flex items-center justify-center mb-5 bg-[rgba(55,181,255,.06)]">${icon(s.icon)}</div>
      <h3 class="text-lg font-bold mb-2">${s.title}</h3>
      <p class="text-sm text-gray-custom leading-relaxed">${s.desc}</p>
    </div>
  `));
});

const industriesGrid = document.getElementById('industriesGrid');
industries.forEach((ind,i)=>{
  industriesGrid.appendChild(el(`
    <div class="glass-card p-6 reveal reveal-delay-${(i%3)+1}">
      <div class="text-xs font-mono text-accent mb-2">0${i+1}</div>
      <h3 class="font-bold mb-1.5">${ind.name}</h3>
      <p class="text-sm text-gray-custom leading-relaxed">${ind.desc}</p>
    </div>
  `));
});

const whyGrid = document.getElementById('whyGrid');
whyCards.forEach((w,i)=>{
  whyGrid.appendChild(el(`
    <div class="glass-card p-7 reveal reveal-delay-${i+1}">
      <div class="w-2 h-2 rounded-full bg-[var(--accent)] mb-5" style="box-shadow:0 0 12px 2px var(--accent)"></div>
      <h3 class="font-bold mb-2">${w.title}</h3>
      <p class="text-sm text-gray-custom leading-relaxed">${w.desc}</p>
    </div>
  `));
});

const portfolioGrid = document.getElementById('portfolioGrid');
portfolio.forEach((p,i)=>{
  portfolioGrid.appendChild(el(`
    <div class="glass-card p-8 reveal reveal-delay-${(i%2)+1}">
      <div class="eyebrow mb-4">${p.tag}</div>
      <h3 class="text-xl font-bold mb-3">${p.title}</h3>
      <p class="text-sm text-gray-custom leading-relaxed">${p.desc}</p>
    </div>
  `));
});

const stackGrid = document.getElementById('stackGrid');
stack.forEach((s,i)=>{
  stackGrid.appendChild(el(`
    <div class="glass-card py-6 flex items-center justify-center text-sm font-semibold text-gray-custom reveal reveal-delay-${(i%4)+1}">${s}</div>
  `));
});

const marqueeTrack = document.getElementById('marqueeTrack');
const marqueeItems = [...stack, ...stack];
marqueeItems.forEach(s=>{
  marqueeTrack.appendChild(el(`<div class="px-10 font-mono text-sm text-gray-custom whitespace-nowrap opacity-70">${s}</div>`));
});

const timelineItems = document.getElementById('timelineItems');
timeline.forEach((t,i)=>{
  timelineItems.appendChild(el(`
    <div class="relative reveal reveal-delay-${(i%4)+1}">
      <div class="absolute -left-10 top-1 w-3.5 h-3.5 rounded-full bg-[var(--accent)] timeline-dot"></div>
      <div class="text-xs font-mono text-accent mb-1">0${i+1}</div>
      <h3 class="text-xl font-bold mb-1.5">${t.step}</h3>
      <p class="text-gray-custom text-sm leading-relaxed max-w-md">${t.desc}</p>
    </div>
  `));
});

const testTrack = document.getElementById('testTrack');
const testDots = document.getElementById('testDots');
testimonials.forEach((t,i)=>{
  testTrack.appendChild(el(`
    <div class="test-slide px-2">
      <div class="glass-card p-10 text-center">
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" class="mx-auto mb-6 opacity-60"><path d="M0 20V10.6C0 4.2 4 .6 10 0v4.4C6.6 5 5 7 5 10h5v10H0zm16 0V10.6c0-6.4 4-10 10-10.6v4.4c-3.4.6-5 2.6-5 5.6h5v10H16z" fill="#89D5FF"/></svg>
        <p class="text-lg sm:text-xl leading-relaxed text-white/90 max-w-xl mx-auto">${t.quote}</p>
        <div class="mt-7">
          <div class="font-semibold">${t.name}</div>
          <div class="text-sm text-gray-custom">${t.role}</div>
        </div>
      </div>
    </div>
  `));
  testDots.appendChild(el(`<button class="w-2 h-2 rounded-full bg-[var(--border)] test-dot" data-i="${i}" aria-label="Testimonial ${i+1}"></button>`));
});

const faqList = document.getElementById('faqList');
faqs.forEach((f,i)=>{
  faqList.appendChild(el(`
    <div class="faq-item py-6 reveal reveal-delay-${(i%3)+1}">
      <button class="w-full flex items-center justify-between text-left gap-4 faq-toggle">
        <span class="font-semibold text-base sm:text-lg">${f.q}</span>
        <span class="faq-icon shrink-0 w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="#89D5FF" stroke-width="1.4" stroke-linecap="round"/></svg>
        </span>
      </button>
      <div class="faq-answer">
        <p class="text-gray-custom text-sm leading-relaxed pt-4 pr-10">${f.a}</p>
      </div>
    </div>
  `));
});

/* ============ INTERACTIONS ============ */

// navbar shrink
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{
  navbar.classList.toggle('shrink', window.scrollY > 40);
});

// mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobileMenu(){
  mobileMenu.classList.add('hidden'); mobileMenu.classList.remove('flex');
  menuBtn.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false');
  navbar.classList.remove('menu-open');
}
function toggleMobileMenu(){
  const willOpen = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', !willOpen);
  mobileMenu.classList.toggle('flex', willOpen);
  menuBtn.classList.toggle('open', willOpen);
  menuBtn.setAttribute('aria-expanded', String(willOpen));
  navbar.classList.toggle('menu-open', willOpen);
}
menuBtn.addEventListener('click', toggleMobileMenu);
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMobileMenu));

// mouse glow
const noiseGlow = document.getElementById('noiseGlow');
window.addEventListener('mousemove', (e)=>{
  noiseGlow.style.setProperty('--mx', e.clientX+'px');
  noiseGlow.style.setProperty('--my', e.clientY+'px');
});

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:.15});
revealEls.forEach(elx=>io.observe(elx));

// number counters
const counters = document.querySelectorAll('.stat-num');
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    counterIO.unobserve(entry.target);
    const target = parseFloat(entry.target.dataset.count);
    const suffix = entry.target.dataset.suffix || '';
    const isDecimal = String(target).includes('.');
    let start = 0;
    const duration = 1600;
    const t0 = performance.now();
    function tick(now){
      const p = Math.min((now - t0)/duration, 1);
      const eased = 1 - Math.pow(1-p, 3);
      const val = target * eased;
      entry.target.textContent = (isDecimal ? val.toFixed(2) : Math.round(val)) + suffix;
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}, {threshold:.5});
counters.forEach(c=>counterIO.observe(c));

// tilt cards
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    card.style.transform = `perspective(600px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
});

// button ripple
function ripple(e){
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  const d = Math.max(btn.clientWidth, btn.clientHeight);
  circle.style.width = circle.style.height = d+'px';
  const rect = btn.getBoundingClientRect();
  circle.style.left = (e.clientX - rect.left - d/2)+'px';
  circle.style.top = (e.clientY - rect.top - d/2)+'px';
  circle.classList.add('ripple');
  btn.appendChild(circle);
  setTimeout(()=>circle.remove(), 650);
  return true;
}

// faq accordion
document.querySelectorAll('.faq-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(other=>{
      other.classList.remove('open');
      other.querySelector('.faq-answer').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// testimonial slider
let testIndex = 0;
const dots = document.querySelectorAll('.test-dot');
function updateTest(){
  testTrack.style.transform = `translateX(-${testIndex*100}%)`;
  dots.forEach((d,i)=>{
    d.style.background = i===testIndex ? 'var(--accent)' : 'var(--border)';
    d.style.boxShadow = i===testIndex ? '0 0 10px 1px var(--accent)' : 'none';
  });
}
dots.forEach(d=>d.addEventListener('click', ()=>{ testIndex = parseInt(d.dataset.i); updateTest(); }));
updateTest();
setInterval(()=>{ testIndex = (testIndex+1) % testimonials.length; updateTest(); }, 5500);

// hero parallax
const heroViz = document.getElementById('heroViz');
window.addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - .5) * 14;
  const y = (e.clientY / window.innerHeight - .5) * 14;
  heroViz.style.transform = `translate(${x}px, ${y}px)`;
});

// contact form

const contactForm = document.getElementById("contactForm");
const contactFrame = document.getElementById("googleFormFrame");
const contactButton = document.getElementById("contactSubmitBtn");
const contactSubmitText = document.getElementById("contactSubmitText");
const contactSubmitIcon = document.getElementById("contactSubmitIcon");
const formNote = document.getElementById("formNote");

let contactSubmitting = false;

contactForm.addEventListener("submit", function (event) {

  if (contactSubmitting) {
    event.preventDefault();
    return;
  }

  contactSubmitting = true;

  // Keep browser's normal form POST to Google Forms.
  // The hidden iframe prevents leaving the Styuva website.

  contactButton.disabled = true;

  contactSubmitText.textContent = "Sending...";

  contactSubmitIcon.style.display = "none";

  formNote.textContent = "Sending your message...";
  formNote.classList.remove("text-red-400");
  formNote.classList.add("text-[#89D5FF]");

  // Google Forms submission normally completes inside the iframe.
  // Give the request enough time to reach Google.
  setTimeout(function () {

    contactSubmitText.textContent = "Message Sent ✓";

    formNote.textContent =
      "Thank you! Your message has been received. We'll get back to you soon.";

    formNote.classList.remove("text-[#89D5FF]");
    formNote.classList.add("text-[#89D5FF]");

    contactForm.reset();

    setTimeout(function () {

      contactSubmitting = false;

      contactButton.disabled = false;

      contactSubmitText.textContent = "Send Message";

      contactSubmitIcon.style.display = "block";

      formNote.textContent = "";

    }, 5000);

  }, 1500);

});