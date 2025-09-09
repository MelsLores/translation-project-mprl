// Advanced Animation System for Modern Portfolio
// Handles complex animations, particle effects, and interactive elements

class AnimationSystem {
  constructor() {
    this.animations = new Map();
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    this.setupParticleSystem();
    this.setupMagneticEffects();
    this.setupTextAnimations();
    this.setupScrollAnimations();
    this.setupHoverEffects();
    this.setupLoadingAnimation();
    this.setupCursorEffects();
  }

  // ===================================
  // Particle System for Hero Background
  // ===================================
  setupParticleSystem() {
    if (this.isReducedMotion) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'particle-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(50, canvas.width / 20);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animationId);
    });
  }

  // ===================================
  // Magnetic Effects for Interactive Elements
  // ===================================
  setupMagneticEffects() {
    if (this.isReducedMotion) return;

    const magneticElements = document.querySelectorAll('.btn, .project-link, .social-link');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.3;
        const moveY = y * 0.3;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });
  }

  // ===================================
  // Text Animations
  // ===================================
  setupTextAnimations() {
    const animateText = (element, animation = 'fadeInUp') => {
      const text = element.textContent;
      const chars = text.split('');
      
      element.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `all 0.6s ease ${index * 0.05}s`;
        element.appendChild(span);
      });

      // Trigger animation
      setTimeout(() => {
        chars.forEach((char, index) => {
          const span = element.children[index];
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        });
      }, 100);
    };

    // Animate hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && !this.isReducedMotion) {
      setTimeout(() => animateText(heroTitle), 500);
    }

    // Animate section titles on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isReducedMotion) {
          animateText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-title').forEach(title => {
      observer.observe(title);
    });
  }

  // ===================================
  // Advanced Scroll Animations
  // ===================================
  setupScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animate;
          this.triggerAnimation(entry.target, animationType);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));

    // Parallax scrolling for specific elements
    this.setupParallaxScrolling();
  }

  setupParallaxScrolling() {
    if (this.isReducedMotion) return;

    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', this.throttle(handleScroll, 16));
  }

  // ===================================
  // Hover Effects
  // ===================================
  setupHoverEffects() {
    // Card tilt effect
    const cards = document.querySelectorAll('.project-card, .skill-category');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (this.isReducedMotion) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (this.isReducedMotion) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // ===================================
  // Loading Animation
  // ===================================
  setupLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 1000);
    });
  }

  // ===================================
  // Custom Cursor Effects
  // ===================================
  setupCursorEffects() {
    if (window.innerWidth < 768 || this.isReducedMotion) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Smooth follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-category');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
      });
    });
  }

  // ===================================
  // Animation Trigger Method
  // ===================================
  triggerAnimation(element, type) {
    const animations = {
      'fade-in': 'animate-fade-in',
      'slide-up': 'animate-slide-up',
      'scale-in': 'animate-scale-in',
      'fade-in-left': 'animate-fade-in-left',
      'fade-in-right': 'animate-fade-in-right'
    };

    const animationClass = animations[type] || 'animate-fade-in';
    element.classList.add('animate-on-scroll', animationClass);
  }

  // ===================================
  // Utility Methods
  // ===================================
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Public method to add custom animations
  addCustomAnimation(name, keyframes, options = {}) {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ${name} {
        ${keyframes}
      }
      .animate-${name} {
        animation: ${name} ${options.duration || '1s'} ${options.easing || 'ease-out'} ${options.delay || '0s'} ${options.fill || 'both'};
      }
    `;
    document.head.appendChild(style);
  }

  // Method to disable all animations
  disableAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// Add custom cursor and ripple styles
const animationStyles = `
<style>
.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
}

.cursor-follower {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0.5;
}

.custom-cursor.cursor-hover {
  transform: translate(-50%, -50%) scale(1.5);
  background: var(--accent-color);
}

.cursor-follower.cursor-hover {
  transform: translate(-50%, -50%) scale(1.5);
  border-color: var(--accent-color);
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.particle-canvas {
  opacity: 0.6;
}

[data-theme="dark"] .particle-canvas {
  opacity: 0.4;
}

/* Hide custom cursor on touch devices */
@media (hover: none) {
  .custom-cursor,
  .cursor-follower {
    display: none;
  }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', animationStyles);

// Initialize animation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.animationSystem = new AnimationSystem();
});

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnimationSystem;
}