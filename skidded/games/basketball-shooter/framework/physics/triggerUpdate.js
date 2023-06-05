var Red = Red || {};

Red.TriggerUpdate = (function ()
{
    function TriggerUpdate()
    {
    }

    TriggerUpdate.prototype = {
        update : function (bodys)
        {
            var len = bodys.length;
            var i;
            for( i = 0; i < len; i++ )
            {
                var body = bodys[i];
                if(!body.isActive) continue;
                var pos = body.gameObject.transform.getWorldPosition();
                body.collider.update( pos.x, pos.y );
            }

            for( i = 0; i < len; i++ )
            {
                var body1 = bodys[i];
                if( !body1.isActive || !body1.isAwake ) continue;
                for( var j = 0; j < len; j++ )
                {
                    var body2 = bodys[j];
                    if( body1 === body2 || !body2.isActive) continue;
                    body1.collision(body2);
                }
            }
        },

        draw : function (bodys)
        {
            var len = bodys.length;
            var i;
            for( i = 0; i < len; i++ )
            {
                var body = bodys[i];
                if(!body.isActive) continue;
                var col = body.collider;
                if( col.type === 0 ) //rect
                {
                    Red.game.debugManager.drawFillRect( col.minX, col.minY, col.width, col.height , 0x00ff00, 0.3 );
                }
                else if( col.type === 1 ) //circle
                {
                    Red.game.debugManager.drawFillCircle( col.posX, col.posY, col.radius , 0x00ff00, 0.3 );
                }
            }
        }
    };

    return TriggerUpdate;
})();