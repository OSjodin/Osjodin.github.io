////////////////////////////////////////////////////////////////////
///////////////////////////// GLOBALS //////////////////////////////
////////////////////////////////////////////////////////////////////
var toggle = false;
const items = 5;
var currentPage = 1;
const menuImg = "menu-img-ID-";
const img = "menu-ID-";
const txt = "menu-text-";
const mobileTxt = "menu-bar";
const mobile ="menu-bar";
const page = "page-ID-";
const pageContent = "page-content";
const pageHead = "page-head-ID-";
const defaultTransition = "0.2s linear";


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
window.addEventListener('load', SetWH, false);
window.addEventListener('resize', SetWH, false);
window.addEventListener(
  "keydown",
  (event) => {
	if (event.repeat) return;
    switch (event.key) {
      case "ArrowLeft":
        currentPage > 1 && currentPage <= items ? PreviousItem(currentPage) : '';
        break;
      case "ArrowRight":
        currentPage > 0 && currentPage < items ? NextItem(currentPage) : '';
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  },
  true
);
window.addEventListener(
  "keydown",
  (event) => {
    switch (event.key) {
      case "ArrowDown":
        document.getElementById(page + currentPage).scrollTop += 200;
        break;
      case "ArrowUp":
        document.getElementById(page + currentPage).scrollTop -= 200;
        break;
	default:
        return; // Quit when this doesn't handle the key event.
	}
  },
  true
);
////////////////////////////////////////////////////////////////////
/////////////////////////// Functions //////////////////////////////
////////////////////////////////////////////////////////////////////
function ToggleMenu(){
	toggle = !toggle;
}
function SetWH(){
	let w = window.innerWidth, h = window.innerHeight;
	for(let i=1; i<=items; i++){
		let container = document.getElementById(menuImg + i);
		container.style.minHeight = h + 'px';
		/*container.style.minWidth = 100/items + '%';*/
		container.style.minWidth = w/items + 'px';
	}
	
}

function SlideItemsX(Type, ID = "", Slide = 0, ZedIndex = false, rs = false, transitionSpeed = defaultTransition){
	let item = document.getElementById(Type + ID); //Gets the container of the img
	
	if(ZedIndex){
		item.style.zIndex = ZedIndex;
	}
	
	if(Type == img){
		let imgs = document.getElementById(menuImg + ID);
		if(!rs){
			imgs.style.filter = "grayscale(0)"; 
			imgs.style.transform = "scale(1.1)";
			imgs.style.cursor = "default";	
		}else{
			imgs.style.filter="grayscale(1)";
			imgs.style.transform = "scale(1.0)";
			imgs.style.cursor = "pointer";
		}
	}else if(Type == page || Type == pageHead){
		item.style.transition = transitionSpeed;
	}else{
		
	}
	item.style.transform = 'translateX(' + Slide + '%)'; // Slide the container to the right
	//with a multipiler based on the width of the image. 
}
function SlideItemsY(Type, ID = "", Slide = 0){
	let item = document.getElementById(Type + ID); //Gets the container of the img
	item.style.transform = 'translateY(' + Slide + '%)'; // Slide the container to the right
	//with a multipiler based on the width of the image. 
}
function ResetPage(ID,transitionSpeed = 0){
	let pages = document.getElementById(page + ID);
	pages.style.transition = transitionSpeed + "s";
	pages.style.transform = 'translateX(0)';
	//pages.style.display = "none";
}

function Menu(home = false){
	const pcMenuContainer = document.getElementById("PC-menu-container");
	const mobileLandingPage = document.getElementById("mobile-landing-page");
	const headLandingPage = document.getElementById("page-head-landpage");
	const pageContentContainer = document.getElementById(".page-content-container");
	
	ToggleMenu();
	
	
	if(getComputedStyle(pcMenuContainer).display === 'none'){
		MobileNavControl(99);
		headLandingPage.style.visibility = "visible";
		if(home){
			mobileLandingPage.style.display = "block";
			document.getElementById(txt + currentPage).style.content = "test";
		}
		SlideItemsX(mobileTxt,"",100*toggle);
			
	}else{
		for(let i=1;i<=items;i++){
			SlideItemsX(img,i,0,false,true);
			SlideItemsX(txt,i,0);
		}
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function SlideMobile(ID){
	const mobileLandingPage = document.getElementById("mobile-landing-page");
	currentPage = ID;
	mobileLandingPage.style.display = "none";
	if(toggle){
		Menu();
	}
	MobileNavControl(currentPage);
	for(let i=ID-1;i>0;i--){
		SlideItemsX(txt,i,0);
		SlideItemsX(page,i,-125,false,false,"0s");
		SlideItemsX(pageHead,i,-125,false,false,"0s");
	}
	for(let i=ID;i<=items;i++){
		SlideItemsX(txt,i, 0);
		SlideItemsX(page,i,0,false,false,"0s");
		SlideItemsX(pageHead,i,0,false,false,"0s");
	}
}
function SlideItem(ID, mobile = false){
	currentPage = ID;
	for(let i=ID-1;i>0;i--){
		SlideItemsX(img,i,-100*(i));
		SlideItemsX(txt,i,-100*(i));
		SlideItemsX(page,i,-125,false,false,"0s");
		SlideItemsX(pageHead,i,-125,false,false,"0s");
	}
	for(let i=ID;i<=items;i++){
		SlideItemsX(img,i,100*(items-i));
		SlideItemsX(txt,i, 100*(items-i));
		SlideItemsX(page,i,0,false,false,"0s");
		SlideItemsX(pageHead,i,0,false,false,"0s");
	}
}

function NextItem(){
	const pcMenuContainer = document.getElementById("PC-menu-container");
	if(getComputedStyle(pcMenuContainer).display === 'none'){
		if(toggle){
			Menu();
		}
		SlideItemsX(page,currentPage,-125);
		SlideItemsX(pageHead,currentPage,-125);
		MobileNavControl(currentPage+1);
	}else{
		SlideItemsX(img,currentPage,-100*currentPage);
		SlideItemsX(txt,currentPage,-100*currentPage);
		SlideItemsX(page,currentPage,-125);
		SlideItemsX(pageHead,currentPage,-125);
	}
	currentPage++;
}

function PreviousItem(){
	const pcMenuContainer = document.getElementById("PC-menu-container");
	if(getComputedStyle(pcMenuContainer).display === 'none'){
		if(toggle){
			Menu();
		}
		SlideItemsX(page,currentPage-1,0);
		SlideItemsX(pageHead,currentPage-1,0);
		MobileNavControl(currentPage-1);
	}else{
		SlideItemsX(img,currentPage-1,100*(items-currentPage+1));
		SlideItemsX(txt,currentPage-1,100*(items-currentPage+1));
		SlideItemsX(page,currentPage-1,0);
		SlideItemsX(pageHead,currentPage-1,0);
	}
	currentPage--;
}

function MobileNavControl(par){
	const mobileArrowLeft = document.getElementById("mobile-arrowleft");
	const mobileArrowRight = document.getElementById("mobile-arrowright");
	switch(par){
		case 1:
			mobileArrowLeft.style.visibility = "hidden";
			mobileArrowRight.style.visibility = "visible";
			break;
		case 5:
			mobileArrowRight.style.visibility = "hidden";
			mobileArrowLeft.style.visibility = "visible";
			break;
		case 99:
			mobileArrowRight.style.visibility = "hidden";
			mobileArrowLeft.style.visibility = "hidden";
			break;
		default:
			mobileArrowRight.style.visibility = "visible";
			mobileArrowLeft.style.visibility = "visible";
			break;
	}
}

function readmore(ID){
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("read-button-ID-" + ID);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
} 


