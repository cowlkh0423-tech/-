import { BootScene } from "./scenes/BootScene.js";

const config = {

    type: Phaser.AUTO,

    width: 480,

    height: 800,

    parent: "game",

    backgroundColor: "#000000",

    physics:{
        default:"arcade",
        arcade:{
            debug:false
        }
    },

    scene:[
        BootScene
    ]

};

new Phaser.Game(config);
