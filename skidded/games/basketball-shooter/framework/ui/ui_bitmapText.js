var Red = Red || {};

Red.BitmapText = (function ()
{
    var _charList = [" ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
        , "+", "-", "="
        ,"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ,"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function BitmapText(name, parContainer)
    {
        this.name = name;
        this.charTextureList = [];
        this.defaultTex = null;
        this.container = new PIXI.Container();
        this.pivotContainer = new PIXI.Container();
        this.charHeight = 0;
        this.width = 0;
        this.height = 0;

        this.isActive = true;

        this.spritePool = [];
        this.spriteUseArr = [];

        if( parContainer )
        {
            parContainer.addChild( this.container );
        }
        this.container.addChild( this.pivotContainer );

        _init( this.name, this.charTextureList, this );
    }

    BitmapText.prototype = {
        setActive : function (active)
        {
            if( this.isActive === active ) return;

            this.isActive = active;
            this.container.visible = active;
        },
        setPosition : function (x, y)
        {
            this.container.position.set(x, y);
        },
        setPivot : function (x, y)
        {
            this.container.pivot.set(x, y);
            this.pivotContainer.position.set( this.width *  this.container.pivot.x,
                this.height *  this.container.pivot.y);

        },
        setScale : function (x)
        {
            this.container.scale.set( x );
        },
        setText : function (str)
        {
            this.clear();

            var prevX = 0;
            var prevY = 0;
            var widths = [];
            var widthIdx = 0;
            widths[0] = 0;

            this.height = this.charHeight;

            for( var i = 0; i < str.length; i++ )
            {
                if( str[i] === "\n" )
                {
                    prevX = 0;
                    prevY += this.charHeight;
                    widthIdx ++;
                    widths[widthIdx] = 0;
                    this.height += this.charHeight;
                    continue;
                }


                var spr = null;
                if( this.spritePool.length <= 0 )
                {
                    spr = new PIXI.Sprite();
                    this.pivotContainer.addChild( spr );
                }
                else
                {
                    spr = this.spritePool.shift();
                }
                this.spriteUseArr[i] = spr;
                spr.texture = this.charTextureList[ str[i] ] || this.defaultTex;
                spr.visible = true;
                spr.position.set(prevX, prevY);
                prevX += spr.texture.width;
                widths[widthIdx] += spr.texture.width;



            }

            for( var j = 0; j < widths.length; j++ )
            {
                if(this.width < widths[j])
                {
                    this.width = widths[j];
                }
            }

            //console.log( this.width * this.container.pivot.x  );

            this.pivotContainer.position.set( -this.width *  this.container.pivot.x,
                -this.height *  this.container.pivot.y);

            //console.log( this.container.transform );
            //console.log( this.pivotContainer.transform );



        },
        clear : function ()
        {
            for( var i = 0; i < this.spriteUseArr.length; i++ )
            {
                this.spriteUseArr[i].visible = false;
                this.spritePool.push( this.spriteUseArr[i] );
            }
            this.spriteUseArr.length = 0;
            this.width = 0;
            this.height = 0;

        },

    };
    
    function _init(name, charTextureList, self)
    {
        for( var i = 0; i < _charList.length; i++ )
        {
            var char = _charList[i];
            var tex = PIXI.utils.TextureCache[ name + char];

            if( !tex ) continue;

            charTextureList[char] = tex;

            if(self.defaultTex) continue;

            self.defaultTex = tex;
            self.charHeight = self.defaultTex.height;
        }
    }

    return BitmapText;
})();