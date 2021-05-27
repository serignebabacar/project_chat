'use strict'
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Chat', {useNewUrlParser: true})
// eslint-disable-next-line new-cap
let objetMessage = mongoose.Schema({
    contenu : String,
    date : Date
})
let Message = mongoose.model('Message', objetMessage)
class ObjetMessage {
    static getContent(cb) {
        Message.find((err, objets) => {
            if (err) {
                console.error(err)
                return
            }
            cb(objets)
        })
    }
    static create(contenu,date, cb) {
        let message = new Message()
        message.contenu = contenu
        message.date = date
        message.save((err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }
    static delete(id, cb) {
        Message.deleteOne({_id: id}, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }
    static find(id, cb) {
        Message.findOne({_id: id}, (err, message) => {
            if (err) {
                console.error(err)
                return
            }
            cb(message)
        })
    }
}
module.exports = ObjetMessage
