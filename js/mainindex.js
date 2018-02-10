const redirect = document.querySelector(".btn-redirect")

function redirectPage(e){
  e.preventDefault();
  console.log("clicked")
  window.location.href = 'anvelope.html';


  
}

redirect.addEventListener("click", redirectPage);
