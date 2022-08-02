const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 DOAÇÃO 」 ──────*

Olá 👋
Vocês podem me apoiar para manter este bot atualizado com:
┌〔 Doação 〕
├Pix 6655609b-acdd-4798-a23c-8cc5c078aefc
└────
Qualquer valor da sua doação significará muito 👍

Arigatou!

Ou fale com o Dono!:
wa.me/5544997433716 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/Fgsf7zb/Whats-App-Image-2022-04-14-at-23-35-18.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💰 Paypal',
               url: 'https://www.paypal.com/donate/?business=BBPQSM8AY9HEJ&no_recurring=0&item_name=Doar+para+ajudar+na+produ%C3%A7%C3%A3o+e+tradu%C3%A7%C3%A3o+do+Bot+de+WhatsApp&currency_code=USD'
             }

           },
               {
             callButton: {
               displayText: 'Telefone do Dono',
               phoneNumber: '+55 44 99743-3716'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Dono',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(doar)$/i

module.exports = handler
