var Red = Red || {};

Red.TriggerBody = (function ()
{
    function Rect(w, h, x, y)
    {
        this.gameObject = null;

        this.type = 0;
        this.centerX = x || 0;
        this.conterY = y || 0;
        this.width = w;
        this.height = h;

        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;
    }

    Rect.prototype.update = function (x, y)
    {
        this.minX = x + this.centerX - this.width / 2;
        this.minY = y + this.centerY - this.height / 2;

        this.maxX = x + this.centerX + this.width / 2;
        this.maxY = y + this.centerY + this.height / 2;
    };
    
    function Circle(r, x, y)
    {
        this.gameObject = null;

        this.type = 1;
        this.centerX = x || 0;
        this.centerY = y || 0;
        this.radius = r;

        this.minX = 0;
        this.minY = 0;
        this.maxX = 0;
        this.maxY = 0;

        this.posX = 0;
        this.posY = 0;
    }

    Circle.prototype.update = function ( x, y )
    {
        this.posX = x + this.centerX;
        this.posY = y + this.centerY;

        this.minX = x + this.centerX - this.radius;
        this.minY = y + this.centerY - this.radius;
        this.maxX = x + this.centerX + this.radius;
        this.maxY = y + this.centerY + this.radius;
    };

    var _collision = [];
    _collision[0] = [];
    _collision[1] = [];

    /**
     *
     * @param rect1
     * @param rect2
     * @returns {boolean}
     */
    _collision[0][0] = function RectVSRect(rect1, rect2)
    {
        if (rect1.minX > rect2.maxX
            || rect1.maxX < rect2.minX
            || rect1.minY > rect2.maxY
            || rect1.maxY < rect2.minY)
            return false;
        return true;
    };

    _collision[0][1] = function RectVSCircle(rect, circle)
    {
        return (_collision[0][0]( rect, circle ));
    };

    _collision[1][0] = function CircleVSRect(circle, rect)
    {
        return (_collision[0][1]( rect, circle ));
    };

    /***
     *
     * @param circle1
     * @param circle2
     * @returns {boolean}
     */
    _collision[1][1] = function CircleCircle(circle1, circle2)
    {
        var deltaX = circle1.posX - circle2.posX;
        var deltaY = circle1.posY - circle2.posY;
        var disSq = deltaX * deltaX + deltaY * deltaY;
        var sumR = circle1.radius + circle2.radius;
        return disSq < ( sumR * sumR);
    };

    
    var _base = Red.Component;
    var _triggerID = 0;
    function TriggerBody(gameObject)
    {
        _base.call( this, gameObject );
        this.collider = null;
        this.triggerID = _triggerID++;
        this.isAwake = false;
        this.isActive = true;
        this.stayCols = [];


        this.startCall = null; //function (triggetBody) {};
        this.stayCall =  null; //function (triggetBody) {};
        this.exitCall =  null; //function (triggetBody) {};
    }

    TriggerBody.ComponentKey = "TriggerBody";
    TriggerBody.Create = function (gameObject)
    {
        var tb = new TriggerBody(gameObject);
        gameObject.game.physicsManager.addBody( tb );
        return tb;
    };

    TriggerBody.prototype = new _base();
    TriggerBody.prototype.constructor = TriggerBody;

    TriggerBody.prototype.createCircle = function (x, y, r)
    {
        this.collider = new Circle(r,x,y);
        this.collider.gameObject = this.gameObject;

    };

    TriggerBody.prototype.createRect = function (x, y, w, h)
    {
        this.collider = new Rect(w,h,x,y);
        this.collider.gameObject = this.gameObject;
    };

    TriggerBody.prototype.collision = function (other)
    {
        if( _collision[ this.collider.type ][ other.collider.type ]( this.collider, other.collider ) )
        {
            if( this.stayCols[ other.triggerID ] )
            {
                if( this.stayCall )
                {
                    this.stayCall( other );
                }
            }
            else
            {
                this.stayCols[ other.triggerID ] = other;
                if( this.startCall )
                {
                    this.startCall( other );
                }
            }

            return true;
        }
        else
        {
            if( this.stayCols[ other.triggerID ] )
            {
                if( this.exitCall )
                {
                    this.exitCall( other );
                }
                this.stayCols[ other.triggerID ] = null;
            }

            return false;
        }
    };


    return TriggerBody;
})();