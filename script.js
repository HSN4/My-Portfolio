let cv = document.querySelector(".cv");
cv.onclick=()=>{
    alert("cv is not complete (;")
}
let cursor = document.querySelector(".cursor"),
cursorScale = document.querySelectorAll(".cursor-Scale");
document.addEventListener('mousemove',e =>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})

cursorScale.forEach(link =>{
    link.addEventListener("mouseleave",()=>{
        cursor.classList.remove("grow" )
        cursor.classList.remove("grow-small")

    });
    link.addEventListener("mousemove",()=>{
        cursor.classList.add("grow" )
        if(link.classList.contains("small")){
            cursor.classList.remove("grow"),
            cursor.classList.add("grow-small")
        }
    })
})
// welcome page and landing information --------------------------------
var im = document.querySelector(".landing .container img"),
    information = document.querySelector(".landing .container .info"),
    heading1 = document.querySelector(".landing .container .info h1");
window.addEventListener("load",function(){
        im.classList.add("active")
        information.classList.add("active")
        heading1.classList.add("active")
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


// ======================================= categories ===============================================
var categoryItem=Array.from(document.querySelectorAll(".category li"));


function removeAllCard(){
    templat.forEach(t=>{
        t.classList.remove("act")
    })
}
// categoryItem.forEach(e=>{
//     e.onclick = function(){
//         removeActive()
//         e.classList.add("active")
//     }
// })
function removeActive(){
    categoryItem.forEach(e=>{
        e.classList.remove("active")
    })
}
categoryItem[0].onclick=function(){
    removeAllCard()
    templat.forEach(t=>{
        if(!t.classList.contains("all")){
            t.classList.add("act")
        }
        removeActive()
        categoryItem[0].classList.add("active")
    })
}
categoryItem[1].onclick=function(){
    removeAllCard()
    templat.forEach(t=>{
        if(!t.classList.contains("frontend")){
            t.classList.toggle("act")
        }
        removeActive()
        categoryItem[1].classList.add("active")
    })
}
categoryItem[2].onclick=function(){
    removeAllCard()
    templat.forEach(t=>{
        if(!t.classList.contains("ui/ux")){
            t.classList.add("act")
        }
        removeActive()
        categoryItem[2].classList.add("active")
    })
}

// ===========================================================================


// animation 
var skills = document.querySelector(".my-skills"),
    header1 = document.querySelector(".my-skills h1");

var fter=document.querySelector(".my-skills h1::after"),
    allbox = Array.from(document.querySelectorAll(".container .box"));

var myWork =document.querySelector(".my-works"),
    templat=Array.from( document.querySelectorAll(".templet")),
    heading3=document.querySelector(".my-works h3"),
    category=document.querySelector(".category");


window.onscroll=function(){
        if ( window.scrollY >= skills.offsetTop -300  &&  window.scrollY <= skills.offsetTop +350  ){
            header1.classList.add("active");
    
            
        }else{
            header1.classList.remove("active");
        }
    
        if(window.scrollY >= skills.offsetTop -200 && window.scrollY <= skills.offsetTop +350){
            allbox.forEach(e=>{
                e.classList.add("active")
            })
            
        }else{
            allbox.forEach(e=>{
                e.classList.remove("active")
            })
    
            
        }if(window.scrollY >= myWork.offsetTop -400 && window.scrollY<=myWork.offsetTop+600 ){
                heading3.classList.add("active")
                category.classList.add("active")
                for(let i = 0 ; i<templat.length;i++){
                    setTimeout(() => {
                        templat[i].classList.add("active")
                    },1000);
                }
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