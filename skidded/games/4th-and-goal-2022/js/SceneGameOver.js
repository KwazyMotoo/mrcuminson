class SceneGameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
    preload() {
        this.load.image('buttonStart1', 'content/buttonStart1.png');
        this.load.image('buttonStart2', 'content/buttonStart2.png');
        this.load.image('buttonChampion1', 'content/buttonChampion1.png');
        this.load.image('buttonChampion2', 'content/buttonChampion2.png');
        this.load.image('buttonNextRound1', 'content/buttonNextRound1.png');
        this.load.image('buttonNextRound2', 'content/buttonNextRound2.png');
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


        if(!playoffs){
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
              resetVariables();
              this.scene.start("SceneMainMenu");
              //this.scene.start("preLoader");
              //document.location.reload();
            }, this);
  
            //this.buttonStart.visible = false;
            this.buttonStart.setAlpha(0.0);
        }

        if(playoffs && scoreTeam1 <= scoreTeam2){
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
              resetVariables();
              this.scene.start("SceneMainMenu");
              //this.scene.start("preLoader");
              //document.location.reload();
            }, this);
  
            //this.buttonStart.visible = false;
            this.buttonStart.setAlpha(0.0);
        }

        if(playoffs && scoreTeam1 > scoreTeam2 && playoffRound < 4){
          this.buttonStart = this.add.sprite(533,250,"buttonNextRound1");
          this.buttonStart.setOrigin(0.5,0);
            this.buttonStart.setInteractive();
            this.buttonStart.on("pointerover", function() {
              this.buttonStart.setTexture("buttonNextRound2"); // set the button texture to sprbuttonStartHover
              //this.sfx.btnOver.play(); // play the button over sound
            }, this);
            this.buttonStart.on("pointerout", function() {
              this.setTexture("buttonNextRound1");
            });
            this.buttonStart.on("pointerdown", function() {
              this.buttonStart.setTexture("buttonNextRound2");
              //this.sfx.btnDown.play();
            }, this);
            this.buttonStart.on("pointerup", function() {
              this.buttonStart.setTexture("buttonNextRound1");
              //button clicked...
              resetVariables(playoffRound + 1);
              this.scene.start("ScenePlayoffBracket");
              //this.scene.start("preLoader");
              //document.location.reload();
            }, this);
  
            //this.buttonStart.visible = false;
            this.buttonStart.setAlpha(0.0);
        }

        if(playoffs && scoreTeam1 > scoreTeam2 && playoffRound == 4){
          this.buttonStart = this.add.sprite(533,250,"buttonChampion1");
          this.buttonStart.setOrigin(0.5,0);
            this.buttonStart.setInteractive();
            this.buttonStart.on("pointerover", function() {
              this.buttonStart.setTexture("buttonChampion2"); // set the button texture to sprbuttonStartHover
              //this.sfx.btnOver.play(); // play the button over sound
            }, this);
            this.buttonStart.on("pointerout", function() {
              this.setTexture("buttonChampion1");
            });
            this.buttonStart.on("pointerdown", function() {
              this.buttonStart.setTexture("buttonChampion2");
              //this.sfx.btnDown.play();
            }, this);
            this.buttonStart.on("pointerup", function() {
              this.buttonStart.setTexture("buttonChampion1");
              //button clicked...
              resetVariables(1);
              this.scene.start("SceneMainMenu");
              //this.scene.start("preLoader");
              //document.location.reload();
            }, this);
  
            //this.buttonStart.visible = false;
            this.buttonStart.setAlpha(0.0);
        }



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
