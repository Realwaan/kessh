function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Swap the icon and adjust color
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#f39c12'; // Sun color
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#000000'; // Moon color
  }
}

// Set initial theme to light theme
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.add('light-theme');
  themeIcon.classList.add('fa-moon');
  themeIcon.style.color = '#000000'; // Initial moon color
});

function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('active');
}

function openModal(videoId) {
  const modal = document.getElementById('video-modal');
  const iframes = modal.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.style.display = 'none';
    iframe.src = iframe.src; // Reset the video
  });
  document.getElementById(videoId).style.display = 'block';
  modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  modal.style.display = 'none'; // Hide the modal
  const iframes = modal.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.src = iframe.src; // Stop the video
  });
}

window.onclick = function(event) {
  const modal = document.getElementById('video-modal');
  if (event.target == modal) {
    closeModal();
  }
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Swap the icon and adjust color
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#f39c12'; // Sun color
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#000000'; // Moon color
  }
}

// Set initial theme to light theme
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.add('light-theme');
  themeIcon.classList.add('fa-moon');
  themeIcon.style.color = '#000000'; // Initial moon color
});

