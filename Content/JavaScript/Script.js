let Home = document.getElementById("Home")
let Mercury = document.getElementById("Mercury")
let Venus = document.getElementById("Venus")
let Earth = document.getElementById("Earth")
let Mars = document.getElementById("Mars")
let Jupiter = document.getElementById("Jupiter")
let Saturn = document.getElementById("Saturn")
let Uranus = document.getElementById("Uranus")
let Neptune = document.getElementById("Neptune")
let Pluto = document.getElementById("Pluto")
let SolarSystem = document.getElementById("SolarSystem")
let MovingSpace = document.getElementById("MovingSpace")
let TooMoveOrNotTooMove = false

MovingSpace.style.left = "0px"
MovingSpace.classList.add("MovingSpace")

CurrentPosition = MovingSpace.offsetLeft 
        console.log(CurrentPosition)
        MovingSpace.style.left = CurrentPosition
        MovingSpace.animate([
            // keyframes
            { left: '0px' },
            { left: '-17280px' }
          ], {
            // timing options
            duration: 100600,
            iterations: Infinity,
            easing: 'linear'
          });


function SunMove() {
    SolarSystem.style.left = "0px"
}

function MercuryMove() {
    SolarSystem.style.left = "-1920px"
}

function VenusMove() {
    SolarSystem.style.left = "-3840px"
}

function EarthMove() {
    SolarSystem.style.left = "-5760px"
}

function MarsMove() {
    SolarSystem.style.left = "-7680px"
}

function JupiterMove() {
    SolarSystem.style.left = "-9600px"
}

function SaturnMove() {
    SolarSystem.style.left = "-11520px"
}

function UranusMove() {
    SolarSystem.style.left = "-13440px"
}

function NeptuneMove() {
    SolarSystem.style.left = "-15360px"
}

function PlutoMove() {
    SolarSystem.style.left = "-17280px"
}

function SpaceStop(){


    if (TooMoveOrNotTooMove = !TooMoveOrNotTooMove){ // Confusing switch but Assignment evaluates to the value that was assigned. 
                                                    // In this case, the condition will alternate between true and false 
                                                   // because it's inverting the TooMoveOrNotTooMove and returning it each time. could also be written with != but then
                                                  // then you would need too switch the value at each statement, but this would unnecessarily lengthen the code 

        CurrentPosition = MovingSpace.offsetLeft + "px"
        console.log(CurrentPosition)
        MovingSpace.classList.remove("MovingSpace")
        MovingSpace.animate([
            // keyframes
            { left: CurrentPosition },
            { left: CurrentPosition }
          ], {
            // timing options
            duration: 1,
            iterations: Infinity,
            easing: 'linear'
          });
          MovingSpace.style.left = CurrentPosition
    }

    else{
        CurrentPosition = MovingSpace.offsetLeft 
        console.log(CurrentPosition)
        MovingSpace.style.left = CurrentPosition
        MovingSpace.animate([
            // keyframes
            { left: CurrentPosition },
            { left: '-17280px' }
          ], {
            // timing options
            duration: 100600,
            iterations: Infinity,
            easing: 'linear'
          });
        
    }
    
}


