document.addEventListener("DOMContentLoaded",()=>{
    const body= document.body;
    const sw= document.getElementById("switch");
     const bulb= document.getElementById("bulb");
     if(localStorage.getItem("light") === "on"){
        body.classList.add("on");
     }
     function togglelight(){
         body.classList.toggle("on");
         if(body.classList.contains("on")){
            localStorage.setItem("light","on");
         }else{
              localStorage.setItem("light","off");
         }

     }
     sw.addEventListener("click",togglelight);
      bulb.addEventListener("click",togglelight);
});