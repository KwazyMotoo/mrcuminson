var Red = Red || {};

Red.GameObject = (function ()
{
    var _gameObjectCount = 0;

    function GameObject(game)
    {
        this.goInstanceID = _gameObjectCount++;
        this.game = game || Red.game;
        this.tag = "defauilt";
        this.parent = null;
        this.component = [];
        this.childs = [];
        this.container = this.game.factory.container();
        this.transform = this.addComponet( Red.Transform );
        this.isActive = true;
    }

    GameObject.prototype = {
        addComponet : function (component, arg1, arg2, arg3, arg4, arg5)
        {
            if( component && component.ComponentKey && component.Create )
            {
                if( this.component[ component.ComponentKey ] )
                {
                    return this.component[ component.ComponentKey ];
                }

                var comp = component.Create( this, arg1, arg2, arg3, arg4, arg5 );
                this.component[ component.ComponentKey ] = comp;
                this.component.push( comp );

                return comp;
            }
            return null;
        },

        getComponet : function (component)
        {
            if( component && component.ComponentKey)
            {
                return this.component[ component.ComponentKey ];
            }
            return null;
        },

        removeComponent : function (component)
        {
            if( component && component.ComponentKey)
            {
                var comp = this.component[ component.ComponentKey ];
                this.component[ component.ComponentKey ] = null;
                var index = this.component.indexOf( comp );
                comp && index > -1 && this.component.splice( index, 1 );
                comp && comp.dispose && comp.dispose();
            }
        },

        addChild : function (child)
        {
            this.childs.push( child );
            this.container.addChild( child.container );
            child.parent = this;
        },

        removeChild : function (child)
        {
            var idx =  this.childs.indexOf( child );
            idx > -1 && this.childs.splice( idx, 1 );
            child.container.parent = null;
        },

        setParent : function (parent)
        {
            if( this.parent )
            {
                this.parent.removeChild( this );
                this.parent = null;
            }

            if( parent instanceof  GameObject)
            {
                parent.addChild( this );
                this.parent = this;
            }
            else
            {
                parent.addChild( this.container );
            }
        },

        setActive : function (active)
        {
            if( this.isActive === active ) return;

            this.isActive = active;


            var len = this.component.length;
            var i = 0;
            for( i = 0; i < len; i++ )
            {
                var comp = this.component[i];
                comp && comp.setActive && comp.setActive(active);

            }

            len = this.childs.length;
            for( i = 0; i < len; i++ )
            {
                var child = this.childs[i];
                child && child.setActive && child.setActive(active);
            }
        },

        // enableMouseDrag : function ()
        // {
        //     this.renderer.interactive = true;
        //     this.renderer.on('pointerdown', onDragStart.bind(this.renderer))
        //     .on('pointerup', onDragEnd.bind(this.renderer))
        //     .on('pointerupoutside', onDragEnd.bind(this.renderer))
        //     .on('pointermove', onDragMove.bind(this.renderer));
        // },
        //
        // disableMouseDrag : function ()
        // {
        //     this.renderer.interactive = false;
        // }



        // onCollisionEnter : function (col)
        // {
        // },
        // onCollisionStay : function (col)
        // {
        // },
        // onCollisionExit : function (col)
        // {
        // },
        constructor : GameObject
    };

    // function onDragStart(event)
    // {
    //     this.data = event.data;
    //     this.dragging = true;
    //     this.offset = this.data.getLocalPosition(this.parent);
    //     this.offset.x = this.offset.x - this.x;
    //     this.offset.y = this.offset.y - this.y;
    // }
    //
    // function onDragEnd()
    // {
    //     this.dragging = false;
    //     this.data = null;
    // }
    //
    // function onDragMove()
    // {
    //     if (this.dragging)
    //     {
    //         var newPosition = this.data.getLocalPosition(this.parent);
    //         this.x = newPosition.x - this.offset.x;
    //         this.y = newPosition.y - this.offset.y;
    //     }
    // }

    return GameObject;
})();