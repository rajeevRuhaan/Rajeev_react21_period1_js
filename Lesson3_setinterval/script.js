/* let counter = 0;
const DELAY = 500;

let randomNumber = 0;

while (counter<100) {
    console.log("hello");
    counter++;
}

const timer = setInterval(() => {
    console.log("hi");
},500) //nonblocking code 

setTimeout(() => {
    console.log(
    );
clearTimeout(timer)}, 2000) */


const WINNING_BULB_INDEX = 11;
const BLINKING_SPEED = 500;

let counter = 0;
let arrayOfBulbs = [];

document.getElementById("start-btn").addEventListener('click',()=> {

    const userSetSpeed = document.getElementById('speed').value,
    blinkingSpeed = userSetSpeed ? userSetSpeed : BLINKING_SPEED,
    bulbCount = document.getElementById('bulbCount');
  
    while (counter < bulbCount){
        const newEL = document.createElement('div');
        newEL.className = 'bulb';

        document.getElementById('light-bulbs').appendChild(newEL);
    
        arrayOfBulbs[counter] = false;
        counter++;
    }

    counter = 0;
    document.getElementsByClassName('bulb')[counter].classList.add('active');
   
    arrayOfBulbs[counter] = true;//initial bulb
    document.getElementsByClassName('bulb')[WINNING_BULB_INDEX].classList.add('chosen');

    const timer = setInterval(() => {
        arrayOfBulbs[counter] = false;
        document.getElementsByClassName('bulb')[counter].classList.remove('active');
    
        if (counter < bulbCount -1){
            counter++;
    
        }else{
            counter =0;
        }
    
        arrayOfBulbs[counter] = true;
        document.getElementsByClassName('bulb')[counter].classList.add('active');
    
        console.clear();
        console.log(arrayOfBulbs);
    }, blinkingSpeed);


    document.getElementById('stop-btn').addEventListener('click', () => {
        if (counter == WINNING_BULB_INDEX ){
            let message = document.getElementById("message");
           message.textContent= ("Bingo");
        }else {
            message.textContent= ("Try Again");
        }
            clearInterval(timer);
    
        })
        const arrangeBulbsInACircle = nodes => {
            const radius = '12em',
                start = -90,
                $els = [...nodes], // turn nodelist into a real array
                numberOfEls = $els.length,
                slice = 360 / numberOfEls;
    
            $els.forEach((el, index) => {
                const rotate = slice * index + start;
                const rotateReverse = rotate * (-1);
    
                el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
            })
        }
    
        // invoke the fn on the class bulb elements to create the effect
        arrangeBulbsInACircle(document.getElementsByClassName('bulb'));
})





