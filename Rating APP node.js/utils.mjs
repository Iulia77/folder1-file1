
import {readdir, readFile} from 'node:fs'

const showUsers = () => {
 //1. Scan 'users' folder
 readdir('users', (err, fileNames)=>{
     if(!err){
        console.log('USERS:')
        //2. loop through each file
        fileNames.forEach((fileName)=>{
              //console.log(fileName)
              //3. read file
              readFile(`users/${fileName}`, (err, content) => {
                if(!err){
                    //console.log(content.toString())
                    let fragments = content.toString().split('\n')
                    let name = fragments[0]
                    let rate = parseFloat(fragments[1])
                    console.log(`  ${name} (${rate})`)           // na etom etape nepravilino vidaet rating
                }
                
              })
        })
     }
     
 })
 
 
 
}

export {showUsers}
