class SceneGameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
    preload() {
        this.load.image('buttonStart1', 'content/buttonStart1.png');
        this.load.image('buttonStart2', 'content/buttonStart2.png');
        this.load.image('gameOverMC','content/gameOverMC.png');
 
        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundButton', 'content/beep.mp3');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

        this.counterAlpha = 0;
    }
    create() {
        this.gameOverMC = this.add.image(0,0,'gameOverMC');
        this.gameOverMC.setOrigin(0.0,0.0);

        this.textScoreTeam1 = this.add.text(400, 175, scoreTeam1, { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' });
        this.textScoreTeam1.setOrigin(0.5, 0.0);
        this.textScoreTeam2 = this.add.text(660, 175, scoreTeam2, { fontFamily: 'Arial', fontSize: 48, color: '#ffffff' });
        this.textScoreTeam2.setOrigin(0.5, 0.0);


        this.buttonStart = this.add.sprite(533,250,"buttonStart1");
        this.buttonStart.setOrigin(0.5,0);
          this.buttonStart.setInteractive();
          this.buttonStart.on("pointerover", function() {
            this.buttonStart.setTexture("buttonStart2"); // set the button texture to sprbuttonStartHover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonStart.on("pointerout", function() {
            this.setTexture("buttonStart1");
          });
          this.buttonStart.on("pointerdown", function() {
            this.buttonStart.setTexture("buttonStart2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonStart.on("pointerup", function() {
            this.buttonStart.setTexture("buttonStart1");
            //button clicked...
            document.location.reload();
          }, this);

          //this.buttonStart.visible = false;
          this.buttonStart.setAlpha(0.0);

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
    

        /*this.btnPlay = this.add.sprite(10,200,"buttonStart1");
        this.btnPlay.setOrigin(0,0);
          this.btnPlay.setInteractive();
          this.btnPlay.on("pointerover", function() {
            this.btnPlay.setTexture("buttonStart2"); // set the button texture to sprBtnPlayHover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnPlay.on("pointerout", function() {
            this.setTexture("buttonStart1");
          });
          this.btnPlay.on("pointerdown", function() {
            this.btnPlay.setTexture("buttonStart2");
            //this.sfx.btnDown.play();
          }, this);
          this.btnPlay.on("pointerup", function() {
            this.btnPlay.setTexture("buttonStart1");
            this.scene.start("preLoader");
            this.sound.play('soundButton');

            //reset vars...
            teams = ["packers","packers", "raiders"];
            playerGraphics = ['content/playerPackers.png','content/playerRaiders.png'];
            team2Front = ["43","34","bear"];
            team2Coverage = ["cov1","cov2","cov3"];
            team2Secondary;
             
            ballCarrier;
            ballFlipping = false;
            ballPassed = false;
            ballScale = 0.33;
            ballSnapped = false;
            defensiveTeam = 2;
            difficulty = 1;
            down = 0;
            fieldGoal = false;
            fieldGoalAimSpeed = 5.0;
            fieldGoalKicked = false;
            football;
            gameOver = false;
            goingFor2 = false;
            inPlay = false;
            intercepted = false;
            kickBad = false;
            kickGood = false;
            kickOff = true;
            kickOffKicked = false;
            kickOffStarted = false;
            kickReturnTeam = 1;
            motion = false;
            motionStarted = false;
            newGame = true;
            offensiveTeam = 1;
            openBigHit = false;
            openDefensivePlaybook = false;
            openOffensivePlaybook = false;
            openFgBadMC = false;
            openFgGoodMC = false;
            openFgGoodMC2 = false;
            openGoodDMC = false;
            openInterceptionMC = false;
            openKickOffPlaybook = false;
            openOffensivePlaysSplit = false;
            openOffensivePlaysI = false;
            openOffensivePlaysShotgun = false;
            openOffensivePlaysBunch = false;
            openOffensivePlaysAce = false;
            openOffensivePlaysEmpty = false;
            openOffensiveFormations = true;
            openOffensivePlays;
            openPATPlaybook = false;
            openSpecialTeamsPlaybook = false;
            openSafetyMC = false;
            openSafetyMC2 = false;
            openTouchdownMC = false;
            openTouchdownMC2 = false;
            radians = Math.PI/180;
            radians2 = 180/Math.PI;
            passPlay = false;
            playSelected = false;
            primaryTarget;
            safety = false;
            safety2 = false;
            scoreTeam1 = 0;
            scoreTeam2 = 0;
            setKickoff = false;
            shotgun = false;
            speedBoost = 100;
            targetLocation = [];
            target;
            targetX;
            targetY;
            tackled = false;
            team1;
            team1Blocking;
            team1Formation = "kickReturn";
            team1Play;
            team1PlaySet = true;
            team1RouteQB;
            team1RouteFB;
            team1RouteTB;
            team1RouteWR1;
            team1RouteWR2;
            team1RouteWR3;
            team1RouteLT;
            team1RouteLG;
            team1RouteC;
            team1RouteRG;
            team1RouteRT;
            team2;
            team2Blocking;
            team2Formation = "kickOff";
            team2Play = "kickOffMiddle";
            team2PlaySet = true;
            team2RandomOffense = 0;
            team2RouteDB1;
            team2RouteDB2;
            team2RouteSS;
            team2RouteSS;
            team2RouteFS;
            team2RouteLB1;
            team2RouteLB2;
            team2RouteLB3;
            team2RouteDL1;
            team2RouteDL2;
            team2RouteDL3;
            team2RouteDL4;
            team2TargetX;
            team2TargetY;
            touchdown = false;
            time = 300;
            timeStopped = true;
            xSpeed;
            ySpeed;
            yardline = 35;
            yardlinePixel = 540;
            yardsToGo = 10;
            //end reset vars

          }, this);
*/
          this.crowdCheer = this.sound.play('soundCrowdCheer');

    }


    update(){
      if(this.counterAlpha < 1){
        this.counterAlpha += 0.01;
      }
      this.buttonStart.setAlpha(this.counterAlpha);
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
    }



  }
