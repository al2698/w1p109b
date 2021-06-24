

```
mac020:10-file mac020$ deno run --allow-read --allow-write --unstable copy1.ts
Compile file:///Users/mac020/Desktop/ccc/wp/code/04-node/10-file/copy1.ts
error: TS2345 [ERROR]: Argument of type '{ type: string; }' is not assignable to parameter of type 'string'.
    await Deno.symlink(originSrcFilePath, dest, {
                                                
    at https://deno.land/std/fs/copy.ts:117:49

TS2345 [ERROR]: Argument of type '{ type: string; }' is not assignable to parameter of type 'string'.
    Deno.symlinkSync(originSrcFilePath, dest, {
                                              
    at https://deno.land/std/fs/copy.ts:141:47

TS2345 [ERROR]: Argument of type '{ type: string; }' is not assignable to parameter of type 'string'.
    await Deno.symlink(src, dest, {
                                  
    at https://deno.land/std/fs/ensure_symlink.ts:33:35

TS2345 [ERROR]: Argument of type '{ type: string; }' is not assignable to parameter of type 'string'.
    Deno.symlinkSync(src, dest, {
                                
    at https://deno.land/std/fs/ensure_symlink.ts:65:33

Found 4 errors.
```
