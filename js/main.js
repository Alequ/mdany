const submit = document.querySelector(".advancedSubmit");
const inaltime = document.querySelector(".inaltime");
const latime = document.querySelector(".latime");
const raza = document.querySelector(".raza");
const sezon = document.querySelector(".sezon");
const output = document.querySelector("#jar");
const reset = document.querySelector(".reset");
const pagination = document.querySelector(".pagination")


produse.forEach(produs => {
  output.innerHTML += `

      <div class="col-sm-3 col-lg-3 products content">
				<!-- product card -->
        <div class="product-item bg-light">
        	<div class="card">
        		<div class="thumb-content">

        			<a href="">
        				<img class="card-img-top img-fluid" src="${produs.img}" alt="Card image cap">
        			</a>
        		</div>
        		<div class="card-body">
        		    <h4 class="card-title"><a href="">${produs.titlu} </a></h4>
        		    <p class="card-text">${produs.pret}</p>
        		</div>
        	</div>
        </div><!-- end product card-->
			</div><!-- end product column-->

  `
})


function getValues(e) {
  e.preventDefault();


  const result =  produse.filter(function (el) {
      return el.inaltime == inaltime.value &&
             el.latime == latime.value &&
             el.raza == raza.value &&
             el.sezon == sezon.value;
    });


    if(result != ""){
    output.innerHTML = "";
    result.forEach(res => {
      output.innerHTML += `

      <div class="col-sm-3 col-lg-3 products content">
				<!-- product card -->
        <div class="product-item bg-light">
        	<div class="card">
        		<div class="thumb-content">

        			<a href="">
        				<img class="card-img-top img-fluid" src="${res.img}" alt="Card image cap">
        			</a>
        		</div>
        		<div class="card-body">
        		    <h4 class="card-title"><a href="">${res.titlu}</a></h4>
        		    <p class="card-text">${res.pret}</p>
        		</div>
        	</div>
        </div><!-- end product card-->
			</div><!-- end product column-->

      `
    });
    pagination.innerHTML = `
      <a href="anvelope.html">Reseteaza cautarea</a>
    `

    } else {
      output.innerHTML = "";
      pagination.innerHTML = "";

      output.innerHTML = `
        <div>
          <div class="alert alert-danger" role="alert" style="margin-top:30px;">
          <strong>Nu am gasit niciun model corespunzator! <br>
          </div>
          <a href="anvelope.html">Reseteaza cautarea</a>
        </div>

      `
    }

}





submit.addEventListener("click", getValues);
