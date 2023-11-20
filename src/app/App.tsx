import React from 'react';
import Phaser, {Game, Scene} from "phaser";
import {GAME_CONFIG} from "./common/utils/Constant";
import './App.scss';
import {Load} from "./scene/Load";
import {Menu} from "./scene/Menu";
import {MainScene} from "./scene/MainScene";

// Define scene here
const SCENE: typeof Scene[] = [
    Load, Menu, MainScene
]

export const game: Game = new Game({
    type: Phaser.WEBGL,
    parent: 'game-root',
    customEnvironment: true,
    clearBeforeRender: false,
    dom: {
        createContainer: true,
    },
    backgroundColor: 0x000000,
    width: GAME_CONFIG.WIDTH,
    height: GAME_CONFIG.HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            fps: 60,
            gravity: {
                x: 0,
                y: 0
            }
        },
        matter: {}
    },
    render: {
        pixelArt: true,
        powerPreference: 'high-performance',
        desynchronized: true
    },
    fps: {
        min: 30,
        limit: Number.MAX_SAFE_INTEGER,
        // deltaHistory: 60,
        target: 60,
        forceSetTimeOut: false,
        smoothStep: true
    },
    version: GAME_CONFIG.VERSION,
    audio: {
        disableWebAudio: true,
        noAudio: false
    },
    scene: SCENE
});

function App() {
    return (
        <div className={'game-root'}/>
    );
}

export default App;
