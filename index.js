
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


// ----------------------------download link for resume + links(social media)--------------------------------------
// https://drive.google.com/file/d/1-uP_WQPEHEijsOPtSJ4-WmYsHgyIuG8H/view?usp=share_link
const downloadFun = ()=>{
    window.open('https://drive.google.com/file/d/1LbbOrMDGsHSHi9E330VhLO8qAhKmAU4B/view?usp=sharing', '_blank');
}

const github =()=>{
    window.open('https://github.com/shyamg090', '_blank');
}
const linkedin =()=>{
    window.open('https://www.linkedin.com/in/shyam-g-6712a522b', '_blank');
}
const twitter =()=>{
    window.open('https://twitter.com/_Shyam_G', '_blank');
}
const instagram =()=>{
    window.open('https://www.instagram.com/shyam_g__/', '_blank');
}

const project1 =()=>{
    window.open('https://pokedex-by-shyam.netlify.app/','_blank');
}
const github1=()=>{
    window.open('https://github.com/shyamg090/Pokedex-React-project','_blank');
}

const project2 =()=>{
    window.open('https://foodcarti.netlify.app/','_blank');
}
const github2 =()=>{
    window.open('https://github.com/shyamg090/foodcarti/','_blank');
}
const project3 =()=>{
    window.open('https://todo-by-shyam.netlify.app/','_blank');
}
const github3 =()=>{
    window.open('https://github.com/shyamg090/todo-react/','_blank');
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
