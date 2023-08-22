window.onload = function(){
  var first = document.querySelector('.first .wpcf7-list-item-label');
  var last = document.querySelector('.last .wpcf7-list-item-label');
  var yellow = document.createElement('span');
  var blue = document.createElement('span');
  var blue2 = document.createElement('span');
  var green = document.createElement('span');
  var red = document.createElement('span');
  var red2 = document.createElement('span');
  var orange = document.createElement('span');
  var orange2 = document.createElement('span');
  var violet = document.createElement('span');
  var white = document.createElement('span');

  first.innerHTML = '';
  last.innerHTML = '';
  

  yellow.classList.add('color','yellow');
  blue.classList.add('color','blue');
  blue2.classList.add('color','blue');
  green.classList.add('color','green');
  red.classList.add('color','red');
  red2.classList.add('color','red');
  orange.classList.add('color','orange');
  orange2.classList.add('color','orange');
  violet.classList.add('color','violet');
  white.classList.add('color','white');
  

  

  first.appendChild(red);
  first.appendChild(orange);
  first.appendChild(yellow);
  first.appendChild(green);
  first.appendChild(blue);

  last.appendChild(violet);
  last.appendChild(blue2);
  last.appendChild(white);
  last.appendChild(orange2);
  last.appendChild(red2);
  
}
