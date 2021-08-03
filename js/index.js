//constants 
const busImage = document.querySelector('.intro img');
console.log(busImage);
const funBus = document.querySelector('h1');
funBus.textContent = 'Fun Bus, Explore my buttons'
const homeLink = document.querySelector('nav a:nth-of-type(1)');
homeLink.textContent = 'What is this?';
const changeLink = document.querySelector("nav a:nth-of-type(2)");
changeLink.textContent = 'Change BG';
const imgLink = document.querySelector("nav a:nth-of-type(3)");
imgLink.textContent = 'Change IMG';
const contactLink = document.querySelector("nav a:nth-of-type(4)");
contactLink.textContent = 'Call me!';
const headerBG = document.querySelector('header');

// Your code goes here
//1st
window.onload = function (event){
    alert('Welcome to the real world, if youre feeling adveturous click ok to continue, otherwise get hacked');
};

//2nd
function changeColor(){
    console.log('Change color');
    document.body.style.backgroundColor = 'red';
    
}
changeLink.addEventListener('click',changeColor);

// document.createElement('button')
// body.append()

//3rd
function changeImageFunc(){
console.log('This changed the bus image');
busImage.setAttribute('src', 'https://cdn.hiconsumption.com/wp-content/uploads/2020/02/20-Fastest-Cars-FB.jpg');
}
imgLink.addEventListener('click',changeImageFunc);

//4th
function changeHeader(){
    console.log('changed header bg image');
    headerBG.style.backgroundImage = "url('https://graphicriver.img.customer.envatousercontent.com/files/263515445/01sky_background_with_sun_and_wooden_floor_t.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=4d4471eb50eb04a06003985b4e597dcd')";
headerBG.style.backgroundPosition = "center";
headerBG.style.backgroundAttachment = "fixed";
headerBG.style.backgroundRepeat = "none";
}

headerBG.addEventListener('click',changeHeader);

//5th hover over

function newTitle(){
    console.log('hovered over title');
    funBus.textContent = 'Yeahhhhhh!';
}

function resetTitle(){
    console.log('mouse left the title');
    funBus.textContent = 'Touch me';
}


funBus.addEventListener('mouseenter', newTitle);
funBus.addEventListener('mouseleave', resetTitle);


// 6th Click me lol
