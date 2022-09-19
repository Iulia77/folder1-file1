//1. Solution
// Using a bidemensial array 100 x 100 (raster image)

let paper = document.querySelector('#paper')
let colorpicker = document.querySelector('#colorpicker')


colorpicker.addEventListener('change', (e) =>{
    console.log(e.target.value)
})

paper.addEventListener('mousemove', (e)=>{
    if(e.buttons === 1) {
        
        let y = Math.floor(e.clientY / 5) 
        let x = Math.floor(e.clientX / 5) 

        pixels[y][x].color = "red"
        pixels[y][x].needsUpdate = true 
        renderImage(pixels, true)
    }
   
})

//HW3: add image dimension as parameters
const createImage = () => {
let image =[]    //Array

for(let y=0; y<50; y++) {

    let row = []
    for(let x=0; x<50; x++) {
        row.push({color: "#00000000", needsUpdate: true})
    }
    image.push(row)
}
return image
}

const renderImage = (image, update = false) => {
    let wrapper = undefined
    if(!update){
        paper.innerHTML = ""
        //groups all 10000 divs
        wrapper = document.createElement('div')
    }
    
    for(let y=0; y<50; y++) {
        for(let x=0; x<50; x++) {

            //Optimization2:
            // update only the affected div

            if(image[y][x].needsUpdate) {

           if(update){
              let div = document.getElementById(`p-${y}-${x}`)
              div.style.backgroundColor = pixels[y][x].color
           } else {
            let div = document.createElement('div')
            div.id = `p-${y}-${x}`
            div.classList.add('point')
            //HW1: name 3 more methods of .classList
            //add(), remove(), replace().

            //HW2: cons/pros .className vs .classList
            //  using "classList" we can add or remove a class without affecting any 
            //other classes. If we use "className" it will wipe out all of them.

            div.style.backgroundColor = pixels[y][x].color

            //Optimization1:
            

            wrapper.appendChild(div)

            image[y][x].needsUpdate = false

           }
           
            
          }

        }
        
    }  
    if(!update){
        paper.appendChild(wrapper)
    }

}

/////////////////////////////////////////////

let pixels = createImage()



renderImage(pixels)


