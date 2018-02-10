let produse = [
  {
    "titlu": "155/65R13  73T Tracmax X-Privilo TX2-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 65,
    "raza": "R13",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "135 Lei"
  },
  {
    "titlu": "155/65R14  75T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 65,
    "raza": "R14",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "136 Lei"
  },
  {
    "titlu": "155/65R14 75T Keter KT727-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 65,
    "raza": "R14",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "137 Lei"
  },
  {
    "titlu": "155/70R12 73T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 70,
    "raza": "R12",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "138 Lei"
  },
  {
    "titlu": "155/70R13 75T Constancy LY166-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 70,
    "raza": "R13",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "139 Lei"
  },
  {
    "titlu": "155/70R13 75T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 70,
    "raza": "R13",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "140 Lei"
  },
  {
    "titlu": "155/80R12 77T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 80,
    "raza": "R12",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "141 Lei"
  },
  {
    "titlu": "155/80R13 79T Goodride SP06-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 80,
    "raza": "R13",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "142 Lei"
  },
  {
    "titlu": "155/80R13 79T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 155,
    "inaltime": 80,
    "raza": "R13",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "143 Lei"
  },
  {
    "titlu": "165/60R14 75H Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 165,
    "inaltime": 60,
    "raza": "R14",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "144 Lei"
  },
  {
    "titlu": "165/65R14 79T Hifly HF201-(AS)",
    "sezon": "Vara",
    "latime": 165,
    "inaltime": 65,
    "raza": "R14",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "145 Lei"
  },
  {
    "titlu": "165/65R15 81T Tracmax X-Privilo TX2-(AS)",
    "sezon": "Vara",
    "latime": 165,
    "inaltime": 65,
    "raza": "R15",
    "img": "https://www.sigemo.ro/image/cache/catalog/anvelope/VIKWT-300x300.jpg",
    "pret": "146 Lei"
  }
]

const output = document.querySelector(".output")
const redirect = document.querySelector(".btn-redirect")

function redirectPage(e){
  e.preventDefault();
  console.log("clicked")
  window.location.href = 'anvelope.html';

}

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

redirect.addEventListener("click", redirectPage);
