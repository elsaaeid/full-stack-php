//var a="said";
//var j='saidk';
//var testBool=true;
//var firstName='sadaoy';
//console.log("Mr. " + " " +firstName);



//function add(){
//    var x = 5, y = 6, z = x+y;
//    console.log(z);
//}
//add();

// var x = 5, y = 6, z = x+y;
//  console.log(z);
//
//
//function condition(){
//    if(y==4){
//        console.log('YES')
//    
//    }
//    else{
//        console.log('NO')
//    }
//}
//condition();










//var btn = document.querySelector('.btn');
//var box = document.querySelector('.box');
//  
//
//btn.onclick=function display(){
//    box.classList.toggle('dis');
//}



var icon =document.querySelector('.icon');
icon.onclick=function myfunction (){
    var mylinks = document.getElementById("mylinks");
    if(mylinks.style.display==="block"){
        mylinks.style.display="none"
    }
    else{
        mylinks.style.display="block";
    }
}








$(document).ready(function(){
  $(".bt").click(function(){
    $(".box").slideToggle("slow");
  });
});



