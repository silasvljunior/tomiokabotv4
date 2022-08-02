const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'marque uma Midia!'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`©TomiokaBotMd\n\n${link}
${media.length} Byte(s)
${isTele ? '(Sem data de expiração)' : '(Não conhecido)'}`)
}
handler.help = ['tourl <comente>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i

module.exports = handler
