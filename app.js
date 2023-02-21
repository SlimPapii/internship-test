const btn = document.querySelector('.icon');
const times = document.querySelector('.fa-times');
const container = document.querySelector('.list-container');

btn.addEventListener('click', function(){
    // container.classList.toggle("list-container");
    container.style.transform = "translateY(0)";
})
times.addEventListener('click', function(){
    // container.classList.toggle("list-container");
    container.style.transform = "translateY(-100%)";
})
const slide = [
    {
        img: "images/Stylish Me.jpg",
    },
    {
        img: "images/DY.png",
    },
    {
        img: "images/Lekan.JPG",
    },
    {
        img: "images/Fago and Me.png",
    },
    {
        img: "images/Toyeeb and Me.JPG",
    }
];

const pic = document.getElementById("img-friends");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");


let currentItem = 0;


function showPerson(person){
    const roll = slide[person];
    pic.src = roll.img
}
rightBtn.addEventListener('click', function(){
    if (currentItem > slide.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem++);
})
leftBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
    currentItem =  slide.length - 1;
    }
    showPerson(currentItem);
})