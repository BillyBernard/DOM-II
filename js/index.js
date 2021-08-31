// Your code goes here



// 1 mouseover
const navHover = document.querySelector('.nav');

navHover.addEventListener('mouseover', event => {
    event.target.style.color = 'red'
});

// 2 mouseout
navHover.addEventListener('mouseout', event => {
    event.target.style.color = 'blue'
})

// 3 mousemove
const smallImg = document.querySelectorAll('.content-section img');

function small(event) {
    event.target.style.width = '50px'

}
smallImg.forEach(element => element.addEventListener('mousemove', small));
// smallImg.addEventListener('mousemove', event => {
//     event.target.style.width = '50px'
// })

// 4 mouseleave
const bigImg = document.querySelector('.content-destination img')
bigImg.addEventListener('mouseleave', event => {
    event.target.style.width = '300px'
})

// 5 wheel 
const bottomHeader = document.querySelectorAll('.destination h4');
// bottomHeader.addEventListener('wheel', event => {
//     event.target.style.fontSize = '2em';
// })

function larger(event) {
    event.target.style.fontSize = '4em'

}
bottomHeader.forEach(element => element.addEventListener('wheel', larger));

// 6 click
const navAnchor = document.querySelector('.nav');
navAnchor.addEventListener('click', event => {
    event.target.style.color = 'green'
})


// 7 dblclick
     navAnchor.addEventListener('dblclick', event => {
     event.target.style.color = 'yellow'
 })

 // 8 keypress
 const pressKey = document.querySelector('.nav');
 pressKey.addEventListener('keypress', event => {
     event.target.style.fontSize = '100px'
 })

// 9 keydown
function escKey(event) {
    if (event.key === 'Escape') {
        alert('you pressed escape!');
    }
} 
document.addEventListener('keydown', escKey);

// 10 keyup
function enterKey(event) {
    if (event.key === 'Enter') {
        alert('you pressed enter!');
    }
} 
document.addEventListener('keyup', enterKey);

// propogation
function propFunc(event) {
    console.log(`event passing through ${event.currentTarget.nodeName || 'Window'}
    target --> ${event.target.nodeName}
    `)
}

window.addEventListener('click', propFunc)
firstDiv.addEventListener('click', propFunc)
document.addEventListener('click', propFunc)

document.body.addEventListener('click', (event) => event.stopPropagation())
document.body.addEventListener('click', propFunc)

firstButton.addEventListener('click', propFunc) 

// preventDefault
const anchorLinks = document.querySelectorAll('.nav-link');

anchorLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    });
});


