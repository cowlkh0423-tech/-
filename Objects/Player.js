export class Player {

    constructor(scene) {

        this.scene = scene;

        this.sprite = scene.physics.add.sprite(
            240,
            700,
            "player"
        );

        this.sprite.setCollideWorldBounds(true);

        this.speed = 320;

        this.fireDelay = 150;
        this.lastFire = 0;

        this.hp = 100;
        this.maxHp = 100;

        this.bullets = scene.physics.add.group();

        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            fire: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

    }

    update(time) {

        this.sprite.setVelocity(0);

        if (this.keys.left.isDown)
            this.sprite.setVelocityX(-this.speed);

        if (this.keys.right.isDown)
            this.sprite.setVelocityX(this.speed);

        if (this.keys.up.isDown)
            this.sprite.setVelocityY(-this.speed);

        if (this.keys.down.isDown)
            this.sprite.setVelocityY(this.speed);

        if (this.keys.fire.isDown) {

            if (time > this.lastFire + this.fireDelay) {

                this.fire();

                this.lastFire = time;

            }

        }

    }

    fire() {

        const bullet = this.scene.physics.add.image(
            this.sprite.x,
            this.sprite.y - 35,
            "bullet"
        );

        bullet.setVelocityY(-700);

        this.bullets.add(bullet);

    }

}
