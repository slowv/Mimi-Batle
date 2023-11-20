import {IActionKey} from "./IActionKey";

export abstract class PhysicAction extends Phaser.Physics.Arcade.Sprite {
    keys!: IActionKey;
    isAPress = false;
    isWPress = false;
    isSPress = false;
    isDPress = false;
    isSpacePress = false;

    protected abstract move(delta: number): void;

    protected abstract attack(): void;
}
