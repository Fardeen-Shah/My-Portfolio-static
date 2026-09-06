/* YOUR CONTENT LIVES HERE — update this one object to personalise the site. */
const portfolio = {
  name: "Fardeen Shah", role: "Designer & developer", email: "fardeen.shah.work@gmail.com",
  resumeUrl: "assets/resume.pdf", // Put your PDF at assets/resume.pdf, or replace this with your hosted PDF link.
  headline: "I make products, brands <i>&amp; experiences.</i>",
  intro: "I’m a multidisciplinary designer and developer creating thoughtful digital work for people with ideas worth sharing.",
  location: "Based in Dhaka, Bangladesh.<br />Working globally.",
  about: "I care about the quiet details that make digital work feel human. I pair clear thinking with a strong visual point of view, from first idea to final interaction.",
  availability: "Available for selected freelance projects",
  infoSummary: "I work with founders, agencies, and ambitious teams on brands, products, and digital experiences.",
  experience: [
    { period: "2024 — Now", role: "Independent designer & developer", place: "Working with global clients" },
    { period: "2022 — 2024", role: "Product / brand designer", place: "Add your company or studio" },
    { period: "2020 — 2022", role: "Creative designer", place: "Add your earlier experience" }
  ],
  projects: [
    { title: "Hearth", type: "Brand platform", year: "01", summary: "Building a warmer digital home for a new kind of hospitality.", url: "#", visual: "hearth" },
    { title: "Afterword", type: "Editorial experience", year: "02", summary: "An immersive reading space built around attention, not distraction.", url: "#", visual: "afterword" },
    { title: "Vela", type: "Product design", year: "03", summary: "Making financial decision-making feel clear and unhurried.", url: "#", visual: "vela" },
    { title: "Gather", type: "Identity & website", year: "04", summary: "A distinctly social presence for a neighbourhood dining club.", url: "#", visual: "gather" }
  ],
  services: ["Creative direction", "Digital product design", "Brand identities", "Responsive websites"],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fardeen-shah-" },
    { label: "GitHub", url: "https://github.com/Fardeen-Shah" }
  ]
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
document.title = `${portfolio.name} — ${portfolio.role}`;
document.querySelector('meta[name="description"]').content = `${portfolio.name}'s portfolio: ${portfolio.role}.`;
document.querySelector('meta[property="og:title"]').content = document.title;
$$('[data-name]').forEach(element => element.textContent = portfolio.name); $$('[data-role]').forEach(element => element.textContent = portfolio.role);
$$('[data-email]').forEach(element => element.href = `mailto:${portfolio.email}`); $('[data-headline]').innerHTML = portfolio.headline;
$$('[data-resume]').forEach(element => element.href = portfolio.resumeUrl);
$('[data-intro]').textContent = portfolio.intro; $('[data-location]').innerHTML = portfolio.location; $('[data-about]').textContent = portfolio.about;
$$('[data-availability]').forEach(element => element.textContent = portfolio.availability); $('[data-info-summary]').textContent = portfolio.infoSummary; $('[data-email-text]').textContent = portfolio.email;
$('[data-year]').textContent = new Date().getFullYear(); $('[data-work-year]').textContent = new Date().getFullYear();
$('[data-projects]').innerHTML = portfolio.projects.map((project, index) => `<article class="project reveal" style="--delay:${index * 70}ms"><a href="${project.url}" aria-label="View ${project.title} project"><div class="project-index">${project.year}</div><div class="project-copy"><p>${project.type}</p><h3>${project.title}</h3><span>${project.summary}</span></div><div class="project-art ${project.visual}" aria-hidden="true"><div class="art-inner"></div><b>${project.title.slice(0, 1)}</b></div><span class="project-arrow" aria-hidden="true">↗</span></a></article>`).join('');
$('[data-experience]').innerHTML = portfolio.experience.map(item => `<li><span>${item.period}</span><div><h3>${item.role}</h3><p>${item.place}</p></div><b aria-hidden="true">↗</b></li>`).join('');
$('[data-services]').innerHTML = portfolio.services.map((service, index) => `<li><span>0${index + 1}</span>${service}</li>`).join('');
$('[data-socials]').innerHTML = portfolio.socials.map(social => `<a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.label} <span aria-hidden="true">↗</span></a>`).join('');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) $$('.reveal').forEach(element => element.classList.add('visible')); else $$('.reveal').forEach(element => observer.observe(element));
$$('.nav-pill a').forEach(link => link.addEventListener('click', () => $$('.nav-pill a').forEach(item => item.classList.toggle('is-active', item === link))));
