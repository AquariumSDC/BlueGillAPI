const http = require('k6/http');
const { check, sleep } = require('k6');

export const options = {
  // vus: 1000,
  // duration: '60s',
  scenarios: {
    QnA: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 1000,
      maxVUs: 6000,
    }
  }
};

// const url = 'http://localhost:3000';

export default () => {

  const QRes = http.get('http://localhost:3000/qa/questions');
  check(QRes, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);

}


  // const ARes = http.get('http://localhost:3000/qa/questions/:question_id/answers');
  // check(ARes, { 'status was 200': (r) => r.status == 200 });
  // sleep(1);