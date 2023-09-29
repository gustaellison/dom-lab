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
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
// //second way
// menuLinks2.forEach((link) => {
//   const aTag = document.createElement("a");
//   aTag.setAttribute("href", link.href);
//   aTag.textContent = link.text.toUpperCase();
//   topMenuEl.appendChild(aTag)
//   //console.log(aTag)
// })


 /// part 2

 const subMenuEl = document.getElementById('sub-menu')
//console.log(subMenuEl)
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = ('var(--sub-menu-bg)')
subMenuEl.className = 'flex-around'
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

const topMenuLinks = document.querySelectorAll('a')
let showingSubMenu = false


topMenuEl.addEventListener('click', function(event){
    event.preventDefault()
    const link = event.target
   
     if (link.tagName !== 'a') {
    }   
    topMenuLinks.forEach(function (link) {
        link.classList.remove
    })
     link.className = 'active'    
     if (link.className = 'active') {
        showingSubMenu = true
     }  

})

