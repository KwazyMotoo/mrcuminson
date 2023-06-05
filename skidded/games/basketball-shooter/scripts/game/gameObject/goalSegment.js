var Red = Red || {};

Red.GoalSegment = (function ()
{

    function GoalSegment(game)
    {
        this.game = game;
        this.root = null;
        this.point1 = null;
        this.point2 = null;
        this.line = null;
    }

    GoalSegment.prototype = {
        create : function ( x1, y1, x2, y2, par )
        {
            this.root = new PIXI.Container();
            par.addChild( this.root );

            this.point1 =  new Red.GameObject( this.game );
            this.point1.setParent( this.root );
            //this.point1.position.set( x1, y1 );
            this.point1.transform.setLocalPosition(x1, y1);

            this.point2 =  new Red.GameObject( this.game );
            this.point2.setParent( this.root );
            //this.point2.position.set( x2, y2 );
            this.point2.transform.setLocalPosition(x2, y2);

            this.line = { point1 : this.point1, point2 : this.point2 };
        },

        getPoint1 : function ()
        {
            return this.point1;
        },

        getPoint2 : function ()
        {
            return this.point2;
        },

        getLine : function ()
        {
            return this.line;
        },
    };

    return GoalSegment;
})();