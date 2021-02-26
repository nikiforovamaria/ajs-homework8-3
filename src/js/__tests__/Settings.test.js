import Settings from '../Settings';

test('1 - should change all settings', () => {
  const setting = new Settings();
  setting.setSettings('light', 'pop', 'hard');
  const arr = Array.from(setting.getSettings(), ([name, value]) => ({ name, value }));
  const result = [
    { name: 'theme', value: 'light' },
    { name: 'music', value: 'pop' },
    { name: 'difficulty', value: 'hard' },
  ];
  expect(arr).toEqual(result);
});

test('2 - should throw an error about theme', () => {
  const setting = new Settings();
  const result = 'Тема должна быть dark, light или gray';
  expect(() => {
    setting.setSettings('green', 'pop', 'hard');
  }).toThrow(result);
});

test('3 - should throw an error about music', () => {
  const setting = new Settings();
  const result = 'Музыка должна быть trance, pop, rock, chillout или off';
  expect(() => {
    setting.setSettings('light', 'hiphop', 'hard');
  }).toThrow(result);
});

test('4 - should throw an error about difficulty', () => {
  const setting = new Settings();
  const result = 'Сложность должна быть easy, normal, hard или nightmare';
  expect(() => {
    setting.setSettings('light', 'pop', 'veryhard');
  }).toThrow(result);
});
