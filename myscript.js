let  menuOpenBtn= document.getElementById('menu-open-btn');
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
function scrollToSectionNoToggle(id){
	let el = document.getElementById(id)
	el.scrollIntoView({behavior:"smooth",block:"start"});

}



