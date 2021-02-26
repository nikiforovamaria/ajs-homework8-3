export default class Settings {
  constructor() {
    this.settings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  setSettings(theme, music, difficulty) {
    if (theme === 'dark' || theme === 'light' || theme === 'gray') {
      this.settings.set('theme', theme);
    } else {
      throw new Error('Тема должна быть dark, light или gray');
    }
    if (music === 'trance' || music === 'pop' || music === 'rock' || music === 'chillout' || music === 'off') {
      this.settings.set('music', music);
    } else {
      throw new Error('Музыка должна быть trance, pop, rock, chillout или off');
    }
    if (difficulty === 'easy' || difficulty === 'normal' || difficulty === 'hard' || difficulty === 'nightmare') {
      this.settings.set('difficulty', difficulty);
    } else {
      throw new Error('Сложность должна быть easy, normal, hard или nightmare');
    }
  }

  getSettings() {
    return this.settings;
  }
}
