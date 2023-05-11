const darkmodeFun=()=>{
    document.querySelector(".lightmode").classList.toggle("darkmode");
    for(let i=0; i<5;i++){
        document.querySelectorAll(".navlinks")[i].classList.toggle("darkmode");
    }
   
    console.log("hello");
}

const scrollfun=()=>{
    document.querySelector("#features").classList.add("features1");
}