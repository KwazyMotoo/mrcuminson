var Red = Red || {};

// scrollArea 와 rootContainer 의 부모가 같아야함.

Red.ScrollArea = (function ()
{
    function ScrollArea()
    {
        this.rootContainer = null;
        this.scrollArea = null;
        this.mask = null;
        this.isMouseOver = false;
        this.moveDelta = 4;

        this.scrollRect = {};
        this.barBg = null;
        this.barRect = null;

    }

    ScrollArea.prototype = {
        create : function (x, y, w, h, par)
        {
            this.rootContainer = new PIXI.Container();
            par.addChild( this.rootContainer );

            this.mask = new PIXI.Graphics();
            this.mask.beginFill(0x000000);
            this.mask.drawRect( 0,0,w, h );
            this.mask.position.set( x,y );
            this.rootContainer.addChild( this.mask );
            this.mask.interactive = true;

            this.scrollRect.top = y;
            this.scrollRect.bottom = y + h;
            this.scrollRect.left = x;
            this.scrollRect.right = x + w;
            this.scrollRect.width = w;
            this.scrollRect.height = h;

            this.barBg = new PIXI.Graphics();
            this.barBg.beginFill(0x555555);
            this.barBg.drawRect( 0,0,8, h );
            this.barBg.position.set( x + w, y );
            this.barBg.visible = false;

            this.barRect = new PIXI.Graphics();
            //this.barRect.beginFill(0x96faff);
            //this.barRect.drawRect( 0,0,8, h );
            //this.barRect.position.set( x + w, y );

            this.rootContainer.addChild( this.barBg );
            this.rootContainer.addChild( this.barRect );

            this.mask
            .on('pointerover', this._onButtonOver.bind(this))
            .on('pointerout', this._onButtonOut.bind(this));

            this.rootContainer.visible = false;
            this.setActive( true );

            //window.addEventListener("mousewheel", this._onMouseWheel.bind(this), false);
        },

        setActive : function (active)
        {
            if( active === this.rootContainer.visible ) return;

            this.rootContainer.visible = active;
            if( active )
            {
                window.addEventListener("mousewheel", this._onMouseWheel.bind(this), false);
            }
            else
            {
                window.removeEventListener("mousewheel", this._onMouseWheel.bind(this), false);
            }
        },

        setMaskRect : function (x, y, w, h)
        {
            this.mask.clear();
            this.mask.beginFill(0x000000);
            this.mask.drawRect( 0,0,w, h );
            this.mask.position.set( x,y );
        },

        setScrollArea : function ( area )
        {
            this.scrollArea = area;
            this.scrollArea.mask = this.mask;
        },

        setMoveDelta : function (value)
        {
            this.moveDelta = value
        },

        refresh : function ( isBottom )
        {
            this.barRect.clear();

            if( this.scrollArea.height > this.scrollRect.height )
            {
                this.barRect.beginFill(0xff0000);
                this.barRect.drawRect( 0,0,8, this.scrollRect.height * (this.scrollRect.height / this.scrollArea.height) );
                this.barRect.position.set( this.scrollRect.right, this.scrollRect.top );
                this.barBg.visible = true;
                this.barRect.visible = true;
            }
            else
            {
                this.barBg.visible = false;
                this.barRect.visible = false;
            }

            if( isBottom && this.scrollArea.height > this.scrollRect.height )
            {
                this.scrollArea.y = this.scrollRect.bottom - this.scrollArea.height;
            }
            else
            {
                this.scrollArea.y = this.scrollRect.top;
            }

            this._updateBarRect();
        },

        _onMouseWheel : function (e)
        {
            if(this.isMouseOver && this.scrollArea.height > this.scrollRect.height)
            {
                if( e.deltaY > 0 )
                {
                    //아래로

                    this.scrollArea.y -= this.moveDelta;

                    if( this.scrollArea.y + this.scrollArea.height < this.scrollRect.bottom )
                    {
                        this.scrollArea.y = this.scrollRect.bottom - this.scrollArea.height;
                    }
                }
                else
                {
                    //위로

                    this.scrollArea.y += this.moveDelta;
                    if( this.scrollArea.y >  this.scrollRect.top  )
                    {
                        this.scrollArea.y = this.scrollRect.top;
                    }
                }

                this._updateBarRect();
            }
        },

        _updateBarRect : function ()
        {
            if( this.scrollArea.height > this.scrollRect.height ) return;
            var value = (this.scrollRect.top - this.scrollArea.y) / (this.scrollArea.height - this.scrollRect.height);
            this.barRect.y =  this.scrollRect.top + ((this.scrollRect.height  - this.barRect.height) * value);
        },

        _onButtonOver : function (e)
        {
            this.isMouseOver = true;
        },

        _onButtonOut : function (e)
        {
            this.isMouseOver = false;
        },
    };

    return ScrollArea;
})();