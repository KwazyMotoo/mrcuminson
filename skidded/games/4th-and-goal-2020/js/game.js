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
    preLoader,
    SceneCrazyMenu,
    SceneMainMenu,
    SceneTimeMenu,
    SceneDifficultyMenu,
    SceneTeamSelect,
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

var teams = ["packers","packers", "raiders"];
var playerGraphics = ['content/playerChiefs.png','content/playerNiners.png'];
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
var crazyGames = false;
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
var goingFor2 = false;
var helmetHome = 'content/helmetChiefs.png';
var helmetVisitor = 'content/helmetNiners.png';
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
var playoffRound = 1;
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



if(document.location.host != "www.glowmonkey.com"){
 //console.log("not at www.glowmonkey.com");
 //console.log(document.location.host);
  }

if (window.location.href.indexOf("crazygames.com") != -1){
  crazyGames = true;
}