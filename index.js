alert("Press the Sun for Dark Mode");

const darkmodeFun = () => {
    document.querySelector(".lightmode").classList.toggle("darkmode");
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll(".navlinks")[i].classList.toggle("darkmode");
    }

    console.log("hello");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
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

// https://drive.google.com/file/d/1-uP_WQPEHEijsOPtSJ4-WmYsHgyIuG8H/view?usp=share_link

const downloadFun = ()=>{
    window.open('https://drive.google.com/file/d/1AFq4tMxHpK8GMnqoZ1SrECAwKf3QhH6a/view?usp=drivesdk', '_blank');
}