var bgColor = '69c3fc';
var BootState = {
	//initiate some game-level settings
  init: function() {
    //scaling options
      console.log("In init");
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },
  preload: function() {
  	this.load.image('preloadBar', 'assets/bar2.png');
  	this.load.image('cblogo', 'assets/cblogo.png');
    this.load.image('cloud','assets/cloud.png');
    this.load.spritesheet('flying_prateek', 'assets/prateek_parachute.png', 330, 506,2);
  },
  create: function() {
  	this.game.stage.backgroundColor = '69c3fc';
  	this.state.start('PreloadState');
  }
};