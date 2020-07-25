//server.js

// Node.js에 기본 내장되어 있는 http 모듈을 load
var http = require('http'),
    url = require('url');

// http 모듈의 createServer 메소드를 호출하여 HTTP서버 생성
// 모듈화
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`);
        // handle은 pathname과 request handler의 관계를 담고 있는 객체
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');

}

exports.start = start;



