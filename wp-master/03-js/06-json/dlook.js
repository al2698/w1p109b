var e2c = { dog: '狗', cat: '貓', a: '一隻', chase: '追', eat: '吃' };

function look (e) {
  return e2c[e]
}

console.log('args=', Deno.args)
let e = Deno.args[0] // 從 process.argv 這個陣列取出第二個元素
let c = look(e)
console.log(e + '=' + c)
