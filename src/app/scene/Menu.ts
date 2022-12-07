import {Scene} from "phaser";
import {SCENE_KEY} from "../common/utils/Constant";

export class Menu extends Scene {
  constructor() {
    super({
      key: SCENE_KEY.MENU
    });
  }
}
