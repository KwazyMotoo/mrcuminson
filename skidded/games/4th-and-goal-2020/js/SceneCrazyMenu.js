class SceneCrazyMenu extends Phaser.Scene {
    constructor() {
      super({ key: "SceneCrazyMenu" });
    }

    //crazygames...
    init() {
      const { CrazySDK } = window.CrazyGames;
      this.crazysdk = CrazySDK.getInstance();
      this.crazysdk.init();
      this.adRequested = false;
      this.installListeners();
    }

    //end crazygames

    preload() {
      //crazygames...
      this.requestAd();
      //end crazygames
      this.load.image('loadingMenu','content/loadingMenu.png');
      this.load.image('buttonStart1', 'content/buttonStart1.png');
      this.load.image('buttonStart2', 'content/buttonStart2.png');

      this.counter = 0;
    }
    create() {
        this.loadingScreen = this.add.image(0,0,'loadingMenu');
        this.loadingScreen.setOrigin(0.0,0.0);


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
            this.scene.start("SceneMainMenu");
            //this.scene.start("SceneCrazyMenu");
            this.sound.play('soundButton');
          }, this);

          this.buttonStart.visible = false;

    }


    update(){
      this.counter += 1;
      if(this.counter > 200){
          this.buttonStart.visible = true;
          //this.buttonStart.setAlpha(this.counter - 100);
      }
        
    }

    //crazygames...
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
  
    adStarted = () => {
      this.sound.mute = true;
    }
  
    adError = () => {
      this.sound.mute = false;
      this.adRequested = false;
      //by me...
      this.scene.start("SceneMainMenu");
    }
  
    adFinished = () => {
      this.sound.mute = false;
      this.adRequested = false;
      //by me...
      this.scene.start("SceneMainMenu");
    }
    //end crazygames



  }
