const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
        <h1>🚀 SaaS App Version 1.0</h1>
        <p>Status: <strong>Live on AWS</strong></p>
        <p>Deployment: <strong>Automated via Buildkite</strong></p>
      </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});