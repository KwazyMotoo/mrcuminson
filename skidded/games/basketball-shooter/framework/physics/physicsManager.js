var Red = Red || {};

Red.PhysicsManager = (function ()
{
    function PhysicsManager()
    {
        this.rusPhysics = null;
        this.triggerPhysics = null;
    }

    PhysicsManager.prototype = {
        initPhysicsRus : function ()
        {
            if(this.rusPhysics) return;

            this.rusPhysics = {};
            this.rusPhysics.space = new PhysicsRus.Space();
            this.rusPhysics.space.gravity.y = 980;

            this.rusPhysics.bodys = [];
            this.rusPhysics.joints = [];
            this.stepUpdate = this.rusPhysics.space.step.bind( this.rusPhysics.space );
            this.bodys = this.rusPhysics.bodys;
            this.joints = this.rusPhysics.joints;
        },

        initTrigger : function ()
        {
            if(this.triggerPhysics) return;

            this.triggerPhysics = {};
            this.triggerPhysics.bodys = [];
            var triggerUpdate = new Red.TriggerUpdate();
            this.triggerPhysics.triggerUpdate = triggerUpdate.update;
            this.triggerPhysics.triggerDraw = triggerUpdate.draw;
        },

        addBody : function (body)
        {
            if( body instanceof Red.RusBody)
            {
                if( this.rusPhysics.bodys.indexOf( body ) === -1 )
                {
                    this.rusPhysics.bodys.push(body);
                }
                this.rusPhysics.space.addBody( body );
            }
            else if( body instanceof  Red.TriggerBody)
            {
                if( this.triggerPhysics.bodys.indexOf( body ) === -1 )
                {
                    this.triggerPhysics.bodys.push(body);
                }
            }
        },

        removeBody : function (body)
        {
            if( body instanceof Red.RusBody)
            {
                var idx = this.rusPhysics.bodys.indexOf( body );
                idx > -1 && this.rusPhysics.bodys.splice( idx, 1 );
                this.rusPhysics.space.removeBody( body );
            }
            else if( body instanceof  Red.TriggerBody)
            {
                var idx = this.triggerPhysics.bodys.indexOf( body );
                idx > -1 && this.triggerPhysics.bodys.splice( idx, 1 );
                this.triggerPhysics.space.removeBody( body );
            }
        },

        addJoint : function (joint)
        {
            if( joint.isRus )
            {
                this.rusPhysics.joints.indexOf( joint ) === -1 && this.rusPhysics.joints.push(joint);
                this.rusPhysics.space.addJoint( joint );
            }
        },

        removeJoint : function (joint)
        {
            if(joint.isRus)
            {
                var idx = this.rusPhysics.joints.indexOf( joint );
                idx > -1 && this.rusPhysics.joints.splice( idx, 1 );
                this.rusPhysics.space.removeJoint( joint );
            }
        },
        
        draw : function ()
        {
            if(this.rusPhysics)
            {
                var i;
                var arr = this.rusPhysics.bodys;
                var len = arr.length;

                for(i = 0; i < len; i++) arr[i].draw();

                arr = this.rusPhysics.joints;
                len = arr.length;
                for(i = 0; i < len; i++) arr[i].draw();
            }

            this.triggerPhysics && this.triggerPhysics.triggerDraw(this.triggerPhysics.bodys);
        },
        
        step : function (delta)
        {
            this.rusPhysics && this.rusPhysics.space.step(delta);
            this.triggerPhysics && this.triggerPhysics.triggerUpdate(this.triggerPhysics.bodys);
        }
    };

    return PhysicsManager;
})();


