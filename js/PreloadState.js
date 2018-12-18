
var PreloadState = {
	//load the game assets before the game starts
  preload: function() {
      //Actual Loading of Game State.
    loadImages();
    
    
    //this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'cblogo');
      xmid = this.game.world.centerX;
      ymid = this.game.world.centerY;
      
      
    this.clouds = this.add.group();
    this.clouds.enableBody = true;
    
    var cl1 = this.add.sprite(xmid+100,ymid-100,'cloud');
      cl1.alpha = 0.8;
      cl1.scale.setTo(.75,.75);
      this.game.physics.arcade.enable(cl1);
      cl1.body.velocity.y = -5;
      
    
    var cl2 = this.add.sprite(xmid-250,ymid+100,'cloud');
      cl2.alpha = 0.5;
      cl2.scale.setTo(.75,.75);
      this.game.physics.arcade.enable(cl2);
      cl2.body.velocity.y = -8;
      
    
    var cl3 = this.add.sprite(xmid,h-100,'cloud');
      cl3.alpha = 0.9;
      cl3.scale.setTo(.75,.75);
      this.game.physics.arcade.enable(cl3);
      cl3.body.velocity.y = -6;
      
      
    this.clouds.create(100,100,'cloud');
    this.clouds.create(xmid+100,ymid+300,'cloud');
    this.clouds.create(xmid-100,300,'cloud').scale.setTo(1.24,1.24);
    this.clouds.create(w-200,500,'cloud');
    this.clouds.create(150,h+200,'cloud');

    this.clouds.enableBody = true;
    
    this.clouds.setAll('body.velocity.y', -20);
    //this.platforms.setAll('body.allowGravity', false);
      
    var fp = game.add.sprite(xmid+100,ymid-100,'flying_prateek');
    fp.scale.setTo(.65,.65);
	fp.animations.add('run');
	fp.animations.play('run',10,true);
      
       this.logo = this.add.sprite(w-200,10,'cblogo');
      this.logo.scale.setTo(.3,.3);

    
    this.preloadBar = this.add.sprite(this.game.world.centerX,120, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(1,2);
    this.load.setPreloadSprite(this.preloadBar);
    var style = { fill: '#fff'};
    var loading_text = this.game.add.text(xmid,123,"LOADING...", style);
    loading_text.anchor.setTo(0.5,0.5);
    
    
      
    
     
  },
  create: function() {
   this.state.start('GameState');
  },
  update:function(){
     //console.log("In Update");         
  }
};

function loadImages(){
    
    game.load.image('download','assets/download2.png');
	game.load.image('publication','assets/publication.png');
	game.load.image('ground','assets/ground.png');
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grass.png');
	game.load.image('brick','assets/brick.png');
	game.load.image('tree1','assets/tree-bright-e.png');
	game.load.image('plant1','assets/plant-lotus.png');
	//game.load.image('cloud','assets/cloud.png');
	game.load.image('birds','assets/birds.png');
	game.load.image('school','assets/school.png');
	game.load.image('mainbanner','assets/interactive-resume.png');
	game.load.image('building','assets/building.png');
	game.load.image('hometown','assets/hometown.png');
	game.load.image('hill','assets/mountain.png');
	game.load.image('treeS','assets/tree-dark-d.png');
	game.load.atlasJSONHash('prateek','assets/hero_running.png','assets/hero_running.json');
	game.load.atlasJSONHash('waterAtlas','assets/water_corrected.png','assets/water_running.json');
	game.load.atlasJSONHash('waterAtlas2','assets/water_orange.png','assets/water_running.json');
      
	game.load.image('dtu','assets/dtu.png');
	game.load.image('level','assets/sign.png');
	game.load.image('cocotree','assets/coco.png');
	game.load.image('python','assets/python_white.png');
	game.load.image('css','assets/cssn.png');
	game.load.image('js','assets/js.png');
	game.load.image('html','assets/html5.png');
	game.load.image('night','assets/night.jpg');

	game.load.image('developer','assets/fullstackS.png');

	game.load.image('android','assets/android.png');

	game.load.image('frog','assets/frog.png');
	game.load.image('sandiskPd','assets/sandiskPd.png');
	game.load.image('sandiskLogo','assets/sandiskLogo.png');
	game.load.image('instaLogo','assets/instalabs.png');
	game.load.image('hackerearthLogo','assets/hackerearthlogo.png');
	game.load.image('campk12Logo','assets/campk12.png');
	game.load.image('cbLogo','assets/cb.png');
	game.load.image('corel','assets/corel.png');
	game.load.image('psbubble','assets/psbubble.png');
	game.load.image('games','assets/games.png');
	game.load.image('gamershq','assets/gamershq.png');
	//game.load.image('photoshop','assets/pslogo.png');
	game.load.image('bits','assets/0s1s.png');
	game.load.image('harddrive','assets/harddrive.png');
	game.load.image('hospital','assets/hospital_kalp.png');
	game.load.image('ambulance','assets/ambulance2.png');
	game.load.image('otherprojects','assets/other.png');
	//game.load.image('best','assets/best_cartoonist.png');
	game.load.image('bullet','assets/bullet.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('cup','assets/cup.png');
	game.load.image('google','assets/google.png');
	game.load.image('csi','assets/csi.png');
	game.load.image('gaana','assets/gaanalogo.png');
	game.load.image('shephertz','assets/shephertz.png');
	game.load.image('codelhi','assets/codelhi.png');
	game.load.image('pshaktiman','assets/pshaktiman.png');
	game.load.image('chai','assets/cpc.png');
	game.load.image('football','assets/football.png');
	game.load.image('gmail','assets/gmail.png');
	game.load.image('facebook','assets/fb.png');
	game.load.image('linkedin','assets/linkedin.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('yoga','assets/yoga.png');
	game.load.image('swach_bharat','assets/swach_bharat.png');
	game.load.image('github','assets/github.png');	
	game.load.image('codechef','assets/codechef.png');
	game.load.image('spoj','assets/spojlogo.png');
	game.load.image('algae','assets/algae-b.png');
	game.load.image('blogLogo','assets/icon_small.png');
	game.load.image('bug','assets/bug.png');
	game.load.image('flag','assets/flag.png');
	game.load.image('squarebrick','assets/brick_small.png');
	game.load.image('questionbrick','assets/question_block_small.png');
	game.load.image('question_hide','assets/question_block_plain_small.png');
	game.load.image('icpc','assets/icpc.jpg');
	game.load.atlasJSONHash('grari','assets/grari_map.png','assets/grari_map.json');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.atlasJSONHash('digital_india','assets/digital_india.png','assets/digital_india.json');	
	game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.image('sun', 'assets/sun.png');

	game.load.atlasXML('seacreatures', 'assets/seacreatures.png', 'assets/seacreatures.xml');

	game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
    
}