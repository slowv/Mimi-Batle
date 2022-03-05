import React from 'react';
import Phaser, {Game, Scene} from "phaser";
import {GAME_CONFIG} from "./utils/Constant";
import './App.scss';
import {Load} from "./scene/Load";

// Define scene here
const SCENE: typeof Scene[] = [
    Load
]

export const game: Game = new Game({
    type: Phaser.WEBGL,
    parent: 'game-root',
    dom: {
      createContainer: true
    },
    backgroundColor: 0xffffff,
    width: GAME_CONFIG.WIDTH,
    height: GAME_CONFIG.HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    render: {
      pixelArt: true,
      powerPreference: 'high-performance'
    },
    fps: {
        min: 30,
        deltaHistory: 60,
        forceSetTimeOut: true
    },
    version: GAME_CONFIG.VERSION,
    audio: {
        disableWebAudio: true,
        noAudio: false,
    },
    scene: SCENE
});

function App() {
    return (
        <div className={'game-root'}/>
    );
}

export default App;