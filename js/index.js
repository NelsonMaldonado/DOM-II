// Your code goes here
const headerGrandParent = document.querySelector('.main-navigation')
const busImg = document.querySelector('.busImg')

busImg.addEventListener("click", eve =>{
    console.log(eve)
})

document.addEventListener("click", e =>{
    console.log('You clicked on the document')
})