/* ============================================================
   A14 — Practical AI Solutions
   script.js
   ============================================================ */

/* ─── 1. Translation Dictionary ─── */
const translations = {

  en: {
    /* Navigation */
    'nav.home':      'Home',
    'nav.about':     'About Us',
    'nav.services':  'Services',
    'nav.contacts':  'Contacts',
    'nav.vacancies': 'Vacancies',
    'header.cta':    'Request a demo',

    /* Home — Hero */
    'home.hero.eyebrow':     'AI Agentic Infrastructure · Production-Ready',
    'home.hero.headline':    'A14 — AI Agentic Infrastructure That Automates Your Business',
    'home.hero.subheadline': 'We build intelligent agentic systems that automate complex business processes end-to-end. We work with all leading AI models — Anthropic Claude, OpenAI GPT-4, Google Gemini and more — delivering the right intelligence for every task.',
    'home.hero.cta2':        'View services',

    /* Home — What we do */
    'home.whatwedo.eyebrow': 'Overview',
    'home.whatwedo.title': 'What we do',
    'home.whatwedo.body':  "We build AI Agentic Infrastructure — the new generation of automation that doesn't just process data, but thinks, decides, and acts. From autonomous workflows and LLM-powered agents to predictive ML models, we help enterprises replace manual processes with intelligent systems that scale.",

    /* Home — Case Studies */
    'home.cases.eyebrow':      'Our Work',
    'home.cases.title':        'Case Studies',
    'home.cases.case1.title':  'Industrial Real-Estate Price & Trend Forecasting',
    'home.cases.case1.desc':   'Neural networks combine historical sales, economic indicators, proximity to infrastructure and multiple external datasets to predict prices and trends 1–3 years ahead. Outputs: price forecasts, risk indicators, and scenario simulations for investment planning.',
    'home.cases.case2.title':  'Large-Scale Medical Data Analytics',
    'home.cases.case2.desc':   'End-to-end analytics pipelines and ML models to evaluate treatment effectiveness across large patient cohorts. We analyze post-treatment outcomes to identify which therapies work best under which conditions, supporting evidence-based decisions.',
    'home.cases.case3.title':  'AI Chatbots for Enterprise Data (RAG + DB Connectors)',
    'home.cases.case3.desc':   "Conversational AI connected to a company's internal databases and unstructured knowledge. Users can ask natural-language questions and get accurate answers powered by retrieval-augmented generation (RAG) and secure data connectors.",

    /* Services */
    'services.eyebrow': 'What We Build',
    'services.title': 'Services',
    'services.intro': 'We deliver tailored AI systems across industries — from prototype to production. Short timelines, strong data hygiene, and secure deployment.',

    'services.realestate.title': 'Real Estate',
    'services.realestate.desc':  'We design and deploy AI Agentic Infrastructure built for real estate enterprises — automating the most complex and time-consuming workflows at scale. Our intelligent agents handle Lease Abstract Generation, Underwriting processes, Tenant & Market analytics, Investor reports, IC memorandum generation, and much more. Whether you manage thousands of assets or need to close deals faster, our agentic approach eliminates manual bottlenecks and delivers institutional-grade analysis in minutes, not weeks.',

    'services.chat.title':    'AI Chatbots — Talk to Your Data',
    'services.chat.desc':     "Give your team the power to ask questions in plain language and get instant, precise answers from your databases, documents, and knowledge systems. Our RAG-powered chatbots connect to SQL/NoSQL databases, document stores, CRMs, and proprietary data sources — with enterprise-grade security, access controls, and full audit logging. No more waiting for reports: your data speaks for itself.",

    'services.agri.title':    'Agriculture (AgriTech)',
    'services.agri.desc':     'We build crop yield forecasting, remote-sensing analysis and predictive farm management tools. Our models combine satellite imagery, sensor (IoT) data and weather to optimize inputs and maximize yields.',

    'services.health.title':  'Medicine & Healthcare Analytics',
    'services.health.desc':   'Large-scale outcome analytics, clinical trial data pipelines and predictive models for patient stratification. We help measure treatment effectiveness and support data-driven clinical decisions.',

    'services.mlmodels.title': 'ML Model Development',
    'services.mlmodels.desc':  'We design and build custom predictive models tailored to your business. Demand forecasting, churn prediction, price optimization, anomaly detection — our team builds, trains, and deploys production-ready models integrated directly into your existing workflows and systems.',

    /* Contacts */
    'contacts.eyebrow': 'Get in Touch',
    'contacts.title': 'Contacts',
    'contacts.intro': "Get in touch — tell us about your challenge and we'll propose a first approach and timeline.",

    'contacts.form.name':              'Full name',
    'contacts.form.email':             'Email',
    'contacts.form.phone':             'Phone',
    'contacts.form.optional':          '(optional)',
    'contacts.form.area':              'Area / Project type',
    'contacts.form.select':            'Select area',
    'contacts.form.opt.realestate':    'Real Estate',
    'contacts.form.opt.chat':          'AI Chatbots',
    'contacts.form.opt.agri':          'Agriculture',
    'contacts.form.opt.med':           'Medicine',
    'contacts.form.opt.mlmodels':      'ML Models',
    'contacts.form.opt.other':         'Other',
    'contacts.form.desc':              'Project description',
    'contacts.form.desc.placeholder':  'Describe the project, goals and available data (max 1000 characters)',
    'contacts.form.file':              'Attach CV / Brief',
    'contacts.form.file.hint':         'PDF only — attach via your email client after sending.',
    'contacts.form.consent':           'I agree to be contacted',
    'contacts.form.submit':            'Send request',
    'contacts.form.success':           'Your request has been sent. We will get back to you within 2 business days.',
    'contacts.form.error':             'Please review the form and correct the highlighted fields.',
    'contacts.form.ratelimit':         'Too many requests. Please try again tomorrow.',
    'toast.title':                     'Thank you!',
    'toast.msg':                       "Your request has been sent — we'll be in touch shortly.",

    'contacts.form.err.name':    'Please enter your full name.',
    'contacts.form.err.email':   'Please enter a valid email address.',
    'contacts.form.err.area':    'Please select a project area.',
    'contacts.form.err.desc':    'Please describe your project (min 20 characters).',
    'contacts.form.err.consent': 'Please confirm you agree to be contacted.',

    'contacts.info.about':         'A14 develops AI and ML systems for enterprises — from research prototypes to secure production deployments.',
    'contacts.info.emailLabel':    'Email',
    'contacts.info.responseLabel': 'Response time',
    'contacts.info.response':      'We usually respond within 2 business days.',

    /* Vacancies */
    'vacancies.eyebrow':          'Join the Team',
    'vacancies.title':            'Vacancies',
    'vacancies.intro':            "Join A14 — we're building practical AI solutions with a friendly, flexible team. Below are our current openings.",
    'vacancies.responsibilities': 'Responsibilities',
    'vacancies.requirements':     'Key Requirements',
    'vacancies.apply.before':     'Send your CV to',
    'vacancies.apply.link':       ' the contacts section',
    'vacancies.apply.after':      ' and attach your CV as PDF.',
    'vacancies.culture':          "We're a collaborative, remote-friendly team — equity and learning encouraged.",

    /* Vacancies — Project Manager */
    'vacancies.pm.title': 'Project Manager — AI Projects',
    'vacancies.pm.desc':  'Drive end-to-end delivery of AI and data projects, coordinating between clients, ML engineers and data teams to keep projects on schedule and on scope.',
    'vacancies.pm.r1':    'Lead project planning, sprint cycles and stakeholder communications',
    'vacancies.pm.r2':    'Translate business requirements into clear technical briefs',
    'vacancies.pm.r3':    'Track milestones, manage risks and report progress to clients',
    'vacancies.pm.req1':  '3+ years managing IT or AI/data projects',
    'vacancies.pm.req2':  'Familiarity with ML workflows and data pipelines',
    'vacancies.pm.req3':  'Excellent written and spoken English or Spanish',

    /* Vacancies — ML Engineer */
    'vacancies.ml.title': 'Senior ML Engineer / Developer',
    'vacancies.ml.desc':  'Design and implement machine learning models for real-world production systems in agriculture, finance, healthcare and enterprise AI.',
    'vacancies.ml.r1':    'Develop, train and optimize ML/DL models end-to-end',
    'vacancies.ml.r2':    'Collaborate with data engineers to design robust feature pipelines',
    'vacancies.ml.r3':    'Deploy and monitor models in production environments',
    'vacancies.ml.req1':  '5+ years hands-on ML with Python, PyTorch or TensorFlow',
    'vacancies.ml.req2':  'Experience with time-series, NLP or computer vision tasks',
    'vacancies.ml.req3':  'Solid understanding of MLOps and model deployment practices',

    /* Vacancies — Data Engineer */
    'vacancies.de.title': 'Senior Data Engineer',
    'vacancies.de.desc':  'Architect and build scalable data pipelines that power AI models and analytics across healthcare, agri and finance domains.',
    'vacancies.de.r1':    'Design and maintain ETL/ELT pipelines at scale',
    'vacancies.de.r2':    'Manage data lakes, warehouses and streaming infrastructure',
    'vacancies.de.r3':    'Ensure data quality, lineage and governance standards',
    'vacancies.de.req1':  '5+ years with Spark, Airflow, dbt or similar tools',
    'vacancies.de.req2':  'Strong SQL and experience with cloud data platforms (AWS/GCP/Azure)',
    'vacancies.de.req3':  'Familiarity with real-time streaming (Kafka, Flink)',

    /* Vacancies — AI Chatbot Engineer */
    'vacancies.chat.title': 'AI Chatbot Engineer',
    'vacancies.chat.desc':  'Build intelligent conversational AI systems that connect enterprise data with LLMs using RAG architectures and secure database connectors.',
    'vacancies.chat.r1':    'Implement RAG pipelines and LLM integrations',
    'vacancies.chat.r2':    'Build connectors for SQL/NoSQL, document stores and APIs',
    'vacancies.chat.r3':    'Ensure security, access control and audit logging in AI chat systems',
    'vacancies.chat.req1':  'Experience with LangChain, LlamaIndex or similar RAG frameworks',
    'vacancies.chat.req2':  'Strong Python and API integration skills',
    'vacancies.chat.req3':  'Knowledge of vector databases and embedding models',

    /* About */
    'about.eyebrow':          'Our Story',
    'about.title':            'About Us',
    'about.intro':            'A14 is a team of AI engineers and data scientists building AI Agentic Infrastructure for enterprises. We specialize in automating complex business processes across Real Estate, Healthcare, Agriculture, and other data-intensive industries — delivering intelligent systems that replace manual work with measurable outcomes.',
    'about.pillars.eyebrow':  'What Sets Us Apart',
    'about.pillars.title':    'Our principles',
    'about.pillar1.title':    'Practical by Design',
    'about.pillar1.desc':     'Every system we build solves a real business problem. We skip the hype and focus on measurable outcomes from day one.',
    'about.pillar2.title':    'Production-Ready',
    'about.pillar2.desc':     'We deliver end-to-end — from data pipeline to deployed model. Our systems run reliably in the real world, not just in demos.',
    'about.pillar3.title':    'Industry-Focused',
    'about.pillar3.desc':     'We specialise in Real Estate, Healthcare, Agriculture, and enterprise data — domains where intelligent automation and decision accuracy create a real competitive edge.',

    /* Footer */
    'footer.tagline': 'Practical AI for real business outcomes.',
    'footer.copy':    '© 2026 A14. All rights reserved.',
  },

  es: {
    /* Navigation */
    'nav.home':      'Inicio',
    'nav.about':     'Nosotros',
    'nav.services':  'Servicios',
    'nav.contacts':  'Contacto',
    'nav.vacantes':  'Vacantes',
    'nav.vacancies': 'Vacantes',
    'header.cta':    'Solicitar demo',

    /* Home — Hero */
    'home.hero.eyebrow':     'Infraestructura IA Agéntica · Lista para Producción',
    'home.hero.headline':    'A14 — Infraestructura IA Agéntica que Automatiza su Negocio',
    'home.hero.subheadline': 'Construimos sistemas agénticos inteligentes que automatizan procesos empresariales complejos de extremo a extremo. Trabajamos con todos los modelos líderes — Anthropic Claude, OpenAI GPT-4, Google Gemini y más — entregando la inteligencia adecuada para cada tarea.',
    'home.hero.cta2':        'Ver servicios',

    /* Home — What we do */
    'home.whatwedo.eyebrow': 'Descripción General',
    'home.whatwedo.title': 'Qué hacemos',
    'home.whatwedo.body':  'Construimos Infraestructura IA Agéntica — la nueva generación de automatización que no solo procesa datos, sino que piensa, decide y actúa. Desde flujos de trabajo autónomos y agentes potenciados por LLM hasta modelos ML predictivos, ayudamos a las empresas a reemplazar procesos manuales con sistemas inteligentes que escalan.',

    /* Home — Case Studies */
    'home.cases.eyebrow':     'Nuestro Trabajo',
    'home.cases.title':       'Casos de Estudio',
    'home.cases.case1.title': 'Pronóstico de Precios y Tendencias en Real Estate Industrial',
    'home.cases.case1.desc':  'Redes neuronales combinan ventas históricas, indicadores económicos, proximidad a infraestructura y múltiples conjuntos de datos externos para predecir precios y tendencias 1–3 años adelante. Resultados: pronósticos de precios, indicadores de riesgo y simulaciones de escenarios para planificación de inversiones.',
    'home.cases.case2.title': 'Análisis de Datos Médicos a Gran Escala',
    'home.cases.case2.desc':  'Pipelines de análisis end-to-end y modelos ML para evaluar la efectividad de tratamientos en grandes cohortes de pacientes. Analizamos resultados post-tratamiento para identificar qué terapias funcionan mejor en qué condiciones, apoyando decisiones basadas en evidencia.',
    'home.cases.case3.title': 'Chatbots de IA para Datos Empresariales (RAG + Conectores DB)',
    'home.cases.case3.desc':  'IA conversacional conectada a las bases de datos internas y el conocimiento no estructurado de la empresa. Los usuarios pueden hacer preguntas en lenguaje natural y obtener respuestas precisas mediante generación aumentada por recuperación (RAG) y conectores de datos seguros.',

    /* Services */
    'services.eyebrow': 'Lo que Construimos',
    'services.title': 'Servicios',
    'services.intro': 'Desarrollamos sistemas de IA personalizados en múltiples industrias — desde prototipo hasta producción. Plazos cortos, higiene de datos sólida y despliegue seguro.',

    'services.realestate.title': 'Real Estate',
    'services.realestate.desc':  'Diseñamos e implementamos Infraestructura IA Agéntica para empresas inmobiliarias — automatizando los flujos de trabajo más complejos a escala. Nuestros agentes inteligentes gestionan Generación de Resúmenes de Arrendamiento, procesos de Underwriting, análisis de Inquilinos y Mercados, informes para Inversores, generación de memorándums de IC y mucho más. Ya sea que gestione miles de activos o necesite cerrar operaciones más rápido, nuestro enfoque agéntico elimina los cuellos de botella manuales y entrega análisis de calidad institucional en minutos.',

    'services.chat.title':    'Chatbots de IA — Hable con sus Datos',
    'services.chat.desc':     'Dé a su equipo el poder de hacer preguntas en lenguaje natural y obtener respuestas instantáneas y precisas de sus bases de datos, documentos y sistemas de conocimiento. Nuestros chatbots RAG se conectan a bases de datos SQL/NoSQL, repositorios de documentos, CRMs y fuentes de datos propietarias — con seguridad empresarial, controles de acceso y registro de auditoría completo.',

    'services.agri.title':    'Agricultura (AgriTech)',
    'services.agri.desc':     'Construimos herramientas de pronóstico de rendimiento de cultivos, análisis de teledetección y gestión agrícola predictiva. Nuestros modelos combinan imágenes satelitales, datos de sensores (IoT) y condiciones climáticas para optimizar insumos y maximizar rendimientos.',

    'services.health.title':  'Medicina y Analítica de Salud',
    'services.health.desc':   'Analítica de resultados a gran escala, pipelines de datos de ensayos clínicos y modelos predictivos para estratificación de pacientes. Ayudamos a medir la efectividad de tratamientos y apoyamos decisiones clínicas basadas en datos.',

    'services.mlmodels.title': 'Desarrollo de Modelos ML',
    'services.mlmodels.desc':  'Diseñamos y construimos modelos predictivos personalizados para su negocio. Pronóstico de demanda, predicción de churn, optimización de precios, detección de anomalías — nuestro equipo construye, entrena y despliega modelos listos para producción integrados directamente en sus flujos de trabajo y sistemas existentes.',

    /* Contacts */
    'contacts.eyebrow': 'Contáctenos',
    'contacts.title': 'Contacto',
    'contacts.intro': 'Contáctenos — cuéntenos sobre su desafío y le propondremos un primer enfoque y cronograma.',

    'contacts.form.name':              'Nombre completo',
    'contacts.form.email':             'Correo electrónico',
    'contacts.form.phone':             'Teléfono',
    'contacts.form.optional':          '(opcional)',
    'contacts.form.area':              'Área / Tipo de proyecto',
    'contacts.form.select':            'Seleccionar área',
    'contacts.form.opt.realestate':    'Real Estate',
    'contacts.form.opt.chat':          'Chatbots de IA',
    'contacts.form.opt.agri':          'Agricultura',
    'contacts.form.opt.med':           'Medicina',
    'contacts.form.opt.mlmodels':      'Modelos ML',
    'contacts.form.opt.other':         'Otro',
    'contacts.form.desc':              'Descripción del proyecto',
    'contacts.form.desc.placeholder':  'Describa el proyecto, los objetivos y los datos disponibles (máx. 1000 caracteres)',
    'contacts.form.file':              'Adjuntar CV / Resumen',
    'contacts.form.file.hint':         'Solo PDF — adjunte a través de su cliente de correo al enviar.',
    'contacts.form.consent':           'Acepto ser contactado',
    'contacts.form.submit':            'Enviar solicitud',
    'contacts.form.success':           'Su solicitud ha sido enviada. Le responderemos en un plazo de 2 días hábiles.',
    'contacts.form.error':             'Por favor, revise el formulario y corrija los campos marcados.',
    'contacts.form.ratelimit':         'Demasiadas solicitudes. Por favor, inténtelo de nuevo mañana.',
    'toast.title':                     '¡Gracias!',
    'toast.msg':                       'Su solicitud ha sido enviada — nos pondremos en contacto pronto.',

    'contacts.form.err.name':    'Por favor, ingrese su nombre completo.',
    'contacts.form.err.email':   'Por favor, ingrese una dirección de correo válida.',
    'contacts.form.err.area':    'Por favor, seleccione el área del proyecto.',
    'contacts.form.err.desc':    'Por favor, describa su proyecto (mín. 20 caracteres).',
    'contacts.form.err.consent': 'Por favor, confirme que acepta ser contactado.',

    'contacts.info.about':         'A14 desarrolla sistemas de IA y ML para empresas — desde prototipos de investigación hasta despliegues seguros en producción.',
    'contacts.info.emailLabel':    'Correo electrónico',
    'contacts.info.responseLabel': 'Tiempo de respuesta',
    'contacts.info.response':      'Normalmente respondemos en 2 días hábiles.',

    /* Vacancies */
    'vacancies.eyebrow':          'Únase al Equipo',
    'vacancies.title':            'Vacantes',
    'vacancies.intro':            'Únase a A14 — estamos construyendo soluciones prácticas de IA con un equipo colaborativo y flexible. A continuación nuestras posiciones actuales.',
    'vacancies.responsibilities': 'Responsabilidades',
    'vacancies.requirements':     'Requisitos Clave',
    'vacancies.apply.before':     'Envíe su CV a',
    'vacancies.apply.link':       ' la sección de contacto',
    'vacancies.apply.after':      ' y adjúntelo como PDF.',
    'vacancies.culture':          'Somos un equipo colaborativo en modalidad remota — fomentamos el aprendizaje continuo y el crecimiento.',

    /* Vacancies — Project Manager */
    'vacancies.pm.title': 'Gerente de Proyecto — Proyectos de IA',
    'vacancies.pm.desc':  'Liderar la entrega end-to-end de proyectos de IA y datos, coordinando entre clientes, ingenieros ML y equipos de datos para mantener los proyectos en tiempo y alcance.',
    'vacancies.pm.r1':    'Liderar la planificación de proyectos, ciclos de sprints y comunicaciones con stakeholders',
    'vacancies.pm.r2':    'Traducir requisitos de negocio en especificaciones técnicas claras',
    'vacancies.pm.r3':    'Hacer seguimiento de hitos, gestionar riesgos e informar el progreso a los clientes',
    'vacancies.pm.req1':  '3+ años gestionando proyectos de IT o IA/datos',
    'vacancies.pm.req2':  'Familiaridad con flujos de trabajo ML y pipelines de datos',
    'vacancies.pm.req3':  'Excelente inglés o español escrito y hablado',

    /* Vacancies — ML Engineer */
    'vacancies.ml.title': 'Ingeniero / Desarrollador ML Senior',
    'vacancies.ml.desc':  'Diseñar e implementar modelos de machine learning para sistemas de producción reales en agricultura, finanzas, salud e IA empresarial.',
    'vacancies.ml.r1':    'Desarrollar, entrenar y optimizar modelos ML/DL end-to-end',
    'vacancies.ml.r2':    'Colaborar con ingenieros de datos para diseñar pipelines de características robustas',
    'vacancies.ml.r3':    'Desplegar y monitorear modelos en entornos de producción',
    'vacancies.ml.req1':  '5+ años con ML práctico en Python, PyTorch o TensorFlow',
    'vacancies.ml.req2':  'Experiencia con series temporales, PLN o visión por computadora',
    'vacancies.ml.req3':  'Sólido conocimiento de MLOps y prácticas de despliegue de modelos',

    /* Vacancies — Data Engineer */
    'vacancies.de.title': 'Ingeniero de Datos Senior',
    'vacancies.de.desc':  'Arquitectar y construir pipelines de datos escalables que potencian los modelos de IA y analítica en los dominios de salud, agro y finanzas.',
    'vacancies.de.r1':    'Diseñar y mantener pipelines ETL/ELT a escala',
    'vacancies.de.r2':    'Gestionar data lakes, almacenes y infraestructura de streaming',
    'vacancies.de.r3':    'Garantizar calidad de datos, linaje y estándares de gobernanza',
    'vacancies.de.req1':  '5+ años con Spark, Airflow, dbt o herramientas similares',
    'vacancies.de.req2':  'SQL sólido y experiencia con plataformas de datos en la nube (AWS/GCP/Azure)',
    'vacancies.de.req3':  'Familiaridad con streaming en tiempo real (Kafka, Flink)',

    /* Vacancies — AI Chatbot Engineer */
    'vacancies.chat.title': 'Ingeniero de Chatbots de IA',
    'vacancies.chat.desc':  'Construir sistemas de IA conversacional inteligentes que conectan datos empresariales con LLMs usando arquitecturas RAG y conectores de bases de datos seguros.',
    'vacancies.chat.r1':    'Implementar pipelines RAG e integraciones con LLMs',
    'vacancies.chat.r2':    'Construir conectores para SQL/NoSQL, repositorios de documentos y APIs',
    'vacancies.chat.r3':    'Garantizar seguridad, control de acceso y registro de auditorías en sistemas de chat de IA',
    'vacancies.chat.req1':  'Experiencia con LangChain, LlamaIndex o frameworks RAG similares',
    'vacancies.chat.req2':  'Sólidas habilidades en Python e integración de APIs',
    'vacancies.chat.req3':  'Conocimiento de bases de datos vectoriales y modelos de embedding',

    /* About */
    'about.eyebrow':          'Nuestra Historia',
    'about.title':            'Sobre Nosotros',
    'about.intro':            'A14 es un equipo de ingenieros de IA y científicos de datos que construye Infraestructura IA Agéntica para empresas. Nos especializamos en automatizar procesos empresariales complejos en Real Estate, Salud, Agricultura y otras industrias intensivas en datos — entregando sistemas inteligentes que reemplazan el trabajo manual con resultados medibles.',
    'about.pillars.eyebrow':  'Lo Que Nos Distingue',
    'about.pillars.title':    'Nuestros principios',
    'about.pillar1.title':    'Práctica por Diseño',
    'about.pillar1.desc':     'Cada sistema que construimos resuelve un problema empresarial real. Nos saltamos el ruido y nos enfocamos en resultados medibles desde el primer día.',
    'about.pillar2.title':    'Lista para Producción',
    'about.pillar2.desc':     'Entregamos de extremo a extremo — desde el pipeline de datos hasta el modelo desplegado. Nuestros sistemas funcionan de manera confiable en el mundo real.',
    'about.pillar3.title':    'Enfocada en la Industria',
    'about.pillar3.desc':     'Nos especializamos en Real Estate, Salud, Agricultura y datos empresariales — dominios donde la automatización inteligente y la precisión en la toma de decisiones generan una ventaja competitiva real.',

    /* Footer */
    'footer.tagline': 'IA práctica para resultados empresariales reales.',
    'footer.copy':    '© 2026 A14. Todos los derechos reservados.',
  }
};

/* ─── 2. App State ─── */
const state = {
  lang:    'en',
  section: 'home'
};

/* ─── 3. Router / Tab Switcher ─── */

/**
 * Navigate to a section by id.
 * Updates the URL hash, shows/hides sections, and updates nav highlights.
 */
function navigateTo(sectionId, pushHistory = true) {
  const validSections = ['home', 'about', 'services', 'contacts', 'vacancies'];
  if (!validSections.includes(sectionId)) sectionId = 'home';

  /* Hide current section */
  const prev = document.getElementById(state.section);
  if (prev) {
    prev.classList.remove('active');
    prev.hidden = true;
  }

  /* Show new section */
  const next = document.getElementById(sectionId);
  if (next) {
    next.hidden = false;
    next.classList.add('active');
  }

  state.section = sectionId;

  /* Update hash without triggering hashchange in an infinite loop */
  if (pushHistory && window.location.hash !== '#' + sectionId) {
    history.pushState({ section: sectionId }, '', '#' + sectionId);
  }

  /* Scroll to top of main content */
  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Sync nav */
  updateNavHighlight(sectionId);

  /* Close mobile nav if open */
  closeMobileNav();
}

/** Highlight the active nav link. */
function updateNavHighlight(sectionId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const ls = link.dataset.section;
    if (ls === sectionId) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/* ─── 4. Language Toggle ─── */

/** Set the active language and re-render all translatable elements. */
function setLanguage(lang) {
  if (!translations[lang]) return;
  state.lang = lang;

  /* Update html[lang] */
  document.documentElement.lang = lang;

  /* Highlight active language button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Fade out → translate → fade in to avoid layout jump */
  const main = document.getElementById('main-content');
  if (main) {
    main.style.transition = 'opacity 0.12s ease';
    main.style.opacity = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        applyTranslations();
        main.style.opacity = '1';
      });
    });
  } else {
    applyTranslations();
  }
}

/** Walk all [data-i18n] elements and update their text content. */
function applyTranslations() {
  const dict = translations[state.lang];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-placeholder-key]').forEach(el => {
    const key = el.dataset.placeholderKey;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Custom select dropdown options */
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Sync custom select trigger label */
  const nativeArea = document.getElementById('field-area');
  const csValue    = document.querySelector('#cs-area-wrap .cs-value');
  if (csValue && nativeArea) {
    if (!nativeArea.value) {
      if (dict['contacts.form.select']) csValue.textContent = dict['contacts.form.select'];
    } else {
      const sel = document.querySelector(`#cs-area-list [data-value="${nativeArea.value}"]`);
      if (sel) csValue.textContent = sel.textContent;
    }
  }

  /* Update page title */
  const titles = { en: 'A14 — Practical AI Solutions for Industry', es: 'A14 — Soluciones de IA Práctica para la Industria' };
  document.title = titles[state.lang] || titles.en;
}

/* ─── 5. Nav State & Click Handling ─── */

/** Wire all elements with [data-section] to the router. */
function bindNavLinks() {
  document.addEventListener('click', function (e) {
    const link = e.target.closest('[data-section]');
    if (!link) return;

    /* Skip if it's a plain external anchor without a matching section */
    const sectionId = link.dataset.section;
    if (!sectionId) return;

    e.preventDefault();
    navigateTo(sectionId);
  });
}

/* ─── 6. Mobile Nav (Hamburger) ─── */

function openMobileNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.querySelector('.hamburger');
  const overlay = document.getElementById('nav-overlay');

  nav.classList.add('open');
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'Close menu');
  overlay.classList.add('open');
  overlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.querySelector('.hamburger');
  const overlay = document.getElementById('nav-overlay');

  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open menu');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function bindHamburger() {
  const btn = document.querySelector('.hamburger');
  if (btn) {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMobileNav() : openMobileNav();
    });
  }

  /* Overlay click closes nav */
  const overlay = document.getElementById('nav-overlay');
  if (overlay) overlay.addEventListener('click', closeMobileNav);

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

/* ─── 7. Language Button Binding ─── */
function bindLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ─── 8. Custom Select Dropdown ─── */
function bindCustomSelect() {
  const wrap    = document.getElementById('cs-area-wrap');
  if (!wrap) return;
  const trigger = document.getElementById('cs-area-trigger');
  const list    = document.getElementById('cs-area-list');
  const native  = document.getElementById('field-area');
  const csValue = trigger.querySelector('.cs-value');

  function openList() {
    trigger.setAttribute('aria-expanded', 'true');
    list.classList.add('open');
  }
  function closeList() {
    trigger.setAttribute('aria-expanded', 'false');
    list.classList.remove('open');
  }
  function selectOption(option) {
    const val = option.dataset.value;
    native.value = val;
    csValue.textContent = option.textContent.trim();
    csValue.classList.toggle('placeholder', !val);
    wrap.querySelectorAll('.cs-option').forEach(o => o.classList.remove('selected'));
    if (val) option.classList.add('selected');
    trigger.classList.remove('invalid');
    const errEl = document.getElementById('err-area');
    if (errEl) errEl.textContent = '';
    closeList();
    trigger.focus();
  }

  /* Toggle */
  trigger.addEventListener('click', () => {
    trigger.getAttribute('aria-expanded') === 'true' ? closeList() : openList();
  });

  /* Option clicks */
  list.querySelectorAll('.cs-option').forEach(opt => {
    opt.setAttribute('tabindex', '-1');
    opt.addEventListener('click', () => selectOption(opt));
  });

  /* Click outside */
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) closeList();
  });

  /* Keyboard on trigger */
  trigger.addEventListener('keydown', e => {
    const opts = [...list.querySelectorAll('.cs-option:not(.cs-placeholder)')];
    if (e.key === 'ArrowDown') { e.preventDefault(); openList(); opts[0] && opts[0].focus(); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger.getAttribute('aria-expanded') === 'true' ? closeList() : openList(); }
    else if (e.key === 'Escape') closeList();
  });

  /* Keyboard on options */
  list.querySelectorAll('.cs-option').forEach((opt, i, all) => {
    opt.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); all[Math.min(i + 1, all.length - 1)].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); i === 0 ? (closeList(), trigger.focus()) : all[i - 1].focus(); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectOption(opt); }
      else if (e.key === 'Escape') { closeList(); trigger.focus(); }
    });
  });
}

/* ─── 9. Form Validation & Submission ─── */

function getT(key) {
  return (translations[state.lang] || translations.en)[key] || '';
}

function setError(fieldId, errId, message) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errId);

  /* For the custom area dropdown, also style the trigger */
  if (fieldId === 'field-area') {
    const trigger = document.getElementById('cs-area-trigger');
    if (trigger) trigger.classList.toggle('invalid', !!message);
  }

  if (!field || !err) return;
  err.textContent = message;
  if (message) {
    field.classList.add('invalid');
    field.setAttribute('aria-describedby', errId);
  } else {
    field.classList.remove('invalid');
    field.removeAttribute('aria-describedby');
  }
}

function clearErrors() {
  ['field-name', 'field-email', 'field-area', 'field-desc', 'field-consent'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('invalid');
  });
  const csTrigger = document.getElementById('cs-area-trigger');
  if (csTrigger) csTrigger.classList.remove('invalid');
  ['err-name', 'err-email', 'err-area', 'err-desc', 'err-consent'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
}

/** Validate contact form. Returns true if valid. */
function validateForm() {
  clearErrors();
  let valid = true;

  const name    = (document.getElementById('field-name')    || {}).value || '';
  const email   = (document.getElementById('field-email')   || {}).value || '';
  const area    = (document.getElementById('field-area')    || {}).value || '';
  const desc    = (document.getElementById('field-desc')    || {}).value || '';
  const consent = (document.getElementById('field-consent') || {}).checked;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) {
    setError('field-name', 'err-name', getT('contacts.form.err.name'));
    valid = false;
  }
  if (!emailRe.test(email.trim())) {
    setError('field-email', 'err-email', getT('contacts.form.err.email'));
    valid = false;
  }
  if (!area) {
    setError('field-area', 'err-area', getT('contacts.form.err.area'));
    valid = false;
  }
  if (desc.trim().length < 20) {
    setError('field-desc', 'err-desc', getT('contacts.form.err.desc'));
    valid = false;
  }
  if (!consent) {
    setError('field-consent', 'err-consent', getT('contacts.form.err.consent'));
    valid = false;
  }

  return valid;
}

/* ─── Rate Limiting (localStorage, 10/day) ─── */
const RATE_KEY   = 'a14_submissions';
const RATE_LIMIT = 10;

function getRateData() {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    if (!raw) return { date: '', count: 0 };
    return JSON.parse(raw);
  } catch { return { date: '', count: 0 }; }
}

function checkRateLimit() {
  const today = new Date().toISOString().slice(0, 10);
  const data  = getRateData();
  if (data.date !== today) return true;
  return data.count < RATE_LIMIT;
}

function incrementRateCount() {
  const today = new Date().toISOString().slice(0, 10);
  const data  = getRateData();
  const count = data.date === today ? data.count + 1 : 1;
  try { localStorage.setItem(RATE_KEY, JSON.stringify({ date: today, count })); } catch {}
}

/* ─── Success Toast ─── */
let toastTimer = null;

function showSuccessToast() {
  const toast = document.getElementById('success-toast');
  if (!toast) return;

  /* Re-apply translated text */
  const title = toast.querySelector('[data-i18n="toast.title"]');
  const msg   = toast.querySelector('[data-i18n="toast.msg"]');
  if (title) title.textContent = getT('toast.title');
  if (msg)   msg.textContent   = getT('toast.msg');

  /* Reset animation by cloning the inner element */
  const inner = toast.querySelector('.success-toast-inner');
  const clone = inner.cloneNode(true);
  inner.parentNode.replaceChild(clone, inner);

  toast.classList.remove('hiding');
  toast.hidden = false;

  /* Bind close button on the fresh clone */
  const closeBtn = toast.querySelector('.success-toast-close');
  if (closeBtn) closeBtn.addEventListener('click', hideSuccessToast);

  /* Auto-dismiss after 3 s */
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(hideSuccessToast, 3000);
}

function hideSuccessToast() {
  const toast = document.getElementById('success-toast');
  if (!toast || toast.hidden) return;
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
  toast.classList.add('hiding');
  toast.addEventListener('animationend', () => {
    toast.hidden = true;
    toast.classList.remove('hiding');
  }, { once: true });
}

/** Build and open a mailto: URL from form data, then show success toast. */
function submitForm() {
  const name  = document.getElementById('field-name').value.trim();
  const email = document.getElementById('field-email').value.trim();
  const phone = document.getElementById('field-phone').value.trim();
  const area  = document.getElementById('field-area').value;
  const desc  = document.getElementById('field-desc').value.trim();

  const subject = `A14 Inquiry — ${area} — ${name}`;
  const body = [
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'N/A'}`,
    `Area:  ${area}`,
    '',
    'Project Description:',
    desc,
    '',
    '---',
    'Sent via a14soft.com contact form'
  ].join('\n');

  const mailto = `mailto:sales@a14soft.com`
    + `?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;

  incrementRateCount();
  window.location.href = mailto;

  const errorEl = document.getElementById('form-error-msg');
  if (errorEl) errorEl.hidden = true;

  /* Reset form */
  document.getElementById('contact-form').reset();
  const charCount = document.getElementById('char-count');
  if (charCount) charCount.textContent = '0';

  /* Reset custom select trigger */
  const csValue   = document.querySelector('#cs-area-wrap .cs-value');
  const csTrigger = document.getElementById('cs-area-trigger');
  const csList    = document.getElementById('cs-area-list');
  if (csValue) { csValue.textContent = getT('contacts.form.select'); csValue.classList.add('placeholder'); }
  if (csTrigger) { csTrigger.setAttribute('aria-expanded', 'false'); csTrigger.classList.remove('invalid'); }
  if (csList) { csList.classList.remove('open'); csList.querySelectorAll('.cs-option').forEach(o => o.classList.remove('selected')); }

  showSuccessToast();
}

function bindForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const errorEl = document.getElementById('form-error-msg');

    /* Rate limit check */
    if (!checkRateLimit()) {
      if (errorEl) {
        errorEl.hidden = false;
        const span = errorEl.querySelector('span[data-i18n]') || errorEl;
        span.textContent = getT('contacts.form.ratelimit');
      }
      return;
    }

    if (!validateForm()) {
      if (errorEl) errorEl.hidden = false;
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    if (errorEl) errorEl.hidden = true;
    submitForm();
  });

  /* Character counter for textarea */
  const desc = document.getElementById('field-desc');
  const counter = document.getElementById('char-count');
  if (desc && counter) {
    desc.addEventListener('input', () => {
      counter.textContent = desc.value.length;
    });
  }

  /* Real-time validation feedback on blur */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      /* Only show error after user interaction */
      if (field.dataset.touched) validateForm();
    });
    field.addEventListener('input', () => {
      field.dataset.touched = '1';
    });
    field.addEventListener('change', () => {
      field.dataset.touched = '1';
    });
  });
}

/* ─── 9. Browser History (Back / Forward) ─── */
function bindHistory() {
  window.addEventListener('popstate', function (e) {
    const sectionId = (e.state && e.state.section)
      || (window.location.hash.replace('#', ''))
      || 'home';
    navigateTo(sectionId, false);
  });
}

/* ─── 10. Initial Section from Hash ─── */
function resolveInitialSection() {
  const hash = window.location.hash.replace('#', '');
  const valid = ['home', 'about', 'services', 'contacts', 'vacancies'];
  return valid.includes(hash) ? hash : 'home';
}

/* ─── 11. Init ─── */
function init() {
  /* Determine initial section */
  const initialSection = resolveInitialSection();

  /* Ensure correct initial visibility */
  ['home', 'about', 'services', 'contacts', 'vacancies'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === initialSection) {
      el.hidden = false;
      el.classList.add('active');
    } else {
      el.hidden = true;
      el.classList.remove('active');
    }
  });

  state.section = initialSection;

  /* Push initial history state */
  history.replaceState({ section: initialSection }, '', '#' + initialSection);

  /* Bind all event listeners */
  bindNavLinks();
  bindHamburger();
  bindLangButtons();
  bindCustomSelect();
  bindForm();
  bindHistory();

  /* Apply default language (EN) */
  applyTranslations();

  /* Highlight correct nav item */
  updateNavHighlight(initialSection);
}

/* Run when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
