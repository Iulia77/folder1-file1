const chatWindow = document.getElementById('chat')


function initChat() {
    let chatHidden = !!localStorage.getItem('chatHidden')
    if(!chatHidden) {
        openChat()
    }

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


var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('input', runEvent);
function runEvent(e) {
    console.log('message send' +e.type);
}

