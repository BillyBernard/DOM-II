// Your code goes here



// mouseover
const navHover = document.querySelector('.nav');

navHover.addEventListener('mouseover', event => {
    event.target.style.color = 'red'
});

// mouseout
navHover.addEventListener('mouseout', event => {
    event.target.style.color = 'blue'
})

//mousemove
const smallImg = document.querySelectorAll('.content-section img');

function small(event) {
    event.target.style.width = '50px'

}
smallImg.forEach(element => element.addEventListener('mousemove', small));
// smallImg.addEventListener('mousemove', event => {
//     event.target.style.width = '50px'
// })

//mouseleave
const bigImg = document.querySelector('.content-destination img')
bigImg.addEventListener('mouseleave', event => {
    event.target.style.width = '300px'
})

// wheel 
const bottomHeader = document.querySelectorAll('.destination h4');
// bottomHeader.addEventListener('wheel', event => {
//     event.target.style.fontSize = '2em';
// })

function larger(event) {
    event.target.style.fontSize = '4em'

}
bottomHeader.forEach(element => element.addEventListener('wheel', larger));

// click
const navAnchor = document.querySelector('.nav');
navAnchor.addEventListener('click', event => {
    event.target.style.color = 'green'
})


// dblclick
     navAnchor.addEventListener('dblclick', event => {
     event.target.style.color = 'yellow'
 })

 //keypress
 const pressKey = document.querySelector('.nav');
 pressKey.addEventListener('keypress', event => {
     event.target.style.fontSize = '100px'
 })

//keydown
function escKey(event) {
    if (event.key === 'Escape') {
        alert('you pressed escape!');
    }
} 
document.addEventListener('keydown', escKey);

//keyup
function enterKey(event) {
    if (event.key === 'Enter') {
        alert('you pressed enter!');
    }
} 
document.addEventListener('keyup', enterKey);

// propogation



