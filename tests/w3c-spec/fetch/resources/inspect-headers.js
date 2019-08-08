// https://github.com/web-platform-tests/wpt/blob/376e2a8250c3824b794ec518ab320d8a82cedf95/fetch/api/resources/inspect-headers.py


// def main(request, response):
//     headers = []
//     if "headers" in request.GET:
//         checked_headers = request.GET.first("headers").split("|")
//         for header in checked_headers:
//             if header in request.headers:
//                 headers.append(("x-request-" + header, request.headers.get(header, "")))

//     if "cors" in request.GET:
//         if "Origin" in request.headers:
//             headers.append(("Access-Control-Allow-Origin", request.headers.get("Origin", "")))
//         else:
//             headers.append(("Access-Control-Allow-Origin", "*"))
//         headers.append(("Access-Control-Allow-Credentials", "true"))
//         headers.append(("Access-Control-Allow-Methods", "GET, POST, HEAD"))
//         exposed_headers = ["x-request-" + header for header in checked_headers]
//         headers.append(("Access-Control-Expose-Headers", ", ".join(exposed_headers)))
//         if "allow_headers" in request.GET:
//             headers.append(("Access-Control-Allow-Headers", request.GET['allow_headers']))
//         else:
//             headers.append(("Access-Control-Allow-Headers", ", ".join(request.headers)))

//     headers.append(("content-type", "text/plain"))
//     return headers, ""


export default (request, context) => {
  const response = new Response('');

  const checked_headers = context.query.get('headers').split('|');

  for (let header of checked_headers) {
    if (request.headers.has(header)) {
      response.headers.append('x-request-' + header, request.headers.get(header));
    }
  }

  return response;
}