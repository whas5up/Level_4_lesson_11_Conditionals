function clear() {
    rain(false);
    document.getElementById("storm").pause();
    document.getElementById("weather").classList.remove('grey');
    let clearWeather = document.querySelectorAll('.active');
    clearWeather.forEach(function (item) {
        item.classList.remove('active');
    });
}

function sunny() {
    clear();
    document.getElementById("sun").classList.add('active');
}

function addClouds() {
    clear();
    let sunAndClouds = document.querySelectorAll('#sun, #p-cloud-1, #p-cloud-2');
    sunAndClouds.forEach(function (item) {
        item.classList.add('active');
    }
    )
}

function addRainClouds() {
    clear();
    let clouds = document.querySelectorAll('#weather, #r-cloud-1, #r-cloud-2, #r-cloud-3');
    clouds.forEach(function (item) {
        item.classList.add('active');
    }
    )
}

function rain(raining) {
    const rainContainer = document.querySelector("#weather");
    const background = [
        "linear-gradient(transparent, #999999)",
        "linear-gradient(transparent, #fcfcfc)",
        "linear-gradient(transparent, #cccccc)",
        "linear-gradient(transparent, #cecece)"
    ];
    //console.log(raining);
    if (raining) {
        for (var i = 0; i < 100; i++) {
            const drop = document.createElement("i");
            const raindropProperties = {
                width: Math.random() * 5 + "px",
                positionX: Math.floor(Math.random() * window.innerWidth) + "px",
                delay: Math.random() * -20 + "s",
                duration: Math.random() * 5 + "s",
                bg: background[Math.floor(Math.random() * background.length)],
                opacity: Math.random() + 0.2
            };

            drop.style.width = raindropProperties.width;
            drop.style.left = raindropProperties.positionX;
            drop.style.animationDelay = raindropProperties.delay;
            drop.style.animationDuration = raindropProperties.duration;
            drop.style.background = raindropProperties.bg;
            drop.style.opacity = raindropProperties.opacity;

            rainContainer.appendChild(drop);
        }
    } else {
        const drops = document.querySelectorAll('i');
        drops.forEach(function (drop) {
            drop.remove();
        });
    }
}

function makeRain() {
    clear();
    addRainClouds();
    rain(true);
}
