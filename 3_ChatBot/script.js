const messageInput = document.querySelector(".message-input");
const chatBody =document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = document.querySelector("#file-cancel");

const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

const chatHistory=[];

// from google ai studio
const API_KEY ="AIzaSyDy1qMqWrv7OEdq4sde7KHXpxi6AiQ9qsI";

// from ai for developers google -> functionality -> text generation
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


//message object
const userData={
    message: null,

    //for file
    file:{
        data:null,
        mime_type:null
    }
}
/*
    Handle Enter key press for sending messages
    keydown = every pressing of the keyboard
*/


//flow: addEventListener to send -> addEventLisener to keydown-> handleOutgoingMessage -> createMessageElement


// auxilary function
const createMessageElement = (content,...classes) =>{
    //add the "message" class to the div element
    const div = document.createElement("div");
    div.classList.add("message",...classes);
    //the div element get the struture of the prototype and set it to html
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
    //clear the uploaded image class every time we click the upload button
    //and the content of the file is saved into the object, removing the class will hide the image on the wrapper
    fileUploadWrapper.classList.remove("file-uploaded");

    //trigger manually the event, so it will reset the input textarea height
    messageInput.dispatchEvent(new Event ("input"));
    //create structure

    //if userData.file.data exists -> insert <img> and insert its type and base64 code, otherwise none ""
    const messageContent = `<div class= "message-text"></div>
                            ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,
                            ${userData.file.data}" class = "attachment" />` : ""}`;  
                            //class = attachment -> styling in CSS resizing    
                            //and it has already other classe, like .chat-body .user-message 
                   
    ;
    //it's a outGoingMessage ===== from user
    //add this message to the chatbody, and it has already the class user-message
    //so it will be a user message
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");


    //add the text to the div structure
    //.querySelector(".message-text").textContent = modify the text content 
    //it has already the user-message class, but user-message is the father class of the message-text
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    //aggiungere il messaggio nella lista di flex
    chatBody.appendChild(outgoingMessageDiv);

    //Scroll the viewport to the last message, after every appendChild
    chatBody.scrollTo({top:chatBody.scrollHeight,behavior:"smooth"});


    //for every user message, generate a bot response with the status = thinking
    setTimeout(()=>{
        //const = block level variable
        //create a new message
        const messageContent = `<img src="asset/bot1.png" class="bot-avatar" width="50" height="50">

                <div class="message-text">
                    <div class="thinking-indicator">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        
                    </div>
                </div>`;
        
        //create a thinking message
       const incomingMessageDiv= createMessageElement(messageContent,"bot-message","thinking");
       chatBody.appendChild(incomingMessageDiv);

       //Scroll the viewport to the last message, after every appendChild
       chatBody.scrollTo({top:chatBody.scrollHeight,behavior:"smooth"});


       //generate the response using the Gemini Ai model
       generateBotResponse(incomingMessageDiv);

    },600);
}

/* Textarea
*/
messageInput.addEventListener("keydown",(e)=>{
    /**
     * value = the message
     * trim = trim_start + trim_endb
     */
    const userMessage = e.target.value.trim();
    // && -> and the message is not null
    // && not pressing shift, so it will send only when is not pressed shift + Enter
    // and it's not responsive to the mobile device
    if(e.key === "Enter" && userMessage && !e.shiftKey && window.innerWidth > 768){
        handleOutgoingMessage(e);
    }
});


// dynamically modify the hight using the text height

const innitialInputHeight = messageInput.scrollHeight;

messageInput.addEventListener("input", ()=> {
    // initial the height
    messageInput.style.height =`${innitialInputHeight}px`;

    //uguale to the message height
    messageInput.style.height = `${messageInput.scrollHeight}px`;

    //the more tall is the input textarea, more radius it is
    document.querySelector(".chat-form").style.borderRadius =
         messageInput.scrollHeight > innitialInputHeight ? "15px" : "32px"
});


sendMessageButton.addEventListener("click",(e)=> handleOutgoingMessage(e));



//generate the response using fetch + async
const generateBotResponse = async (incomingMessageDiv) =>{
    //get the user message selecting the child element from parent element
    //because user-message = parent, message-text = child element
    const messageElement = incomingMessageDiv.querySelector(".message-text");

    //save this message in the history list
    chatHistory.push(
        {
            role:"user",    
            parts:[
                //text message
                {text:userData.message},
                //file contenet , follows the standard of GEMINI
                //if the file exists: -> create a list, and using ... it can be elapsed by parts

                // true = [{inline_data: userData.file}]
                // false = [] empty array
                ...(userData.file.data ?[{inline_data: userData.file}]:[]
                )
            ]
        }
    );

    //the request format = https://ai.google.dev/gemini-api/docs/text-generation?lang=rest
    const requesOptions = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            contents: chatHistory
        })

    }
    try{
        const response = await fetch(API_URL,requesOptions);
        const data = await response.json();
        if(!response.ok) throw new Error(data.erro.message);

        //data = response in JSON format, candidates[0]... 
        //view the output log to identify the correct format/structure

        //Extract and display bot's response text
        // Optional
        // .replace(/\*\*(.*?)\*\*/g,"$1") searches a string for text enclosed in double asterisks (**) 
        // and replaces each match with the text inside the asterisks
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
        //test the output (response) in log       console.log(data);

        //put the response text into the HTML elmenet: to display it
        messageElement.innerText = apiResponseText;


        //Add bot response to chat history
        chatHistory.push({
            role:"model",
            parts:[{text: apiResponseText}]
        });
    } catch (error){
        console.log(error);
        //if the KPI KEY is not correct or the server is down

        //susbstitute the response with the error message
        messageElement.innerText = error.message;
        messageElement.style.color = "#ff0000";

    } finally {
        userData.file = {};
        //remove the class of the thinking class, because
        //the message passed to AI and return contains always the thinking class
        incomingMessageDiv.classList.remove("thinking");

        //Scroll the viewport to the last message, after every appendChild
        chatBody.scrollTo({top:chatBody.scrollHeight,behavior:"smooth"});
    }
     
}


//add the upload event to the button: if button clicked -> fileInput.click()
document.querySelector("#file-upload").addEventListener("click",() => fileInput.click());


//file input reader and transformer
fileInput.addEventListener("change", ()=>{
    const file = fileInput.files[0];
    if(!file) return;

    //convert the file into base64 format (required by Gemini)
    const reader = new FileReader();
    reader.onload = (e) =>{

        //preview the uploaded image, giving the code of the image as resource
        fileUploadWrapper.querySelector("img").src = e.target.result;
        //new class for stylingF
        fileUploadWrapper.classList.add("file-uploaded");

        //[  "data:image/png;base64","iVBORw0KGgoAAAANSUhEUg..."]  0= datatype , 1 = base64String
        //  e.target.result typically contains the data URL of the file that was read.
        const base64String = e.target.result.split(",")[1];

        //store file data in userdata
        userData.file = {
            data: base64String,
            mime_type: file.type
        }
        //clear the file input from the variable, it is already saved into the object
        fileInput.value="";
    }

    reader.readAsDataURL(file);
});

fileCancelButton.addEventListener("click",()=>{
    //remove the content of the file in object
    userData.file = {};

    //remove the class to avoid the restyling
    fileUploadWrapper.classList.remove("file-uploaded");
});



//initialize the emoji picker
const picker = new EmojiMart.Picker({
    //properties from the homepage
    theme:"light",
    skinTonePosition:"none",
    previewPositioni:"none",

    onEmojiSelect: (emoji) =>{
        //create a new object decomposing from the messageInput
        //
        // 1. If selected a part of string of the messageInput
        // start, end = start and end of the message
        const {selectionStart: start, selectionEnd:end} = messageInput;

        // 2. Set the emoji into the selected range of the string (substitute)
        // 2.1 if no start is selected -> for default select the end, end inserting
        messageInput.setRangeText(emoji.native,start, end, "end");

        //keep focus of the cursor in this position
        messageInput.focus(); 
    },
    
    // on click action
    onClickOutside:(e) => {
        if(e.target.id === "emoji-picker"){
            /** toggle = if not added -> add */
            document.body.classList.toggle("show-emoji-picker");
        } else{
            document.body.classList.remove("show-emoji-picker");
        }
    }
});

//added the new picker to the structure = not hidden
document.querySelector(".chat-form").appendChild(picker);


//add the chatbot class to the body
chatbotToggler.addEventListener("click",()=>document.body.classList.toggle(
    "show-chatbot"
));


//close chatbot button
closeChatbot.addEventListener("click",()=> document.body.classList.remove("show-chatbot"));