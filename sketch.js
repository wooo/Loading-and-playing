var song;
var sliderRate;
var sliderPan;


function setup() {
  createCanvas(200, 200);
  song = loadSound("rainbow.mp3", loaded);
  song.setVolume(0.5);
  //sliderRate = createSlider(0, 1.5, 0.5, 0.01);
  sliderPan = createSlider(-1, 1, 0.5, 0.01);

}

function loaded() {
  song.play();


}



function draw() {
  background(random(255));
  song.pan(sliderPan.value());
  //song.rate(sliderRate.value());
}