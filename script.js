/* SLIDER */
const bannerSlides = document.getElementById("bannerSlides");
const totalBanner = bannerSlides.children.length;
let bannerIndex = 0;
setInterval(()=>{
  bannerIndex = (bannerIndex+1)%totalBanner;
  bannerSlides.style.transform = `translateX(-${bannerIndex*10}%)`;
},7000);

function delayLink(e,el){
  e.preventDefault();         
  el.classList.add("clicked"); 

  const url = el.getAttribute("href");
  setTimeout(()=>{
    window.location.href = url;
  },1000); 
}