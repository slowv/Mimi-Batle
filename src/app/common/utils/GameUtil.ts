/**
 * @author SlowV
 * @createdAt 17/06/2022 - 17:48:27
 */
export const getFps = (scene: Phaser.Scene): number => (
  Math.ceil(scene.game.loop.actualFps)
)

export const getPing = (delta: number): number => (
  Math.ceil(delta)
)
