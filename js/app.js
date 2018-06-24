



    
/* let crono = 0
let idT = setInterval(function(){
    crono += 1000
    cargarPagina(crono)
}, 1000);
function cargarPagina(crono) {
    if(crono === 5000){
        
        clearInterval(idT)
        $('#counter').css('display', 'none');
    }
} */




$(document).ready(function () {
    
  
    

    $('#idea').mouseenter(function () {
       
        $('#noble').fadeIn(1000);
        $('#noble1').fadeIn(3000);
        $('#noble2').fadeIn(5000);
    
    });


/*     ---------- */
$('#burguer').click(function() {
    $('#ul_caballos').fadeToggle()
});

$('#burguer0').click(function(){
    $('#nav_inicio').fadeToggle()
});




    var a = $('#button_equipo');
    var b = $('#desp_equip');
    var c = $('#button_coach');
    var d = $('#desp_coach');

/* desplegable equipo */
    a.mouseenter(function () {

        b.slideDown();


    })
    c.mouseenter(function () {

        d.slideDown();


    })
    b.mouseleave(function () {

        b.slideUp();


    })
    d.mouseleave(function () {

        d.slideUp();


    })
    function offUp(){
        b.slideUp();
        d.slideUp();
    }
    a,c.mouseout(setInterval(offUp, 6000));

/* desplegable coaching */



  
    
   

   
    
    

    
    
    


});



