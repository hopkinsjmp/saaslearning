{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const app = express();\
const port = 3000;\
\
app.get('/', (req, res) => \{\
  res.send(`\
    <html>\
      <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">\
        <h1>\uc0\u55357 \u56960  SaaS App Version 1.0</h1>\
        <p>Status: <strong>Live on AWS</strong></p>\
        <p>Deployment: <strong>Automated via Buildkite</strong></p>\
      </body>\
    </html>\
  `);\
\});\
\
app.listen(port, '0.0.0.0', () => \{\
  console.log(`App listening at http://0.0.0.0:$\{port\}`);\
\});}