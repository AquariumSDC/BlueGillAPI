const http = require('k6/http');
const { check, sleep } = require('k6');

export const options = {
  scenarios: {
    QnA: {
      executor: 'constant-arrival-rate',
      rate: 400,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 1000,
      maxVUs: 6000,
    }
  }
};

export default () => {
  const QRes = http.get('http://localhost:3000/qa/questions');
  check(QRes, { 'status was 200': (r) => r.status == 200 });
}
