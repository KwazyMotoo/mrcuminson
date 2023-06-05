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
      //crazygames...
      /*
      this.requestAd();
      */
      //end crazygames
        //this.load.image('button', 'content/button.png');
        this.load.image('buttonPlay1', 'content/buttonPlayoffs1.png');
        this.load.image('buttonPlay2', 'content/buttonPlayoffs2.png');
        //this.load.image('menuTeams','content/menuTeams.png');
        this.load.image('mainMenuBG', 'content/mainMenuBg.png');
        this.load.image('menuPlayer1','content/menuPlayer1.png');
        this.load.image('menuPlayer2','content/menuPlayer2.png');
        this.load.image('shield', 'content/shield2020.png');
        this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        this.load.image('buttonGmLink2','content/buttonGmLink2.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundButton', 'content/beep.mp3');
        this.load.audio('metalSlam','content/metal_slam.mp3');

        this.soundPlayed = false;

    }
    create() {
        //this.bg = this.add.image(0,0,'menuTeams');
        //this.bg.setOrigin(0.0,0.0);
        this.bg2 = this.add.image(0,0,'mainMenuBG');
        this.bg2.setOrigin(0.0,0.0);
        this.shieldScale = 20;
        this.shield = this.add.image(425,-2400, 'shield');
        this.shield.setScale(20,20);
        this.menuPlayer1 = this.add.image(-1000,0,'menuPlayer1');
        this.menuPlayer1.setOrigin(0.0,0,0);
        this.menuPlayer2 = this.add.image(1000,0,'menuPlayer2');
        this.menuPlayer2.setOrigin(0.0,0,0);
        this.menuPlayer3 = this.add.image(-1100,0,'menuPlayer1');
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
        this.menuPlayer6.setAlpha(0.25);


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

        this.btnPlay = this.add.sprite(426,350,"buttonPlay1");
        this.btnPlay.setOrigin(0.5,0);
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
            this.scene.start("SceneTeamSelect");
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

          this.crowdCheer = this.sound.play('soundCrowdCheer');

    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
      
        if(this.shieldScale > 1){
            this.shieldScale -= 1;
            //this.shield.x += 81;
            this.shield.y += 140;
        }
        if(this.shieldScale <= 1){
          if(!this.soundPlayed && this.crowdCheer != null){
            this.sound.play('metalSlam');
            this.sound.play('soundCrowdCheer');
            this.soundPlayed = true;
            this.shield.y = 240;
          }
          if(this.menuPlayer2.x > 0){
            this.menuPlayer2.x -= 50;
            this.menuPlayer1.x += 50;
          }
          if(this.menuPlayer2.x < 0){
            this.menuPlayer2.x = 0;
            this.menuPlayer1.x = 0;
          }
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
          }
        }
        this.shield.setScale(this.shieldScale, this.shieldScale);
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
