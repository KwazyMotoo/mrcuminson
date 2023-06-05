class ScenePlayoffBracket extends Phaser.Scene {
  constructor() {
    super({ key: "ScenePlayoffBracket" });
  }
  preload() {
      //this.load.image('button', 'content/button.png');
      this.load.image('buttonSelect1', 'content/buttonSelect1.png');
      this.load.image('buttonSelect2', 'content/buttonSelect2.png');
      this.load.image('buttonChampionship1', 'content/buttonChampionship1.png');
      this.load.image('buttonChampionship2', 'content/buttonChampionship2.png');
      //this.load.image('buttonHomeMode','content/buttonHomeMode.png');
      //this.load.image('buttonVisitorMode','content/buttonVisitorMode.png');
      //this.load.image('buttonSetHome1','content/buttonSetHome1.png');
      //this.load.image('buttonSetHome2','content/buttonSetHome2.png');
      //this.load.image('buttonSetVisitor1','content/buttonSetVisitor1.png');
      //this.load.image('buttonSetVisitor2','content/buttonSetVisitor2.png');
      this.load.image('menuPlayoffs','content/menuPlayoffs.png');
      //this.load.image('buttonGmLink1','content/buttonGmLink1.png');
      //this.load.image('buttonGmLink2','content/buttonGmLink2.png');
      this.load.image('buttonSound1', 'content/buttonSound1.png');
      this.load.image('buttonSound2', 'content/buttonSound2.png');

      this.load.image('helmetHome', helmetHome);
      this.load.image('helmetVisitor', helmetVisitor);
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

      this.load.image('starsRound1', 'content/playoffRound1stars.png');
      this.load.image('starsRound4', 'content/playoffRound4stars.png');

      

      this.load.audio('soundButton', 'content/beep.mp3');
  }
  create() {
      this.bg = this.add.image(0,0,'menuPlayoffs');
      this.bg.setOrigin(0.0,0.0);

      //this.homeTeam = this.add.image(471,75,'helmetChiefs');
      //this.visitorTeam = this.add.image(595,75,'helmetNiners');
      if(playoffConference == "AFC"){
        this.homeTeam = this.add.image(63,42,helmetHomeKey);
      }else{
        this.homeTeam = this.add.image(63,42,'helmetCardinals');
      }
      this.homeTeam.setScale(-1,1);
      if(playoffConference == "NFC"){
        this.visitorTeam = this.add.image(790,42,helmetHomeKey);
      }else{
        this.visitorTeam = this.add.image(790,42,'helmetNiners');
      }
      //this.visitorTeam.setScale(-1,1);

      
      //Helmets...
      //2022
      /*
      this.buttonBrowns = this.add.sprite(63, 331, 'helmetBrowns');
      this.buttonBrowns.setScale(-1,1);
      */
      this.buttonBengals = this.add.sprite(63, 331, 'helmetBengals');
      this.buttonBengals.setScale(-1,1);

      this.buttonSteelers = this.add.sprite(63, 271, 'helmetSteelers');
      this.buttonSteelers.setScale(-1,1);

      //2022...
      /*this.buttonRavens = this.add.sprite(63, 444, 'helmetRavens');
      this.buttonRavens.setScale(-1,1);*/
      this.buttonRaiders = this.add.sprite(63, 444, 'helmetRaiders');
      this.buttonRaiders.setScale(-1,1);

      //this.buttonChiefs = this.add.sprite(63, 100, 'helmetChiefs');
      //this.buttonChiefs.setScale(-1,1);
      //if player chooses chiefs
      //changed for 2022...
      /*if(player1Key == "keyChiefs"){
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetRaiders');
        this.buttonChiefs.setScale(-1,1);
      }else{
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetChiefs');
        this.buttonChiefs.setScale(-1,1);
      }*/
      //Changed 2022...
      /*if(player1Key == "keyChiefs"){
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetRaiders');
        this.buttonChiefs.setScale(-1,1);
      }else{
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetChiefs');
        this.buttonChiefs.setScale(-1,1);
      }*/
      if(player1Key == "keyChiefs"){
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetChargers');
        this.buttonChiefs.setScale(-1,1);
      }else{
        this.buttonChiefs = this.add.sprite(63, 100, 'helmetChiefs');
        this.buttonChiefs.setScale(-1,1);
      }

      //2022...
      /*this.buttonColts = this.add.sprite(63, 215, 'helmetColts');
      this.buttonColts.setScale(-1,1);*/
      this.buttonPatriots = this.add.sprite(63, 215, 'helmetPatriots');
      this.buttonPatriots.setScale(-1,1);

      this.buttonTitans = this.add.sprite(63, 386, 'helmetTitans');
      this.buttonTitans.setScale(-1,1);

      this.buttonBills = this.add.sprite(63, 157, 'helmetBills');
      this.buttonBills.setScale(-1,1);


      //NFC
      //this.buttonPackers = this.add.sprite(790, 100, 'helmetPackers');
      //if player chooses packers
      if(player1Key == "keyPackers"){
        this.buttonPackers = this.add.sprite(790, 100, 'helmetCardinals');
      }else{
        this.buttonPackers = this.add.sprite(790, 100, 'helmetPackers');
      }

      this.buttonRedskins = this.add.sprite(790, 386, 'helmetRedskins');

      this.buttonBuccaneers = this.add.sprite(790, 444, 'helmetBuccaneers');

      this.buttonSaints = this.add.sprite(790, 157, 'helmetSaints');  

      this.buttonSeahawks = this.add.sprite(790, 271, 'helmetSeahawks');

      this.buttonRams = this.add.sprite(790, 331, 'helmetRams');

      this.buttonBears = this.add.sprite(790, 215, 'helmetBears');


      

//Rounds helmets...
      playoffRound    
      if(playoffRound == 1){
          //afc
        if(playoffConference == "AFC"){
          this.stars1 = this.add.sprite(63, 70, 'starsRound1');
          helmetVisitor = 'content/helmetChiefs.png';
          helmetVisitorKey = 'helmetChiefs';
        }else{
          this.stars1 = this.add.sprite(790, 70, 'starsRound1');
          helmetVisitor = 'content/helmetPackers.png';
          helmetVisitorKey = 'helmetPackers';
        }
      }
      if(playoffRound >= 2){
        //afc
        if(playoffConference == "AFC"){
          this.buttonAFC2a = this.add.sprite(158, 92, helmetHomeKey);
          this.buttonAFC2a.setScale(-1,1);
          if(playoffRound == 2){
            this.stars1 = this.add.sprite(158, 120, 'starsRound1');
            //2022
            /*helmetVisitor = 'content/helmetBrowns.png';
            helmetVisitorKey = 'helmetBrowns';
            */
            helmetVisitor = 'content/helmetBengals.png';
            helmetVisitorKey = 'helmetBengals';
          }
        }else{
          this.buttonAFC2a = this.add.sprite(158, 92, 'helmetChiefs');
          this.buttonAFC2a.setScale(-1,1);
        }
        //2022...
        /*if(player1Key != "keyBrowns"){
          this.buttonAFC2b = this.add.sprite(158, 167, 'helmetBrowns');*/
        if(player1Key != "keyBengals"){
            this.buttonAFC2b = this.add.sprite(158, 167, 'helmetBengals');
        }else{
          this.buttonAFC2b = this.add.sprite(158, 167, 'helmetSteelers');
        }
        this.buttonAFC2b.setScale(-1,1);
        this.buttonAFC2c = this.add.sprite(158, 318, 'helmetBills');
        this.buttonAFC2c.setScale(-1,1);
        this.buttonAFC2d = this.add.sprite(158, 392, 'helmetRaiders');
        this.buttonAFC2d.setScale(-1,1);
        //nfc
        if(playoffConference == "NFC"){
          this.buttonNFC2a = this.add.sprite(695, 92, helmetHomeKey);
          if(playoffRound == 2){
            this.stars1 = this.add.sprite(695, 120, 'starsRound1');
            helmetVisitor = 'content/helmetRams.png';
            helmetVisitorKey = 'helmetRams';
          }
        }else{
          this.buttonNFC2a = this.add.sprite(695, 92, 'helmetPackers');
        } 
        if(player1Key != "keyRams"){
          this.buttonNFC2b = this.add.sprite(695, 167, 'helmetRams');
        }else{
          this.buttonNFC2b = this.add.sprite(695, 167, 'helmetSeahawks');
        }
        this.buttonNFC2c = this.add.sprite(695, 318, 'helmetSaints');
        this.buttonNFC2d = this.add.sprite(695, 392, 'helmetBuccaneers');
      }
      if(playoffRound >= 3){
        this.buttonAFC3b = this.add.sprite(257, 280, 'helmetBills');
        this.buttonAFC3b.setScale(-1,1);
        this.buttonNFC3b = this.add.sprite(600, 280, 'helmetBuccaneers');
        //afc
        if(playoffConference == "AFC"){
          this.buttonAFC2a = this.add.sprite(257, 205, helmetHomeKey);
          this.buttonAFC2a.setScale(-1,1);
          if(playoffRound == 3){
            this.stars1 = this.add.sprite(257, 233, 'starsRound1');
            if(player1Key != "keyBills"){
              helmetVisitor = 'content/helmetBills.png';
              helmetVisitorKey = 'helmetBills';
              this.buttonAFC3b = this.add.sprite(257, 280, 'helmetBills');
              this.buttonAFC3b.setScale(-1,1);
            }
            if(player1Key == "keyBills"){
              helmetVisitor = 'content/helmet.png';
              helmetVisitorKey = 'helmetRaiders';
              this.buttonAFC3b = this.add.sprite(257, 280, 'helmetRaiders');
              this.buttonAFC3b.setScale(-1,1);
            }
          }
        }else{
          this.buttonAFC2a = this.add.sprite(257, 205, 'helmetChiefs');
          this.buttonAFC2a.setScale(-1,1);
        }
        //this.buttonAFC3b = this.add.sprite(257, 280, 'helmetBills');
        //this.buttonAFC3b.setScale(-1,1);
        //nfc
        if(playoffConference == "NFC"){
          this.buttonNFC2a = this.add.sprite(600, 205, helmetHomeKey);
          if(playoffRound == 3){
            this.stars1 = this.add.sprite(600, 233, 'starsRound1');
            if(player1Key != "keyBuccaneers"){
              helmetVisitor = 'content/helmetBuccaneers.png';
              helmetVisitorKey = 'helmetBuccaneers';
              this.buttonNFC3b = this.add.sprite(600, 280, 'helmetBuccaneers');
            }
            if(player1Key == "keyBuccaneers"){
              helmetVisitor = 'content/helmetSaints.png';
              helmetVisitorKey = 'helmetSaints';
              this.buttonNFC3b = this.add.sprite(600, 280, 'helmetSaints');
            }
          }
        }else{
          this.buttonNFC2a = this.add.sprite(600, 205, 'helmetPackers');
        } 
      }
      if(playoffRound == 4){
        //afc
        if(playoffConference == "AFC"){
          this.buttonAFC2a = this.add.sprite(355, 252, helmetHomeKey);
          this.buttonAFC2a.setScale(-1,1);
          this.stars1 = this.add.sprite(425, 252, 'starsRound4');
          helmetVisitor = 'content/helmetBuccaneers.png';
          helmetVisitorKey = 'helmetBuccaneers';
        }else{
          this.buttonAFC2a = this.add.sprite(355, 252, 'helmetChiefs');
          this.buttonAFC2a.setScale(-1,1);
          this.stars1 = this.add.sprite(425, 252, 'starsRound4');
        }
        //nfc
        if(playoffConference == "NFC"){
          this.buttonNFC2a = this.add.sprite(500, 252, helmetHomeKey);
          helmetVisitor = 'content/helmetChiefs.png';
          helmetVisitorKey = 'helmetChiefs';
        }else{
          this.buttonNFC2a = this.add.sprite(500, 252, 'helmetBuccaneers');
        } 
          
      }



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

        //this.buttonHomeMode = this.add.sprite(10,50,"buttonHomeMode");
        //this.buttonHomeMode.setOrigin(0,0);
        //this.buttonVisitorMode = this.add.sprite(10,200,"buttonVisitorMode");
        //this.buttonVisitorMode.setOrigin(0,0);
/*
      this.buttonSetHome = this.add.sprite(10,50,"buttonSetHome1");
      this.buttonSetHome.setOrigin(0,0);
      this.buttonSetHome.setInteractive();
      this.buttonSetHome.on("pointerover", function() {
        this.buttonSetHome.setTexture("buttonSetHome2"); // set the button texture to sprbuttonSetHomeHover
        //this.sfx.btnOver.play(); // play the button over sound
      }, this);
      this.buttonSetHome.on("pointerout", function() {
        this.setTexture("buttonSetHome1");
      });
      this.buttonSetHome.on("pointerdown", function() {
        this.buttonSetHome.setTexture("buttonSetHome2");
        //this.sfx.btnDown.play();
      }, this);
      this.buttonSetHome.on("pointerup", function() {
        this.sound.play('soundButton');
        this.buttonSetHome.setTexture("buttonSetHome1");
        selectingHome = true;
      }, this);

      this.buttonSetVisitor = this.add.sprite(10,200,"buttonSetVisitor1");
      this.buttonSetVisitor.setOrigin(0,0);
      this.buttonSetVisitor.setInteractive();
      this.buttonSetVisitor.on("pointerover", function() {
        this.buttonSetVisitor.setTexture("buttonSetVisitor2"); // set the button texture to sprbuttonSetVisitorHover
        //this.sfx.btnOver.play(); // play the button over sound
      }, this);
      this.buttonSetVisitor.on("pointerout", function() {
        this.setTexture("buttonSetVisitor1");
      });
      this.buttonSetVisitor.on("pointerdown", function() {
        this.buttonSetVisitor.setTexture("buttonSetVisitor2");
        //this.sfx.btnDown.play();
      }, this);
      this.buttonSetVisitor.on("pointerup", function() {
        this.sound.play('soundButton');
        this.buttonSetVisitor.setTexture("buttonSetVisitor1");
        selectingHome = false;
      }, this);
*/
      this.btnPlay = this.add.sprite(320,350,"buttonChampionship1");
      this.btnPlay.setOrigin(0,0);
        this.btnPlay.setInteractive();
        this.btnPlay.on("pointerover", function() {
          this.btnPlay.setTexture("buttonChampionship2"); // set the button texture to sprBtnPlayHover
          //this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.btnPlay.on("pointerout", function() {
          this.setTexture("buttonChampionship1");
        });
        this.btnPlay.on("pointerdown", function() {
          this.btnPlay.setTexture("buttonChampionship2");
          //this.sfx.btnDown.play();
        }, this);
        this.btnPlay.on("pointerup", function() {
          this.sound.play('soundButton');
          this.btnPlay.setTexture("buttonChampionship1");
          //playerGraphics = ['content/playerPackers.png','content/playerRaiders.png'];
          //this.scene.start("SceneTimeMenu");
          //changed for playoffs...
          if(playoffRound == 1){
            time = 300;
            difficulty = 0;
            fumbleChance = 0.75;
            fieldGoalAimSpeed = 5.0;
            if(playoffConference == "AFC"){
              if(player1Key != "keyChiefs"){
                playerGraphics[1] = 'content/playerChiefs.png';
                player2Key = "keyChiefs";
              }
              if(player1Key == "keyChiefs"){
                playerGraphics[1] = 'content/playerChargers.png';
                player2Key = "keyChargers";
                helmetVisitorKey = "helmetChargers";
              }             
            }else{
              if(player1Key != "keyPackers"){
                playerGraphics[1] = 'content/playerPackers.png';
                player2Key = "keyPackers";
              }
              if(player1Key == "keyPackers"){
                playerGraphics[1] = 'content/playerCardinals.png';
                player2Key = "keyCardinals";
                helmetVisitorKey = "helmetCardinals";
              }
            }
          }
          if(playoffRound == 2){
            time = 300;
            difficulty = 1;
            fumbleChance = 0.8;
            fieldGoalAimSpeed = 8.0;
            if(playoffConference == "AFC"){
              //playerGraphics[1] = 'content/playerBrowns.png';
              //player2Key = "keyBrowns";
              //2022...
              /*
              if(player1Key != "keyBrowns"){
                playerGraphics[1] = 'content/playerBrowns.png';
                player2Key = "keyBrowns";
              }
              if(player1Key == "keyBrowns"){
                playerGraphics[1] = 'content/playerSteelers.png';
                player2Key = "keySteelers";
                helmetVisitorKey = "helmetSteelers";
              } 
              */
              if(player1Key != "keyBengals"){
                playerGraphics[1] = 'content/playerBengals.png';
                player2Key = "keyBengals";
              }
              if(player1Key == "keyBengals"){
                playerGraphics[1] = 'content/playerSteelers.png';
                player2Key = "keySteelers";
                helmetVisitorKey = "helmetSteelers";
              }
            }else{
              playerGraphics[1] = 'content/playerRams.png';
              player2Key = "keyRams";
            }
          }
          if(playoffRound == 3){
            time = 300;
            difficulty = 2;
            fumbleChance = 0.9;
            fieldGoalAimSpeed = 10.0;
            if(playoffConference == "AFC"){
              if(player1Key != "keyBills"){
                playerGraphics[1] = 'content/playerBills.png';
                player2Key = "keyBills";
              }
              if(player1Key == "keyBills"){
                playerGraphics[1] = 'content/playerRaiders.png';
                player2Key = "keyRaiders";
                helmetVisitorKey = "helmetRaiders";
              }
            }else{
              if(player1Key != "keyBuccaneers"){
                playerGraphics[1] = 'content/playerBuccaneers.png';
                player2Key = "keyBuccaneers";
              }
              if(player1Key == "keyBuccaneers"){
                playerGraphics[1] = 'content/playerSaints.png';
                player2Key = "keySaints";
                helmetVisitorKey = "helmetSaints";
              }
            }
          }
          if(playoffRound == 4){
            time = 300;
            difficulty = 2.4;
            fumbleChance = 0.9;
            fieldGoalAimSpeed = 12.0;
            if(playoffConference == "AFC"){
              playerGraphics[1] = 'content/playerRams.png';
              player2Key = "keyRams";
              helmetVisitorKey = "helmetRams";
            }else{
              playerGraphics[1] = 'content/playerBengals.png';
              player2Key = "keyBengals";
              helmetVisitorKey = "helmetBengals";
            }
          }
          
            this.scene.start("SceneStadium");
            this.scene.start("ScenePlaybook");
            //start Poki...
            gameStart();
            startCommercialFirst();
        }, this);

        /*this.btnSelect2 = this.add.sprite(600,300,"buttonSelect1");
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
        */

  }


  update(){
    if(selectingHome){
      //this.buttonSetHome.visible = false;
      //this.buttonHomeMode.visible = true;
      //this.buttonVisitorMode.visible = false;
      //this.buttonSetVisitor.visible = true;
    }else{
      //this.buttonSetHome.visible = true;
      //this.buttonHomeMode.visible = false;
      //this.buttonVisitorMode.visible = true;
      //this.buttonSetVisitor.visible = false;
    }
    if(sound){
      this.btnSound.setTexture("buttonSound1");
    }else{
      this.btnSound.setTexture("buttonSound2");
    }
  }



}
