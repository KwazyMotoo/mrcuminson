class SceneTeamSelect extends Phaser.Scene {
    constructor() {
      super({ key: "SceneTeamSelect" });
    }
    preload() {
        //this.load.image('button', 'content/button.png');
        this.load.image('buttonSelect1', 'content/buttonSelect1.png');
        this.load.image('buttonSelect2', 'content/buttonSelect2.png');
        this.load.image('buttonChampionship1', 'content/buttonChampionship1.png');
        this.load.image('buttonChampionship2', 'content/buttonChampionship2.png');
        this.load.image('buttonHomeMode','content/buttonHomeMode.png');
        this.load.image('buttonVisitorMode','content/buttonVisitorMode.png');
        this.load.image('buttonSetHome1','content/buttonSetHome1.png');
        this.load.image('buttonSetHome2','content/buttonSetHome2.png');
        this.load.image('buttonSetVisitor1','content/buttonSetVisitor1.png');
        this.load.image('buttonSetVisitor2','content/buttonSetVisitor2.png');
        this.load.image('menuTeams','content/menuTeams.png');
        this.load.image('buttonGmLink1','content/buttonGmLink1.png');
        this.load.image('buttonGmLink2','content/buttonGmLink2.png');
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
        this.bg = this.add.image(0,0,'menuTeams');
        this.bg.setOrigin(0.0,0.0);

        //this.homeTeam = this.add.image(471,75,'helmetChiefs');
        //this.visitorTeam = this.add.image(595,75,'helmetNiners');
        this.homeTeam = this.add.image(475,75,'helmetChiefs');
        this.homeTeam.setScale(-1,1);
        this.visitorTeam = this.add.image(575,75,'helmetNiners');
        //this.visitorTeam.setScale(-1,1);

        
        //Helmets...
        this.buttonBrowns = this.add.sprite(250, 150, 'helmetBrowns');
        this.buttonBrowns.setInteractive();
        this.buttonBrowns.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBrowns.png';
            this.homeTeam.setTexture('helmetBrowns');
            helmetHome = 'content/helmetBrowns.png';
          }else{
            playerGraphics[1] = 'content/playerBrowns.png';
            this.visitorTeam.setTexture('helmetBrowns');
            helmetVisitor = 'content/helmetBrowns.png';
          }
        }, this);

        this.buttonSteelers = this.add.sprite(310, 150, 'helmetSteelers');
        this.buttonSteelers.setInteractive();
        this.buttonSteelers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSteelers.png';
            this.homeTeam.setTexture('helmetSteelers');
            helmetHome = 'content/helmetSteelers.png';
          }else{
            playerGraphics[1] = 'content/playerSteelers.png';
            this.visitorTeam.setTexture('helmetSteelers');
            helmetVisitor = 'content/helmetSteelers.png';
          }
        }, this);

        this.buttonBengals = this.add.sprite(370, 150, 'helmetBengals');
        this.buttonBengals.setInteractive();
        this.buttonBengals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBengals.png';
            this.homeTeam.setTexture('helmetBengals');
            helmetHome = 'content/helmetBengals.png';
          }else{
            playerGraphics[1] = 'content/playerBengals.png';
            this.visitorTeam.setTexture('helmetBengals');
            helmetVisitor = 'content/helmetBengals.png';
          }
        }, this);

        this.buttonRavens = this.add.sprite(430, 150, 'helmetRavens');
        this.buttonRavens.setInteractive();
        this.buttonRavens.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRavens.png';
            this.homeTeam.setTexture('helmetRavens');
            helmetHome = 'content/helmetRavens.png';
          }else{
            playerGraphics[1] = 'content/playerRavens.png';
            this.visitorTeam.setTexture('helmetRavens');
            helmetVisitor = 'content/helmetRavens.png';
          }
        }, this);

        this.buttonChargers = this.add.sprite(250, 225, 'helmetChargers');
        this.buttonChargers.setInteractive();
        this.buttonChargers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChargers.png';
            this.homeTeam.setTexture('helmetChargers');
            helmetHome = 'content/helmetChargers.png';
          }else{
            playerGraphics[1] = 'content/playerChargers.png';
            this.visitorTeam.setTexture('helmetChargers');
            helmetVisitor = 'content/helmetChargers.png';
          }
        }, this);

        this.buttonChiefs = this.add.sprite(310, 225, 'helmetChiefs');
        this.buttonChiefs.setInteractive();
        this.buttonChiefs.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChiefs.png';
            this.homeTeam.setTexture('helmetChiefs');
            helmetHome = 'content/helmetChiefs.png';
          }else{
            playerGraphics[1] = 'content/playerChiefs.png';
            this.visitorTeam.setTexture('helmetChiefs');
            helmetVisitor = 'content/helmetChiefs.png';
          }
        }, this);

        this.buttonBroncos = this.add.sprite(370, 225, 'helmetBroncos');
        this.buttonBroncos.setInteractive();
        this.buttonBroncos.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBroncos.png';
            this.homeTeam.setTexture('helmetBroncos');
            helmetHome = 'content/helmetBroncos.png';
          }else{
            playerGraphics[1] = 'content/playerBroncos.png';
            this.visitorTeam.setTexture('helmetBroncos');
            helmetVisitor = 'content/helmetBroncos.png';
          }
        }, this);

        this.buttonRaiders = this.add.sprite(430, 225, 'helmetRaiders');
        this.buttonRaiders.setInteractive();
        this.buttonRaiders.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRaiders.png';
            this.homeTeam.setTexture('helmetRaiders');
            helmetHome = 'content/helmetRaiders.png';
          }else{
            playerGraphics[1] = 'content/playerRaiders.png';
            this.visitorTeam.setTexture('helmetRaiders');
            helmetVisitor = 'content/helmetRaiders.png';
          }
        }, this);

        this.buttonColts = this.add.sprite(250, 300, 'helmetColts');
        this.buttonColts.setInteractive();
        this.buttonColts.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerColts.png';
            this.homeTeam.setTexture('helmetColts');
            helmetHome = 'content/helmetColts.png';
          }else{
            playerGraphics[1] = 'content/playerColts.png';
            this.visitorTeam.setTexture('helmetColts');
            helmetVisitor = 'content/helmetColts.png';
          }
        }, this);

        this.buttonTitans = this.add.sprite(310, 300, 'helmetTitans');
        this.buttonTitans.setInteractive();
        this.buttonTitans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTitans.png';
            this.homeTeam.setTexture('helmetTitans');
            helmetHome = 'content/helmetTitans.png';
          }else{
            playerGraphics[1] = 'content/playerTitans.png';
            this.visitorTeam.setTexture('helmetTitans');
            helmetVisitor = 'content/helmetTitans.png';
          }
        }, this);

        this.buttonTexans = this.add.sprite(370, 300, 'helmetTexans');
        this.buttonTexans.setInteractive();
        this.buttonTexans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTexans.png';
            this.homeTeam.setTexture('helmetTexans');
            helmetHome = 'content/helmetTexans.png';
          }else{
            playerGraphics[1] = 'content/playerTexans.png';
            this.visitorTeam.setTexture('helmetTexans');
            helmetVisitor = 'content/helmetTexans.png';
          }
        }, this);

        this.buttonJaguars = this.add.sprite(430, 300, 'helmetJaguars');
        this.buttonJaguars.setInteractive();
        this.buttonJaguars.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJaguars.png';
            this.homeTeam.setTexture('helmetJaguars');
            helmetHome = 'content/helmetJaguars.png';
          }else{
            playerGraphics[1] = 'content/playerJaguars.png';
            this.visitorTeam.setTexture('helmetJaguars');
            helmetVisitor = 'content/helmetJaguars.png';
          }
        }, this);

        this.buttonPatriots = this.add.sprite(250, 375, 'helmetPatriots');
        this.buttonPatriots.setInteractive();
        this.buttonPatriots.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPatriots.png';
            this.homeTeam.setTexture('helmetPatriots');
            helmetHome = 'content/helmetPatriots.png';
          }else{
            playerGraphics[1] = 'content/playerPatriots.png';
            this.visitorTeam.setTexture('helmetPatriots');
            helmetVisitor = 'content/helmetPatriots.png';
          }
        }, this);

        this.buttonBills = this.add.sprite(310, 375, 'helmetBills');
        this.buttonBills.setInteractive();
        this.buttonBills.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBills.png';
            this.homeTeam.setTexture('helmetBills');
            helmetHome = 'content/helmetBills.png';
          }else{
            playerGraphics[1] = 'content/playerBills.png';
            this.visitorTeam.setTexture('helmetBills');
            helmetVisitor = 'content/helmetBills.png';
          }
        }, this);

        this.buttonJets = this.add.sprite(370, 375, 'helmetJets');
        this.buttonJets.setInteractive();
        this.buttonJets.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJets.png';
            this.homeTeam.setTexture('helmetJets');
            helmetHome = 'content/helmetJets.png';
          }else{
            playerGraphics[1] = 'content/playerJets.png';
            this.visitorTeam.setTexture('helmetJets');
            helmetVisitor = 'content/helmetJets.png';
          }
        }, this);

        this.buttonDolphins = this.add.sprite(430, 375, 'helmetDolphins');
        this.buttonDolphins.setInteractive();
        this.buttonDolphins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerDolphins.png';
            this.homeTeam.setTexture('helmetDolphins');
            helmetHome = 'content/helmetDolphins.png';
          }else{
            playerGraphics[1] = 'content/playerDolphins.png';
            this.visitorTeam.setTexture('helmetDolphins');
            helmetVisitor = 'content/helmetDolphins.png';
          }
        }, this);

        //NFC
        this.buttonPackers = this.add.sprite(620, 150, 'helmetPackers');
        this.buttonPackers.setInteractive();
        this.buttonPackers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPackers.png';
            this.homeTeam.setTexture('helmetPackers');
            helmetHome = 'content/helmetPackers.png';
          }else{
            playerGraphics[1] = 'content/playerPackers.png';
            this.visitorTeam.setTexture('helmetPackers');
            helmetVisitor = 'content/helmetPackers.png';
          }
        }, this);

        this.buttonLions = this.add.sprite(680, 150, 'helmetLions');
        this.buttonLions.setInteractive();
        this.buttonLions.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerLions.png';
            this.homeTeam.setTexture('helmetLions');
            helmetHome = 'content/helmetLions.png';
          }else{
            playerGraphics[1] = 'content/playerLions.png';
            this.visitorTeam.setTexture('helmetLions');
            helmetVisitor = 'content/helmetLions.png';
          }
        }, this);

        this.buttonBears = this.add.sprite(740, 150, 'helmetBears');
        this.buttonBears.setInteractive();
        this.buttonBears.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBears.png';
            this.homeTeam.setTexture('helmetBears');
            helmetHome = 'content/helmetBears.png';
          }else{
            playerGraphics[1] = 'content/playerBears.png';
            this.visitorTeam.setTexture('helmetBears');
            helmetVisitor = 'content/helmetBears.png';
          }
        }, this);

        this.buttonVikings = this.add.sprite(800, 150, 'helmetVikings');
        this.buttonVikings.setInteractive();
        this.buttonVikings.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerVikings.png';
            this.homeTeam.setTexture('helmetVikings');
            helmetHome = 'content/helmetVikings.png';
          }else{
            playerGraphics[1] = 'content/playerVikings.png';
            this.visitorTeam.setTexture('helmetVikings');
            helmetVisitor = 'content/helmetVikings.png';
          }
        }, this);

        this.buttonGiants = this.add.sprite(620, 225, 'helmetGiants');
        this.buttonGiants.setInteractive();
        this.buttonGiants.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerGiants.png';
            this.homeTeam.setTexture('helmetGiants');
            helmetHome = 'content/helmetGiants.png';
          }else{
            playerGraphics[1] = 'content/playerGiants.png';
            this.visitorTeam.setTexture('helmetGiants');
            helmetVisitor = 'content/helmetGiants.png';
          }
        }, this);

        this.buttonEagles = this.add.sprite(680, 225, 'helmetEagles');
        this.buttonEagles.setInteractive();
        this.buttonEagles.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerEagles.png';
            this.homeTeam.setTexture('helmetEagles');
            helmetHome = 'content/helmetEagles.png';
          }else{
            playerGraphics[1] = 'content/playerEagles.png';
            this.visitorTeam.setTexture('helmetEagles');
            helmetVisitor = 'content/helmetEagles.png';
          }
        }, this);

        this.buttonCowboys = this.add.sprite(740, 225, 'helmetCowboys');
        this.buttonCowboys.setInteractive();
        this.buttonCowboys.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCowboys.png';
            this.homeTeam.setTexture('helmetCowboys');
            helmetHome = 'content/helmetCowboys.png';
          }else{
            playerGraphics[1] = 'content/playerCowboys.png';
            this.visitorTeam.setTexture('helmetCowboys');
            helmetVisitor = 'content/helmetCowboys.png';
          }
        }, this);

        this.buttonRedskins = this.add.sprite(800, 225, 'helmetRedskins');
        this.buttonRedskins.setInteractive();
        this.buttonRedskins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRedskins.png';
            this.homeTeam.setTexture('helmetRedskins');
            helmetHome = 'content/helmetRedskins.png';
          }else{
            playerGraphics[1] = 'content/playerRedskins.png';
            this.visitorTeam.setTexture('helmetRedskins');
            helmetVisitor = 'content/helmetRedskins.png';
          }
        }, this);

        this.buttonBuccaneers = this.add.sprite(620, 300, 'helmetBuccaneers');
        this.buttonBuccaneers.setInteractive();
        this.buttonBuccaneers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBuccaneers.png';
            this.homeTeam.setTexture('helmetBuccaneers');
            helmetHome = 'content/helmetBuccaneers.png';
          }else{
            playerGraphics[1] = 'content/playerBuccaneers.png';
            this.visitorTeam.setTexture('helmetBuccaneers');
            helmetVisitor = 'content/helmetBuccaneers.png';
          }
        }, this);

        this.buttonSaints = this.add.sprite(680, 300, 'helmetSaints');
        this.buttonSaints.setInteractive();
        this.buttonSaints.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSaints.png';
            this.homeTeam.setTexture('helmetSaints');
            helmetHome = 'content/helmetSaints.png';
          }else{
            playerGraphics[1] = 'content/playerSaints.png';
            this.visitorTeam.setTexture('helmetSaints');
            helmetVisitor = 'content/helmetSaints.png';
          }
        }, this);

        this.buttonFalcons = this.add.sprite(740, 300, 'helmetFalcons');
        this.buttonFalcons.setInteractive();
        this.buttonFalcons.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerFalcons.png';
            this.homeTeam.setTexture('helmetFalcons');
            helmetHome = 'content/helmetFalcons.png';
          }else{
            playerGraphics[1] = 'content/playerFalcons.png';
            this.visitorTeam.setTexture('helmetFalcons');
            helmetVisitor = 'content/helmetFalcons.png';
          }
        }, this);

        this.buttonPanthers = this.add.sprite(800, 300, 'helmetPanthers');
        this.buttonPanthers.setInteractive();
        this.buttonPanthers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPanthers.png';
            this.homeTeam.setTexture('helmetPanthers');
            helmetHome = 'content/helmetPanthers.png';
          }else{
            playerGraphics[1] = 'content/playerPanthers.png';
            this.visitorTeam.setTexture('helmetPanthers');
            helmetVisitor = 'content/helmetPanthers.png';
          }
        }, this);

        this.buttonNiners = this.add.sprite(620, 375, 'helmetNiners');
        this.buttonNiners.setInteractive();
        this.buttonNiners.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerNiners.png';
            this.homeTeam.setTexture('helmetNiners');
            helmetHome = 'content/helmetNiners.png';
          }else{
            playerGraphics[1] = 'content/playerNiners.png';
            this.visitorTeam.setTexture('helmetNiners');
            helmetVisitor = 'content/helmetNiners.png';
          }
        }, this);

        this.buttonSeahawks = this.add.sprite(680, 375, 'helmetSeahawks');
        this.buttonSeahawks.setInteractive();
        this.buttonSeahawks.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSeahawks.png';
            this.homeTeam.setTexture('helmetSeahawks');
            helmetHome = 'content/helmetSeahawks.png';
          }else{
            playerGraphics[1] = 'content/playerSeahawks.png';
            this.visitorTeam.setTexture('helmetSeahawks');
            helmetVisitor = 'content/helmetSeahawks.png';
          }
        }, this);

        this.buttonCardinals = this.add.sprite(740, 375, 'helmetCardinals');
        this.buttonCardinals.setInteractive();
        this.buttonCardinals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCardinals.png';
            this.homeTeam.setTexture('helmetCardinals');
            helmetHome = 'content/helmetCardinals.png';
          }else{
            playerGraphics[1] = 'content/playerCardinals.png';
            this.visitorTeam.setTexture('helmetCardinals');
            helmetVisitor = 'content/helmetCardinals.png';
          }
        }, this);

        this.buttonRams = this.add.sprite(800, 375, 'helmetRams');
        this.buttonRams.setInteractive();
        this.buttonRams.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRams.png';
            this.homeTeam.setTexture('helmetRams');
            helmetHome = 'content/helmetRams.png';
          }else{
            playerGraphics[1] = 'content/playerRams.png';
            this.visitorTeam.setTexture('helmetRams');
            helmetVisitor = 'content/helmetRams.png';
          }
        }, this);




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

          this.buttonHomeMode = this.add.sprite(10,50,"buttonHomeMode");
          this.buttonHomeMode.setOrigin(0,0);
          this.buttonVisitorMode = this.add.sprite(10,200,"buttonVisitorMode");
          this.buttonVisitorMode.setOrigin(0,0);

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

        this.btnPlay = this.add.sprite(10,350,"buttonChampionship1");
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
            this.scene.start("SceneTimeMenu");
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
        this.buttonSetHome.visible = false;
        this.buttonHomeMode.visible = true;
        this.buttonVisitorMode.visible = false;
        this.buttonSetVisitor.visible = true;
      }else{
        this.buttonSetHome.visible = true;
        this.buttonHomeMode.visible = false;
        this.buttonVisitorMode.visible = true;
        this.buttonSetVisitor.visible = false;
      }
      if(sound){
        this.btnSound.setTexture("buttonSound1");
      }else{
        this.btnSound.setTexture("buttonSound2");
      }
    }



  }
