import del from 'del';
import config from '../../config.json';

// Swipe Dist Folder
export const swipeDist = () =>
    del([config.dir.dist])

// Swipe JS Dist Folder
export const swipeJS = () =>
    del([config.jsSetting.dist])

// Swipe Font Dist Folder
export const swipeFont = () =>
    del([config.fontsSetting.dist])

// Swipe Image Dist Folder
export const swipeImage = () =>
    del([config.imgSetting.dist])

// Swipe HTML Dist Folder
export const swipeHTML = () =>
    del([config.htmlSetting.dist])

// Swipe CSS Dist Folder
export const swipeCSS = () =>
    del([config.cssSetting.dist])

export const removeTempSvgSprites = () =>
    del(config.dir.src + 'sprite-svg-temp')