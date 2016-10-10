function Opciones(textArea,botonPub,botonElim){
  
  this.textArea = textArea;
  this.botonPub = botonPub;
  this.botonElim = botonElim;
};

function Texto(textArea,botonPub,botonElim){
  this.publicar = function(){
    alert("textarea " + this.textArea + "boton" + this.botonPub + "eliminar " + this.botonElim);  
  };
};

function Cita(textArea,botonPub,botonElim,autor){
  Opciones.call(this,textArea,botonPub,botonElim);
  this.autor = autor;
  
  this.publicar = function(){
    alert("textarea " + this.textArea + "boton" + this.botonPub + "eliminar " + this.botonElim + "autor " + this.autor);
  };
};

function Meme(textArea,botonPub,botonElim,link){
  Opciones.call(this,textArea,botonPub,botonElim);
  this.link = link;
  
  this.publicar = function(){
    alert("textarea " + this.textArea + "boton" + this.botonPub + "eliminar " + this.botonElim + "link " + this.link);
  };
}

function Pastillita(textArea,botonPub,botonElim,color){
  Opciones.call(this,textArea,botonPub,botonElim);
  this.color = color;
  
  this.publicar = function(){
    alert("textarea " + this.textArea + "boton" + this.botonPub + "eliminar " + this.botonElim + "color " + this.color);
  };
}

var posts = [];

window.addEventListener("load", function(){
  
  var botonTexto = document.getElementById("botonTexto");
  botonTexto.addEventListener("click",function() {
    var post = document.createElement("textarea");
    posts.push(post);
    publicarPosts();
    
  });
  
  var botonCita = document.getElementById("botonCita");
  botonCita.addEventListener("click",function() {
    var post = new Cita("Gian",new Date(),"Desc","Gian");
    posts.push(post);
    publicarPosts();
  });
  
  var botonMeme = document.getElementById("botonMeme");
  botonMeme.addEventListener("click",function() {
    var post = new Meme("Gian",new Date(),"Desc","/img/meme.jpg");
    posts.push(post);
    publicarPosts();
  });
  
  var botonPastillita = document.getElementById("botonPastillita");
  botonPastillita.addEventListener("click",function() {
    event.preventDefault();
    var usuario = new Contacto (textArea.value, boton.value); 
    Opciones.push(usuario);
  });
});
function publicarPosts() {
 
  for(var i=0;i<posts.length;i++) {
    posts[i].publicar();
  }
}