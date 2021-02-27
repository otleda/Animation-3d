// Get Element
const container = document.querySelector('.container');
const card = document.querySelector('.card');

//Items
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.info h1');
const buy = document.querySelector('.buy button');

container.addEventListener('mousemove', (event)=>{
    let xAxis = (window.innerWidth / 2 - event.pageX) / 10;
    let yAxis = (window.innerWidth / 2 - event.pageY) / 10;

    card.style.transform = `
        rotateX(${xAxis}deg)
        rotateY(${yAxis}deg)
   `
});

//Animation In
container.addEventListener('mouseenter', event =>{
    card.style.transition = 'all .3s linear';
    sneaker.style.transition = 'all .3s .2s linear';
    //Popout
    title.style.transform = 'translate3d(100px)';
    sneaker.style.transform = 'translateZ(60px) rotateZ(-25deg)';
});
 
//Animation Out
container.addEventListener('mouseleave', event =>{
    card.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
`
    card.style.transition = 'all .3s linear';
    sneaker.style.transition = 'all .3s .2s linear';
     //Popin
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0) rotateZ(0deg)';
});
