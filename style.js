

setStripeBackground();

moveStripesDownward();

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


/*OPTIONAL ANIMATIONS*/

//CREATES 'OPENING BLINDS' EFFECT
let i = true;
function toggleStripes(){
	console.log("toggle");
	console.log(i);
	if(i){
		TweenMax.fromTo('.stripes > div',0.5, {width:0}, {width:"100%"});
		TweenMax.to('.stripes',0.5,{borderRight:'1px solid rgba(255,255,255,1)'})
		i=false;
	}else{
		TweenMax.fromTo('.stripes > div',0.5, {width:"100%"}, {width:0});
		TweenMax.to('.stripes',0.5,{borderRight:'1px solid rgba(255,255,255,0.2)'})
		i=true;
	}

}
 
// Creates a growing downward effect on the stripes background
function moveStripesDownward(){
	TweenMax.fromTo('#stripe-bg',2, {height:"0"}, {height: "100%", ease:Power1.easeInOut})
}


 


