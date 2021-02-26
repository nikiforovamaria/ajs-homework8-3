import Settings from './Settings';

console.log('worked');

const setting = new Settings();
console.log(setting);
setting.setSettings('light', 'pop', 'hard');
console.log(setting.getSettings());
