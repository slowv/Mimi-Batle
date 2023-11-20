import {PhysicAction} from "./PhysicAction";
import {IProperties} from "./IProperties";
import {IAnimator} from "./IAnimator";
import {LOAD_FILE} from "../common/utils/Constant";
import {getConfigAnims} from "../common/utils/GameUtil";
import {IActionKey} from "./IActionKey";

export class Character extends PhysicAction implements IProperties, IAnimator {
    armor: number = 10;
    attackDistance: number = 200;
    attackSpeed: number = 0.3;
    critical: number = 0;
    currentEnergy: number = 400;
    currentHp: number = 560;
    damageAttack: number = 50;
    damageMagic: number = 0;
    energyRegen: number = 1.0;
    healthRegen: number = 3.0;
    level: number = 1;
    magicResistance: number = 20;
    maxEnergy: number = 400;
    maxHp: number = 560;
    reloadSkill: number = 10;
    speed: number = 10;
    championName;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, name: string, key?: string, frame?: string | number) {
        super(scene, x, y, texture, frame);
        this.championName = name;
        scene.physics.world.enableBody(this);
        this.setCollideWorldBounds(true);
        this.setImmovable(true);
        this.setOrigin(0, 0);
        this.setScale(0.3, 0.3);
        this.body?.setSize(this.width - 50, this.height - 20, true);

        scene.add.existing(this);

        this.keys = scene.input.keyboard?.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                attack: Phaser.Input.Keyboard.KeyCodes.SPACE
            }
        ) as IActionKey;
        this.animator(scene);
        this.anims.play('down');
    }


    update(time: number, delta: number) {
        super.update(time, delta);
        this.move(delta);
        this.attack();
    }

    protected attack(): void {
        if (this.keys.attack.isDown) {
            console.log("Attack");
        }
    }

    protected move(delta: number): void {
        this.keyDown();
        this.handlerInput(delta);
        this.keyUp();
    }

    private handlerInput(delta: number): void {
        if (this.isAPress) {
            if (this.body?.velocity.x === 0) {
                this.anims.play('left')
            }
            this.setVelocityX(-this.speed * delta)
        }
        if (this.isWPress) {
            if (this.body?.velocity.y === 0) {
                this.anims.play('up')
            }
            this.setVelocityY(-this.speed * delta)
        }
        if (this.isDPress) {
            if (this.body?.velocity.x === 0) {
                this.anims.play('right')
            }
            this.setVelocityX(this.speed * delta)
        }
        if (this.isSPress) {
            if (this.body?.velocity.y === 0) {
                this.anims.play('down')
            }
            this.setVelocityY(this.speed * delta)
        }
    }

    private keyDown(): void {
        if (this.keys.left?.isDown) {
            this.isAPress = true;
        } else if (this.keys.up?.isDown) {
            this.isWPress = true;
        } else if (this.keys.right?.isDown) {
            this.isDPress = true;
        } else if (this.keys.down?.isDown) {
            this.isSPress = true;
        }
    }

    private keyUp(): void {
        if ((this.isAPress && this.keys.left?.isUp) || (this.isDPress && this.keys.right?.isUp)) {
            this.isAPress = false;
            this.isDPress = false;
            this.setVelocityX(0);
        }

        if ((this.isWPress && this.keys.up?.isUp) || (this.isSPress && this.keys.down?.isUp)) {
            this.isWPress = false;
            this.isSPress = false;
            this.setVelocityY(0);
        }
    }

    animator(scene: Phaser.Scene): void {
        scene.anims.create(getConfigAnims(0, 2, 0, 7, -1, 'down', LOAD_FILE.SPIRE.CHARACTER_BLUE_GIRL.url, scene));
        scene.anims.create(getConfigAnims(3, 5, 3, 7, -1, 'left', LOAD_FILE.SPIRE.CHARACTER_BLUE_GIRL.url, scene));
        scene.anims.create(getConfigAnims(6, 8, 6, 7, -1, 'right', LOAD_FILE.SPIRE.CHARACTER_BLUE_GIRL.url, scene));
        scene.anims.create(getConfigAnims(9, 11, 9, 7, -1, 'up', LOAD_FILE.SPIRE.CHARACTER_BLUE_GIRL.url, scene));
    }
}
