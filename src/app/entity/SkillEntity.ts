import {IAnimator} from "./IAnimator";
import {getConfigAnims} from "../common/utils/GameUtil";
import {LOAD_FILE} from "../common/utils/Constant";
import {ISkill} from "./ISkill";
import ANIMATION_COMPLETE = Phaser.Animations.Events.ANIMATION_COMPLETE;
import ANIMATION_START = Phaser.Animations.Events.ANIMATION_START;

export class SkillEntity extends Phaser.Physics.Arcade.Sprite implements IAnimator, ISkill {
    private callback: Function | undefined = undefined;
    private readonly _scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, name: string, key?: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this._scene = scene;
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.setScale(0.3, 0.3);
        this.body?.setSize(this.width - 50, this.height - 20, true);
    }


    animator(scene: Phaser.Scene): void {
        let skillAnim = scene.anims.create(getConfigAnims(0, 28, 0, 11, 0, 'skillF', LOAD_FILE.SPIRE.BLUE_GIRL_SKILL.url, scene)) as Phaser.Animations.Animation;
        let sprite = this;
        this.on(ANIMATION_START, (event: any) => {
            console.log(event);
            console.log("Attack start!!!!!!!!!!!")
        })
        this.on(ANIMATION_COMPLETE, () => {
            console.log("Attack completed!!!!!!!!!!!!!!!!!")
            if (sprite.callback) {
                sprite.callback();
                skillAnim.destroy();
            }
            sprite.destroy();
            // sprite.destroy();
        })
    }

    use(target: { x: number, y: number }, fn?: Function): void {
        this.x = target.x;
        this.y = target.y;
        this._scene.add.existing(this);
        this.animator(this._scene);
        this.callback = fn;
        this.anims.play('skillF', false)

    }
}
