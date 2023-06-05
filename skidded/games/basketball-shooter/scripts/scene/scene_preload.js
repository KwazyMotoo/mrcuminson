var Red = Red || {};

Red.PreloadScene = (function ()
{
    var _game = null;

    var LoadData = [
        //{key : "rect", path : "assets/rect.png"},
        //{key : "triangle", path : "assets/triangle.png"},
        //{key : "triangle2", path : "assets/triangle2.png"},
        //{key : "circle", path : "assets/circle.png"},
        //{key : "basketball", path : "assets/basketball.json"},
        //{key : "tri",   path : "assets/tri.png"},
        //{key : "rightCol",   path : "assets/rightCol.png"},
        //{key : "leftCol",   path : "assets/leftCol.png"},
        //{key : "basketball2", path : "assets/basketball2.json"},
        //{key : "bg_base_01", path : "assets/bg_base_01.png"},
        {key : "bg_base_01", path : "assets/sprites/bg_base_01.png"},
        {key : "bg_base_02", path : "assets/sprites/bg_base_02.png"},
        {key : "basketball", path : "assets/sprites/basketball.json"},
        {key : "balls", path : "assets/sprites/balls.json"},
        {key : "black_cloud", path : "assets/spines/Black_Cloud/black_cloud.json"},
        {key : "player_01", path : "assets/spines/Player_01/player_01.json"},
        {key : "player_02", path : "assets/spines/Player_02/player_02.json"},
        {key : "get_point", path : "assets/spines/Text/get_point.json"},
        {key : "goallineout", path : "assets/spines/Text/goallineout.json"},
        {key : "text_gameover", path : "assets/spines/Text/text_gameover.json"},
        {key : "text_win_n_lose", path : "assets/spines/Text/text_win_n_lose.json"},
    ];


    function PreloadScene(game)
    {
        _game = game;
    }

    PreloadScene.prototype = {
        start : function ()
        {
            _loadAtlas();
            PIXI.loader.load(_onFinishedLoad);
        },
    };

    function _onFinishedLoad( loader, resources)
    {
        _game.resources = resources;

        _game.sceneManager.addScne( "select", new Red.SelectScene(_game) );
        _game.sceneManager.addScne( "lobby", new Red.LobbyScene(_game) );
        _game.sceneManager.addScne( "inGame", new Red.InGameScene(_game) );
        //_game.sceneManager.addScne( "test", new Red.TestScene(_game) );
        _game.sceneManager.changeScene( "lobby" );

    }

    function _loadAtlas()
    {
        var loadArr = LoadData;
        var len = loadArr.length;
        for(var i = 0; i < len; i++)
        {
            PIXI.loader.add(loadArr[i].key, loadArr[i].path);
        }
    }

    return PreloadScene;
})();