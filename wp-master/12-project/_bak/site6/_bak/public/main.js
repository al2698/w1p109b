import * as fe6 from '../../../fe6/fe6.js'
import * as md6 from '../../../md6/md6.js'

function path2html(path) {
  if (!path.startsWith('/')) return path
  const dpath = decodeURIComponent(path)
  const parts = dpath.split('/')
  const len = parts.length
  const links = [`<a href="#/">Root</a>`]
  const pStack = []
  for (let i = 1; i < len; i++) {
    pStack.push(parts[i])
    links.push(`<a href="#/${pStack.join('/')}/">${parts[i]}</a>`)
  }
  return links.join(' / ')
}

fe6.on('load', async ()=> {
  console.log('onload')
  fe6.route(/#(.*)/, async function(m) {
    let path=m[1]
    fe6.one('#header').innerHTML = path2html(path)
    console.log('path=', path)
    let html = ''
    if (path.endsWith('.md')) {
      let r = await fetch(path)
      let text = await r.text()
      html = md6.toHtml(text)
    } else if (path.endsWith('/')) {
      let r = await fetch(`${path}meta.json`)
      let meta = await r.json()
      console.log('meta=', meta)
      let rows = []
      for (let entry of meta.entries) {
        let name = entry.name
        if (entry.isDirectory) name += '/'
        rows.push(`<tr><td><a href="#${path}${name}">${name}</a></td></tr>`)
      }
      html = `<table><tr><th>File</th></tr>${rows.join('\n')}</table>`
    } else {
      let r = await fetch(path)
      let text = await r.text()
      html = `<pre>${fe6.escape(text)}</pre>`
    }
    let node = fe6.one('#main')
    // MathJax 參考 -- http://docs.mathjax.org/en/latest/web/typeset.html
    MathJax.typesetClear([node])
    node.innerHTML = html
    MathJax.typesetPromise([node]).then(() => {});
  })
  fe6.start(fe6.hash())
})
