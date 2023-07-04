const getFestivalApi = require('../index.js');

test('Récupération des données des festivals', async () => {
  const festivals = await getFestivalApi();
  expect(festivals).toBeDefined();
  expect(Array.isArray(festivals)).toBeTruthy();
  expect(festivals.length).toBeGreaterThan(0);

  console.table(festivals);
});