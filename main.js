
var productName= document.getElementById("productName");
var productPrice= document.getElementById("productPrice");
var productModel= document.getElementById("productModel");
var productDesc= document.getElementById("productDesc");
var productList=[]


function addProduct(){
      var product={
        name:productName.value,
        price:productPrice.value,
        desc:productDesc.value,
        Model:productModel.value
      }
      productList.push(product);
    //   console.log(productList);

      displayProduct(productList);
}

function displayProduct(products){
    var cartona='';
for(var i=0; i<products.length ;i++){
    cartona+=`<tr>
    <td>${i + 1}</td>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].desc}</td>
    <td>${products[i].Model}</td>
    <td>
    <button class="btn btn-warning btn-sm">update</button>
    </td>
    <td>
    <button class="btn btn-danger btn-sm">Delete</button>
    </td>
</tr>`
}
// console.log(cartona);
document.getElementById("tBody").innerHTML=cartona;
}















