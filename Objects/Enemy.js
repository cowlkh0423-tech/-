export class Enemy {

    constructor(scene,x,y){

        this.scene=scene;

        this.sprite=scene.physics.add.sprite(
            x,
            y,
            "enemy"
        );

        this.hp=3;

        this.speed=150;

        this.lastFire=0;

    }

    update(time){

        this.sprite.y+=this.speed/60;

        if(time>this.lastFire+1200){

            this.fire();

            this.lastFire=time;

        }

        if(this.sprite.y>850){

            this.sprite.destroy();

        }

    }

    fire(){

        const bullet=this.scene.enemyBullets.create(
            this.sprite.x,
            this.sprite.y+20,
            "enemyBullet"
        );

        bullet.setVelocityY(250);

    }

    damage(){

        this.hp--;

        if(this.hp<=0){

            this.scene.explode(
                this.sprite.x,
                this.sprite.y
            );

            this.sprite.destroy();

        }

    }

}
