var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 853,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT,
    //autoCenter: Phaser.Scale.CENTER_BOTH
},
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene: [
    //preLoader,
    //ScenePokiMenu,
    SceneMainMenu,
    SceneTimeMenu,
    SceneDifficultyMenu,
    SceneTeamSelect,
    ScenePlayoffTeamSelect,
    ScenePlayoffBracket,
    SceneGameModeMenu,
    SceneStadium,
    ScenePlaybook,
    SceneGameOver
],
pixelArt: true,
roundPixels: true,
//audio: {
 // disableWebAudio: true
//}
};
 
var game = new Phaser.Game(config);

var teams = ["buccaneers","buccaneers", "raiders"];
var playerGraphics = ['content/playerChiefs.png','content/playerBuccaneers.png'];
var team2Front = ["43","34","bear"];
var team2Coverage = ["cov1","cov2","cov3"];
var team2Secondary;
 
var ballCarrier;
var ballFlipping = false;
var ballPassed = false;
var ballScale = 0.33;
var ballSnapped = false;
var canSpin = true;
var canBlast = true;
var counterGmDropdown = 0;
var defensiveTeam = 2;
var difficulty = 1;
var down = 0;
var fieldGoal = false;
var fieldGoalAimSpeed = 5.0;
var fieldGoalKicked = false;
var football;
var fumbleChance = 0.75;
var fumblePossibility;
var gameOver = false;
var glowmonkey = true;
var goingFor2 = false;
var helmetHome = 'content/helmetChiefs.png';
var helmetVisitor = 'content/helmetBuccaneers.png';
var helmetHomeKey = 'helmetChiefs';
var helmetVisitorKey = 'helmetBuccaneers';
var inPlay = false;
var intercepted = false;
var kickBad = false;
var kickGood = false;
var kickOff = true;
var kickOffKicked = false;
var kickOffStarted = false;
var kickReturnTeam = 1;
var mobile = false;
var mobileBlast = false;
var mobileBoost = false;
var mobileDown = false;
var mobileLeft = false;
var mobileRight = false;
var mobileUp = false;
var mobilePassA = false;
var mobilePassS = false;
var mobilePassD = false;
var mobileSnap = false;
var mobileSpin = false;
var motion = false;
var motionStarted = false;
var musicLoaded = false;
var newGame = true;
var offensiveTeam = 1;
var onsideKick = false;
var openBigHit = false;
var openConversionGoodMC = false;
var openConversionNoGoodMC = false;
var openDefensivePlaybook = false;
var openDefensiveFronts = false;
var openDefensiveCoverages = false;
var openOffensivePlaybook = false;
var openFgBadMC = false;
var openFgGoodMC = false;
var openFgGoodMC2 = false;
var openFumble = false;
var openGoodDMC = false;
var openInstructions = false;
var openInterceptionMC = false;
var openKickOffPlaybook = false;
var openOffensivePlaysSplit = false;
var openOffensivePlaysI = false;
var openOffensivePlaysShotgun = false;
var openOffensivePlaysBunch = false;
var openOffensivePlaysAce = false;
var openOffensivePlaysEmpty = false;
var openOffensivePlaysRedZone = false;
var openOffensiveFormations = true;
var openOffensivePlays;
var openPATPlaybook = false;
var openSpecialTeamsPlaybook = false;
var openSafetyMC = false;
var openSafetyMC2 = false;
var openTouchdownMC = false;
var openTouchdownMC2 = false;
var radians = Math.PI/180;
var radians2 = 180/Math.PI;
var passPlay = false;
var player1Key = "player1";
var player2Key = "player2";
var player1Name;
var player2Name;
var playoffConference = "AFC";
var playoffRound = 1;
var playoffs = false;
var playSelected = false;
var primaryTarget;
var safety = false;
var safety2 = false;
var scoreTeam1 = 0;
var scoreTeam2 = 0;
var setKickoff = false;
var selectingHome = true;
var shotgun = false;
var sound = true;
var speedBoost = 100;
var statsInterceptions = 0;
var statsPassYards = 0;
var statsRushYards = 0;
var statsCompletions = 0;
var statsTouchdowns = 0;
var statsTotalYards = 0;
var statsYardlineStart;
var statsYardlineEnd;
var statsPass = false;
var statsRun = true;
var targetLocation = [];
var target;
var targetX;
var targetY;
var tackled = false;
var team1;
var team1Blocking;
var team1Formation = "kickReturn";
var team1Play;
var team1PlaySet = true;
var team1RouteQB;
var team1RouteFB;
var team1RouteTB;
var team1RouteWR1;
var team1RouteWR2;
var team1RouteWR3;
var team1RouteLT;
var team1RouteLG;
var team1RouteC;
var team1RouteRG;
var team1RouteRT;
var team2;
var team2Blocking;
var team2Formation = "kickOff";
var team2Play = "kickOffMiddle";
var team2PlaySet = true;
var team2RandomOffense = 0;
var team2RouteDB1;
var team2RouteDB2;
var team2RouteSS;
var team2RouteSS;
var team2RouteFS;
var team2RouteLB1;
var team2RouteLB2;
var team2RouteLB3;
var team2RouteDL1;
var team2RouteDL2;
var team2RouteDL3;
var team2RouteDL4;
var team2TargetX;
var team2TargetY;
var touchdown = false;
var time = 300;
var timeStopped = true;
var xSpeed;
var ySpeed;
var yardline = 35;
var yardlinePixel = 540;
var yardsToGo = 10;


var resetVariables = function(playoffRoundInt, playoffRoundBool){
  teams = ["buccaneers","buccaneers", "raiders"];
  playerGraphics = ['content/playerChiefs.png','content/playerBuccaneers.png'];
  team2Front = ["43","34","bear"];
  team2Coverage = ["cov1","cov2","cov3"];
  team2Secondary;
  
  ballCarrier;
  ballFlipping = false;
  ballPassed = false;
  ballScale = 0.33;
  ballSnapped = false;
  canSpin = true;
  canBlast = true;
  counterGmDropdown = 0;
  defensiveTeam = 2;
  difficulty = 1;
  down = 0;
  fieldGoal = false;
  fieldGoalAimSpeed = 5.0;
  fieldGoalKicked = false;
  football;
  fumbleChance = 0.75;
  fumblePossibility;
  gameOver = false;
  glowmonkey = true;
  goingFor2 = false;
  helmetHome = 'content/helmetChiefs.png';
  helmetVisitor = 'content/helmetBuccaneers.png';
  inPlay = false;
  intercepted = false;
  kickBad = false;
  kickGood = false;
  kickOff = true;
  kickOffKicked = false;
  kickOffStarted = false;
  kickReturnTeam = 1;
  mobile = false;
  mobileBlast = false;
  mobileBoost = false;
  mobileDown = false;
  mobileLeft = false;
  mobileRight = false;
  mobileUp = false;
  mobilePassA = false;
  mobilePassS = false;
  mobilePassD = false;
  mobileSnap = false;
  mobileSpin = false;
  motion = false;
  motionStarted = false;
  musicLoaded = false;
  newGame = true;
  offensiveTeam = 1;
  onsideKick = false;
  openBigHit = false;
  openConversionGoodMC = false;
  openConversionNoGoodMC = false;
  openDefensivePlaybook = false;
  openDefensiveFronts = false;
  openDefensiveCoverages = false;
  openOffensivePlaybook = false;
  openFgBadMC = false;
  openFgGoodMC = false;
  openFgGoodMC2 = false;
  openFumble = false;
  openGoodDMC = false;
  openInstructions = false;
  openInterceptionMC = false;
  openKickOffPlaybook = false;
  openOffensivePlaysSplit = false;
  openOffensivePlaysI = false;
  openOffensivePlaysShotgun = false;
  openOffensivePlaysBunch = false;
  openOffensivePlaysAce = false;
  openOffensivePlaysEmpty = false;
  openOffensivePlaysRedZone = false;
  openOffensiveFormations = true;
  openOffensivePlays;
  openPATPlaybook = false;
  openSpecialTeamsPlaybook = false;
  openSafetyMC = false;
  openSafetyMC2 = false;
  openTouchdownMC = false;
  openTouchdownMC2 = false;
  radians = Math.PI/180;
  radians2 = 180/Math.PI;
  passPlay = false;
  //playoffConference = "AFC";
  playoffRound = playoffRoundInt;
  console.log(playoffRound);
  //playoffs = false;
  playSelected = false;
  primaryTarget;
  safety = false;
  safety2 = false;
  scoreTeam1 = 0;
  scoreTeam2 = 0;
  setKickoff = false;
  selectingHome = true;
  shotgun = false;
  sound = true;
  speedBoost = 100;
  statsInterceptions = 0;
  statsPassYards = 0;
  statsRushYards = 0;
  statsCompletions = 0;
  statsTouchdowns = 0;
  statsTotalYards = 0;
  statsYardlineStart;
  statsYardlineEnd;
  statsPass = false;
  statsRun = true;
  targetLocation = [];
  target;
  targetX;
  targetY;
  tackled = false;
  team1;
  team1Blocking;
  team1Formation = "kickReturn";
  team1Play;
  team1PlaySet = true;
  team1RouteQB;
  team1RouteFB;
  team1RouteTB;
  team1RouteWR1;
  team1RouteWR2;
  team1RouteWR3;
  team1RouteLT;
  team1RouteLG;
  team1RouteC;
  team1RouteRG;
  team1RouteRT;
  team2;
  team2Blocking;
  team2Formation = "kickOff";
  team2Play = "kickOffMiddle";
  team2PlaySet = true;
  team2RandomOffense = 0;
  team2RouteDB1;
  team2RouteDB2;
  team2RouteSS;
  team2RouteSS;
  team2RouteFS;
  team2RouteLB1;
  team2RouteLB2;
  team2RouteLB3;
  team2RouteDL1;
  team2RouteDL2;
  team2RouteDL3;
  team2RouteDL4;
  team2TargetX;
  team2TargetY;
  touchdown = false;
  time = 300;
  timeStopped = true;
  xSpeed;
  ySpeed;
  yardline = 35;
  yardlinePixel = 540;
  yardsToGo = 10;
}




if(document.location.host != "www.glowmonkey.com"){
 //console.log("not at www.glowmonkey.com");
 //console.log(document.location.host);
 glowmonkey = false;
  }





  //Poki stuff...
  PokiSDK.init().then(
    () => {
        // successfully initialized
        console.log("PokiSDK initialized");
        // continue to game
    }   
    ).catch(
    () => {
        // initialized but the user has an adblock
        console.log("Adblock enabled");
        adBlocker = true;
        // feel free to kindly ask the user to disable AdBlock, like forcing weird usernames or showing a sad face; be creative!
        // continue to the game
    }   
    );
    PokiSDK.setDebug(false);
    
    
    //console.log(document.location.host);
    if(document.location.host != "www.glowmonkey.com"){
    //Poki stuff
    
    
    
   //end poki
    console.log("not at www.glowmonkey.com");
    }
    
    
    var StartLoading = function () {
      PokiSDK.gameLoadingStart();
    }
    
    var LoadingComplete = function() {
      console.log("We're done loading!");
      PokiSDK.gameLoadingFinished();
    }
    
    
    var startCommercial = function(){
      //muted = 0;
      sound = false;
      this.sound.mute = true;
      console.log("Commercial Starting");
       //Poki stuff...
      PokiSDK.commercialBreak().then(
        () => { //you can also use a normal function here
            console.log('End of commercial break');
            sound = true;
            this.sound.mute = false;
            //muted = 1;
        }
      );
      //end Poki stuff
    }
    
    
    var startCommercialFirst = function(){
      console.log("Commercial Starting");
      //muted = 0;
      sound = false;
      this.sound.mute = true;
       //Poki stuff...
       
      PokiSDK.commercialBreak().then(
        () => { //you can also use a normal function here
          //firstPlay = true;
            sound = true;
            this.sound.mute = false;
            console.log("Commercial break finished, proceeding to game");
            //PokiSDK.gameplayStart();
            //game.scene.start("SceneMainMenu");
            //game.scene.remove("ScenePokiMenu");
            //muted = 1;
        }
      );
      
     //game.scene.start("SceneMainMenu");
      //end Poki stuff
    }
    
    var gameStart = function(){
      console.log("gameStarting :)")
      //Poki...
      
      PokiSDK.gameplayStart();
      
    }
    
    var gameStop = function(){
      console.log("gameStopping");
      //Poki...
      
      PokiSDK.gameplayStop();
      
    }
  
    var happyTimeTD = function(){
      PokiSDK.happyTime(1.0);
    }
    var happyTimeInterception = function(){
      PokiSDK.happyTime(0.95);
    }
    var happyTimeBigHit = function(){
      PokiSDK.happyTime(0.5);
    }
    var happyTimeGoodD = function(){
      PokiSDK.happyTime(0.5);
    }
    var happyTimeFG = function(){
      PokiSDK.happyTime(0.5);
    }
    var happyTimeFumble = function(){
      PokiSDK.happyTime(0.75);
    }
    // end Poki stuff...