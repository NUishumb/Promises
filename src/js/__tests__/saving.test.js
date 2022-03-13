import GameSavingsLoader from '../app';

test('returns game saving', () => {
  const game = GameSavingsLoader.load();
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

  game.then((saving) => {
    expect(saving).toBe(expected);
  }).catch((err) => err);
});
