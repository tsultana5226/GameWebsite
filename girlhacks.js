('.card').click(function(){  
 
  if (!$(this).hasClass("flipped")) {
  ( ".face" ).addClass( 'off' );
  ( this ).children( ".face" ).removeClass( 'off' );
  ( this ).parent( ".cards" ).addClass( 'big' );
  ( this ).addClass('flipped');

  } else {
 
  ( ".face" ).removeClass( 'off' );
  ( ".cards" ).removeClass( 'big' );
  ( this ).removeClass('flipped'); 
}
  

});
