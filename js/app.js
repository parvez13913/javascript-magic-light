const lightOnOfButton = on => {
    const lightOf = document.getElementById('bulb-off');
    const lightOn = document.getElementById("bulb-on");
    const onButton = document.getElementById("on-button");
    const ofButton = document.getElementById("of-button");
    if(on === true){
        lightOn.style.display = "inline";
        lightOf.style.display = "none";
        onButton.disabled = true;
        ofButton.disabled = false;
    }
    else{
        lightOf.style.display = "inline";
        lightOn.style.display = "none";
        ofButton.disabled = true;
        onButton.disabled = false;
    }
}
const vanishButton = () => {
    const onButton = document.getElementById("on-button");
    const ofButton = document.getElementById("of-button");
    const vanishButton = document.getElementById("vanish-button");
    const lightOf = document.getElementById('bulb-off');
    const heading = document.getElementById('heading');
    onButton.disabled = true;
    ofButton.disabled = true;
    vanishButton.disabled = true;
    lightOf.style.display = "none";
    heading.style.display = "none";
    // error message 
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    const errorImages = document.getElementById("error-img");
    errorImages.style.display = "inline";
}