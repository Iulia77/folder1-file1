// this is the main app module

//global module
import * as readline from 'node:readline'
import {stdin as input, stdout as output} from 'node:process'


// custom module /local
import {data_week} from './data.mjs'
import {type} from 'node:os'

const io = readline.createInterface({input, output})

//io.on('line', )


io.question('Choose the day (1..7):',day_number => {
    //console.log(day_number, typeof day_number)

    //HW1: what if the user inputs the day name? ("Monday", 'Tuesday')
    //HW2: what if the user inputs a range ---> 1..3, "Monday"..'Tuesday'

    //hint1: use the data type check
    // hint2: use String processing

 



   //find algo
    data_week.forEach((day, index) => {
     if(index +1 == +day_number) {
        console.log(`[${day.date}]: ${day.temp}`)
     }
    
     });

    io.close()
})



// interaction



