let bulb = document.getElementById("Bulb")
bulb.addEventListener("click", function(){
    if(bulb.src === "https://image.ibb.co/hoBxtm/light_bulb_off.png"){
        bulb.src = "https://image.ibb.co/cBBaeR/light_bulb_on.png"
    }else{
        bulb.src = "https://image.ibb.co/hoBxtm/light_bulb_off.png"
    }
})