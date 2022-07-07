import logoDark from '../assets/images/logo_dark.png'
import bgLoad from '../assets/images/bg-load.jpg'
import cursorLight from '../assets/images/particles/cursor_light.png'
import snow from '../assets/images/particles/snowflakess.png'
import snowLarge from '../assets/images/particles/snowflakes_large.png'
import music from '../assets/sounds/bg-music.mp3';
import video_bg_menu from '../assets/media/ys.mp4';
import cursor03 from '../assets/images/cursor/cursor_03.png';
import cursor06 from '../assets/images/cursor/cursor_06.png';
import cursor11 from '../assets/images/cursor/cursor_11.png';
import cursor14 from '../assets/images/cursor/cursor_14.png';
import cursor16 from '../assets/images/cursor/cursor_16.png';
import cursor19 from '../assets/images/cursor/cursor_19.png';
import cursor21 from '../assets/images/cursor/cursor_21.png';
import cursor26 from '../assets/images/cursor/cursor_26.png';
import cursor29 from '../assets/images/cursor/cursor_29.png';
import cursor40 from '../assets/images/cursor/cursor_40.png';
import cursor42 from '../assets/images/cursor/cursor_42.png';
import cursor45 from '../assets/images/cursor/cursor_45.png';
import cursor48 from '../assets/images/cursor/cursor_48.png';
import cursor51 from '../assets/images/cursor/cursor_51.png';
import cursor53 from '../assets/images/cursor/cursor_53.png';
import cursor56 from '../assets/images/cursor/cursor_56.png';
import cursor59 from '../assets/images/cursor/cursor_59.png';
import cursor70 from '../assets/images/cursor/cursor_70.png';
import cursor72 from '../assets/images/cursor/cursor_72.png';
// HUD
import ScoreboardAtlas from '../assets/hud/scoreboard/ScoreboardAtlas_03.png';
import trackBarEXP from '../assets/hud/clarity/trackBarEXP.png';

export const GAME_CONFIG = {
  WIDTH: 1024,
  HEIGHT: 576,
  VERSION: '1.01'
}

export const SCENE_KEY = {
  LOAD: 'LOAD',
  MENU: 'MENU'
}

export const LOAD_FILE = {
  IMAGE: {
    LOGO: logoDark,
    BG_LOAD: bgLoad,
    CURSOR_LIGHT: cursorLight,
    CURSOR_03: cursor03,
    CURSOR_06: cursor06,
    CURSOR_11: cursor11,
    CURSOR_14: cursor14,
    CURSOR_16: cursor16,
    CURSOR_19: cursor19,
    CURSOR_21: cursor21,
    CURSOR_26: cursor26,
    CURSOR_29: cursor29,
    CURSOR_40: cursor40,
    CURSOR_42: cursor42,
    CURSOR_45: cursor45,
    CURSOR_48: cursor48,
    CURSOR_51: cursor51,
    CURSOR_53: cursor53,
    CURSOR_56: cursor56,
    CURSOR_59: cursor59,
    CURSOR_70: cursor70,
    CURSOR_72: cursor72,
    SCOREBOARD: ScoreboardAtlas,
    TRACK_BAR_EXP: trackBarEXP,
  },
  SOUND: {
    BG_MUSIC: music
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
  },
  MEDIA: {
    BG_MENU: video_bg_menu
  }
}
