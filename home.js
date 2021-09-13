

// SLIDER -------------------------------------

let currentPosition = 0;
let activeSlide = 1

function slide(direction){
    const sliders = document.querySelectorAll('.slide')
    const slideWrapper = document.getElementById('slide-wrapper')
    const slideWidth = sliders[0].clientWidth;

    if(direction === 'next'){      
        activeSlide++;      
        if(activeSlide <= sliders.length){
            currentPosition = currentPosition - slideWidth
        }else{
            activeSlide = 1
            currentPosition = 0
        }
        slideWrapper.style.transform = `translateX(${currentPosition}px)`
    }
    else if(direction === 'prev'){
        activeSlide--;
        if(activeSlide >= 1){
        currentPosition = currentPosition + slideWidth
        }else{
            activeSlide = sliders.length;
            currentPosition = -slideWidth * (activeSlide -1)
        }
        slideWrapper.style.transform = `translateX(${currentPosition}px)`
    }   
}


// graf -------------------------------------


const data ={
    '8:00': 10,
    '8:30': 15,
    '9:00': 14,
    '9:30': 13,
    '10:00': 6,
    '10:30': 6,
    '11:00': 7,
    '11:30': 17,
    '12:00': 16,
    '12:30': 15,
    '13:00': 12,
    '13:30': 12,
    '14:00': 11,
    '14:30': 4,
    '15:00': 7,
    '15:30': 8,
    '16:00': 7,
    '16:30': 16,
    '17:00': 13,
    '17:30': 15, 
    '18:00': 15,
    '18:30': 8,
    '19:00': 8,
    '19:30': 6,
    '20:00': 12,
    '20:30': 9,
    '21:00': 7,
    '21:30': 6,
    '22:00': 8,
}


const timeBar = document.querySelectorAll('.bar')

let totaVisitors = 0;
for (var key in data) {
    totaVisitors += data[key]   
  }
  


for(let i = 0; i < timeBar.length; i++){
    let customerNumber = data[timeBar[i].getAttribute('data-time')]

    let percentage = data[timeBar[i].getAttribute('data-time')] / (totaVisitors / 100);
    
    

    timeBar[i].style.height = percentage * 10 + 'px';

    if(customerNumber < 5){
        timeBar[i].classList.add('bez-fronty')
    }
    else if(customerNumber > 5 && customerNumber < 10){
        timeBar[i].classList.add('moznost')
    }
    else if(customerNumber > 10){
        timeBar[i].classList.add('cekani')
    }

    
}


// modal --------------------

function showModal(){
    const modal = document.getElementById('modal')
    modal.classList.toggle('show')

}


window.addEventListener("scroll", function(event) {
    
    const envelope = document.getElementById('envelope')
    let top = this.scrollY;
    
    if(top > 150){
        envelope.classList.add("visible")
    }else{
        envelope.classList.remove('visible')
    }
  
}, false);

// Dropdown 

function showDropdown(){
    document.getElementById('dropdown-menu').classList.toggle('show')

}


var onresize = function(e) {
    width = e.target.outerWidth;
    height = e.target.outerHeight;
    if(width > 900){
        document.getElementById('dropdown-menu').classList.remove('show')
    }
    
 }
 window.addEventListener("resize", onresize);




