<div id="webretro-container"></div>
<br>
<input type="button" id="fullscreen" value="Fullscreen">
<br>
<br>

<script src="https://binbashbanana.github.io/webretro/embed/embed.js"></script>

<script>
    var game = {system: "nes", rom: "2048.nes"}

    var frame = webretroEmbed(document.getElementById("webretro-container"), "https://binbashbanana.github.io/webretro/", game);
            document.getElementById("fullscreen").onclick = function() {
                frame.requestFullscreen();
            };
</script>

<style>
    #webretro-container {
        width: 800px;
        height: 600px;
    }
</style>