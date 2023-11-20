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

export const getConfigAnims = (start: number, end: number, first: number, frameRate: number, repeat = 1, key: string, texture: string, scene: Phaser.Scene): Phaser.Types.Animations.Animation => {
    return {
        key,
        repeat,
        frames: scene.anims.generateFrameNumbers(texture, {
            start,
            end,
            first
        }),
        frameRate
    }
}
