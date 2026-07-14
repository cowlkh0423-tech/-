export class Stage1 extends Phaser.Scene{

    constructor(){

        super("Stage1");

    }

    create(){

        this.bg=this.add.tileSprite(
            240,
            400,
            480,
            800,
            "bg"
        );

    }

    update(){

        // 배경이 계속 아래로 흘러감
        this.bg.tilePositionY-=2;

    }

}
