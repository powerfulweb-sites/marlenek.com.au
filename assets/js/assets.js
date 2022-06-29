document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');

// apply year to footer
const year = document.getElementById('year');
if (year) {
  year.innerHTML = new Date().getFullYear();
}

