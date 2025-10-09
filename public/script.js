// Premium interactive animations inspired by Moo Ethereum
document.addEventListener('DOMContentLoaded', function() {
    // Smooth parallax for floating shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.05);
            const rotation = scrolled * 0.02;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
        });
    });

    // Premium logo interactions
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 50px rgba(255, 215, 0, 0.8)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)';
        });
    }

    // Intersection Observer for timeline animations
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        timelineObserver.observe(item);
    });

    // Chart animation on scroll
    const chartObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chartLine = entry.target.querySelector('.chart-line');
                const points = entry.target.querySelectorAll('.point');
                
                if (chartLine) {
                    chartLine.style.animation = 'chart-pulse 3s ease-in-out infinite';
                }
                
                points.forEach((point, index) => {
                    setTimeout(() => {
                        point.style.animation = 'point-glow 2s ease-in-out infinite';
                    }, index * 300);
                });
            }
        });
    }, { threshold: 0.5 });

    const cryptoChart = document.querySelector('.crypto-chart');
    if (cryptoChart) {
        chartObserver.observe(cryptoChart);
    }

    // Premium social link interactions
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 0 rgba(255, 215, 0, 0)';
        });
    });

    // Mouse tracking for floating shapes
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = 0.01 + (index * 0.005);
                const moveX = (x - 0.5) * 30 * speed;
                const moveY = (y - 0.5) * 30 * speed;
                shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // Typing effect for story text
    const storyLine = document.querySelector('.story-line');
    if (storyLine) {
        const text = storyLine.textContent;
        storyLine.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                storyLine.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        
        setTimeout(typeWriter, 2500);
    }

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Contract copier function
function copyContract() {
    const contractAddress = '0xFFb2e6500Fef04726348d35981a9Cd3CfD027Eac';
    navigator.clipboard.writeText(contractAddress).then(function() {
        // Show success feedback
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        button.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>Copied!';
        button.style.background = '#10B981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Premium console branding
console.log('%c🚀 ETH Holder', 'color: #8B5CF6; font-size: 20px; font-weight: bold; text-shadow: 0 0 20px #8B5CF6;');
console.log('%cWe held, we learned Chinese, we\'re still here!', 'color: #3B82F6; font-size: 14px; font-weight: 500;');
console.log('%c💎 Diamond hands only!', 'color: #FFB366; font-size: 12px;');
console.log('%c🐦 https://x.com/ethholderoneth', 'color: #1DA1F2; font-size: 11px;');
console.log('%c📱 https://t.me/Ethholdererc20', 'color: #0088cc; font-size: 11px;');
console.log('%c⚡ Powered by pure diamond hands energy!', 'color: #8B5CF6; font-size: 10px; font-style: italic;');
