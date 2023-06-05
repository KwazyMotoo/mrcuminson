class SceneMainMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMainMenu" });
    }

    //crazygames...
    /*init() {
      const { CrazySDK } = window.CrazyGames;
      this.crazysdk = CrazySDK.getInstance();
      this.crazysdk.init();
      this.adRequested = false;
      this.installListeners();
    }
    */

    //end crazygames

    preload() {
      //start Poki...
      
      StartLoading();
      this.load.on('progress', function (value) {
      //console.log(value);
      });
      this.load.on('complete', function () {
        //console.log('complete');
        LoadingComplete();
      });
      
      //end Poki
      //crazygames...
      /*
      this.requestAd();
      */
      //end crazygames
        //this.load.image('button', 'content/button.png');
        this.load.image('buttonPlay1', 'content/buttonQuickGame.png');
        this.load.image('buttonPlay2', 'content/buttonQuickGame2.png');
        this.load.image('buttonPickTeams1', 'content/buttonPickTeams1.png');
        this.load.image('buttonPickTeams2', 'content/buttonPickTeams2.png');
        this.load.image('buttonPlayoffSeason1', 'content/buttonPlayoffSeason1.png');
        this.load.image('buttonPlayoffSeason2', 'content/buttonPlayoffSeason2.png');
        this.load.image('buttonInstructions1a','content/buttonInstructions1a.png');
        this.load.image('buttonInstructions1b','content/buttonInstructions1b.png');
        this.load.image('instructions2','content/instructions2.png');
        //this.load.image('menuTeams','content/menuTeams.png');
        this.load.image('mainMenuBG', 'content/mainMenuBg.png');
        //this.load.image('menuPlayer1','content/menuPlayer1.png');
        //this.load.image('menuPlayer2','content/menuPlayer2.png');
        //this.load.image('shield', 'content/shield2020.png');
        //this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        //this.load.image('buttonGmLink2','content/buttonGmLink2.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundButton', 'content/beep.mp3');
        this.load.audio('metalSlam','content/metal_slam.mp3');

        this.soundPlayed = false;

    }
    create() {
      if (this.sys.game.device.os.desktop){
        mobile = false;
        //mobile = true;
        console.log("not mobile");
      }
      else{
       mobile = true;
      }
      //2022 from Poki...
      const isIpad = () => {
        return ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream) || navigator.userAgent.match(/(iPad)/);
        }
        const isMobile = /Mobi|Android/i.test(navigator.userAgent) || isIpad();
        if(isMobile){
        //... we are on mobile
        //by me...
          mobile = true;
        }
        //this.bg = this.add.image(0,0,'menuTeams');
        //this.bg.setOrigin(0.0,0.0);
        this.bg2 = this.add.image(0,0,'mainMenuBG');
        this.bg2.setOrigin(0.0,0.0);
        //this.shieldScale = 20;
        //this.shield = this.add.image(425,-2400, 'shield');
        //this.shield.setScale(20,20);
        //this.menuPlayer1 = this.add.image(-1000,0,'menuPlayer1');
        //this.menuPlayer1 = this.add.image(0,0,'menuPlayer1');
        //this.menuPlayer1.setOrigin(0.0,0,0);
        //this.menuPlayer2 = this.add.image(1000,0,'menuPlayer2');
        //this.menuPlayer2 = this.add.image(0,0,'menuPlayer2');
        //this.menuPlayer2.setOrigin(0.0,0,0);
        /*this.menuPlayer3 = this.add.image(-1100,0,'menuPlayer1');
        this.menuPlayer3.setOrigin(0.0,0,0);
        this.menuPlayer4 = this.add.image(1100,0,'menuPlayer2');
        this.menuPlayer4.setOrigin(0.0,0,0);
        this.menuPlayer5 = this.add.image(-1200,0,'menuPlayer1');
        this.menuPlayer5.setOrigin(0.0,0,0);
        this.menuPlayer6 = this.add.image(1200,0,'menuPlayer2');
        this.menuPlayer6.setOrigin(0.0,0,0);
        this.menuPlayer7 = this.add.image(-1300,0,'menuPlayer1');
        this.menuPlayer7.setOrigin(0.0,0,0);
        this.menuPlayer8 = this.add.image(1300,0,'menuPlayer2');
        this.menuPlayer8.setOrigin(0.0,0,0);

        this.menuPlayer3.setAlpha(0.75);
        this.menuPlayer5.setAlpha(0.5);
        this.menuPlayer7.setAlpha(0.25);
        this.menuPlayer2.setAlpha(0.75);
        this.menuPlayer4.setAlpha(0.5);
        this.menuPlayer6.setAlpha(0.25);*/


        /*this.buttonGm = this.add.sprite(853,0,"buttonGmLink1");
        this.buttonGm.setOrigin(1,0);
          this.buttonGm.setInteractive();
          this.buttonGm.on("pointerover", function() {
            this.buttonGm.setTexture("buttonGmLink2"); // set the button texture to sprbuttonGmHover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonGm.on("pointerout", function() {
            this.setTexture("buttonGmLink1");
          });
          this.buttonGm.on("pointerdown", function() {
            this.buttonGm.setTexture("buttonGmLink2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonGm.on("pointerup", function() {
            this.sound.play('soundButton');
            this.buttonGm.setTexture("buttonGmLink1");
            window.open("https://www.glowmonkey.com");
          }, this);
          */

        //this.btnPlay = this.add.sprite(426,235,"buttonPlay1");
        this.btnPlay = this.add.sprite(10,10,"buttonPlay1");
        this.btnPlay.setOrigin(0,0);
          this.btnPlay.setInteractive();
          this.btnPlay.on("pointerover", function() {
            this.btnPlay.setTexture("buttonPlay2"); // set the buttonPlay texture to sprBtnPlayHover
            //this.sfx.btnOver.play(); // play the buttonPlay over sound
          }, this);
          this.btnPlay.on("pointerout", function() {
            this.setTexture("buttonPlay1");
          });
          this.btnPlay.on("pointerdown", function() {
            this.btnPlay.setTexture("buttonPlay2");
            //this.sfx.btnDown.play();
          }, this);
          this.btnPlay.on("pointerup", function() {
            this.btnPlay.setTexture("buttonPlay1");
            //this.scene.start("SceneTeamSelect");
            this.sound.play('soundButton');
            //right to game...
            time = 300;
            difficulty = 0;
            fumbleChance = 0.75;
            fieldGoalAimSpeed = 5.0;
            playoffs = false;
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            //gameStart();
            startCommercialFirst();
            //crazygames...
            /*
            this.removeListeners();
            */
            //end crazygames
          }, this);

          
          this.btnPickTeams = this.add.sprite(10,60,"buttonPickTeams1");
        this.btnPickTeams.setOrigin(0,0);
          this.btnPickTeams.setInteractive();
          this.btnPickTeams.on("pointerover", function() {
            this.btnPickTeams.setTexture("buttonPickTeams2"); // set the buttonPickTeams texture to sprbtnPickTeamsHover
            //this.sfx.btnOver.play(); // play the buttonPickTeams over sound
          }, this);
          this.btnPickTeams.on("pointerout", function() {
            this.setTexture("buttonPickTeams1");
          });
          this.btnPickTeams.on("pointerdown", function() {
            this.btnPickTeams.setTexture("buttonPickTeams2");
            //this.sfx.btnDown.play();
          }, this);
          this.btnPickTeams.on("pointerup", function() {
            this.btnPickTeams.setTexture("buttonPickTeams1");
            playoffs = false;
            this.scene.start("SceneTeamSelect");
            this.sound.play('soundButton');
          }, this);
          

         this.btnPlayoffSeason = this.add.sprite(10,110,"buttonPlayoffSeason1");
         this.btnPlayoffSeason.setOrigin(0,0);
           this.btnPlayoffSeason.setInteractive();
           this.btnPlayoffSeason.on("pointerover", function() {
             this.btnPlayoffSeason.setTexture("buttonPlayoffSeason2"); // set the buttonPlayoffSeason texture to sprbtnPlayoffSeasonHover
             //this.sfx.btnOver.play(); // play the buttonPlayoffSeason over sound
           }, this);
           this.btnPlayoffSeason.on("pointerout", function() {
             this.setTexture("buttonPlayoffSeason1");
           });
           this.btnPlayoffSeason.on("pointerdown", function() {
             this.btnPlayoffSeason.setTexture("buttonPlayoffSeason2");
             //this.sfx.btnDown.play();
           }, this);
           this.btnPlayoffSeason.on("pointerup", function() {
             this.btnPlayoffSeason.setTexture("buttonPlayoffSeason1");
             playoffs = true;
             this.scene.start("ScenePlayoffTeamSelect");
             this.sound.play('soundButton');
           }, this);
          



          this.btnInstructions = this.add.sprite(10,160,"buttonInstructions1a");
        this.btnInstructions.setOrigin(0,0);
          this.btnInstructions.setInteractive();
          this.btnInstructions.on("pointerover", function() {
            this.btnInstructions.setTexture("buttonInstructions1b"); // set the buttonInstructions1a texture to sprbtnInstructionsHover
            //this.sfx.btnOver.play(); // play the buttonInstructions1a over sound
          }, this);
          this.btnInstructions.on("pointerout", function() {
            this.setTexture("buttonInstructions1a");
          });
          this.btnInstructions.on("pointerdown", function() {
            this.btnInstructions.setTexture("buttonInstructions1b");
            //this.sfx.btnDown.play();
          }, this);
          this.btnInstructions.on("pointerup", function() {
            this.btnInstructions.setTexture("buttonInstructions1a");
            this.instructions2.visible = true;
            this.sound.play('soundButton');
            //crazygames...
            /*
            this.removeListeners();
            */
            //end crazygames
          }, this);

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

          this.instructions2 = this.add.sprite(0,0, 'instructions2');
          this.instructions2.setOrigin(0,0);
          this.instructions2.setInteractive();
          this.instructions2.on("pointerup", function() {
            this.instructions2.visible = false;
          }, this);

          var closeInstructions = function(){
            this.instructions2.visible = true;
          }

          this.instructions2.visible = false;
          //this.instructions = this.add.image(0,0, 'instructions');
        //this.instructions.setOrigin(0,0);
        //this.instructions.visible = false;

          this.crowdCheer = this.sound.play('soundCrowdCheer');

    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
      
        /*if(this.shieldScale > 1){
            this.shieldScale -= 1;
            //this.shield.x += 81;
            this.shield.y += 140;
        }*/
        //if(this.shieldScale <= 1){
          //if(!this.soundPlayed && this.crowdCheer != null){
            //this.sound.play('metalSlam');
           // this.sound.play('soundCrowdCheer');
            //this.soundPlayed = true;
            //this.shield.y = 240;
          //}
          /*if(this.menuPlayer2.x > 0){
            this.menuPlayer2.x -= 50;
            this.menuPlayer1.x += 50;
          }
          if(this.menuPlayer2.x < 0){*/
            //this.menuPlayer2.x = 0;
            //this.menuPlayer1.x = 0;
          /*}
          if(this.menuPlayer4.x > 0){
            this.menuPlayer4.x -= 50;
            this.menuPlayer3.x += 50;
          }
          if(this.menuPlayer4.x < 0){
            this.menuPlayer4.x = 0;
            this.menuPlayer3.x = 0;
          }
          if(this.menuPlayer6.x > 0){
            this.menuPlayer6.x -= 50;
            this.menuPlayer5.x += 50;
          }
          if(this.menuPlayer6.x < 0){
            this.menuPlayer6.x = 0;
            this.menuPlayer5.x = 0;
          }
          if(this.menuPlayer8.x > 0){
            this.menuPlayer8.x -= 50;
            this.menuPlayer7.x += 50;
          }
          if(this.menuPlayer8.x < 0){
            this.menuPlayer8.x = 0;
            this.menuPlayer7.x = 0;
          }*/
        //}
       // this.shield.setScale(this.shieldScale, this.shieldScale);
    }

    //crazygames...
    /*
    installListeners() {
      this.crazysdk.addEventListener('adStarted', this.adStarted);
      this.crazysdk.addEventListener('adError', this.adError);
      this.crazysdk.addEventListener('adFinished', this.adFinished);
    }

    removeListeners() {
      this.crazysdk.removeEventListener('adStarted', this.adStarted);
      this.crazysdk.removeEventListener('adFinished', this.adFinished);
      this.crazysdk.removeEventListener('adError', this.adError);
    }

    requestAd() {
      this.adRequested = true;
      this.crazysdk.requestAd();
    }
    */
    //end crazygames



  }
