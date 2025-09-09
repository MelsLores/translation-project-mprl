// Translation System for Modern Portfolio
// Supports English, Spanish, and French

const translations = {
  en: {
    page: {
      title: "Modern Portfolio - Professional Developer"
    },
    nav: {
      brand: "Portfolio",
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alex Developer",
      subtitle: "Full-Stack Developer & UI/UX Enthusiast",
      description: "Creating modern, responsive web applications with cutting-edge technologies and exceptional user experiences.",
      view_work: "View My Work",
      contact: "Get In Touch",
      scroll: "Scroll to explore"
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about creating digital experiences",
      paragraph1: "I'm a passionate full-stack developer with over 5 years of experience creating modern web applications. I specialize in JavaScript, React, Node.js, and modern CSS frameworks.",
      paragraph2: "My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences. I'm constantly learning new technologies and best practices to stay at the forefront of web development.",
      projects_completed: "Projects Completed",
      years_experience: "Years Experience",
      languages: "Languages"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work and achievements",
      project1: {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React frontend and Node.js backend."
      },
      project2: {
        title: "Task Management App",
        description: "A mobile-first task management application with real-time collaboration."
      },
      project3: {
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard with interactive data visualizations."
      }
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies and tools I work with",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & Others"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      email: "Email",
      phone: "Phone",
      location: "Location",
      city: "New York, USA",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      }
    },
    footer: {
      copyright: "© 2024 Portfolio. Made with ❤️ using modern web technologies."
    }
  },
  es: {
    page: {
      title: "Portafolio Moderno - Desarrollador Profesional"
    },
    nav: {
      brand: "Portafolio",
      home: "Inicio",
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alex Developer",
      subtitle: "Desarrollador Full-Stack y Entusiasta UI/UX",
      description: "Creando aplicaciones web modernas y responsivas con tecnologías de vanguardia y experiencias de usuario excepcionales.",
      view_work: "Ver Mi Trabajo",
      contact: "Contáctame",
      scroll: "Desplázate para explorar"
    },
    about: {
      title: "Acerca de Mí",
      subtitle: "Apasionado por crear experiencias digitales",
      paragraph1: "Soy un desarrollador full-stack apasionado con más de 5 años de experiencia creando aplicaciones web modernas. Me especializo en JavaScript, React, Node.js y frameworks CSS modernos.",
      paragraph2: "Mi enfoque combina experiencia técnica con resolución creativa de problemas para ofrecer experiencias de usuario excepcionales. Estoy constantemente aprendiendo nuevas tecnologías y mejores prácticas para mantenerme a la vanguardia del desarrollo web.",
      projects_completed: "Proyectos Completados",
      years_experience: "Años de Experiencia",
      languages: "Idiomas"
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una muestra de mi trabajo reciente y logros",
      project1: {
        title: "Plataforma de E-Commerce",
        description: "Una solución completa de comercio electrónico con frontend en React y backend en Node.js."
      },
      project2: {
        title: "App de Gestión de Tareas",
        description: "Una aplicación de gestión de tareas mobile-first con colaboración en tiempo real."
      },
      project3: {
        title: "Panel de Análisis",
        description: "Un panel de análisis integral con visualizaciones de datos interactivas."
      }
    },
    skills: {
      title: "Habilidades y Experiencia",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas y Otros"
    },
    contact: {
      title: "Contáctame",
      subtitle: "Hablemos de tu próximo proyecto",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      city: "Nueva York, EE.UU.",
      form: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje"
      }
    },
    footer: {
      copyright: "© 2024 Portafolio. Hecho con ❤️ usando tecnologías web modernas."
    }
  },
  fr: {
    page: {
      title: "Portfolio Moderne - Développeur Professionnel"
    },
    nav: {
      brand: "Portfolio",
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Alex Developer",
      subtitle: "Développeur Full-Stack et Passionné UI/UX",
      description: "Créant des applications web modernes et responsives avec des technologies de pointe et des expériences utilisateur exceptionnelles.",
      view_work: "Voir Mon Travail",
      contact: "Me Contacter",
      scroll: "Faites défiler pour explorer"
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Passionné par la création d'expériences numériques",
      paragraph1: "Je suis un développeur full-stack passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes. Je me spécialise en JavaScript, React, Node.js et frameworks CSS modernes.",
      paragraph2: "Mon approche combine l'expertise technique avec la résolution créative de problèmes pour offrir des expériences utilisateur exceptionnelles. J'apprends constamment de nouvelles technologies et les meilleures pratiques pour rester à la pointe du développement web.",
      projects_completed: "Projets Complétés",
      years_experience: "Années d'Expérience",
      languages: "Langues"
    },
    projects: {
      title: "Projets en Vedette",
      subtitle: "Une vitrine de mon travail récent et de mes réalisations",
      project1: {
        title: "Plateforme E-Commerce",
        description: "Une solution e-commerce complète avec frontend React et backend Node.js."
      },
      project2: {
        title: "App de Gestion des Tâches",
        description: "Une application de gestion des tâches mobile-first avec collaboration en temps réel."
      },
      project3: {
        title: "Tableau de Bord Analytique",
        description: "Un tableau de bord analytique complet avec des visualisations de données interactives."
      }
    },
    skills: {
      title: "Compétences et Expertise",
      subtitle: "Technologies et outils avec lesquels je travaille",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils et Autres"
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Discutons de votre prochain projet",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      city: "New York, États-Unis",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le Message"
      }
    },
    footer: {
      copyright: "© 2024 Portfolio. Fait avec ❤️ en utilisant des technologies web modernes."
    }
  }
};

// Translation utility functions
class TranslationManager {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || 'en';
    this.translations = translations;
    this.init();
  }

  init() {
    this.updateLanguageDisplay();
    this.translatePage();
    this.setupEventListeners();
  }

  getStoredLanguage() {
    return localStorage.getItem('preferred-language');
  }

  setStoredLanguage(language) {
    localStorage.setItem('preferred-language', language);
  }

  changeLanguage(language) {
    if (this.translations[language]) {
      this.currentLanguage = language;
      this.setStoredLanguage(language);
      this.updateLanguageDisplay();
      this.translatePage();
      this.updatePageMeta();
    }
  }

  updateLanguageDisplay() {
    const currentLangElement = document.getElementById('current-lang');
    const langNames = { en: 'EN', es: 'ES', fr: 'FR' };
    if (currentLangElement) {
      currentLangElement.textContent = langNames[this.currentLanguage];
    }

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;
  }

  updatePageMeta() {
    const title = this.getTranslation('page.title');
    if (title) {
      document.title = title;
    }
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = this.translations.en;
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return translation || key;
  }

  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Animate elements when language changes
    this.animateTranslation(elements);
  }

  animateTranslation(elements) {
    elements.forEach((element, index) => {
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.opacity = '1';
      }, index * 50);
    });
  }

  setupEventListeners() {
    // Language dropdown toggle
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
      });

      langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Language option clicks
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const language = option.getAttribute('data-lang');
        this.changeLanguage(language);
        langDropdown.classList.remove('active');
      });
    });
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Get available languages
  getAvailableLanguages() {
    return Object.keys(this.translations);
  }

  // Check if language is available
  isLanguageAvailable(language) {
    return this.translations.hasOwnProperty(language);
  }
}

// Initialize translation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.translationManager = new TranslationManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TranslationManager, translations };
}