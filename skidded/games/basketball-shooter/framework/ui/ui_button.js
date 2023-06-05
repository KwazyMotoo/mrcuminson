var Red = Red || {};

Red.Button = (function ()
{
    function Button( sprite, buttonAction, normalTex, overTex, pushTex )
    {
        this.isActive = true;
        this.isOn = true;
        this.sprite = sprite;
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;

        this.normalCall = null;
        this.overCall = null;
        this.pushCall = null;

        sprite
        .on('pointerdown', this._onButtonDown.bind(this)  )
        .on('pointerup', this._onButtonUp.bind(this))
        .on('pointerupoutside', this._onButtonUp.bind(this))
        .on('pointerover', this._onButtonOver.bind(this))
        .on('pointerout', this._onButtonOut.bind(this));

        this.buttonAction = buttonAction || null;

        this.stateTextures = [];

        if( normalTex )
        {
            if( normalTex instanceof PIXI.Texture)
            {
                this.stateTextures[ Button.NORMAL ] = normalTex;
            }
            else
            {
                this.stateTextures[ Button.NORMAL ] = PIXI.Texture.fromImage(normalTex);
            }

        }
        if( overTex )
        {
            if( overTex instanceof PIXI.Texture)
            {
                this.stateTextures[ Button.OVER ] = overTex;
            }
            else
            {
                this.stateTextures[ Button.OVER ] = PIXI.Texture.fromImage(overTex);
            }
        }
        if( pushTex )
        {
            if( pushTex instanceof PIXI.Texture)
            {
                this.stateTextures[ Button.PUSH ] = pushTex;
            }
            else
            {
                this.stateTextures[ Button.PUSH ] = PIXI.Texture.fromImage(pushTex);
            }
        }
    }

    Button.NORMAL = 0;
    Button.OVER = 1;
    Button.PUSH = 2;
    Button.OFF = 3;

    Button.prototype = {
        setActive : function (active)
        {
            if( this.isActive === active ) return;

            this.isActive = active;
            if( active )
            {
                this.sprite.visible = true;
                this.sprite.interactive = true;
                this.sprite.buttonMode = true;
            }
            else
            {
                this.sprite.visible = false;
                this.sprite.interactive = false;
                this.sprite.buttonMode = false;
            }
        },

        setOffTexture : function (tex)
        {
            this.stateTextures[ Button.OFF ] = PIXI.Texture.fromImage(tex);;
        },

        setOnOff : function (isOn)
        {
            this.isOn = isOn;
            if( this.isOn )
            {
                this._setTexture(Button.NORMAL);
            }
            else
            {
                this._setTexture(Button.OFF);
            }
        },


        _onButtonDown : function ()
        {
            if( !this.isOn ) return;

            this.isdown = true;
            this._setTexture( Button.PUSH );
            if(this.pushCall)
            {
                this.pushCall();
            }
        },

        _onButtonUp : function ()
        {
            if( !this.isOn ) return;

            if (this.isOver)
            {
                this._setTexture( Button.OVER );

                if(this.overCall)
                {
                    this.overCall();
                }
            }
            else
            {
                this._setTexture( Button.NORMAL );

                if(this.normalCall)
                {
                    this.normalCall();
                }
            }

            if( this.isdown )
            {
                this.isdown = false;
                this.buttonAction && this.buttonAction();
            }

        },

        _onButtonOver : function ()
        {
            if( !this.isOn ) return;

            this.isOver = true;

            if (this.isdown) {
                return;
            }
            this._setTexture( Button.OVER );
            if(this.overCall)
            {
                this.overCall();
            }
        },

        _onButtonOut : function ()
        {
            if( !this.isOn ) return;

            this.isOver = false;
            this.isdown = false;
            this._setTexture( Button.NORMAL );
            if(this.normalCall)
            {
                this.normalCall();
            }
        },
        
        _setTexture : function ( state )
        {
            if( this.stateTextures[ state ] )
            {
                this.sprite.texture = this.stateTextures[ state ];
            }
        }
    };

    return Button;
})();