var Red = Red || {};

Red.Time = (function ()
{
    function Time()
    {
        this.fixedTime = 1000 / 60;
        this.lastFixedTime = Date.now();
        this.deltaTime = 0;
        this.lastTime = Date.now();

        this.fpsCount = 0;
        this.fps = 0;
        this.lastFpsTime = Date.now();

        this.timeScale = 1;
    }
    
    return Time;
})();