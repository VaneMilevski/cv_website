'use strict';
/**
 * script.js — reads from data.js and builds the whole page.
 * You do NOT need to edit this file. Edit data.js instead.
 */

// ==========================================
// HELPERS
// ==========================================
function el(id)      { return document.getElementById(id); }
function esc(str)    { // prevent XSS from data.js content
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}
function icon(name)  { return `<i class="fas fa-${name}"></i>`; }
function tag(text)   { return `<span class="tag">${esc(text)}</span>`; }

// ==========================================
// RENDER — run first, before any events
// ==========================================
function renderCV() {
  const d = CV;

  /* ── Browser tab title ── */
  document.title = `${d.name} — CV & Portfolio`;

  /* ── Meta description ── */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', `Professional CV and portfolio of ${d.name}`);

  /* ── Nav logo ── */
  el('nav-logo').innerHTML = `${esc(d.initials)}<span class="accent">.</span>`;

  /* ── Hero ── */
  el('hero-name').innerHTML    = buildName(d.name);
  el('hero-description').textContent = d.heroDescription;
  el('hero-location').innerHTML      = `Based in <span class="accent">${esc(d.location)}</span>`;

  /* ── Hero social links ── */
  el('hero-social').innerHTML = buildSocialLinks(d.social, d.email, 'social-link');

  /* ── About badge ── */
  el('available-badge').style.display = d.available ? 'flex' : 'none';

  /* ── About bio ── */
  el('about-bio').innerHTML = d.bio
    .map(p => `<p class="about-text">${esc(p)}</p>`)
    .join('');

  /* ── About info ── */
  el('about-location').textContent       = d.location;
  el('about-email').textContent          = d.email;
  el('about-email').href                 = `mailto:${d.email}`;
  el('about-phone').textContent          = d.phone;
  el('about-languages-info').textContent = d.languages_info;

  /* ── Stats ── */
  el('about-stats').innerHTML = d.stats
    .map(s => `
      <div class="stat-item">
        <span class="stat-number">${esc(s.number)}</span>
        <span class="stat-label">${esc(s.label)}</span>
      </div>`)
    .join('');

  /* ── Experience timeline ── */
  el('timeline-container').innerHTML = d.experience.map(buildJobCard).join('');

  /* ── Technical skills ── */
  el('technical-skills').innerHTML = d.technicalSkills.map(buildBar).join('');

  /* ── Soft skills ── */
  el('soft-skills').innerHTML = d.softSkills.map(buildBar).join('');

  /* ── Tools ── */
  el('tools-tags').innerHTML = d.tools
    .map(t => `<span class="skill-tag">${esc(t)}</span>`)
    .join('');

  /* ── Spoken languages ── */
  el('spoken-languages').innerHTML = d.spokenLanguages.map(buildLanguageRow).join('');

  /* ── Education ── */
  el('education-grid').innerHTML = d.education.map(buildEduCard).join('');

  /* ── Projects ── */
  const projectSection = el('projects-section');
  if (!d.projects || d.projects.length === 0) {
    if (projectSection) projectSection.style.display = 'none';
  } else {
    el('projects-grid').innerHTML = d.projects.map(buildProjectCard).join('');
  }

  /* ── Contact details ── */
  el('contact-email').href             = `mailto:${d.email}`;
  el('contact-email-value').textContent = d.email;
  el('contact-phone').href             = `tel:${d.phone.replace(/\s/g, '')}`;
  el('contact-phone-value').textContent = d.phone;
  el('contact-location').textContent   = d.location;
  el('contact-social').innerHTML       = buildSocialLinks(d.social, d.email, 'social-btn');

  /* ── Footer ── */
  el('footer-name').innerHTML  = buildName(d.name);
  el('footer-tagline').textContent = d.footerTagline;

  /* ── Typing titles ── */
  window._typingTitles = d.typingTitles;
}

/* ── Splits the last word and wraps it in .accent ── */
function buildName(name) {
  const parts = name.trim().split(' ');
  const last  = parts.pop();
  return `${parts.map(esc).join(' ')} <span class="accent">${esc(last)}</span>`;
}

function buildSocialLinks(social, email, cls) {
  const links = [];
  if (social.linkedin) links.push(`<a href="${esc(social.linkedin)}" class="${cls}" title="LinkedIn" target="_blank" rel="noopener"><i class="fab fa-linkedin-in"></i>${cls === 'social-btn' ? ' LinkedIn' : ''}</a>`);
  if (social.xing)     links.push(`<a href="${esc(social.xing)}"     class="${cls}" title="XING"     target="_blank" rel="noopener"><i class="fab fa-xing"></i>${cls === 'social-btn' ? ' XING' : ''}</a>`);
  if (social.github)   links.push(`<a href="${esc(social.github)}"   class="${cls}" title="GitHub"   target="_blank" rel="noopener"><i class="fab fa-github"></i>${cls === 'social-btn' ? ' GitHub' : ''}</a>`);
  if (social.twitter)  links.push(`<a href="${esc(social.twitter)}"  class="${cls}" title="Twitter"  target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i>${cls === 'social-btn' ? ' Twitter' : ''}</a>`);
  if (email)           links.push(`<a href="mailto:${esc(email)}"    class="${cls}" title="Email"><i class="fas fa-envelope"></i>${cls === 'social-btn' ? ' Email' : ''}</a>`);
  return links.join('');
}

function buildBar(skill) {
  return `
    <div class="skill-bar-item">
      <div class="skill-bar-label">
        <span>${esc(skill.name)}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-width="${skill.level}"></div>
      </div>
    </div>`;
}

function buildLanguageRow(lang) {
  let dots = '';
  for (let i = 1; i <= 5; i++) {
    dots += `<span class="dot${i <= lang.dots ? ' filled' : ''}"></span>`;
  }
  return `
    <div class="language-item">
      <span class="language-name">${esc(lang.name)}</span>
      <div class="language-dots">${dots}</div>
      <span class="language-level">${esc(lang.level)}</span>
    </div>`;
}

function buildJobCard(job) {
  const bullets = job.bullets
    .map(b => `<li>${esc(b)}</li>`)
    .join('');
  const tags = job.tags.map(tag).join('');
  const badge = job.current
    ? `<span class="timeline-badge current">Current</span>` : '';

  return `
    <div class="timeline-item fade-in">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-title-group">
            <h3 class="timeline-role">${esc(job.role)}</h3>
            <p class="timeline-company">${icon('building')} ${esc(job.company)}</p>
          </div>
          <div class="timeline-meta">
            <span class="timeline-period">${icon('calendar-alt')} ${esc(job.period)}</span>
            <span class="timeline-location">${icon('map-marker-alt')} ${esc(job.location)}</span>
            ${badge}
          </div>
        </div>
        <ul class="timeline-bullets">${bullets}</ul>
        <div class="timeline-tags">${tags}</div>
      </div>
    </div>`;
}

function buildEduCard(edu) {
  const iconMap = {
    '':      { fa: 'graduation-cap', cls: ''      },
    'cert':  { fa: 'certificate',    cls: 'cert'  },
    'cert2': { fa: 'medal',          cls: 'cert2' },
  };
  const ic = iconMap[edu.iconClass] || iconMap[''];

  return `
    <div class="edu-card fade-in">
      <div class="edu-icon ${ic.cls}"><i class="fas fa-${ic.fa}"></i></div>
      <span class="edu-type">${esc(edu.type)}</span>
      <h3 class="edu-title">${esc(edu.title)}</h3>
      <p class="edu-institution">${icon('university')} ${esc(edu.institution)}</p>
      <p class="edu-period">${icon('calendar-alt')} ${esc(edu.period)}</p>
      <p class="edu-description">${esc(edu.description)}</p>
    </div>`;
}

function buildProjectCard(proj) {
  const links = [
    proj.demo ? `<a href="${esc(proj.demo)}" class="project-link" title="Live Demo" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i></a>` : '',
    proj.code ? `<a href="${esc(proj.code)}" class="project-link" title="Source Code" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>` : '',
  ].join('');

  return `
    <div class="project-card fade-in">
      <div class="project-header">
        <div class="project-icon"><i class="fas fa-${esc(proj.icon)}"></i></div>
        <div class="project-links">${links}</div>
      </div>
      <h3 class="project-title">${esc(proj.title)}</h3>
      <p class="project-description">${esc(proj.description)}</p>
      <div class="project-tags">${proj.tags.map(tag).join('')}</div>
    </div>`;
}


// ==========================================
// THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIconEl    = document.getElementById('theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIconEl.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

themeToggleBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');


// ==========================================
// NAVBAR — scroll effect + active link
// ==========================================
const navbar      = document.getElementById('navbar');
const allSections = document.querySelectorAll('section[id]');
const navLinks    = document.querySelectorAll('.nav-links a:not(.nav-btn)');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let current = '';
  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });


// ==========================================
// HAMBURGER mobile menu
// ==========================================
const hamburger    = document.getElementById('hamburger');
const navLinksList = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// ==========================================
// TYPING ANIMATION — hero subtitle
// ==========================================
const typedEl = document.getElementById('typed-text');

function startTyping() {
  const titles = (typeof CV !== 'undefined' && CV.typingTitles && CV.typingTitles.length)
    ? CV.typingTitles
    : ['Professional'];
  let titleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = titles[titleIndex];
    typedEl.textContent = deleting
      ? current.slice(0, charIndex - 1)
      : current.slice(0, charIndex + 1);

    deleting ? charIndex-- : charIndex++;

    let delay = deleting ? 45 : 75;
    if (!deleting && charIndex === current.length) { delay = 2200; deleting = true; }
    else if (deleting && charIndex === 0)          { deleting = false; titleIndex = (titleIndex + 1) % titles.length; delay = 350; }

    setTimeout(tick, delay);
  }
  tick();
}


// ==========================================
// INTERSECTION OBSERVER — fade-in on scroll
// ==========================================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


// ==========================================
// SKILL BARS — animate width on scroll
// ==========================================
function observeSkillBars() {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.skill-bar-fill').forEach(bar => skillObserver.observe(bar));
}


// ==========================================
// STATS COUNTER — animated number count-up
// ==========================================
function animateCounter(el) {
  const text   = el.textContent;
  const suffix = text.replace(/[0-9]/g, '');
  const target = parseInt(text, 10);
  const step   = Math.ceil(target / (1400 / 16));
  let current  = 0;
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });


// ==========================================
// CONTACT FORM — Formspree
// ==========================================
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn  = form.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;
  btn.innerHTML = '<span>Sending…</span> <i class="fas fa-spinner fa-spin"></i>';
  btn.disabled  = true;

  const data = Object.fromEntries(new FormData(form));
  try {
    const res = await fetch('https://formspree.io/f/xojbzrwv', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(data),
    });
    if (res.ok) {
      btn.innerHTML        = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
      btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      form.reset();
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
    } else {
      btn.innerHTML = '<span>Failed — please try again</span> <i class="fas fa-times"></i>';
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3000);
    }
  } catch {
    btn.innerHTML = '<span>Network error — try again</span> <i class="fas fa-times"></i>';
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3000);
  }
});


// ==========================================
// SMOOTH SCROLL polyfill
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});


// ==========================================
// FOOTER YEAR
// ==========================================
el('footer-year').textContent = new Date().getFullYear();


// ==========================================
// BOOT — render first, then observe
// ==========================================
renderCV();
startTyping();
observeSkillBars();
document.querySelectorAll('.stat-number').forEach(e => statObserver.observe(e));
document.querySelectorAll('.fade-in').forEach(e => fadeObserver.observe(e));
