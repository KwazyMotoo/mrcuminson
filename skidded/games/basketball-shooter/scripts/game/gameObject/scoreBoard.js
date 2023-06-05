var Red = Red || {};

Red.ScoreBoard = (function ()
{
    function ScoreBoard(game)
    {
        this.game = game;
        this.isActive = true;

        this.vsContainer = null;
        this.challContainer = null;

        this.boardTop = null;
        this.teamMark1 = null;
        this.teamMark2 = null;

        this.score = [];

        //this.score1 = null;
        //this.score2 = null;
        this.scoreVs = null;

        //this.score3 = null;

        this.life = [];

        // this.lifebg = null;
        // this.life = [];
    }

    ScoreBoard.prototype = {
        create: function ()
        {
            this.vsContainer = new PIXI.Container();
            this.game.containerManager.getContaner("fixedui").addChild( this.vsContainer );

            this.challContainer = new PIXI.Container();
            this.game.containerManager.getContaner("fixedui").addChild( this.challContainer );


            this.boardTop = this.game.factory.sprite( this.game.halfWidth, 18, "board_top", this.vsContainer );
            this.boardTop.anchor.set( 0.5, 0 );
            this.boardTop.scale.set( 0.5 );

            this.teamMark1 = this.game.factory.sprite( this.game.halfWidth - 32, 18, "board_team_b", this.vsContainer );
            this.teamMark1.anchor.set( 0.5, 0 );
            this.teamMark1.scale.set( 0.5 );
            this.teamMark2 = this.game.factory.sprite( this.game.halfWidth + 32, 18, "board_team_r", this.vsContainer );
            this.teamMark2.anchor.set( 0.5, 0 );
            this.teamMark2.scale.set( 0.5 );

            this.scoreVs = this.game.factory.sprite( this.game.halfWidth, 50, "board_score_vs", this.vsContainer );
            this.scoreVs.anchor.set(0.5,0);

            this.score[0] =  new Red.BitmapText( "board_score_num_", this.vsContainer  );
            this.score[0].setPosition( this.game.halfWidth-14, 45);
            this.score[0].setPivot(1,0);
            this.score[0].setText("0");

            this.score[1] = new Red.BitmapText( "board_score_num_", this.vsContainer  );
            this.score[1].setPosition( this.game.halfWidth+14, 45);
            this.score[1].setPivot(0,0);
            this.score[1].setText("0");

            this.score[2] = new Red.BitmapText( "board_score_num_", this.challContainer  );
            this.score[2].setPosition( this.game.halfWidth, 45 );
            this.score[2].setPivot(0.5,0);
            this.score[2].setText("0");

            // this.score1 = new Red.BitmapText( "board_score_num_", this.vsContainer  );
            // this.score1.setPosition( this.game.halfWidth-24, 94  - 35);
            // this.score1.setPivot(1,0);
            // this.score1.setText("0");
            // this.score2 = new Red.BitmapText( "board_score_num_", this.vsContainer  );
            // this.score2.setPosition( this.game.halfWidth+24, 94  - 35);
            // this.score2.setPivot(0,0);
            // this.score2.setText("0");
            // this.score3 = new Red.BitmapText( "board_score_num_", this.challContainer  );
            // this.score3.setPosition( this.game.halfWidth, 55 );
            // this.score3.setPivot(0.5,0);
            // this.score3.setText("0");

            this.score[0].setScale(0.5);
            this.score[1].setScale(0.5);
            this.score[2].setScale(0.5);
            this.scoreVs.scale.set( 0.5 );

            this.life[0] = new Red.LifeBar( this.game );
            this.life[0].create(this.game.halfWidth - 80, 28, this.vsContainer);

            this.life[1] = new Red.LifeBar( this.game );
            this.life[1].create(this.game.halfWidth + 80, 28, this.vsContainer);

            this.life[2] = new Red.LifeBar( this.game );
            this.life[2].create(this.game.halfWidth, 28, this.challContainer);
        },

        setMode : function (mode)
        {
            switch (mode)
            {
                case Red.GameMode.single:
                    this.vsContainer.visible = true;
                    this.challContainer.visible = false;
                    this.score[0].setText("0");
                    this.score[1].setText("0");
                    break;
                case Red.GameMode.double:
                    this.vsContainer.visible = true;
                    this.challContainer.visible = false;
                    this.score[0].setText("0");
                    this.score[1].setText("0");
                    break;
                case Red.GameMode.challenge:
                    this.vsContainer.visible = false;
                    this.challContainer.visible = true;
                    this.score[2].setText("0");
                    break;
            }

            this.reset();
        },

        setLife : function (idx, life)
        {
            this.life[idx].setLife(life);
        },

        setActive: function (active)
        {
            if (this.isActive === active) return;
            this.isActive = active;

            if( !active )
            {
                this.vsContainer.visible = active;
                this.challContainer.visible = active;
            }

            //this.vsContainer.visible = active;
            //this.challContainer.visible = active;
            // if(active)
            // {
            //     this.score1.setText("0");
            //     this.score2.setText("0");
            // }
        },

        reset : function ()
        {
            this.score[0].setScale(0.5);
            this.score[1].setScale(0.5);
            this.score[2].setScale(0.5);
            this.scoreVs.scale.set( 0.5 );
        },

        startScaleUpDown : function (idx)
        {
            var score = this.score[idx];
            this.game.factory.action( 0.3, (function (delta, a, t, maxT)
            {
                var tt = Math.sin( t/maxT * Math.PI  );
                var s = Red.Math.Lerp( 0.5, 0.7, tt );
                score.setScale( s );
            }).bind(this) );
        },

        startScaleUp : function (idx)
        {
            var score = this.score[idx];
            this.game.factory.action( 0.3, (function (delta, a, t, maxT)
            {
                var tt = Red.Tween.Back.Out( t/maxT );
                var s = Red.Math.Lerp( 0.5, 1, tt );
                score.setScale( s );
            }).bind(this) );
        },

        startVSScaleUp : function ()
        {
            this.game.factory.action( 0.3, (function (delta, a, t, maxT)
            {
                var tt = Red.Tween.Back.Out( t/maxT );
                var s = Red.Math.Lerp( 0.5, 1, tt );
                this.scoreVs.scale.set( s );
            }).bind(this) );
        },
    };

    return ScoreBoard;
})();