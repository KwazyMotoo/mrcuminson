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
        //this.load.image('buttonVisitorMode','content/buttonVisitorMode.png');
        //this.load.image('buttonSetHome1','content/buttonSetHome1.png');
        //this.load.image('buttonSetHome2','content/buttonSetHome2.png');
        //this.load.image('buttonSetVisitor1','content/buttonSetVisitor1.png');
        //this.load.image('buttonSetVisitor2','content/buttonSetVisitor2.png');
        this.load.image('menuTeams','content/menuTeams.png');
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
      //2022...
      selectingHome = true;

        this.bg = this.add.image(0,0,'menuTeams');
        this.bg.setOrigin(0.0,0.0);

        //this.homeTeam = this.add.image(471,75,'helmetChiefs');
        //this.visitorTeam = this.add.image(595,75,'helmetNiners');
        //2022 helmetHomeKey
        this.homeTeam = this.add.image(475,75,helmetHomeKey);
        //this.homeTeam = this.add.image(475,75,'helmetChiefs');
        this.homeTeam.setScale(-1,1);
        //2022
        //this.visitorTeam = this.add.image(575,75,'helmetNiners');
        this.visitorTeam = this.add.image(575,75,helmetVisitorKey);
        //this.visitorTeam.setScale(-1,1);

        
        //Helmets...
        this.buttonBrowns = this.add.sprite(250, 150, 'helmetBrowns');
        this.buttonBrowns.setInteractive();
        this.buttonBrowns.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBrowns.png';
            player1Key = "keyBrowns";
            this.homeTeam.setTexture('helmetBrowns');
            helmetHome = 'content/helmetBrowns.png';
            helmetHomeKey = 'helmetBrowns';
          }else{
            playerGraphics[1] = 'content/playerBrowns.png';
            player2Key = "keyBrowns";
            this.visitorTeam.setTexture('helmetBrowns');
            helmetVisitor = 'content/helmetBrowns.png';
            helmetVisitorKey = 'helmetBrowns';
          }
        }, this);

        this.buttonSteelers = this.add.sprite(310, 150, 'helmetSteelers');
        this.buttonSteelers.setInteractive();
        this.buttonSteelers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSteelers.png';
            player1Key = "keySteelers";
            this.homeTeam.setTexture('helmetSteelers');
            helmetHome = 'content/helmetSteelers.png';
            helmetHomeKey = 'helmetSteelers';
          }else{
            playerGraphics[1] = 'content/playerSteelers.png';
            player2Key = "keySteelers";
            this.visitorTeam.setTexture('helmetSteelers');
            helmetVisitor = 'content/helmetSteelers.png';
            helmetVisitorKey = 'helmetSteelers';
          }
        }, this);

        this.buttonBengals = this.add.sprite(370, 150, 'helmetBengals');
        this.buttonBengals.setInteractive();
        this.buttonBengals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBengals.png';
            player1Key = "keyBengals";
            this.homeTeam.setTexture('helmetBengals');
            helmetHome = 'content/helmetBengals.png';
            helmetHomeKey = 'helmetBengals';
          }else{
            playerGraphics[1] = 'content/playerBengals.png';
            player2Key = "keyBengals";
            this.visitorTeam.setTexture('helmetBengals');
            helmetVisitor = 'content/helmetBengals.png';
            helmetVisitorKey = 'helmetBengals';
          }
        }, this);

        this.buttonRavens = this.add.sprite(430, 150, 'helmetRavens');
        this.buttonRavens.setInteractive();
        this.buttonRavens.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRavens.png';
            player1Key = "keyRavens";
            this.homeTeam.setTexture('helmetRavens');
            helmetHome = 'content/helmetRavens.png';
            helmetHomeKey = 'helmetRavens';
          }else{
            playerGraphics[1] = 'content/playerRavens.png';
            player2Key = "keyRavens";
            this.visitorTeam.setTexture('helmetRavens');
            helmetVisitor = 'content/helmetRavens.png';
            helmetVisitorKey = 'helmetRavens';
          }
        }, this);

        this.buttonChargers = this.add.sprite(250, 225, 'helmetChargers');
        this.buttonChargers.setInteractive();
        this.buttonChargers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChargers.png';
            player1Key = "keyChargers";
            this.homeTeam.setTexture('helmetChargers');
            helmetHome = 'content/helmetChargers.png';
            helmetHomeKey = 'helmetChargers';
          }else{
            playerGraphics[1] = 'content/playerChargers.png';
            player2Key = "keyChargers";
            this.visitorTeam.setTexture('helmetChargers');
            helmetVisitor = 'content/helmetChargers.png';
            helmetVisitorKey = 'helmetChargers';
          }
        }, this);

        this.buttonChiefs = this.add.sprite(310, 225, 'helmetChiefs');
        this.buttonChiefs.setInteractive();
        this.buttonChiefs.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerChiefs.png';
            player1Key = "keyChiefs";
            this.homeTeam.setTexture('helmetChiefs');
            helmetHome = 'content/helmetChiefs.png';
            helmetHomeKey = 'helmetChiefs';
          }else{
            playerGraphics[1] = 'content/playerChiefs.png';
            player2Key = "keyChiefs";
            this.visitorTeam.setTexture('helmetChiefs');
            helmetVisitor = 'content/helmetChiefs.png';
            helmetVisitorKey = 'helmetChiefs';
          }
        }, this);

        this.buttonBroncos = this.add.sprite(370, 225, 'helmetBroncos');
        this.buttonBroncos.setInteractive();
        this.buttonBroncos.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBroncos.png';
            player1Key = "keyBroncos";
            this.homeTeam.setTexture('helmetBroncos');
            helmetHome = 'content/helmetBroncos.png';
            helmetHomeKey = 'helmetBroncos';
          }else{
            playerGraphics[1] = 'content/playerBroncos.png';
            player2Key = "keyBroncos";
            this.visitorTeam.setTexture('helmetBroncos');
            helmetVisitor = 'content/helmetBroncos.png';
            helmetVisitorKey = 'helmetBroncos';
          }
        }, this);

        this.buttonRaiders = this.add.sprite(430, 225, 'helmetRaiders');
        this.buttonRaiders.setInteractive();
        this.buttonRaiders.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRaiders.png';
            player1Key = "keyRaiders";
            this.homeTeam.setTexture('helmetRaiders');
            helmetHome = 'content/helmetRaiders.png';
            helmetHomeKey = 'helmetRaiders';
          }else{
            playerGraphics[1] = 'content/playerRaiders.png';
            player2Key = "keyRaiders";
            this.visitorTeam.setTexture('helmetRaiders');
            helmetVisitor = 'content/helmetRaiders.png';
            helmetVisitorKey = 'helmetRaiders';
          }
        }, this);

        this.buttonColts = this.add.sprite(250, 300, 'helmetColts');
        this.buttonColts.setInteractive();
        this.buttonColts.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerColts.png';
            player1Key = "keyColts";
            this.homeTeam.setTexture('helmetColts');
            helmetHome = 'content/helmetColts.png';
            helmetHomeKey = 'helmetColts';
          }else{
            playerGraphics[1] = 'content/playerColts.png';
            player2Key = "keyColts";
            this.visitorTeam.setTexture('helmetColts');
            helmetVisitor = 'content/helmetColts.png';
            helmetVisitorKey = 'helmetColts';
          }
        }, this);

        this.buttonTitans = this.add.sprite(310, 300, 'helmetTitans');
        this.buttonTitans.setInteractive();
        this.buttonTitans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTitans.png';
            player1Key = "keyTitans";
            this.homeTeam.setTexture('helmetTitans');
            helmetHome = 'content/helmetTitans.png';
            helmetHomeKey = 'helmetTitans';
          }else{
            playerGraphics[1] = 'content/playerTitans.png';
            player2Key = "keyTitans";
            this.visitorTeam.setTexture('helmetTitans');
            helmetVisitor = 'content/helmetTitans.png';
            helmetVisitorKey = 'helmetTitans';
          }
        }, this);

        this.buttonTexans = this.add.sprite(370, 300, 'helmetTexans');
        this.buttonTexans.setInteractive();
        this.buttonTexans.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerTexans.png';
            player1Key = "keyTexans";
            this.homeTeam.setTexture('helmetTexans');
            helmetHome = 'content/helmetTexans.png';
            helmetHomeKey = 'helmetTexans';
          }else{
            playerGraphics[1] = 'content/playerTexans.png';
            player2Key = "keyTexans";
            this.visitorTeam.setTexture('helmetTexans');
            helmetVisitor = 'content/helmetTexans.png';
            helmetVisitorKey = 'helmetTexans';
          }
        }, this);

        this.buttonJaguars = this.add.sprite(430, 300, 'helmetJaguars');
        this.buttonJaguars.setInteractive();
        this.buttonJaguars.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJaguars.png';
            player1Key = "keyJaguars";
            this.homeTeam.setTexture('helmetJaguars');
            helmetHome = 'content/helmetJaguars.png';
            helmetHomeKey = 'helmetJaguars';
          }else{
            playerGraphics[1] = 'content/playerJaguars.png';
            player2Key = "keyJaguars";
            this.visitorTeam.setTexture('helmetJaguars');
            helmetVisitor = 'content/helmetJaguars.png';
            helmetVisitorKey = 'helmetJaguars';
          }
        }, this);

        this.buttonPatriots = this.add.sprite(250, 375, 'helmetPatriots');
        this.buttonPatriots.setInteractive();
        this.buttonPatriots.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPatriots.png';
            player1Key = "keyPatriots";
            this.homeTeam.setTexture('helmetPatriots');
            helmetHome = 'content/helmetPatriots.png';
            helmetHomeKey = 'helmetPatriots';
          }else{
            playerGraphics[1] = 'content/playerPatriots.png';
            player2Key = "keyPatriots";
            this.visitorTeam.setTexture('helmetPatriots');
            helmetVisitor = 'content/helmetPatriots.png';
            helmetVisitorKey = 'helmetPatriots';
          }
        }, this);

        this.buttonBills = this.add.sprite(310, 375, 'helmetBills');
        this.buttonBills.setInteractive();
        this.buttonBills.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBills.png';
            player1Key = "keyBills";
            this.homeTeam.setTexture('helmetBills');
            helmetHome = 'content/helmetBills.png';
            helmetHomeKey = 'helmetBills';
          }else{
            playerGraphics[1] = 'content/playerBills.png';
            player2Key = "keyBills";
            this.visitorTeam.setTexture('helmetBills');
            helmetVisitor = 'content/helmetBills.png';
            helmetVisitorKey = 'helmetBills';
          }
        }, this);

        this.buttonJets = this.add.sprite(370, 375, 'helmetJets');
        this.buttonJets.setInteractive();
        this.buttonJets.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerJets.png';
            player1Key = "keyJets";
            this.homeTeam.setTexture('helmetJets');
            helmetHome = 'content/helmetJets.png';
            helmetHomeKey = 'helmetJets';
          }else{
            playerGraphics[1] = 'content/playerJets.png';
            player2Key = "keyJets";
            this.visitorTeam.setTexture('helmetJets');
            helmetVisitor = 'content/helmetJets.png';
            helmetVisitorKey = 'helmetJets';
          }
        }, this);

        this.buttonDolphins = this.add.sprite(430, 375, 'helmetDolphins');
        this.buttonDolphins.setInteractive();
        this.buttonDolphins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerDolphins.png';
            player1Key = "keyDolphins";
            this.homeTeam.setTexture('helmetDolphins');
            helmetHome = 'content/helmetDolphins.png';
            helmetHomeKey = 'helmetDolphins';
          }else{
            playerGraphics[1] = 'content/playerDolphins.png';
            player2Key = "keyDolphins";
            this.visitorTeam.setTexture('helmetDolphins');
            helmetVisitor = 'content/helmetDolphins.png';
            helmetVisitorKey = 'helmetDolphins';
          }
        }, this);

        //NFC
        this.buttonPackers = this.add.sprite(620, 150, 'helmetPackers');
        this.buttonPackers.setInteractive();
        this.buttonPackers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPackers.png';
            player1Key = "keyPackers";
            this.homeTeam.setTexture('helmetPackers');
            helmetHome = 'content/helmetPackers.png';
            helmetHomeKey = 'helmetPackers';
          }else{
            playerGraphics[1] = 'content/playerPackers.png';
            player2Key = "keyPackers";
            this.visitorTeam.setTexture('helmetPackers');
            helmetVisitor = 'content/helmetPackers.png';
            helmetVisitorKey = 'helmetPackers';
          }
        }, this);

        this.buttonLions = this.add.sprite(680, 150, 'helmetLions');
        this.buttonLions.setInteractive();
        this.buttonLions.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerLions.png';
            player1Key = "keyLions";
            this.homeTeam.setTexture('helmetLions');
            helmetHome = 'content/helmetLions.png';
            helmetHomeKey = 'helmetLions';
          }else{
            playerGraphics[1] = 'content/playerLions.png';
            player2Key = "keyLions";
            this.visitorTeam.setTexture('helmetLions');
            helmetVisitor = 'content/helmetLions.png';
            helmetVisitorKey = 'helmetLions';
          }
        }, this);

        this.buttonBears = this.add.sprite(740, 150, 'helmetBears');
        this.buttonBears.setInteractive();
        this.buttonBears.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBears.png';
            player1Key = "keyBears";
            this.homeTeam.setTexture('helmetBears');
            helmetHome = 'content/helmetBears.png';
            helmetHomeKey = 'helmetBears';
          }else{
            playerGraphics[1] = 'content/playerBears.png';
            player2Key = "keyBears";
            this.visitorTeam.setTexture('helmetBears');
            helmetVisitor = 'content/helmetBears.png';
            helmetVisitorKey = 'helmetBears';
          }
        }, this);

        this.buttonVikings = this.add.sprite(800, 150, 'helmetVikings');
        this.buttonVikings.setInteractive();
        this.buttonVikings.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerVikings.png';
            player1Key = "keyVikings";
            this.homeTeam.setTexture('helmetVikings');
            helmetHome = 'content/helmetVikings.png';
            helmetHomeKey = 'helmetVikings';
          }else{
            playerGraphics[1] = 'content/playerVikings.png';
            player2Key = "keyVikings";
            this.visitorTeam.setTexture('helmetVikings');
            helmetVisitor = 'content/helmetVikings.png';
            helmetVisitorKey = 'helmetVikings';
          }
        }, this);

        this.buttonGiants = this.add.sprite(620, 225, 'helmetGiants');
        this.buttonGiants.setInteractive();
        this.buttonGiants.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerGiants.png';
            player1Key = "keyGiants";
            this.homeTeam.setTexture('helmetGiants');
            helmetHome = 'content/helmetGiants.png';
            helmetHomeKey = 'helmetGiants';
          }else{
            playerGraphics[1] = 'content/playerGiants.png';
            player2Key = "keyGiants";
            this.visitorTeam.setTexture('helmetGiants');
            helmetVisitor = 'content/helmetGiants.png';
            helmetVisitorKey = 'helmetGiants';
          }
        }, this);

        this.buttonEagles = this.add.sprite(680, 225, 'helmetEagles');
        this.buttonEagles.setInteractive();
        this.buttonEagles.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerEagles.png';
            player1Key = "keyEagles";
            this.homeTeam.setTexture('helmetEagles');
            helmetHome = 'content/helmetEagles.png';
            helmetHomeKey = 'helmetEagles';
          }else{
            playerGraphics[1] = 'content/playerEagles.png';
            player2Key = "keyEagles";
            this.visitorTeam.setTexture('helmetEagles');
            helmetVisitor = 'content/helmetEagles.png';
            helmetVisitorKey = 'helmetEagles';
          }
        }, this);

        this.buttonCowboys = this.add.sprite(740, 225, 'helmetCowboys');
        this.buttonCowboys.setInteractive();
        this.buttonCowboys.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCowboys.png';
            player1Key = "keyCowboys";
            this.homeTeam.setTexture('helmetCowboys');
            helmetHome = 'content/helmetCowboys.png';
            helmetHomeKey = 'helmetCowboys';
          }else{
            playerGraphics[1] = 'content/playerCowboys.png';
            player2Key = "keyCowboys";
            this.visitorTeam.setTexture('helmetCowboys');
            helmetVisitor = 'content/helmetCowboys.png';
            helmetVisitorKey = 'helmetCowboys';
          }
        }, this);

        this.buttonRedskins = this.add.sprite(800, 225, 'helmetRedskins');
        this.buttonRedskins.setInteractive();
        this.buttonRedskins.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRedskins.png';
            player1Key = "keyRedskins";
            this.homeTeam.setTexture('helmetRedskins');
            helmetHome = 'content/helmetRedskins.png';
            helmetHomeKey = 'helmetRedskins';
          }else{
            playerGraphics[1] = 'content/playerRedskins.png';
            player2Key = "keyRedskins";
            this.visitorTeam.setTexture('helmetRedskins');
            helmetVisitor = 'content/helmetRedskins.png';
            helmetVisitorKey = 'helmetRedskins';
          }
        }, this);

        this.buttonBuccaneers = this.add.sprite(620, 300, 'helmetBuccaneers');
        this.buttonBuccaneers.setInteractive();
        this.buttonBuccaneers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerBuccaneers.png';
            player1Key = "keyBuccaneers";
            this.homeTeam.setTexture('helmetBuccaneers');
            helmetHome = 'content/helmetBuccaneers.png';
            helmetHomeKey = 'helmetBuccaneers';
          }else{
            playerGraphics[1] = 'content/playerBuccaneers.png';
            player2Key = "keyBuccaneers";
            this.visitorTeam.setTexture('helmetBuccaneers');
            helmetVisitor = 'content/helmetBuccaneers.png';
            helmetVisitorKey = 'helmetBuccaneers';
          }
        }, this);

        this.buttonSaints = this.add.sprite(680, 300, 'helmetSaints');
        this.buttonSaints.setInteractive();
        this.buttonSaints.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSaints.png';
            player1Key = "keySaints";
            this.homeTeam.setTexture('helmetSaints');
            helmetHome = 'content/helmetSaints.png';
            helmetHomeKey = 'helmetSaints';
          }else{
            playerGraphics[1] = 'content/playerSaints.png';
            player2Key = "keySaints";
            this.visitorTeam.setTexture('helmetSaints');
            helmetVisitor = 'content/helmetSaints.png';
            helmetVisitorKey = 'helmetSaints';
          }
        }, this);

        this.buttonFalcons = this.add.sprite(740, 300, 'helmetFalcons');
        this.buttonFalcons.setInteractive();
        this.buttonFalcons.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerFalcons.png';
            player1Key = "keyFalcons";
            this.homeTeam.setTexture('helmetFalcons');
            helmetHome = 'content/helmetFalcons.png';
            helmetHomeKey = 'helmetFaclcons';
          }else{
            playerGraphics[1] = 'content/playerFalcons.png';
            player2Key = "keyFalcons";
            this.visitorTeam.setTexture('helmetFalcons');
            helmetVisitor = 'content/helmetFalcons.png';
            helmetVisitorKey = 'helmetFaclcons';
          }
        }, this);

        this.buttonPanthers = this.add.sprite(800, 300, 'helmetPanthers');
        this.buttonPanthers.setInteractive();
        this.buttonPanthers.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerPanthers.png';
            player1Key = "keyPanthers";
            this.homeTeam.setTexture('helmetPanthers');
            helmetHome = 'content/helmetPanthers.png';
            helmetHomeKey = 'helmetPanthers';
          }else{
            playerGraphics[1] = 'content/playerPanthers.png';
            player2Key = "keyPanthers";
            this.visitorTeam.setTexture('helmetPanthers');
            helmetVisitor = 'content/helmetPanthers.png';
            helmetVisitorKey = 'helmetPanthers';
          }
        }, this);

        this.buttonNiners = this.add.sprite(620, 375, 'helmetNiners');
        this.buttonNiners.setInteractive();
        this.buttonNiners.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerNiners.png';
            player1Key = "keyNiners";
            this.homeTeam.setTexture('helmetNiners');
            helmetHome = 'content/helmetNiners.png';
            helmetHomeKey = 'helmetNiners';
          }else{
            playerGraphics[1] = 'content/playerNiners.png';
            player2Key = "keyNiners";
            this.visitorTeam.setTexture('helmetNiners');
            helmetVisitor = 'content/helmetNiners.png';
            helmetVisitorKey = 'helmetNiners';
          }
        }, this);

        this.buttonSeahawks = this.add.sprite(680, 375, 'helmetSeahawks');
        this.buttonSeahawks.setInteractive();
        this.buttonSeahawks.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerSeahawks.png';
            player1Key = "keySeahawks";
            this.homeTeam.setTexture('helmetSeahawks');
            helmetHome = 'content/helmetSeahawks.png';
            helmetHomeKey = 'helmetSeahawks';
          }else{
            playerGraphics[1] = 'content/playerSeahawks.png';
            player2Key = "keySeahawks";
            this.visitorTeam.setTexture('helmetSeahawks');
            helmetVisitor = 'content/helmetSeahawks.png';
            helmetVisitorKey = 'helmetSeahawks';
          }
        }, this);

        this.buttonCardinals = this.add.sprite(740, 375, 'helmetCardinals');
        this.buttonCardinals.setInteractive();
        this.buttonCardinals.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerCardinals.png';
            player1Key = "keyCardinals";
            this.homeTeam.setTexture('helmetCardinals');
            helmetHome = 'content/helmetCardinals.png';
            helmetHomeKey = 'helmetCardinals';
          }else{
            playerGraphics[1] = 'content/playerCardinals.png';
            player2Key = "keyCardinals";
            this.visitorTeam.setTexture('helmetCardinals');
            helmetVisitor = 'content/helmetCardinals.png';
            helmetVisitorKey = 'helmetCardinals';
          }
        }, this);

        this.buttonRams = this.add.sprite(800, 375, 'helmetRams');
        this.buttonRams.setInteractive();
        this.buttonRams.on("pointerup", function() {
          if(selectingHome){
            playerGraphics[0] = 'content/playerRams.png';
            player1Key = "keyRams";
            this.homeTeam.setTexture('helmetRams');
            helmetHome = 'content/helmetRams.png';
            helmetHomeKey = 'helmetRams';
          }else{
            playerGraphics[1] = 'content/playerRams.png';
            player2Key = "keyRams";
            this.visitorTeam.setTexture('helmetRams');
            helmetVisitor = 'content/helmetRams.png';
            helmetVisitorKey = 'helmetRams';
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

          this.buttonHomeMode = this.add.sprite(10,50,"buttonHomeMode");
          this.buttonHomeMode.setOrigin(0,0);
          //this.buttonVisitorMode = this.add.sprite(10,200,"buttonVisitorMode");
          //this.buttonVisitorMode.setOrigin(0,0);

        /*this.buttonSetHome = this.add.sprite(10,50,"buttonSetHome1");
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
        */

        /*
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
            //this.scene.start("SceneTimeMenu");
            //2022...
            this.scene.start("SceneTeamSelect2");
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
        this.buttonHomeMode.visible = true;
        //this.buttonVisitorMode.visible = false;
        //this.buttonSetVisitor.visible = true;
      }else{
        //this.buttonSetHome.visible = true;
        this.buttonHomeMode.visible = false;
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
