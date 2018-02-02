
var $elm = $('#me'); 
var $elm2 = $('#background'); 



$(document).keydown(function(e) {
   //console.log(e.keyCode);
  $('#me').css({"animation":"none"});
  if(e.keyCode == 39) { // right
    $("#me").css({'transform': 'rotateY(0deg)'});
    $('#me').css('background-position', '-=58px');
    $('#background').css('background-position', '-=20px');
  }
  else if(e.keyCode == 37) { // left
//    var el = document.getElementById("me");
//    var st = window.getComputedStyle(el, null);
//    var tr = st.getPropertyValue("transform") || "null";
// console.log(tr);


   $("#me").css({'transform': 'rotateY(-180deg)'});
   $('#me').css('background-position', '+=58px');
   $('#background').css('background-position', '+=20px');
  }


  if(e.keyCode == 38) { // up
    // $("#me").css({'transform': 'translateY(-30px)'});

    // $('#me').css({"animation":"bounce 0.7s steps(2)"});

   run( [{y:0}, {y:-90}] )

    
  }
});






function run( v ){
  // clone the array (before "animate()" modifies it), and reverse it
  var reversed = JSON.parse(JSON.stringify(v)).reverse();
  
  $(v[0]).animate(v[1], {
      duration: 500,
      step: function(val) {
          $elm.css("transform", `translateY(${val}px)`); 
          $elm.css('background-position', '116px');
      },
      done: function(){
          run2( [{y:-90}, {y:0}] )
      }
  })
};


function run2( v ){
  // clone the array (before "animate()" modifies it), and reverse it
  var reversed = JSON.parse(JSON.stringify(v)).reverse();
  
  $(v[0]).animate(v[1], {
      duration: 500,
      step: function(val) {
          $elm.css("transform", `translateY(${val}px)`); 
          $elm.css('background-position', '116px');
      },
      done: function(){
         $elm.css('background-position', '0px');
      }
  })
};
// "y" is arbitrary used as the key name 

 