/* Data.js */
// A few functions to store and display ~persistent data
// "use strict";

// window.data stores the references to data and elements

function applyNewJs() {

  document.body.addEventListener("keydown",function(event) {
      if ((event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 40) && event.target === document.body) {
          event.preventDefault();}
      }, false
  );

  if (document.getElementById('paused')) {
    document.getElementById('paused').remove();
  }
  if (document.getElementById('mobile-controls')) {
    document.getElementById('mobile-controls').remove();
  }

  var paused_el = createElement("div", {id: "paused"});
    var paused_el_span = createElement('span');
    paused_el_span.innerText = 'CLICK TO UNPAUSE';
    paused_el.appendChild(paused_el_span);
    body.appendChild(paused_el);

    var mobile_controls_el = createElement("div", {id: "mobile-controls"});
    var move_left_el = createElement("div", {id: "move-left",className:"move"});
    var move_top_el = createElement("div", {id: "move-top",className:"move"});
    var move_right_el = createElement("div", {id: "move-right",className:"move"});
    var move_bottom_el = createElement("div", {id: "move-bottom",className:"move"});
    var move_fire_el = createElement("div", {id: "move-fire",className:"move"});
    var move_left_el_span = createElement('span');
    var move_top_el_span = createElement('span');
    var move_right_el_span = createElement('span');
    var move_bottom_el_span = createElement('span');
    var move_fire_el_span = createElement('span');
    move_left_el.appendChild(move_left_el_span);
    move_top_el.appendChild(move_top_el_span);
    move_right_el.appendChild(move_right_el_span);
    move_bottom_el.appendChild(move_bottom_el_span);
    move_fire_el.appendChild(move_fire_el_span);
    mobile_controls_el.appendChild(move_left_el);
    mobile_controls_el.appendChild(move_top_el);
    mobile_controls_el.appendChild(move_right_el);
    mobile_controls_el.appendChild(move_bottom_el);
    mobile_controls_el.appendChild(move_fire_el);
    body.appendChild(mobile_controls_el);

  var move_right = document.getElementById('move-right');
  var move_left = document.getElementById('move-left');
  var move_top = document.getElementById('move-top');
  var move_bottom = document.getElementById('move-bottom');
  var move_fire = document.getElementById('move-fire');

  move_right.addEventListener("touchstart", function( event ) {
    var keyd = new KeyboardEvent("keydown", {bubbles: true, cancelable: true, keyCode: 68});
    document.body.dispatchEvent(keyd);
  });
  move_right.addEventListener("touchend", function( event ) {
    var keyd = new KeyboardEvent("keyup", {bubbles: true, cancelable: true, keyCode: 68});
    document.body.dispatchEvent(keyd);
  });

  move_left.addEventListener("touchstart", function( event ) {
    var keya = new KeyboardEvent("keydown", {bubbles: true, cancelable: true, keyCode: 65});
    document.body.dispatchEvent(keya);
  });
  move_left.addEventListener("touchend", function( event ) {
    var keya = new KeyboardEvent("keyup", {bubbles: true, cancelable: true, keyCode: 65});
    document.body.dispatchEvent(keya);
  });

  move_top.addEventListener("touchstart", function( event ) {
    var keyw = new KeyboardEvent("keydown", {bubbles: true, cancelable: true, keyCode: 87});
    document.body.dispatchEvent(keyw);
  });
  move_top.addEventListener("touchend", function( event ) {
    var keyw = new KeyboardEvent("keyup", {bubbles: true, cancelable: true, keyCode: 87});
    document.body.dispatchEvent(keyw);
  });

  move_bottom.addEventListener("touchstart", function( event ) {
    var keys = new KeyboardEvent("keydown", {bubbles: true, cancelable: true, keyCode: 83});
    document.body.dispatchEvent(keys);
  });
  move_bottom.addEventListener("touchend", function( event ) {
    var keys = new KeyboardEvent("keyup", {bubbles: true, cancelable: true, keyCode: 83});
    document.body.dispatchEvent(keys);
  });

  move_fire.addEventListener("touchstart", function( event ) {
    var keys = new KeyboardEvent("keydown", {bubbles: true, cancelable: true, keyCode: 17});
    document.body.dispatchEvent(keys);
  });
  move_fire.addEventListener("touchend", function( event ) {
    var keys = new KeyboardEvent("keyup", {bubbles: true, cancelable: true, keyCode: 17});
    document.body.dispatchEvent(keys);
  });

  document.getElementById('data_display').style = "width:100%;font-size:13px";

  //console.log('applyNewJs');

  // var canvas = document.getElementsByTagName('canvas')[0];
  // var ctx = canvas.getContext('2d');
  // ctx.scale(0.8,1);
 
}

function resetData() {
  // Make sure there's no data display already
  var check;
  if(check = document.getElementById("data_display"))
    body.removeChild(check);
  
  if(!window.data) {
    window.data = new Data();
    // setDataDisplay();
  }
}
// Keeps information displayed on the screen
function Data() {
  this.playerpower = 1;
  this.traveled = this.traveledold = 0; // only used for random
  this.scorelevs = [100, 200, 400, 500, 800, 1000, 2000, 4000, 5000, 8000];
  this.score = new DataObject(0, 6, "SCORE");
  this.time = new DataObject(350, 3, "TIME");
  this.world = new DataObject(0, 0, "WORLD");
  this.coins = new DataObject(0, 0, "COINS");
  this.lives = new DataObject(3, 1, "LIVES");
  this.time.dir = -1;
  this.scoreold = 0;
}

// Keeps a reference to the actual HTML element on display
function DataObject(amount, length, name) {
  this.amount = amount;
  this.length = length;
  this.name = name;
  this.element = createElement("td", {className: "indisplay"});
}

// Sets up the data display on the screen
function setDataDisplay() {
  var display = createElement("table", {
            id: "data_display",
            className: "display",
            style: {
              width: (gamescreen.right + 14) + "px"
            }}),
      elems = ["score", "coins", "world", "time", "lives"];
  body.appendChild(display);
  data.display = display;
  for(var i in elems) {
    display.appendChild(data[elems[i]].element);
    updateDataElement(data[elems[i]]);
  }
  body.appendChild(data.display);

  if (is_mobile) {
    applyNewJs();
  }
}

// Getting rid of the display simply means removing it from body
function clearDataDisplay() {
  body.removeChild(data_display);
}

function toggleLuigi() {
  window.luigi = !window.luigi;
  localStorage.luigi = window.luigi;
  window.player.title = (window.luigi) ? "Luigi" : "Mario";
  setThingSprite(window.player);
}

// Starts the interval of updating data time
// 1 game second is about 25*16.667=416.675ms
function startDataTime() {
  TimeHandler.addEventInterval(updateDataTime, 25, Infinity, data.time);
}
function updateDataTime(me) {
  // If the time direction isn't up (random map), check for timing
  if(me.dir != 1) {
    if(me.amount == 100) playCurrentThemeHurry(); 
    else if(me.amount <= 0) killPlayer(player, true);
  }
  // If time is still enabled, change it by 1
  if(!notime) {
    map.time = me.amount += me.dir;
    updateDataElement(me);
  }
}

// Updates a typical DataObject to its value
function updateDataElement(me) {
  var text = me.name + "<br />" + (me.amount == "Infinity" ? "Inf" : me.amount);
  me.element.innerHTML = text;
  /*if(text.length > 14) me.element.style.width = "490px";
  else */me.element.style.width = "";
}


function score(me, amount, appears) {
  // Don't do negative values
  if(amount <= 0) return;
  // If it's in the form 'score(X)', return 'score(player, x)'
  if(arguments.length == 1) return score(player, me);
  // Keep the high score in localStorage, why not.
  localStorage.highscore = max(localStorage.highscore, data.score.amount += amount);
  // If it appears, add the element
  if(appears) {
    var text = addText(amount, me.left, me.top);
    text.yvel = -unitsized4;
    TimeHandler.addEvent(killScore, 49, text);
  }
  while(data.score > 10000) { // you never know...
    gainLife();
    data.score.amount = data.score.amount % 10000;
  }
  updateDataElement(data.score);
}
function killScore(text) {
  if(body.contains(text))
    body.removeChild(text);
  killNormal(text);
  deleteThing(text, texts, texts.indexOf(text));
}

function findScore(lev) {
  if(lev < data.scorelevs.length) return data.scorelevs[lev];
  gainLife();
  return -1;
}

function gainLife(num, nosound) {
  data.lives.amount += typeof(num) == "number" ? num : 1;
  if(!nosound) AudioPlayer.play("Gain Life");
  updateDataElement(data.lives);
}

function setLives(num) {
  data.lives.amount = Number(num);
  updateDataElement(data.lives);
}

function storePlayerStats() {
  data.playerpower = player.power;
}
function clearPlayerStats() {
  data.playerpower = player.power = 1;
}
