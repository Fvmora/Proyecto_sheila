

/* $('#body').css('display', 'none'); */
setTimeout(function(){
 /* $('#body').css('display', 'block'); */
 $('#counter').css('display', 'none');
}, 2000);


$(document).ready(function (e) {


    $('#idea').mouseenter(function (e) {
       
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
    a.mouseenter(function (e) {

        b.slideDown();


    })
    c.mouseenter(function (e) {

        d.slideDown();


    })
    b.mouseleave(function (e) {

        b.slideUp();


    })
    d.mouseleave(function (e) {

        d.slideUp();


    })
    function offUp(){
        b.slideUp();
        d.slideUp();
    }
    a,c.mouseout(setInterval(offUp, 6000));

/* desplegable coaching */
clearInterval();


  
    
   

   
    
    

    
    
    


});



