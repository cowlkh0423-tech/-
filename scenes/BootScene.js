import { MenuScene } from "./MenuScene.js";
import { Stage1 } from "./Stage1.js";

export class BootScene extends Phaser.Scene{

    constructor(){
        super("BootScene");
    }

    preload(){

        // ===== 배경 =====
        this.load.image("bg","assets/images/background1.png");

        // ===== 플레이어 =====
        this.load.image("player","assets/images/player.png");

        // ===== 적 =====
        this.load.image("enemy","assets/images/enemy1.png");

        // ===== 총알 =====
        this.load.image("bullet","assets/images/bullet.png");

        // ===== 적 총알 =====
        this.load.image("enemyBullet","assets/images/enemyBullet.png");

        // ===== 아이템 =====
        this.load.image("heart","assets/images/heart.png");
        this.load.image("ammo","assets/images/ammo.png");
        this.load.image("skill","assets/images/skill.png");

        // ===== 폭발 =====
        this.load.spritesheet(
            "explosion",
            "assets/images/explosion.png",
            {
                frameWidth:64,
                frameHeight:64
            }
        );

    }

    create(){

        this.scene.add("MenuScene",MenuScene);
        this.scene.add("Stage1",Stage1);

        this.scene.start("MenuScene");

    }

}
