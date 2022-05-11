var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



/*******************per il cambio visualizzazione listato************** */

const imgAndDescriptionBtn = document.querySelector(".img-and-description-btn");
const justImgButton = document.querySelector(".just-img-btn");
const listato = document.querySelector(".listato");
const imageListato= document.querySelector(".descriptive-img");

imgAndDescriptionBtn.addEventListener("click", imgAndDescription);
justImgButton.addEventListener("click", justImg);

// console.log(imgAndDescriptionBtn);
function imgAndDescription (e){
  // console.log("hii");
  console.log(e);
  // console.log(listato.classList);
  listato.classList.remove("listato--just-img");  
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.add("active");
  justImgButton.classList.remove("active");

  // console.log(imageListato.remove("aria-label")); /*****per rimuovere aria-label da dove c'è già la descrizione*/
}

function justImg (e) {
  console.log(e);
  // console.log(listato.classList);
  listato.classList.add("listato--just-img");
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.remove("active");
  justImgButton.classList.add("active");
}

