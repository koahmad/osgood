// https://github.com/web-platform-tests/wpt/blob/376e2a8250c3824b794ec518ab320d8a82cedf95/fetch/api/resources/cache.py

// ETAG = '"123abc"'
// CONTENT_TYPE = "text/plain"
// CONTENT = "lorem ipsum dolor sit amet"


// def main(request, response):
//     # let caching kick in if possible (conditional GET)
//     etag = request.headers.get("If-None-Match", None)
//     if etag == ETAG:
//         response.headers.set("X-HTTP-STATUS", 304)
//         response.status = (304, "Not Modified")
//         return ""

//     # cache miss, so respond with the actual content
//     response.status = (200, "OK")
//     response.headers.set("ETag", ETAG)
//     response.headers.set("Content-Type", CONTENT_TYPE)
//     return CONTENT

const ETAG = '"123abc"';
const CONTENT_TYPE = "text/plain";
const CONTENT = "lorem ipsum dolor sit amet";

export default (request, context) => {
  

  const etag = request.headers.get('If-None-Match');
  console.log(request.headers);

  if (ETAG === etag) {
    const response = new Response('');
    response.headers.set('X-HTTP-STATUS', 304);
    response.status = 304;
    return response;
  }
  const response = new Response(CONTENT);
  response.headers.set('ETag', ETAG);
  response.headers.set('Content-Type', CONTENT_TYPE);
  return response;
}