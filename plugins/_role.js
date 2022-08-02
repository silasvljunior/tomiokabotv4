let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Guerreiro(a) V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Guerreiro(a) IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Guerreiro(a) III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Guerreiro(a) II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Guerreiro(a) I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Elite V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Elite IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Elite III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Elite II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Elite I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Mestre(a) V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Mestre(a) IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Mestre(a) III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Mestre(a) II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Mestre(a) I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grande Mestre(a) V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grande Mestre(a) IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grande Mestre(a) III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grande Mestre(a) II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grande Mestre(a) I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Epico V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Epico IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Epico III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Epico II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Epico I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Lendário(a) V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Lendário(a) IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Lendário(a) III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Lendário(a) II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Lendário(a) I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Mìtico(a) V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Mìtico(a) IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Mìtico(a) III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Mìtico(a) II'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? 'Mìtico(a) I'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? 'Mìtico(a)al glory'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? 'Majin Bu'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? 'Supremo I'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? 'Supremo II'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? 'Supremo III'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? 'Supremo IV'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 400)) ? 'Supremo V'
                                                                                                                                                                        : ((user.level >= 405) && (user.level <= 700)) ? 'Supremo VI'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'deus'
                                                                                                                                                                                : 'o Maior'


    user.role = role
    return true
}

module.exports = handler
