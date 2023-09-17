document.addEventListener("DOMContentLoaded",()=>{


const TarjetaContainer=document.querySelector(".tarjetas_container")

function BuscarHeroe(id){
    fetch(`https://superheroapi.com/api.php/6824180664310763/${id}/`)
    .then(response=> response.json())
    .then(data=> {
    
        TarjetaHeroe(data)
        
    

    })
    
    .catch(err=>{
    
        console.log("Error al leer los datos");
    })
    

}

function CantidadHeroes(numero){
  for (let  i= 1;  i<=numero; i++) {
    BuscarHeroe(i)
    
    
  }

}

function TarjetaHeroe(heroe){
   const Tarjeta=document.createElement("div")
   Tarjeta.classList.add("tarjeta")
   Tarjeta.innerHTML= `
   <div class="img_container">
   <img src="${heroe.image.url}" alt="" class="imagen">
</div>
<div class="info">
   <h2 class="nombre">${heroe.name}</h2>
   <div class="caracteristicas">Combate: <span class="barra_estado">${heroe.powerstats.combat}</span></div>
   <div class="caracteristicas">Durabilidad: <span class="barra_estado">${heroe.powerstats.durability}</span></div>
   <div class="caracteristicas">Inteligencia: <span class="barra_estado">${heroe.powerstats.intelligence}</span></div>
   <div class="caracteristicas">Poder: <span class="barra_estado">${heroe.powerstats.power}</span></div>
   <div class="caracteristicas">Rapidez: <span class="barra_estado">${heroe.powerstats.speed}</span></div>
   <div class="caracteristicas">Fuerza: <span class="barra_estado">${heroe.powerstats.strength}</span></div>
</div>
   `
   TarjetaContainer.appendChild(Tarjeta)
}




CantidadHeroes(200)



















})