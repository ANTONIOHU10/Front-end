const messageInput = document.querySelector(".message-input");
const chatBody =document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");

//message object
const userData={
    message: null
}
/*
    Handle Enter key press for sending messages
    keydown = every pressing of the keyboard
*/


//flow: addEventListener to send -> addEventLisener to keydown-> handleOutgoingMessage -> createMessageElement


// auxilary function
const createMessageElement = (content,classes) =>{
    //add the "message" class to the div element
    const div = document.createElement("div");
    div.classList.add("message",classes);
    //the div element get the content string and set it to html
    div.innerHTML = content;
    return div;
}

const handleOutgoingMessage = (e) =>{
    e.preventDefault();

    //using the userData object to store the texarea value
    //!important : messageInput.value = the text information we typed
    userData.message = messageInput.value.trim();
    //clear the texarea after assignment to the object
    messageInput.value ="";
    //create structure
    const messageContent = `<div class="message-text"></div>`;
    //it's a outGoingMessage ===== from user
    //add this message to the chatbody, and it has already the class user-message
    //so it will be a user message
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");


    //add the text to the div structure
    //.querySelector(".message-text").textContent = modify the text content 
    //it has already the user-message class, but user-message is the father class of the message-text
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
}

messageInput.addEventListener("keydown",(e)=>{
    /**
     * value = the message
     * trim = trim_start + trim_endb
     */
    const userMessage = e.target.value.trim();
    // && -> and the message is not null
    if(e.key === "Enter" && userMessage){
        handleOutgoingMessage(e);
    }
});

sendMessageButton.addEventListener("click",(e)=> handleOutgoingMessage(e));

