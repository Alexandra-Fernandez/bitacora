window.addEventListener("load", function(){
  var boton1 = document.getElementById("boton1");
  boton1.addEventListener("click",Texto);
  
  function Texto (e){
    e.preventDefault();
    var textArea1 = document.createElement("textarea");
    document.body.appendChild(textArea1);
    var boton1 = document.createElement("button");
    var publicar1 = document.createTextNode("Publicar");
    boton1.appendChild(publicar1);
    document.body.appendChild(boton1);
    var botonElim1 = document.createElement("button");
    var eliminar1 = document.createTextNode("Eliminar");
    botonElim1.appendChild(eliminar1);
    document.body.appendChild(botonElim1);
    
  }
  var boton2 = document.getElementById("boton2");
  boton2.addEventListener("click",Cita);
  
  function Cita (e){
    e.preventDefault();
    var textArea2 = document.createElement("textarea");
    document.body.appendChild(textArea2);
    var boton2 = document.createElement("button");
    var publicar2 = document.createTextNode("Publicar");
    boton2.appendChild(publicar2);
    document.body.appendChild(boton2);
  }
});