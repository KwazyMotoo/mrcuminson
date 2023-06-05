var Red = Red || {};

Red.Math = (function ()
{
    function Mathf()
    {
    }

    /**
     *
     * @param start {number}
     * @param end {number}
     * @param t {number} 0 ~ 1 사이값
     * @returns {*}
     */
    Mathf.Lerp = function (start, end, t)
    {
        return start + (end - start) * t;
    };

    /**
     *
     * @param min {int}
     * @param max {int}
     * @returns {number}
     * min 포함, max 미포함
     */
    Mathf.RandomInt = function (min, max)
    {
        return Math.floor( min + Math.random() * (max - min));
    };

    Mathf.RandomFloat = function (min, max)
    {
        return  min + Math.random() * (max - min);
    };

    /**
     *
     * @param a {Red.Vector2} or { x , y }
     * @param b {Red.Vector2} or { x , y }
     * @returns {number}
     */
    Mathf.Distance = function (a, b)
    {
        return Math.sqrt( ((a.x - b.x) * (a.x - b.x)) + ((a.y - b.y) * (a.y - b.y )) );
    };

    /**
     *
     * @param aX
     * @param aY
     * @param bX
     * @param bY
     * @returns {number}
     * @constructor
     */
    Mathf.Distance2 = function (aX, aY, bX, bY)
    {
        return Math.sqrt( ((aX - bX) * (aX - bX)) + ((aY - bY) * (aY - bY )) );
    };

    Mathf.Clamp = function(v, min, max)
    {
        return v < min ? min : (v > max ? max : v);
    };

    Mathf.CopyObj = function(obj) {
        if (null === obj || "object" !== typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    };

    Mathf.Normalized = function (vec)
    {
        var invLen = (vec.x !== 0 || vec.y !== 0) ? 1 / Math.sqrt(vec.x * vec.x + vec.y * vec.y) : 0;
        vec.x *= invLen;
        vec.y *= invLen;
        return vec;
    };

    /**
     * 0---->1  왼쪽에서 오른쪽으로 가는 수평한 선분일 경우  위에서 아래로 가는 선분과 충돌하면 den은 음수,
     *                                                  아래에서 위로 가는 선분과 충돌하면 den은 양수
     *
     *          위에서 아래로 가는 수직인 선분일 경우  왼쪽에서 오른쪽으로 가는 선분과 충돌하면 den은 음수
     *                                             오른쪽에서 왼쪽으로 가는 선분과 충돌하면 den은 양수
     *
     * @param point1 vector2 or {x,y} or float
     * @param point2 vector2 or {x,y} or float
     * @param point3 vector2 or {x,y} or float
     * @param point4 vector2 or {x,y} or float
     * @param x3     float
     * @param y3     float
     * @param x4     float
     * @param y4     float
     * @returns {number}  충돌일 경우 0 이외의 값 반환, 충돌 아닐경우 0 반환.
     * @constructor
     */
    Mathf.SegmentCollision = function ( point1, point2, point3, point4, x3, y3, x4, y4 )
    {
        if (x3)
        {
            point1 = {x: point1, y: point2};
            point2 = {x: point3, y: point4};
            point3 = {x: x3, y: y4};
            point4 = {x: x4, y: y4};
        }

        var den = ( point4.y - point3.y ) * ( point2.x - point1.x ) - ( point4.x - point3.x  ) * ( point2.y - point1.y );
        if (den === 0)
        {
            return 0;
        }

        var ua = (( point4.x - point3.x ) * ( point1.y - point3.y ) - ( point4.y - point3.y ) * ( point1.x - point3.x )) / den;
        var ub = (( point2.x - point1.x ) * ( point1.y - point3.y ) - ( point2.y - point1.y ) * ( point1.x - point3.x )) / den;

         // if (ua >= 0 && ua <= 1 || ub >= 0 && ub <= 1)
         // {
         //     console.log(point1.x + "\n" + point1.y + "\n" + point2.x + "\n" + point2.y
         //     + "\n" + point3.x + "\n" + point3.y + "\n" + point4.x + "\n" + point4.y
         //     + "\n" + den + "\n" + ua + "\n" + ub);
         // }

        if( ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1 )
        {
            // console.log(point1.x.toFixed(3) + "\n" + point1.y.toFixed(3) + "\n" + point2.x.toFixed(3) + "\n" + point2.y.toFixed(3) );
            // console.log(point3.x.toFixed(3) + "\n" + point3.y.toFixed(3) + "\n" + point4.x.toFixed(3) + "\n" + point4.y.toFixed(3) );
            // console.log(den.toFixed(3) + "\n" + ua.toFixed(3) + "\n" + ub.toFixed(3) );
            return den;
        }
        else return 0;
    };

    Mathf.DEG_TO_RAD = Math.PI / 180;
    Mathf.RAD_TO_DEG  = 180 / Math.PI;

    Mathf.RotX2D = function( point, rad )
    {
        point.y = point.y * Math.cos(rad);
        return point;
    };

    Mathf.RotY2D = function(point, rad)
    {
        point.x = point.x * Math.cos(rad);
        return point;
    };

    Mathf.RotZ2D = function(point, rad)
    {
        var x = point.x * Math.cos( rad ) + point.y * Math.sin(rad);
        var y = point.x * -Math.sin(rad) + point.y + Math.cos(rad);
        point.x = x;
        point.y = y;
        return point;
    };

    Mathf.RotX3D = function( point, rad )
    {
        //  1   0   0
        //  0  cos -sin
        //  0  sin  cos

        var cos = Math.cos(rad);
        var sin = Math.sin(rad);

        var y = (point.y * cos) + (point.z * -sin);
        var z = (point.y * sin) + (point.z * cos);

        point.y = y;
        point.z = z;
        return point;
    };

    Mathf.RotY3D = function(point, rad)
    {
        // cos  0  sin
        //  0   1   0
        //-sin  0  cos

        var cos = Math.cos(rad);
        var sin = Math.sin(rad);

        var x =(point.x * cos) + (point.z * sin);
        var z = (point.x * -sin) + (point.z * cos);

        point.x = x;
        point.z = z;
        return point;
    };

    Mathf.RotZ3D = function(point, rad)
    {
        // cos -sin  0
        // sin  cos  0
        //  0    0   1

        var cos = Math.cos(rad);
        var sin = Math.sin(rad);

        var x = (point.x * cos) + (point.y * -sin);
        var y = (point.x * sin) + (point.y * cos);

        point.x = x;
        point.y = y;
        return point;
    };

    Mathf.Scale = function(point, s)
    {
        point.x *= s;
        point.y *= s;
        return point;
    };


    Mathf.ScaleX = function(point, s)
    {
        point.x *= s;
        return point;
    };

    Mathf.ScaleY = function(point, s)
    {
        point.y *= s;
        return point;
    };

    Mathf.SkewX = function( point, rad )
    {
        //1	tan(ay)
        //0	1
        var tan = Math.tan( rad );

        var x = point.x +  tan * point.y;

        point.x = x;
        return point;
    };

    Mathf.SkewY = function( point, rad )
    {
        //1	0
        //tan(ax)	1
        var tan = Math.tan( rad );

        var y = point.x * tan + point.y;
        point.y = y;
        return point;
    };

    return Mathf;
})();