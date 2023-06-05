var Red = Red || {};

Red.AABB2 = (function ()
{
    function AABB2(minX, minY, maxX, maxY)
    {
        this.min = new Red.Vector2( minX || 999999, minY || 999999 );
        this.max = new Red.Vector2( maxX || -999999, maxY || -999999 );
    }

    AABB2.prototype = {
        toString : function ()
        {
            return ["min:", this.min.x,this.min.y, "max:", this.max.x, this.max.y].join(" ");
        },
        set : function (minX, minY, maxX, maxY)
        {
            this.min.x = minX;
            this.min.y = minY;
            this.max.x = maxX;
            this.max.y = maxY;
        },
        clear : function ()
        {
            this.min.x = 999999;
            this.min.y = 999999;
            this.max.x = -999999;
            this.max.y = -999999;
        },
        isClear : function ()
        {
            return this.min.x > this.max.x;
        },
        add : function (aabb)
        {
            if (this.min.x > aabb.min.x) this.min.x = aabb.min.x;
            if (this.max.x < aabb.max.x) this.max.x = aabb.max.x;
            if (this.min.y > aabb.min.y) this.min.y = aabb.min.y;
            if (this.max.y < aabb.max.y) this.max.y = aabb.max.y;
        },
        addPoint : function(p)
        {
            if (this.min.x > p.x) this.min.x = p.x;
            if (this.max.x < p.x) this.max.x = p.x;
            if (this.min.y > p.y) this.min.y = p.y;
            if (this.max.y < p.y) this.max.y = p.y;
            return this;
        },
        addExtents : function(center, extent_x, extent_y)
        {
            if (this.min.x > center.x - extent_x) this.min.x = center.x - extent_x;
            if (this.max.x < center.x + extent_x) this.max.x = center.x + extent_x;
            if (this.min.y > center.y - extent_y) this.min.y = center.y - extent_y;
            if (this.max.y < center.y + extent_y) this.max.y = center.y + extent_y;
            return this;
        },
        expand : function(ax, ay)
        {
            this.min.x -= ax;
            this.min.y -= ay;
            this.max.x += ax;
            this.max.y += ay;
            return this;
        },
        intersectsBounds : function(target)
        {
            if (this.min.x > target.max.x
                || this.max.x < target.min.x
                || this.min.y > target.max.y
                || this.max.y < target.min.y)
            {
                return false;
            }
            return true;
        },
        containPoint : function(p)
        {
            if (p.x < this.min.x || p.x > this.max.x || p.y < this.min.y || p.y > this.max.y)
            {
                return false;
            }
            return true;
        },
        constructor : AABB2,
    };

    AABB2.IntersectsBounds = function (bound1, bound2)
    {
        if (bound1.min.x > bound2.max.x
            || bound1.max.x < bound2.min.x
            || bound1.min.y > bound2.max.y
            || bound1.max.y < bound2.min.y)
        {
            return false;
        }
        return true;
    };

    AABB2.ContainPoint = function(bound, p)
    {
        if (p.x < bound.min.x || p.x > bound.max.x || p.y < bound.min.y || p.y > bound.max.y)
            return false;
        return true;
    };
    
    return AABB2;
})();