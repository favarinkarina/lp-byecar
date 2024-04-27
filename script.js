const CARD = [
    {
        img: "/assets/img-card-1.png",
     
    },
    {
        img: "./assets/img-card-2.png",
      
    },
];

let liEls = document.querySelectorAll(".carousel-cards li");
let index = 0;

function show(increase){
    index = index + increase;
    index = Math.min(Math.max(index,0), liEls.length - 1);
    liEls[index].scrollIntoView({behavior: "smooth"});
}

setInterval (() => {
    if(index === liEls.length -1) {
        show(index -1);
    } else {
        show(index + 1);
    }
}, 5000);
