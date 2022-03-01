const lightOnOfButton = on => {
    const lightOf = document.getElementById('bulb-off');
    const lightOn = document.getElementById("bulb-on");
    if(on === true){
        lightOn.style.display = "block";
        lightOf.style.display = "none";
    }
    else{
        lightOf.style.display = "block";
        lightOn.style.display = "none";
    }
}