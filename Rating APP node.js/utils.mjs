// working with files & directories
import {readdir, readFile, writeFile} from 'node:fs'


//working from input/output from console
import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'

const io = readline.createInterface({input,output})

const showUsers = () => {
 //1. Scan 'users' folder
console.clear()
 readdir('users', (err, fileNames)=>{
        if (!err) {
          console.log('USERS:')
          // 2. Loop through each file
          fileNames.forEach((fileName)=>{
                   //console.log(fileName)
             //3. read file
             readFile(`users/${fileName}`, (err, content) => {
                 if (!err) {
                    //console.log(content.toString())
                    //   John\n0.0

                    //3.b parse data
                    let fragments = content.toString().split('\r\n')
                    let name = fragments[0]
                    let rate = parseFloat(fragments[1]) 

                    // 4. show data
                    console.log(`  ${name} (${rate})`)

                  }
             })
          })
        }    

 })
 
}


const addUser = () => {
  console.clear()
  io.question('Enter user name: ', (name) => {

    //-1. find out how many files there are ?
    readdir('users', (err, fileNames) => {
      let nextFileNumber = fileNames.length
      let rate = 0.0
    //0. Stringify data
      let data = `${name}\n${rate}`         
     //1. open and write this name and rate 0.0 into a new file       
     writeFile(`users/${nextFileNumber}.txt`, data, (err) => {
         if(err) {
          console.log('An error occured during saving!')
         }   
         io.close() 

     })
    })

    

    
  })

}



export {showUsers, addUser}
