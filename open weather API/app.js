const loadData = (cb) => {
    let xhr = new XMLHttpRequest()

xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=584b8abd2b6e9eb629675da9b306e5d3")

xhr.send()


xhr.onload = () => {

    let data = JSON.parse(xhr.responseText)
    //console.log(">>", data.main.temp)  // JSON string --> JS
    cb(data)
}

}

const render = (data) => {
   console.log(data)
}

const element = document.getElementById("addForm");
element.addEventListener("click", submitForm());
function submitForm() {
    
}
