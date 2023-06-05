var Red = Red || {};

Red.GameMode = {
    single : 0,
    double : 1,
    challenge : 2,
    //multi : 3,
    count : 3,

    0 : "single",
    1 : "double",
    2 : "challenge",
    //4 : "multi"
};

Red.GameTarget = {
    point : 0,
    turn : 1,
    free : 2,
    count : 3,

    0 : "point",
    1 : "turn",
    2 : "free",
};

Red.GAME_DATA = {
    userID : 0,
    singleMode : true,
    gameMode : Red.GameMode.single,
    target : Red.GameTarget.point,
    maxPoint : 20,
    maxTurn : 1,
};

Red.CONFIG = {
    controllerAngleSpeed : Math.PI / 2,
    controllerAngleLimit : Red.Math.DEG_TO_RAD * 80,
    controllerPowerMin : 500,
    controllerPowerMax : 1000,
    controllerPowerSpeed : 700,
    ballElasticity : 0.7
};

Red.AdressData = {
    game_ws : "ws://localhost:8080",
    guestLogin : "http://localhost:8081/login/guest"
};

Red.MESSAGE_TYPE = {
    Login : "login",
    Logout : "logout",
    CS_ENTER : "CS_ENTER",
    CS_SHOT : "CS_SHOT",
};