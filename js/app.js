window.addEventListener("load", function(){
  var botonDeTexto = document.getElementById("botonTexto");
  botonDeTexto.addEventListener("click",Texto);
  
  function Texto (e){
    e.preventDefault();
    
    var textAreaTexto = document.createElement("textarea");
    document.body.appendChild(textAreaTexto);
    var botonTexto = document.createElement("button");
    var publicarTexto = document.createTextNode("Publicar");
    botonTexto.appendChild(publicarTexto);
    document.body.appendChild(botonTexto);
    
    var botonElimTexto = document.createElement("button");
    var eliminarTexto = document.createTextNode("Eliminar");
    botonElimTexto.appendChild(eliminarTexto);
    document.body.appendChild(botonElimTexto);
    
    botonElimTexto.addEventListener("click", function(){
        this.parentElement.remove();
    });
    
    textAreaTexto.classList.add("caja-texto");
      
  }  
  
  var botonDeCita = document.getElementById("botonCita");
  botonDeCita.addEventListener("click",Cita);
  
  function Cita (e){
    e.preventDefault();
    var textAreaCita = document.createElement("textarea");
    document.body.appendChild(textAreaCita);
    var botonCita = document.createElement("button");
    var publicarCita = document.createTextNode("Publicar");
    botonCita.appendChild(publicarCita);
    document.body.appendChild(botonCita);
  }
  
  var botonDeMeme = document.getElementById("botonMeme");
  botonDeMeme.addEventListener("click", Meme);
  
  function Meme (e){
    e.preventDefault();
    var textAreaMeme = document.createElement("textarea");
    document.body.appendChild(textAreaMeme);
    var botonMeme = document.createElement("button");
    var publicarMeme = document.createTextNode("Publicar");
    botonMeme.appendChild(publicarMeme);
    document.body.appendChild(botonMeme);
  }
  
  var botonDePastillita = document.getElementById("botonPastillita");
  botonDePastillita.addEventListener("click", Pastillita);
  
  function Pastillita (e){
    e.preventDefault();
    var textAreaPastillita = document.createElement("textarea");
    document.body.appendChild(textAreaPastillita);
    var botonPastillita = document.createElement("button");
    var publicarPastillita = document.createTextNode("Publicar");
    botonPastillita.appendChild(publicarPastillita);
    document.body.appendChild(botonPastillita);
  }
});