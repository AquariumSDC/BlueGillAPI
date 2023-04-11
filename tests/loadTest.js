const http = require('k6/http');
const { check, sleep } = require('k6');

export const options = {
  vus: 1000,
  duration: '60s',
  // stages: [
  //   { duration: '10s', target: 100 },
  //   { duration: '20s', target: 500 },
  //   { duration: '30s', target: 1000 },
  //   { duration: '20s', target: 500 },
  //   { duration: '20s', target: 100 },
  //   { duration: '10s', target: 0 },
  // ],
};

// const url = 'http://localhost:3000';

export default () => {

  const QRes = http.get('http://localhost:3000/qa/questions');
  check(QRes, { 'status was 200': (r) => r.status == 200 });
  sleep(1);

  // const ARes = http.get('http://localhost:3000/qa/questions/:question_id/answers');
  // check(ARes, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);
}