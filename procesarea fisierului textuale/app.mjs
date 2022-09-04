import {readdir, readFile} from 'node:fs'

//  conectam modulul pentru operare cu sistemul de fisiere
//const fs = require("fs")


// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = []
const emails = []


function loadContactsList(){
    //1. scan user list.txt
    readdir('contact list', (err, files) => {
        if(!err) {
            readFile(`contact list/${files}`, (err, content) => {
                if(!err) {
                     //1.1 parse the data
                    let fragments = content.toString().split('\r\n')
                    let phones = fragments
                    let emails = fragments
                    console.log(`${phones} ${emails}`)
                   
                   
                    
                    
                }
            })
        }
           
           
    }) 

}



export {loadContactsList}
