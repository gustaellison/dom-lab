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

 let subMenuEl = document.getElementById('sub-menu')
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
  // console.log(link.textContent.toLowerCase())
    if (link.tagName !== 'a') {
    }   
    // 5.4
    topMenuLinks.forEach(function (link) {
        link.classList.remove('active')
    })
    //5.5
    link.className = 'active'    
    //  if (link.className = 'active') {
    //     showingSubMenu = true
    //  }  
     //5.6
    const linkData = menuLinks.find(function(linkObj) {
      return linkObj.text === link.textContent.toLowerCase()

    });
 //     console.log(linkData.subLinks)

  showingSubMenu = !!linkData.subLinks;

 // console.log(showingSubMenu)
    
     // return linkObj.text === link.textContent;
    //});
  //5.7
  if (showingSubMenu === true){
    buildSubMenu(linkData.subLinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0'
    mainEl.innerHTML = '<h1>about</h1>'
  }
})

//accepts an array of link objects to create new a tags for subMenuEl
// each time the function runs the existing elements are removed
function buildSubMenu (subLinks){ 
  subMenuEl.innerHTML = ''
  subLinks.forEach(function (link){
    const linkEl = document.createElement('a')
    linkEl.textContent = link.text
    subMenuEl.appendChild(linkEl)
    linkEl.setAttribute('href' , link.href )
  })
}
//AUGUSTA USE THIS FOR A MENU IN A PORTFOLIO
//if the target of a click is a valid link, then they are directed to a valid page
//resetting the styling for nav and the visible h1
subMenuEl.addEventListener('click', function(event){
  event.preventDefault()
  if (!event.target.href) return
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(function (link) {
    link.classList.remove('active')
  })  
  const h1 = document.createElement('h1')
  h1.innerHTML = event.target.textContent
  mainEl.innerHTML = ''
  mainEl.appendChild(h1)
  console.log(h1)
})