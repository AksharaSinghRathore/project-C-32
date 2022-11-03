const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower,blower2;
var blowerMouth;
var button;
var ground;
var bk_song;
var air;
var mute_btn;

function preload(){
  bk_song = loadSound('assets/sound1.mp3');
  air = loadSound('assets/air.wav');
}


function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  bk_song.play();
  bk_song.setVolume(0.5);

  mute_btn = createImg('assets/mute.png');
  mute_btn.position(450,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);



  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blower2 = new Blower(200, 490, 600, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  blower2.show();
  ball.show();
  blowerMouth.show();
  
}

function blow() {

  //Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  air.play();

}

function mute(){
  if(bk_song.isPlaying()){
    bk_song.stop();

  }
  else {
    bk_song.play();
  }
}


