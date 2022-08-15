const chatWindow = document.getElementById('chat')
const chatSendBtn = document.getElementsByTagName("button")[1];
//HW3:try to find the input descending through the hierachy
const itemInput = chatWindow.children[2].firstElementChild.firstElementChild
//const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
//HW 4:
const chatBody = chatWindow.children[1]
//const chatBody = document.querySelector('#chat .chat-body')

let messages = []

function initChat() {
    let chatHidden = !!localStorage.getItem('chatHidden')
    if(!chatHidden) {
        openChat()
    }
    chatSendBtn.addEventListener('click', runEvent)

    let message_json = localStorage.getItem('messages')
    if(message_json != null) {
        messages = JSON.parse(message_json)
    }
    renderMessages()

} 

function runEvent(e) {
    e.preventDefault()
    
    let message = {
        content: itemInput.value,
        //HW: add property which contain a date
        // hint: Date()
        //when the messages are rendered show hours hh:mm:ss   
    };
  
    
    
    messages.push(message)
    itemInput.value = ''

    
    renderMessages()
    savaMessages()
}

function savaMessages() {
    localStorage.setItem('messages', JSON.stringify(messages))
}

function renderMessages() {
    let html = `<ul>`
    //HW: rewrite loop code using Array.forEach()
    
     messages.slice(0,6).forEach((message, i=0) => {
         
     html += `<li>${messages[i].content}</li>`;
     
     
     });
    
    //for(i=Math.max(messages.length - 6,0)); let  i<messages.length; i++) {
        //html += `<li>${messages[i].content}</li>`
    //}
    html += `</ul>`
    chatBody.innerHTML = html
}




function openChat() {
    chatWindow.classList.remove('hidden')
    localStorage.removeItem('chatHidden')
}

function closeChat() {
    chatWindow.classList.add('hidden')
    localStorage.setItem('chatHidden', true)
}

//HW2: create a function  which should be fired when the user click the button,
// or hits ENTER key on input.
//the function should read the input value and add it to the end of an array called "messages".







  

    







  

    
