var Red = Red || {};

Red.Vector2 = (function ()
{
    function Vector2(x, y)
    {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector2.prototype = {
        toString : function ()
        {
            return ["x:", this.x, "y:", this.y].join(" ");
        },
        set : function (x, y)
        {
            this.x = x || 0;
            this.y = y || 0;
        },
        negative : function ()
        {
            this.x = -this.x;
            this.y = -this.y;
        },
        add : function ( x, y )
        {
            this.x += x;
            this.y += y;
        },
        sub : function ( x, y )
        {
            this.x -= x;
            this.y -= y;
        },
        mad : function (v, s)
        {
            this.x += v.x * s;
            this.y += v.y * s;
        },
        addVec2 : function ( vec2 )
        {
            this.x += vec2.x;
            this.y += vec2.y;
        },
        subVec2 : function ( vec2 )
        {
            this.y -= vec2.y;
            this.x -= vec2.x;
        },
        scale : function ( s )
        {
            this.x *= s;
            this.y *= s;
        },
        length : function ()
        {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        lengthSq : function ()
        {
            return (this.x * this.x + this.y * this.y);
        },
        normalize: function ()
        {
            var invLen = (this.x !== 0 || this.y !== 0) ? 1 / Math.sqrt(this.x * this.x + this.y * this.y) : 0;
            this.x *= invLen;
            this.y *= invLen;
        },
        dot : function ( vec2 )
        {
            return this.x * vec2.x + this.y * vec2.y;
        },
        cross : function ( vec2 )
        {
            return this.x * vec2.y - this.y * vec2.x;
        },
        toAngle : function ()
        {
            return Math.atan2( this.y, this.x );
        },
        rotate : function (angle)
        {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            return this.set(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
        }
    };

    Vector2.Add = function(vec1, vec2)
    {
        return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    };

    Vector2.Sub = function (vec1, vec2)
    {
        return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    };
    Vector2.Negative = function (vec)
    {
        return new Vector2(-vec.x, -vec.y);
    };

    Vector2.Normalized = function (vec)
    {
        var invLen = (vec.x !== 0 || vec.y !== 0) ? 1 / Math.sqrt(vec.x * vec.x + vec.y * vec.y) : 0;
        return new Vector2( vec.x * invLen, vec.y * invLen );
    };
    Vector2.Duplicate  = function (vec)
    {
        return new Vector2( vec.x, vec.y );
    };
    Vector2.Rotation = function (angle)
    {
        return new Vector2( Math.cos(angle), Math.sin(angle) );
    };
    Vector2.Rotate = function(vec, angle)
    {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Vector2(vec.x * c - vec.y * s, vec.x * s + vec.y * c);
    };
    Vector2.Perp = function (vec)
    {
        // Return perpendicular vector (90 degree rotation)
        return new Vector2( -vec.y, vec.x );
    };
    Vector2.RPerp = function (vec)
    {
        // Return perpendicular vector (-90 degree rotation)
        return new Vector2( vec.y, -vec.x );
    };
    Vector2.Mad = function (vec1, vec2, s)
    {
        return new Vector2(vec1.x + vec2.x * s, vec1.y + vec2.y * s);
    };
    Vector2.Scale = function(vec, s) {
        return new Vector2(vec.x * s, vec.y * s);
    };
    Vector2.Distance = function(vec1, vec2)
    {
        var dx = vec2.x - vec1.x;
        var dy = vec2.y - vec1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Vector2.DistanceSq = function(vec1, vec2)
    {
        var dx = vec2.x - vec1.x;
        var dy = vec2.y - vec1.y;
        return dx * dx + dy * dy;
    };
    Vector2.Lerp = function( vec1, vec2, t )
    {
        //float lerp(s, e, t) = s*(1-t) + e*t;
        return new Vector2( (vec1.x * 1 - t) + (vec2.x * t), (vec1.y * 1 - t) + (vec2.y * t) );
    };
    Vector2.Dot = function ( vec1, vec2 )
    {
        return vec1.x * vec2.x + vec1.y * vec2.y;
    },
    Vector2.Cross = function ( vec1, vec2 )
    {
        return vec1.x * vec2.y - vec1.y * vec2.x;
    };

    return Vector2;
})();