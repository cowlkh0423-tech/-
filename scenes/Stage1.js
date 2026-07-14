import { Player } from "../objects/Player.js";

export class Stage1 extends Phaser.Scene {

    constructor() {

        super("Stage1");

    }

    create() {

        this.bg = this.add.tileSprite(
            240,
            400,
            480,
            800,
            "bg"
        );

        this.player = new Player(this);

    }

    update(time) {

        this.bg.tilePositionY -= 2;

        this.player.update(time);

        this.player.bullets.children.each((bullet) => {

            if (bullet.y < -20)
                bullet.destroy();

        });

    }

}
