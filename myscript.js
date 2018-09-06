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
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var t = new TimelineMax();

setStripeBackground();
document.getElementById("stripe-bg").style.height = 0;

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
    .to('#body,#ring',1,{autoAlpha:0, ease:Power1.easeOut},"-=0.2")
	.fromTo('#loading-page',0.1,{top:0},{top:'-20vh', ease:Power1.easeOut})
	.to('#loading-page, #loading-backdrop', 0.5,{top:'-100vh'})
	.to('#main-header-cover',0.4,{height:0, transformOrigin:"bottom", ease:Power2.easeOut},'-=0.2')
	.fromTo('#home-main-letters > path',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-subheader',0.5,{autoAlpha:0},{autoAlpha:1,ease:Power2.easeInOut},'-=0.3')
	.fromTo('#home-navbar > li', 0.5,{autoAlpha:0,paddingTop:"2em"},{autoAlpha:1,paddingTop:0})
	.call(moveStripesDownward)
	.fromTo('#scroll-svg',1,{autoAlpha:0,bottom:0},{autoAlpha:1,bottom:"4em",ease:Power1.easeOut},"-=0.5")
	.call(showOverflow)
	.to('body',1,{overflowY:"scroll"},"+=1")

function showOverflow(){
	if(document.getElementsByTagName('title')[0].innerText != "home : colibritech"){
		document.getElementsByTagName('body')[0].style.overflowY = "scroll";
	}
}

/*CENTER COLUMN BG ON WINDOW RESIZE*/

let resizeId;
window.addEventListener('resize', function(){
	clearTimeout(resizeId);
	resizeId = setTimeout(doneResizing, 500);
});

function doneResizing(){
	if(document.getElementById('stripe-bg')) setStripeBackground();
}


// adjusts the left attribute of #stripe-bg to center #div17 and #div18
 function setStripeBackground(){
 	let a = window.innerWidth;
 	let b = document.getElementById("div17").offsetWidth;
 	let total = a-18*b;
 	document.getElementById("stripe-bg").style.left = total + "px";

 	let centerX = a/2;
 	let centerStripe = document.getElementById('div17').getBoundingClientRect();
 
 	if(centerStripe.right != centerX){ // if not centered adjust further 
 		let x;
 		if(centerStripe.right < centerX){ // 'pushes' #stripe-bg element to the right 
			x = centerX - centerStripe.right;
			total+=x;
		}else{// 'pulls' #stripe-bg to the left
			x = centerStripe.right - centerX;
			total-=x;
		}
		document.getElementById("stripe-bg").style.left = total + "px";
 	}
 }


/* MENU ANIMATION*/
let selected;

function onHoverOver(id){
  selected = document.getElementById(id+"-option");
  selected.classList.remove('unselected');
  TweenMax.to('.unselected',0.2,{color:'rgba(255,255,255,0.5)'})
}

function onHoverOut() {
  selected.classList.add('unselected');
  TweenMax.to('.unselected',0.8, {color:'white'})
}

/* MOBILE MENU BUTTON*/

const menuBtn = document.getElementById('menu-btn');

function toggleBtn(){
  menuBtn.classList.toggle("change");
  deactivate();
  toggleStripes();
}


/*OPTIONAL ANIMATIONS*/

// CREATES 'OPENING BLINDS' EFFECT

let i = true;
function toggleStripes(){
	if(i){
		document.getElementById('stripe-bg').style.zIndex = 0;
		document.getElementById('mobile-menu').style.display = "block";
		t.fromTo('.stripes > div',0.5, {width:0}, {width:"100%"})
		t.to('.stripes',0.1,{borderRight:'black'})
		t.fromTo('#mobile-menu > ul > li',0.8,{marginTop:"2em"},{marginTop:0},"-=0.5")
		t.to('#mobile-menu > ul > li > a',0.2, {color:"white"},"-=1")
	}else{
		t.to('#mobile-menu > ul > li',0.2,{marginTop:"-0.5em"})
		t.to('#mobile-menu > ul > li',0.2,{marginTop:"1.5em"})
		t.to('#mobile-menu > ul > li > a',0.2,{color:"transparency"},"-=0.1")
		t.to('#mobile-menu',0.1,{display:"none"})
		t.fromTo('.stripes > div',0.4, {width:"100%"}, {width:0},"-=0.3")
		t.to('.stripes',0.1,{borderRight:'1px solid rgba(255,255,255,0.2)'},"-=0.1")
		t.to('#stripe-bg',0.01,{zIndex:-1})
		
	}
	t.call(finished);
	t.call(activate);

}

function deactivate(){
	document.getElementById('menu-btn').style.pointerEvents = "none";
}

function activate(){
	document.getElementById('menu-btn').style.pointerEvents = "auto";
}

function finished(){
	i = (i === true ? false:true);
}
// CREATES A 'GROWING DOWNWARD' EFFECT ON THE STRIPES
function moveStripesDownward(){
	TweenMax.fromTo('#stripe-bg',0.8, {height:"0"}, {height: "100%", ease:Power1.easeInOut})
}


/*SCROLLING FUNCTIONS*/
function scrollToSectionNoToggle(id){
	console.log("clicked")
	let el = document.getElementById(id)
	el.scrollIntoView({behavior:"smooth",block:"start"});
}

let nav = document.getElementById('mobile-navbar');
window.addEventListener('scroll', function(e){

	let rect = document.getElementById('scroll-svg').getBoundingClientRect();
  /*el = document.elementFromPoint(0,60);*/
  
    if((rect.top +50 ) < 0 && nav.classList.contains("hide")){
  	  	nav.classList.remove('hide');
  	  	console.log("show navbar")
    }else if((rect.top + 50)>= 0 && !nav.classList.contains("hide")){
    	nav.classList.add('hide');
    	console.log("don't show navbar")
    }

});


function scrollToSection(id){
	let el = document.getElementById(id)
	el.scrollIntoView({behavior:"instant",block:"start"});
	toggleStripes();
}


