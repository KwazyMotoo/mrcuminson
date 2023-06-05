class ScenePlayoffBracket extends Phaser.Scene {
    constructor() {
      super({ key: "ScenePlayoffBracket" });
    }
    preload() {
        //this.load.image('button', 'content/button.png');
        this.load.image('buttonSelect1', 'content/buttonSelect1.png');
        this.load.image('buttonSelect2', 'content/buttonSelect2.png');
        this.load.image('playoffBracket','content/playoffBracket.png');
        this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        this.load.image('buttonGmLink2','content/buttonGmLink2.png');
        this.load.image('helmetRavens', 'content/helmetRavens.png');
        this.load.image('helmetChiefs', 'content/helmetChiefs.png');
        this.load.image('helmetPatriots', 'content/helmetPatriots.png');
        this.load.image('helmetTexans', 'content/helmetTexans.png');
        this.load.image('helmetTitans', 'content/helmetTitans.png');
        this.load.image('helmetBills', 'content/helmetBills.png');
        this.load.image('helmetNiners', 'content/helmetNiners.png');
        this.load.image('helmetPackers', 'content/helmetPackers.png');
        this.load.image('helmetSaints', 'content/helmetSaints.png');
        this.load.image('helmetEagles', 'content/helmetEagles.png');
        this.load.image('helmetSeahawks', 'content/helmetSeahawks.png');
        this.load.image('helmetVikings', 'content/helmetVikings.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

        this.load.audio('soundButton', 'content/beep.mp3');
    }
    create() {
        this.bg = this.add.image(0,0,'playoffBracket');
        this.bg.setOrigin(0.0,0.0);

        this.buttonRavens = this.add.sprite(400, 220, 'helmetRavens');
        this.buttonRavens.setInteractive();
        this.buttonRavens.on("pointerup", function() {
            playerGraphics = ['content/playerPackers.png','content/playerRaiders.png'];
            this.scene.start("SceneTimeMenu");
          }, this);

        this.buttonChiefs = this.add.sprite(400, 285, 'helmetChiefs');

        this.buttonPatriots = this.add.sprite(290, 125, 'helmetPatriots');

        this.buttonTitans = this.add.sprite(290, 200, 'helmetTitans');

        this.buttonTexans = this.add.sprite(290, 300, 'helmetTexans');

        this.buttonBills = this.add.sprite(290, 375, 'helmetBills');

        this.buttonNiners = this.add.sprite(660, 220, 'helmetNiners');
        this.buttonNiners.setScale(-1.0,1.0);

        this.buttonPackers = this.add.sprite(660, 285, 'helmetPackers');
        this.buttonPackers.setScale(-1.0,1.0);

        this.buttonSaints = this.add.sprite(770, 300, 'helmetSaints');
        this.buttonSaints.setScale(-1.0,1.0);

        this.buttonEagles = this.add.sprite(770, 200, 'helmetEagles');
        this.buttonEagles.setScale(-1.0,1.0);

        this.buttonSeahawks = this.add.sprite(770, 125, 'helmetSeahawks');
        this.buttonSeahawks.setScale(-1.0,1.0);

        this.buttonVikings = this.add.sprite(770, 375, 'helmetVikings');
        this.buttonVikings.setScale(-1.0,1.0);

        this.afcChamp = this.add.sprite(505, 255, 'helmetChiefs');

        this.nfcChamp = this.add.sprite(560, 255, 'helmetPackers');
        this.nfcChamp.setScale(-1,1);



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
            window.open("https:www.glowmonkey.com");
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

        this.btnPlay = this.add.sprite(10,100,"buttonSelect1");
        this.btnPlay.setOrigin(0,0);
          this.btnPlay.setInteractive();
          this.btnPlay.on("pointerover", function() {
            this.btnPlay.setTexture("buttonSelect2"); // set the button texture to sprBtnPlayHover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnPlay.on("pointerout", function() {
            this.setTexture("buttonSelect1");
          });
          this.btnPlay.on("pointerdown", function() {
            this.btnPlay.setTexture("buttonSelect2");
            //this.sfx.btnDown.play();
          }, this);
          this.btnPlay.on("pointerup", function() {
            this.sound.play('soundButton');
            this.btnPlay.setTexture("buttonSelect1");
            playerGraphics = ['content/playerPackers.png','content/playerRaiders.png'];
            this.scene.start("SceneTimeMenu");
          }, this);

          this.btnSelect2 = this.add.sprite(10,300,"buttonSelect1");
        this.btnSelect2.setOrigin(0,0);
          this.btnSelect2.setInteractive();
          this.btnSelect2.on("pointerover", function() {
            this.btnSelect2.setTexture("buttonSelect2"); // set the button texture to sprbtnSelect2Hover
            //this.sfx.btnOver.play(); // play the button over sound
          }, this);
          this.btnSelect2.on("pointerout", function() {
            this.setTexture("buttonSelect1");
          });
          this.btnSelect2.on("pointerdown", function() {
            this.btnSelect2.setTexture("buttonSelect2");
            //this.sfx.btnDown.play();
          }, this);
          this.btnSelect2.on("pointerup", function() {
            this.sound.play('soundButton');
            this.btnSelect2.setTexture("buttonSelect1");
            playerGraphics = ['content/playerRaiders.png', 'content/playerPackers.png'];
            this.scene.start("SceneTimeMenu");
          }, this);

    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
    }



  }
