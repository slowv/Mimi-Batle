import {LOAD_FILE, SCENE_KEY} from "../common/utils/Constant";
import {BaseScene} from "./BaseScene";
import {CharacterEntity} from "../entity/CharacterEntity";
import {textBaseStyle} from "../common/constant";
import {SkillEntity} from "../entity/SkillEntity";

export class MainScene extends BaseScene {
    text!: Phaser.GameObjects.Text;
    quinn!: CharacterEntity;

    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
        super({
            key: SCENE_KEY.MAIN
        });
    }

    create() {
        this.loadChampion();
        this.text = this.add.text(this.quinn.x, this.quinn.y - 10, this.quinn.championName, textBaseStyle);
    }

    loadChampion(): void {
        this.quinn = new CharacterEntity(this, 600, 400, LOAD_FILE.SPIRE.CHARACTER_BLUE_GIRL.url, "Quinn");
    }

    preload() {

    }

    update(time: number, delta: number) {
        this.quinn.update(time, delta)
        this.text.x = this.quinn.x + 10;
        this.text.y = this.quinn.y - 15;
    }
}
