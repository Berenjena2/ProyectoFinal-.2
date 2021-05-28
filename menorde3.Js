var suma=function(num1,num2,num3){
   var num1=parseInt(document.getElementById("num1").value);
   var num2=parseInt(document.getElementById("num2").value);
   var num3=parseInt(document.getElementById("num3").value);
   if(num1<num2){
      return "El numero menor es:" + num1;
   }else{
      if(num2<num3){
         return "El numero menor es:" + num2;
      }
      else{
         return "El numero menor es:" + num3;
      }
   }
}