/*let  menuOpenBtn= document.getElementById('menu-open-btn');
let menuCloseBtn = document.getElementById('menu-close-btn');
let menuList = document.getElementById('menu-list');

function toggleMenu(){
	if(menuOpenBtn.classList.contains('show-inline')){
		menuOpenBtn.classList.remove('show-inline');
		menuCloseBtn.classList.remove('hide');
		menuOpenBtn.classList.add('hide');
		menuCloseBtn.classList.add('show-inline');
		menuList.className = "show";
	}else{
		menuOpenBtn.classList.remove('hide');
		menuCloseBtn.classList.remove('show-inline');
		menuOpenBtn.classList.add('show-inline');
		menuCloseBtn.classList.add('hide');
		menuList.className = "hide";
	}
}


function scrollToSection(id){
	let el = document.getElementById(id)
	el.scrollIntoView({behavior:"smooth",block:"start"});
	toggleMenu();
}

const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu(){
	console.log(mobileMenu);
	if(mobileMenu.classList.contains('hide')){
		mobileMenu.classList.remove('hide');
		mobileMenu.classList.add('show');
	}else{
		mobileMenu.classList.remove('show');
		mobileMenu.classList.add('hide');
	}
}

function scrollToSectionNoToggle(id){
	let el = document.getElementById(id)
	el.scrollIntoView({behavior:"smooth",block:"start"});

}*/
var t = new TimelineMax();

t.to('#body', 1, {
        autoAlpha: 1,
        ease: Power1.easeInOut
    })
	.to('#ring', 1, {
		autoAlpha:1,
        strokeDashoffset:0,
        ease: Power1.easeInOut,
        delay:1
    })
    .to('#body,#ring',1,{autoAlpha:0, ease:Power1.easeOut},"-=0.5")
    .to('#loading-page',1.5,{autoAlpha:0,display:"none",ease:Power1.easeOut},"-=0.5")

let selected;

function onHoverOver(id){
  selected = document.getElementById(id);
  selected.classList.remove('unselected');
  TweenMax.to('.unselected',0.2,{color:'rgba(255,255,255,0.5)'})
}

function onHoverOut() {
/*  selected = document.getElementById(id);*/
  selected.classList.add('unselected');
  TweenMax.to('.unselected',0.8, {color:'white'})
}





