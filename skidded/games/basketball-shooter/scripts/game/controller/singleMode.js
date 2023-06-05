var Red = Red || {};

Red.SingleMode = (function ()
{
    var _playerRedTeamIdx = [

        1,3,5,7,9
    ];

    var _playerBlueTeamIdx = [
        8,6,4,2,0
    ];

    var _teamArr = [
        _playerBlueTeamIdx,
        _playerRedTeamIdx
    ];

    var _teamID = {
        blue:0,
        red:1,
        none:2,
    };

    var _tryState = {
        none : 0x00,
        blueTri : 0x01,
        redTri : 0x02,
        allTri : 0x03
    };

    function SingleMode(game)
    {
        this.game = game;
        this.blueScore = 0;                     //블루가 1p
        this.redScore = 0;                      //레드가 2p

        this.scoreBoard = null;
        this.players = null;
        this.timeController = null;
        this.ballController = null;
        this.aiController = null;
        this.goalPosts = null;
        this.goalEffect = null;
        this.isUpsideDown = false;

        this.turn = 0;
        this.turnInfo = { offenceTeam : _teamID.none, chance : 3 , offencePlayerID : 0};
        this.offenceTeamID = 0;
        this.catchBallTeamID = 0;
        this.catchBallPlayerID = 0;
        this.catchPlayerScore = 0;  //볼을 소유하고 있는 플레이어의 점수
        this.triState = _tryState.none;

        this.playerTeamID = 0;
        this.aiTargetID = 0;

        this.finishedGame = false;
        this.isGoal = false;

        this.redScoreArr = [
            1,2,3,4,5
        ];

        this.blueScoreArr = [
            1,2,3,4,5
        ];
    }

    SingleMode.prototype = {

        create : function (scoreBoard, players, ballCtrl, timeController, aiController, goalPosts, goalEffect )
        {
            this.scoreBoard = scoreBoard;
            this.players = players;
            this.ballController = ballCtrl;
            this.aiController = aiController;
            this.timeController = timeController;
            this.goalPosts = goalPosts;
            this.goalEffect = goalEffect;

            this.aiController.setMode( this );
        },

        start : function ()
        {
            this.finishedGame = false;

            this.goalEffect.startVsMode();
            this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).add(this._blueGoal, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).add(this._redGoal, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.catchBall).add(this._catchBall, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballSleep).add(this._sleepBall, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOutOfBound).add(this._onBallOutOfBound, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onFinishGame).add(this._onFinishedGame, this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).add(this._onUpsideDown, this);

            for (var red_i = 0; red_i < _playerRedTeamIdx.length; red_i++)
            {
                this.players[ _playerRedTeamIdx[red_i] ].setScore( this.redScoreArr[red_i] );
            }

            for (var blue_i = 0; blue_i < _playerBlueTeamIdx.length; blue_i++)
            {
                this.players[ _playerBlueTeamIdx[blue_i] ].setScore( this.blueScoreArr[blue_i] );
            }

            for (var i = 0; i < this.players.length; i++)
            {
                this.players[ i ].setTriangle( false );
            }

            this.turn = 0;
            this.scoreBoard.setMode( Red.GameMode.single );
            //this.scoreBoard.turnText.setText( this.turn.toString() );
        },

        finish : function ()
        {
            this.goalEffect.endVsMode();
            this.game.signalManager.getSignal(EVENT_SIGNAL.blueGoal).remove(this._blueGoal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.redGoal).remove(this._redGoal,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.catchBall).remove(this._catchBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballSleep).remove(this._sleepBall,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.ballOutOfBound).remove(this._onBallOutOfBound,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onFinishGame).remove(this._onFinishedGame,this);
            this.game.signalManager.getSignal(EVENT_SIGNAL.onUpsideDown).remove(this._onUpsideDown, this);

            this.aiController.finish();
            this.timeController.stopTime();
        },

        dispose : function ()
        {
            this.game = null;
            this.scoreBoard = null;
            this.players = null;
            this.ballController = null;
            this.aiController = null;
            this.timeController = null;
            this.goalPosts = null;
            this.goalEffect = null;
        },

        _playerTriSet : function (teamIdxArr, active)
        {
            for (var i = 0; i < teamIdxArr.length; i++)
            {
                this.players[ teamIdxArr[i] ].setTriangle(active);
            }

            // if( !active )
            // {
            //     this._playerRestSet( teamIdxArr, active );
            // }
        },

        _playerRestSet : function (teamIdxArr, active)
        {
            if(active)
            {
                for (var i = 0; i < teamIdxArr.length; i++)
                {
                    this.players[ teamIdxArr[i] ].setAnimationRest();
                }
            }
            else
            {
                for (var i = 0; i < teamIdxArr.length; i++)
                {
                    this.players[ teamIdxArr[i] ].setAnimationIdle();
                }
            }
        },

        _playerFail : function (teamIdxArr)
        {
            for (var i = 0; i < teamIdxArr.length; i++)
            {
                this.players[ teamIdxArr[i] ].setAnimationFail();
            }
        },

        _playerRestOnce : function (teamIdxArr)
        {
            for (var i = 0; i < teamIdxArr.length; i++)
            {
                this.players[ teamIdxArr[i] ].setAnimationRestOnce();
            }
        },

	_playerSuccess : function (teamIdxArr)
        {
            for (var i = 0; i < teamIdxArr.length; i++)
            {
                this.players[ teamIdxArr[i] ].setAnimationSuccess();
            }
        },

        _blueGoal : function ()
        {
            if(this.isGoal || this.isUpsideDown) return;
            this.isGoal = true;

            if( this.turnInfo.offenceTeam === _teamID.red )
            {
                //this._onBallOutOfBound();
                this._playerTriSet( _playerRedTeamIdx, true );
                this.triState |= (_tryState.redTri);
                //this._playerRestSet( _playerRedTeamIdx, true );
                this._playerFail( _playerRedTeamIdx );
                return;
            }
            this.blueScore += this.catchPlayerScore;
            this.scoreBoard.score[0].setText(this.blueScore.toString());
            this.scoreBoard.startScaleUpDown(0);
            this.goalEffect._onBlueGoal();
            this.goalPosts[(this.turnInfo.offenceTeam + 1)%2].playEffect( this.catchPlayerScore );

            // this._mixScoreArr(this.blueScoreArr);
            for (var blue_i = 0; blue_i < _playerBlueTeamIdx.length; blue_i++)
            {
                //this.players[ _playerBlueTeamIdx[blue_i] ].setScore( this.blueScoreArr[blue_i] );
                this.players[ _playerBlueTeamIdx[blue_i] ].setAnimationSuccess();
            }
            this._playerRestOnce( _playerRedTeamIdx );

            //this.players[ _playerBlueTeamIdx[this.turnInfo.offencePlayerID] ].setAnimationSuccess();

            this._playerTriSet( _playerBlueTeamIdx, true );
            this.triState |= (_tryState.blueTri);

            this.turn++;
            //this.scoreBoard.turnText.setText(this.turn.toString() );
            this._checkEnd();
        },

        _redGoal : function ()
        {
            if(this.isGoal || this.isUpsideDown) return;
            this.isGoal = true;

            if( this.turnInfo.offenceTeam === _teamID.blue )
            {
                //this._onBallOutOfBound();
                this._playerTriSet( _playerBlueTeamIdx, true );
                this.triState |= (_tryState.blueTri);
                this._playerFail( _playerBlueTeamIdx );
                //this._playerRestSet( _playerBlueTeamIdx, true );
                return;
            }

            this.redScore += this.catchPlayerScore;
            this.scoreBoard.score[1].setText(this.redScore.toString());
            this.scoreBoard.startScaleUpDown(1);
            this.goalEffect._onRedGoal();
            this.goalPosts[(this.turnInfo.offenceTeam + 1)%2].playEffect( this.catchPlayerScore );

            // this._mixScoreArr(this.redScoreArr);
            for (var red_i = 0; red_i < _playerRedTeamIdx.length; red_i++)
            {
                //this.players[ _playerRedTeamIdx[red_i] ].setScore( this.redScoreArr[red_i] );
                this.players[ _playerRedTeamIdx[red_i] ].setAnimationSuccess();
            }
            this._playerRestOnce( _playerBlueTeamIdx );

            //this.players[ _playerRedTeamIdx[this.turnInfo.offencePlayerID] ].setAnimationSuccess();
            this._playerTriSet( _playerRedTeamIdx, true );
            this.triState |= (_tryState.redTri);

            this.turn++;
            //this.scoreBoard.turnText.setText(this.turn.toString() );
            this._checkEnd();
        },

        _checkEnd : function ()
        {
            if( Red.GAME_DATA.target === Red.GameTarget.turn )
            {
                if( this.turn > Red.GAME_DATA.maxTurn )
                {
                    this.turn = Red.GAME_DATA.maxTurn;
                    //this.scoreBoard.turnText.setText(this.turn.toString() );

                    if( this.redScore > this.blueScore )
                    {
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onRedWin ).dispatch();
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).dispatch();
                    }
                    else if( this.redScore < this.blueScore )
                    {
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onBlueWin ).dispatch();
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).dispatch();
                    }
                    else
                    {
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onDraw ).dispatch();
                        this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).dispatch();
                    }
                }
            }
            else if( Red.GAME_DATA.target === Red.GameTarget.point )
            {
                if( this.redScore >= Red.GAME_DATA.maxPoint )
                {
                    this.game.signalManager.getSignal( EVENT_SIGNAL.onRedWin ).dispatch();
                    this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).dispatch();
                    this.scoreBoard.startScaleUp(0);
                    this.scoreBoard.startScaleUp(1);
                    this.scoreBoard.startVSScaleUp();
                    this._playerTriSet( _playerRedTeamIdx, false );
                    this.triState &= (~_tryState.redTri);

                    for (var blue_i = 0; blue_i < _playerBlueTeamIdx.length; blue_i++)
                    {
                        this.players[ _playerBlueTeamIdx[blue_i] ].setAnimationLose();
                    }

                    for (var red_i = 0; red_i < _playerRedTeamIdx.length; red_i++)
                    {
                        this.players[ _playerRedTeamIdx[red_i] ].setAnimationWin();
                    }
                }
                else if( this.blueScore >= Red.GAME_DATA.maxPoint )
                {
                    this.game.signalManager.getSignal( EVENT_SIGNAL.onBlueWin ).dispatch();
                    this.game.signalManager.getSignal( EVENT_SIGNAL.onFinishGame ).dispatch();
                    this.scoreBoard.startScaleUp(0);
                    this.scoreBoard.startScaleUp(1);
                    this.scoreBoard.startVSScaleUp();
                    this._playerTriSet( _playerBlueTeamIdx, false );
                    this.triState &= (~_tryState.blueTri);

                    for (var blue_i = 0; blue_i < _playerBlueTeamIdx.length; blue_i++)
                    {
                        this.players[ _playerBlueTeamIdx[blue_i] ].setAnimationWin();
                    }

                    for (var red_i = 0; red_i < _playerRedTeamIdx.length; red_i++)
                    {
                        this.players[ _playerRedTeamIdx[red_i] ].setAnimationLose();
                    }
                }
            }
        },

        _onUpsideDown : function ()
        {
            this.isUpsideDown = true;
        },

        _onFinishedGame : function ()
        {
            this.finishedGame = true;
        },

        _mixScoreArr : function (arr, max)
        {
            max = max || 30;
            for( var i = 0; i < max; i++ )
            {
                var srcIdx = Red.Math.RandomInt( 0, arr.length );
                var desIdx = Red.Math.RandomInt( 0, arr.length );

                var temp = arr[ srcIdx ];
                arr[ srcIdx ] = arr[ desIdx ];
                arr[ desIdx ] = temp;
            }
        },

        _catchBall : function (teamID, score, playerID)
        {
            this.catchBallTeamID = teamID;
            this.catchPlayerScore = score;
            this.catchBallPlayerID = playerID;
        },

        _sleepBall : function ()
        {
            if( (this.triState & _tryState.blueTri) > 0)
            {
                this._playerTriSet( _playerBlueTeamIdx, false );
                this.triState &= (~_tryState.blueTri);
            }

            if( (this.triState & _tryState.redTri) > 0)
            {
                this._playerTriSet( _playerRedTeamIdx, false );
                this.triState &= (~_tryState.redTri);
            }

            if( this.finishedGame )
            {
                return;
            }

            this.isGoal = false;
            this.turnInfo.offencePlayerID = this.catchBallPlayerID;
            this.isUpsideDown = false;

            if( this.turnInfo.offenceTeam === this.catchBallTeamID )
            {
                this.turnInfo.chance--;
                this.scoreBoard.setLife( this.catchBallTeamID, this.turnInfo.chance );
                this.scoreBoard.setLife( (this.catchBallTeamID + 1) % 2, 0 );

                if( this.turnInfo.chance === 0 )
                {
                    //공격기회 끝남.
                    //this.game.signalManager.getSignal( EVENT_SIGNAL.ballOutOfBound ).dispatch();
                    //this.scoreBoard.teamArrow1.visible = false;
                    //this.scoreBoard.teamArrow2.visible = false;
                    
                    this.game.factory.waitCall( 0.1, (function ()
                    {
                        this.ballController.changeTurn( (function ()
                        {
                            this.game.factory.waitCall(0.2, (function ()
                            {
                                if (this.turnInfo.offenceTeam === _teamID.red)
                                {
                                    this._playerTriSet(_playerRedTeamIdx, true);
                                    this.triState |= (_tryState.redTri);
                                    //this._playerRestSet( _playerRedTeamIdx, true );
                                    this._playerFail(_playerRedTeamIdx);
                                    for (var blue_i = 0; blue_i < _playerBlueTeamIdx.length; blue_i++)
                                    {
                                        this.players[ _playerBlueTeamIdx[blue_i] ].setAnimationSuccess();
                                    }
                                }
                                else
                                {
                                    this._playerTriSet(_playerBlueTeamIdx, true);
                                    this.triState |= (_tryState.blueTri);
                                    this._playerFail(_playerBlueTeamIdx);
                                    //this._playerRestSet( _playerBlueTeamIdx, true );
                                    for (var red_i = 0; red_i < _playerRedTeamIdx.length; red_i++)
                                    {
                                        this.players[ _playerRedTeamIdx[red_i] ].setAnimationSuccess();
                                    }
                                }
                            }).bind(this))
                        }).bind(this));
                    }).bind(this) );



                    return;
                }
                else
                {
                    this._updateScoreBoard();
                }
            }
            else
            {
                this.turnInfo.offenceTeam = this.catchBallTeamID;
                this.turnInfo.chance = 3;
                this.scoreBoard.setLife( this.catchBallTeamID, this.turnInfo.chance );
                this.scoreBoard.setLife( (this.catchBallTeamID + 1) % 2, 0 );

                this.turn++;
                //this.scoreBoard.turnText.setText( this.turn.toString() );
                this._checkEnd();
                if( this.finishedGame )
                {
                    return;
                }


                this._updateScoreBoard();
            }

            if( this.turnInfo.offenceTeam === this.playerTeamID)
            {
                this.ballController.setBall(null, this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]]);
            }
            else
            {
                this.aiController.startAI( this.aiTargetID, this.catchBallPlayerID, this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]] );
            }

            this.game.signalManager.getSignal( EVENT_SIGNAL.selectPlayer_ +  this.turnInfo.offenceTeam + this.catchBallPlayerID).dispatch();
            this.timeController.startTimeDown( 5, this._timeCall.bind(this), this.goalPosts[(this.turnInfo.offenceTeam + 1) % 2] );
            this.players[_teamArr[this.catchBallTeamID][this.catchBallPlayerID]].setAnimationIdle3();
        },

        _onBallOutOfBound : function ()
        {
            this.game.signalManager.getSignal( EVENT_SIGNAL.ballOut ).dispatch();
            //this.scoreBoard.teamArrow1.visible = false;
            //this.scoreBoard.teamArrow2.visible = false;

            if( this.turnInfo.offenceTeam === _teamID.red )
            {
                this._playerTriSet( _playerRedTeamIdx, true );
                this.triState |= (_tryState.redTri);
                //this._playerRestSet( _playerRedTeamIdx, true );
                this._playerFail(_playerRedTeamIdx);
            }
            else
            {
                this._playerTriSet( _playerBlueTeamIdx, true );
                this.triState |= (_tryState.blueTri);
                //this._playerRestSet( _playerBlueTeamIdx, true );
                this._playerFail(_playerBlueTeamIdx);
            }

            this.turn++;
            //this.scoreBoard.turnText.setText(this.turn.toString() );
            this._checkEnd();
        },

        _updateScoreBoard : function ()
        {
            if( this.turnInfo.offenceTeam === _teamID.red )
            {
                //this.scoreBoard.teamArrow1.visible = false;
                //this.scoreBoard.teamArrow2.visible = true;
            }
            else
            {
                //this.scoreBoard.teamArrow1.visible = true;
                //this.scoreBoard.teamArrow2.visible = false;
            }
        },

        _timeCall : function (time)
        {
            if( time <= 0 )
            {
                this.game.signalManager.getSignal( EVENT_SIGNAL.onChangeTurn ).dispatch((function ()
                {
                    this.game.factory.waitCall(0.2, (function ()
                    {
                        if( this.turnInfo.offenceTeam === _teamID.red )
                        {
                            this._playerTriSet( _playerRedTeamIdx, true );
                            this.triState |= (_tryState.redTri);
                            //this._playerRestSet( _playerRedTeamIdx, true );
                            this._playerFail(_playerRedTeamIdx);
                            this._playerSuccess( _playerBlueTeamIdx );
                        }
                        else
                        {
                            this._playerTriSet( _playerBlueTeamIdx, true );
                            this.triState |= (_tryState.blueTri);
                            //this._playerRestSet( _playerBlueTeamIdx, true );
                            this._playerFail(_playerBlueTeamIdx);
                            this._playerSuccess( _playerRedTeamIdx );
                        }
                    }).bind(this) );
                }).bind(this));
                time = 0;
                this.scoreBoard.setLife( this.catchBallTeamID, 0 );
            }
            this.goalPosts[ this.turnInfo.offenceTeam ].shotTimeText.text = time.toFixed(1).toString();
        },
    };

    return SingleMode;
})();