class preLoader extends Phaser.Scene {
    constructor() {
      super({ key: "preLoader" });
    }
    preload() {
        this.load.image('black','content/black.png');
        this.load.image('jumbotron', 'content/jumbotron.png');
        this.load.image('jumbotronGM', 'content/jumbotronGM.png');
        //this.load.image('jumbotronStartGM','content/jumbotronStartGM.png')
        this.load.image('jumbotronFlash', 'content/jumbotronFlash.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');
        this.load.image('buttonStart1', 'content/buttonStart1.png');
        this.load.image('buttonStart2', 'content/buttonStart2.png');
        this.load.image('shield', 'content/shield2020.png');
        this.load.image('star', 'content/star.png');


        this.load.audio('soundCrowdCheer', 'content/crowd_cheer.mp3');
        this.load.audio('soundButton', 'content/beep.mp3');
        this.load.audio('metalSlam','content/metal_slam.mp3');
        this.jumbotronFlashSpeed = 12;

        this.gradientLineX = 0;
        this.alpha = 0;
        this.alphaBounce = 1;
        this.graphics;

    }
    create() {
      this.buttonGM = this.add.sprite(0,0,"jumbotronGM");
      this.buttonGM.setOrigin(0,0);
        this.buttonGM.setInteractive();
        this.buttonGM.on("pointerover", function() {
          this.buttonGM.setTexture("jumbotronGM"); // set the button texture to sprbuttonGMHover
          //this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.buttonGM.on("pointerout", function() {
          this.setTexture("jumbotronGM");
        });
        this.buttonGM.on("pointerdown", function() {
          this.buttonGM.setTexture("jumbotronGM");
          //this.sfx.btnDown.play();
        }, this);
        this.buttonGM.on("pointerup", function() {
          this.buttonGM.setTexture("jumbotronGM");
          if(this.jumbotronFlash.x > 0){
            window.open("https://www.glowmonkey.com");
        }
        }, this);

        this.bgGM = this.add.image(0,0,'jumbotronGM');
        this.bgGM.setOrigin(0.0,0.0);
        this.black = this.add.image(0,0, 'black');
        this.black.setOrigin(0,0);
        this.star = this.add.image(0,0,'star');
        this.star.setAlpha(0.5);

        this.graphics = this.add.graphics();
        this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha)
        this.graphics.lineBetween(200, this.gradientLineX, 800, 0);

        //this.jumbotronStartGM = this.add.image(0,0, 'jumbotronStartGM');
        //this.jumbotronStartGM.setOrigin(0,0);
        this.shield = this.add.image(426,240, 'shield');
        this.shield.setAlpha(0.2);
        this.jumbotronFlash = this.add.image(0,0, 'jumbotronFlash');
        this.jumbotronFlash.setOrigin(1.0,0.0);
        this.bg = this.add.image(0,0,'jumbotron');
        this.bg.setOrigin(0.0,0.0);


        

        this.shield.visible = false;
        //this.jumbotronStartGM.visible = false;
        this.black.visible = false;
        

 
        this.buttonStart = this.add.sprite(422,350,"buttonStart1");
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
            if(!crazyGames){
              this.scene.start("SceneMainMenu");
            }else{
              this.scene.start("SceneCrazyMenu");
            }
            this.sound.play('soundButton');
          }, this);

          this.buttonStart.visible = false;

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

          if (this.sys.game.device.os.desktop){
            mobile = false;
            //mobile = true;
          }
          else{
           mobile = true;
          }
          

    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }

      this.star.x += 3;
      this.star.y += 1.5;
      if(this.star.x > 1000){
        this.star.x = 0;
        this.star.y = 0;
      }
        this.jumbotronFlash.x += this.jumbotronFlashSpeed;
        if(this.jumbotronFlash.x > 1000){
            this.jumbotronFlashSpeed *= -1;
            this.jumbotronFlash.scaleX *= -1;
        }
        if(this.jumbotronFlash.x < 0){
          this.shield.visible = true;
          this.shield.x -= 1;
          if(this.shield.x < 0){
            this.shield.x = 800;
          }
            this.buttonStart.visible = true;
            //this.jumbotronStartGM.visible = true;
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

            this.black.visible = true;
        }
    }



  }
