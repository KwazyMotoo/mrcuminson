var Red = Red || {};

Red.Utill = (function ()
{
    function Utill()
    {
    }

    Utill.stringFormat = function (string)
    {
        var args = arguments;
        return string.replace(/{(\d+)}/g, function (match, number)
        {
            return args[ parseInt(number)+1];
        });;
    };

    Utill.getUrl_googleSpreadsheetToCSV = function (key, sheetID)
    {
        sheetID = sheetID || 0;
        return Utill.stringFormat("https://docs.google.com/spreadsheets/d/{0}/export?gid={1}&format=csv",key,sheetID);
    };

    return Utill;
})();