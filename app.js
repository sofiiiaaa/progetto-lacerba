

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
console.log(listato);
// const imageListato= document.querySelector(".descriptive-img");
// console.log(imageListato);

imgAndDescriptionBtn.addEventListener("click", imgAndDescription);
justImgButton.addEventListener("click", justImg);

// console.log(imgAndDescriptionBtn);
function imgAndDescription (event){

  // console.log("hii");
  console.log(event);
  // console.log(listato.classList);
  listato.classList.remove("listato--just-img");  
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.add("active");
  justImgButton.classList.remove("active");

  //  console.log(imageListato.parents()); /*****per rimuovere aria-label da dove c'è già la descrizione*/ /*remove("aria-label"*/
}


function justImg (event) {
  console.log(event);
  // console.log(listato.classList);
  listato.classList.add("listato--just-img");
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.remove("active");
  justImgButton.classList.add("active");
}

/**************REMOVE DISCOUNT MESSAGE*************************/

const discountMessage = document.querySelector(".close-discount-message");
const sectionOfDiscountMessage= document.querySelector("#discount-message");
console.log(discountMessage);
// console.log(sectionOfDiscountMessage);

discountMessage.addEventListener("click", destroyDiscountMessage);
// console.log("hiii");

function destroyDiscountMessage (event){
  console.log(event);
  sectionOfDiscountMessage.remove();


}

/************************* ADD FAVORITE*************************** */

