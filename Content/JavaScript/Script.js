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
let PlanetName = document.getElementById("PlanetName")
let PlanetFact = document.getElementById("PlanetFact")
let PlanetSize = document.getElementById("PlanetSize")
  

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


          function HomeMove() {
            SolarSystem.style.left = "-5760px"
            PlanetName.innerHTML = "The solar system"
            PlanetFact.innerHTML = "Our solar system is made up of a star—the Sun—eight planets, <br> 146 moons, a bunch of comets, asteroids and space rocks, ice, <br> and several dwarf planets, such as Pluto. The eight planets are <br> Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and <br> Neptune. Mercury is closest to the Sun"
            // setTimeout(function(){ SolarSystem.style.width = "scal"; }, 500);
  


        }        


function SunMove() {
    SolarSystem.style.left = "0px"
    PlanetName.innerHTML = "The Sun"
    PlanetFact.innerHTML = "The Sun is the star at the center of the solar system. <br> It is a hot ball of gases that gives off great amounts of energy. <br> Life on Earth depends on light and heat from the Sun."
}

function MercuryMove() {
    SolarSystem.style.left = "-1920px"
    PlanetName.innerHTML = "Mercury"
    PlanetFact.innerHTML = "The planet Mercury is a bit larger than the Earth’s moon. It is the smallest planet in our solar system and the closest planet to the sun. <br> It is a terrestrial planet, which means it is an Earth-like planet made up of rocks or metals and has a hard surface. <br> Other planets like Saturn are made of gas. Like Venus, it has no moons and no rings around it."
}

function VenusMove() {
    SolarSystem.style.left = "-3840px"
    PlanetName.innerHTML = "Venus"
    PlanetFact.innerHTML = "The planet Venus is a little smaller than Earth and similar in mass and density, (what it’s made up of). It has a similar level of gravity too. <br>It has no rings round it, no moons and it spins backwards. What this means is that on Venus the sun rises in the West and sets in the East, which is the opposite to Earth."
}

function EarthMove() {
    SolarSystem.style.left = "-5760px"
    PlanetName.innerHTML = "Earth"
    PlanetFact.innerHTML = "Read our facts about Earth and review our question sheet in the activity section at the end to test your knowledge of our wonderful home planet! <br> We live in a very special place, a place we call home…and that’s Earth! Here we’ve got some awesome facts about Earth that will knock your socks off. <br> <br> Did you know that the Earth isn’t really round? It’s actually more of a sphere shape. The reason for this is because of gravitational pull. This pull gives it a few bulges and bumps…so watch where you walk! Bet you thought there were 24 hours in a day. Yes? Well there actually aren’t, there are 23 hours, 56 minutes and 4 seconds. Remember that fact and tell your teacher next time she asks, maybe you’ll surprise her!"
}

function MarsMove() {
    SolarSystem.style.left = "-7680px"
    PlanetName.innerHTML = "Mars"
    PlanetFact.innerHTML = "Firstly, did you know that the month of March is named after Mars? Well it is, and now you know! The soil on Mars is red in color. How weird is that? But this is due to iron oxide, which is a chemical made from iron and oxygen…ah so that’s where it gets its name from. And believe it or not this soil feels like talcum powder. All the rocks on the surface are actually rusting because of this. Wow. Mars is a pretty dangerous place to visit. The pressure up there is extremely low. If an astronaut decided to visit there without a proper space suit on, his blood would bubble and he wouldn’t live for very long if that happened! No trips to Mars then!"
}

function JupiterMove() {
    SolarSystem.style.left = "-9600px"
    PlanetName.innerHTML = "Jupiter"
    PlanetFact.innerHTML = "Jupiter is the largest planet in our Solar System and you know what, it is seriously large. Not even seriously large, it is MASSIVE. Now think about this…it’s so big that more than 1,300 Earths would fit into it. Yes really. Its diameter is 88,700 miles (142,750 kilometers) wide. planets-for-kids That would be like traveling to Australia to the US 11 times! So we know it’s really, really, really big, but what about the mass? Well the mass of it is more than 318 times the mass of earth. Whoa, that’s unbelievable. But even more unbelievable is that it has 2.5 times the mass of ALL the other planets in our Solar System combined."
}

function SaturnMove() {
    SolarSystem.style.left = "-11620px"
    PlanetName.innerHTML = "Saturn"
    PlanetFact.innerHTML = "Like Neptune, Saturn is a large gas planet made mostly of hydrogen and helium. It spins so fast that it has flattened out on the top and bottom and widened in the middle, by the equator, just like the Earth. It doesn’t have a solid surface and being the second largest planet in our solar system it can be seen with the naked eye from Earth. <br> <br> What about Saturn’s Rings? Today we know that there is a distance of 3,000 miles (4,800 kilometers) between these rings which is called the Cassini Division. The rings have a yellow or gold color which is from the rising heat from the planet’s interior combined with the super powerful winds which blow at 1,118 (1,800 kilometers) per hour. <br> <br> Saturn has at least 53 moons. Wow that’s a lot. Some of them orbit the planet within the rings and create gaps. They have wonderful names like Titan, Pandora and Calypso. There are apparently another 9 moons which we’re waiting to hear if it’s true or not. Some of these moons apparently have conditions that could support life, but the planet Saturn itself certainly can’t."
}

function UranusMove() {
    SolarSystem.style.left = "-13440px"
    PlanetName.innerHTML = "Uranus"
    PlanetFact.innerHTML = "So it looks like a boring blue ball, but obviously we can’t really see the bands of clouds and storms that you see on Jupiter and Saturn. But if you look just a little closer in other wavelengths, like infrared, you’ll actually see these bands and cloud patterns. saturn facts Early observations of Uranus didn’t show much, but telescopes got more advanced and in the 1990s you could see that Uranus has bright regions in its atmosphere. Some of the cloud patterns on Uranus only last for hours, while others have been around since the Voyager flyby in 1986. Apparently the wind speeds are something quite spectacular too, with gusts moving at a rapid pace."
}

function NeptuneMove() {
    SolarSystem.style.left = "-15360px"
    PlanetName.innerHTML = "Neptune"
    PlanetFact.innerHTML = "Like Uranus, it is the methane that gives it its bluish color as it reflects the blue wavelengths of light from the sun, but no one yet knows why the blue of Neptune is such a vivid, bright blue. Neptune has large dark circles on its surface which astronomers think are storms and it has the windiest weather even known in the solar system. The winds are so strong that they push frozen clouds of natural gas at speeds of 1,300 miles (2,000 kilometers) per hour making it impossible for any human being to withstand its force. No one knows what the reason is for these powerful winds as it is far from the sun and has little natural heat."
}

function PlutoMove() {
    SolarSystem.style.left = "-17280px"
    PlanetName.innerHTML = "Pluto :("
    PlanetFact.innerHTML = "Pluto is in fact NOT a plant Pluto is a Dwarf Planet, Isn’t that just terrible? One of our precious 9 planets is no longer considered a planet! When did that happen you ask? Way back in 2006. Since then, time and gain, there have been rumors regarding the restoration of its planetary status. But none of them are true. Pluto will never be a planet again. Why not, you ask? Orbit around the sun. Have enough mass so that its own gravity overcomes the rigid body forces and it assumes a spherical shape. Have a clear neighborhood, in its orbit around the sun, Pluto is a relatively round body, and also orbits the sun, but crossing Neptune’s orbit! Not very planet friendly! Being so small, it cannot clear its path and hence has a very busy neighborhood, thereby violating the definition of a planet. According to the new definition of a planet which was coined in 2006, Pluto was demoted to the status of a dwarf planet! Planet or not, we still love you Pluto!"
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

SunMove()

