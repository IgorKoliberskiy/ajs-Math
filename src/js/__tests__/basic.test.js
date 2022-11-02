import Daemon from '../daemon';
import Magician from '../magician';

test('Атака мага без дурмана', () => {
  const player = new Magician('Player');
  player.attack = 100;
  const result = player.attack;
  expect(result(4)).toEqual(70);
});

test('Атака демона под дурманом', () => {
  const player = new Daemon('Player');
  player.attack = 100;
  player.stoned = true;
  const result = player.attack;
  expect(result(2)).toEqual(85);
});