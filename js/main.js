const submit = document.querySelector(".advancedSubmit");
const inaltime = document.querySelector(".inaltime");
const latime = document.querySelector(".latime");
const raza = document.querySelector(".raza");
const sezon = document.querySelector(".sezon");
const output = document.querySelector("#output");
const reset = document.querySelector(".reset");

produse.forEach(produs => {
  output.innerHTML += `

      <div class="col-sm-3 col-lg-3 products">
				<!-- product card -->
        <div class="product-item bg-light">
        	<div class="card">
        		<div class="thumb-content">

        			<a href="">
        				<img class="card-img-top img-fluid" src="${produs.img}" alt="Card image cap">
        			</a>
        		</div>
        		<div class="card-body">
        		    <h4 class="card-title"><a href="">${produs.titlu}</a></h4>
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
             el.diametru == raza.value &&
             el.sezon == sezon.value.toLowerCase();
    });

    if(result != ""){
    output.innerHTML = "";
    result.forEach(res => {
      output.innerHTML += `
      <li >
        <div class="col-md-3">
          <div class="product">
             <img class="zoom" src="${res.image}" alt=""/>
             <h3>${res.titlu}</h3>
             <div class="price">
            <p>${res.pret}</p>
           </div>
          </div>
        </div>
      </li>

      `
    })
    } else {
      output.innerHTML = "";
      reset.style.display = "initial";
      output.innerHTML = `
      <div class="alert alert-danger" role="alert" style="margin-top:30px;">
      <strong>Nu am gasit niciun model corespunzator! <br>
      </div>


      `
    }

}


submit.addEventListener("click", getValues)


$('.pagination').pagination({

  itemsToPaginate: ".products",
  itemsPerPage: 16,
  activeClass: 'active',
  autoHidePrevious: true,
    autoHideNext: true

});
