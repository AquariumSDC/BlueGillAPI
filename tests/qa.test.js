const request = require('supertest');
require('dotenv').config();
const express = require('express');
const app = express();
const QnA = require('../server/routes');
const db = require('../server/db');

// TEST SERVER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/qa', QnA);
const testServer = app.listen(3001);

const prodId = 1;

afterAll(async () => {
  await testServer.close();
  await db.end();
})

describe('QnA test suite', () => {

  it('tests /qa/questions endpoint', async () => {
    const res = await request(app)
    .get('/qa/questions')
    .query({ product_id: prodId });
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe('1');
    expect(Array.isArray(res.body.results)).toBe(true);
    expect(res.body.results.length).toEqual(5);
    expect(res.body.results).toEqual(expect.arrayContaining([{
      "id": 3,
      "question_body": "Does this product run big or small?",
      "question_date": "1608535907083",
      "asker_name": "jbilas",
      "question_helpfulness": 8,
      "reported": 0,
      "answers": {}
  }]));
  });

  it('tests /qa/answers endpoint', async () => {
    const res = await request(app)
    .get(`/qa/questions/${prodId}/answers`)
    .query({question_id: prodId})
    expect(res.body).toEqual(
      expect.objectContaining({
        results: expect.arrayContaining([
          expect.objectContaining({
            photos: expect.any(Array)
          })
        ])}))
  })
});