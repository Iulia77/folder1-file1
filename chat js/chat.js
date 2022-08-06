const chatWindow = document.getElementById('chat')
const chatSendBtn = document.getElementsByTagName("button")[1];
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
let messages = []

function initChat() {
    let chatHidden = !!localStorage.getItem('chatHidden')
    if(!chatHidden) {
        openChat()
    }
    chatSendBtn.addEventListener('click', runEvent)

} 

function runEvent(e) {
    e.preventDefault()
    let message = {
        content: itemInput.value
    }
    messages.push(message)
    itemInput.value = ''
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







  

    
