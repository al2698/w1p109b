# module/hello

module 需要用伺服器才行！

```
mac020:06-module mac020$ deno upgrade
Checking for latest version
Version has been found
Deno is upgrading to version 1.10.2
downloading https://github.com/denoland/deno/releases/download/v1.10.2/deno-x86_64-apple-darwin.zip
downloading https://github-releases.githubusercontent.com/133442384/9d463480-b72c-11eb-84bc-408e2fba0ae2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20210521%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210521T020553Z&X-Amz-Expires=300&X-Amz-Signature=86b55c096f987df029970ff36ac18ab7dee5aea2186c4626b490d896cf2968f5&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=133442384&response-content-disposition=attachment%3B%20filename%3Ddeno-x86_64-apple-darwin.zip&response-content-type=application%2Foctet-stream
Archive:  /var/folders/fc/784k2dvx3gvfq5h2p27vxb8m0000gn/T/.tmp8CxFM9/deno.zip
  inflating: deno                    
Upgrade done successfully
mac020:06-module mac020$ deno install --allow-net --allow-read https://deno.land/std@0.97.0/http/file_server.ts
Check https://deno.land/std@0.97.0/http/file_server.ts
✅ Successfully installed file_server
/Users/mac020/.deno/bin/file_server
mac020:06-module mac020$ file_server .
HTTP server listening on http://0.0.0.0:4507/
[2021-05-21 02:07:07] "GET / HTTP/1.1" 200
No such file or directory (os error 2)
[2021-05-21 02:07:07] "GET /favicon.ico HTTP/1.1" 404
[2021-05-21 02:07:12] "GET /01-hello/ HTTP/1.1" 200
[2021-05-21 02:07:13] "GET /01-hello/hello.html HTTP/1.1" 200
[2021-05-21 02:07:13] "GET /01-hello/hello.js HTTP/1.1" 200
```