var Red = Red || {};

Red.SceneManager = (function ()
{
    function SceneManager()
    {
        this.scenes = [];
        this.currentScene = {};
    }

    SceneManager.prototype = {
        boot : function (game)
        {
            game.update.fixedUpdate.push( this.fixedUpdate.bind( this ) );
            game.update.preUpdate.push( this.preUpdate.bind( this ) );
            game.update.normalUpdate.push( this.update.bind( this ) );
            game.update.postUpdate.push( this.postUpdate.bind( this ) );

            window.addEventListener("keydown", this.onKeyDown.bind(this), false);
            window.addEventListener("keyup", this.onKeyUp.bind(this), false);
            window.addEventListener("touchstart", this.onMouseDown.bind(this), false);
            window.addEventListener("touchend", this.onMouseUp.bind(this), false);
            window.addEventListener("touchmove", this.onMouseMove.bind(this), false);
            window.addEventListener("mousedown", this.onMouseDown.bind(this), false);
            window.addEventListener("mouseup", this.onMouseUp.bind(this), false);
            window.addEventListener("mousemove", this.onMouseMove.bind(this), false);
            window.addEventListener("mousewheel", this.onKeyDown.bind(this), false);
        },
        
        fixedUpdate : function (delta)
        {
            if( this.currentScene.fixedUpdate )
            {
                this.currentScene.fixedUpdate(delta);
            }
        },

        preUpdate : function (delta)
        {
            if( this.currentScene.preUpdate )
            {
                this.currentScene.preUpdate(delta);
            }
        },

        update : function (delta)
        {
            if( this.currentScene.update )
            {
                this.currentScene.update(delta);
            }
        },

        postUpdate : function (delta)
        {
            if( this.currentScene.postUpdate )
            {
                this.currentScene.postUpdate(delta);
            }
        },

        addScne : function (sceneName, scene)
        {
            this.scenes[sceneName] = scene;
            if( scene.create )
            {
                scene.create();
            }
        },

        changeScene : function (sceneName)
        {
            if( this.currentScene.finish )
            {
                this.currentScene.finish();
            }

            this.currentScene = this.scenes[sceneName];

            if( this.currentScene.start )
            {
                this.currentScene.start();
            }
        },

        onKeyDown : function (e)
        {
            this.currentScene && this.currentScene.onKeyDown && this.currentScene.onKeyDown(e);
        },

        onKeyUp : function (e)
        {
            this.currentScene && this.currentScene.onKeyUp && this.currentScene.onKeyUp(e);
        },

        onMouseDown : function (e)
        {
            this.currentScene && this.currentScene.onMouseDown && this.currentScene.onMouseDown(e);
        },

        onMouseUp : function (e)
        {
            this.currentScene && this.currentScene.onMouseUp && this.currentScene.onMouseUp(e);
        },

        onMouseMove : function (e)
        {
            this.currentScene && this.currentScene.onMouseMove && this.currentScene.onMouseMove(e);
        },

        onMouseWheel : function (e)
        {
            this.currentScene && this.currentScene.onMouseWheel && this.currentScene.onMouseWheel(e);
        },
    };
    
    return SceneManager;
})();