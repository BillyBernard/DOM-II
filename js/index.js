// Your code goes here

// const modal = document.querySelector('')

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
const smallImg = document.querySelector('.content-section img');
smallImg.addEventListener('mousemove', event => {
    event.target.style.width = '50px'
})

//mouseleave
const bigImg = document.querySelector('.content-destination img')
bigImg.addEventListener('mouseleave', event => {
    event.target.style.width = '100px'
})

// keydown //need help
const buttons = document.querySelector('.btn');
buttons.addEventListener('keypress', event => {
    if (event.key === 'Enter'){
    event.target.style.color = 'red'
    }
})

// wheel //need help
const bottomHeader = document.querySelector('.destination');
bottomHeader.addEventListener('wheel', event => {
    event.target.style.fontSize = '2em';
})

// click //need help
const navAnchor = document.querySelector('a');
navAnchor.addEventListener('click', event => {
    event.target.style.color = 'green'
})


// dblclick //need help
     navAnchor.addEventListener('dblclick', event => {
     event.target.style.color = 'yellow'
 })
 

