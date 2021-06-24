import * as fe6 from '../../fe6/fe6.js.js'
import * as md6 from '../../md6/md6.js.js'

function path2html(path) {
  if (!path.startsWith('/')) return path
  const dpath = decodeURIComponent(path)
  const parts = dpath.split('/')
  const len = parts.length
  const links = [`<a href="#/">Root</a>`]
  const pStack = []
  for (let i = 1; i < len; i++) {
    pStack.push(parts[i])
    links.push(`<a href="#/${pStack.join('/')}">${parts[i]}</a>`)
  }
  return links.join(' / ')
}

fe6.on('load', async ()=> {
  console.log('onload')
  fe6.route(/#(.*)/, async function(m) {
    let path=m[1]
    console.log('path=', path)
    fe6.one('#header').innerHTML = path2html(path)
    let r = await fetch(path)
    let type = r.headers.get("Content-Type")
    console.log('r=', r)
    console.log('type=', type)
    var html = ''
    if (type.indexOf('markdown')>=0) {
      let text = await r.text()
      html = md6.toHtml(text)
    } else if (type.indexOf('json')>=0) {
      var fList = await r.json()
      console.log('fList=', fList)
      var rows = []
      for (let f of fList) {
        var name = f.isDirectory ? f.name+'/' : f.name 
        rows.push(`<tr><td><a href="#${path}${name}">${name}</a></td></tr>`)
      }
      html = `<table><tr><th>File</th></tr>${rows.join('\n')}</table>`
    } else {
      let text = await r.text()
      html = `<pre>${fe6.escape(text)}</pre>`
    }
    var node = fe6.one('#main')
    // MathJax 參考 -- http://docs.mathjax.org/en/latest/web/typeset.html
    MathJax.typesetClear([node])
    node.innerHTML = html
    MathJax.typesetPromise([node]).then(() => {});
  })
  fe6.start('#/')
})
