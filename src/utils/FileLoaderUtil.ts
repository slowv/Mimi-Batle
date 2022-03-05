import {Scene} from "phaser";

export enum TypeLoad {
    IMAGE, SPIRE, AUDIO
}

export const loadFile = (scene: Scene, obj: Object, type: TypeLoad = TypeLoad.IMAGE): void => {
    switch (type) {
        case TypeLoad.IMAGE:
            Object.entries(obj).forEach(item => {
                scene.load.image(item[1], item[1])
            })
            break;
        case TypeLoad.AUDIO:
            Object.entries(obj).forEach(item => {
                scene.load.audio(item[1], item[1])
            })
            break
        case TypeLoad.SPIRE:
            Object.entries(obj).forEach(item => {
                console.log(item)
                scene.load.spritesheet(item[1].url, item[1].url, {
                    frameWidth: item[1].w,
                    frameHeight: item[1].h
                })
            })
    }
}