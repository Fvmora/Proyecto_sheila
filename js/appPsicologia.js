
$(document).ready(function(){

    
   setInterval(function(){

       CambiarImagen(); 
       
    },5000);

    setInterval(function(){

        CambiarImagen1(); 
        
     },3000);
    let img1 =  $('#img1');
    let img2 = $('#img2')
    function CambiarImagen(){
        img1.fadeToggle(1000);
       
    };
    function CambiarImagen1(){
        
        img2.fadeIn(1000);
    };
    
});