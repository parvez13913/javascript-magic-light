const lightOnOfButton = on => {
    const lightOf = document.getElementById('bulb-off');
    const lightOn = document.getElementById("bulb-on");
    const vanishButton = document.getElementById("vanish-button");
    if(on === true){
        lightOn.style.display = "block";
        lightOf.style.display = "none";
        vanishButton.disabled = true;
    }
    else{
        lightOf.style.display = "block";
        lightOn.style.display = "none";
        vanishButton.disabled = true;
    }
}
const vanishButton = () => {
    const onButton = document.getElementById("on-button");
    const ofButton = document.getElementById("of-button");
    onButton.disabled = true;
    ofButton.disabled = true;
}