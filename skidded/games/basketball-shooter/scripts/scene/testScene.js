Red.TestScene = function (game)
{
    this.game = game;
};

Red.TestScene.prototype = {
    create : function ()
    {
        this.text = this.game.factory.text( 100,100, "!23123" );
        this.text.style.fill = 0x00FF00;

        var static = new Red.GameObject( this.game );
        static.transform.setLocalPosition( 300,100 );
        static.container.updateTransform( static.parent );
        var staicBody = static.addComponet( Red.RusBody );
        staicBody.resetMassData();
       // staicBody.initTransform();

        // var object1 = new Red.GameObject(this.game);
        // object1.transform.setLocalPosition( 300,100 );
        // var body1 = object1.addComponet( Red.RusBody );
        // body1.setType( Red.RusBody.DYNAMIC );
        // var shape = PhysicsRus.ShapePoly.ShapeBox( 0,0,20,80);
        // shape.e = 0.0;
        // shape.u = 0.5;
        // shape.density = 0;
        // body1.addShape(shape);
        // body1.resetMassData();
        // body1.setMass(10);
        // console.log( body1.m );
        //
        // console.log( staicBody.transform.getWorldPosition().x );
        // var joint = new PhysicsRus.RevoluteJoint(staicBody, body1, new Red.Vector2(300, 100));
        // joint.collideConnected = false;
        // this.game.physicsManager.addJoint(joint);

        var body = [];

        for (var i = 0; i < 10; i++) {
            if (i == 9) {
                var shape = new PhysicsRus.ShapePoly.ShapeBox(0, 0, 20, 20);
                shape.e = 0.0;
                shape.u = 0.5;
                shape.density = 1;

                var go = new Red.GameObject(this.game);
                go.transform.setLocalPosition( 200 + i * 40, 100 );
                body[i] = go.addComponet(Red.RusBody);
                body[i].setType( Red.RusBody.DYNAMIC );
                body[i].addShape( shape );
                body[i].categoryBits = 0x0002;
            }
            else
            {
                var shape = new PhysicsRus.ShapePoly.ShapeBox(0, 0, 40, 20);
                shape.e = 0.0;
                shape.u = 0.5;
                shape.density = 1;

                var go = new Red.GameObject(this.game);
                go.transform.setLocalPosition( 204 + i * 40, 100 );
                body[i] = go.addComponet( Red.RusBody );
                body[i].setType( Red.RusBody.DYNAMIC );
                body[i].addShape(shape);
                body[i].categoryBits = 0x0001;
                body[i].maskBits = 0xFFFF & ~0x0002;
            }

            body[i].resetMassData();
            //space.addBody(body[i]);

            if (i == 0) {
                var joint = new PhysicsRus.RevoluteJoint(staicBody, body[i], new Red.Vector2(200, 100));
                joint.collideConnected = false;
                this.game.physicsManager.addJoint(joint);
            }
            else {
                var joint = new PhysicsRus.RevoluteJoint(body[i - 1], body[i], new Red.Vector2(200 + i * 40, 100));
                //joint.breakable = true;
                //joint.maxForce = 8000000;
                joint.collideConnected = false;
                this.game.physicsManager.addJoint(joint);
            }
        }

        // var joint = new PhysicsRus.RopeJoint(staicBody, body[9], new Red.Vector2(200, 100), new Red.Vector2(200 + 9 * 40, 100));
        // joint.collideConnected = false;
        // this.game.physicsManager.addJoint(joint);

    },

    onKeyDown : function (e)
    {

    },

    onKeyUp : function (e)
    {

    },


    start : function ()
    {

    },

    finish : function ()
    {

    },

    update : function (delta)
    {


        // var text = [this.game.time.fps,
            // ," \n"
        // ].join(" ");
        // this.text.text = text;
    },

    fixedUpdate : function (delta)
    {

    },
};