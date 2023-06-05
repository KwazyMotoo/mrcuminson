var Red = Red || {};

Red.SoundManager = (function ()
{
    function SoundManager()
    {
        this.sounds = [];
    }

    SoundManager.prototype = {
        addSound : function (key, sound)
        {
            this.sounds[key] = sound;
        },

        playSound : function (key, volume, loop, call)
        {
            volume = volume || 1;
            loop = loop || false;

            var sound = this.sounds[key];

            sound.volume = volume;
            sound.loop = loop;
            sound.play(call);
        },

        stopSound : function (key)
        {
            var sound = this.sounds[key];
            sound.stop();
        },

        isPlaySound : function (key)
        {
            return this.sounds[key].isPlaying;
        }
    };

    return SoundManager;
})();