document.addEventListener("DOMContentLoaded", function(){
//1//
  var firma = document.getElementById('firma');
  var nav = document.querySelector('nav');
  var box = document.createElement('div');
  var list = document.createElement('ul');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  li1.innerText = "Aktualności";
  li2.innerText = "Nasz team";
  li3.innerText = "Historia";
  nav.appendChild(box);
  box.appendChild(list);
  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);
  box.style.visibility = 'hidden';
  firma.addEventListener('mousemove', function() {
    box.style.visibility = "visible";
  });
  box.addEventListener('mouseout', function(){
    box.style.visibility = 'hidden';
  });

//2//
  var clair = document.getElementById('clair');
  var margarita = document.getElementById('margarita');
  var clairbox = document.querySelector('.clair');
  var margaritabox = document.querySelector('.margarita');

  clairbox.addEventListener('mousemove', function() {
    clair.style.visibility = 'hidden';
  });
  clairbox.addEventListener('mouseout', function() {
    clair.style.visibility = 'visible';
  });
  margaritabox.addEventListener('mousemove', function() {
    margarita.style.visibility = 'hidden';
  });
  margaritabox.addEventListener('mouseout', function() {
    margarita.style.visibility = 'visible';
  });

//3//
  var next = document.querySelector('.arrow-right');
  var prev = document.querySelector('.arrow-left');

  var a = 0;

  var slides = document.querySelectorAll('.slider li');

  slides[0].style.display = 'block';
  slides[1].style.display = 'none';
  slides[2].style.display = 'none';

  next.addEventListener('click', function(){
    slides[a].style.display = 'none';
    a++;
    a = a >= slides.length ? 0 : a;
    slides[a].style.display = 'block';
  });
  prev.addEventListener('click', function(){
    slides[a].style.display = 'none';
    a--;
    a = a < 0 ? slides.length - 1 : a;
    slides[a].style.display = 'block';
  });
});
