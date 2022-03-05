import bg from '../assets/images/bg.png'
import logoDark from '../assets/images/logo_dark.png'
import bgLoad from '../assets/images/bg-load.jpg'
import cursorLight from '../assets/images/particles/cursor_light.png'
import snow from '../assets/images/particles/snowflakes.png'
import snowLarge from '../assets/images/particles/snowflakes_large.png'

export const GAME_CONFIG = {
    WIDTH: 1024,
    HEIGHT: 576,
    VERSION: '1.0'
}

export const SCENE_KEY = {
    LOAD: 'LOAD',
    MENU: 'MENU'
}

export const LOAD_FILE = {
    IMAGE: {
        BG: bg,
        LOGO: logoDark,
        BG_LOAD: bgLoad,
        CURSOR_LIGHT: cursorLight
    },
    SOUND: {
        BG_MUSIC: '../assets/sounds/bg-music.mp3'
    },
    SPIRE: {
        SNOW: {
            url: snow,
            w: 17,
            h: 17
        },
        SNOW_LARGE: {
            url: snowLarge,
            w: 64,
            h: 64
        }
    }
}