function captureFavoriteButtonClick(){
    const products$ = document.getElementById("products");
    const favoriteButton$ = products$.querySelectorAll(".btn-favorite");
    favoriteButton$.forEach(function(btn$){    
    btn$.addEventListener("click",function(event){
    const target = event.target;
    const favoriteBtn$ = target.closest(".btn-favorite")
    const selectedId = favoriteBtn$.getAttribute("data-id");
    //console.log(selectedId);
    const selectedProductIndex = selectedProductIds.indexOf(selectedId)
    const icon$ = btn$.querySelector(".material-icons-outlined");
  
    if(selectedProductIndex != -1){
  //means product is already selected
   selectedProductIds.splice(selectedProductIndex,1);
   icon$.innerText = "favorite_border"
    } else{
//product is not selected
selectedProductIds.push(selectedId);
icon$.innerText = "favorite";
    }
//console.log(selectedProductIds)
const wishListCounter$ = document.getElementById("wishlistCounter") 
wishListCounter$.innerText = selectedProductIds.length;

})
 })
}
