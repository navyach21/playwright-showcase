export const searchTerms = [
  { term: 'Dress', expectResults: true },
  { term: 'Top', expectResults: true },
  { term: 'zzzznotarealproduct', expectResults: false },
];

export const invalidLogins = [
  { email: 'notreal@example.com', password: 'wrongpass123' },
  { email: 'test@test.com', password: '' },
];
