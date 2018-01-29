  jQuery(document).ready(function(){ 
    $(".answer").hide();              
    $(".question").click(function(){
          var nodo = $(this).attr("href");  
 
          if ($(nodo).is(":visible")){
               $(nodo).hide();
               return false;
          }else{
        $(".oculto").hide();                             
        $(nodo).fadeToggle( "slow" );
        return false;
          }
    });
}); 