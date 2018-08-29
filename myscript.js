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
	.to('#ring', 0.5, {
		autoAlpha:1,
        strokeDashoffset:0,
        ease: Power1.easeInOut,
        delay:1
    })
    .to('#body,#ring',0.8,{autoAlpha:0, ease:Power1.easeOut},"-=0.5")
   /* .to('#loading-page',1.5,{autoAlpha:0,display:"none",ease:Power1.easeOut},"-=0.5")*/
	.fromTo('#loading-page',0.1,{top:0},{top:'-20vh', ease:Power1.easeOut})
	.to('#loading-page, #loading-backdrop', 0.5,/*{top:0},*/{top:'-100vh'/*, ease:Power1.easeInOut*/})
	.to('#main-header-cover',0.4,{height:0, transformOrigin:"bottom", ease:Power2.easeOut},'-=0.2')
	.fromTo('#home-main-letters > path',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-subheader',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-navbar > li', 0.5,{autoAlpha:0,paddingTop:"2em"},{autoAlpha:1,paddingTop:0})
	/*.to('#loading-backdrop',0.5,{scaleY:0,ease:Power2.easeOut})*/
/*var tl = new TimelineMax('loading-backdrop',0.3,{ repeat: 1, yoyo: true, scaleY:3,ease:ExpoScaleEase(zoom,1,Power1.easeOut) },0)
  .to(test._mask, 1, { scaleY: 3, ease: ExpoScaleEase(zoom, 1, Power1.easeOut) }, 0)
 	*/

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





