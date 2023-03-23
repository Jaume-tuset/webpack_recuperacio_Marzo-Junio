export { generateCard };

function generateCard(peliculas_rankings) {
  let cardTemplate = document.createElement("div");
  let cont = 0;
  cardTemplate.classList.add("col");
  cardTemplate.innerHTML = `
        <div class="card">
            <h2><strong><em> PELICULAS </em></strong>${peliculas_rankings.id}</h2>
            <hr>
            <div class="card-header">
                ${peliculas_rankings.title}
            </div>
            <div class="card-body">
               <div class="Img">
                    <img class="card-img-top" src="${peliculas_rankings.img}" alt="
                     "</img>
                </div>
                <div class="graph">
                    <p class="card-text"><i><strong>Duración : </strong></i>${peliculas_rankings.duracion}</p>
                    <p class="card-text"><i><strong>Genero : </strong></i>${peliculas_rankings.genero}</p>
                    <p class="card-text"><i><strong>Fecha de esteno : </strong></i>${peliculas_rankings.fecha_estreno}</p>
                    <p class="card-text"><i><strong>Dirigida : </strong></i>${peliculas_rankings.dirigida}</p>
                    <p class="card-text"><i><strong>Reparto : </strong></i>${peliculas_rankings.reparto}</p>
                    <p class="card-text"><i><strong>Resumen : </strong></i>${peliculas_rankings.resumen}</p>
                    <a href="#" class="btn btn-primary">ENVIAR</a>
                    <a href="#" class="btn btn-primary">DESCARGAR</a>
                </div>
            </div>
        </div>
    `;
  cont++;
  return cardTemplate;
}
