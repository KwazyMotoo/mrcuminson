var EVENT_SIGNAL = {
    ballSleep : "ballSleep",
    blueGoal : "blueGoal",
    redGoal : "redGoal",
    ballOutOfBound : "ballOutOfBound",
    ballOut : "ballOut",
    ballReset : "ballReset",
    catchBall : "catchBall",
    earsActive : "earsActive",
    shotBall : "shotBall",

    selectPlayer_ : "selectPlayer_",

    onChangeTurn : "onChangeTurn",

    onRedWin : "onRedWin",
    onBlueWin : "onBlueWin",
    onDraw  : "onDraw",
    onFinishGame : "onFinishGame",
    onStartGame : "onStartGame",
    onTimeOver : "onTimeOver",
    onUpsideDown : "onUpsideDown",
};

(function ()
{
    var game = Red.Game({width:960, height:540, resolution : 1, antialias : false, backgroundColor : 0x000000});
    game.isDebug = true;
    Red.game = game;

    Red.BIT_BALL = 0x0001;
    Red.BIT_ETC = 0x0002;
    Red.BIT_NET_STATIC = 0x0004;
    Red.BIT_NET_COL = 0x0008;
    Red.BIT_NET_DONTCOL = 0x0016;
    Red.BIT_NET_PLAYER = 0x0032;

    PhysicsRus.ContactSolver.COLLISION_SLOP = 0.08;
    PhysicsRus.Space.SLEEP_LINEAR_TOLERANCE = 25;
    PhysicsRus.Space.SLEEP_ANGULAR_TOLERANCE = Red.Math.DEG_TO_RAD * (20);

    //game.pixi.renderer.backgroundColor = 0x000000;

    game.physicsManager.initPhysicsRus();
    game.physicsManager.initTrigger();
    game.networkManager = new Red.NetworkManager(game);

    game.camera.bounds.minY = -420;

    game.factory.container("bg");
    game.factory.container("player");
    game.factory.container("ui");
    game.factory.container("fixedui", true);
    game.factory.container("ball");
    game.factory.container("net");
    game.factory.container("goalpost");
    game.factory.container("cloud");
    game.factory.container("debug");


    game.signalManager.addSignal( EVENT_SIGNAL.ballSleep );
    game.signalManager.addSignal( EVENT_SIGNAL.blueGoal );
    game.signalManager.addSignal( EVENT_SIGNAL.redGoal );
    game.signalManager.addSignal( EVENT_SIGNAL.ballOutOfBound );
    game.signalManager.addSignal( EVENT_SIGNAL.ballOut );          //볼아웃 처리.
    game.signalManager.addSignal( EVENT_SIGNAL.ballReset );
    game.signalManager.addSignal( EVENT_SIGNAL.catchBall );
    game.signalManager.addSignal( EVENT_SIGNAL.earsActive );
    game.signalManager.addSignal( EVENT_SIGNAL.onRedWin );
    game.signalManager.addSignal( EVENT_SIGNAL.onBlueWin );
    game.signalManager.addSignal( EVENT_SIGNAL.onDraw );
    game.signalManager.addSignal( EVENT_SIGNAL.onStartGame );
    game.signalManager.addSignal( EVENT_SIGNAL.onTimeOver );

    // game.httpManager.addRequest( "config", Red.Utill.getUrl_googleSpreadsheetToCSV( "1k0XxOjcOe1D70VCTcwRU6v-Vf5rFe0PycqphBvi1vEQ" ));
    // game.httpManager.startRequest(function (requests)
    // {
    //     var configData = Red.CSVParser.parse(requests["config"].text);
    //     if( configData )
    //     {
    //         console.log( configData );
    //         //game.physicsManager.rusPhysics.space.gravity.y = 2000;
    //         game.isDebug = configData[0].isDebug.toLowerCase() === "true";
    //         game.physicsManager.rusPhysics.space.gravity.y = parseInt( configData[0]["gravity"] );
    //         Red.CONFIG.controllerAngleSpeed = parseInt( configData[0]["angleSpeed"] ) * (Math.PI/180);
    //         Red.CONFIG.controllerPowerMin = parseInt( configData[0]["powerMin"] );
    //         Red.CONFIG.controllerPowerMax = parseInt( configData[0]["powerMax"] );
    //         Red.CONFIG.controllerPowerSpeed = parseInt( configData[0]["powerSpeed"] );
    //         Red.CONFIG.ballElasticity = parseFloat( configData[0]["ballElasticity"] );
    //
    //         //Red.GAME_DATA.gameMode = parseInt( configData[0].gameMode );
    //     }
    //
    //     game.sceneManager.addScne( "preload", new Red.PreloadScene(game) );
    //     game.sceneManager.changeScene("preload");
    // });

    game.isDebug = false;
    game.sceneManager.addScne( "preload", new Red.PreloadScene(game) );

    window.SDK_OPTIONS = {
        gameId: "mq7kyqfxgg8wjdt7rligojk8zai2lyo8",
        onEvent: function (a) {
            switch (a.name) {
                case "SDK_GAME_PAUSE":
                    game.pause = true;
                    // pause game logic / mute audio
                    break;
                case "SDK_GAME_START":
                    game.pause = false;
                    // advertisement done, resume game logic and unmute audio
                    break;
                case "SDK_READY":
                    // when sdk is ready
                    game.sceneManager.changeScene("preload");
                    break;
            }
        }
    };
    (function (a, b, c) {
        var d = a.getElementsByTagName(b)[0];
        a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://lablockedgames.com/gamemo/gamemo2.js", d.parentNode.insertBefore(a, d))
    })(document, "script", "gamemonetize-sdk");

    window.test = function (pa) {
        game.pause = pa;
    }



})();