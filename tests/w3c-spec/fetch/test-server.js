app.port = 3000;

app.get('/run', 'runner.js', policy => {
  policy.outboundHttp.allowGet('**');
});