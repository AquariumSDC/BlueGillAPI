# BluegillAPI

## Table of Contents

- [Description](#Description)
- [Technologies Used](#Technologies-Used)
- [Installation and Setup](#Installation-and-Setup)
- [Sample .env File](#Sample-.env-File)
- [Approach and Implementation](#approach-and-implementation)
- [Test Analysis & Results](#test-analysis-and-results)

## Description

BluegillAPI is a RESTful API that allows for the fast and secure access of data stored for an e-commerce application. It was created to replace a legacy API service. The API supports endpoints for the "Questions and Answers" segment of the product page.

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

## Installation and Setup

To install and run:

1. Clone the repository
2. Run `npm install`
3. Create a .env file with the necessary environment variables (see [Sample .env File](#Sample-.env-File) for an example)
4. Run `npm run start` to start the server

## Sample .env File

```
DB_HOST="localhost"
DB_USER="postgres"
DB_PASSWORD="password"
DB_NAME="bluegill"
```

## Approach and Implementation

## Results and Takeaways

Top Performance Achieved

- Response Time (latency) - 282ms
- Throughput - 394.5rps
- ERR - 0.6%

![Top Performance Test Metric](./assets/Loader.io-400CPS.png)
