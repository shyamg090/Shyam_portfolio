alert("Press the Sun for Dark Mode");

const darkmodeFun = () => {
    document.querySelector(".lightmode").classList.toggle("darkmode");
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll(".navlinks")[i].classList.toggle("darkmode");
    }

    console.log("hello");
}

