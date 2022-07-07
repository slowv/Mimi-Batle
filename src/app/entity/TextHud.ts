/**
 * @author SlowV
 * @createdAt 17/06/2022 - 17:48:27
 */
export class TextHud extends Phaser.GameObjects.Text{
  constructor(scene: Phaser.Scene, x: number, y: number, text: string | string[], style: Phaser.Types.GameObjects.Text.TextStyle) {
    super(scene, x, y, text, style);
    this.setScrollFactor(0);
    this.setDepth(2);
    scene.add.existing(this);
  }
}
