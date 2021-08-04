//constants 
const busImage = document.querySelector('.intro img');
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
const letsGo = document.querySelector('section h2');
console.log(letsGo);
const button1 = document.createElement('button');
button1.textContent = 'Click me LOL';
document.head.prepend(button1);
button1.style.position = 'center';
const pictureOne = document.querySelector('section img');
const pictureTwo = document.querySelector('.img-fluid');
console.log(pictureOne)
const sectionThree = document.querySelector('section:nth-of-type(3)');
const imageBoat = document.querySelector('section:nth-of-type(3) img');
console.log(imageBoat);

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

//7th Let's go hover over
function changeLetsGo(){
    console.log('hovered over lets go');
    letsGo.textContent = 'Stop!'
}
function stopText(){
    console.log('left lets go');
    letsGo.textContent = 'Come back!';
}
letsGo.addEventListener('mouseenter',changeLetsGo);
letsGo.addEventListener('mouseleave', stopText);


// 6th Dissapear pictures
function lost(){
    console.log('picture one hover over');
    pictureOne.classList.toggle('off');
}
function recover(){
   setTimeout (function()
   {pictureOne.classList.toggle('off')}, 350);
}

function lost2(){
    console.log('picture one hover over');
    pictureTwo.classList.toggle('off');
}
function recover2(){
   setTimeout (function()
   {pictureTwo.classList.toggle('off')}, 350);
}
pictureOne.addEventListener('mouseenter', lost);
pictureOne.addEventListener('mouseleave', recover)

pictureTwo.addEventListener('mouseenter', lost2);
pictureTwo.addEventListener('mouseleave',recover2)

//7th section pink

function pinkBG (){
    setTimeout(function(){
        console.log('bg changed')
        sectionThree.classList.toggle('bgColor');
    },100);
}

sectionThree.addEventListener('mouseenter',pinkBG)

//8th shrink boat
function shrink(){
    setTimeout(function(){
imageBoat.classList.toggle('scaleUp');
    }, 300);
}
imageBoat.addEventListener('dblclick', shrink);
