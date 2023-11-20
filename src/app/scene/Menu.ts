import {SCENE_KEY} from "../common/utils/Constant";
import {BaseScene} from "./BaseScene";

export class Menu extends BaseScene {
    constructor() {
        super({
            key: SCENE_KEY.MENU
        });
    }
}
