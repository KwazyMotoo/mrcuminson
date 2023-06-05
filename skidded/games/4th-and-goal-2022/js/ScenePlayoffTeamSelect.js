class ScenePlayoffTeamSelect extends Phaser.Scene {
    constructor() {
      super({ key: "ScenePlayoffTeamSelect" });
    }
    preload() {
        //this.load.image('button', 'content/button.png');
        //this.load.image('buttonSelect1', 'content/buttonSelect1.png');
        //this.load.image('buttonSelect2', 'content/buttonSelect2.png');
        //this.load.image('buttonChampionship1', 'content/buttonChampionship1.png');
        //this.load.image('buttonChampionship2', 'content/buttonChampionship2.png');
        //this.load.image('buttonHomeMode','content/buttonHomeMode.png');
        //this.load.image('buttonVisitorMode','content/buttonVisitorMode.png');
        //this.load.image('buttonSetHome1','content/buttonSetHome1.png');
        //this.load.image('buttonSetHome2','content/buttonSetHome2.png');
        //this.load.image('buttonSetVisitor1','content/buttonSetVisitor1.png');
        //this.load.image('buttonSetVisitor2','content/buttonSetVisitor2.png');
        this.load.image('menuPlayoffsTeams','content/menuPlayoffsTeams.png');
        //this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        //this.load.image('buttonGmLink2','content/buttonGmLink2.png');
        this.load.image('buttonSound1', 'content/buttonSound1.png');
        this.load.image('buttonSound2', 'content/buttonSound2.png');

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

        

        this.load.audio('soundButton', 'content/beep.mp3');
    }
    create() {
        this.bg = this.add.image(0,0,'menuPlayoffsTeams');
        this.bg.setOrigin(0.0,0.0);

        //this.homeTeam = this.add.image(471,75,'helmetChiefs');
        //this.visitorTeam = this.add.image(595,75,'helmetNiners');
        //this.homeTeam = this.add.image(475,75,'helmetChiefs');
        //this.homeTeam.setScale(-1,1);
        //this.visitorTeam = this.add.image(575,75,'helmetNiners');
        //this.visitorTeam.setScale(-1,1);

        
        //Helmets...
        this.buttonBrowns = this.add.sprite(250, 150, 'helmetBrowns');
        this.buttonBrowns.setInteractive();
        this.buttonBrowns.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBrowns.png';
            player1Key = "keyBrowns";
            //this.homeTeam.setTexture('helmetBrowns');
            helmetHome = 'content/helmetBrowns.png';
            helmetHomeKey = 'helmetBrowns';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonSteelers = this.add.sprite(310, 150, 'helmetSteelers');
        this.buttonSteelers.setInteractive();
        this.buttonSteelers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSteelers.png';
            player1Key = "keySteelers";
            helmetHome = 'content/helmetSteelers.png';
            helmetHomeKey = 'helmetSteelers';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonBengals = this.add.sprite(370, 150, 'helmetBengals');
        this.buttonBengals.setInteractive();
        this.buttonBengals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBengals.png';
            player1Key = "keyBengals";
            //this.homeTeam.setTexture('helmetBengals');
            helmetHome = 'content/helmetBengals.png';
            helmetHomeKey = 'helmetBengals';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonRavens = this.add.sprite(430, 150, 'helmetRavens');
        this.buttonRavens.setInteractive();
        this.buttonRavens.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRavens.png';
            player1Key = "keyRavens";
            //this.homeTeam.setTexture('helmetRavens');
            helmetHome = 'content/helmetRavens.png';
            helmetHomeKey = 'helmetRavens';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonChargers = this.add.sprite(250, 225, 'helmetChargers');
        this.buttonChargers.setInteractive();
        this.buttonChargers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChargers.png';
            player1Key = "keyChargers";
            //this.homeTeam.setTexture('helmetChargers');
            helmetHome = 'content/helmetChargers.png';
            helmetHomeKey = 'helmetChargers';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonChiefs = this.add.sprite(310, 225, 'helmetChiefs');
        this.buttonChiefs.setInteractive();
        this.buttonChiefs.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChiefs.png';
            player1Key = "keyChiefs";
            //this.homeTeam.setTexture('helmetChiefs');
            helmetHome = 'content/helmetChiefs.png';
            helmetHomeKey = 'helmetChiefs';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonBroncos = this.add.sprite(370, 225, 'helmetBroncos');
        this.buttonBroncos.setInteractive();
        this.buttonBroncos.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBroncos.png';
            player1Key = "keyBroncos";
            //this.homeTeam.setTexture('helmetBroncos');
            helmetHome = 'content/helmetBroncos.png';
            helmetHomeKey = 'helmetBroncos';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonRaiders = this.add.sprite(430, 225, 'helmetRaiders');
        this.buttonRaiders.setInteractive();
        this.buttonRaiders.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRaiders.png';
            player1Key = "keyRaiders";
            //this.homeTeam.setTexture('helmetRaiders');
            helmetHome = 'content/helmetRaiders.png';
            helmetHomeKey = 'helmetRaiders';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonColts = this.add.sprite(250, 300, 'helmetColts');
        this.buttonColts.setInteractive();
        this.buttonColts.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerColts.png';
            player1Key = "keyColts";
            //this.homeTeam.setTexture('helmetColts');
            helmetHome = 'content/helmetColts.png';
            helmetHomeKey = 'helmetColts';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonTitans = this.add.sprite(310, 300, 'helmetTitans');
        this.buttonTitans.setInteractive();
        this.buttonTitans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTitans.png';
            player1Key = "keyTitans";
            //this.homeTeam.setTexture('helmetTitans');
            helmetHome = 'content/helmetTitans.png';
            helmetHomeKey = 'helmetTitans';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonTexans = this.add.sprite(370, 300, 'helmetTexans');
        this.buttonTexans.setInteractive();
        this.buttonTexans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTexans.png';
            player1Key = "keyTexans";
            //this.homeTeam.setTexture('helmetTexans');
            helmetHome = 'content/helmetTexans.png';
            helmetHomeKey = 'helmetTexans';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonJaguars = this.add.sprite(430, 300, 'helmetJaguars');
        this.buttonJaguars.setInteractive();
        this.buttonJaguars.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJaguars.png';
            player1Key = "keyJaguars";
            //this.homeTeam.setTexture('helmetJaguars');
            helmetHome = 'content/helmetJaguars.png';
            helmetHomeKey = 'helmetJaguars';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonPatriots = this.add.sprite(250, 375, 'helmetPatriots');
        this.buttonPatriots.setInteractive();
        this.buttonPatriots.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPatriots.png';
            player1Key = "keyPatriots";
            //this.homeTeam.setTexture('helmetPatriots');
            helmetHome = 'content/helmetPatriots.png';
            helmetHomeKey = 'helmetPatriots';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonBills = this.add.sprite(310, 375, 'helmetBills');
        this.buttonBills.setInteractive();
        this.buttonBills.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBills.png';
            player1Key = "keyBills";
            //this.homeTeam.setTexture('helmetBills');
            helmetHome = 'content/helmetBills.png';
            helmetHomeKey = 'helmetBills';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonJets = this.add.sprite(370, 375, 'helmetJets');
        this.buttonJets.setInteractive();
        this.buttonJets.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJets.png';
            player1Key = "keyJets";
            //this.homeTeam.setTexture('helmetJets');
            helmetHome = 'content/helmetJets.png';
            helmetHomeKey = 'helmetJets';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        this.buttonDolphins = this.add.sprite(430, 375, 'helmetDolphins');
        this.buttonDolphins.setInteractive();
        this.buttonDolphins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerDolphins.png';
            player1Key = "keyDolphins";
            //this.homeTeam.setTexture('helmetDolphins');
            helmetHome = 'content/helmetDolphins.png';
            helmetHomeKey = 'helmetDolphins';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "AFC";
          }
        }, this);

        //NFC
        this.buttonPackers = this.add.sprite(620, 150, 'helmetPackers');
        this.buttonPackers.setInteractive();
        this.buttonPackers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPackers.png';
            player1Key = "keyPackers";
            //this.homeTeam.setTexture('helmetPackers');
            helmetHome = 'content/helmetPackers.png';
            helmetHomeKey = 'helmetPackers';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonLions = this.add.sprite(680, 150, 'helmetLions');
        this.buttonLions.setInteractive();
        this.buttonLions.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerLions.png';
            player1Key = "keyLions";
            //this.homeTeam.setTexture('helmetLions');
            helmetHome = 'content/helmetLions.png';
            helmetHomeKey = 'helmetLions';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonBears = this.add.sprite(740, 150, 'helmetBears');
        this.buttonBears.setInteractive();
        this.buttonBears.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBears.png';
            player1Key = "keyBears";
            //this.homeTeam.setTexture('helmetBears');
            helmetHome = 'content/helmetBears.png';
            helmetHomeKey = 'helmetBears';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonVikings = this.add.sprite(800, 150, 'helmetVikings');
        this.buttonVikings.setInteractive();
        this.buttonVikings.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerVikings.png';
            player1Key = "keyVikings";
            //this.homeTeam.setTexture('helmetVikings');
            helmetHome = 'content/helmetVikings.png';
            helmetHomeKey = 'helmetVikings';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonGiants = this.add.sprite(620, 225, 'helmetGiants');
        this.buttonGiants.setInteractive();
        this.buttonGiants.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerGiants.png';
            player1Key = "keyGiants";
            //this.homeTeam.setTexture('helmetGiants');
            helmetHome = 'content/helmetGiants.png';
            helmetHomeKey = 'helmetGiants';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonEagles = this.add.sprite(680, 225, 'helmetEagles');
        this.buttonEagles.setInteractive();
        this.buttonEagles.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerEagles.png';
            player1Key = "keyEagles";
            //this.homeTeam.setTexture('helmetEagles');
            helmetHome = 'content/helmetEagles.png';
            helmetHomeKey = 'helmetEagles';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonCowboys = this.add.sprite(740, 225, 'helmetCowboys');
        this.buttonCowboys.setInteractive();
        this.buttonCowboys.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCowboys.png';
            player1Key = "keyCowboys";
            //this.homeTeam.setTexture('helmetCowboys');
            helmetHome = 'content/helmetCowboys.png';
            helmetHomeKey = 'helmetCowboys';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonRedskins = this.add.sprite(800, 225, 'helmetRedskins');
        this.buttonRedskins.setInteractive();
        this.buttonRedskins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRedskins.png';
            player1Key = "keyRedskins";
            //this.homeTeam.setTexture('helmetRedskins');
            helmetHome = 'content/helmetRedskins.png';
            helmetHomeKey = 'helmetRedskins';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonBuccaneers = this.add.sprite(620, 300, 'helmetBuccaneers');
        this.buttonBuccaneers.setInteractive();
        this.buttonBuccaneers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBuccaneers.png';
            player1Key = "keyBuccaneers";
            //this.homeTeam.setTexture('helmetBuccaneers');
            helmetHome = 'content/helmetBuccaneers.png';
            helmetHomeKey = 'helmetBuccaneers';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonSaints = this.add.sprite(680, 300, 'helmetSaints');
        this.buttonSaints.setInteractive();
        this.buttonSaints.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSaints.png';
            player1Key = "keySaints";
            //this.homeTeam.setTexture('helmetSaints');
            helmetHome = 'content/helmetSaints.png';
            helmetHomeKey = 'helmetSaints';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonFalcons = this.add.sprite(740, 300, 'helmetFalcons');
        this.buttonFalcons.setInteractive();
        this.buttonFalcons.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerFalcons.png';
            player1Key = "keyFalcons";
            //this.homeTeam.setTexture('helmetFalcons');
            helmetHome = 'content/helmetFalcons.png';
            helmetHomeKey = 'helmetFalcons';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonPanthers = this.add.sprite(800, 300, 'helmetPanthers');
        this.buttonPanthers.setInteractive();
        this.buttonPanthers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPanthers.png';
            player1Key = "keyPanthers";
            //this.homeTeam.setTexture('helmetPanthers');
            helmetHome = 'content/helmetPanthers.png';
            helmetHomeKey = 'helmetPanthers';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonNiners = this.add.sprite(620, 375, 'helmetNiners');
        this.buttonNiners.setInteractive();
        this.buttonNiners.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerNiners.png';
            player1Key = "keyNiners";
            //this.homeTeam.setTexture('helmetNiners');
            helmetHome = 'content/helmetNiners.png';
            helmetHomeKey = 'helmetNiners';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonSeahawks = this.add.sprite(680, 375, 'helmetSeahawks');
        this.buttonSeahawks.setInteractive();
        this.buttonSeahawks.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSeahawks.png';
            player1Key = "keySeahawks";
            //this.homeTeam.setTexture('helmetSeahawks');
            helmetHome = 'content/helmetSeahawks.png';
            helmetHomeKey = 'helmetSeahawks';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonCardinals = this.add.sprite(740, 375, 'helmetCardinals');
        this.buttonCardinals.setInteractive();
        this.buttonCardinals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCardinals.png';
            player1Key = "keyCardinals";
            //this.homeTeam.setTexture('helmetCardinals');
            helmetHome = 'content/helmetCardinals.png';
            helmetHomeKey = 'helmetCardinals';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);

        this.buttonRams = this.add.sprite(800, 375, 'helmetRams');
        this.buttonRams.setInteractive();
        this.buttonRams.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRams.png';
            player1Key = "keyRams";
            //this.homeTeam.setTexture('helmetRams');
            helmetHome = 'content/helmetRams.png';
            helmetHomeKey = 'helmetRams';
            this.scene.start("ScenePlayoffBracket");
            playoffConference = "NFC";
          }
        }, this);




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



    }


    update(){
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
    }



  }
