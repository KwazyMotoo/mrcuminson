var Red = Red || {};

Red.CSVParser = (function ()
{
    function CSVParser()
    {
    }

    CSVParser.parse = function(string)
    {
        var dataList = [];
        var headArr = [];
        var str = {};
        str.str = "";
        var firstLine = true;
        var headNum = 0;
        var data = {};

        for( var i = 0; i < string.length; i++ )
        {
            switch ( string[i] )
            {
                case "\r":
                    break;
                case "\n" :
                    if( firstLine )
                    {
                        headArr.push(  str.str );
                        firstLine = false;
                    }
                    else
                    {
                        data[ headArr[headNum] ] = str.str;
                        dataList.push(data);
                    }

                    str.str = "";
                    headNum = 0;
                    data = {};
                    break;
                case "\"" :
                    i = checkQuotation( string, i , str);
                    break;
                case "," :

                    if( firstLine )
                    {
                        headArr.push(  str.str );
                        //dic[ str.str ] = [];
                    }
                    else
                    {
                        data[ headArr[headNum] ] = str.str;
                        //dic[ headArr[headNum] ].push( str.str );
                    }

                    headNum++;
                    str.str = "";
                    break;
                default:
                    str.str += string[i];
                    break;
            }
        }

        if( headNum !== 0 )
        {
            data[ headArr[headNum] ] = str.str;
            dataList.push(data);
        }

        return dataList;
    };

    function checkQuotation( string, startIdx, str  )
    {
        var idx = startIdx + 1;

        while ( true )
        {
            if( string[idx] === "\"")
            {
                idx++;
            }
            else
            {
                break;
            }
        }

        while (true)
        {
            if( string[idx] !== "\"")
            {
                str.str += string[idx];
                idx++;
            }
            else
            {
                break;
            }
        }

        while ( true )
        {
            if( string[idx] === "\"")
            {
                idx++;
            }
            else
            {
                break;
            }
        }

        return idx - 1;
    }


    return CSVParser;
})();