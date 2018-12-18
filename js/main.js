var me = $('#me');
var game = $('#background');
var object = $(".object");
var num_ite = 0;
var validate_key_press = true;
setInterval(markKey,800);

var MePos = me.css('bottom').split(" ");
var VMePos = parseInt(MePos[0], 10);
var hIncr = 8;
// console.log(hIncr);


$(document).keydown(function (e) {
  
  var timeout = null;
  clearTimeout(timeout);
  if (!validate_key_press) {
    return false;
  }

  if (validate_key_press) {
    validate_key_press = false;
    pressed(e);
  }
});

// var init = function () {
//   game.add
// };



async function pressed(e) {
  var pos = game.css('backgroundPosition').split(" ");
  var xPos = parseInt(pos[0], 10);

  // console.log(xPos);

  $('#me').css({
    "animation": "none"
  });
  // debugger;

  // validate_key_press = false;
  if (e.keyCode == 39) { // right
    if (xPos < -1920 && xPos > -2270) {
      setIntervalX(jumpRightUp, 200, 4); //rightUp
    } else if (xPos < -2640 && xPos > -2980) {
      setIntervalX(jumpRightDown, 200, 4); //rightDown
    } else {
      setIntervalX(runRight, 200, 4); //straight
    }

  }
  if (e.keyCode == 37) { // left
    if (xPos < -2020 && xPos > -2370) {
      setIntervalX(jumpLeftDown, 200, 4); //LeftDown
    } else if (xPos < -2730 && xPos > -3050) {
      setIntervalX(jumpLeftUp, 200, 4); //LeftUp
    } else {
      setIntervalX(runLeft, 200, 4); //straight
    }
  }
  // else
  // if (e.keyCode == 38) { // up
  //   jump();
  // }

}

function runLeft() {
  // debugger;
  $("#me").css({
    'transform': 'rotateY(-180deg)'
  });
  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '+=20px');
  object.css('left', '+=20px');
}



function runRight() {
  // debugger;

  $("#me").css({
    'transform': 'rotateY(0deg)'
  });
  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '-=20px');
  object.css('left', '-=20px');
}


function jumpRightUp() {
  // debugger;
  $("#me").css({
    'transform': 'rotateY(0deg)'
  });
  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '-=9.5px');
  me.css('bottom', '+=' + hIncr + 'px');
  object.css('left', '-=9.5px');
}

function jumpRightDown() {
  $("#me").css({
    'transform': 'rotateY(0deg)'
  });

  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '-=9.2px');
  me.css('bottom', '-=' + hIncr + 'px');
  object.css('left', '-=9.2px');
}

function jumpLeftUp() {
  // debugger;
  $("#me").css({
    'transform': 'rotateY(-180deg)'
  });
  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '+=9px');
  me.css('bottom', '+=' + hIncr + 'px');
  object.css('left', '+=9px');
}

function jumpLeftDown() {
  $("#me").css({
    'transform': 'rotateY(-180deg)'
  });

  $('#me').css('background-position', '-=58px');
  $('#background').css('background-position', '+=9.5px');
  me.css('bottom', '-=' + hIncr + 'px');
  object.css('left', '+=9.5px');
}

function jump() {
  // debugger;
  run([{
    y: 0
  }, {
    y: -90
  }])
}


function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function () {

    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

function run(v) {
  // clone the array (before "animate()" modifies it), and reverse it
  var reversed = JSON.parse(JSON.stringify(v)).reverse();

  $(v[0]).animate(v[1], {
    duration: 500,
    step: function (val) {
      $elm.css("transform", `translateY(${val}px)`);
      $elm.css('background-position', '116px');
    },
    done: function () {
      run2([{
        y: -90
      }, {
        y: 0
      }])
    }
  })
};


function run2(v) {
  // clone the array (before "animate()" modifies it), and reverse it
  var reversed = JSON.parse(JSON.stringify(v)).reverse();

  $(v[0]).animate(v[1], {
    duration: 500,
    step: function (val) {
      $elm.css("transform", `translateY(${val}px)`);
      $elm.css('background-position', '116px');
    },
    done: function () {
      $elm.css('background-position', '0px');
    }
  })
};
// "y" is arbitrary used as the key name


function markKey() {
  validate_key_press=true;
}