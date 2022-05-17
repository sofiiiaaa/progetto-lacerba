

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
// console.log(listato);
// const imageListato= document.querySelector(".descriptive-img");
// console.log(imageListato);

if (imgAndDescriptionBtn !== null){

  imgAndDescriptionBtn.addEventListener("click", imgAndDescription);
  justImgButton.addEventListener("click", justImg);
}

// console.log(imgAndDescriptionBtn);
function imgAndDescription (event){

  // console.log("hii");
  // console.log(event);
  // console.log(listato.classList);
  listato.classList.remove("listato--just-img");  
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.add("active");
  justImgButton.classList.remove("active");

  //  console.log(imageListato.parents()); /*****per rimuovere aria-label da dove c'è già la descrizione*/ /*remove("aria-label"*/
}


function justImg (event) {
  // console.log(event);
  // console.log(listato.classList);
  listato.classList.add("listato--just-img");
  // console.log(listato.classList);

  imgAndDescriptionBtn.classList.remove("active");
  justImgButton.classList.add("active");
}

// /**************REMOVE DISCOUNT MESSAGE*************************/

const discountMessage = document.querySelector(".close-discount-message");
const sectionOfDiscountMessage= document.querySelector(".discount-message");
// console.log(discountMessage);
// console.log(sectionOfDiscountMessage);

discountMessage.addEventListener("click", destroyDiscountMessage);
// console.log("hiii");

function destroyDiscountMessage (event){
  // console.log(event);
  sectionOfDiscountMessage.remove();


}

// /************************* ADD FAVORITE*************************** */
const btnToAddToWishlist = document.querySelectorAll(".add-to-wishlist");
// console.log(btnToAddToWishlist);
const btnToRemoveFromWishlist = document.querySelectorAll(".remove-from-wishlist");
// console.log(btnToRemoveToWishlist);
const wishlist = []

btnToAddToWishlist.forEach(element =>{
  element.addEventListener("click", functionAddToWishlist)
});

btnToRemoveFromWishlist.forEach(element =>{
  element.addEventListener("click", funtionRemoveFromWishlist);
});
// console.log("hiii")

function functionAddToWishlist (event){
  // console.log(event);
  const productIdToAdd = event.target.dataset.id;
  // console.log(productIdToAdd);
  wishlist.push(productIdToAdd);
  // console.log(wishlist);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));  //inserisce come chiave wishlist e come valore tutti gli elementi di wishlist nella modalità di stringa; l'unica che il localStorage legge.

    updateWishlist();

}

function funtionRemoveFromWishlist (event){

  const productIdToRemove =  event.target.dataset.id;
  console.log(productIdToRemove)
   const idtToDeleteFromWishlist = wishlist.findIndex(element => productIdToRemove);
   wishlist.splice(idtToDeleteFromWishlist,1);
   localStorage.setItem("wishlist", JSON.stringify(wishlist));
   updateWishlist();

}

function updateWishlist () {
  btnToRemoveFromWishlist.forEach((element) =>{
    if (wishlist.includes(element.dataset.id)){
    element.removeAttribute("hidden");
    element.previousElementSibling.setAttribute("hidden","hidden");
   } else{
     element.setAttribute("hidden", "hidden");
     element.previousElementSibling.removeAttribute("hidden");
   }
  }) 
}

function StartWishlistOperations (){
  const localStorageWishlist = JSON.parse(localStorage.getItem("wishlist"));
   if(localStorageWishlist){
     wishlist.push(...localStorageWishlist);
   }
   updateWishlist()
}

StartWishlistOperations();

/***************CAMBIA OPACITà DEI BOTTONI PER VISUALIZZAZIONE LISTATO**********************/
// class="svg-go-to-just-img-products"
// class="svg-go-to-complete-list-products"

const btnCompleteViewListato = document.querySelector(".img-and-description-btn");
// console.log(btnCompleteViewListato);
const btnJustImagViewListato = document.querySelector(".just-img-btn");
// console.log(btnJustImagViewListato);

if (btnCompleteViewListato !== null){

  btnCompleteViewListato.addEventListener("click", moreOpacityFirstIcon);
  btnJustImagViewListato.addEventListener("click", moreOpacitySecondIcon);
}


function moreOpacityFirstIcon(){
  btnCompleteViewListato.style.opacity = "1";
    btnJustImagViewListato.style.opacity = "0.6";
}

function moreOpacitySecondIcon(){
  btnJustImagViewListato.style.opacity = "1";
    btnCompleteViewListato.style.opacity = "0.6";

  
}

/**************** MODAL OF SEND**************************/

document.addEventListener("DOMContentLoaded", function(){
  MicroModal.init({
    onClose:() => {
      const newsletterContainerClosed = document.querySelector(".newsletterContainer");
      // console.log(newsletterContainerClosed);
      newsletterContainerClosed.classList.add("subscribed");
      // console.log(newsletterContainerClosed);

    }
  });
});


/**************CAROUSEL PRODUCT  TO SHOP****************/

// console.log("hii");
// if (swiper !== null){
//   var swiper = new Swiper(".mySwiper", {  
//      direction: 'horizontal',
//     slidesPerView: 1,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//           },
//           scrollbar: {
//             el: ".swiper-scrollbar",
//           },
//         });

// }
