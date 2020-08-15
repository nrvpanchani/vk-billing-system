const { MSICreator } = require('electron-wix-msi');
const path = require('path');

const APP_DIR = path.resolve(__dirname, './dist/win/vk-associates-billing-app-v0.1-win32-x64');
const OUT_DIR = path.resolve(__dirname, './vk-associates-billing-app');
const background = path.resolve(__dirname, './src/assets/images/vk.png');
const banner = path.resolve(__dirname, './src/assets/images/vk-Slim.png');

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,
    exe: 'vk-associates-billing-app-v0.1',
    description: 'This is a VK Associates Billing Application',
    name: 'VK Associates',
    manufacturer: 'VK Associates',
    version: '1.0.0',
    arch: 'x64',
    ui: {
        enabled: false,
        chooseDirectory: true,
        images: {
            background: background,
            banner: banner
        }
    },
});

msiCreator.create().then(function(){
    msiCreator.compile();
});