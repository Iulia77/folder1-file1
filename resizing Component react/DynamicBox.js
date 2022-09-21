
import React from 'react'
import './DynamicBox.css'


let itemOne = document.getElementById('box')
let itemTwo = document.getElementById('box')
let div = document.getElementById('box')

function DynamicBox() {

  function increaseWidth(){

    itemOne.style.width = '120px'
    itemOne.onClick('click', increaseWidth)
  }
  function decreaseWidth(){

    itemTwo.style.width = '100px'
    itemTwo.onClick('click', decreaseWidth)
  }
  function colorValue() {
    return Math.floor(Math.random()*256)
  }
  function colorChange(event){
    let randomColor='rgb('+colorValue()+','+colorValue()+','+colorValue()+')';
    event.target.style.backgroundColor=randomColor;

  }
  div.addEventListener('click',colorChange);


  return (
   <div id="box">
    

     <button id="button-1" onClick={decreaseWidth}>-</button>
    
     <button id="button-2" onClick={increaseWidth}>+</button>

     <input id="colorpicker" type="color" onClick={colorChange}></input>
   </div>
  
  );
 

}

export default DynamicBox;
