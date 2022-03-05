import {BlendModes, Geom, Scene} from "phaser";
import {LOAD_FILE, SCENE_KEY} from "../utils/Constant";
import {loadFile, TypeLoad} from "../utils/FileLoaderUtil";
import cursor from "../assets/images/Cursor/cursor_06.png";
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;

export class Load extends Scene {
    wGame: number = 0;
    hGame: number = 0;
    wBox: number = 0;
    hBox: number = 0;
    xBox: number = 0;
    yBox: number = 0;
    cursor!: Phaser.Input.InputPlugin;
    particles!: ParticleEmitterManager;
    emitter!: ParticleEmitter;
    mouse!: Phaser.Input.Pointer;
    backEmit!: ParticleEmitter;
    midEmit!: ParticleEmitter;
    frontEmit!: ParticleEmitter;

    constructor() {
        super({
            key: SCENE_KEY.LOAD
        });
    }

    init(): void {
        this.wGame = this.game.renderer.width;
        this.hGame = this.game.renderer.height;
        this.wBox = this.wGame;
        this.hBox = 10;
        this.xBox = 0;
        this.yBox = this.hGame - this.hBox
    }

    loadImages(): void {
        loadFile(this, LOAD_FILE.IMAGE);
    }

    loadSounds(): void {
        loadFile(this, LOAD_FILE.SOUND, TypeLoad.AUDIO);
    }

    loadSpireSheets(): void {
        loadFile(this, LOAD_FILE.SPIRE, TypeLoad.SPIRE)
    }

    addCursorCustom(): void {
        this.cursor = this.input.setDefaultCursor('url(' + cursor + '), pointer');
        this.mouse = this.input.mousePointer;
        this.particles = this.add.particles(LOAD_FILE.IMAGE.CURSOR_LIGHT);
        this.emitter = this.particles.createEmitter({
            x: 0,
            y: 576,
            blendMode: Phaser.BlendModes.ADD,
            alpha: .5,
            speed: {min: 30, max: 50},
            angle: 45,
            gravityY: 200,
            quantity: 1,
            scale: {start: 0.1, end: 0},
            active: false
        });
        this.input.on('pointermove', () => {
            this.emitter.active = true;
            this.emitter.setPosition(this.mouse.x, this.mouse.y);
        });
    }

    addSnowFailDown(): void {
        const particlesSnow = this.add.particles(LOAD_FILE.SPIRE.SNOW.url)
        particlesSnow.createEmitter({
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
        this.loadImages();
        this.loadSounds();
        this.loadSpireSheets();

        // LOADING BAR
        const progressBar = this.add.graphics();

        this.load.on('progress', (value: number) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.xBox, this.yBox, this.wBox * value, 15);
        });

        this.load.on('complete', () => {
            console.log('complete');
            // progressBar.destroy();
            // assetText.destroy();
        });
        const assetText = this.make.text({
            x: 3,
            y: this.hGame - 25,
            text: '',
            style: {
                fontStyle: 'italic',
                fontFamily: 'monospace',
                fontSize: '12px',
                // font: '15px monospace',
                color: '#d5d5d5',
            }
        });
        this.load.on('fileprogress', (file: Phaser.Loader.File) => {
            const value = file.key.split('/');
            assetText.setText('Loading asset: ' + value[value.length - 1]);
        });
    }

    create(): void {
        this.addCursorCustom();
        this.addSnowFailDown();
        this.add.image(this.wGame / 2 - 15, 120, LOAD_FILE.IMAGE.LOGO).setDisplaySize(this.wGame / 2, 250);
        this.add.image(0, 0, LOAD_FILE.IMAGE.BG_LOAD)
            .setOrigin(0)
            .setDisplaySize(this.wGame, this.hGame)
            .setAlpha(.8)
            .setDepth(-1);
        const music = this.sound.add(LOAD_FILE.SOUND.BG_MUSIC)
        music.play()

    }
}