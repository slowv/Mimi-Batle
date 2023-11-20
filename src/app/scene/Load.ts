import {BlendModes, Geom} from "phaser";
import {GAME_CONFIG, LOAD_FILE, SCENE_KEY} from "../common/utils/Constant";
import {loadFile, TypeLoad} from "../common/utils/FileLoaderUtil";
import cursor from "../assets/images/cursor/cursor_06.png";
import {TextHud} from "../entity/TextHud";
import {getFps, getPing} from "../common/utils/GameUtil";
import {textBaseStyle} from "../common/constant";
import {BaseScene} from "./BaseScene";

export class Load extends BaseScene {
    cursor!: Phaser.Input.InputPlugin;
    mouse!: Phaser.Input.Pointer;
    textFPS!: TextHud;

    constructor() {
        super({
            key: SCENE_KEY.LOAD
        });
    }

    init() {
        super.init();
    }

    private async loadImages(): Promise<void> {
        loadFile(this);
    }

    private async loadSounds(): Promise<void> {
        loadFile(this, TypeLoad.AUDIO);
    }

    private async loadSpireSheets(): Promise<void> {
        loadFile(this, TypeLoad.SPIRE)
    }

    private async loadMedia(): Promise<void> {
        loadFile(this, TypeLoad.MEDIA)
    }

    private addCursorCustom(): void {
        this.cursor = this.input.setDefaultCursor('url(' + cursor + '), pointer');
        this.mouse = this.input.mousePointer;
        this.add.particles(0, 576, LOAD_FILE.IMAGE.CURSOR_LIGHT, {
            x: 0,
            y: 0,
            blendMode: BlendModes.ADD,
            alpha: .5,
            speed: {min: 30, max: 50},
            angle: 45,
            gravityY: 200,
            quantity: 1,
            scale: {start: 0.01, end: 0},
        }).startFollow({
            x: this.mouse.x,
            y: this.mouse.y,
        });
    }

    private addSnowFailDown(): void {
        this.add.particles(0, 0, LOAD_FILE.SPIRE.SNOW.url, {
            x: 0,
            y: -10,
            emitZone: {
                source: new Geom.Rectangle(0, 0, this.wGame, 100),
                type: 'random',
                quantity: 10
            },
            speedY: {min: 30, max: 200},
            speedX: {min: -20, max: 50},
            accelerationY: {random: [10, 15]},
            scale: {random: [0.2, 0.4]},
            alpha: {random: [0.1, 0.6]},
            gravityY: 5,
            frequency: 10,
            blendMode: BlendModes.ADD,
            rotate: {min: 0, max: 40},
            lifespan: {min: 3000, max: 5000},
        })
    }

    preload(): void {
        Promise.all([
            this.loadImages(),
            this.loadSounds(),
            this.loadSpireSheets(),
            this.loadMedia()]
        ).then();

        // LOADING BAR
        const progressBar = this.add.graphics();

        this.load.on('progress', (value: number) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.xBox, this.yBox, this.wBox * value, 15);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            assetText.destroy();
            setTimeout(() => {
                this.scene.start(SCENE_KEY.MAIN);
            }, 1000);
        });

        const assetText = this.make.text({
            x: 3,
            y: this.hGame - 25,
            text: '',
            style: textBaseStyle
        });
        this.load.on('fileprogress', (file: Phaser.Loader.File) => {
            console.log(file)
            const value = file.key.split('/');
            assetText.setText('Loading asset: ' + value[value.length - 1]);
        });
        const version = this.make.text({
            x: 3,
            y: this.hGame - 25,
            text: `Client version: ${GAME_CONFIG.VERSION}`,
            style: textBaseStyle
        });
        version.setX(this.wGame - (version.width + 3))

        this.textFPS = new TextHud(this, this.wGame - 90, 3, '0 fps',
            {
                fontSize: '12px',
                fontFamily: 'Monospace',
                color: '#a9a9a9',
                align: 'center',  // 'left'|'center'|'right'|'justify'
                backgroundColor: 'transparent'
            }
        ).setDepth(3);
    }

    create(): void {
        this.addCursorCustom();
        this.addSnowFailDown();
        this.addBackground();
        this.addMusic();
        // const video = this.add.video(0, 0, LOAD_FILE.MEDIA.BG_MENU);
        // video.setOrigin(0);
        // video.setDisplaySize(this.wGame, this.hGame)
        // video.play(true);
    }

    private addBackground(): void {
        this.add.image(this.wGame / 2 - 15, 120, LOAD_FILE.IMAGE.LOGO)
            .setDisplaySize(this.wGame / 2, 250);
        this.add.image(0, 0, LOAD_FILE.IMAGE.BG_LOAD)
            .setOrigin(0)
            .setDisplaySize(this.wGame, this.hGame)
            .setAlpha(.8)
            .setDepth(-1);
    }

    private addMusic(): void {
        // const music = this.sound.add(LOAD_FILE.SOUND.BG_MUSIC)
        // music.play()
    }

    update(time: number, delta: number) {
        this.textFPS.text = `FPS:${getFps(this)}  ${getPing(delta)}ms`;
    }
}
