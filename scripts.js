AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: '#6c63ff' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
    opacity: { value: 0.6, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 120, color: '#6c63ff', opacity: 0.5, width: 1.5 },
    move: { enable: true, speed: 4, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 120, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  const response = await fetch('https://formspree.io/f/xdkzbdvn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData)
  });

  if (response.ok) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('Error submitting the form.');
  }
});