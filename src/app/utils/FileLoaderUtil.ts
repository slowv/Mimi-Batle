import {Scene} from "phaser";
import {LOAD_FILE} from "./Constant";

export enum TypeLoad {
  IMAGE,
  SPIRE,
  AUDIO,
  MEDIA,
}

export const loadFile = (scene: Scene, type: TypeLoad = TypeLoad.IMAGE): void => {
  switch (type) {
    case TypeLoad.IMAGE:
      Object.entries(LOAD_FILE.IMAGE).forEach(item => {
        scene.load.image(item[1], item[1])
      })
      return;
    case TypeLoad.AUDIO:
      Object.entries(LOAD_FILE.SOUND).forEach(item => {
        scene.load.audio(item[1], item[1])
      })
      return;
    case TypeLoad.SPIRE:
      Object.entries(LOAD_FILE.SPIRE).forEach(item => {
        scene.load.spritesheet(item[1].url, item[1].url, {
          frameWidth: item[1].w,
          frameHeight: item[1].h
        })
      })
      return;
    case TypeLoad.MEDIA:
      Object.entries(LOAD_FILE.MEDIA).forEach(item => {
        scene.load.video(item[1], item[1], 'canplay', false)
      })
      return;
  }
}
