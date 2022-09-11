// io

const getNumbers = (cb, size = 10) => {
    let numbers = []
    setTimeout(()=>{
        while(numbers.length<size) {
            //HW2: setInterval()
            numbers.push(Math.ceil(-5 + Math.random()*10))
        }
        cb(numbers)

    }, Math.random() *3000)
    
}

//process

const maxNumber = (cb, numbers) => {
    let maxNumber = numbers[0]
    setTimeout(()=>{
        for(let i =0; i<numbers.length; i++){
            if(numbers[i]>maxNumber) {
             maxNumber = numbers[i]
            }
        }
        cb(maxNumber)

    }, Math.random()*3000)
    
}


const renderNumber = (number) => {
      console.log(">>>", number)
}

//render
getNumbers((numbers)=>{
    maxNumber(renderNumber, numbers)
})
