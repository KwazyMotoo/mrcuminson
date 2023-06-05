var Red = Red || {};

Red.Transform = (function ()
{
    var Vector2 = Red.Vector2;

    var _base = Red.Component;
    function Transform(gameObject)
    {
        _base.call( this, gameObject );
        this.superParent = null;
        this.container = gameObject.container;
        this.transform = gameObject.container.transform;
        this.superParent = this.container;
        while ( this.superParent.parent.parent )
        {
            this.superParent = this.superParent.parent;
        }

    }

    Transform.ComponentKey = "Transform";
    Transform.Create = function ( gameObject )
    {
        var tr = new Transform(gameObject);
        return tr;
    };

    Transform.prototype = new _base();
    Transform.prototype.constructor = Transform;

    Transform.prototype.setWorldPosition = function (x, y)
    {
        x += this.superParent.x;
        y += this.superParent.y;
        var parLocal = this.container.parent.toLocal( new Red.Vector2( x, y ) );
        this.container.position.set(parLocal.x, parLocal.y);
    };

    Transform.prototype.getWorldPosition = function ()
    {
        var pos = this.container.parent.toGlobal( this.container.position );
        pos.x -= this.superParent.x;
        pos.y -= this.superParent.y;
        return pos;
    };

    Transform.prototype.addWorldPosition = function (x, y)
    {
        var worldPos = this.getWorldPosition();
        this.setWorldPosition( worldPos.x + x, worldPos.y + y );
    };


    Transform.prototype.setLocalPosition = function (x, y)
    {
        this.container.position.set( x, y );
    };

    Transform.prototype.getLocalPosition = function ()
    {
        return Red.Vector2.Duplicate(this.container.position);
    };

    Transform.prototype.addLocalPostion = function (x, y)
    {
        var pos = this.container.position;
        this.container.position.set( pos.x + x, pos.x + y );
    };


    //물리에 이용하는 회전체는 될 수 있으면 회전 안하게..

    Transform.prototype.setRotation = function (rad)
    {
        this.container.rotation = rad;
    };

    Transform.prototype.getRotaion = function ()
    {
        return this.container.rotation;
    };

    Transform.prototype.addRotation = function (rad)
    {
        this.container.rotation += rad;
    };



    // Transform.prototype.setPivot = function (x, y)
    // {
    //     this.transform.pivot.set(x, y);
    // };
    //
    // Transform.prototype.getPivot = function ()
    // {
    //     return this.transform.pivot;
    // };

    Transform.prototype.dispose = function ()
    {

    };

    // //로컬 좌표를 월드 좌표로 변환..
    // Transform.prototype.getWorldPoint = function(pos)
    // {
    //     var worldTr = this.transform.worldTransform;
    //     var worldX = ( worldTr.tx ) + ( pos.x * worldTr.d ) + ( pos.y * worldTr.c );
    //     var worldY = ( worldTr.ty ) + ( pos.x * worldTr.b ) + ( pos.y * worldTr.a );
    //
    //     return new Vector2( worldX, worldY );
    // };
    //
    // //월드 좌표를 로컬좌표로 변환..
    // Transform.prototype.getLocalPoint = function (pos)
    // {
    //     var worldTr = this.transform.worldTransform;
    //     var px = pos.x - worldTr.tx;
    //     var py = pos.y - worldTr.ty;
    //
    //     var localX = px * worldTr.d + py * worldTr.c;
    //     var localY = px * worldTr.b + py * worldTr.a;
    //     return new Vector2( localX, localY );
    // };
    //
    // //로컬 회전값을 월드 회전값으로 변환 ( rad )
    // Transform.prototype.getWorldRotaion = function (rad)
    // {
    //     return rad + Math.acos( this.transform.worldTransform.a );
    // };
    //
    // //월드 회전값을 로컬 회전값으로 변환 ( rad )
    // Transform.prototype.getLocalRotaion = function (rad)
    // {
    //     return rad - Math.acos( this.transform.worldTransform.a );
    // };
    //
    // //월드 회전값을 로컬 회전값으로 변환 ( rad )
    // Transform.prototype.getLocalRotaionVec = function (vec)
    // {
    //     var localVec = new Vector2();
    //
    //     localVec.x = vec.x - Math.acos( this.transform.worldTransform.a );
    //     localVec.y = vec.y - Math.asin( this.transform.worldTransform.b );
    //     return localVec;
    // };

    return Transform;
})();



/*

new PIXI.Matrix(a, b, c, d, tx, ty)


Name	Type	Default	  Description
 a	    number	   1	  optional x scale

 b	    number	   0	  optional y skew

 c	    number	   0	  optional x skew

 d	    number	   1	  optional y scale

 tx	    number	   0	  optional x translation

 ty	    number	   0	  optional y translation

 */