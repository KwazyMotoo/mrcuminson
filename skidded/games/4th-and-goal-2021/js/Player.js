class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("type", type);
    this.setData("moving",false);
    this.setData("startX",0);
    this.setData("startY",540);
    this.setData("speedOriginal",1.0);
    this.setData("speed", 1.0);
    this.setData("route",{x:5,y:5});
    this.setData("index", 0);
    this.setData("hasBall", false);
    this.setData("health",100);
    this.setData("primaryTarget",false);
    this.setData("chasing", false);
    this.setData("spinning", false);
    this.setData("spinCount", 0);
    this.setData("blasting", false);
    this.setData("quarterback",false);
    this.states = {
      MOVE_DOWN: "MOVE_DOWN",
      MOVE_UP:"MOVE_UP",
      CHASE: "CHASE",
      TACKLE: "TACKLE",
      STANCE: "STANCE"
    };
  }
  setPosition(x,y){
    this.x = x;
    this.setData("startX", x);
    this.y = y;
    this.setData("startY", y);
  }
  huddle(){
    if(this.getData("quarterback")){
      this.play(player1Key);
    }
    this.rotation = 0;
    if(this.getData("moving")){
      this.anims.pause(this.anims.currentAnim.frames[0]);
      this.anims.isPlaying = false;
      //this.setData("moving",false);
    }
    this.setData("moving",false);
    this.setData("health", 100);
    this.setData("index", 0);
    this.setData("hasBall", false);
    this.setData("primaryTarget",false);
    this.setData("speed",this.getData("speedOriginal"));
    this.setData("chasing", false);
    this.setData("spinning", false);
    this.setData("blasting", false);
  }
}

//TEAM 1...
class QB extends Player{ 
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "qb");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3);
      this.setData("quarterback",true);
      //this.anims.pause(this.anims.currentAnim.frames[2]);
  }
  blast(){
    if(!tackled && !this.getData("spinning") && !this.getData("blasting")){
      this.setData("blasting", true);
      this.play("playerHit");
          this.once('animationcomplete', function() {
            this.setData("blasting", false);
            this.play(player1Key);
          }, this);
    }
  }
  update (){
    if(this.getData("spinning")){
      this.rotation += 0.5;
      this.setData("spinCount",this.getData("spinCount") + 1);
      if(this.getData("spinCount") > 5){
        this.rotation = 0;
        this.setData("spinning",false);
        this.setData("spinCount",0);
      }
    }
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving") && !this.getData("spinning") && !this.getData("blasting")){this.play(player1Key);this.setData("moving",true);}
        if(offensiveTeam == 1){
        if(!this.getData("hasBall")){
          if(this.y < team1RouteQB[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteQB[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteQB[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteQB[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
          if(Math.abs(this.x - (team1RouteQB[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
          && Math.abs(this.y - (team1RouteQB[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
            if(team1RouteQB.length == this.getData("index") + 1 && this.getData("primaryTarget")){
              if(!ballPassed){
                this.setData("hasBall",true);
                inPlay = true;
              }
            }
            if(team1RouteQB.length > this.getData("index") + 1){
              this.setData("index", this.getData("index") + 1);
            }
          }
        }
        if(ballPassed){
          this.setData("hasBall",false);
        }
      }//end qb on offense
      //qb defense
      if(offensiveTeam == 2){

      }//end qb on defense
    }//end ballSnapped
  }
}

class FB extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "fb");
      this.setData("speed", 1.1);
      this.setData("speedOriginal",1.1);
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteFB[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteFB[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteFB[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteFB[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteFB[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteFB[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteFB.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteFB.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class TB extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "tb");
      this.setData("speed", 1.4);
      this.setData("speedOriginal",1.4);
  }
  update (){
    if(this.getData("spinning")){
      this.rotation += 0.5;
      this.setData("spinCount",this.getData("spinCount") + 1);
      if(this.getData("spinCount") > 5){
        this.rotation = 0;
        this.setData("spinning",false);
        this.setData("spinCount",0);
      }
    }
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !(kickOff && kickReturnTeam == 1) && offensiveTeam == 1){
          if(this.y < team1RouteTB[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteTB[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteTB[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteTB[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
          if(Math.abs(this.x - (team1RouteTB[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
          && Math.abs(this.y - (team1RouteTB[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
            if(team1RouteTB.length == this.getData("index") + 1 && this.getData("primaryTarget")){
              this.setData("hasBall",true);
              inPlay = true;
            }
            if(team1RouteTB.length > this.getData("index") + 1){
              this.setData("index", this.getData("index") + 1);
            }
          }
        }
        if(offensiveTeam == 2){
          if(!inPlay){
            if(this.y < team1RouteTB[this.getData("index")][1] + this.getData("startY")){
              this.y += this.getData("speed");
            }
            if(this.y > team1RouteTB[this.getData("index")][1] + this.getData("startY")){
              this.y -= this.getData("speed");
            }
            if(this.x < team1RouteTB[this.getData("index")][0] + this.getData("startX")){
              this.x += this.getData("speed");
            }
            if(this.x > team1RouteTB[this.getData("index")][0] + this.getData("startX")){
              this.x -= this.getData("speed");
            }
            if(Math.abs(this.x - (team1RouteTB[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
            && Math.abs(this.y - (team1RouteTB[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
              if(team1RouteTB.length > this.getData("index") + 1){
                this.setData("index", this.getData("index") + 1);
              }
            }
          }else{
            if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
            if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
          }
        }//end offensiveTeam == 2
    }else{this.scaleY = 1;}//end ballSnapped
  }
}

class WR1 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "wr1");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3);
  }
  update (){
    if(this.getData("spinning")){
      this.rotation += 0.5;
      this.setData("spinCount",this.getData("spinCount") + 1);
      if(this.getData("spinCount") > 5){
        this.rotation = 0;
        this.setData("spinning",false);
        this.setData("spinCount",0);
      }
    }
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteWR1[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteWR1[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteWR1[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteWR1[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }//end if !hasBall
        if(Math.abs(this.x - (team1RouteWR1[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteWR1[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteWR1.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteWR1.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class WR2 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "wr2");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3);
  }
  update (){
    if(this.getData("spinning")){
      this.rotation += 0.5;
      this.setData("spinCount",this.getData("spinCount") + 1);
      if(this.getData("spinCount") > 5){
        this.rotation = 0;
        this.setData("spinning",false);
        this.setData("spinCount",0);
      }
    }
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteWR2[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteWR2[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteWR2[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteWR2[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }//end !hasBall
        if(Math.abs(this.x - (team1RouteWR2[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteWR2[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteWR2.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteWR2.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class WR3 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "wr3");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3);
  }
  update (){
    if(this.getData("spinning")){
      this.rotation += 0.5;
      this.setData("spinCount",this.getData("spinCount") + 1);
      if(this.getData("spinCount") > 5){
        this.rotation = 0;
        this.setData("spinning",false);
        this.setData("spinCount",0);
      }
    }
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteWR3[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteWR3[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteWR3[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteWR3[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        
        if(Math.abs(this.x - (team1RouteWR3[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteWR3[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteWR3.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteWR3.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class LT extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "lt");
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteLT[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteLT[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteLT[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteLT[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteLT[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteLT[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteLT.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteLT.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class LG extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "lg");
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteLG[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteLG[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteLG[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteLG[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteLG[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteLG[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteLG.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteLG.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class C extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "c");
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteC[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteC[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteC[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteC[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteC[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteC[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteC.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteC.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class RG extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "rg");
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteRG[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteRG[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteRG[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteRG[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteRG[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteRG[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteRG.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteRG.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}

class RT extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player1Key, "rt");
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped){
      if(!this.getData("moving")){this.play(player1Key);this.setData("moving",true);}
        if(!this.getData("hasBall") && !this.getData("chasing")){
          if(this.y < team1RouteRT[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team1RouteRT[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team1RouteRT[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team1RouteRT[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
        }
        if(Math.abs(this.x - (team1RouteRT[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team1RouteRT[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team1RouteRT.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
          if(this.getData("index") == team1RouteRG.length - 1 && defensiveTeam == 1){
            this.setData("chasing", true);
          }
        }
        if(this.getData("chasing")){
          if(this.x < football.x){this.x += this.getData("speed");}if(this.x > football.x){this.x -= this.getData("speed");}
          if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}if(this.y > football.y){this.y -= this.getData("speed");}
        }
    }else{this.scaleY = 1;}//end ballSnapped//end ballSnapped
  }
}


//TEAM 2...
class DB1 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns", "bengals",  "db1");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
      //if(ballSnapped && !inPlay){
    if(ballSnapped && !this.getData("chasing")){
        if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
          if(this.y < team2RouteDB1[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team2RouteDB1[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team2RouteDB1[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team2RouteDB1[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
          if(Math.abs(this.x - (team2RouteDB1[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
          && Math.abs(this.y - (team2RouteDB1[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
            if(team2RouteDB1.length > this.getData("index") + 1){
              this.setData("index", this.getData("index") + 1);
            }
          }
      }
      if(inPlay && defensiveTeam == 2){
        this.setData("chasing",true);
        if(this.x < football.x){this.x += this.getData("speed");}
        if(this.x > football.x){this.x -= this.getData("speed");}
        if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
        if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
      }else{
        this.scaleY = -1;
      }
    }
  }

class DB2 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "db2");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteDB2[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteDB2[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteDB2[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteDB2[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteDB2[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteDB2[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteDB2.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class SS extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "ss");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    //if(ballSnapped && (!inPlay || this.getData("hasBall"))){
    if(defensiveTeam == 2){
      if(ballSnapped && !this.getData("chasing")){
        if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
          if(this.y < team2RouteSS[this.getData("index")][1] + this.getData("startY")){
            this.y += this.getData("speed");
          }
          if(this.y > team2RouteSS[this.getData("index")][1] + this.getData("startY")){
            this.y -= this.getData("speed");
          }
          if(this.x < team2RouteSS[this.getData("index")][0] + this.getData("startX")){
            this.x += this.getData("speed");
          }
          if(this.x > team2RouteSS[this.getData("index")][0] + this.getData("startX")){
            this.x -= this.getData("speed");
          }
          if(Math.abs(this.x - (team2RouteSS[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
          && Math.abs(this.y - (team2RouteSS[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
            if(team2RouteSS.length > this.getData("index") + 1){
              this.setData("index", this.getData("index") + 1);
            }
          }
      }//end if(ballSnapped && !this.getData("chasing")){
    }//end defensiveTeam 2
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
    if(offensiveTeam == 2 && !this.getData("hasBall")){
      if(ballSnapped){
        if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
          if(this.y < team2RouteSS[this.getData("index")][1] + this.getData("startY")){
              this.y += this.getData("speed");
          }
          if(this.y > team2RouteSS[this.getData("index")][1] + this.getData("startY")){
              this.y -= this.getData("speed");
          }
          if(this.x < team2RouteSS[this.getData("index")][0] + this.getData("startX")){
            if(difficulty <= 2){
              this.x += this.getData("speed");
            }else{
              this.x += this.getData("speedOriginal");
            }
          }
          if(this.x > team2RouteSS[this.getData("index")][0] + this.getData("startX")){
            if(difficulty <= 2){
              this.x -= this.getData("speed");
            }else{
              this.x -= this.getData('speedOriginal');
            }
          }
          if(Math.abs(this.x - (team2RouteSS[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
          && Math.abs(this.y - (team2RouteSS[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
            if(this.getData("index") == 1 && this.getData("primaryTarget") && offensiveTeam == 2){
              this.setData("hasBall",true);
              inPlay = true;
            }
            if(team2RouteSS.length > this.getData("index") + 1){
              this.setData("index", this.getData("index") + 1);
            }
          }
      }
    }//end offensiveTeam == 2
    if(this.getData("hasBall")){
      if(kickOffStarted && kickReturnTeam == 2){
        this.y += this.getData("speed");
      }
      if(team2Play == "sweepLt"){
        this.runningSpeed = this.getData("speedOriginal") - (1 - this.getData("health")/100);
        if(this.x < 580){this.x += this.runningSpeed;}
        if(this.x > 380){this.y += this.getData("speed");}
      }
      if(team2Play == "sweepRt"){
        this.runningSpeed = this.getData("speedOriginal") - (1 - this.getData("health")/100);
        if(this.x > 90){this.x -= this.runningSpeed;}
        if(this.x < 280){this.y += this.getData("speed");}
      }
      if(team2Play == "powerLt"){
        if(this.x < 400){this.x += this.getData("speed");}
        if(this.x > 320){this.y += this.getData("speed");}
      }
      if(team2Play == "powerRt"){
        if(this.x > 240){this.x -= this.getData("speed");}
        if(this.x < 320){this.y += this.getData("speed");}
      }
      if(team2Play == "isoLt"){
        this.y += this.getData("speed");
      }
      if(team2Play == "isoRt"){
        this.y += this.getData("speed");
      }
      if(team2Play == "slantX" || team2Play == "curlX" || team2Play == "screenRtX" || team2Play == "screenLtX" || team2Play == "quickScreenLtX"){
        this.y += this.getData("speed");
      }
    }
  }//end update
}

class FS extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns", "fs");
      this.setData("speed", 1.3);
      this.setData("speedOriginal",1.3 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteFS[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteFS[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteFS[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteFS[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteFS[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteFS[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteFS.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class LB1 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "lb1");
      this.setData("speed", 1.1);
      this.setData("speedOriginal",1.1 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteLB1[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteLB1[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteLB1[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteLB1[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteLB1[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteLB1[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteLB1.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class LB2 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "lb2");
      this.setData("speed", 1.2);
      this.setData("speedOriginal",1.2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(kickOffStarted && kickReturnTeam == 1){
      this.y += 1;if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.y >= 540 && !kickOffKicked && kickReturnTeam == 1){
        kickOffKicked = true;
        ballSnapped = true;
        kickOffStarted = false;
        timeStopped = false;
      }
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteLB2[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteLB2[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteLB2[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteLB2[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteLB2[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteLB2[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteLB2.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(difficulty == 2.4){//LB following play Hall of Fame mode
      if(!inPlay && defensiveTeam == 2 && team2Formation != "kickOff"){
        if(team1Play == "diveRt" || team1Play == "zoneRt" || team1Play == "powerRt" || team1Play == "powerRt" || team1Play == "isoRt"){
          if(this.x < 520){this.x += this.getData("speed");}
        }
        if(team1Play == "sweepLt" || team1Play == "tossLt" || team1Play == "crackReachLt" || team1Play == "blastLt" || team1Play == "motionSweepLt"){
          if(this.x > 120){this.x -= this.getData("speed");}
        }
        if(passPlay == true){
          if(this.y > this.getData("startY") - 60){this.y -= this.getData("speed");}
        }
      }
    }
    
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class LB3 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "lb3");
      this.setData("speed", 1.1);
      this.setData("speedOriginal",1.1 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteLB3[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteLB3[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteLB3[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteLB3[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteLB3[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteLB3[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteLB3.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class DL1 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "dl1");
      this.setData("speed", 1.0);
      this.setData("speedOriginal",1.0 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteDL1[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteDL1[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteDL1[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteDL1[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteDL1[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteDL1[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteDL1.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class DL2 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "dl2");
      this.setData("speed", 1.0);
      this.setData("speedOriginal",1.0 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteDL2[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteDL2[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteDL2[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteDL2[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteDL2[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteDL2[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteDL2.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class DL3 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "dl3");
      this.setData("speedOriginal",1.0 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteDL3[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteDL3[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteDL3[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteDL3[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteDL3[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteDL3[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteDL3.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}

class DL4 extends Player{
  constructor(scene, x, y, key, type) {
      super(scene, x, y, player2Key, "browns",  "dl4");
      this.setData("speedOriginal",1.0 + difficulty/2);
      this.scaleY = -1;
  }
  update (){
    if(this.x<0){this.x = 0;}if(this.x>640){this.x = 640;}if(this.y<0){this.y = 0;}if(this.y>1440){this.y = 1440;}
    if(this.getData("speed") < this.getData("speedOriginal")){this.setData("speed", this.getData("speed") + 0.1);}
    if(newGame){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
      if(this.x < this.getData("startX")){this.x += this.getData("speed");}
      if(this.x > this.getData("startX")){this.x -= this.getData("speed");}
      if(this.y < this.getData("startY")){this.y += this.getData("speed");}
    }
    if(ballSnapped && !this.getData("chasing")){
      if(!this.getData("moving")){this.play(player2Key);this.setData("moving",true);}
        if(this.y < team2RouteDL4[this.getData("index")][1] + this.getData("startY")){
          this.y += this.getData("speed");
        }
        if(this.y > team2RouteDL4[this.getData("index")][1] + this.getData("startY")){
          this.y -= this.getData("speed");
        }
        if(this.x < team2RouteDL4[this.getData("index")][0] + this.getData("startX")){
          this.x += this.getData("speed");
        }
        if(this.x > team2RouteDL4[this.getData("index")][0] + this.getData("startX")){
          this.x -= this.getData("speed");
        }
        if(Math.abs(this.x - (team2RouteDL4[this.getData("index")][0] + this.getData("startX"))) <= this.getData("speed")
        && Math.abs(this.y - (team2RouteDL4[this.getData("index")][1] + this.getData("startY"))) <= this.getData("speed")){
          if(team2RouteDL4.length > this.getData("index") + 1){
            this.setData("index", this.getData("index") + 1);
          }
        }
    }
    if(inPlay && defensiveTeam == 2){
      this.setData("chasing",true);
      if(this.x < football.x){this.x += this.getData("speed");}
      if(this.x > football.x){this.x -= this.getData("speed");}
      if(this.y < football.y){this.y += this.getData("speed");this.scaleY = -1;}
      if(this.y > football.y){this.y -= this.getData("speed");this.scaleY = 1;}
    }else{
      this.scaleY = -1;
    }
  }
}