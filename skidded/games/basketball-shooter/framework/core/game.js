var Red = Red || {};

Red.Game = (function ()
{
    var view = null;
    var maxSizeX = 800;
    var maxSizeY = 600;
    var viewWidth = 0;
    var viewHeight = 0;

    var resizeEvent = null;

    Red.SYSTEMEVENT = {
        OnWindowResize : "OnWindowResize",
    };

    function Game( config)
    {

        config = config || {};
        config.width = config.width || maxSizeX;
        config.height = config.height || maxSizeX;
        config.resolution = config.resolution || 1;
        config.antialias = config.antialias || false;
        config.backgroundColor = config.backgroundColor || 0x000000;

        maxSizeX = config.width;
        maxSizeY = config.height;

        Red.game = this;

        this.width = config.width;
        this.height = config.height;
        this.halfWidth = config.width / 2;
        this.halfHeight = config.height / 2;

        this.pause = false;

        this.renderer = new PIXI.autoDetectRenderer({ width:config.width, height:config.height, backgroundColor:config.backgroundColor, antialias : config.antialias, resolution : config.resolution});
        // this.pixi.renderer.options.antialias = true;
        // this.pixi.renderer.roundPixels = true;
        // this.pixi.renderer.forceFXAA = true;

        this.stage = new PIXI.Container();
        this.isDebug = false;

        this.world = new Red.World();
        this.camera = new Red.Camera();
        this.time = new Red.Time();
        this.sceneManager = new Red.SceneManager();
        this.update = new Red.Update();
        this.factory = new Red.Factory();
        this.actionsManager = new Red.ActionManager();
        this.containerManager = new Red.ContainerManager();
        this.signalManager = new Red.SignalManager();
        this.physicsManager = new Red.PhysicsManager();
        this.debugManager = new Red.DebugManager();
        this.pointerManager = new Red.PointerManager();
        this.soundManager = new Red.SoundManager();
        this.httpManager = new Red.HttpManager();

        this.world.boot(this);
        this.camera.boot(this);
        this.update.boot(this);
        this.factory.boot(this);
        this.sceneManager.boot( this );
        this.actionsManager.boot( this );
        this.containerManager.boot( this );
        this.debugManager.boot( this );

        view = this.renderer.view;
        document.body.appendChild( view );

        resizeEvent = this.signalManager.addSignal(Red.SYSTEMEVENT.OnWindowResize);

        resize();
        window.onorientationchange = resize;
        window.onresize = resize;
        this.requestFullScreen = requestFullScreen;

        // '게임화면'에 대한 '실제화면' 비율
        this.getScreenRate = function ()
        {
            return viewHeight / this.height;
        };

        return this;
    }

    function requestFullScreen()
    {
        if(document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if(document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if(document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if(document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }

    function resize()
    {
         //꽉채우기
         // if (window.innerWidth * maxSizeY <= window.innerHeight * maxSizeX)
         // {
         //     view.style.position = "";
         //     view.style.display = "block";
         //     view.style.width = "100%";
         //     view.style.height = "100%";
         // }
         // else
         // {
         //     if (((window.innerHeight * maxSizeX) / (window.innerWidth * maxSizeY) * 100) >= 80)
         //     {
         //         view.style.position = "absolute";
         //         view.style.width = "100%";
         //         view.style.height = "100%";
         //     }
         //     else
         //     {
         //         view.style.position = "";
         //         view.style.display = "block";
         //         view.style.width = ((window.innerHeight * maxSizeX) / (window.innerWidth * maxSizeY) * 100) + "%";
         //         view.style.height = "100%";
         //     }
         // }

            //비율에 맞게
          var ratio = maxSizeX / maxSizeY;
          if (window.innerWidth / window.innerHeight >= ratio)
          {
              viewWidth = window.innerHeight * ratio;
              viewHeight = window.innerHeight;
          }
          else
          {
              viewWidth = window.innerWidth;
              viewHeight = window.innerWidth / ratio;
          }
          
          // 가운데 정렬
          // view.style.left = '50%';
          // view.style.top = '50%';
          // view.style.transform = 'translate3d( -50%, -50%, 0 )';

          view.style.width = viewWidth + 'px';
          view.style.height = viewHeight + 'px';
          view.style.position = 'absolute';

          view.style.left = ((window.innerWidth - viewWidth) >> 1) + 'px';
          view.style.top = ((window.innerHeight - viewHeight) >> 1) + 'px';

          resizeEvent.dispatch();
    }

    return Game;
})();