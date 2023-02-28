  // document.getElementById("boton").onclick = function (){
  //   console.log("Capturamos el evento click");
  //   document.getElementById("demo").innerHTML = "Estamos probando nuestro primerevento en Js";
  //   }

    document.addEventListener("click", function(){
     console.log("HolaMundo desde EventListener")
     document.getElementById("demo").innerHTML = "Estamos probando nuestro primerevento en Js";
    });

    document.getElementById("boton").addEventListener("click", function (){
        console.log("Hola mundo desde EventListener");
        document.getElementById("demo").innerHTML = "Estamos probando nuestro primerevento en Js";
        });


    
    
    

    
