const container = document.querySelector('.container');
const card = document.querySelector('.card');
const sneaker = document.querySelector('.sneaker');

container.addEventListener('mousemove', (event)=>{
    let xAxis = (window.innerWidth / 2 - event.pageX) / 5;
    let yAxis = (window.innerWidth / 2 - event.pageY) / 5;

    card.style.transform = `
        rotateX(${xAxis}deg)
        rotateY(${yAxis}deg)
   `
});
//Animation In
container.addEventListener('mouseenter', event =>{
    card.style.transition = 'none';
});
//Animation Out
container.addEventListener('mouseleave', event =>{
    card.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
`
card.style.transition = 'all .3s linear' ;
});
