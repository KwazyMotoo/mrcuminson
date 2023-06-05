class ScenePlaybook extends Phaser.Scene {
    constructor() {
      super({ key: "ScenePlaybook" });
    }
    preload() {
        //this.load.image('buttonReturnLt', 'content/buttonReturnLt.png');
        this.load.image('bgCrowd', 'content/bgCrowd.png');
        this.load.image('bigHittie','content/bigHittie.png');
        this.load.image('bigHitter','content/big_hit.png');
        this.load.image('bigHitText', 'content/bigHitText.png');
        this.load.image('button1', 'content/playbookButton1.png');
        this.load.image('button2', 'content/playbookButton2.png');
        this.load.image('buttonInstructions1','content/buttonInstructions1.png');
        this.load.image('buttonInstructions2','content/buttonInstructions2.png');
        this.load.image('buttonKick1', 'content/buttonKick1.png');
        this.load.image('buttonKick2', 'content/buttonKick2.png');
        this.load.image('buttonBack','content/buttonBack.png');
        //this.load.image('buttonRedZone', 'content/buttonRedZone.png');
        this.load.spritesheet('buttonRedZone', 'content/buttonRedZone.png', { frameWidth: 200, frameHeight: 30 });
        this.load.spritesheet('buttonSpecials', 'content/buttonSpecials.png', { frameWidth: 200, frameHeight: 30 });
        this.load.image('conversionGoodMC','content/conversionGoodMC.png');
        this.load.image('conversionNoGoodMC','content/conversionNoGoodMC.png');
        this.load.image('fumbleBall', 'content/fumbleBall.png');
        this.load.image('fumbleBg','content/fumbleBg.png');
        this.load.image('fumblePlayer','content/fumblePlayer.png');
        this.load.image('goodD','content/goodD.png');
        this.load.image('goodDFootball', 'content/footballGoodD.png');
        this.load.image('goodDFootball2', 'content/footballGoodD.png');
        this.load.image('goodDText', 'content/goodDText.png');
        this.load.image('instructions','content/instructions.png');
        this.load.image('interception', 'content/interception.png');
        this.load.image('interceptionText','content/interceptionText.png');
        //this.load.image('mainMenuBg','content/mainMenuBg.png');
        //this.load.image('playbookBg','content/playbookBg.png');
        //this.load.image('playbookBgOffense','content/playbookBgOffense.png');
        this.load.image('playbookBgOffenseFormations','content/playbookBgOffenseFormations.png');
        this.load.image('playbookBgOffensePlaysSplit','content/playbookBgOffensePlaysSplit.png');
        this.load.image('playbookBgOffensePlaysI','content/playbookBgOffensePlaysI.png');
        this.load.image('playbookBgOffensePlaysShotgun','content/playbookBgOffensePlaysShotgun.png');
        this.load.image('playbookBgOffensePlaysBunch','content/playbookBgOffensePlaysBunch.png');
        this.load.image('playbookBgOffensePlaysAce','content/playbookBgOffensePlaysAce.png');
        this.load.image('playbookBgOffensePlaysEmpty','content/playbookBgOffensePlaysEmpty.png');
        this.load.image('playbookBgDefense','content/playbookBgDefense.png');
        this.load.image('playbookBgDefenseCov','content/playbookBgDefenseCov.png');
        this.load.image('playbookBgSpecialTeams','content/playbookBgSpecialTeams.png');
        this.load.image('playbookBgPAT','content/playbookBgPAT.png');
        this.load.image('playbookBgKickOff', 'content/playbookBgKickOff.png');
        this.load.image('playbookBgRedZone','content/playbookRedZoneOffense.png');
        this.load.image('playbookBgSpecials','content/playbookSpecialsOffense.png');
        this.load.image('safetyMC', 'content/safetyMC.png');
        this.load.image('tdMC','content/touchdownMCBg.png');
        this.load.image('tdMCTouchdown','content/tdMCTouchdown.png');
        this.load.image('scoreboardMask', 'content/scoreboardMask.png');
        this.load.image('cheerleader','content/cheerleader.png');
        this.load.image('shield', 'content/shield2020.png');
        this.load.image('star', 'content/star.png');
        this.load.image('fgBad', 'content/fgBadMC.png');
        this.load.image('fgGood', 'content/fgGoodMC.png');
        this.load.spritesheet('ballMC', 'content/ball.png', { frameWidth: 60, frameHeight: 60 });
        this.load.image('triangle','content/triangle.png');
        this.load.image('trianglePath', 'content/trianglePath.png');

        this.gradientLineX = 0;
        this.alpha = 0;
        this.graphics;
        this.graphics2;

        this.buttonBlink = false;
    }
    create() {

      
    this.graphics = this.add.graphics();
    this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha)
    this.graphics.lineBetween(200, this.gradientLineX, 800, 0);

    this.graphics2 = this.add.graphics();
    this.graphics2.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha)
    this.graphics2.lineBetween(200, this.gradientLineX, 800, 0);




        this.counter = 0;
        this.counterBoomerange = 20;
        this.counterBounceTime = 30;
        this.counterBounce = 3;
        this.counterMiddle = 0;


        //this.bg = this.add.image(0,0,'playbookBg');
        //this.bg.setOrigin(0.0,0.0);
        this.bigHittie = this.add.image(533,330, 'bigHittie');
        this.bigHitter = this.add.image(360,300, 'bigHitter');
        this.bigHitText = this.add.image(533,0, 'bigHitText');
        this.fumbleBall = this.add.image(600,0, 'fumbleBall');
        this.fumbleBg = this.add.image(0,0, 'fumbleBg');
        this.fumbleBg.setOrigin(0,0);
        this.fumblePlayer = this.add.image(0,400,'fumblePlayer');
        this.fumblePlayer.scaleX = -1;
        this.fumblePlayer2 = this.add.image(800,100, 'fumblePlayer');
        this.bgSpecialTeams = this.add.image(0,0, 'playbookBgSpecialTeams');
        this.bgSpecialTeams.setOrigin(0,0);
        this.specialTeamsPlaybook = this.add.container(0, 0);
        this.bgKickOffPlaybook = this.add.image(0,0, 'playbookBgKickOff');
        this.bgKickOffPlaybook.setOrigin(0,0);
        this.kickOffPlaybook = this.add.container(0,0);
        //this.specialTeamsPlaybook.add([this.bg]);
        this.bgOffenseFormations = this.add.image(0,0,'playbookBgOffenseFormations');
        this.bgOffenseFormations.setOrigin(0,0);
        this.bgOffensePlaysI = this.add.image(0,0,'playbookBgOffensePlaysI');
        this.bgOffensePlaysI.setOrigin(0,0);
        this.bgOffensePlaysSplit = this.add.image(0,0,'playbookBgOffensePlaysSplit');
        this.bgOffensePlaysSplit.setOrigin(0,0);
        this.bgOffensePlaysShotgun = this.add.image(0,0,'playbookBgOffensePlaysShotgun');
        this.bgOffensePlaysShotgun.setOrigin(0,0);
        this.bgOffensePlaysBunch  = this.add.image(0,0, 'playbookBgOffensePlaysBunch');
        this.bgOffensePlaysBunch.setOrigin(0,0);
        this.bgOffensePlaysAce  = this.add.image(0,0, 'playbookBgOffensePlaysAce');
        this.bgOffensePlaysAce.setOrigin(0,0);
        this.bgOffensePlaysEmpty  = this.add.image(0,0, 'playbookBgOffensePlaysEmpty');
        this.bgOffensePlaysEmpty.setOrigin(0,0);
        this.bgOffensePlaysRedZone = this.add.image(0,0,'playbookBgRedZone');
        this.bgOffensePlaysRedZone.setOrigin(0,0);
        this.bgOffensePlaysSpecials = this.add.image(0,0,'playbookBgSpecials');
        this.bgOffensePlaysSpecials.setOrigin(0,0);
        this.offensivePlaybook = this.add.container(0,0);
        //this.offensivePlaybook.add([this.bg]);
        this.bgDefense = this.add.image(0,0,'playbookBgDefense');
        this.bgDefense.setOrigin(0,0);
        this.bgDefenseCov = this.add.image(0,0,'playbookBgDefenseCov');
        this.bgDefenseCov.setOrigin(0,0);
        this.defensivePlaybook = this.add.container(0,0);
        //this.defensivePlaybook.add([this.bg]);
        this.bgCrowd = this.add.image(0,0, 'bgCrowd');
        this.bgCrowd.setOrigin(0,0);
        this.bgCrowd2 = this.add.image(0,0, 'bgCrowd');
        this.bgCrowd2.setOrigin(0,0);
        this.bgCrowd3 = this.add.image(0,0, 'bgCrowd');
        this.bgCrowd3.setOrigin(0,0);
        this.bgTD = this.add.image(0,0,'tdMC');
        this.bgTD.setOrigin(0,0);
        this.bgTD2 = this.add.image(0,0,'tdMC');
        this.bgTD2.setOrigin(0,0);
        this.goodD = this.add.image(533,240, 'goodD');
        this.goodD.setOrigin(0,0);
        this.goodDFootball = this.add.image(800,200, 'goodDFootball');
        this.goodDFootball2 = this.add.image(803, 180, 'goodDFootball2');
        this.goodDText = this.add.image(0,0, 'goodDText');
        this.goodDText.setOrigin(0,0);
        this.interception = this.add.image(533,240, 'interception');
        this.interception.setOrigin(0,0);
        this.interceptionText = this.add.image(0,0, 'interceptionText');
        this.interceptionText.setOrigin(0,0);
        this.tdMCTouchdown = this.add.image(1000,200, 'tdMCTouchdown');
        this.conversionGoodMC = this.add.image(1000,200, 'conversionGoodMC');
        this.conversionNoGoodMC = this.add.image(0,0, 'conversionNoGoodMC');
        this.conversionNoGoodMC.setOrigin(0,0);
        this.safetyMC = this.add.image(0,0, 'safetyMC');
        this.safetyMC.setOrigin(0,0);
        this.star = this.add.image(300,20, 'star');
        this.cheerleader1 = this.add.sprite(403,200, 'cheerleader');
        this.cheerleader2 = this.add.sprite(663,200, 'cheerleader');
        this.cheerleader3 = this.add.sprite(403,200, 'cheerleader');
        this.cheerleader4 = this.add.sprite(663,200, 'cheerleader');
        this.shield = this.add.image(533,200, 'shield');
        this.shield.setScale(0.7,0.7);
        this.scoreboardMask = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask.setOrigin(0,0);
        this.scoreboardMask2 = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask2.setOrigin(0,0);
        this.scoreboardMask3 = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask3.setOrigin(0,0);
        this.scoreboardMask4 = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask4.setOrigin(0,0);
        this.scoreboardMask5 = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask5.setOrigin(0,0);
        this.scoreboardMask6 = this.add.sprite(0,0, 'scoreboardMask');
        this.scoreboardMask6.setOrigin(0,0);
        this.instructions = this.add.image(0,0, 'instructions');
        this.instructions.setOrigin(0,0);
        this.instructions.visible = false;
        
        //this.scoreboardMask6 = this.add.sprite(0,0, 'scoreboardMask');
        //this.scoreboardMask6.setOrigin(0,0);
        this.containerMC = this.add.container(0,0);
        this.fgBadMC = this.add.image(0,0,'fgBad');
        this.fgBadMC.setOrigin(0,0);
        this.fgGoodMC = this.add.image(0,0,'fgGood');
        this.fgGoodMC.setOrigin(0,0);
        this.triangle = this.add.image(433,60, 'triangle');
        this.trianglePath = this.add.image(533,60, 'trianglePath');
        this.ball = this.add.sprite(533,480, 'ballMC').setScale(3.0);
        this.anims.create({
          key: "ballFlip2",
          frames: this.anims.generateFrameNumbers("ballMC"),
          frameRate: 24,
          repeat: -1
        });
        this.anims.create({
          key: "buttonRedZoneBlink",
          frames: this.anims.generateFrameNumbers("buttonRedZone"),
          frameRate: 5,
          repeat: -1
        });
        this.containerFgBad = this.add.container(0,0);
        this.containerFgGood = this.add.container(0,0);
        this.bgPAT = this.add.image(0,0, 'playbookBgPAT');
        this.bgPAT.setOrigin(0,0);
        this.containerPAT = this.add.container(0,0);
        this.containerSafety = this.add.container(0,0);
        this.containerBigHit = this.add.container(0,0);
        this.containerFumble = this.add.container(0,0);
        this.containerGoodD = this.add.container(0,0);
        this.containerInterception = this.add.container(0,0);
        this.containerConversionGood = this.add.container(0,0);
        this.containerConversionNoGood = this.add.container(0,0);

        //button instructions
        this.buttonInstructions = this.add.sprite(3,175,"buttonInstructions1");
        this.buttonInstructions.setOrigin(0,0);
        this.buttonInstructions.setInteractive();
        this.buttonInstructions.on("pointerover", function() { this.buttonInstructions.setTexture("buttonInstructions2");}, this);
        this.buttonInstructions.on("pointerout", function() {  this.buttonInstructions.setTexture("buttonInstructions1");}, this);
        this.buttonInstructions.on("pointerdown", function() {  this.buttonInstructions.setTexture("buttonInstructions2"); }, this);
        this.buttonInstructions.on("pointerup", function() {
          if(!ballSnapped && !inPlay && !openInstructions){
              openInstructions = true;
          }else{
              openInstructions = false;
          }
        }, this);
        //this.buttonInstructions.scaleX = 0.6;
        //this.buttonInstructions.scaleY = 0.6;


        //special Teams kickReturn...
        this.btnReturnLeft = this.add.sprite(240,150,"button1");
        this.btnReturnLeft.setOrigin(0,0);
        this.btnReturnLeft.setInteractive();
        this.btnReturnLeft.on("pointerover", function() { this.btnReturnLeft.setTexture("button2");}, this);
        this.btnReturnLeft.on("pointerout", function() {  this.btnReturnLeft.setTexture("button1");}, this);
        this.btnReturnLeft.on("pointerdown", function() {  this.btnReturnLeft.setTexture("button2"); }, this);
        this.btnReturnLeft.on("pointerup", function() {
          kickOff = true;
          //start Poki...
          //temp 2022 comment...
            gameStart();
          //end Poki
          kickReturnTeam = 1;
          offensiveTeam = 1;
          defensiveTeam = 2;
          this.specialTeamsPlaybook.visible = false;
          openSpecialTeamsPlaybook = false;
          team1Formation = "kickReturn";team2Formation = "kickOff";
          team1Play = "kickReturnLeft";team2Play = "kickOffMiddle";
          kickOffStarted = true;
          this.setRoutes();
          down = 0;
        }, this);

        this.btnReturnMiddle = this.add.sprite(440,150,"button1");
          this.btnReturnMiddle.setOrigin(0,0);
          this.btnReturnMiddle.setInteractive();
          this.btnReturnMiddle.on("pointerover", function() { this.btnReturnMiddle.setTexture("button2");}, this);
          this.btnReturnMiddle.on("pointerout", function() {  this.btnReturnMiddle.setTexture("button1");}, this);
          this.btnReturnMiddle.on("pointerdown", function() {  this.btnReturnMiddle.setTexture("button2"); }, this);
          this.btnReturnMiddle.on("pointerup", function() {
            kickOff = true;
            //start Poki...
            //temp 2022 comment...
            gameStart();
            //end Poki
          kickReturnTeam = 1;
          offensiveTeam = 1;
          defensiveTeam = 2;
          this.specialTeamsPlaybook.visible = false;
          openSpecialTeamsPlaybook = false;
          team1Formation = "kickReturn";team2Formation = "kickOff";
          team1Play = "kickReturnMiddle";team2Play = "kickOffMiddle";
          kickOffStarted = true;
          this.setRoutes();
          down = 0;
          }, this);

          this.btnReturnRight = this.add.sprite(640,150,"button1");
          this.btnReturnRight.setOrigin(0,0);
          this.btnReturnRight.setInteractive();
          this.btnReturnRight.on("pointerover", function() { this.btnReturnRight.setTexture("button2");}, this);
          this.btnReturnRight.on("pointerout", function() {  this.btnReturnRight.setTexture("button1");}, this);
          this.btnReturnRight.on("pointerdown", function() {  this.btnReturnRight.setTexture("button2"); }, this);
          this.btnReturnRight.on("pointerup", function() {
            kickOff = true;
            //start Poki...
             gameStart();
            //end Poki
          kickReturnTeam = 1;
          offensiveTeam = 1;
          defensiveTeam = 2;
          this.specialTeamsPlaybook.visible = false;
          openSpecialTeamsPlaybook = false;
          team1Formation = "kickReturn";team2Formation = "kickOff";
          team1Play = "kickReturnRight";team2Play = "kickOffMiddle";
          kickOffStarted = true;
          this.setRoutes();
          down = 0;
          }, this);

          //OFFENSIVE PAT...
          //2pt conversion...
          this.btn2ptConversion = this.add.sprite(300,150,"button1");
          this.btn2ptConversion.setOrigin(0,0);
          this.btn2ptConversion.setInteractive();
          this.btn2ptConversion.on("pointerover", function() { this.btn2ptConversion.setTexture("button2");}, this);
          this.btn2ptConversion.on("pointerout", function() {  this.btn2ptConversion.setTexture("button1");}, this);
          this.btn2ptConversion.on("pointerdown", function() {  this.btn2ptConversion.setTexture("button2"); }, this);
          this.btn2ptConversion.on("pointerup", function() {
            openPATPlaybook = false;
            openOffensivePlaybook = true;
            openOffensiveFormations = true;
            goingFor2 = true;
            this.containerPAT.visible = false;
          }, this);

          //Extra point...
          this.btnExtraPoint = this.add.sprite(580,150,"button1");
          this.btnExtraPoint.setOrigin(0,0);
          this.btnExtraPoint.setInteractive();
          this.btnExtraPoint.on("pointerover", function() { this.btnExtraPoint.setTexture("button2");}, this);
          this.btnExtraPoint.on("pointerout", function() {  this.btnExtraPoint.setTexture("button1");}, this);
          this.btnExtraPoint.on("pointerdown", function() {  this.btnExtraPoint.setTexture("button2"); }, this);
          this.btnExtraPoint.on("pointerup", function() {
            team1Formation = "fieldGoal";team2Formation = "fgBlock";
            team1Play = "fieldGoal";team2Play = "fgBlock";
            fieldGoal = true;
            this.setRoutes();
            this.btnExtraPointKick.visible = true;
          }, this);

          this.btnExtraPointKick = this.add.sprite(533,400,"buttonKick1");
          //this.btnExtraPointKick.setOrigin(0,0);
          this.btnExtraPointKick.setInteractive();
          this.btnExtraPointKick.on("pointerover", function() { this.btnExtraPointKick.setTexture("buttonKick2");}, this);
          this.btnExtraPointKick.on("pointerout", function() {  this.btnExtraPointKick.setTexture("buttonKick1");}, this);
          this.btnExtraPointKick.on("pointerdown", function() {  this.btnExtraPointKick.setTexture("buttonKick2"); }, this);
          this.btnExtraPointKick.on("pointerup", function() {
            //poki
            gameStart();
            //end Poki
            openPATPlaybook = false;
            this.containerPAT.visible = false;
            playSelected = false;
            ballSnapped = true;
            inPlay = false;
            tackled = false;
            timeStopped = false;
            this.btnExtraPointKick.visible = false;
            if(this.triangle.x > 483 && this.triangle.x < 583){kickGood = true;}else{kickBad = true;}
          }, this);

          //KICKOFF...
          //Onside Kick...
          /*
          this.btnOnsideKick = this.add.sprite(300,150,"button1");
          this.btnOnsideKick.setOrigin(0,0);
          this.btnOnsideKick.setInteractive();
          this.btnOnsideKick.on("pointerover", function() { this.btnOnsideKick.setTexture("button2");}, this);
          this.btnOnsideKick.on("pointerout", function() {  this.btnOnsideKick.setTexture("button1");}, this);
          this.btnOnsideKick.on("pointerdown", function() {  this.btnOnsideKick.setTexture("button2"); }, this);
          this.btnOnsideKick.on("pointerup", function() {
            //openPATPlaybook = false;
            //this.containerPAT.visible = false;
            down = 0;
          }, this);
          */

          //Deep Kick...
          //this.btnDeepKick = this.add.sprite(580,150,"button1");
         // this.btnDeepKick.setOrigin(0,0);
          this.btnDeepKick = this.add.sprite(383,150,"button1");
          this.btnDeepKick.setOrigin(0.5,0);
          this.btnDeepKick.setInteractive();
          this.btnDeepKick.on("pointerover", function() { this.btnDeepKick.setTexture("button2");}, this);
          this.btnDeepKick.on("pointerout", function() {  this.btnDeepKick.setTexture("button1");}, this);
          this.btnDeepKick.on("pointerdown", function() {  this.btnDeepKick.setTexture("button2"); }, this);
          this.btnDeepKick.on("pointerup", function() {
            team1Formation = "kickOff";team2Formation = "kickReturn";
            team1Play = "kickOff";team2Play = "kickReturn";
            //fieldGoal = true;
            this.setRoutes();
            this.btnKickOffKick.visible = true;
            offensiveTeam = 2;
            defensiveTeam = 1;
            kickOff = true;
            //start Poki...
            //gameStart(); commented out becuase gameStart() happens with kick button
            //end Poki
            kickReturnTeam = 2;
            onsideKick = false;
            down = 0;
            ballFlipping = false;
          }, this);

          this.btnOnsideKick = this.add.sprite(683,150,"button1");
          this.btnOnsideKick.setOrigin(0.5,0);
          this.btnOnsideKick.setInteractive();
          this.btnOnsideKick.on("pointerover", function() { this.btnOnsideKick.setTexture("button2");}, this);
          this.btnOnsideKick.on("pointerout", function() {  this.btnOnsideKick.setTexture("button1");}, this);
          this.btnOnsideKick.on("pointerdown", function() {  this.btnOnsideKick.setTexture("button2"); }, this);
          this.btnOnsideKick.on("pointerup", function() {
            team1Formation = "kickOffOnside";team2Formation = "kickReturnOnside";
            team1Play = "kickOffOnside";team2Play = "kickReturnOnside";
            //fieldGoal = true;
            this.setRoutes();
            this.btnKickOffKick.visible = true;
            offensiveTeam = 2;
            defensiveTeam = 1;
            kickOff = true;
            //start Poki...
            //gameStart(); commented out becuase gameStart() happens with kick button
            //end Poki
            onsideKick = true;
            kickReturnTeam = 2;
            down = 0;
            ballFlipping = false;
          }, this);

          //button to Kick the ball on KickOff
          this.btnKickOffKick = this.add.sprite(533,240,"buttonKick1");
          //this.btnKickOffKick.setOrigin(0,0);
          this.btnKickOffKick.setInteractive();
          this.btnKickOffKick.on("pointerover", function() { this.btnKickOffKick.setTexture("buttonKick2");}, this);
          this.btnKickOffKick.on("pointerout", function() {  this.btnKickOffKick.setTexture("buttonKick1");}, this);
          this.btnKickOffKick.on("pointerdown", function() {  this.btnKickOffKick.setTexture("buttonKick2"); }, this);
          this.btnKickOffKick.on("pointerup", function() {
            openKickOffPlaybook = false;
            this.containerPAT.visible = false;
            playSelected = false;
            //ballSnapped = true;
            inPlay = false;
            tackled = false;
            timeStopped = false;
            this.btnKickOffKick.visible = false;
            kickOffStarted = true;
            down = 0;
          }, this);
          
          //OFFENSIVE PLAYBOOK...
          this.buttonBack = this.add.sprite(240,120,"buttonBack");
          this.buttonBack.setOrigin(0,0);
          this.buttonBack.visible = false;
          this.buttonBack.setInteractive();
          this.buttonBack.on("pointerup", function() {
            openOffensivePlaybook = true;
            openOffensiveFormations = true;
            openOffensivePlaysAce =false;openOffensivePlaysBunch = false;openOffensivePlaysEmpty=false;openOffensivePlaysI=false;openOffensivePlaysShotgun=false;openOffensivePlaysSplit=false;openOffensivePlaysRedZone = false;openOffensivePlaysSpecials = false;
            this.buttonBack.visible = false;
            if(yardlinePixel <= 420){
              this.buttonRedZone.visible = true;
              if(!this.buttonBlink){
                this.buttonRedZone.anims.play('buttonRedZoneBlink');
                this.buttonBlink = true;
              }
            }
          }, this);
          //RedZone button...
          this.buttonRedZone = this.add.sprite(563,120,"buttonRedZone");
          this.buttonRedZone.setOrigin(0,0);

          if(!this.buttonBlink){
            this.buttonRedZone.anims.play('buttonRedZoneBlink');
            this.buttonBlink = true;
          }
          this.buttonRedZone.visible = false;
          this.buttonRedZone.setInteractive();
          this.buttonRedZone.on("pointerup", function() {
            openOffensivePlaybook = true;
            //openOffensiveFormations = false;
            openOffensivePlaysAce =false;openOffensivePlaysBunch = false;openOffensivePlaysEmpty=false;openOffensivePlaysI=false;openOffensivePlaysShotgun=false;openOffensivePlaysSplit=false;
            //openOffensivePlaysRedZone = true;
            this.buttonRedZone.visible = false;
            this.buttonBlink = false;
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysRedZone = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
            }
          }, this);

          //Specials button...
          this.buttonSpecials = this.add.sprite(400,120,"buttonSpecials");
          this.buttonSpecials.setOrigin(0,0);

          this.buttonSpecials.visible = false;
          this.buttonSpecials.setInteractive();
          this.buttonSpecials.on("pointerup", function() {
            openOffensivePlaybook = true;
            //openOffensiveFormations = false;
            openOffensivePlaysAce =false;openOffensivePlaysBunch = false;openOffensivePlaysEmpty=false;openOffensivePlaysI=false;openOffensivePlaysShotgun=false;openOffensivePlaysSplit=false;
            //openOffensivePlaysSpecials = true;
            this.buttonSpecials.visible = false;
            //this.buttonBlink = false;
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysSpecials = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              this.buttonRedZone.visible = false;
            }
          }, this);

          //play1 //Split Lt Sweep Lt    Shotgun->crackReachLt
          this.btnSplit = this.add.sprite(240,150,"button1");
          this.btnSplit.setOrigin(0,0);
          this.btnSplit.setInteractive();
          this.btnSplit.on("pointerover", function() { this.btnSplit.setTexture("button2");}, this);
          this.btnSplit.on("pointerout", function() {  this.btnSplit.setTexture("button1");}, this);
          this.btnSplit.on("pointerdown", function() {  this.btnSplit.setTexture("button2"); }, this);
          this.btnSplit.on("pointerup", function() {
            //pick play split sweep lt
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitLt"; team1Play = "sweepLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play iLt tossLt
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iLt"; team1Play = "tossLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play shotgun Crack Reach lt
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunTripsLt"; team1Play = "crackReachLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Bunch Rt  "HB Off Tacle"  really zoneRt
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchRt"; team1Play = "zoneRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Ace Rt Blast Lt
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRt"; team1Play = "blastLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play Empty wildcatSprintRt
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyRt"; team1Play = "wildcatSprintRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "splitOptionAngle"; team1Play = "yOptionAngle";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play Hail Mary Lt.
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "bunchLt"; team1Play = "hailMaryLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysSplit = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);

          //play2 I rt Power Rt
          this.btnIFormation = this.add.sprite(440,150,"button1");
          this.btnIFormation.setOrigin(0,0);
          this.btnIFormation.setInteractive();
          this.btnIFormation.on("pointerover", function() { this.btnIFormation.setTexture("button2");}, this);
          this.btnIFormation.on("pointerout", function() {  this.btnIFormation.setTexture("button1");}, this);
          this.btnIFormation.on("pointerdown", function() {  this.btnIFormation.setTexture("button2"); }, this);
          this.btnIFormation.on("pointerup", function() {
            //pick play split dive rt
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitLt"; team1Play = "diveRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play iRt powerRt
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iRt"; team1Play = "powerRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play shotgun Zone rt
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunLt"; team1Play = "zoneRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Bunch Lt  "Crack Sweep Left"  really Crack Reach Lt
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchLt"; team1Play = "crackReachLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Ace Rt crossBlockRt
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRt"; team1Play = "crossBlockRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play EmptyLtInvert motionSweepLt
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyLtInvert"; team1Play = "motionSweepLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              motion = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "splitLt"; team1Play = "divePass";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play special Stutter-Go(same as divePass)
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "splitLt"; team1Play = "divePass";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //close formation screen and open I plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysI = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);

          //play3
          this.btnShotgun = this.add.sprite(640,150,"button1");
          this.btnShotgun.setOrigin(0,0);
          this.btnShotgun.setInteractive();
          this.btnShotgun.on("pointerover", function() { this.btnShotgun.setTexture("button2");}, this);
          this.btnShotgun.on("pointerout", function() {  this.btnShotgun.setTexture("button1");}, this);
          this.btnShotgun.on("pointerdown", function() {  this.btnShotgun.setTexture("button2"); }, this);
          this.btnShotgun.on("pointerup", function() {
            //pick play split iso rt
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitRt"; team1Play = "isoRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play iRt counterLt
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iRt"; team1Play = "counterLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play shotgun Trey Lt
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunLt"; team1Play = "treyLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Bunch Lt  Trap Rt
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchLt"; team1Play = "trapRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
            }
            //pick play Ace Rt Switch reverseRt
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRtSwitch"; team1Play = "reverseRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //pick play EmptyLtInvert motionScreenLt
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyLtInvert"; team1Play = "motionScreenLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
              shotgun = true;
              motion = true;
            }
            //redzone
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "aceTbSwing"; team1Play = "tbSwing";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "aceTbSwing"; team1Play = "endzoneTrail";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //close formation screen and open Shotgun plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysShotgun = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);

          //Play 4
          //play4 //Bunch Formation  Sweep Lt    Shotgun->53Post
          this.btnBunch = this.add.sprite(240,280,"button1");
          this.btnBunch.setOrigin(0,0);
          this.btnBunch.setInteractive();
          this.btnBunch.on("pointerover", function() { this.btnBunch.setTexture("button2");}, this);
          this.btnBunch.on("pointerout", function() {  this.btnBunch.setTexture("button1");}, this);
          this.btnBunch.on("pointerdown", function() {  this.btnBunch.setTexture("button2"); }, this);
          this.btnBunch.on("pointerup", function() {
            //pick play split lt 92 slant
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitLt"; team1Play = "92Slant";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play iLt 99Seam
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iLt"; team1Play = "99Seam";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play shotgun 53Post
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunTripsLt"; team1Play = "53Post";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play shotgun 57Smash
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchLt"; team1Play = "57Smash";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play Ace 90 Hitch
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRt"; team1Play = "90Hitch";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              //shotgun = true;
              passPlay = true;
            }
            //pick play Empty 56 Locate
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyLt"; team1Play = "56Locate";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "bunchLtBubble"; team1Play = "bubbleScreenLt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //specials pick play deepCrossBubbleRt
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "bunchLt"; team1Play = "deepCrossBubbleRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysBunch = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);

          //play5 //Ace Formation   Shotgun->54Seam
          this.btnAce = this.add.sprite(440,280,"button1");
          this.btnAce.setOrigin(0,0);
          this.btnAce.setInteractive();
          this.btnAce.on("pointerover", function() { this.btnAce.setTexture("button2");}, this);
          this.btnAce.on("pointerout", function() {  this.btnAce.setTexture("button1");}, this);
          this.btnAce.on("pointerdown", function() {  this.btnAce.setTexture("button2"); }, this);
          this.btnAce.on("pointerup", function() {
            //pick play Split Lt 52WheelComeback
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitLt"; team1Play = "52WheelComeback";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play iRt powerPass
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iRt"; team1Play = "powerPass";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play shotgun 54Seam
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunRt"; team1Play = "54Seam";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play shotgun 54 Go
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchRt"; team1Play = "54Go";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play Ace 59 Out
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRt"; team1Play = "59Out";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play Empty 58 Comeback
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyRt"; team1Play = "58Comeback";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "aceRt"; team1Play = "aceRtSlant";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick special Victory Kneel
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "victoryRt"; team1Play = "diveRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
            }
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysAce = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);

          //play6 //Empty Formation   Shotgun->92 Flat
          this.btnEmpty = this.add.sprite(640,280,"button1");
          this.btnEmpty.setOrigin(0,0);
          this.btnEmpty.setInteractive();
          this.btnEmpty.on("pointerover", function() { this.btnEmpty.setTexture("button2");}, this);
          this.btnEmpty.on("pointerout", function() {  this.btnEmpty.setTexture("button1");}, this);
          this.btnEmpty.on("pointerdown", function() {  this.btnEmpty.setTexture("button2"); }, this);
          this.btnEmpty.on("pointerup", function() {
            //pick play Split Rt 56 Storm
            if(openOffensivePlaybook && openOffensivePlaysSplit){
              team1Formation = "splitRt"; team1Play = "56Storm";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play iRt TEDrag
            if(openOffensivePlaybook && openOffensivePlaysI){
              team1Formation = "iRt"; team1Play = "TEDrag";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play shotgun 92Flat
            if(openOffensivePlaybook && openOffensivePlaysShotgun){
              team1Formation = "shotgunZback"; team1Play = "92Flat";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play bunch quickScreen
            if(openOffensivePlaybook && openOffensivePlaysBunch){
              team1Formation = "bunchLt"; team1Play = "quickScreen";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            //pick play Ace 52 Wheel
            if(openOffensivePlaybook && openOffensivePlaysAce){
              team1Formation = "aceRt"; team1Play = "52Wheel";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick play EmptyLtFlip 59 HighLow
            if(openOffensivePlaybook && openOffensivePlaysEmpty){
              team1Formation = "emptyLtFlip"; team1Play = "59HighLow";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              shotgun = true;
              passPlay = true;
            }
            if(openOffensivePlaybook && openOffensivePlaysRedZone){
              team1Formation = "aceRt"; team1Play = "96Sail";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //pick special hailMaryRt.
            if(openOffensivePlaybook && openOffensivePlaysSpecials){
              team1Formation = "aceRt"; team1Play = "hailMaryRt";
              this.setTeam2Defense();team2Play = "cov3";
              this.offensivePlaybook.visible = false;
              openOffensivePlaybook = false;
              this.setRoutes();
              passPlay = true;
            }
            //close formation screen and open split plays...
            if(openOffensivePlaybook && openOffensiveFormations){
              openOffensiveFormations = false; this.bgOffenseFormations.visible = false;
              openOffensivePlaysEmpty = true;
              this.buttonBack.visible = true;
              this.buttonSpecials.visible = false;
              openOffensivePlaysRedZone = false;
              this.buttonRedZone.visible = false;
              this.buttonBlink = false;
            }
          }, this);


          //DEFENSIVE PLAYBOOK...
          //play1 //43
          this.btn43 = this.add.sprite(240,150,"button1");
          this.btn43.setOrigin(0,0);
          this.btn43.setInteractive();
          this.btn43.on("pointerover", function() { this.btn43.setTexture("button2");}, this);
          this.btn43.on("pointerout", function() {  this.btn43.setTexture("button1");}, this);
          this.btn43.on("pointerdown", function() {  this.btn43.setTexture("button2"); }, this);
          this.btn43.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "cov2";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              //team2RandomOffense = 20;
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "43";
              openDefensiveCoverages = true;
            }
          }, this);

          //play2 //34
          this.btn34 = this.add.sprite(440,150,"button1");
          this.btn34.setOrigin(0,0);
          this.btn34.setInteractive();
          this.btn34.on("pointerover", function() { this.btn34.setTexture("button2");}, this);
          this.btn34.on("pointerout", function() {  this.btn34.setTexture("button1");}, this);
          this.btn34.on("pointerdown", function() {  this.btn34.setTexture("button2"); }, this);
          this.btn34.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "cov3";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              //team2RandomOffense = 20;
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "34";
              openDefensiveCoverages = true;
            }
          }, this);

          //play3 //44Stack
          this.btnBear = this.add.sprite(640,150,"button1");
          this.btnBear.setOrigin(0,0);
          this.btnBear.setInteractive();
          this.btnBear.on("pointerover", function() { this.btnBear.setTexture("button2");}, this);
          this.btnBear.on("pointerout", function() {  this.btnBear.setTexture("button1");}, this);
          this.btnBear.on("pointerdown", function() {  this.btnBear.setTexture("button2"); }, this);
          this.btnBear.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "cov4";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "bear";
              openDefensiveCoverages = true;
            }
          }, this);

          //play4 //44Stack
          this.btn44Stack = this.add.sprite(240,280,"button1");
          this.btn44Stack.setOrigin(0,0);
          this.btn44Stack.setInteractive();
          this.btn44Stack.on("pointerover", function() { this.btn44Stack.setTexture("button2");}, this);
          this.btn44Stack.on("pointerout", function() {  this.btn44Stack.setTexture("button1");}, this);
          this.btn44Stack.on("pointerdown", function() {  this.btn44Stack.setTexture("button2"); }, this);
          this.btn44Stack.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "crash";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "44Stack";
              openDefensiveCoverages = true;
            }
          }, this);

          //play5 //43Over
          this.btn43Over = this.add.sprite(440,280,"button1");
          this.btn43Over.setOrigin(0,0);
          this.btn43Over.setInteractive();
          this.btn43Over.on("pointerover", function() { this.btn43Over.setTexture("button2");}, this);
          this.btn43Over.on("pointerout", function() {  this.btn43Over.setTexture("button1");}, this);
          this.btn43Over.on("pointerdown", function() {  this.btn43Over.setTexture("button2"); }, this);
          this.btn43Over.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "sting";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "43Over";
              openDefensiveCoverages = true;
            }
          }, this);

          //play6 //62
          this.btn62 = this.add.sprite(640,280,"button1");
          this.btn62.setOrigin(0,0);
          this.btn62.setInteractive();
          this.btn62.on("pointerover", function() { this.btn62.setTexture("button2");}, this);
          this.btn62.on("pointerout", function() {  this.btn62.setTexture("button1");}, this);
          this.btn62.on("pointerdown", function() {  this.btn62.setTexture("button2"); }, this);
          this.btn62.on("pointerup", function() {
            if(openDefensivePlaybook && openDefensiveCoverages){
              team1Play = "blitz";team2Play = "pick";
              team2RandomOffense = Math.floor(Math.random() * 21);
              this.defensivePlaybook.visible = false;
              openDefensiveCoverages = false;
              openDefensivePlaybook = false;
              this.setRoutes();
            }
            if(openDefensivePlaybook && !openDefensiveCoverages){
              team1Formation = "62";
              openDefensiveCoverages = true;
            }
          }, this);




//CONTAINERS...
          this.specialTeamsPlaybook.add([this.bgSpecialTeams]);
          this.specialTeamsPlaybook.add([this.btnReturnLeft]);
          this.specialTeamsPlaybook.add([this.btnReturnMiddle]);
          this.specialTeamsPlaybook.add([this.btnReturnRight]);
          this.specialTeamsPlaybook.visible = false;

          //this.kickOffPlaybook.add([this.bgKickOffPlaybook, this.btnOnsideKick, this.btnDeepKick, this.btnKickOffKick]);
          this.kickOffPlaybook.add([this.bgKickOffPlaybook, this.btnDeepKick, this.btnOnsideKick, this.btnKickOffKick]);
          this.kickOffPlaybook.visible = false;

          this.containerPAT.add([this.bgPAT,this.btn2ptConversion,this.btnExtraPoint,this.btnExtraPointKick,this.trianglePath,this.triangle]);
          this.containerPAT.visible = false;

          this.offensivePlaybook.add([this.bgOffensePlaysI,this.bgOffensePlaysSplit,this.bgOffensePlaysShotgun,this.bgOffensePlaysBunch,this.bgOffensePlaysAce,this.bgOffensePlaysEmpty,this.bgOffensePlaysRedZone,this.bgOffensePlaysSpecials, this.bgOffenseFormations]);
          this.offensivePlaybook.add([this.btnSplit,this.btnIFormation, this.btnShotgun, this.btnBunch, this.btnAce, this.btnEmpty,this.buttonBack,this.buttonRedZone,this.buttonSpecials]);
          this.offensivePlaybook.visible = false;

          this.defensivePlaybook.add([this.bgDefense,this.bgDefenseCov]);
          this.defensivePlaybook.add([this.btn43,this.btn34,this.btnBear,this.btn44Stack,this.btn43Over,this.btn62]);
          this.defensivePlaybook.visible = false;

          this.containerMC.add([this.bgTD,this.graphics,this.star,this.shield,this.cheerleader1, this.cheerleader2,this.tdMCTouchdown, this.scoreboardMask]);
          this.containerMC.visible = false;

          this.containerFgBad.add([this.fgBadMC,this.ball]);
          this.containerFgBad.visible = false;

          this.containerFgGood.add([this.fgGoodMC,this.ball]);
          this.containerFgGood.visible = false;

          this.containerSafety.add([this.safetyMC]);
          this.containerSafety.visible = false;

          this.containerBigHit.add([this.bgCrowd,this.bigHitText,this.bigHittie,this.bigHitter,this.scoreboardMask2]);
          this.containerBigHit.visible = false;

          this.containerFumble.add([this.fumbleBg,this.fumblePlayer,this.fumblePlayer2,this.fumbleBall,this.scoreboardMask6]);
          this.containerFumble.visible = false;

          this.containerGoodD.add([this.bgCrowd2,this.goodD,this.goodDFootball,this.goodDText,this.scoreboardMask3]);
          this.containerGoodD.visible = false;

          this.containerInterception.add([this.bgCrowd3,this.interception,this.interceptionText,this.goodDFootball2,this.scoreboardMask4]);
          this.containerInterception.visible = false;
          
          this.containerConversionGood.add([this.bgTD2,this.graphics2,this.cheerleader3, this.cheerleader4,this.conversionGoodMC, this.scoreboardMask5]);
          this.containerConversionGood.visible = false;

          this.containerConversionNoGood.add([this.conversionNoGoodMC]);
          this.containerConversionNoGood.visible = false;
    }


    update(){
      if(gameOver){
        openBigHit = false;
        openFumble = false;
        openConversionGoodMC = false;
        openConversionNoGoodMC = false;
        openDefensivePlaybook = false;
        openDefensiveFronts = false;
        openDefensiveCoverages = false;
        openOffensivePlaybook = false;
        openFgBadMC = false;
        openFgGoodMC = false;
        openFgGoodMC2 = false;
        openGoodDMC = false;
        openInterceptionMC = false;
        openKickOffPlaybook = false;
        openOffensivePlaysSplit = false;
        openOffensivePlaysI = false;
        openOffensivePlaysShotgun = false;
        openOffensivePlaysBunch = false;
        openOffensivePlaysAce = false;
        openOffensivePlaysEmpty = false;
        openOffensivePlaysRedZone = false;
        openOffensivePlaysSpecials = false;
        openOffensiveFormations = true;
        openOffensivePlays;
        openPATPlaybook = false;
        openSpecialTeamsPlaybook = false;
        openSafetyMC = false;
        openSafetyMC2 = false;
        openTouchdownMC = false;
        openTouchdownMC2 = false;
      }
      if(openInstructions){this.instructions.visible = true;}else{this.instructions.visible = false;}
        if(openSpecialTeamsPlaybook){this.specialTeamsPlaybook.visible = true;}

        if(openTouchdownMC){
          //Jumbotron TD offensiveTeam == 1
          if(touchdown){
            this.containerMC.visible = true;
            //BG red to blue...
            this.alpha += 0.001;
            this.gradientLineX += 10;
            this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha);
            this.graphics.lineBetween(200, this.gradientLineX, 800, 0);
            this.star.x += 3;
            this.star.y += 2;
            //end red to blue;
            this.counter += 1;
            if(this.counter >= 10){
              this.cheerleader1.scaleX *= -1;
              this.cheerleader2.scaleX *= -1;
              this.counter = 0;
            }
            if(this.counterMiddle == 0){
              this.tdMCTouchdown.x -= 20;
            }
            if(this.counterMiddle == 1){
              this.tdMCTouchdown.y += this.counterBounce;
              this.counterBounce *= -1;
              this.counterBounceTime -= 1;
              if(this.counterBounceTime <= 0){
                this.counterMiddle = 2;
              }
            }
            if(this.counterMiddle == 2){
              this.tdMCTouchdown.x += this.counterBoomerange;
              this.counterBoomerange -= 2;
            }
            if(this.tdMCTouchdown.x < 533){
              this.counterMiddle = 1;
            }
            if(this.tdMCTouchdown.x <= 0){
              this.star.x = 300;
              this.star.y = 20;
              this.graphics.clear();
              this.gradientLineX = 0;
              this.alpha = 0;
              this.tdMCTouchdown.x = 1000;
              this.tdMCTouchdown.y = 200;
              this.counter = 0;
              this.counterBoomerange = 20;
              this.counterBounceTime = 30;
              this.counterBounce = 3;
              this.counterMiddle = 0;
              openTouchdownMC = false;
              this.containerMC.visible = false;
              openPATPlaybook = true;
            }
          }//end Jumbotron TD offensiveTeam == 1
        }//end openTouchdownMC

        if(openTouchdownMC2){
          //Jumbotron TD offensiveTeam == 2
          if(touchdown){
            this.containerMC.visible = true;
            //BG red to blue...
            this.alpha += 0.001;
            this.gradientLineX += 10;
            this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha);
            this.graphics.lineBetween(200, this.gradientLineX, 800, 0);
            this.star.x += 3;
            this.star.y += 2;
            //end red to blue;
            this.counter += 1;
            if(this.counter >= 10){
              this.cheerleader1.scaleX *= -1;
              this.cheerleader2.scaleX *= -1;
              this.counter = 0;
            }
            if(this.counterMiddle == 0){
              this.tdMCTouchdown.x -= 20;
            }
            if(this.counterMiddle == 1){
              this.tdMCTouchdown.y += this.counterBounce;
              this.counterBounce *= -1;
              this.counterBounceTime -= 1;
              if(this.counterBounceTime <= 0){
                this.counterMiddle = 2;
              }
            }
            if(this.counterMiddle == 2){
              this.tdMCTouchdown.x += this.counterBoomerange;
              this.counterBoomerange -= 2;
            }
            if(this.tdMCTouchdown.x < 533){
              this.counterMiddle = 1;
            }
            if(this.tdMCTouchdown.x <= 0){
              this.star.x = 300;
              this.star.y = 20;
              this.graphics.clear();
              this.gradientLineX = 0;
              this.alpha = 0;
              this.tdMCTouchdown.x = 1000;
              this.tdMCTouchdown.y = 200;
              this.counter = 0;
              this.counterBoomerange = 20;
              this.counterBounceTime = 30;
              this.counterBounce = 3;
              this.counterMiddle = 0;
              openTouchdownMC2 = false;
              this.containerMC.visible = false;
              //different for team2...
              team2Formation = "fieldGoal";team1Formation = "fgBlock";
              team2Play = "fieldGoal";team1Play = "fgBlock";
              fieldGoal = true;
              this.setRoutes();
            }
          }//end Jumbotron TD offensiveTeam == 1
        }//end openTouchdownMC2

        if(openFgGoodMC){
          this.containerFgGood.visible = true;
          this.counter += 1;
          if(this.counter < 2){
            this.ball.anims.play('ballFlip2');
          }
          this.ball.y -= 9.0;
          if(this.ball.scaleX > 0.33){
            this.ball.scaleX -= 0.03;
            this.ball.scaleY -= 0.03;
          }
          if(this.ball.y < -10){
            openFgGoodMC = false;
            this.containerFgGood.visible = false;
            this.ball.y = 480;
            this.ball.scaleX = 3.0;
            this.ball.scaleY = 3.0;
            openKickOffPlaybook = true;
            this.counter = 0;
            //poki
            startCommercial();
            //end poki
          }
        }//end openFgGood

        if(openFgBadMC){
          this.containerFgBad.visible = true;
          this.counter += 1;
          if(this.counter < 2){
            this.ball.anims.play('ballFlip2');
          }
          this.ball.y -= 9.0;
          this.ball.x += 9.0;
          if(this.ball.scaleX > 0.33){
            this.ball.scaleX -= 0.03;
            this.ball.scaleY -= 0.03;
          }
          if(this.ball.y < -10){
            openFgBadMC = false;
            this.containerFgBad.visible = false;
            this.ball.y = 480;
            this.ball.scaleX = 3.0;
            this.ball.scaleY = 3.0;
            openKickOffPlaybook = true;
            this.counter = 0;
            //poki
            startCommercial();
            //end poki
          }
        }//end openFgBad

        if(openFgGoodMC2){
          this.containerFgGood.visible = true;
          this.counter += 1;
          if(this.counter < 2){
            this.ball.anims.play('ballFlip2');
          }
          this.ball.y -= 9.0;
          if(this.ball.scaleX > 0.33){
            this.ball.scaleX -= 0.03;
            this.ball.scaleY -= 0.03;
          }
          if(this.ball.y < -10){
            openFgGoodMC2 = false;
            this.containerFgGood.visible = false;
            this.ball.y = 540;
            this.ball.scaleX = 3.0;
            this.ball.scaleY = 3.0;
            openSpecialTeamsPlaybook = true;
            this.counter = 0;
          }
        }//end openFgGood

        if(openConversionGoodMC){
            this.containerConversionGood.visible = true;
            //BG red to blue...
            this.alpha += 0.001;
            this.gradientLineX += 10;
            this.graphics2.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha);
            this.graphics2.lineBetween(200, this.gradientLineX, 800, 0);
            //end red to blue;
            this.counter += 1;
            if(this.counter >= 10){
              this.cheerleader3.scaleX *= -1;
              this.cheerleader4.scaleX *= -1;
              this.counter = 0;
            }
            if(this.counterMiddle == 0){
              this.conversionGoodMC.x -= 20;
            }
            if(this.counterMiddle == 1){
              this.conversionGoodMC.y += this.counterBounce;
              this.counterBounce *= -1;
              this.counterBounceTime -= 1;
              if(this.counterBounceTime <= 0){
                this.counterMiddle = 2;
              }
            }
            if(this.counterMiddle == 2){
              this.conversionGoodMC.x += this.counterBoomerange;
              this.counterBoomerange -= 2;
            }
            if(this.conversionGoodMC.x < 533){
              this.counterMiddle = 1;
            }
            if(this.conversionGoodMC.x <= 0){
              this.graphics2.clear();
              this.gradientLineX = 0;
              this.alpha = 0;
              this.conversionGoodMC.x = 1000;
              this.conversionGoodMC.y = 200;
              this.counter = 0;
              this.counterBoomerange = 20;
              this.counterBounceTime = 30;
              this.counterBounce = 3;
              this.counterMiddle = 0;
              openConversionGoodMC = false;
              this.containerConversionGood.visible = false;
              openKickOffPlaybook = true;
              //poki
              startCommercial();
              //end poki
            }
        }//end openConversionGoodMC

        if(openConversionNoGoodMC){
          this.containerConversionNoGood.visible = true;
          //end red to blue;
          this.counter += 1;
          if(this.counter > 50){
            this.counter = 0;
            openConversionNoGoodMC = false;
            this.containerConversionNoGood.visible = false;
            openKickOffPlaybook = true;
            //poki
            startCommercial();
            //end poki
          }
      }//end openConversionNoGoodMC

        if(openSafetyMC){
          this.containerSafety.visible = true;
          this.counter += 1;
          if(this.counter > 50){
            safety = false;
            safety2 = false;
            openSafetyMC = false;
            this.containerSafety.visible = false;
            this.ball.y = 900;
            this.ball.scaleX = 3.0;
            this.ball.scaleY = 3.0;
            openSpecialTeamsPlaybook = true;
            offensiveTeam = 1;
            defensiveTeam = 2;
            this.counter = 0;
            //poki
            startCommercial();
            //end poki
          }
        }//end openSafetyMC

        if(openSafetyMC2){
          this.containerSafety.visible = true;
          this.counter += 1;
          if(this.counter > 50){
            safety = false;
            safety2 = false;
            openSafetyMC2 = false;
            this.containerSafety.visible = false;
            this.ball.y = 540;
            this.ball.scaleX = 3.0;
            this.ball.scaleY = 3.0;
            openKickOffPlaybook = true;
            offensiveTeam = 2;
            defensiveTeam = 1;
            this.counter = 0;
            //poki
            startCommercial();
            //end poki
          }
        }//end openSafetyMC2

        if(openGoodDMC){
          this.containerGoodD.visible = true;
          this.counter += 1;
          this.goodD.y -= 2;
          this.goodD.x -= 2;
          this.goodDFootball.x -= 10;
          if(this.goodDFootball.x < 483){
            this.goodDFootball.y -= 10;
          }
          if(this.counter > 50){
            openGoodDMC = false;
            this.containerGoodD.visible = false;
            this.counter = 0;
            this.goodD.x = 533;
            this.goodD.y = 240;
            this.goodDFootball.x = 800;
            this.goodDFootball.y = 200;
          }
        }//end openInterceptionMC

        if(openInterceptionMC){
          this.containerInterception.visible = true;
          this.counter += 1;
          if(this.interception.x > 373){
            this.interception.y -= 2;
            this.interception.x -= 5;
          }
          if(this.goodDFootball2.x > 403){
            this.goodDFootball2.x -= 10;
          }
          if(this.counter > 50){
            intercepted = false;
            openInterceptionMC = false;
            openOffensiveFormations = true;
            this.containerInterception.visible = false;
            offensiveTeam = 1;
            defensiveTeam = 2;
            this.counter = 0;
            this.interception.x = 533;
            this.interception.y = 240;
            this.goodDFootball2.x = 803;
            this.goodDFootball2.y = 180;
          }
        }//end openInterceptionMC

        if(openBigHit){
            this.containerBigHit.visible = true;
            //BG red to blue...
            this.alpha += 0.001;
            this.gradientLineX += 10;
            this.graphics.lineGradientStyle(200, 0xff0000, 0xff0000, 0x0000ff, 0x0000ff, this.alpha);
            this.graphics.lineBetween(200, this.gradientLineX, 800, 0);
            this.star.x += 3;
            this.star.y += 2;
            //end red to blue;
            this.counter += 1;
            if(this.counter >= 10){
              this.cheerleader1.scaleX *= -1;
              this.cheerleader2.scaleX *= -1;
              this.counter = 0;
            }
            if(this.bigHitText.y < 200){
              this.bigHitText.y += 25;
            }
            if(this.bigHitText.y >= 200){
              this.counterMiddle = 1;
            }
            if(this.counterMiddle == 1){
              this.bigHitText.y += this.counterBounce;
              this.counterBounce *= -1;
              this.counterBounceTime -= 1;
              if(this.counterBounceTime <= 0){
                this.counterMiddle = 2;
              }
            }
            if(this.counterMiddle == 2){
              this.bigHitText.x += this.counterBoomerange;
              this.counterBoomerange -= 4;
            }
            if(this.bigHitter.x >= 533){
              this.bigHittie.x += 25;
            }else{
              this.bigHittie.x -= 5;
            }
            if(this.bigHitter.x < 533){
              this.bigHitter.x += 20;
            }else if(this.bigHitter.x > 533 && this.bigHitter.x < 560){
              this.bigHitter.x += 1;
            }else{
              this.bigHitter.x += 20;
            }
            if(this.bigHitter.x >= 1200){
              this.star.x = 300;
              this.star.y = 20;
              this.graphics.clear();
              this.gradientLineX = 0;
              this.alpha = 0;
              this.bigHitter.x = 360;
              this.bigHitter.y = 300;
              this.bigHittie.x = 533;
              this.bigHittie.y = 330;
              this.bigHitText.x = 533;
              this.bigHitText.y = 0;
              this.counter = 0;
              this.counterBoomerange = 20;
              this.counterBounceTime = 30;
              this.counterBounce = 3;
              this.counterMiddle = 0;
              openBigHit = false;
              this.containerBigHit.visible = false;
            }
          }//end open BigHit

          if(openFumble){
            this.containerFumble.visible = true;
            if(this.fumbleBall.y < 240){
              this.fumbleBall.y += 9;
              this.fumbleBall.rotation += 0.3;
            }
            if(this.fumblePlayer.x < 600){
              this.fumblePlayer.x += 15;
              if(this.fumblePlayer.x < 350){
                this.fumblePlayer.y -= 9;
              }else{
                if(this.fumblePlayer.y < 240){
                  this.fumblePlayer.y += 9;
                }
              }
            }
            if(this.fumblePlayer2.y < 300){
              this.fumblePlayer2.y += 15;
              this.fumblePlayer2.x -= 15;
            }
            if(this.fumblePlayer.x >= 600){
              this.fumbleBall.y = 0;
              this.fumblePlayer.x = 0;
              this.fumblePlayer.y = 300;
              this.fumblePlayer2.x = 800;
              this.fumblePlayer2.y = 100;
              this.containerFumble.visible = false;
              openFumble = false;
            }
          }

        if(openKickOffPlaybook){
          this.kickOffPlaybook.visible = true;
          if(team1Formation != 'kickOff' && team1Formation != 'kickOffOnside'){
            this.bgKickOffPlaybook.visible = true;this.btnDeepKick.visible = true;this.btnOnsideKick.visible = true;
            this.btnKickOffKick.visible = false;
          }else{
            this.bgKickOffPlaybook.visible = false;this.btnDeepKick.visible = false;this.btnOnsideKick.visible = false;
            this.btnKickOffKick.visible = true;
          }
        }

        if(openPATPlaybook){
          this.containerPAT.visible = true;
          if(team1Formation != 'fieldGoal'){
            this.bgPAT.visible = true;this.btn2ptConversion.visible = true;this.btnExtraPoint.visible = true;
            this.btnExtraPointKick.visible = false;
            this.triangle.visible = false;
            this.trianglePath.visible = false;
          }else{
            this.bgPAT.visible = false;this.btn2ptConversion.visible = false;this.btnExtraPoint.visible = false;
            this.btnExtraPointKick.visible = true;
            this.triangle.visible = true;
            this.trianglePath.visible = true;
            //move triangle
            this.triangle.x += fieldGoalAimSpeed;
            if(this.triangle.x > 733){
              fieldGoalAimSpeed *= -1;
            }
            if(this.triangle.x < 333){
              fieldGoalAimSpeed *= -1;
            }
          }
        }

        if(openOffensivePlaybook){
          this.offensivePlaybook.visible = true;
            if(openOffensiveFormations){this.bgOffenseFormations.visible = true;}else{this.bgOffenseFormations.visible = false;}
            if(openOffensivePlaysI){this.bgOffensePlaysI.visible=true}else{this.bgOffensePlaysI.visible = false;}
            if(openOffensivePlaysSplit){this.bgOffensePlaysSplit.visible=true}else{this.bgOffensePlaysSplit.visible = false;}
            if(openOffensivePlaysShotgun){this.bgOffensePlaysShotgun.visible=true}else{this.bgOffensePlaysShotgun.visible = false;}
            if(openOffensivePlaysBunch){this.bgOffensePlaysBunch.visible=true}else{this.bgOffensePlaysBunch.visible = false;}
            //if(openOffensivePlaysBunch){this.bgOffensePlaysBunch.visible=true}else{this.bgOffensePlaysBunch.visible = false;}
            if(openOffensivePlaysAce){this.bgOffensePlaysAce.visible=true}else{this.bgOffensePlaysAce.visible = false;}
            if(openOffensivePlaysEmpty){this.bgOffensePlaysEmpty.visible=true}else{this.bgOffensePlaysEmpty.visible = false;}
            if(openOffensivePlaysRedZone){this.bgOffensePlaysRedZone.visible=true}else{this.bgOffensePlaysRedZone.visible = false;}
            if(openOffensivePlaysSpecials){this.bgOffensePlaysSpecials.visible=true}else{this.bgOffensePlaysSpecials.visible = false;}
            if(yardlinePixel <= 420 && !openOffensivePlaysSplit && !openOffensivePlaysI && !openOffensivePlaysShotgun && !openOffensivePlaysBunch
              && !openOffensivePlaysAce && !openOffensivePlaysEmpty && !openOffensivePlaysSpecials){this.buttonRedZone.visible = true;}
            if(!openOffensivePlaysSplit && !openOffensivePlaysI && !openOffensivePlaysShotgun && !openOffensivePlaysBunch
                && !openOffensivePlaysAce && !openOffensivePlaysEmpty && !openOffensivePlaysRedZone){this.buttonSpecials.visible = true;}
        }//end openOffensivePlaybook
        if(openDefensivePlaybook){
          this.defensivePlaybook.visible = true;
            if(openDefensiveCoverages){
              this.bgDefenseCov.visible = true;
            }else{
              this.bgDefenseCov.visible = false;
            }
        }
        
    }

    setTeam2Defense(){
      team2Formation = team2Front[Math.floor(Math.random()*3)];
      team2Secondary = team2Coverage[Math.floor(Math.random()*3)];
      team2Play = "cov3";
    }

    setRoutes(){
      var distTd = yardlinePixel - 120;
      var distTd2 = 1320 - yardlinePixel;
      //TEAM 1...
      //Offense
      if(team1Play == "kickReturnLeft"){
        team1RouteQB = [[-50,240],[-50,-1200]];team1RouteFB = [[-100,240],[-100,-960]];
        team1RouteWR1 = [[-40,360],[-40,-960]];team1RouteWR2 = [[-290,420],[-290,-960]];team1RouteWR3 = [[-300,360],[-300,-960]];
        team1RouteLT = [[-50,300],[-50,-600]];team1RouteLG = [[-100,300],[-100,-600]];team1RouteC = [[-150,300],[-150,-600]];team1RouteRG = [[-200,300],[-200,-600]];team1RouteRT = [[-250,300],[-250,-600]];
      }
      if(team1Play == "kickReturnMiddle"){
        team1RouteLT = [[0,360],[0,-1200]];team1RouteLG = [[0,360],[0,-1200]];team1RouteC = [[0,360],[0,-1200]];team1RouteRG = [[0,360],[0,-1200]];team1RouteRT = [[0,360],[0,-1200]];
        team1RouteWR1 = [[100,360],[150,400],[150,-1200]];team1RouteWR2 = [[-100,360],[-150,400],[-150,-1200]];team1RouteWR3 = [[-100,360],[-50,400],[-50,-1200]];
        team1RouteFB = [[100,360],[50,400],[50,-1200]];team1RouteQB = [[0,200,],[0,-1200]];
      }
      if(team1Play == "kickReturnRight"){
        team1RouteLT = [[200,360],[200,-1200]];team1RouteLG = [[150,360],[150,-1200]];team1RouteC = [[100,360],[100,-1200]];team1RouteRG = [[50,360],[50,-1200]];team1RouteRT = [[50,360],[50,-1200]];
        team1RouteWR1 = [[200,360],[250,400],[250,-1200]];team1RouteWR2 = [[50,360],[50,400],[50,-1200]];team1RouteWR3 = [[50,360],[50,400],[50,-1200]];
        team1RouteFB = [[100,360],[150,400],[150,-1200]];team1RouteQB = [[50,200],[150,-1200]];
      }
      if(team1Play == "sweepLt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[-60,-60],[-60,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[-30,0]];
      }
      if(team1Play == "powerRt"){
        team1RouteLT = [[5,0],[5,-20],[5,-distTd]];team1RouteLG = [[5,0],[5,-20],[5,-distTd]];team1RouteC = [[5,-5],[5,-20],[5,-distTd]];team1RouteRG = [[5,0],[5,-20],[5,-distTd]];team1RouteRT = [[3,0],[3,-20],[3,-distTd]];
        team1RouteWR1 = [[20,-distTd]];team1RouteWR2 = [[-10,-10],[-20,-20],[-20,-distTd]];team1RouteWR3 = [[-3,-distTd]];
        team1RouteFB = [[50,-50],[60,-60],[75,-75],[80,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[10,-25]];
      }
      if(team1Play == "counterLt"){
        team1RouteLT = [[25,0],[30,-3],[35,-distTd]];team1RouteLG = [[25,0],[30,-3],[35,-distTd]];team1RouteC = [[25,0],[30,-3],[35,-distTd]];team1RouteRG = [[-10,20],[-60,25],[-75,-distTd]];team1RouteRT = [[-10,20],[-80,25],[-95,-distTd]];
        team1RouteWR1 = [[3,-distTd]];team1RouteWR2 = [[-20,-3],[-25,-10],[-20,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[50,-50],[60,-60],[75,-75],[80,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[10,0],[20,-10]];
      }
      if(team1Play == "crackReachLt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[10,-10],[40,-40],[80,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[10,-10],[40,-40],[80,-distTd]];team1RouteQB = [[0,0]];team1RouteTB = [[-30,0],[-30,0]];
      }
      if(team1Play == "zoneRt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[0,-distTd]];team1RouteWR3 = [[-5,-distTd]];
        team1RouteFB = [[-20,-20],[-20,-distTd]];team1RouteQB = [[0,0]];team1RouteTB = [[30,0],[30,0]];
      }
      if(team1Play == "treyLt"){
        team1RouteLT = [[25,0],[30,-3],[35,-distTd]];team1RouteLG = [[25,0],[30,-3],[35,-distTd]];team1RouteC = [[25,0],[30,-3],[35,-distTd]];team1RouteRG = [[-10,20],[-60,25],[-75,-distTd]];team1RouteRT = [[-10,20],[-80,25],[-95,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[0,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[-190,0],[-220,-30],[-220,-distTd]];team1RouteQB = [[0,0]];team1RouteTB = [[25,0],[50,-10],[50,-10]];
      }
      if(team1Play == "tossLt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-20,0],[-40,-40],[-30,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[-40,0],[-80,-60],[-60,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[-40,0],[-40,0],[-40,0]];
      }
      if(team1Play == "diveRt"){
        team1RouteLT = [[5,0],[5,-20],[5,-distTd]];team1RouteLG = [[5,0],[5,-20],[5,-distTd]];team1RouteC = [[5,-5],[5,-20],[5,-distTd]];team1RouteRG = [[-5,0],[-5,-20],[5,-distTd]];team1RouteRT = [[-20,-5],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[20,-distTd]];team1RouteWR2 = [[-10,-10],[-20,-20],[-20,-distTd]];team1RouteWR3 = [[-3,-distTd]];
        team1RouteFB = [[0,-50],[0,-60],[0,-75],[80,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[-25,-25],[-25,-25]];
      }
      if(team1Play == "isoRt"){
        team1RouteLT = [[5,0],[5,-20],[5,-distTd]];team1RouteLG = [[5,0],[5,-20],[5,-distTd]];team1RouteC = [[5,-5],[5,-20],[5,-distTd]];team1RouteRG = [[-5,0],[-10,-20],[-5,-distTd]];team1RouteRT = [[5,-5],[20,-20],[20,-distTd]];
        team1RouteWR1 = [[20,-distTd]];team1RouteWR2 = [[-10,-10],[-20,-20],[-20,-distTd]];team1RouteWR3 = [[-3,-distTd]];
        team1RouteFB = [[-20,-20],[-20,-distTd]];team1RouteQB = [[0,60]];team1RouteTB = [[40,0],[50,-10]];
      }
      if(team1Play == "53Post"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-120],[-50,-120]];team1RouteWR2 = [[0,-120],[300,-420]];team1RouteWR3 = [[0,-120],[50,-120]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[0,-30],[20,0]];
        targetLocation = [[-50,-120],[120,-240],[50,-120]];
      }
      if(team1Play == "54Seam"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-168],[0,-144]];team1RouteWR2 = [[0,-300]];team1RouteWR3 = [[0,-168],[0,-144]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[0,-30],[20,0]];
        targetLocation = [[0,-144],[0,-216],[0,-144]];
      }
      if(team1Play == "92Flat"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[0,-60],[-200,-260]];team1RouteWR3 = [[100,-100],[200,-100]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[0,-distTd]];
        targetLocation = [[0,-300],[-60,-120],[200,-100]];
      }
      if(team1Play == "92Slant"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[200,-260]];team1RouteWR2 = [[-200,-50],[-200,-50]];team1RouteWR3 = [[0,-60],[-200,-260]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[60,-120],[-180,-50],[-60,-120]];
      }
      if(team1Play == "99Seam"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-120],[0,-400]];team1RouteWR2 = [[0,-120],[0,-400]];team1RouteWR3 = [[0,-120],[0,-400]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[0,-240],[0,-144],[0,-240]];
      }
      if(team1Play == "powerPass"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-120],[300,-420]];team1RouteWR2 = [[0,-120],[240,-120]];team1RouteWR3 = [[0,-120],[0,-400]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[120,-240],[180,-120],[0,-240]];
      }
      if(team1Play == "TEDrag"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-180],[300,-180]];team1RouteWR2 = [[-3,-6],[-48,-48],[-400,-48]];team1RouteWR3 = [[0,-120],[-320,-420]];
        team1RouteFB = [[60,-60]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[100,-180],[-180,-48],[-240,-360]];
      }
      if(team1Play == "trapRt"){
        team1RouteLT = [[5,0],[25,5],[25,-distTd]];team1RouteLG = [[5,5],[50,5],[60,-5],[60,-distTd]];team1RouteC = [[-20,0],[-25,-20],[-25,-distTd]];team1RouteRG = [[-25,0],[-25,-20],[-25,-distTd]];team1RouteRT = [[10,5],[25,-20],[25,-distTd]];
        team1RouteWR1 = [[20,-distTd]];team1RouteWR2 = [[-10,-10],[-20,-20],[-20,-distTd]];team1RouteWR3 = [[-3,-distTd]];
        team1RouteFB = [[0,-50],[0,-60],[0,-75],[80,-distTd]];team1RouteQB = [[0,0]];team1RouteTB = [[-30,0],[-25,-5]];
      }
      if(team1Play == "57Smash"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-72],[120,-72]];team1RouteWR2 = [[0,-120],[24,-144],[-100,-268]];team1RouteWR3 = [[0,-72],[-72,-72]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[0,-30],[20,0]];
        targetLocation = [[72,-72],[-100,-268],[-72,-72]];
      }
      if(team1Play == "54Go"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-144],[0,-120]];team1RouteWR2 = [[0,-144],[0,-120]];team1RouteWR3 = [[3,-3],[0,-400]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[0,-30],[20,0]];
        targetLocation = [[0,-120],[0,-120],[3,-240]];
      }
      if(team1Play == "quickScreen"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[20,20],[50,20]];team1RouteWR2 = [[0,-distTd]];team1RouteWR3 = [[-20,20],[-50,20]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-10],[0,20]];team1RouteTB = [[60,-30],[200,-200],[200,-distTd]];
        targetLocation = [[50,20],[0,1000],[-50,20]];
      }
      if(team1Play == "blastLt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[0,-distTd]];team1RouteWR3 = [[0,-distTd]];
        team1RouteFB = [[60,-60],[60,-distTd]];team1RouteQB = [[-5,60]];team1RouteTB = [[-25,-25]];
      }
      if(team1Play == "crossBlockRt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[30,30],[50,30],[70,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-50,0],[-60,-60],[-60,-distTd]];team1RouteWR3 = [[-5,-distTd]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[5,60]];team1RouteTB = [[30,0],[30,0]];
      }
      if(team1Play == "reverseRt"){
        team1RouteLT = [[10,0],[20,20],[20,-distTd]];team1RouteLG = [[10,0],[20,0],[20,-distTd]];team1RouteC = [[10,10],[40,10],[60,-distTd]];team1RouteRG = [[30,30],[60,30],[100,-distTd]];team1RouteRT = [[10,0],[20,-20],[20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[0,-distTd]];team1RouteWR3 = [[0,-distTd]];
        team1RouteFB = [[-90,-90],[60,-distTd]];team1RouteQB = [[-40,40]];team1RouteTB = [[40,40],[70,40]];
      }
      if(team1Play == "90Hitch"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60]];team1RouteWR2 = [[0,-144],[0,-240]];team1RouteWR3 = [[0,-60]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[0,-60],[0,-240],[0,-60]];
      }
      if(team1Play == "59Out"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-144],[0,-340]];team1RouteWR2 = [[0,-120],[180,-120]];team1RouteWR3 = [[0,-144],[0,-340]];
        team1RouteFB = [[0,-120],[-180,-120]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[0,-240],[120,-120],[0,-240]];
      }
      if(team1Play == "52Wheel"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[100,-160]];team1RouteWR2 = [[120,-120],[120,-340]];team1RouteWR3 = [[0,-60],[-100,-160]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[60,-120],[120,-240],[-60,-120]];
      }
      if(team1Play == "wildcatSprintRt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[30,30],[50,30],[70,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-50,50],[-60,-60],[-60,-distTd]];team1RouteWR3 = [[-5,-distTd]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,-20],[0,-10]];team1RouteTB = [[-30,-30],[-50,-30],[-50,-distTd]];
      }
      if(team1Play == "motionSweepLt"){
        team1RouteLT = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteLG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteC = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRG = [[-10,0],[-20,-20],[-20,-distTd]];team1RouteRT = [[-10,0],[-20,-20],[-20,-distTd]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-150,-10],[-150,-40],[-150,-distTd]];team1RouteWR3 = [[-20,-distTd]];
        team1RouteFB = [[10,-10],[10,-40],[20,-distTd]];team1RouteQB = [[0,0]];team1RouteTB = [[0,-distTd]];
      }
      if(team1Play == "motionScreenLt"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-distTd]];team1RouteWR2 = [[-250,10]];team1RouteWR3 = [[0,-60],[-200,-260]];
        team1RouteFB = [[0,-distTd]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-distTd]];
        targetLocation = [[60,99999],[-250,10],[-60,-120]];
      }
      if(team1Play == "56Locate"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-144],[300,-444]];team1RouteWR2 = [[144,-144],[144,-120]];team1RouteWR3 = [[0,-240],[25,-216]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[144,-288],[144,-120],[25,-216]];
      }
      if(team1Play == "58Comeback"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-240],[-30,-216]];team1RouteWR2 = [[-60,-60],[-60,-120],[-108,-148],[-104,-144]];team1RouteWR3 = [[0,-240],[30,-216]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[-30,-216],[-104,-144],[30,-216]];
      }
      if(team1Play == "59HighLow"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-120],[0,-300]];team1RouteWR2 = [[60,-60],[300,-60]];team1RouteWR3 = [[0,-144],[-300,-144]];
        team1RouteFB = [[0,-120],[0,-300]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-120],[0,-300]];
        targetLocation = [[0,-270],[200,-60],[-40,-144]];
      }
      if(team1Play == "52WheelComeback"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[120,-180],[300,-360]];team1RouteWR2 = [[-120,-120],[-120,-340]];team1RouteWR3 = [[0,-240],[30,-216]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[120,-180],[-120,-240],[30,-216]];
      }
      if(team1Play == "56Storm"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-156],[300,-156]];team1RouteWR2 = [[0,-120],[240,-120]];team1RouteWR3 = [[0,-120],[0,-400]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[120,-156],[150,-120],[0,-240]];
      }
      //redZone
      if(team1Play == "yOptionAngle"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-120],[-20,-100]];team1RouteWR2 = [[0,-40],[5,-45],[-5,-50],[5,-55],[-5,-65],[20,-60]];team1RouteWR3 = [[-80,-80],[180,-180]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[20,-120]];
        targetLocation = [[-20,-100],[20,-60],[0,-160]];
      }
      if(team1Play == "divePass"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[5,-5],[-5,-5],[5,-5],[-5,-5],[5,-5],[-5,-5],[-20,-120]];team1RouteWR2 = [[-5,-40],[-5,-120]];team1RouteWR3 = [[5,-5],[-5,-5],[5,-5],[-5,-5],[5,-5],[20,-120]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[20,-120]];
        targetLocation = [[-20,-120],[20,-60],[20,-120]];
      }
      if(team1Play == "tbSwing"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[-20,-80],[-40,-60]];team1RouteWR2 = [[100,30],[120,30],[180,-60]];team1RouteWR3 = [[0,-120],[-5,-110]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[20,-120]];
        targetLocation = [[-40,-60],[120,30],[-5,-110]];
      }
      if(team1Play == "bubbleScreenLt"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[20,-60],[20,-120]];team1RouteWR2 = [[-120,30],[-120,20]];team1RouteWR3 = [[0,-60],[-60,-120]];
        team1RouteFB = [[0,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[120,-120]];
        targetLocation = [[-200,-120],[-120,20],[-60,-120]];
      }
      if(team1Play == "aceRtSlant"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[100,-160]];team1RouteWR2 = [[120,-40]];team1RouteWR3 = [[0,-60],[-100,-160]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[60,-120],[120,-40],[-60,-120]];
      }
      if(team1Play == "96Sail"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,20],[0,10],[0,30]];team1RouteC = [[0,20],[0,10],[0,30]];team1RouteRG = [[0,20],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-100],[100,-100]];team1RouteWR2 = [[0,-60],[60,-120]];team1RouteWR3 = [[0,-40],[60,-40]];
        team1RouteFB = [[-120,-120],[-120,-240]];team1RouteQB = [[0,10],[0,15]];team1RouteTB = [[0,-30],[30,-30]];
        targetLocation = [[100,-100],[60,-120],[60,-40]];
      }
      //Specials
      if(team1Play == "hailMaryLt"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-600],[0,-600]];team1RouteWR2 = [[0,-600],[0,-600]];team1RouteWR3 = [[0,-10],[-300,-240]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[0,-600],[0,-600],[-300,-240]];
      }

      if(team1Play == "endzoneTrail"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-60],[0,-240]];team1RouteWR2 = [[100,30],[120,30],[180,-60]];team1RouteWR3 = [[0,-120],[0,-480]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[20,-120]];
        targetLocation = [[0,-240],[180,-60],[0,-480]];
      }
      if(team1Play == "deepCrossBubbleRt"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-1],[20,-10]];team1RouteWR2 = [[-120,30],[-120,20]];team1RouteWR3 = [[0,-10],[-300,-240]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[20,-10],[-120,20],[-300,-240]];
      }
      if(team1Play == "hailMaryRt"){
        team1RouteLT = [[0,20],[0,10],[0,50]];team1RouteLG = [[0,-5],[0,10],[0,30]];team1RouteC = [[0,-5],[0,10],[0,30]];team1RouteRG = [[0,-5],[0,10],[0,30]];team1RouteRT = [[0,20],[0,10],[0,50]];
        team1RouteWR1 = [[0,-10],[300,-240]];team1RouteWR2 = [[0,-600],[0,-600]];team1RouteWR3 = [[0,-600],[0,-600]];
        team1RouteFB = [[-30,-30]];team1RouteQB = [[0,20],[0,20]];team1RouteTB = [[30,-30]];
        targetLocation = [[300,-240],[0,-600],[0,-600]];
      }

      //field goal offense1...
      if(team1Play == 'fieldGoal'){
        team1RouteLT = [[10,0],[10,10],[10,20]];team1RouteLG = [[10,0],[10,10],[10,20]];team1RouteC = [[0,5],[0,10]];team1RouteRG = [[-10,0],[-10,10],[-10,20]];team1RouteRT = [[-10,0],[-10,10],[-10,20]];
        team1RouteWR1 = [[10,0],[10,10],[10,20]];team1RouteWR2 = [[-10,0],[-10,10],[-10,20]];team1RouteWR3 = [[-10,0],[-10,10],[-10,20]];
        team1RouteFB = [[10,0],[10,10],[10,20]];team1RouteQB = [[0,0],[0,0]];team1RouteTB = [[60,-60],[72,-72],[72,-80]];
      }
      if(team1Play == 'fgBlock'){
        team1RouteLT = [[0,-20]];team1RouteLG = [[0,-20]];team1RouteC = [[0,-20]];team1RouteRG = [[0,-20]];team1RouteRT = [[0,-20]];
        team1RouteWR1 = [[0,-20]];team1RouteWR2 = [[0,-20]];team1RouteWR3 = [[0,-20]];
        team1RouteFB = [[0,-20]];team1RouteQB = [[0,-20]];team1RouteTB = [[0,-20]];
      }  
      //kickOff from team1...
      if(team1Play == 'kickOff'){
        team1RouteLT = [[0,-500],[0,-500]];team1RouteLG = [[0,-500],[0,-500]];team1RouteC = [[0,-500],[0,-500]];team1RouteRG = [[0,-500],[0,-500]];team1RouteRT = [[0,-500],[0,-500]];
        team1RouteWR1 = [[0,-500],[0,-500]];team1RouteWR2 = [[0,-500],[0,-500]];team1RouteWR3 = [[0,-500],[0,-500]];
        team1RouteFB = [[0,-500],[0,-500]];team1RouteQB = [[0,0],[0,0]];team1RouteTB = [[0,-500],[0,-500]];
      } 
      if(team1Play == 'kickOffOnside'){
        team1RouteLT = [[0,-500],[0,-500]];team1RouteLG = [[0,-500],[0,-500]];team1RouteC = [[0,-500],[0,-500]];team1RouteRG = [[0,-500],[0,-500]];team1RouteRT = [[0,-500],[0,-500]];
        team1RouteWR1 = [[0,-500],[0,-500]];team1RouteWR2 = [[0,-500],[0,-500]];team1RouteWR3 = [[0,-500],[0,-500]];
        team1RouteFB = [[0,-500],[0,-500]];team1RouteQB = [[0,0],[0,0]];team1RouteTB = [[0,-500],[0,-500]];
      } 

      //defense
      if(team1Play == "cov2"){
        team1RouteLT = [[0,5]];team1RouteLG = [[0,5]];team1RouteRG = [[0,5]];team1RouteRT = [[0,5]];
        team1RouteC = [[-20,5],[-20,50]];team1RouteFB = [[60,5],[60,60]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[-12,-24],[10,-24]];team1RouteWR2 = [[36,60],[36,120]];team1RouteTB = [[-36,60],[-36,120]];team1RouteWR3 = [[12,-24],[-10,-24]];
      }
      if(team1Play == "cov3"){
        team1RouteLT = [[0,5]];team1RouteLG = [[0,5]];team1RouteRG = [[0,5]];team1RouteRT = [[0,5]];
        team1RouteC = [[-20,5],[-20,50]];team1RouteFB = [[60,5],[120,5]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[0,60],[0,120]];team1RouteWR2 = [[0,30],[0,60]];team1RouteTB = [[-30,0],[-40,0]];team1RouteWR3 = [[0,120]];
      }
      if(team1Play == "cov4"){
        team1RouteLT = [[0,5]];team1RouteLG = [[0,5]];team1RouteRG = [[0,5]];team1RouteRT = [[0,5]];
        team1RouteC = [[-20,5],[-20,50]];team1RouteFB = [[60,5],[120,5]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[0,60],[0,120]];team1RouteWR2 = [[0,120]];team1RouteTB = [[0,30],[0,60]];team1RouteWR3 = [[0,30],[0,60]];
      }
      if(team1Play == "crash"){
        team1RouteLT = [[0,5]];team1RouteLG = [[0,5]];team1RouteRG = [[0,5]];team1RouteRT = [[0,5]];
        team1RouteC = [[-20,5],[-20,50]];team1RouteFB = [[60,5],[120,5]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[60,0],[120,-100]];team1RouteWR2 = [[36,60],[36,120]];team1RouteTB = [[-36,60],[-36,120]];team1RouteWR3 = [[-60,0],[-120,-100]];
      }
      if(team1Play == "sting"){
        team1RouteLT = [[0,5]];team1RouteLG = [[0,5]];team1RouteRG = [[0,5]];team1RouteRT = [[0,5]];
        team1RouteC = [[-20,5],[-20,50]];team1RouteFB = [[60,5],[120,5]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[0,60],[0,120]];team1RouteWR2 = [[0,30],[0,60]];team1RouteTB = [[0,-60],[60,-100]];team1RouteWR3 = [[0,120]];
      }
      if(team1Play == "blitz"){
        team1RouteLT = [[10,-15]];team1RouteLG = [[10,-15]];team1RouteRG = [[0,-15]];team1RouteRT = [[-10,-15]];
        team1RouteC = [[0,-50],[10,-60]];team1RouteFB = [[0,-50],[-10,-60]];//team1RouteQB = [[0,60]];
        team1RouteWR1 = [[0,60],[0,120]];team1RouteWR2 = [[0,30],[0,60]];team1RouteTB = [[0,-60],[60,-100]];team1RouteWR3 = [[0,120]];
      }




      //TEAM 2...
      //special teams
      if(team2Play == "kickOffMiddle"){
        team2RouteDB1 = [[0,600]];team2RouteDB2 = [[0,600]];team2RouteSS = [[0,600]];team2RouteFS = [[0,600]];
        team2RouteLB1 = [[0,600]];team2RouteLB2 = [[0,600]];team2RouteLB3 = [[0,600]];
        team2RouteDL1 = [[0,600]];team2RouteDL2 = [[0,600]];team2RouteDL3 = [[0,600]];team2RouteDL4 = [[0,600]];
      }
      if(team2Play == "kickReturn"){
        team2RouteDB1 = [[0,-300],[100,-300],[100,500]];team2RouteDB2 = [[0,-300],[-100,-300],[-100,500]];team2RouteSS = [[0,0]];team2RouteFS = [[0,-300],[-100,-300],[-100,500]];
        team2RouteLB1 = [[0,-300],[100,-300],[100,500]];team2RouteLB2 = [[0,-300],[0,500]];team2RouteLB3 = [[0,-300],[100,-300],[100,500]];
        team2RouteDL1 = [[0,-300],[-100,-300],[-100,500]];team2RouteDL2 = [[0,-300],[0,600]];team2RouteDL3 = [[0,-300],[0,600]];team2RouteDL4 = [[0,-300],[-100,-300],[-100,500]];
      }
      if(team2Play == "kickReturnOnside"){
        team2RouteDB1 = [[0,0],[0,-60],[0,600]];team2RouteDB2 = [[50,0],[50,30],[0,600]];team2RouteSS = [[0,0]];team2RouteFS = [[0,0],[0,-60],[0,600]];
        team2RouteLB1 = [[50,0],[50,30],[0,600]];team2RouteLB2 = [[0,0],[0,-60],[0,600]];team2RouteLB3 = [[50,0],[50,30],[0,600]];
        team2RouteDL1 = [[0,0],[0,100],[0,600]];team2RouteDL2 = [[50,0],[50,30],[0,600]];team2RouteDL3 = [[50,0],[50,30],[0,600]];team2RouteDL4 = [[0,0],[0,-60],[0,600]];
      }
      //field goal block
      if(team2Play == "fgBlock"){
        team2RouteDB1 = [[0,60],[60,120]];team2RouteDB2 = [[0,60],[-60,120]];team2RouteSS = [[0,120]];team2RouteFS = [[0,120]];
        team2RouteLB1 = [[0,120]];team2RouteLB2 = [[0,120]];team2RouteLB3 = [[0,120]];
        team2RouteDL1 = [[0,120]];team2RouteDL2 = [[0,120]];team2RouteDL3 = [[0,120]];team2RouteDL4 = [[0,120]];
      }
      if(team2Play == "fieldGoal"){
        team2RouteDB1 = [[10,0],[10,-20]];team2RouteDB2 = [[-10,0],[-10,-20]];team2RouteSS = [[0,0]];team2RouteFS = [[10,10],[10,-20]];
        team2RouteLB1 = [[0,10],[0,-20]];team2RouteLB2 = [[-10,60]];team2RouteLB3 = [[-10,10],[-10,-20]];
        team2RouteDL1 = [[10,10],[10,-20]];team2RouteDL2 = [[10,10],[10,-20]];team2RouteDL3 = [[-10,10],[-10,-20]];team2RouteDL4 = [[-10,10],[-10,-20]];
      }
      //Team2RandomOffense...
      if(team2Play == "pick"){
        if(team2RandomOffense == 0){team2Play = 'sweepLt';team2Formation = 'splitLt';}
        if(team2RandomOffense == 1){team2Play = 'sweepLt';team2Formation = 'splitRtFlip';}
        if(team2RandomOffense == 2){team2Play = 'sweepRt';team2Formation = 'splitRt';}
        if(team2RandomOffense == 3){team2Play = 'sweepRt';team2Formation = 'splitLtFlip';}
        if(team2RandomOffense == 4){team2Play = 'powerLt';team2Formation = 'iLt';}
        if(team2RandomOffense == 5){team2Play = 'powerRt';team2Formation = 'iRt';}
        if(team2RandomOffense == 6){team2Play = 'sweepLt';team2Formation = 'bunchLt';shotgun = true;}
        if(team2RandomOffense == 7){team2Play = 'sweepRt';team2Formation = 'bunchRt';shotgun = true;}
        if(team2RandomOffense == 8){team2Play = 'slantX';team2Formation = 'splitLtX';passPlay = true;}
        if(team2RandomOffense == 9){team2Play = 'curlX';team2Formation = 'splitRtX';passPlay = true;}
        if(team2RandomOffense == 10){team2Play = 'isoLt';team2Formation = 'iLt';}
        if(team2RandomOffense == 11){team2Play = 'isoRt';team2Formation = 'iRt';}
        if(team2RandomOffense == 12){team2Play = 'powerLt';team2Formation = 'iLt';}
        if(team2RandomOffense == 13){team2Play = 'powerRt';team2Formation = 'iRt';}
        if(team2RandomOffense == 14){team2Play = 'slantX';team2Formation = 'splitLtX';passPlay = true;}
        if(team2RandomOffense == 15){team2Play = 'curlX';team2Formation = 'splitRtX';passPlay = true;}
        if(team2RandomOffense == 16){team2Play = 'slantX';team2Formation = 'splitLtX';passPlay = true;}
        if(team2RandomOffense == 17){team2Play = 'curlX';team2Formation = 'splitRtX';passPlay = true;}
        if(team2RandomOffense == 18){team2Play = 'screenRtX';team2Formation = 'stackRtX';passPlay = true;}
        if(team2RandomOffense == 19){team2Play = 'screenLtX';team2Formation = 'stackLtX';passPlay = true;}
        if(team2RandomOffense == 20){team2Play = 'quickScreenLtX';team2Formation = 'aceStackLtX';passPlay = true;}
        if(team2RandomOffense == 21){team2Play = 'quickScreenLtX';team2Formation = 'aceStackLtX';passPlay = true;}
      }

      if(team2Play == "sweepLt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,10],[40,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[40,600]];team2RouteSS = [[30,0],[30,0],[150,0],[200,60]];
        team2RouteDL1 = [[20,10],[20,distTd2]];team2RouteDL2 = [[20,10],[20,distTd2]];team2RouteLB1 = [[20,10],[20,distTd2]];team2RouteDL3 = [[20,10],[20,distTd2]];team2RouteDL4 = [[20,10],[20,distTd2]];
      }
      if(team2Play == "sweepRt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[-20,10],[0,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[-40,600]];team2RouteSS = [[-30,0],[-30,0],[-150,0],[-200,60]];
        team2RouteDL1 = [[-20,10],[-20,distTd2]];team2RouteDL2 = [[-20,10],[-20,distTd2]];team2RouteLB1 = [[-20,10],[-20,distTd2]];team2RouteDL3 = [[-20,10],[-20,distTd2]];team2RouteDL4 = [[-20,10],[-20,distTd2]];
      }
      if(team2Play == "powerLt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[-20,20],[-20,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[40,600]];team2RouteSS = [[20,24],[20,24],[60,84],[150,60]];
        team2RouteDL1 = [[20,10],[20,distTd2]];team2RouteDL2 = [[20,10],[20,distTd2]];team2RouteLB1 = [[20,10],[20,distTd2]];team2RouteDL3 = [[20,10],[20,distTd2]];team2RouteDL4 = [[20,10],[20,distTd2]];
      }
      if(team2Play == "powerRt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,20],[20,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[-40,600]];team2RouteSS = [[-20,24],[-20,24],[-60,84],[-150,60]];
        team2RouteDL1 = [[20,10],[20,distTd2]];team2RouteDL2 = [[20,10],[20,distTd2]];team2RouteLB1 = [[20,10],[20,distTd2]];team2RouteDL3 = [[20,10],[20,distTd2]];team2RouteDL4 = [[20,10],[20,distTd2]];
      }
      if(team2Play == "isoLt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[-20,20],[-20,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[40,600]];team2RouteSS = [[20,24],[20,24],[0,30],[0,100]];
        team2RouteDL1 = [[20,10],[20,distTd2]];team2RouteDL2 = [[20,10],[20,distTd2]];team2RouteLB1 = [[20,10],[20,distTd2]];team2RouteDL3 = [[20,10],[20,distTd2]];team2RouteDL4 = [[20,10],[20,distTd2]];
      }
      if(team2Play == "isoRt"){
        team2RouteDB1 = [[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,20],[20,distTd2]];
        team2RouteLB2 = [[0,-40]];team2RouteLB3 = [[-40,600]];team2RouteSS = [[-20,24],[-20,24],[0,30],[0,100]];
        team2RouteDL1 = [[20,10],[20,distTd2]];team2RouteDL2 = [[20,10],[20,distTd2]];team2RouteLB1 = [[20,10],[20,distTd2]];team2RouteDL3 = [[20,10],[20,distTd2]];team2RouteDL4 = [[20,10],[20,distTd2]];
      }
      if(team2Play == "slantX"){
        team2RouteDB1 = [[0,20],[-30,30],[-30,0]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,5],[20,-50]];
        team2RouteLB2 = [[0,-60],[0,-58]];team2RouteLB3 = [[0,20],[30,30],[30,0]];team2RouteSS = [[0,48],[50,98]];
        team2RouteDL1 = [[0,10],[0,-30]];team2RouteDL2 = [[0,10],[0,-20]];team2RouteLB1 = [[0,10],[0,-20]];team2RouteDL3 = [[0,10],[0,-20]];team2RouteDL4 = [[0,10],[0,-30]];
        team2TargetX = 100;team2TargetY = yardlinePixel+98;
      }
      if(team2Play == "curlX"){
        team2RouteDB1 = [[0,20],[-30,30],[-30,0]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,5],[20,-50]];
        team2RouteLB2 = [[0,-60],[0,-58]];team2RouteLB3 = [[0,20],[30,30],[30,0]];team2RouteSS = [[0,140],[0,140]];
        team2RouteDL1 = [[0,10],[0,-30]];team2RouteDL2 = [[0,10],[0,-20]];team2RouteLB1 = [[0,10],[0,-20]];team2RouteDL3 = [[0,10],[0,-20]];team2RouteDL4 = [[0,10],[0,-30]];
        team2TargetX = 580;team2TargetY = yardlinePixel+120;
      }
      if(team2Play == "screenRtX"){
        team2RouteDB1 = [[0,10],[20,20],[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,5],[20,-50]];
        team2RouteLB2 = [[0,-20],[0,-18]];team2RouteLB3 = [[0,20],[30,30],[30,0]];team2RouteSS = [[10,35],[0,30]];
        team2RouteDL1 = [[0,10],[0,-30]];team2RouteDL2 = [[0,10],[0,-20]];team2RouteLB1 = [[0,10],[0,-20]];team2RouteDL3 = [[0,10],[0,-20]];team2RouteDL4 = [[0,10],[0,-30]];
        team2TargetX = 80;team2TargetY = yardlinePixel;
      }
      if(team2Play == "screenLtX"){
        team2RouteDB1 = [[0,10],[20,20],[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,5],[20,-50]];
        team2RouteLB2 = [[0,-20],[0,-18]];team2RouteLB3 = [[0,20],[30,30],[30,0]];team2RouteSS = [[10,35],[0,30]];
        team2RouteDL1 = [[0,10],[0,-30]];team2RouteDL2 = [[0,10],[0,-20]];team2RouteLB1 = [[0,10],[0,-20]];team2RouteDL3 = [[0,10],[0,-20]];team2RouteDL4 = [[0,10],[0,-30]];
        team2TargetX = 580;team2TargetY = yardlinePixel;
      }
      if(team2Play == "quickScreenLtX"){
        team2RouteDB1 = [[-10,10],[-10,20],[0,distTd2]];team2RouteDB2 = [[0,distTd2]];team2RouteFS = [[20,5],[20,-50]];
        team2RouteLB2 = [[0,-5],[1,-5]];team2RouteLB3 = [[0,20],[30,30],[30,0]];team2RouteSS = [[0,30],[-30,30]];
        team2RouteDL1 = [[0,10],[0,-30]];team2RouteDL2 = [[0,10],[0,-20]];team2RouteLB1 = [[0,10],[0,-20]];team2RouteDL3 = [[0,10],[0,-20]];team2RouteDL4 = [[0,10],[0,-30]];
        team2TargetX = 550;team2TargetY = yardlinePixel;
      }


      openOffensiveFormations = false;
      openOffensivePlaysI = false;
      openOffensivePlaysSplit = false;
      openOffensivePlaysShotgun = false;
      openOffensivePlaysBunch = false;
      openOffensivePlaysAce = false;
      openOffensivePlaysEmpty = false;
      openOffensivePlaysRedZone = false;
      openOffensivePlaysSpecials = false;
      team1PlaySet = false;team2PlaySet = false;
      playSelected = true;

    }

  }
