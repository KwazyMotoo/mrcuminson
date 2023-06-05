class SceneDifficultyMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneDifficultyMenu" });
    }
    preload() {
        //this.load.image('button', 'content/button.png');
        //this.load.image('button1', 'content/playbookButton1.png');
        //this.load.image('button2', 'content/playbookButton2.png');
        this.load.image('buttonDifficulty1','content/buttonDifficulty1.png');
        this.load.image('buttonDifficulty2','content/buttonDifficulty2.png');

        //this.load.image('menuTeams','content/menuTeams.png');
        this.load.image('shield', 'content/shield2020.png');
        this.load.image('menuPlayer1','content/menuPlayer1.png');
        this.load.image('menuPlayer2','content/menuPlayer2.png');
        this.load.image('menuDifficulty', 'content/menuDifficulty.png');
        //this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        //this.load.image('buttonGmLink2','content/buttonGmLink2.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundButton', 'content/beep.mp3');

        //graphics
        this.gradientLineX = 0;
        this.alpha = 0;
        this.alphaBounce = 1;
        this.graphics;
    }
    create() {
      this.shield = this.add.image(533,240,'shield');
      this.shield.setAlpha(0.5);
this.player1 = this.add.image(300,290,'menuPlayer1');
this.player2 = this.add.image(600,275,'menuPlayer2');
this.player1.setScale(0.9);
this.player2.setScale(0.9);

      //graphics
      this.graphics = this.add.graphics();
      this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha)
      this.graphics.lineBetween(200, this.gradientLineX, 800, 0);
        //this.bg = this.add.image(0,0,'menuTeams');
        //this.bg.setOrigin(0.0,0.0);
        this.bg2 = this.add.image(0,0,'menuDifficulty');
        this.bg2.setOrigin(0.0,0.0);


/*
        this.buttonGm = this.add.sprite(853,0,"buttonGmLink1");
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

        this.buttonDifficulty1 = this.add.sprite(10,100,"buttonDifficulty1");
        this.buttonDifficulty1.setOrigin(0,0.5);
          this.buttonDifficulty1.setInteractive();
          this.buttonDifficulty1.on("pointerover", function() {
            this.buttonDifficulty1.setTexture("buttonDifficulty2"); // set the button texture to sprbuttonDifficulty1Hover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonDifficulty1.on("pointerout", function() {
            this.setTexture("buttonDifficulty1");
          });
          this.buttonDifficulty1.on("pointerdown", function() {
            this.buttonDifficulty1.setTexture("buttonDifficulty2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonDifficulty1.on("pointerup", function() {
            this.buttonDifficulty1.setTexture("buttonDifficulty1");
            difficulty = 0;
            fumbleChance = 0.75;
            fieldGoalAimSpeed = 5.0;
            this.sound.play('soundButton');
            //this.sound.play('soundCrowdCheer');
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            //gameStart();
            startCommercialFirst();
            //end Poki
          }, this);

          this.buttonDifficulty2 = this.add.sprite(10,200,"buttonDifficulty1");
        this.buttonDifficulty2.setOrigin(0,0.5);
          this.buttonDifficulty2.setInteractive();
          this.buttonDifficulty2.on("pointerover", function() {
            this.buttonDifficulty2.setTexture("buttonDifficulty2"); // set the button texture to sprbuttonDifficulty1Hover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonDifficulty2.on("pointerout", function() {
            this.setTexture("buttonDifficulty1");
          });
          this.buttonDifficulty2.on("pointerdown", function() {
            this.buttonDifficulty2.setTexture("buttonDifficulty2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonDifficulty2.on("pointerup", function() {
            this.buttonDifficulty2.setTexture("buttonDifficulty1");
            difficulty = 1;
            fumbleChance = 0.8;
            fieldGoalAimSpeed = 8.0;
            this.sound.play('soundButton');
            //this.sound.play('soundCrowdCheer');
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            //gameStart();
            startCommercialFirst();
            //end Poki
          }, this);

          this.buttonDifficulty3 = this.add.sprite(10,300,"buttonDifficulty1");
        this.buttonDifficulty3.setOrigin(0,0.5);
          this.buttonDifficulty3.setInteractive();
          this.buttonDifficulty3.on("pointerover", function() {
            this.buttonDifficulty3.setTexture("buttonDifficulty2"); // set the button texture to sprbuttonDifficulty1Hover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonDifficulty3.on("pointerout", function() {
            this.setTexture("buttonDifficulty1");
          });
          this.buttonDifficulty3.on("pointerdown", function() {
            this.buttonDifficulty3.setTexture("buttonDifficulty2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonDifficulty3.on("pointerup", function() {
            this.buttonDifficulty3.setTexture("buttonDifficulty1");
            difficulty = 2;
            fumbleChance = 0.9;
            fieldGoalAimSpeed = 10.0;
            this.sound.play('soundButton');
            //this.sound.play('soundCrowdCheer');
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            //gameStart();
            startCommercialFirst();
            //end Poki
          }, this);

          this.buttonDifficulty4 = this.add.sprite(10,400,"buttonDifficulty1");
        this.buttonDifficulty4.setOrigin(0,0.5);
          this.buttonDifficulty4.setInteractive();
          this.buttonDifficulty4.on("pointerover", function() {
            this.buttonDifficulty4.setTexture("buttonDifficulty2"); // set the button texture to sprbuttonDifficulty1Hover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.buttonDifficulty4.on("pointerout", function() {
            this.setTexture("buttonDifficulty1");
          });
          this.buttonDifficulty4.on("pointerdown", function() {
            this.buttonDifficulty4.setTexture("buttonDifficulty2");
            //this.sfx.btnDown.play();
          }, this);
          this.buttonDifficulty4.on("pointerup", function() {
            this.buttonDifficulty4.setTexture("buttonDifficulty1");
            difficulty = 2.4;
            fumbleChance = 0.9;
            fieldGoalAimSpeed = 12.0;
            this.sound.play('soundButton');
            //this.sound.play('soundCrowdCheer');
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            //gameStart();
            startCommercialFirst();
            //end Poki
          }, this);

    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }

      this.player1.x += 2.5;
          if(this.player1.x > 800){
            this.player1.x = 0;
          }

          this.player2.x -= 2;
          if(this.player2.x < 0){
            this.player2.x = 800;
          }

      //graphics
      this.alpha += 0.001*this.alphaBounce;
      this.gradientLineX += 10;
      this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha);
      this.graphics.lineBetween(200, this.gradientLineX, 800, 0);
      if(this.gradientLineX > 3000){
        this.graphics.clear();
        this.gradientLineX = 0;
        this.alpha = 0;
      }
    }



  }
