class SceneStadium extends Phaser.Scene {
    constructor() {
      super({ key: "SceneStadium" });
    }
    preload() {
      this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');
        //this.load.image('button', 'content/button.png');
        //this.load.image('button2', 'content/button2.png');
        //this.load.image('button3', 'content/button3.png');
        this.load.image('circle', 'content/circle.png');
        this.load.image('circle2', 'content/circle2.png');

        //this.load.image('mainMenuBg','content/mainMenuBg.png');
        //if(difficulty == 2.4){
          this.load.image('menuHallOfFameLoading','content/menuHallOfFameLoading.png');
        //}
        this.load.image('dpadBase','content/mobileDpadBase.png');
        this.load.image('dpadTop','content/mobileDpadTop.png');
        this.load.image('field','content/field.png');
        this.load.image('firstDownLine', 'content/lineOrange.png')
        this.load.image('gmDropdown', 'content/gmDropdown.png');
        this.load.image('helmetHome', helmetHome);
        this.load.image('helmetVisitor', helmetVisitor);
        this.load.image('lineOfScrimmage', 'content/lineBlue.png');
        if(mobile){
          this.load.image('mobileBlast','content/mobileBlast.png');
          this.load.image('mobileBoost','content/mobileBoost.png');
          this.load.image('mobileSnap','content/mobileSnap.png');
          this.load.image('mobileSpin','content/mobileSpin.png');
        }
        this.load.image('playbook','content/playbookBg.png');
        this.load.image('scoreboard','content/scoreboard.png');
        this.load.image('spaceBarToSnap','content/spaceBarToSnap.png');
        this.load.image('speedBar','content/speedBar.png');
        this.load.image('speedBarMask','content/speedBarMask.png');
        this.load.image('targetA','content/circleTargetA.png');
        this.load.image('targetS','content/circleTargetS.png');
        this.load.image('targetD','content/circleTargetD.png');
        this.load.spritesheet('ball', 'content/ball.png', { frameWidth: 60, frameHeight: 60 });

          this.load.spritesheet(player1Key,playerGraphics[0],{frameWidth:20,frameHeight:20});
          this.load.spritesheet(player2Key,playerGraphics[1],{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBrowns",'content/playerBrowns.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBengals",'content/playerBengals.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keySteelers",'content/playerSteelers.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyRavens",'content/playerRavens.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyChargers",'content/playerChargers.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyChiefs",'content/playerChiefs.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBroncos",'content/playerBroncos.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyRaiders",'content/playerRaiders.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyTitans",'content/playerTitans.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyColts",'content/playerColts.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyTexans",'content/playerTexans.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyJaguars",'content/playerJaguars.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyPatriots",'content/playerPatriots.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBills",'content/playerBills.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyJets",'content/playerJets.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyDolphins",'content/playerDolphins.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyPackers",'content/playerPackers.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyLions",'content/playerLions.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBears",'content/playerBears.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyVikings",'content/playerVikings.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyRedskins",'content/playerRedskins.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyGiants",'content/playerGiants.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyEagles",'content/playerEagles.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyCowboys",'content/playerCowboys.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyBuccaneers",'content/playerBuccaneers.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keySaints",'content/playerSaints.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyFalcons",'content/playerFalcons.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyPanthers",'content/playerPanthers.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyNiners",'content/playerNiners.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyRams",'content/playerRams.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keyCardinals",'content/playerCardinals.png',{frameWidth:20,frameHeight:20});
          this.load.spritesheet("keySeahawks",'content/playerSeahawks.png',{frameWidth:20,frameHeight:20});

          //all helmets...
        this.load.image('helmetBrowns','content/helmetBrowns.png');
        this.load.image('helmetRavens', 'content/helmetRavens.png');
        this.load.image('helmetSteelers','content/helmetSteelers.png');
        this.load.image('helmetBengals','content/helmetBengals.png');
        this.load.image('helmetChiefs', 'content/helmetChiefs.png');
        this.load.image('helmetChargers','content/helmetChargers.png');
        this.load.image('helmetRaiders','content/helmetRaiders.png');
        this.load.image('helmetBroncos','content/helmetBroncos.png');
        this.load.image('helmetPatriots', 'content/helmetPatriots.png');
        this.load.image('helmetJets','content/helmetJets.png');
        this.load.image('helmetDolphins','content/helmetDolphins.png');
        this.load.image('helmetBills', 'content/helmetBills.png');
        this.load.image('helmetTexans', 'content/helmetTexans.png');
        this.load.image('helmetTitans', 'content/helmetTitans.png');
        this.load.image('helmetColts','content/helmetColts.png');
        this.load.image('helmetJaguars','content/helmetJaguars.png');
        this.load.image('helmetNiners', 'content/helmetNiners.png');
        this.load.image('helmetSeahawks', 'content/helmetSeahawks.png');
        this.load.image('helmetCardinals', 'content/helmetCardinals.png');
        this.load.image('helmetRams', 'content/helmetRams.png');
        this.load.image('helmetPackers', 'content/helmetPackers.png');
        this.load.image('helmetVikings', 'content/helmetVikings.png');
        this.load.image('helmetLions', 'content/helmetLions.png');
        this.load.image('helmetBears', 'content/helmetBears.png');
        this.load.image('helmetSaints', 'content/helmetSaints.png');
        this.load.image('helmetFalcons', 'content/helmetFalcons.png');
        this.load.image('helmetPanthers', 'content/helmetPanthers.png');
        this.load.image('helmetBuccaneers', 'content/helmetBuccaneers.png');
        this.load.image('helmetEagles', 'content/helmetEagles.png');
        this.load.image('helmetCowboys', 'content/helmetCowboys.png');
        this.load.image('helmetGiants', 'content/helmetGiants.png');
        this.load.image('helmetRedskins', 'content/helmetRedskins.png');

        this.load.spritesheet('playerHit', 'content/playerHit.png',{frameWidth:25,frameHeight:20});

        this.load.audio('soundKick', 'content/football_kick.mp3');
        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundCatch', 'content/football_catch.mp3');
        this.load.audio('hitBump', 'content/hit_bump.mp3');
        this.load.audio('hit', 'content/hit.mp3');
        this.load.audio('hut','content/qb_hut.mp3');
        this.load.audio('crowdNoise','content/crowd_noise.mp3');
        

        //Fonts...
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create() {
        //Fonts...
        //WebFont.load({
         // google: {
         //     families: ['Roboto']
         // },

      //});
      this.sfx = {
        theme: [
          this.sound.add("crowdNoise"),
        ],
      };
      if(!musicLoaded){
        this.sfx.theme[0].loop = true;
        this.sfx.theme[0].play();
        //this.sfx.theme[0].setVolume(0.5);
        musicLoaded = true;
      }

        //this.bg = this.add.image(0,0,'mainMenuBg');
        //this.bg.setOrigin(0.0,0.0);

        this.anims.create({
          key: "ballFlip",
          frames: this.anims.generateFrameNumbers("ball"),
          frameRate: 24,
          repeat: -1
        });
        this.anims.create({
          key: player1Key,
          frames: this.anims.generateFrameNumbers(player1Key),
          frameRate: 18,
          repeat: -1
        });
        this.anims.create({
          key: player2Key,
          frames: this.anims.generateFrameNumbers(player2Key),
          frameRate: 24,
          repeat: -1
        });
        this.anims.create({
          key: "playerHit",
          frames: this.anims.generateFrameNumbers("playerHit"),
          frameRate: 24,
          repeat: 0
        });

        this.container = this.add.container(213, 0);
        this.container.y = 0;
        this.field = this.add.sprite(0,0,'field');
        this.field.setOrigin(0,0);
        this.firstDownLine = this.add.sprite(0, 0, 'firstDownLine');
        this.firstDownLine.setOrigin(0,0.5);
        this.lineOfScrimmage = this.add.sprite(0,540, 'lineOfScrimmage');
        this.lineOfScrimmage.setOrigin(0,0.5);
        this.circle = this.add.sprite(0,0, 'circle');
        this.circle2 = this.add.sprite(0,0, 'circle2');
        this.targetA = this.add.sprite(200,500, 'targetA');
        this.targetS = this.add.sprite(250,500, 'targetS');
        this.targetD = this.add.sprite(300,500, 'targetD');
        this.targetA.visible = false;this.targetD.visible = false;this.targetS.visible = false;
        this.container.add([this.field,this.firstDownLine, this.lineOfScrimmage, this.circle, this.circle2, this.targetA, this.targetS, this.targetD]);
        //this.ball.anims.play('ballFlip');
        this.scoreBoard = this.add.container(0, 0);
        this.scoreboardBg = this.add.image(0,0,'scoreboard');
        this.scoreboardBg.setOrigin(0,0);
        this.gmDropdown = this.add.image(-211,136, 'gmDropdown');
        this.gmDropdown.setOrigin(0,0);
        this.gmDropdown.visible = false;



        //mobile
        if(mobile){
          this.targetA.setInteractive();
          this.targetA.on('pointerdown', function(){
            mobilePassA = true;
          });
          this.targetS.setInteractive();
          this.targetS.on('pointerdown', function(){
            mobilePassS = true;
          });
          this.targetD.setInteractive();
          this.targetD.on('pointerdown', function(){
            mobilePassD = true;
          });
          this.input.addPointer(2);
          this.dpadBase = this.add.image(105,400,'dpadBase');
          this.dpadTop = this.add.sprite(105,400,'dpadTop').setInteractive({ draggable: true });
          //this.dpadTop.setInteractive();
          this.dpadTop.on('drag', function (pointer, dragX, dragY) {
            this.x = pointer.x;
            this.y = pointer.y;
            if(pointer.x < 95){ mobileLeft = true;}else{mobileLeft = false;}
            if(pointer.x > 115){ mobileRight = true;}else{mobileRight = false;}
            if(pointer.y < 395){ mobileUp = true;}else{mobileUp = false;}
            if(pointer.y > 405){ mobileDown = true;}else{mobileDown = false;}
          });
          this.dpadTop.on('pointerdown', function (pointer) {
            this.x = pointer.x;
            this.y = pointer.y;
            if(pointer.x < 95){ mobileLeft = true;}else{mobileLeft = false;}
            if(pointer.x > 115){ mobileRight = true;}else{mobileRight = false;}
            if(pointer.y < 395){ mobileUp = true;}else{mobileUp = false;}
            if(pointer.y > 405){ mobileDown = true;}else{mobileDown = false;}
          });
            this.dpadTop.on("pointerout", function() {
              this.x = 105;
              this.y = 400;
              mobileLeft = false;
              mobileRight = false;
              mobileUp = false;
              mobileDown = false;
            });
            this.dpadTop.on("pointerup", function() {
              this.x = 105;
              this.y = 400;
              mobileLeft = false;
              mobileRight = false;
              mobileUp = false;
              mobileDown = false;
            });

            this.mobileSnap = this.add.sprite(800,430,'mobileSnap');
            this.mobileSnap.setInteractive();
            this.mobileSnap.on('pointerup', function(){
              if(playSelected){
                mobileSnap = true;
                this.visible = false;
              }
            });
            this.mobileSnap.visible = false;

            this.mobileBoost = this.add.sprite(800,430,'mobileBoost');
            this.mobileBoost.setInteractive();
            this.mobileBoost.on('pointerdown', function(){
              if(ballSnapped){
                mobileBoost = true;
              }
            });
            this.mobileBoost.on('pointerout', function(){
                mobileBoost = false;
            });
            this.mobileBoost.on('pointerout', function(){
                mobileBoost = false;
            });
            this.mobileBoost.visible = false;

            this.mobileSpin = this.add.sprite(800,325,'mobileSpin');
            this.mobileSpin.setInteractive();
            this.mobileSpin.on('pointerdown', function(){
              if(ballCarrier != null && !tackled && ballCarrier.getData("hasBall") && canSpin && !ballCarrier.getData("spinning")){
                ballCarrier.setData("spinning",true);
                ballCarrier.y -= 5;
                canSpin = false;
                mobileSpin = true;
              }
            });
            this.mobileSpin.on('pointerup', function(){
              canSpin = true;
              mobileSpin = false;
            });
            this.mobileSpin.on('pointerout', function(){
              canSpin = true;
              mobileSpin = false;
            });
            this.mobileSpin.visible = false;

            this.mobileBlast = this.add.sprite(800,325,'mobileBlast');
            this.mobileBlast.setInteractive();
            this.mobileBlast.on('pointerdown', function(){
                mobileBlast = true;
            });
            this.mobileBlast.on('pointerup', function(){
              canBlast = true;
              mobileBlast = false;
            });
            this.mobileBlast.on('pointerout', function(){
              canBlast = true;
              mobileBlast = false;
            });
            this.mobileBlast.visible = false;
          }
          //end mobile

        //where helmets used to be...
        //
        this.helmetHome = this.add.image(5,1,helmetHomeKey);
        this.helmetHome.setOrigin(1,0);
        this.helmetHome.setScale(-0.6,0.6);
        //this.helmetHome.setTexture(helmetHome);
        this.helmetVisitor = this.add.image(5,31,helmetVisitorKey);
        this.helmetVisitor.setOrigin(1,0);
        this.helmetVisitor.setScale(-0.6,0.6);
        //this.helmetVisitor.setTexture(helmetVisitor);
        //this.textDown = this.add.text(100, 90, down);
        //this.textDown.font = "Arial";
        //this.textDown.setOrigin(0.5, 0.0);
        this.textScoreTeam1 = this.add.text(200, 5, scoreTeam1, { fontFamily: 'Arial', fontSize: 18, color: '#000000' });
        //this.textScoreTeam1.font = "Arial";
        this.textScoreTeam1.setOrigin(1.0, 0.0);
        this.textScoreTeam2 = this.add.text(200, 35, scoreTeam2, { fontFamily: 'Arial', fontSize: 18, color: '#000000' });
        this.textScoreTeam2.font = "Arial";
        this.textScoreTeam2.setOrigin(1.0, 0.0);
        this.textYardline = this.add.text(10, 63, "Ball on the " + yardline, { fontFamily: 'Arial', fontSize: 14, color: '#ff0000' });
        //this.textYardline.font = "Arial";
        this.textYardline.setOrigin(0.0, 0.0);
        this.textYardsToGo = this.add.text(105, 95, "1st Down", { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' });
        this.textYardsToGo.setOrigin(0.5, 0.0);
        //stats...
        //this.statsShadow = this.add.text(106, 280, "GAME STATS", { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        //this.statsShadow.setOrigin(0.5, 0.0);
        //this.statsShadow.setStroke('#000000', 1);
        this.stats = this.add.text(106, 280, "GAME STATS", { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        this.stats.setOrigin(0.5, 0.0);
        this.stats.setTintFill(0xffffff, 0xff0000, 0x0000ff, 0x0000ff);
        this.statsInterceptions = this.add.text(30, 310, "Interceptions", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsInterceptions.setOrigin(0.0, 0.0);
        this.statsInterceptionsNum = this.add.text(180, 310, statsInterceptions, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsInterceptionsNum.setOrigin(1.0, 0.0);
        this.statsPassYards = this.add.text(30, 335, "Pass Yards", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsPassYards.setOrigin(0.0, 0.0);
        this.statsPassYardsNum = this.add.text(180, 335, statsPassYards, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsPassYardsNum.setOrigin(1.0, 0.0);
        this.statsRushYards = this.add.text(30, 360, "Rush Yards", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsRushYards.setOrigin(0.0, 0.0);
        this.statsRushYardsNum = this.add.text(180, 360, statsRushYards, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsRushYardsNum.setOrigin(1.0, 0.0);
        this.statsCompletions = this.add.text(30, 385, "Completions", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsCompletions.setOrigin(0.0, 0.0);
        this.statsCompletionsNum = this.add.text(180, 385, statsCompletions, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsCompletionsNum.setOrigin(1.0, 0.0);
        this.statsTouchdowns = this.add.text(30, 410, "Touchdowns", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsTouchdowns.setOrigin(0.0, 0.0);
        this.statsTouchdownsNum = this.add.text(180, 410, statsTouchdowns, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsTouchdownsNum.setOrigin(1.0, 0.0);
        this.statsTotalYards = this.add.text(30, 435, "Total Yards", { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsTotalYards.setOrigin(0.0, 0.0);
        this.statsTotalYardsNum = this.add.text(180, 435, statsTotalYards, { fontFamily: 'Arial', fontSize: 12, color: '#ffffff' });
        this.statsTotalYardsNum.setOrigin(1.0, 0.0);
        if(time == 300){this.textTime = this.add.text(200, 61, '5:00', { fontFamily: 'Arial', fontSize: 18, color: '#0000ff' });}
        if(time == 600){this.textTime = this.add.text(200, 61, '10:00', { fontFamily: 'Arial', fontSize: 18, color: '#0000ff' });}
        if(time == 900){this.textTime = this.add.text(200, 61, '15:00', { fontFamily: 'Arial', fontSize: 18, color: '#0000ff' });}
        this.textTime.setOrigin(1.0, 0.0);

        this.btnSound = this.add.sprite(825,5,"buttonSound1");
        this.btnSound.setOrigin(0,0);
        this.btnSound.setInteractive();
        this.btnSound.on("pointerover", function() {
          this.btnSound.setTexture("buttonSound2"); // set the button texture to sprbtnSoundHover
          //this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.btnSound.on("pointerout", function() {
          this.setTexture("buttonSound1");
        });
        this.btnSound.on("pointerdown", function() {
          this.btnSound.setTexture("buttonSound1");
          //this.sfx.btnDown.play();
        }, this);
        this.btnSound.on("pointerup", function() {
          this.btnSound.setTexture("buttonSound2");
          if(sound){
            sound = false;
            this.sound.mute = true;
          }else{
            sound = true;
            this.sound.mute = false;
          }
        }, this);

        this.scoreBoard.add([this.scoreboardBg,this.textYardline,this.gmDropdown,this.btnSound]);

        this.speedBarMask = this.add.sprite(698,10,'speedBarMask');
        this.speedBarMask.setOrigin(0.0,0.0);
        //this.speedBarMask.setAngle(90);
        this.speedBar = this.add.sprite(700,12,'speedBar');
        this.speedBar.setOrigin(0.0,1.0);
        this.speedBar.setAngle(90);
        this.spaceBarToSnap = this.add.sprite(533,460,'spaceBarToSnap');
        this.spaceBarToSnap.visible = false;

        //TEAM 1 initialize
        this.qb = new QB(this,320,460,player1Key);this.qb.setData("startX", 320);this.qb.setData("startY", 1200);
        this.fb = new FB(this,320,420,player1Key);this.fb.setData("startX", 200);this.fb.setData("startY", 840);
        this.tb = new TB(this,340,460,player1Key);this.tb.setData("startX", 320);this.tb.setData("startY", 1320);
        this.wr1 = new WR1(this,280,420,player1Key);this.wr1.setData("startX", 150);this.wr1.setData("startY", 780);
        this.wr2 = new WR2(this,360,420,player1Key);this.wr2.setData("startX", 490);this.wr2.setData("startY", 780);
        this.wr3 = new WR3(this,300,420,player1Key);this.wr3.setData("startX", 440);this.wr3.setData("startY", 840);
        this.lt = new LT(this,280,400,player1Key);this.lt.setData("startX", 100);this.lt.setData("startY", 660);
        this.lg = new LG(this,300,400,player1Key);this.lg.setData("startX", 200);this.lg.setData("startY", 660);
        this.c = new C(this,320,400,player1Key);this.c.setData("startX", 320);this.c.setData("startY", 660);
        this.rg = new RG(this,340,400,player1Key);this.rg.setData("startX", 440);this.rg.setData("startY", 660);
        this.rt = new RT(this,360,400,player1Key);this.rt.setData("startX", 540);this.rt.setData("startY", 660);
        //TEAM 2 initialize
        this.db1 = new DB1(this, 260,240,player2Key);this.db1.setData("startX", 50);
        this.db2 = new DB2(this, 380,240,player2Key);this.db2.setData("startX", 590);
        this.ss = new SS(this, 280,240, player2Key);this.ss.setData("startX", 100);
        this.fs = new FS(this, 360,240, player2Key);this.fs.setData("startX", 540);
        this.lb1 = new LB1(this, 300,240,player2Key);this.lb1.setData("startX", 150);
        this.lb2 = new LB2(this, 320,180,player2Key);this.lb2.setData("startX", 320);this.lb2.setData("startY", 440);
        this.lb3 = new LB3(this, 340,240,player2Key);this.lb3.setData("startX", 490);
        this.dl1 = new DL1(this, 280,220,player2Key);this.dl1.setData("startX", 200);
        this.dl2 = new DL2(this, 360,220,player2Key);this.dl2.setData("startX", 440);
        this.dl3 = new DL3(this, 300,220,player2Key);this.dl3.setData("startX", 250);
        this.dl4 = new DL4(this, 340,220,player2Key);this.dl4.setData("startX", 390);
        this.container.add([this.qb,this.fb,this.tb,this.wr1,this.wr2,this.wr3,this.lt,this.lg,this.c,this.rg,this.rt,
          this.db1,this.db2,this.ss,this.fs,this.lb1,this.lb2,this.lb3,this.dl1,this.dl2,this.dl3,this.dl4]);
        this.ball = this.add.sprite(320,540, 'ball').setScale(0.33);
        football = this.ball;
        this.container.add(this.ball);

        //this.team1 = this.add.group();
        this.team1 = this.add.group();
        this.team1.add(this.qb, false);
        this.team1.add(this.fb, false);
        this.team1.add(this.tb, false);
        this.team1.add(this.wr1, false);
        this.team1.add(this.wr2, false);
        this.team1.add(this.wr3, false);
        this.team1.add(this.lt, false);
        this.team1.add(this.lg, false);
        this.team1.add(this.c, false);
        this.team1.add(this.rg, false);
        this.team1.add(this.rt, false);
        //Team2
        //this.team2 = this.add.group();
        this.team2 = this.add.group();
        this.team2.add(this.db1, false);
        this.team2.add(this.db2, false);
        this.team2.add(this.ss, false);
        this.team2.add(this.fs, false);
        this.team2.add(this.lb1, false);
        this.team2.add(this.lb2, false);
        this.team2.add(this.lb3, false);
        this.team2.add(this.dl1, false);
        this.team2.add(this.dl2, false);
        this.team2.add(this.dl3, false);
        this.team2.add(this.dl4, false);

        this.physics.add.overlap(this.team1, this.team2, this.slowDown, null, this);


        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

        this.soundHit = this.sound.add('hitBump');

        if(difficulty == 2.4){
          this.menuHallOfFameLoading = this.add.sprite(0,0, 'menuHallOfFameLoading');
          this.menuHallOfFameLoading.setOrigin(0.0,0.0);
        }

    }//end create()

    onEvent ()
    {
      if(!timeStopped && time > 0){
        time -= 1; // One second
        this.textTime.setText(this.formatTime(time));
      }
    }

    formatTime(seconds){
      //Adding padStart for older browsers...
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (this.length >= targetLength) {
          return String(this);
      } else {
          targetLength = targetLength - this.length;
          if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
          }
          return padString.slice(0, targetLength) + String(this);
      }
  };
}
//end adding padStart
      // Minutes
      var minutes = Math.floor(seconds/60);
      // Seconds
      var partInSeconds = seconds%60;
      // Adds left zeros to seconds
      partInSeconds = partInSeconds.toString().padStart(2,'0');
      // Returns formated time
      return `${minutes}:${partInSeconds}`;
  }

slowDown(player1, player2){
  //player2.setData("speed", 0.2);
  if(!player2.getData("hasBall")){
    player2.setData("speed", 0.2);
  }else{
    player2.setData("speed", 0.4);
  }
  if(!player1.getData("hasBall")){
    player1.setData("speed", 0.2);
  }
  if(player1 == ballCarrier){
    player1.setData("health", player1.getData("health") -(1 + difficulty));
    if(!this.soundHit.isPlaying){
      //this.sound.play('hitBump');
      this.soundHit.play();
    }
    if(player2.getData("blasting")){
      tackled = true;
      fumblePossibility = Math.random();
      if(fumblePossibility > 0){
        down = 5;
      }
      this.justTackled();
      openBigHit = true;
      this.sound.play('hit');
    }else if(player1.getData("health") < 1){
      tackled = true;
      this.justTackled();
    }
  }
  if(player2 == ballCarrier){
    player2.setData("health", player2.getData("health") -(1 + difficulty));
    if(!this.soundHit.isPlaying){
      //this.sound.play('hitBump');
      this.soundHit.play();
    }
    if(player1.getData("blasting")){
      tackled = true;
      fumblePossibility = Math.random();
      if(fumblePossibility > fumbleChance){
        down = 5;
        openFumble = true;
        this.sound.play('soundCrowdCheer');
        this.justTackled();
      }else{
        this.justTackled();
        openBigHit = true;
      }
      this.sound.play('hit');
    }else if(player2.getData("health") < 1){
      tackled = true;
      this.justTackled();
    }
  }
}

    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
        //Poki... I added muting for commercial breaks
        this.sound.mute = false;
        //end poki mute for commercials
      }else{
        this.btnSound.setTexture("buttonSound2");
        //Poki... I added muting for commercial breaks
        this.sound.mute = true;
        //end poki mute for commercials
      }
      
      //mobile buttons
      if(mobile){
        if(offensiveTeam == 1 || defensiveTeam == 2){
          this.mobileSpin.visible = true;
          this.mobileBlast.visible = false;
          if(ballSnapped){
            this.mobileBoost.visible = true;
          }else{
            this.mobileBoost.visible = false;
          }
          if(speedBoost <= 0){
            this.mobileBoost.visible = false;
          }
        }
        if(offensiveTeam == 2 || defensiveTeam == 1){
          this.mobileBlast.visible = true;
          this.mobileSpin.visible = false;
          if(ballSnapped){
            this.mobileBoost.visible = true;
          }else{
            this.mobileBoost.visible = false;
          }
          if(speedBoost <= 0){
            this.mobileBoost.visible = false;
          }
        }
      }
      //time..
      //this.textTime.setText(time);
      if(time <= 0 && !ballSnapped){
        //poki
        gameStop();
        //end poki
        //
        this.qb.destroy();
        this.fb.destroy();
        this.tb.destroy();
        this.wr1.destroy();
        this.wr2.destroy();
        this.wr3.destroy();
        this.lt.destroy();
        this.lg.destroy();
        this.c.destroy();
        this.rg.destroy();
        this.rt.destroy();
        this.db1.destroy();
        this.db2.destroy();
        this.ss.destroy();
        this.fs.destroy();
        this.lb1.destroy();
        this.lb2.destroy();
        this.lb3.destroy();
        this.dl1.destroy();
        this.dl2.destroy();
        this.dl3.destroy();
        this.dl4.destroy();
        //
        this.scene.start("SceneGameOver");
        this.scene.stop("ScenePlaybook");
        gameOver = true;
      }

      this.qb.update();
      this.fb.update();
      this.tb.update();
      this.wr1.update();
      this.wr2.update();
      this.wr3.update();
      this.lt.update();
      this.lg.update();
      this.c.update();
      this.rg.update();
      this.rt.update();
      //Team 2..
      this.db1.update();
      this.db2.update();
      this.ss.update();
      this.fs.update();
      this.lb1.update();
      this.lb2.update();
      this.lb3.update();
      this.dl1.update();
      this.dl2.update();
      this.dl3.update();
      this.dl4.update();

      if(this.qb.getData("hasBall")){ballCarrier = this.qb;}if(this.tb.getData("hasBall")){ballCarrier = this.tb;}if(this.wr1.getData("hasBall")){ballCarrier = this.wr1;}if(this.wr2.getData("hasBall")){ballCarrier = this.wr2;}if(this.wr3.getData("hasBall")){ballCarrier = this.wr3;}
      if(this.lb2.getData("hasBall")){ballCarrier = this.lb2;}if(this.db1.getData("hasBall")){ballCarrier = this.db1;}if(this.db2.getData("hasBall")){ballCarrier = this.db2;}if(this.ss.getData("hasBall")){ballCarrier = this.ss;}if(this.fs.getData("hasBall")){ballCarrier = this.fs;}

      if(offensiveTeam == 1){
        if(difficulty == 2.4){
          this.circle2.x = this.lb2.x; this.circle2.y = this.lb2.y;
          this.circle2.visible = true;
        }
        if(ballCarrier != null){
          this.circle.x = ballCarrier.x; this.circle.y = ballCarrier.y;
          this.circle.visible = true;
        }else{
          this.circle.visible = false;
        }
      }else{
        this.circle2.visible = false;
        this.circle.x = this.qb.x; this.circle.y = this.qb.y;
        this.circle.visible = true;
      }

      if(ballCarrier != null && ballCarrier.getData("hasBall") && offensiveTeam == 1){
        if(ballCarrier.y <= 120){
          if(!goingFor2){this.td();}
          if(goingFor2){this.conversionGood();}
        }
      }
      if(ballCarrier != null && ballCarrier.getData("hasBall") && offensiveTeam == 2){
        if(ballCarrier.y >= 1320){
          this.td2();
        }
      }

//NEW GAME
      if(newGame){
        if(this.container.y > -420){
          this.container.y -= 1;
        }if(this.container.y <= -420){
          openSpecialTeamsPlaybook = true;
          newGame = false;
          if(this.menuHallOfFameLoading != null){
            this.menuHallOfFameLoading.visible = false;
            this.menuHallOfFameLoading.destroy();
          }
          //Team 1
        this.qb.huddle();this.fb.huddle();this.tb.huddle();this.wr1.huddle();this.wr2.huddle();this.wr3.huddle();this.lt.huddle();this.lg.huddle();this.c.huddle();this.rg.huddle();this.rt.huddle();
          //Team2
        this.db1.huddle();this.db2.huddle();this.ss.huddle();this.fs.huddle();this.lb1.huddle();this.lb2.huddle();this.lb3.huddle();this.dl1.huddle();this.dl2.huddle();this.dl3.huddle();this.dl4.huddle();
        }
      }//end NEw Game
      if(!team1PlaySet){
        this.setTeam1Play();
      }
      if(!team2PlaySet){
        this.setTeam2Play();
      }
//END NEW GAME
      //KickOff
      if(kickOffKicked || kickOffStarted){
        counterGmDropdown += 1;
          if(counterGmDropdown < 500 && counterGmDropdown > 0){this.gmDropdown.setAlpha(counterGmDropdown/100);this.gmDropdown.visible = true;
            if(this.gmDropdown.x < 0){
              this.gmDropdown.x += 1;
            }
          }
          if(counterGmDropdown > 500 && counterGmDropdown < 600){this.gmDropdown.setAlpha(1 - counterGmDropdown/600);
            if(this.gmDropdown.x > -211){
              this.gmDropdown.x -= 1;
            }
          }
      }else{
        //this.gmDropdown.visible = false;
        counterGmDropdown = 0;
        this.gmDropdown.setAlpha(0.0);
      }
      if(kickOff && kickReturnTeam == 1){
        if(ballSnapped){
          if(!inPlay){
            if(!ballFlipping){ this.ball.anims.play('ballFlip');ballFlipping = true;this.sound.play('soundKick');this.sound.play('soundCrowdCheer');}
            this.container.y -= 1.4;
            this.ball.y += 2;if(this.ball.scaleX < 2 && this.ball.y < 930){ballScale += 0.01;this.ball.setScale(ballScale)};
            if(this.ball.scaleX > 0.33 && this.ball.y > 930){ballScale -= 0.01;this.ball.setScale(ballScale)};
            if(this.ball.y >= 1320){inPlay = true;ballCarrier = this.tb;this.tb.setData("hasBall",true);this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);this.sound.play('soundCatch');}
            statsYardlineStart = 1320;
          }
          if(ballCarrier != null && !tackled){
            if(this.keySpace.isDown && canSpin && !ballCarrier.getData("spinning")){ballCarrier.setData("spinning",true);ballCarrier.y -= 5;}
            if(this.keySpace.isDown && !mobileSpin){canSpin = false;}else{canSpin = true;}
              if((this.keyW.isDown || mobileBoost) && speedBoost > 0){ballCarrier.setData("speed",ballCarrier.getData("speedOriginal") + 0.6);speedBoost -= 0.5;this.speedBar.setScale(1, speedBoost/100);
          }else{ballCarrier.setData("speed",ballCarrier.getData("speedOriginal"));}
            this.ball.x = ballCarrier.x;this.ball.y = ballCarrier.y;
            if(this.keyUp.isDown){ballCarrier.y -= ballCarrier.getData("speed");}if(this.keyDown.isDown){ballCarrier.y += ballCarrier.getData("speed");}
            if(this.keyLeft.isDown){ballCarrier.x -= ballCarrier.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){ballCarrier.x += ballCarrier.getData("speed");this.circle.rotation += 0.1;}
            //mobile controls
            if(mobileUp){ballCarrier.y -= ballCarrier.getData("speed");}if(mobileDown){ballCarrier.y += ballCarrier.getData("speed");}
            if(mobileLeft){ballCarrier.x -= ballCarrier.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){ballCarrier.x += ballCarrier.getData("speed");this.circle.rotation += 0.1;}
            if(ballCarrier.y > 360){this.container.y = 1080 - ballCarrier.y - 720;}if(ballCarrier.y <= 360){this.container.y = 0;}
            if(ballCarrier.x < 25 || ballCarrier.x > 615){tackled = true;this.justTackled();}
          }
        }
      }
      // kickOff by team1...
      if(kickOffStarted && kickReturnTeam == 2){
        if(!ballSnapped){
          this.tb.y -= 2.0;
          if(this.tb.y <= yardlinePixel){
            ballSnapped = true;
            //start Poki...
            gameStart();
            //end Poki
            this.sound.play('soundKick');
            this.sound.play('soundCrowdCheer');
          }
          //presnap...
          if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
            if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
            //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
            speedBoost -= 0.5;
            this.speedBar.setScale(1, speedBoost/100);
        }else{
          if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
          if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
        }
            if(this.keyUp.isDown && this.qb.y > yardlinePixel + 10){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
            if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
            //mobile controls
          if(mobileUp && this.qb.y > yardlinePixel + 10){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
          if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
            //end presnap
        }
        if(ballSnapped){
          if(!inPlay){
            if(!onsideKick){
              if(!ballFlipping){ this.ball.anims.play('ballFlip');ballFlipping = true;}
                this.container.y += 1.4;
                this.ball.y -= 2;if(this.ball.scaleX < 2 && this.ball.y > 450){ballScale += 0.01;this.ball.setScale(ballScale)};
                if(this.ball.scaleX > 0.33 && this.ball.y < 450){ballScale -= 0.01;this.ball.setScale(ballScale)};
                if(this.ball.y <= 120){inPlay = true;ballCarrier = this.ss;this.ss.setData("hasBall",true);this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);this.sound.play('soundCatch');}
            }
            if(onsideKick){
              if(!ballFlipping){
               this.ballRoute = Math.random()*1 + 1.0;
              }
              if(!ballFlipping){ this.ball.anims.play('ballFlip');ballFlipping = true;}
                //this.container.y += 1.4;
                this.ball.y -= this.ballRoute;
                if(this.ball.y >= 800){this.ball.x += 1.6;}//if(this.ball.scaleX < 2 && this.ball.y > 450){ballScale += 0.01;this.ball.setScale(ballScale)};
                if(this.ball.y < 800 && this.ball.y > 775){this.ball.x -= 1.0;}//if(this.ball.scaleX < 2 && this.ball.y > 450){ballScale += 0.01;this.ball.setScale(ballScale)};
                if(this.ball.y < 775 && this.ball.y > 700){this.ball.x += 0.5;}//if(this.ball.scaleX < 2 && this.ball.y > 450){ballScale += 0.01;this.ball.setScale(ballScale)};
                if(this.ball.y < 700){
                  if(this.ball.x > this.ss.x){this.ball.x -= 0.2;}
                  if(this.ball.x < this.ss.x){this.ball.x += 0.2;}
                }
                //if(this.ball.scaleX > 0.33 && this.ball.y < 450){ballScale -= 0.01;this.ball.setScale(ballScale)};
                if(ballCarrier != this.ss){if(this.ball.x > this.ss.x){this.ss.x += 2.0;}if(this.ball.x < this.ss.x){this.ss.x -= 2.0;}}
                if(this.ball.y <= this.ss.y){inPlay = true;ballCarrier = this.ss;this.ss.setData("hasBall",true);this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);this.sound.play('soundCatch');}
                //fumble stuff...
                  if(Math.abs(this.ball.x - this.qb.x) < 20 && Math.abs(this.ball.y - this.qb.y) < 20){
                    //fumble...
                    tackled = true;
                    //fumblePossibility = Math.random();
                    //if(fumblePossibility > 0){
                      down = 5;
                      openFumble = true;
                      this.sound.play('soundCrowdCheer');
                      this.justTackled();
                    //}else{
                    //  this.justTackled();
                     // openBigHit = true;
                    //}
                    this.sound.play('hit');
                  }
                  //end fumble stuff
            }
          }
          if(!tackled){
            if(this.ss.getData("hasBall")){
              this.ball.x = ballCarrier.x;this.ball.y = ballCarrier.y;
            }
            if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
              if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
              //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
              speedBoost -= 0.5;
              this.speedBar.setScale(1, speedBoost/100);
          }else{
            if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
            if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
          }
          if((this.keySpace.isDown || mobileBlast) && canBlast){this.qb.blast();canBlast = false;}if(!this.keySpace.isDown && !mobileBlast){canBlast = true;}
              if(this.keyUp.isDown){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
              if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
              if(this.ball.y > 360 && this.ball.y > yardlinePixel){this.container.y = -this.ball.y + 120;}if(this.ball.y > 1080){this.container.y = -960;}
              //mobile controls
            if(mobileUp){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
            if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
          }
        }
      }

                  //fieldGoal...
                  if(!ballSnapped && playSelected && fieldGoal && offensiveTeam == 2){
                    this.spaceBarToSnap.visible = true;
                    //mobile..
                    if(mobile){
                      this.mobileSnap.visible = true;
                    }
                    if(this.keySpace.isDown || mobileSnap){
                      this.spaceBarToSnap.visible = false;
                      //mobile..
                      mobileSnap = false;
                      if(mobile){
                        this.mobileSnap.visible = false;
                      }
                      playSelected = false;
                      ballSnapped = true;
                      //start Poki...
                      gameStart();
                      //end Poki
                      kickOff = false;
                      kickOffKicked = false;
                      kickOffStarted = false;
                      inPlay = false;
                      motion = false;
                      speedBoost = 100 - (difficulty*12.5);
                      this.speedBar.setScale(1,speedBoost/100);
                      tackled = false;
                      timeStopped = false;
                    }
                    //presnap...
                      if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
                        if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
                        //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
                        speedBoost -= 0.5;
                        this.speedBar.setScale(1, speedBoost/100);
                    }else{
                      if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
                      if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
                    }
                        if(this.keyUp.isDown && this.qb.y > yardlinePixel + 20){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
                        if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
                        //mobile controls
                      if(mobileUp && this.qb.y > yardlinePixel + 20){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
                      if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
                        //end presnap
                  }
                  if(fieldGoal && offensiveTeam == 2 && ballSnapped){
                    if(!fieldGoalKicked){
                      if(this.ball.y > this.lb2.y){this.ball.y -= 2.5;}
                      if(this.lb2.y > this.ss.y){fieldGoalKicked = true;this.sound.play('soundKick');}
                      //defensive QB movement
                      if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
                        if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
                        //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
                        speedBoost -= 0.5;
                        this.speedBar.setScale(1, speedBoost/100);
                      }else{
                        if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
                        if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
                      }
                      if((this.keySpace.isDown || mobileBlast) && canBlast){this.qb.blast();canBlast = false;}if(!this.keySpace.isDown && !mobileBlast){canBlast = true;}
                          if(this.keyUp.isDown){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
                          if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
                          if(this.ball.y > 360 && this.ball.y > yardlinePixel){this.container.y = -this.ball.y + 120;}if(this.ball.y > 1080){this.container.y = -960;}
                          //mobile controls
                      if(mobileUp){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
                      if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
                      //end defensive QB movement
                    }
                    if(fieldGoalKicked){
                      if(!ballFlipping){ this.ball.anims.play('ballFlip');ballFlipping = true;}
                      this.ball.y += 2;if(this.ball.scaleX < 2){ballScale += 0.006;this.ball.setScale(ballScale)};
                      if(this.ball.y >= 1450){
                        this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);
                        ballScale = 0.33;
                        this.ball.setScale(ballScale);
                        openFgGoodMC2 = true;
                        this.sound.play('soundCrowdCheer');
                        ballSnapped = false;
                        //start Poki...
                        //gameStart();
                        //end Poki
                        goingFor2 = false;
                        fieldGoal = false;
                        fieldGoalKicked = false;
                        scoreTeam2 += 1;
                        this.textScoreTeam1.setText(scoreTeam1);
                        this.textScoreTeam2.setText(scoreTeam2);
                        yardlinePixel = 540;
                        this.huddleUp();
                        setKickoff = true;
                        this.setUpKickoff2();
                        kickBad = false;
                        kickGood = false;
                        offensiveTeam == 1;
                        defensiveTeam == 2;
                      }
                    }
                }
                  if(fieldGoal && offensiveTeam == 1){
                    /*if(!ballSnapped && playSelected){
                      if(this.keySpace.isDown){
                        playSelected = false;
                        ballSnapped = true;
                        inPlay = false;
                        tackled = false;
                        timeStopped = false;
                      }
                    }*/
                    this.spaceBarToSnap.visible = false;
                    //mobile..
                    if(mobile){
                      this.mobileSnap.visible = false;
                    }
                    if(ballSnapped){
                      if(offensiveTeam == 1){
                        if(!fieldGoalKicked){
                          if(this.ball.y < this.qb.y){this.ball.y += 2.5;}
                          if(this.tb.y < this.qb.y){fieldGoalKicked = true;this.sound.play('soundKick');}
                        }
                        if(fieldGoalKicked){
                          if(!ballFlipping){ this.ball.anims.play('ballFlip');ballFlipping = true;}
                          this.ball.y -= 2;if(this.ball.scaleX < 2){ballScale += 0.006;this.ball.setScale(ballScale)};
                          if(kickBad){this.ball.x += 0.9;}
                          if(this.ball.y <= -10){
                            this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);
                            ballScale = 0.33;
                            this.ball.setScale(ballScale);
                            if(kickGood){openFgGoodMC = true;this.sound.play('soundCrowdCheer');}
                            if(kickBad){openFgBadMC = true;}
                            ballSnapped = false;
                  
                            goingFor2 = false;
                            fieldGoal = false;
                            fieldGoalKicked = false;
                            if(kickGood){scoreTeam1 += 1;}
                            this.textScoreTeam1.setText(scoreTeam1);
                            this.textScoreTeam2.setText(scoreTeam2);
                            yardlinePixel = 900;
                            this.huddleUp();
                            setKickoff = true;
                            this.setUpKickoff();
                            kickBad = false;
                            kickGood = false;
                            //poki
                            gameStop();
                            //end poki
                          }
                        }
                      }
                    }//end ballsnapped for team 1 fg
                  }
      if(!kickOff && !fieldGoal){
        if(!ballSnapped && playSelected){
          if(this.keySpace.isDown || mobileSnap){
            this.spaceBarToSnap.visible = false;
            //mobile..
            mobileSnap = false;
            if(mobile){
              this.mobileSnap.visible = false;
            }
            statsYardlineStart = yardlinePixel;
            playSelected = false;
            ballSnapped = true;
            //start Poki...
            gameStart();
            //end Poki
            this.sound.play('hut');
            kickOff = false;
            kickOffKicked = false;
            kickOffStarted = false;
            inPlay = false;
            motion = false;
            speedBoost = 100 - (difficulty*12.5);
            this.speedBar.setScale(1,speedBoost/100);
            tackled = false;
            timeStopped = false;
          }
        }
        //Offense Team1
          if(offensiveTeam == 1){
            if(!fieldGoal){
              if(motion){
                if(this.wr2.x > 240 && !ballSnapped){
                  this.wr2.x -= 1.5;
                }
              }
              if(ballSnapped){
                if(shotgun){
                  this.ball.y += 2;
                  if(this.ball.y >= this.qb.y){
                    shotgun = false;
                  }
                }
              if(!inPlay && !shotgun){
                //ballCarrier = this.qb;
                if(ballCarrier == null){
                  this.ball.x = this.qb.x;this.ball.y = this.qb.y;
                }
              }
              if(ballCarrier != null && !tackled && ballCarrier.getData("hasBall")){
                if(this.keySpace.isDown && canSpin && !ballCarrier.getData("spinning")){ballCarrier.setData("spinning",true);ballCarrier.y -= 5;}
                if(this.keySpace.isDown && !mobileSpin){canSpin = false;}else{canSpin = true;}
                  if((this.keyW.isDown || mobileBoost) && speedBoost > 0){ballCarrier.setData("speed",ballCarrier.getData("speedOriginal") + 0.6);speedBoost -= 0.5;this.speedBar.setScale(1, speedBoost/100);
              }else{ballCarrier.setData("speed",ballCarrier.getData("speedOriginal"));}
                  this.ball.x = ballCarrier.x;this.ball.y = ballCarrier.y;
                  if(this.keyUp.isDown){ballCarrier.y -= ballCarrier.getData("speed");}if(this.keyDown.isDown){ballCarrier.y += ballCarrier.getData("speed");}
                  if(this.keyLeft.isDown){ballCarrier.x -= ballCarrier.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){ballCarrier.x += ballCarrier.getData("speed");this.circle.rotation += 0.1;}
                  //mobile controls
            if(mobileUp){ballCarrier.y -= ballCarrier.getData("speed");}if(mobileDown){ballCarrier.y += ballCarrier.getData("speed");}
            if(mobileLeft){ballCarrier.x -= ballCarrier.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){ballCarrier.x += ballCarrier.getData("speed");this.circle.rotation += 0.1;}
                  if(ballCarrier.y > 360 && ballCarrier.y < yardlinePixel){this.container.y = 1080 - ballCarrier.y - 720;}if(ballCarrier.y <= 360){this.container.y = 0;}
                  if(ballCarrier.x < 25 || ballCarrier.x > 615){tackled = true;this.justTackled();}
              }
              if(passPlay && !ballPassed && this.qb.y > yardlinePixel && this.qb.getData("hasBall")
              && !this.wr1.getData("hasBall") && !this.wr2.getData("hasBall") && !this.wr3.getData("hasBall") && !this.tb.getData("hasBall")){
                if(this.keyA.isDown || mobilePassA){
                  targetX = this.targetA.x;
                  targetY = this.targetA.y;
                  target = this.wr1;
                  ballPassed = true;
                  var bulletAngle = Math.atan2(this.targetA.y - this.qb.y, this.targetA.x - this.qb.x) * radians2;
                  var bulletAngle1 = (bulletAngle) * radians;
                  xSpeed = Math.cos(bulletAngle1) * 2;
                  ySpeed = Math.sin(bulletAngle1) * 2;
                  this.qb.setData("hasBall", false);
                  ballCarrier = null;
                }
                if(this.keyS.isDown || mobilePassS){
                  targetX = this.targetS.x;
                  targetY = this.targetS.y;
                  target = this.wr2;
                  ballPassed = true;
                  var bulletAngle = Math.atan2(this.targetS.y - this.qb.y, this.targetS.x - this.qb.x) * radians2;
                  var bulletAngle1 = (bulletAngle) * radians;
                  xSpeed = Math.cos(bulletAngle1) * 2;
                  ySpeed = Math.sin(bulletAngle1) * 2;
                  this.qb.setData("hasBall", false);
                  ballCarrier = null;
                }
                if(this.keyD.isDown || mobilePassD){
                  targetX = this.targetD.x;
                  targetY = this.targetD.y;
                  target = this.wr3;
                  ballPassed = true;
                  var bulletAngle = Math.atan2(this.targetD.y - this.qb.y, this.targetD.x - this.qb.x) * radians2;
                  var bulletAngle1 = (bulletAngle) * radians;
                  xSpeed = Math.cos(bulletAngle1) * 2;
                  ySpeed = Math.sin(bulletAngle1) * 2;
                  this.qb.setData("hasBall", false);
                  ballCarrier = null;
                }
              }
              if(ballPassed && ballCarrier == null){
                this.ball.x += xSpeed;
                this.ball.y += ySpeed;
                if(offensiveTeam == 1){
                  if(this.ball.y < targetY - 50){
                    this.incompletePass();
                  }
                  if(Math.abs(this.ball.x - targetX) < 40 && Math.abs(this.ball.y - targetY) < 40){
                    if(Math.abs(target.x - targetX) < 40 && Math.abs(target.y - targetY) < 40){
                      target.setData("hasBall", true);
                      ballCarrier = target;
                      this.sound.play('soundCatch');
                      //ballPassed = false;
                    }
                  }
                }
              }//end ballPassed
            }//end ballSnapped
            }//end if !fieldGoal
        }//end offensiveTeam == 1
        if(offensiveTeam == 2){
          if(!ballSnapped){
            //presnap...
            if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
              if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
              //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
              speedBoost -= 0.5;
              this.speedBar.setScale(1, speedBoost/100);
          }else{
            if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
            if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
          }
              if(this.keyUp.isDown && this.qb.y > yardlinePixel + 48){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
              if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
              //mobile controls
            if(mobileUp && this.qb.y > yardlinePixel + 48){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
            if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
              //end presnap
          }//end !ballsnapped
          //if(ballSnapped && !inPlay && !ballPassed){
            //this.lb2.setData("hasBall", true);
            //ballCarrier = this.lb2;
          //}

          if(ballSnapped){
            if(!fieldGoal){
              if(shotgun){
                this.ball.y -= 2;
                if(this.ball.y <= this.lb2.y){
                  shotgun = false;
                }
              }
              if(!inPlay && !shotgun && !ballPassed){
                if(ballCarrier == null){
                  this.ball.x = this.lb2.x;this.ball.y = this.lb2.y;
                }
              }
              if(passPlay && !ballPassed){
                if(this.lb2.getData("index") > 0){
                  targetX = team2TargetX;
                      targetY = team2TargetY;
                      target = this.ss;
                      ballPassed = true;
                      var bulletAngle = Math.atan2(targetY - this.lb2.y, targetX - this.lb2.x) * radians2;
                      var bulletAngle1 = (bulletAngle) * radians;
                      xSpeed = Math.cos(bulletAngle1) * 2;
                      ySpeed = Math.sin(bulletAngle1) * 2;
                      this.lb2.setData("hasBall", false);
                      ballCarrier = null;
                }
              }
              if(ballPassed && ballCarrier == null && !intercepted){
                this.ball.x += xSpeed;
                this.ball.y += ySpeed;
                if(offensiveTeam == 2){
                  //interception...
                  if(Math.abs(this.ball.x - this.qb.x) < 40 && Math.abs(this.ball.y - this.qb.y) < 40){
                    if(Math.abs(target.x - this.qb.x) < 40 && Math.abs(target.y - this.qb.y) < 40){
                      this.randomNum = Math.random();
                      if(this.randomNum < 0.25){
                        intercepted = true;
                        this.interception();
                      }
                      if(this.randomNum >= 0.25){
                        ballPassed = false;
                        this.goodD();
                      }
                    }
                  }
                  //if(this.ball.y < targetY + 50){
                    //this.incompletePass();
                  //}
                  //completion...
                  if(Math.abs(this.ball.x - targetX) < 40 && Math.abs(this.ball.y - targetY) < 40){
                    if(Math.abs(target.x - targetX) < 40 && Math.abs(target.y - targetY) < 40){
                      target.setData("hasBall", true);
                      ballCarrier = target;
                      this.sound.play('soundCatch');
                    }
                  }
                }
              }//end ballPassed
  
              if(!tackled){
                if(this.lb2.getData("hasBall") || this.ss.getData("hasBall") || this.fs.getData("hasBall") || this.db1.getData("hasBall") || this.db2.getData("hasBall")){
                  this.ball.x = ballCarrier.x;this.ball.y = ballCarrier.y;
                }
                if((this.keyW.isDown || mobileBoost) && speedBoost > 0){
                  if(this.qb.getData("speed") < this.qb.getData("speedOriginal") + 0.6){this.qb.setData("speed",this.qb.getData("speed")+0.1)}
                  //this.qb.setData("speed",this.qb.getData("speedOriginal") + 0.6);
                  speedBoost -= 0.5;
                  this.speedBar.setScale(1, speedBoost/100);
              }else{
                if(this.qb.getData("speed") < this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") + 0.01);}
                if(this.qb.getData("speed") > this.qb.getData("speedOriginal")){this.qb.setData("speed",this.qb.getData("speed") - 0.1);}
              }
              if((this.keySpace.isDown || mobileBlast) && canBlast){this.qb.blast();canBlast = false;}if(!this.keySpace.isDown && !mobileBlast){canBlast = true;}
                  if(this.keyUp.isDown){this.qb.y -= this.qb.getData("speed");}if(this.keyDown.isDown){this.qb.y += this.qb.getData("speed");}
                  if(this.keyLeft.isDown){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(this.keyRight.isDown){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
                  if(this.ball.y > 360 && this.ball.y > yardlinePixel){this.container.y = -this.ball.y + 120;}if(this.ball.y > 1080){this.container.y = -960;}
                  //mobile controls
            if(mobileUp){this.qb.y -= this.qb.getData("speed");}if(mobileDown){this.qb.y += this.qb.getData("speed");}
            if(mobileLeft){this.qb.x -= this.qb.getData("speed");this.circle.rotation -= 0.1;}if(mobileRight){this.qb.x += this.qb.getData("speed");this.circle.rotation += 0.1;}
              }
            }//end !fieldGoal
          }//end ballsnapped
        }//end offensiveTeam == 2
        
      }//end   if(!kickOff && !fieldGoal){
    }

    td(){
      //start Poki
      happyTimeTD();
      //end Poki
      //yardline pixel changes after stats are recorded
      yardlinePixel = 120;
      if(offensiveTeam == 1){
        if(!passPlay){
          statsRushYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
        if(passPlay){
          statsPassYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
      }
      statsTouchdowns += 1;
      this.statsTouchdownsNum.setText(statsTouchdowns);
      this.statsRushYardsNum.setText(statsRushYards);
      this.statsPassYardsNum.setText(statsPassYards);
      statsTotalYards = statsRushYards + statsPassYards;
      this.statsTotalYardsNum.setText(statsTotalYards);
      //
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      gameStop();
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      scoreTeam1 += 6;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      timeStopped = true;
      down = 1;
      yardlinePixel = 156;
      this.ball.y = yardlinePixel;
      this.ball.x = 320;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      //this.textDown.setText(down);
      this.huddleUp();
      openTouchdownMC = true;
      touchdown = true;
      this.sound.play('soundCrowdCheer');
      this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
    }

    td2(){
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      gameStop();
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      scoreTeam2 += 6;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      timeStopped = true;
      down = 1;
      yardlinePixel = 1284;
      this.ball.y = yardlinePixel;
      this.ball.x = 320;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      //this.textDown.setText(down);
      this.huddleUp();
      openTouchdownMC2 = true;
      touchdown = true;
      this.sound.play('soundCrowdCheer');
    }

    conversionGood(){
      //start Poki
      happyTimeFG();
      //end Poki
      //yardline pixel changes after stats are recorded
      yardlinePixel = 120;
      if(offensiveTeam == 1){
        if(!passPlay){
          statsRushYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
        if(passPlay){
          statsPassYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
      }
      this.statsRushYardsNum.setText(statsRushYards);
      this.statsPassYardsNum.setText(statsPassYards);
      statsTotalYards = statsRushYards + statsPassYards;
      this.statsTotalYardsNum.setText(statsTotalYards);
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      gameStop();
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      scoreTeam1 += 2;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      timeStopped = true;
      down = 0;
      yardlinePixel = 900;
      this.ball.y = yardlinePixel;
      this.ball.x = 320;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      //this.textDown.setText(down);
      this.huddleUp();
      openConversionGoodMC = true;
      setKickoff = true;
      this.setUpKickoff();
      kickBad = false;
      kickGood = false;
      this.sound.play('soundCrowdCheer');
    }

    conversionNoGood(){
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      //scoreTeam1 += 2;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      timeStopped = true;
      down = 0;
      yardlinePixel = 900;
      this.ball.y = yardlinePixel;
      this.ball.x = 320;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      //this.textDown.setText(down);
      this.huddleUp();
      openConversionNoGoodMC = true;
      setKickoff = true;
      this.setUpKickoff();
      kickBad = false;
      kickGood = false;
      //this.sound.play('soundCrowdCheer');
    }

    justTackled(){
      yardlinePixel = this.ball.y;
      if(offensiveTeam == 1){
        if(!passPlay){
          statsRushYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
        if(passPlay){
          statsPassYards += Math.ceil((statsYardlineStart - yardlinePixel)/12);
        }
      }
      this.statsRushYardsNum.setText(statsRushYards);
      this.statsPassYardsNum.setText(statsPassYards);
      statsTotalYards = statsRushYards + statsPassYards;
      this.statsTotalYardsNum.setText(statsTotalYards);
      //poki
      gameStop();
      //end poki
      if(goingFor2){
        this.conversionNoGood();
      }else{
        ballFlipping = false;
        this.ball.anims.pause(this.ball.anims.currentAnim.frames[0]);
        ballPassed = false;
        ballSnapped = false;
        goingFor2 = false;
        kickOff = false;
        kickOffKicked = false;
        kickOffStarted = false;
        inPlay = false;
        intercepted = false;
        //mobile..
        mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
        motion = false;
        motionStarted = false;
        passPlay = false;
        playSelected = false;
        shotgun = false;
        speedBoost = 100 - (difficulty*12.5);
        this.speedBar.setScale(1,speedBoost/100);
        tackled = true;
        timeStopped = true;
        touchdown = false;
        down += 1;
        //yardlinePixel = this.ball.y;
        this.ball.x = 320;
        yardline = Math.round((this.ball.y - 120)/12);
        this.lineOfScrimmage.y = yardlinePixel;
        if(yardline > 50){
          yardline = 100 - yardline;
        }
        if(offensiveTeam == 1 && this.ball.y >= 1320){
          safety2 = true;this.safety2();
        }
        if(offensiveTeam == 2 && this.ball.y <= 120){
          safety = true;this.safety();
        }
        if(offensiveTeam == 1 && !safety2){
          openOffensivePlaybook = true;
          openOffensiveFormations = true;
          openDefensivePlaybook = false;
          this.textYardline.setText("Ball on the " + yardline);
          if(this.ball.y <= this.firstDownLine.y){
            down = 1;
          }
          if(down == 1){
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.firstDownLine.y = this.lineOfScrimmage.y - 120;
          }
          if(down < 5){
            openOffensivePlaybook = true;
            openDefensivePlaybook = false;
            this.container.y = 1080 - this.ball.y - 720;if(yardlinePixel <  360){ this.container.y = 0;}
            yardsToGo = Math.ceil((yardlinePixel - this.firstDownLine.y)/12);
            this.textYardsToGo.setText(yardsToGo + "yds to go");
          }else if(down >= 5){
            openOffensivePlaybook = false;
            openDefensivePlaybook = true; 
            offensiveTeam = 2;
            defensiveTeam = 1;
            down = 1;
            this.firstDownLine.y = this.lineOfScrimmage.y + 120;
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.container.y = -this.ball.y + 120;
            if(yardlinePixel > 1080){this.container.y = -960;}
          }
          this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
          //this.textDown.setText(down);
          this.huddleUp();
            if(yardsToGo > (yardlinePixel - 120)/12){
              if(down == 1){this.textYardsToGo.setText("1st & Goal");}if(down == 2){this.textYardsToGo.setText("2nd & Goal");}
              if(down == 3){this.textYardsToGo.setText("3rd & Goal");}if(down == 4){this.textYardsToGo.setText("4th & Goal");}
            }else{
              if(down == 1){this.textYardsToGo.setText("1st & " + yardsToGo);}if(down == 2){this.textYardsToGo.setText("2nd & " + yardsToGo);}
              if(down == 3){this.textYardsToGo.setText("3rd & " + yardsToGo);}if(down == 4){this.textYardsToGo.setText("4th & " + yardsToGo);}
            }
        }else if(offensiveTeam == 2 && !safety){
          openOffensivePlaybook = false;
          openDefensivePlaybook = true;
          this.textYardline.setText("Ball on the " + yardline);
          if(this.ball.y >= this.firstDownLine.y){
            down = 1;
          }
          if(down == 1){
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.firstDownLine.y = this.lineOfScrimmage.y + 120;
          }
          if(down < 5){
            openOffensivePlaybook = false;
            openDefensivePlaybook = true;
            this.container.y = -this.ball.y + 120;if(yardlinePixel <  360){ this.container.y = 0;}
            if(yardlinePixel > 1080){this.container.y = -960;}
            yardsToGo = Math.ceil((this.firstDownLine.y - yardlinePixel)/12);
            this.textYardsToGo.setText(yardsToGo + "yds to go");
          }else if(down >= 5){
            openOffensivePlaybook = true;
            openOffensiveFormations = true;
            openDefensivePlaybook = false;
            offensiveTeam = 1;
            defensiveTeam = 2;
            down = 1;
            this.firstDownLine.y = this.lineOfScrimmage.y - 120;
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.container.y = 1080 - this.ball.y - 720;
            if(yardlinePixel <  360){ this.container.y = 0;}
            if(yardlinePixel > 1080){this.container.y = -960;}
          } 
          this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
          //this.textDown.setText(down);
          this.huddleUp();
          if(yardsToGo > (1320 - yardlinePixel)/12){
            if(down == 1){this.textYardsToGo.setText("1st & Goal");}if(down == 2){this.textYardsToGo.setText("2nd & Goal");}
            if(down == 3){this.textYardsToGo.setText("3rd & Goal");}if(down == 4){this.textYardsToGo.setText("4th & Goal");}
          }else{
            if(down == 1){this.textYardsToGo.setText("1st & " + yardsToGo);}if(down == 2){this.textYardsToGo.setText("2nd & " + yardsToGo);}
            if(down == 3){this.textYardsToGo.setText("3rd & " + yardsToGo);}if(down == 4){this.textYardsToGo.setText("4th & " + yardsToGo);}
          }
        }
      }
    }//end justTackled()

    safety(){
      //start Poki
      happyTimeInterception();
      //end Poki
      ballCarrier = null;
      openSafetyMC = true;
      this.ball.y = 540;
      this.ball.x = 320;
      yardlinePixel = this.ball.y;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      this.container.y = -420;
      scoreTeam1 += 2;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      down = 0;
      //this.textDown.setText(down);
      this.setUpKickoff2();
      this.huddleUp();
      this.sound.play('soundCrowdCheer');
      mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
    }

    safety2(){
      ballCarrier = null;
      openSafetyMC2 = true;
      this.ball.y = 900;
      this.ball.x = 320;
      yardlinePixel = this.ball.y;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      this.container.y = -540;
      scoreTeam2 += 2;
      this.textScoreTeam1.setText(scoreTeam1);
      this.textScoreTeam2.setText(scoreTeam2);
      down = 0;
      //this.textDown.setText(down);
      this.setUpKickoff();
      this.huddleUp();
      this.sound.play('soundCrowdCheer');
      mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
    }

    incompletePass(){
      if(goingFor2){
        this.conversionNoGood();
      }else{
        ballFlipping = false;
        ballPassed = false;
        ballSnapped = false;
        //poki
        gameStop();
        //end poki
        goingFor2 = false;
        kickOff = false;
        kickOffKicked = false;
        kickOffStarted = false;
        inPlay = false;
        //mobile..
        mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
        motion = false;
        motionStarted = false;
        passPlay = false;
        playSelected = false;
        shotgun = false;
        speedBoost = 100 - (difficulty*12.5);
        this.speedBar.setScale(1,speedBoost/100);
        tackled = true;
        timeStopped = true;
        touchdown = false;
        down += 1;
        //yardlinePixel = this.ball.y;
        this.ball.x = 320;
        //yardline = Math.round((this.ball.y - 120)/12);
        this.lineOfScrimmage.y = yardlinePixel;
        this.ball.y = yardlinePixel;
        if(yardline > 50){
          yardline = 100 - yardline;
        }
        if(offensiveTeam == 1){
          openOffensivePlaybook = true;
          openOffensiveFormations = true;
          openDefensivePlaybook = false;
          this.textYardline.setText("Ball on the " + yardline);
          if(down < 5){
            openOffensivePlaybook = true;
            openDefensivePlaybook = false;
            this.container.y = 1080 - yardlinePixel - 720;if(yardlinePixel <  360){ this.container.y = 0;}
            yardsToGo = Math.ceil((yardlinePixel - this.firstDownLine.y)/12);
            this.textYardsToGo.setText(yardsToGo + "yds to go");
          }else if(down >= 5){
            openOffensivePlaybook = false;
            openDefensivePlaybook = true; 
            offensiveTeam = 2;
            defensiveTeam = 1;
            down = 1;
            this.firstDownLine.y = this.lineOfScrimmage.y + 120;
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.container.y = -yardlinePixel + 120;
          }
        }else if(offensiveTeam == 2){
          openOffensivePlaybook = false;
          openDefensivePlaybook = true;
          this.textYardline.setText("Ball on the " + yardline);
          if(down < 5){
            openOffensivePlaybook = false;
            openDefensivePlaybook = true;
            this.container.y = -yardlinePixel + 120;if(yardlinePixel <  120){ this.container.y = 0;}
            yardsToGo = Math.ceil((this.firstDownLine.y - yardlinePixel)/12);
            this.textYardsToGo.setText(yardsToGo + "yds to go");
          }else if(down >= 5){
            openOffensivePlaybook = true;
            openOffensiveFormations = true;
            openDefensivePlaybook = false;
            offensiveTeam = 1;
            defensiveTeam = 2;
            down = 1;
            this.firstDownLine.y = this.lineOfScrimmage.y - 120;
            yardsToGo = 10;
            this.textYardsToGo.setText(yardsToGo + "yds to go");
            this.container.y = 1080 - yardlinePixel - 720;
          } 
        }
        this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
        //this.textDown.setText(down);
        intercepted = false;
        this.huddleUp();
      }
    }

    goodD(){
      //start Poki
      happyTimeGoodD();
      //end Poki
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      gameStop();
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      tackled = true;
      timeStopped = true;
      touchdown = false;
      down += 1;
      //yardlinePixel = this.ball.y;
      this.ball.y = yardlinePixel;
      this.ball.x = 320;
      //yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      if(yardline > 50){
        yardline = 100 - yardline;
      }
      if(offensiveTeam == 1){
        openOffensivePlaybook = true;
        openOffensiveFormations = true;
        openDefensivePlaybook = false;
        this.textYardline.setText("Ball on the " + yardline);
        if(down < 5){
          openOffensivePlaybook = true;
          openDefensivePlaybook = false;
          this.container.y = 1080 - yardlinePixel - 720;if(yardlinePixel <  360){ this.container.y = 0;}
          yardsToGo = Math.ceil((yardlinePixel - this.firstDownLine.y)/12);
          this.textYardsToGo.setText(yardsToGo + "yds to go");
        }else if(down >= 5){
          openOffensivePlaybook = false;
          openDefensivePlaybook = true; 
          offensiveTeam = 2;
          defensiveTeam = 1;
          down = 1;
          this.firstDownLine.y = this.lineOfScrimmage.y + 120;
          yardsToGo = 10;
          this.textYardsToGo.setText(yardsToGo + "yds to go");
          this.container.y = -yardlinePixel + 120;
        }
      }else if(offensiveTeam == 2){
        openOffensivePlaybook = false;
        openDefensivePlaybook = true;
        this.textYardline.setText("Ball on the " + yardline);
        if(down < 5){
          openOffensivePlaybook = false;
          openDefensivePlaybook = true;
          this.container.y = -yardlinePixel + 120;if(yardlinePixel <  120){ this.container.y = 0;}
          yardsToGo = Math.ceil((this.firstDownLine.y - yardlinePixel)/12);
          this.textYardsToGo.setText(yardsToGo + "yds to go");
        }else if(down >= 5){
          openOffensivePlaybook = true;
          openOffensiveFormations = true;
          openDefensivePlaybook = false;
          offensiveTeam = 1;
          defensiveTeam = 2;
          down = 1;
          this.firstDownLine.y = this.lineOfScrimmage.y - 120;
          yardsToGo = 10;
          this.textYardsToGo.setText(yardsToGo + "yds to go");
          this.container.y = 1080 - yardlinePixel - 720;
        } 
      }
      openGoodDMC = true;
      this.sound.play('soundCrowdCheer');
      //this.textDown.setText(down);
      this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
      intercepted = false;
      this.huddleUp();
    }//end goodD

    interception(){
      //start Poki
      happyTimeInterception();
      //end Poki
      statsInterceptions += 1;
      this.statsInterceptions.setText(statsInterceptions);
      ballFlipping = false;
      ballPassed = false;
      ballSnapped = false;
      //poki
      gameStop();
      //end poki
      goingFor2 = false;
      kickOff = false;
      kickOffKicked = false;
      kickOffStarted = false;
      inPlay = false;
      //mobile..
      mobileBlast = false;
      mobileBoost = false;
      mobileDown = false;
      mobileLeft = false;
      mobileRight = false;
      mobileUp = false;
      mobileSnap = false;
      mobileSpin = false;
      mobilePassA = false;
      mobilePassS = false;
      mobilePassD = false;
      motion = false;
      motionStarted = false;
      passPlay = false;
      playSelected = false;
      shotgun = false;
      speedBoost = 100 - (difficulty*12.5);
      this.speedBar.setScale(1,speedBoost/100);
      tackled = true;
      timeStopped = true;
      touchdown = false;
      down = 1;
      if(this.ball.y < 1320){yardlinePixel = this.ball.y;}
      if(this.ball.y >= 1320){yardlinePixel = 1080;this.ball.y = 1080;}
      this.ball.x = 320;
      yardline = Math.round((this.ball.y - 120)/12);
      this.lineOfScrimmage.y = yardlinePixel;
      if(yardline > 50){
        yardline = 100 - yardline;
      }
      if(offensiveTeam == 2){
        openOffensivePlaybook = false;
        openDefensivePlaybook = true;
        this.textYardline.setText("Ball on the " + yardline);
          openOffensivePlaybook = true;
          //openOffensiveFormations = true;
          openDefensivePlaybook = false;
          openInterceptionMC = true;
          offensiveTeam = 1;
          defensiveTeam = 2;
          down = 1;
          this.firstDownLine.y = this.lineOfScrimmage.y - 120;
          yardsToGo = 10;
          this.textYardsToGo.setText(yardsToGo + "yds to go");
          this.container.y = 1080 - yardlinePixel - 720;
      }
      this.spaceBarToSnap.visible = true;
          //mobile..
          if(mobile){
            this.mobileSnap.visible = true;
          }
      //this.textDown.setText(down);
      this.sound.play('soundCrowdCheer');
      intercepted = false;
      this.huddleUp();
    }//end interception

    setUpKickoff(){
      if(setKickoff){
        ballFlipping = false;
        ballPassed = false;
        ballSnapped = false;
        //poki
        
        //end poki
        goingFor2 = false;
        defensiveTeam = 1;
        kickOff = false;
        kickOffKicked = false;
        kickOffStarted = false;
        kickReturnTeam = 2;
        inPlay = false;
        //mobile..
        mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
        motion = false;
        motionStarted = false;
        offensiveTeam = 2;
        passPlay = false;
        playSelected = false;
        shotgun = false;
        speedBoost = 100 - (difficulty*12.5);
        this.speedBar.setScale(1,speedBoost/100);
        tackled = false;
        timeStopped = true;
        touchdown = false;
        down = 1;
        yardlinePixel = 900;
        this.ball.y = yardlinePixel;
        this.ball.x = 320;
        yardline = Math.round((this.ball.y - 120)/12);
        this.lineOfScrimmage.y = yardlinePixel;
        if(yardline > 50){
          yardline = 100 - yardline;
        }
      }
      this.firstDownLine.y = 1500;
      this.container.y = 1080 - yardlinePixel - 720;
      //this.textDown.setText(down);
      setKickoff = false;
    }

    setUpKickoff2(){
      if(setKickoff){
        ballFlipping = false;
        ballPassed = false;
        ballSnapped = false;
        //poki
        
        //end poki
        goingFor2 = false;
        defensiveTeam = 2;
        kickOff = false;
        kickOffKicked = false;
        kickOffStarted = false;
        kickReturnTeam = 1;
        inPlay = false;
        //mobile..
        mobileBlast = false;
        mobileBoost = false;
        mobileDown = false;
        mobileLeft = false;
        mobileRight = false;
        mobileUp = false;
        mobileSnap = false;
        mobileSpin = false;
        mobilePassA = false;
        mobilePassS = false;
        mobilePassD = false;
        motion = false;
        motionStarted = false;
        offensiveTeam = 1;
        passPlay = false;
        playSelected = false;
        shotgun = false;
        speedBoost = 100 - (difficulty*12.5);
        this.speedBar.setScale(1,speedBoost/100);
        tackled = false;
        timeStopped = true;
        touchdown = false;
        down = 0;
        yardlinePixel = 540;
        this.ball.y = yardlinePixel;
        this.ball.x = 320;
        yardline = Math.round((this.ball.y - 120)/12);
        this.lineOfScrimmage.y = yardlinePixel;
        if(yardline > 50){
          yardline = 100 - yardline;
        }
      }
      //this.container.y = 1080 - yardlinePixel - 720;
      this.container.y = -420;
      //this.textDown.setText(down);
      setKickoff = false;
    }

    huddleUp(){
      var huddleY = yardlinePixel + 84;
      var huddleY2 = yardlinePixel - 84;
      ballCarrier = null;
      tackled = false;
      //Team 1
      //primaryTargets:
      this.qb.setData("primaryTarget",false);this.tb.setData("primaryTarget",false);this.wr1.setData("primaryTarget",false);this.wr2.setData("primaryTarget",false);this.wr3.setData("primaryTarget",false);
      this.qb.huddle();this.fb.huddle();this.tb.huddle();this.wr1.huddle();this.wr2.huddle();this.wr3.huddle();this.lt.huddle();this.lg.huddle();this.c.huddle();this.rg.huddle();this.rt.huddle();
      this.qb.setPosition(320,huddleY+30);this.fb.setPosition(320,huddleY+10);this.tb.setPosition(340,huddleY+10);this.wr1.setPosition(300,huddleY+10);this.wr2.setPosition(360,huddleY+10);
      this.wr3.setPosition(280,huddleY+10);
      this.lt.setPosition(280,huddleY-10);this.lg.setPosition(300,huddleY-10);this.c.setPosition(320,huddleY-10);this.rg.setPosition(340,huddleY-10);this.rt.setPosition(360,huddleY-10);
      //this.qb.setData("index",0);this.fb.setData("index",0);this.tb.setData("index",0);
      //this.wr1.setData("index",0);this.wr2.setData("index",0);this.wr3.setData("index",0);
      //this.lt.setData("index",0);this.lg.setData("index",0);this.c.setData("index",0);this.rg.setData("index",0);this.rt.setData("index",0);
      //Team2
      //primaryTargets:
      this.lb2.setData("primaryTarget",false);this.ss.setData("primaryTarget",false);this.db1.setData("primaryTarget",false);this.db2.setData("primaryTarget",false);this.fs.setData("primaryTarget",false);
      this.db1.huddle();this.db2.huddle();this.ss.huddle();this.fs.huddle();this.lb1.huddle();this.lb2.huddle();this.lb3.huddle();this.dl1.huddle();this.dl2.huddle();this.dl3.huddle();this.dl4.huddle();
      this.db1.setPosition(320,huddleY2-10);this.db2.setPosition(300,huddleY2-10);this.ss.setPosition(340,huddleY2-10);this.fs.setPosition(280,huddleY2-10);this.lb1.setPosition(360,huddleY2-10);
      this.lb2.setPosition(320,huddleY2-30);
      this.lb3.setPosition(280,huddleY2+10);this.dl1.setPosition(300,huddleY2+10);this.dl2.setPosition(320,huddleY2+10);this.dl3.setPosition(340,huddleY2+10);this.dl4.setPosition(360,huddleY2+10);
      //this.db1.setData("index",0);this.db2.setData("index",0);this.ss.setData("index",0);this.fs.setData("index",0);
      //this.lb1.setData("index",0);this.lb2.setData("index",0);this.lb3.setData("index",0);
      //this.dl1.setData("index",0);this.dl2.setData("index",0);this.dl3.setData("index",0);this.dl4.setData("index",0);
    }


      setTeam1Play(){
        var los = yardlinePixel;
        var set = los + 10;
        if(team1Formation == "kickReturn"){
          this.qb.setPosition(320,1200);this.fb.setPosition(200,840);this.tb.setPosition(320,1320);this.wr1.setPosition(150,780);this.wr2.setPosition(490,780);this.wr3.setPosition(440,840);
          this.lt.setPosition(100,660);this.lg.setPosition(200,660);this.c.setPosition(320,660);this.rg.setPosition(440,660);this.rt.setPosition(540,660);
          team1PlaySet = true;
        }
        if(team1Formation == "splitLt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set + 10);this.wr2.setPosition(245,set);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(280,set + 60);this.tb.setPosition(360,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "splitRt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set + 10);this.wr2.setPosition(395,set);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(360,set + 60);this.tb.setPosition(280,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "iRt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(395,set);this.wr3.setPosition(540,set + 10);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(320,set + 50);this.tb.setPosition(320,set + 75);
          team1PlaySet = true;
        }
        if(team1Formation == "iLt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(245,set);this.wr3.setPosition(540,set + 10);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(320,set + 50);this.tb.setPosition(320,set + 75);
          team1PlaySet = true;
        }
        if(team1Formation == "shotgunTripsLt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(200,set);this.wr3.setPosition(540,set + 10);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(160,set + 10);this.tb.setPosition(360,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "shotgunLt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(190,set + 10);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(420,set + 20);this.tb.setPosition(280,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "shotgunRt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(420,set + 20);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(190,set + 10);this.tb.setPosition(360,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "shotgunZback"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(420,set + 20);this.wr3.setPosition(360,set + 60);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(190,set + 10);this.tb.setPosition(540,set);
          team1PlaySet = true;
        }
        if(team1Formation == "bunchRt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(460,set);this.wr3.setPosition(500,set + 10);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(420,set + 10);this.tb.setPosition(280,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "bunchLt"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(140,set + 10);this.wr2.setPosition(180,set);this.wr3.setPosition(540,set + 10);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(220,set + 10);this.tb.setPosition(360,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "aceRt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(450,set + 10);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(190,set + 10);this.tb.setPosition(320,set + 60);
          team1PlaySet = true;
        }
        if(team1Formation == "aceRtSwitch"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(450,set + 10);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(320,set + 60);this.tb.setPosition(210,set + 20);
          team1PlaySet = true;
        }
        if(team1Formation == "emptyRt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(470,set + 20);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(240,set + 20);this.tb.setPosition(400,set + 20);
          team1PlaySet = true;
        }
        if(team1Formation == "emptyLtInvert"){ //tb Y switch spots
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(400,set + 20);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(210,set + 20);this.tb.setPosition(160,set + 20);
          team1PlaySet = true;
        }
        if(team1Formation == "emptyLt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(170,set + 20);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(240,set + 20);this.tb.setPosition(400,set + 20);
          team1PlaySet = true;
        }
        if(team1Formation == "emptyLtFlip"){ //fb flip w/y tb flip w/z
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set);this.wr2.setPosition(240,set + 20);this.wr3.setPosition(400,set);
          this.qb.setPosition(320,set + 60);this.fb.setPosition(170,set + 20);this.tb.setPosition(540,set + 20);
          team1PlaySet = true;
        }
        //redZone...
        if(team1Formation == "splitOptionAngle"){ //Z reciever in backfield on left
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(100,set + 10);this.wr2.setPosition(450,set);this.wr3.setPosition(280,set + 60);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(360,set + 60);this.tb.setPosition(540,set);
          team1PlaySet = true;
        }
        if(team1Formation == "aceTbSwing"){ //Y reciever in backfield on left
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(450,set + 10);this.wr2.setPosition(320,set + 60);this.wr3.setPosition(540,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(100,set + 10);this.tb.setPosition(160,set);
          team1PlaySet = true;
        }
        if(team1Formation == "bunchLtBubble"){
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(140,set + 10);this.wr2.setPosition(220,set + 10);this.wr3.setPosition(540,set + 10);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(180,set);this.tb.setPosition(320,set + 60);
          team1PlaySet = true;
        }
        //Special
        if(team1Formation == "victoryRt"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(200,set);this.wr2.setPosition(395,set + 10);this.wr3.setPosition(420,set);
          this.qb.setPosition(320,set + 20);this.fb.setPosition(250,set + 10);this.tb.setPosition(320,set + 60);
          team1PlaySet = true;
        }

        if(team1Formation == "fieldGoal"){ //fb in slot
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(220,set+20);this.wr2.setPosition(395,set);this.wr3.setPosition(420,set+20);
          this.qb.setPosition(320,set + 72);this.fb.setPosition(245,set);this.tb.setPosition(248,set + 144);
          team1PlaySet = true;
        }
        if(team1Play == "sweepLt" || team1Play == "powerRt" || team1Play == "counterLt" || team1Play == "crackReachLt" || team1Play == "zoneRt"
         || team1Play == "treyLt" || team1Play == "tossLt" || team1Play == "diveRt" || team1Play == "isoRt" || team1Play == "trapRt" 
         || team1Play == "blastLt"|| team1Play == "crossBlockRt"|| team1Play == "reverseRt"){
          this.tb.setData("primaryTarget",true);
        }
        if((offensiveTeam == 1 && passPlay) || team1Play == "wildcatSprintRt" || team1Play == "motionSweepLt"){
          this.qb.setData("primaryTarget",true);
        }
        if(passPlay && offensiveTeam == 1){
          this.targetA.visible = true;this.targetS.visible = true;this.targetD.visible = true;
          this.targetA.x = this.wr1.getData("startX") + targetLocation[0][0];this.targetA.y = this.wr1.getData("startY") + targetLocation[0][1];
          this.targetS.x = this.wr2.getData("startX") + targetLocation[1][0];this.targetS.y = this.wr2.getData("startY") + targetLocation[1][1];
          this.targetD.x = this.wr3.getData("startX") + targetLocation[2][0];this.targetD.y = this.wr3.getData("startY") + targetLocation[2][1];
        }else{
          this.targetA.visible = false;this.targetS.visible = false;this.targetD.visible = false;
        }
        //KickOff
        if(team1Formation == "kickOff"){
          this.lt.setPosition(220,set);this.lg.setPosition(170,set);this.rg.setPosition(470,set);this.rt.setPosition(520,set);
          this.c.setPosition(420,set);this.qb.setPosition(370,set + 10);this.fb.setPosition(270,set);
          this.wr1.setPosition(50,set);this.tb.setPosition(320,set + 84);this.wr2.setPosition(120,set);this.wr3.setPosition(570,set);
          team1PlaySet = true;
        }
        //KickOff Onside
        if(team1Formation == "kickOffOnside"){
          this.lt.setPosition(350,set);this.lg.setPosition(380,set);this.rg.setPosition(410,set);this.rt.setPosition(440,set);
          this.c.setPosition(470,set);this.qb.setPosition(500,set + 10);this.fb.setPosition(530,set);
          this.wr1.setPosition(560,set);this.tb.setPosition(320,set + 84);this.wr2.setPosition(590,set);this.wr3.setPosition(250,set);
          team1PlaySet = true;
        }
        //Defense
        if(team1Formation == "43"){
          this.lt.setPosition(265,set);this.lg.setPosition(295,set);this.rg.setPosition(345,set);this.rt.setPosition(375,set);
          this.c.setPosition(210,set + 50);this.qb.setPosition(320,set + 60);this.fb.setPosition(450,set + 50);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(180,set + 84);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        if(team1Formation == "34"){
          this.lt.setPosition(270,set);this.lg.setPosition(320,set);this.rg.setPosition(370,set);this.rt.setPosition(460,set);
          this.c.setPosition(200,set);this.qb.setPosition(280,set + 60);this.fb.setPosition(360,set + 50);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(180,set + 84);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        if(team1Formation == "bear"){
          this.lt.setPosition(295,set);this.lg.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(400,set);
          this.c.setPosition(260,set);this.qb.setPosition(280,set + 60);this.fb.setPosition(360,set + 50);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(180,set + 84);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        if(team1Formation == "44Stack"){
          this.lt.setPosition(280,set);this.lg.setPosition(300,set);this.rg.setPosition(340,set);this.rt.setPosition(380,set);
          this.c.setPosition(300,set + 50);this.qb.setPosition(340,set + 60);this.fb.setPosition(420,set + 50);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(240,set + 50);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        if(team1Formation == "43Over"){
          this.lt.setPosition(265,set);this.lg.setPosition(310,set);this.rg.setPosition(350,set);this.rt.setPosition(375,set);
          this.c.setPosition(210,set + 50);this.qb.setPosition(320,set + 60);this.fb.setPosition(450,set + 50);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(180,set + 84);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        if(team1Formation == "62"){
          this.lt.setPosition(295,set);this.lg.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.c.setPosition(220,set);this.qb.setPosition(320,set + 60);this.fb.setPosition(420,set);
          this.wr1.setPosition(50,set + 120);this.tb.setPosition(180,set + 84);this.wr2.setPosition(320,set + 140);this.wr3.setPosition(590,set + 120);
          team1PlaySet = true;
        }
        //Adjust Defense formation according to Coverage...
        if(team1Play == "cov2"){
          this.wr1.setPosition(50,set + 48);this.tb.setPosition(160,set + 140);this.wr2.setPosition(480,set + 140);this.wr3.setPosition(590,set + 48);
        }
        if(team1Play == "cov4"){
          this.tb.setPosition(220,set + 140);this.wr2.setPosition(420,set + 140);
        }
        if(team1Play == "crash"){
          this.wr1.setPosition(50,set + 48);this.tb.setPosition(160,set + 140);this.wr2.setPosition(480,set + 140);this.wr3.setPosition(590,set + 48);
        }
        if(team1Formation == "fgBlock"){ //fieldgoal block
          this.lt.setPosition(270,set);this.lg.setPosition(295,set);this.c.setPosition(320,set);this.rg.setPosition(345,set);this.rt.setPosition(370,set);
          this.wr1.setPosition(220,set);this.wr2.setPosition(395,set);this.wr3.setPosition(420,set);
          this.qb.setPosition(320,set + 72);this.fb.setPosition(245,set);this.tb.setPosition(195,set);
          team1PlaySet = true;
        }
      }//end setTeam1Play()

      setTeam2Play(){
        var set2 = yardlinePixel - 10;
        if(team2Formation == "kickOff"){
          this.db1.setPosition(50,540);this.db2.setPosition(590,540);this.ss.setPosition(100,540);this.fs.setPosition(540,540);this.lb1.setPosition(150,540);this.lb2.setPosition(320,440);
          this.lb3.setPosition(200,540);this.dl1.setPosition(440,540);this.dl2.setPosition(250,540);this.dl3.setPosition(390,540);this.dl4.setPosition(490,540);
          team2PlaySet = true;
        }
        if(team2Formation == "kickReturn"){
          this.db1.setPosition(50,set2 - 110);this.db2.setPosition(590,set2 - 110);this.ss.setPosition(320,121);this.fs.setPosition(540,set2 - 210);this.lb1.setPosition(150,set2 - 210);this.lb2.setPosition(320,set2 - 110);
          this.lb3.setPosition(200,set2 - 110);this.dl1.setPosition(440,set2 - 110);this.dl2.setPosition(250,set2 - 310);this.dl3.setPosition(390,set2 - 310);this.dl4.setPosition(490,set2 - 110);
          team2PlaySet = true;
        }
        if(team2Formation == "kickReturnOnside"){
          this.db1.setPosition(250,set2 - 110);this.db2.setPosition(300,set2 - 110);this.ss.setPosition(480,set2 - 220);this.fs.setPosition(360,set2 - 110);this.lb1.setPosition(390,set2 - 110);this.lb2.setPosition(420,set2 - 110);
          this.lb3.setPosition(450,set2 - 110);this.dl1.setPosition(480,set2 - 110);this.dl2.setPosition(510,set2 - 110);this.dl3.setPosition(540,set2 - 110);this.dl4.setPosition(570,set2 - 110);
          team2PlaySet = true;
        }
        if(team2Formation == "43"){
          this.db1.setPosition(50,yardlinePixel-120);this.db2.setPosition(590,yardlinePixel-120);this.ss.setPosition(160,yardlinePixel-60);this.fs.setPosition(320,yardlinePixel-168);
          this.lb1.setPosition(240,yardlinePixel-60);this.lb2.setPosition(320,yardlinePixel-60);this.lb3.setPosition(420,yardlinePixel-60);
          this.dl1.setPosition(260,set2);this.dl2.setPosition(300,set2);this.dl3.setPosition(350,set2);this.dl4.setPosition(380,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "34"){
          this.db1.setPosition(50,yardlinePixel-120);this.db2.setPosition(590,yardlinePixel-120);this.ss.setPosition(160,yardlinePixel-60);this.fs.setPosition(320,yardlinePixel-168);
          this.lb1.setPosition(240,set2);this.lb2.setPosition(290,yardlinePixel-60);this.lb3.setPosition(350,yardlinePixel-60);
          this.dl1.setPosition(285,set2);this.dl2.setPosition(320,set2);this.dl3.setPosition(355,set2);this.dl4.setPosition(400,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "bear"){
          this.db1.setPosition(50,yardlinePixel-120);this.db2.setPosition(590,yardlinePixel-120);this.ss.setPosition(160,yardlinePixel-60);this.fs.setPosition(320,yardlinePixel-168);
          this.lb1.setPosition(240,set2);this.lb2.setPosition(290,yardlinePixel-40);this.lb3.setPosition(350,yardlinePixel-50);
          this.dl1.setPosition(300,set2);this.dl2.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(400,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "fgBlock"){
          this.db1.setPosition(260,set2);this.db2.setPosition(420,set2);this.ss.setPosition(240,set2);this.fs.setPosition(320,yardlinePixel-60);
          this.lb1.setPosition(280,set2);this.lb2.setPosition(380,set2);this.lb3.setPosition(400,set2);
          this.dl1.setPosition(300,set2);this.dl2.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(offensiveTeam == 1){
          if(team2Secondary == 1){
            this.db1.setPosition(50,yardlinePixel-120);this.db2.setPosition(590,yardlinePixel-120);this.ss.setPosition(160,yardlinePixel-60);this.fs.setPosition(320,yardlinePixel-168);
          }
          if(team2Secondary == 2){
            this.db1.setPosition(45,yardlinePixel-60);this.db2.setPosition(595,yardlinePixel-60);this.ss.setPosition(200,yardlinePixel-144);this.fs.setPosition(440,yardlinePixel-144);
          }
          if(team2Secondary == 3){
            this.db1.setPosition(50,yardlinePixel-120);this.db2.setPosition(590,yardlinePixel-120);this.ss.setPosition(160,yardlinePixel-60);this.fs.setPosition(320,yardlinePixel-168);
          }
        }
        //team2Offense
        if(team2Formation == "splitLt"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(380,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(350,yardlinePixel-50);this.ss.setPosition(290,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "splitRt"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(290,yardlinePixel-50);this.ss.setPosition(350,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "splitLtFlip"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(380,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(290,yardlinePixel-50);this.ss.setPosition(350,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "splitRtFlip"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(350,yardlinePixel-50);this.ss.setPosition(290,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "iLt"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(380,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(320,yardlinePixel-54);this.ss.setPosition(320,yardlinePixel-84);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "iRt"){
          this.db1.setPosition(60,set2);this.db2.setPosition(580,set2-10);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(320,yardlinePixel-54);this.ss.setPosition(320,yardlinePixel-84);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "bunchLt"){
          this.db1.setPosition(60,set2);this.db2.setPosition(460,set2-15);this.fs.setPosition(430,set2);
          this.lb2.setPosition(320,yardlinePixel-50);this.lb3.setPosition(400,set2-15);this.ss.setPosition(290,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "bunchRt"){
          this.db1.setPosition(180,set2 - 15);this.db2.setPosition(580,set2-10);this.fs.setPosition(210,set2);
          this.lb2.setPosition(320,yardlinePixel-50);this.lb3.setPosition(260,set2 - 15);this.ss.setPosition(350,yardlinePixel-50);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "splitLtX"){
          this.db1.setPosition(290,yardlinePixel-50);this.db2.setPosition(580,set2-10);this.fs.setPosition(380,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(350,yardlinePixel-50);this.ss.setPosition(60,set2);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "splitRtX"){
          this.db1.setPosition(60,set2);this.db2.setPosition(350,yardlinePixel-50);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(290,yardlinePixel-50);this.ss.setPosition(580,set2-10);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "stackRtX"){
          this.db1.setPosition(80,set2);this.db2.setPosition(350,yardlinePixel-50);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(290,yardlinePixel-50);this.ss.setPosition(80,set2-30);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "stackLtX"){
          this.db1.setPosition(580,set2);this.db2.setPosition(350,yardlinePixel-50);this.fs.setPosition(260,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(290,yardlinePixel-50);this.ss.setPosition(580,set2-30);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "aceStackLtX"){
          this.db1.setPosition(580,set2);this.db2.setPosition(160,yardlinePixel-20);this.fs.setPosition(70,set2);
          this.lb2.setPosition(320,set2 - 20);this.lb3.setPosition(320,yardlinePixel-60);this.ss.setPosition(580,set2-30);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Formation == "fieldGoal"){
          this.db1.setPosition(250,set2 - 20);this.db2.setPosition(390,set2-20);this.fs.setPosition(380,set2);
          this.lb2.setPosition(330,set2 - 120);this.lb3.setPosition(260,set2);this.ss.setPosition(310,yardlinePixel-84);
          this.dl1.setPosition(280,set2);this.dl2.setPosition(300,set2);this.lb1.setPosition(320,set2);this.dl3.setPosition(340,set2);this.dl4.setPosition(360,set2);
          team2PlaySet = true;
        }
        if(team2Play == "sweepLt" || team2Play == "sweepRt" || team2Play == "powerLt" || team2Play == "powerRt" || team2Play == "isoLt" || team2Play == "isoRt"){
          this.ss.setData("primaryTarget",true);
        }
        
      }

  }

