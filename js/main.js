// Descrizione:
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue({
    el: "#container",
    data: {
        email: "antoniopiazza18@gmail.com",
    }
})