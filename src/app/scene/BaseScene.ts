import {Scene} from "phaser";
import {SCENE_KEY} from "../common/utils/Constant";

export abstract class BaseScene extends Scene {
    protected wGame: number = 0;
    protected hGame: number = 0;
    protected wBox: number = 0;
    protected hBox: number = 0;
    protected xBox: number = 0;
    protected yBox: number = 0;

    protected constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(
            Object.assign({
                key: SCENE_KEY.MAIN
            }, config)
        );
    }

    init(): void {
        this.wGame = this.game.renderer.width;
        this.hGame = this.game.renderer.height;
        this.wBox = this.wGame;
        this.hBox = 10;
        this.xBox = 0;
        this.yBox = this.hGame - this.hBox
    };
}
