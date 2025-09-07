document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotIcon = document.getElementById("chatbot-icon");

    // Open chatbot
    chatbotIcon.addEventListener("click", function () {
        chatbotContainer.classList.remove("hidden");
        chatbotIcon.style.display = "none"; 
    });

    // Close chatbot
    closeBtn.addEventListener("click", function () {
        chatbotContainer.classList.add("hidden");
        chatbotIcon.style.display = "flex";
    });

    // Send button click
    sendBtn.addEventListener("click", sendMessage);

    // Enter key press
    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Send message function 
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            appendMessage("user", userMessage);
            chatbotInput.value = "";
            getBotResponse(userMessage);
        }
    }

    // Append message to chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        setTimeout(() => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 0);
    }

    // Get bot response ////`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    async function getBotResponse(userMessage) {
        const API_KEY = "AIzaSyDII5u18GhYhfLtWzkKWXsXSvznORZzZRo";
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
        try {
            const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents:[
                    {
                        parts:[{ text: userMessage }],
                    },
                ],
            }),
        });
        const data = await response.json(); 
        if (!data.candidates || !data.candidates.length){
            throw new Error("No response from gemini API");

        }
        const botMessage = data.candidates[0].content.parts[0].text;
        appendMessage("bot",botMessage);
    }
    catch(error){
        console.error("Error:",error);
        appendMessage(
            "bot",
            "sorry, I'm having trouble responding."
        );
    }
}

})