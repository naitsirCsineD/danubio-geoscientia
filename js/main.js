const t={es:{navHome:'Inicio',navAbout:'Nosotros',navSpecialized:'Servicios especializados',navIntegral:'Servicios integrales',navTechnology:'Tecnología',navTeam:'Equipo',navContact:'Contacto',heroEyebrow:'GEOLOGÍA · INGENIERÍA DE MINAS · TECNOLOGÍA',tagline:'Desde el terreno hasta el informe técnico.',heroIntro:'Danubio Geoscientia ofrece soluciones especializadas e integrales para la exploración, evaluación y desarrollo de proyectos mineros, integrando conocimiento geológico, ingeniería, geoestadística y tecnologías avanzadas para apoyar la toma de decisiones.',exploreServices:'Explorar nuestros servicios',requestProposal:'Solicitar una propuesta técnica',aboutEyebrow:'Quiénes somos',aboutTitle:'Conocimiento integrado para resolver desafíos mineros',aboutLead:'Danubio Geoscientia integra disciplinas técnicas y tecnología aplicada para acompañar proyectos mineros desde la obtención de información en terreno hasta la presentación de resultados técnicos.',aboutText:'Trabajamos con enfoque multidisciplinario, criterios profesionales independientes y trazabilidad documental, adaptando el alcance a las necesidades y al estado de desarrollo de cada proyecto.',principle1Title:'Integración multidisciplinaria',principle1Text:'Coordinación entre geología, ingeniería, datos y estudios especializados.',principle2Title:'Rigurosidad y trazabilidad',principle2Text:'Procesos documentados y validación de la información en cada etapa.',principle3Title:'Criterio independiente',principle3Text:'Análisis técnico transparente, confidencial y orientado al proyecto.',principle4Title:'Innovación aplicada',principle4Text:'Herramientas digitales y automatización con sentido técnico práctico.',specializedEyebrow:'Servicios especializados',specializedTitle:'Microservicios técnicos independientes',specializedIntro:'Contrate una disciplina específica o combine distintos servicios según la necesidad de su proyecto.',integralEyebrow:'Servicio integral',integralTitle:'Gestión integral de proyectos e informes técnicos NI 43-101',integralIntro:'Danubio actúa como interlocutor central para gestionar y coordinar las disciplinas necesarias desde el diagnóstico hasta la elaboración del informe técnico. El alcance se adapta al estado de desarrollo del proyecto.',qpNote:'La revisión, responsabilidad profesional, independencia y firma de los informes técnicos estarán sujetas a los requisitos regulatorios aplicables y a la participación efectiva de profesionales debidamente calificados.',technologyEyebrow:'Tecnología e innovación',technologyTitle:'Datos técnicos convertidos en herramientas de decisión',technologyText:'Automatización, ciencia de datos, machine learning, sistemas GIS y desarrollo de aplicaciones pueden integrarse a los procesos geológicos y mineros sin perder la trazabilidad ni el control técnico.',tech1:'Integración de sistemas GIS',tech2:'Dashboards y visualización de datos',tech3:'Automatización de procesos e informes',tech4:'Modelos de datos y ciencia de datos',teamTitle:'Equipo profesional',viewProfile:'Ver perfil profesional',skipContent:'Ir al contenido',menuLabel:'Menú',navLabel:'Navegación principal',contactEyebrow:'Contacto comercial',contactTitle:'Conversemos sobre su proyecto',contactText:'Indíquenos el alcance requerido y prepararemos una solicitud técnica inicial para su revisión.',contactUnavailable:'Correo corporativo por configurar',nameLabel:'Nombre *',companyLabel:'Empresa',emailLabel:'Correo electrónico *',phoneLabel:'Teléfono',countryLabel:'País',projectLabel:'Nombre del proyecto',servicesLabel:'Servicios requeridos',needLabel:'Descripción de la necesidad *',prepareRequest:'Preparar solicitud por correo',mailDisclaimer:'Esta versión genera una solicitud mediante su aplicación de correo. No se simula ni almacena el envío del formulario.',footerText:'Consultoría técnica para exploración y desarrollo de proyectos mineros.',knowMore:'Conocer más',activities:'Actividades específicas',deliverables:'Entregables potenciales',requestQuote:'Solicitar cotización',mailConfiguredError:'Para enviar la solicitud se debe configurar una dirección corporativa válida en data/company.json y posteriormente integrar el enlace.',processPrefix:'Etapa'},en:{navHome:'Home',navAbout:'About',navSpecialized:'Specialized Services',navIntegral:'Integrated Services',navTechnology:'Technology',navTeam:'Team',navContact:'Contact',heroEyebrow:'GEOLOGY · MINING ENGINEERING · TECHNOLOGY',tagline:'From fieldwork to technical reporting.',heroIntro:'Danubio Geoscientia provides specialized and integrated solutions for mineral exploration, evaluation and development, combining geological knowledge, engineering, geostatistics and advanced technologies to support decision-making.',exploreServices:'Explore our services',requestProposal:'Request a technical proposal',aboutEyebrow:'About us',aboutTitle:'Integrated knowledge to address mining challenges',aboutLead:'Danubio Geoscientia integrates technical disciplines and applied technology to support mining projects from field information acquisition to technical results delivery.',aboutText:'We work with a multidisciplinary approach, independent professional judgment and documented traceability, adapting the scope to the needs and development stage of each project.',principle1Title:'Multidisciplinary integration',principle1Text:'Coordination across geology, engineering, data and specialist studies.',principle2Title:'Rigor and traceability',principle2Text:'Documented processes and information validation at every stage.',principle3Title:'Independent judgment',principle3Text:'Transparent, confidential technical analysis focused on the project.',principle4Title:'Applied innovation',principle4Text:'Digital tools and automation with practical technical purpose.',specializedEyebrow:'Specialized services',specializedTitle:'Independent technical microservices',specializedIntro:'Contract a specific discipline or combine services according to the needs of your project.',integralEyebrow:'Integrated service',integralTitle:'Integrated Project Management and NI 43-101 Technical Reports',integralIntro:'Danubio acts as a central interface to manage and coordinate the disciplines required from initial diagnosis to technical report preparation. Scope is adapted to the project development stage.',qpNote:'Technical report review, professional responsibility, independence and signing remain subject to applicable regulatory requirements and effective participation by duly qualified professionals.',technologyEyebrow:'Technology and innovation',technologyTitle:'Technical data transformed into decision-making tools',technologyText:'Automation, data science, machine learning, GIS systems and application development can be integrated into geological and mining processes without losing traceability or technical control.',tech1:'GIS system integration',tech2:'Dashboards and data visualization',tech3:'Process and report automation',tech4:'Data models and data science',teamTitle:'Professional Team',viewProfile:'View professional profile',skipContent:'Skip to content',menuLabel:'Menu',navLabel:'Main navigation',contactEyebrow:'Commercial contact',contactTitle:'Let us discuss your project',contactText:'Tell us the required scope and we will prepare an initial technical request for your review.',contactUnavailable:'Corporate email to be configured',nameLabel:'Name *',companyLabel:'Company',emailLabel:'Email address *',phoneLabel:'Phone',countryLabel:'Country',projectLabel:'Project name',servicesLabel:'Required services',needLabel:'Description of need *',prepareRequest:'Prepare email request',mailDisclaimer:'This version prepares a request through your email application. It does not simulate or store form submission.',footerText:'Technical consulting for mining project exploration and development.',knowMore:'Learn more',activities:'Specific activities',deliverables:'Potential deliverables',requestQuote:'Request a quotation',mailConfiguredError:'A valid corporate address must be configured in data/company.json and the email integration completed before sending.',processPrefix:'Stage'}};
const profileId = document.body.dataset.profile;
const teamSource = profileId ? '../data/team.json' : 'data/team.json';
let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es';
let services = [];
let profiles = [];
const processEs=['Diagnóstico inicial del proyecto','Evaluación de información histórica','Planificación de trabajos de exploración','Ejecución y supervisión de trabajos de terreno','Muestreo y gestión de muestras','Coordinación de análisis de laboratorio','Aseguramiento y control de calidad','Validación de bases de datos','Modelamiento geológico','Estimación y clasificación de recursos minerales','Estudios mineros, metalúrgicos y económicos, según corresponda','Elaboración del informe técnico','Coordinación de revisión y firma por Qualified Persons'];const processEn=['Initial project diagnosis','Historical information assessment','Exploration work planning','Field work execution and supervision','Sampling and sample management','Laboratory analysis coordination','Quality assurance and quality control','Database validation','Geological modeling','Mineral resource estimation and classification','Mining, metallurgical and economic studies, as applicable','Technical report preparation','Qualified Person review and signature coordination'];
async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error('Unable to load ' + path);
  return response.json();
}

async function loadTeam() {
  try {
    ({ profiles = [] } = await loadJSON(teamSource));
    if (profileId) {
      const profile = profiles.find(item => item.id === profileId);
      if (!profile) return;
      loadPortrait(document.querySelector('.profile-portrait'), profile.photo);
      if (profile.linkedin) {
        const link = document.querySelector('.profile-linkedin');
        link.href = profile.linkedin;
        link.hidden = false;
      }
    } else {
      renderTeam();
    }
  } catch (error) {
    console.error(error);
  }
}

async function initHome() {
  const toggle = document.querySelector('#language-toggle');
  toggle.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    if (location.protocol !== 'file:') {
      const url = new URL(location.href);
      if (lang === 'en') url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    }
    applyLanguage();
  });
  applyLanguage();
  bindReveal();

  const [catalog, company] = await Promise.allSettled([
    loadJSON('data/services.json'),
    loadJSON('data/company.json')
  ]);
  if (catalog.status === 'fulfilled') {
    services = catalog.value;
    renderServices();
    renderChecks();
    if (location.hash.startsWith('#servicio-')) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }
  } else {
    console.error(catalog.reason);
  }
  if (company.status === 'fulfilled') window.companyData = company.value;
  else console.error(company.reason);
  bindProcess();
}

function text(key) {
  return t[lang][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelector('.main-nav').setAttribute('aria-label', text('navLabel'));
  const toggle = document.querySelector('#language-toggle');
  toggle.textContent = lang === 'es' ? 'EN' : 'ES';
  toggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  renderServices();
  renderProcess();
  renderTeam();
  renderChecks();
}

function renderServices(){const grid=document.querySelector('#services-grid');if(!grid||!services.length)return;grid.innerHTML=services.map(s=>{const name=s[`name_${lang}`],summary=s[`summary_${lang}`],activities=s[`activities_${lang}`];return `<article id="servicio-${s.id}" class="service-card reveal visible"><div class="service-icon" aria-hidden="true">${icon(s.icon)}</div><h3>${name}</h3><p class="service-summary">${summary}</p><details class="service-details"><summary>${text('knowMore')}</summary><p class="deliverables-label">${text('activities')}</p><ul>${activities.map(a=>`<li>${a}</li>`).join('')}</ul><p class="deliverables-label">${text('deliverables')}</p><p>${lang==='es'?'Información técnica, registros y recomendaciones adaptados al alcance acordado.':'Technical information, records and recommendations adapted to the agreed scope.'}</p></details><a class="request-link" href="#contacto" data-service="${name}">${text('requestQuote')}</a></article>`}).join('');grid.querySelectorAll('.request-link').forEach(a=>a.addEventListener('click',e=>{const cb=[...document.querySelectorAll('#service-checks input')].find(x=>x.value===a.dataset.service);if(cb)cb.checked=true}))}
function renderChecks(){const box=document.querySelector('#service-checks');if(!box||!services.length)return;box.innerHTML=services.map(s=>{const name=s[`name_${lang}`];return `<label><input type="checkbox" name="services" value="${name}"><span>${name}</span></label>`}).join('')}
function renderProcess(){const box=document.querySelector('#process-list');if(!box)return;const items=lang==='es'?processEs:processEn;box.innerHTML=items.map((name,i)=>`<button type="button" class="process-step ${i===0?'active':''}" aria-label="${text('processPrefix')} ${i+1}: ${name}"><span>${String(i+1).padStart(2,'0')}</span><h3>${name}</h3></button>`).join('');box.querySelectorAll('.process-step').forEach(step=>step.addEventListener('click',()=>{box.querySelectorAll('.process-step').forEach(s=>s.classList.remove('active'));step.classList.add('active')}))}
function renderTeam() {
  const grid = document.querySelector('#team-grid');
  const template = document.querySelector('#team-card');
  grid.replaceChildren(...profiles.map(profile => {
    const card = template.content.cloneNode(true);
    card.querySelector('h3').textContent = profile.name || '';
    card.querySelector('.team-role').textContent = profile.role?.[lang] || '';
    card.querySelector('.service-summary').textContent = profile.summary?.[lang] || '';
    const portrait = card.querySelector('.profile-portrait');
    portrait.querySelector('span').textContent = profile.initials || '';
    if (profile.initials || profile.photo) loadPortrait(portrait, profile.photo);
    else portrait.remove();

    const tags = card.querySelector('.profile-tags');
    for (const specialty of profile.specialties?.[lang] || []) {
      const tag = document.createElement('li');
      tag.textContent = specialty;
      tags.append(tag);
    }

    const link = card.querySelector('.team-link');
    if (profile.page?.[lang]) {
      link.href = profile.page[lang];
      link.textContent = text('viewProfile');
    } else {
      link.remove();
    }
    return card;
  }));
}

function loadPortrait(portrait, path) {
  if (!path) return;
  const image = document.createElement('img');
  image.alt = '';
  image.decoding = 'async';
  image.addEventListener('load', () => portrait.append(image), { once: true });
  const siteRoot = new URL('../', new URL(teamSource, document.baseURI));
  image.src = new URL(path, siteRoot);
}

function bindMenu(){const button=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')}))}
function bindReveal(){const els=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)){els.forEach(el=>el.classList.add('visible'));return}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});els.forEach(el=>observer.observe(el))}
function bindProcess(){document.querySelectorAll('.process-step').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')el.click()}))}
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const email=window.companyData?.email||'';const message=document.querySelector('#form-message');if(!email){message.textContent=text('mailConfiguredError');return}const selected=data.getAll('services').join(', ')||'No especificado';const subject=encodeURIComponent(`${lang==='es'?'Solicitud técnica':'Technical request'} — ${data.get('project')||data.get('company')||data.get('name')}`);const body=encodeURIComponent(`Nombre: ${data.get('name')}\nEmpresa: ${data.get('company')}\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone')}\nPaís: ${data.get('country')}\nProyecto: ${data.get('project')}\nServicios: ${selected}\n\nNecesidad:\n${data.get('need')}`);window.location.href=`mailto:${email}?subject=${subject}&body=${body}`});
function icon(type){const symbols={terrain:'⌁',layers:'◇',inventory:'▦',verified:'✓',database:'▤',cube:'⬡',chart:'⌇',mine:'△',ai:'✦'};return `<span aria-hidden="true">${symbols[type]||'•'}</span>`}
bindMenu();
if (!profileId) initHome();
loadTeam();
