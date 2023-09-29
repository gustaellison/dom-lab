const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = ('var(--main-bg)');
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = ('var(--top-menu-bg)')
topMenuEl.classList.add('flex-around')


// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// function addMenuLinks (item) {
//   item.setAttribute()
// }
// for each link inside of menuLinks array do {} 
menuLinks.forEach(function(link){
  const aTag = document.createElement("a");
  aTag.setAttribute("href", link.href);
  aTag.textContent = link.text.toUpperCase();
  topMenuEl.appendChild(aTag)
  //console.log(aTag)
})
//second way
menuLinks2.forEach((link) => {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", link.href);
  aTag.textContent = link.text.toUpperCase();
  topMenuEl.appendChild(aTag)
  //console.log(aTag)
})


 

