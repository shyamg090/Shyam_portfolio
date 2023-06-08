
// -------------------------dark mode functionality----------------------------------------------------
const darkmodeFun = () => {
    document.querySelector(".lightmode").classList.toggle("darkmode");

    let navlinks= document.querySelectorAll('.navlinks');
    for(let i=0; i<navlinks.length; i++){
        navlinks[i].classList.toggle('darkmode');
    }
}

// ----------------------------intersection observer animation--------------------------------------
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const animation= document.querySelectorAll('.hidden');
animation.forEach((div) => observer.observe(div));
//passing each of the div with hidden to customObserver.observe()


// ----------------------------download link for resume--------------------------------------
// https://drive.google.com/file/d/1-uP_WQPEHEijsOPtSJ4-WmYsHgyIuG8H/view?usp=share_link
const downloadFun = ()=>{
    window.open('https://drive.google.com/file/d/1Z0xDsCFbdd-42yLqwRXU0nxMhq9mTALe/view?usp=sharing', '_blank');
}


// ---------------pop up ---------------------------------------------------
const popupDiv= document.querySelector('.customPopup');
const popup= document.querySelector('.popup');

window.onload = ()=>{
    console.log("helloloaded");
     popup.style.display="block";
     
}

const popupClicked= ()=>{
    popup.style.display="none";
    popupDiv.style.backgroundColor="rgba(0, 0, 0, 0)";
    popupDiv.style.zIndex="-1";
}
