// import core-js so babel can provide necessarty polyfills
// import 'core-js/stable';
// apply year to footer
const year = document.getElementById('year');
if (year) {
  year.innerHTML = new Date().getFullYear();
}

