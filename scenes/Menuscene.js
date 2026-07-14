export class MenuScene extends Phaser.Scene{

    constructor(){
        super("MenuScene");
    }

    create(){

        this.add.text(
            240,
            170,
            "1945 AIR BATTLE",
            {
                fontSize:"36px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        this.add.text(
            240,
            270,
            "WASD : MOVE",
            {
                fontSize:"22px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        this.add.text(
            240,
            310,
            "SPACE : FIRE",
            {
                fontSize:"22px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        this.add.text(
            240,
            350,
            "SHIFT : SKILL",
            {
                fontSize:"22px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        this.add.text(
            240,
            390,
            "R : REVIVE",
            {
                fontSize:"22px",
                color:"#ffffff"
            }
        ).setOrigin(0.5);

        let start=this.add.text(
            240,
            550,
            "▶ START ◀",
            {
                fontSize:"30px",
                color:"#ffff00",
                backgroundColor:"#333"
            }
        )
        .setOrigin(0.5)
        .setInteractive();

        start.on("pointerdown",()=>{

            this.scene.start("Stage1");

        });

    }

}
