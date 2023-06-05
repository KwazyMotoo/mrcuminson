var Red = Red || {};

Red.TextFormat = (function ()
{
    function TextFormat()
    {
    }

    TextFormat.convertToTextInfo = function(string)
    {
        var infos = [];
        var info = {};

        for( var i = 0; i < string.length; i++ )
        {
            switch (string[i])
            {
                case "<":
                    i = _textInfoProcess( string, i, info );
                    break;

                default:
                    infos.push( { char : string[i], color : info.color, scale : info.scale } );
                    break;
            }
        }

        return infos;
    };

    TextFormat.getStringFormInfo = function (info)
    {
        var str = "";
        for(var i = 0; i < info.length; i++)
        {
            str += info[i].char;
        }
        return str;
    };
    
    function _textInfoProcess(string, startIdx, info )
    {
        var idx = startIdx + 1;
        var cmd = "";
        var value = "";



        while ( true )
        {
            var char = string[idx];
            if( char === "=" || char === ">")
            {
                break;
            }
            else
            {
                cmd += char;
                idx++;
            }
        }

        if( string[idx] === "=" )
        {
            idx++;
            while ( true )
            {
                if( string[idx] !== ">")
                {
                    value += string[idx];
                    idx++;
                }
                else
                {
                    break;
                }
            }
        }

        switch (cmd)
        {
            case "color" :
            case "COLOR":
                info.color = value;
                break;
            case "size":
            case "SIZE":
            case "scale":
            case "SCALE":
                info.scale = parseFloat(value);
                break;

            case "/color" :
            case "/COLOR":
                info.color = undefined;
                break;
            case "/size":
            case "/SIZE":
            case "/scale":
            case "/SCALE":
                info.scale = undefined;
                break;
        }

        return idx;
    };

    return TextFormat;
})();