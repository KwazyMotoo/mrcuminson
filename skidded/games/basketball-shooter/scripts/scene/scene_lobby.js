var Red = Red || {};

Red.LobbyScene = (function ()
{
    var _game = null;
    function LobbyScene(game)
    {
        _game = game;

        this.bg = null;
        this.titleLogo = null;
        this.titleCopyright = null;
        this.challBtn = null;
        this.doubleBtn = null;
        this.singleBtn = null;
    }

    LobbyScene.prototype = {
        create : function ()
        {
            var container = _game.containerManager.getContaner( "fixedui" );
            var bgCon = _game.containerManager.getContaner("bg");

            this.bg = new Red.Background(_game);
            this.bg.create( bgCon, _game.camera );
            _game.pointerManager.addPointer( "bg", this.bg );

            this.titleLogo = _game.factory.sprite( 178, 58, "title_title", container );
            this.titleCopyright = _game.factory.sprite( 256,500,"title_copyright", container );

            this.challBtn = _game.factory.button( 225, 274
                , "btn_mode_chall_normal"
                , "btn_mode_chall_over"
                , "btn_mode_chall_push"
                ,function ()
                {
                    Red.GAME_DATA.singleMode = true;
                    Red.GAME_DATA.gameMode = Red.GameMode.challenge;
                    _game.networkManager.create( Red.GAME_DATA.singleMode );
                    _game.sceneManager.changeScene( "inGame" );


                }, container);

            this.doubleBtn = _game.factory.button( 395, 274
                , "btn_mode_2p_normal"
                , "btn_mode_2p_over"
                , "btn_mode_2p_push"
                ,function ()
                {
                    Red.GAME_DATA.singleMode = true;
                    Red.GAME_DATA.gameMode = Red.GameMode.double;
                    _game.networkManager.create( Red.GAME_DATA.singleMode );
                    _game.sceneManager.changeScene( "inGame" );
                }, container);

            this.singleBtn = _game.factory.button( 627, 274
                , "btn_mode_single_normal"
                , "btn_mode_single_over"
                , "btn_mode_single_push"
                ,function ()
                {
                    Red.GAME_DATA.singleMode = true;
                    Red.GAME_DATA.gameMode = Red.GameMode.single;
                    _game.networkManager.create( Red.GAME_DATA.singleMode );
                    _game.sceneManager.changeScene( "inGame" );
                }, container);


            _game.pointerManager.addPointer("bg", this.bg);
            this.finish();
        },

        start : function ()
        {
            this.bg.init();

            this.titleLogo.visible = true;
            this.titleCopyright.visible = true;
            this.challBtn.setActive( true );
            this.doubleBtn.setActive( true );
            this.singleBtn.setActive( true );
        },

        finish : function ()
        {
            this.titleLogo.visible = false;
            this.titleCopyright.visible = false;
            this.challBtn.setActive( false );
            this.doubleBtn.setActive( false );
            this.singleBtn.setActive( false );
        },

        update : function (delta)
        {
            //this.startBtn.sprite.rotation += delta;
        },
    };

    return LobbyScene;
})();