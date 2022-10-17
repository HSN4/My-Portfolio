// welcome page and landing information --------------------------------
var wellcome = document.querySelector(".welcome"),
    im = document.querySelector(".landing .container img"),
    information = document.querySelector(".landing .container .info"),
    heading1 = document.querySelector(".landing .container .info h1");
window.addEventListener("load",function(){
    setTimeout(() => {
        wellcome.classList.add("hide")
    }, 1000);
    setTimeout(() =>{
        im.classList.add("active")
        information.classList.add("active")
        heading1.classList.add("active")
    },1000)
})
// nav -----------------------------------------------------------------
var toggler = document.querySelector(".toggler"),
    nav = document.querySelector(".main-nav")

toggler.addEventListener("click",() => {
    toggler.classList.toggle("active")
    nav.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach((item)=>{ item.
    addEventListener("click",()=>{
        toggler.classList.remove("active")
        nav.classList.remove("active")});
});

// landing --------------------------------------------------------------




// link small screen------------------------------------------------------
document.querySelectorAll("ul li a") .forEach((itm) =>{
    itm.addEventListener("click",()=> {
        document.querySelector("a.active").classList.remove("active");
        itm.classList.add("active")
    });
}); 

// dark mode 
var icon = document.querySelector(".moon"),
    sun_Icon = document.querySelector(".sun-icon")
icon.onclick = function(){
    document.body.classList.add("dark-theme")
    sun_Icon.classList.add("iconactiv")
    icon.style.display='none'
}
sun_Icon.onclick = function(){
    document.body.classList.remove("dark-theme")
    icon.style.display='inline-block'
    sun_Icon.classList.remove("iconactiv")
}

// animation 
var skills = document.querySelector(".my-skills"),
    header1 = document.querySelector(".my-skills h1")

var fter=document.querySelector(".my-skills h1::after"),
    box1=document.querySelector(".my-skills .container .box:nth-child(1)"),
    box2=document.querySelector(".my-skills .container .box:nth-child(2)"),
    box3=document.querySelector(".my-skills .container .box:nth-child(3)"),
    icon1 = document.querySelectorAll(".icon");

var myWork =document.querySelector(".my-works"),
    templat=Array.from( document.querySelectorAll(".templet")),
    heading3=document.querySelector(".my-works h3");


window.onscroll=function(){
    if ( window.scrollY >= skills.offsetTop -300  &&  window.scrollY <= skills.offsetTop +350  ){
        console.log(skills.offsetTop)
        header1.classList.add("active");        
    }else{
        header1.classList.remove("active");
    }

    if(window.scrollY >= skills.offsetTop -200 && window.scrollY <= skills.offsetTop +350){
        box1.classList.add("active");
        box2.classList.add("active");
        box3.classList.add("active");
        icon1.forEach(element => {
            element.classList.add("active")
        });   
    }else{
        box1.classList.remove("active");
        box2.classList.remove("active");
        box3.classList.remove("active");
        icon1.forEach(element => {
            element.classList.remove("active")
        });
        
    }
    
    if(window.scrollY >= myWork.offsetTop -400 && window.scrollY<=myWork.offsetTop+200 ){
            heading3.classList.add("active")
            setTimeout(() => {
                    templat[0].classList.add("active")
            },600);
            setTimeout(() => {
                   templat[1].classList.add("active")
            },1000);
            setTimeout(() => {
                   templat[2].classList.add("active")
            },1300);
    }
    if(window.scrollY >= skills.offsetTop -300){
        up.classList.add("show")
    }else{
        up.classList.remove("show")

    }
}
var up = document.querySelector(".up");
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}