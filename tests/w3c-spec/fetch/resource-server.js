app.port = 3002;

app.get('/inspect-headers', './resources/inspect-headers.js');
app.get('/cache', './resources/cache.js');