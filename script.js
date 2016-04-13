//Version jQuery
//$(document).ready(function(){
//    
//    var link = "https://www.adidas.fr/on/demandware.store/Sites-adidas-FR-Site/fr_FR/Cart-MiniAddProduct?pid=%20" + $model + "_" + $size + "&pid=%20" + $model + "_%20" + $size,
//    linkTest = "apple.com",
//    $model = $("input.pid").val(),
//    $size = $("input#size-selector").val(),
//    $a = $("a"),
//    $result = $(".link-result");
//    
//    $a.attr("href", linkTest);
//    $result.value(linkTest);  
//});
var generateButton = document.querySelector(".generate"),
    a = document.querySelector("a"),
    link;




function generate() {
    model = document.querySelector(".pid").value;
    size = document.querySelector("#size-selector").value;
    console.log(model + " " + size);
    result = document.querySelector(".link-result");
    linkCaptcha = "http://www.adidas.fr/on/demandware.store/Sites-adidas-FR-Site/en_FR/Cart-MiniAddProduct?layer=Add+To+Bag+overlay&pid=%20" + model + "_" + size + "&pid=%20" + model + "_%20" + size + "&g-recaptcha-response=&Quantity=1&masterPid=BA8599&ajax=true";
    link = a.href;
    result.value = link;
    console.log(link);
};

function openLink() {
     window.open(linkCaptcha);
};

generateButton.addEventListener("click",generate);
generateButton.addEventListener("click",openLink);

//link = "https://www.adidas.fr/on/demandware.store/Sites-adidas-FR-Site/fr_FR/Cart-MiniAddProduct?pid=%20" + model + "_" + size + "&pid=%20" + model + "_%20" + size;