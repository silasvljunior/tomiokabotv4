const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Você já está registrado✅`
  if (!Reg.test(text)) throw `Para se registrar é assim:\n*${usedPrefix + command} nome.idate*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'só letras'
  if (!age) throw 'só numeros'
  age = parseInt(age)
  if (age > 30) throw 'um adultero kk'
  if (age < 5) throw 'Uma criança'-''
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *Sucesso ao registrar* 」━━━━

╭─• 〘 INFORMAÇÕES 〙
│➥ Nome: ${name}
│➥ Idade: ${age} anos
│➥ Premium: ${prems.includes(who.split`@`[0]) ? '✅ Você é um usuário premium' : '❌ Você não é um usuário premium'}
╰──────•

Tipo ${usedPrefix}sn para obter o NÚMERO DE SÉRIE
`.trim())
}
handler.help = ['registrar'].map(v => v + ' <nome>.<idade>')
handler.tags = ['main']

handler.command = /^(registrar?)$/i

module.exports = handler
