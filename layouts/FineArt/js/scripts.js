$(function(){

    var $mt = $('nav .menu_toggle');
    var $menu = $('nav ul');

    $mt.click(function(){
        $menu.slideToggle(500,function(){
            $(this).css('overflow','visible')
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');

            }
        });
    });

});

$(document).ready(function () {
        $("#makeMeScrollable").smoothDivScroll({
            mousewheelScrolling: "",
            manualContinuousScrolling: true,
            hotSpotScrolling: false,
            autoScrollingMode: "onStart"
        });
    });
  
var cross = document.querySelector('.fa-times');
   var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label  = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
        if( fileName )
      label.querySelector( 'span' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
    });
    cross.onclick = function(){
      console.log(cross);
      label.querySelector( 'span' ).innerHTML = 'DODAJ';
    }
});
