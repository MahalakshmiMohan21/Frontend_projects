function convertToSignLanguage() {
    let inputText = document.getElementById("textInput").value.toLowerCase();
    let outputDiv = document.getElementById("output");
    
    outputDiv.innerHTML = ""; 
    
    for (let char of inputText) {
        if (char >= 'a' && char <= 'z') {
            let img = document.createElement("img");
            img.src = `images/${char}.jpg`;  
            img.alt = char;
            outputDiv.appendChild(img);
        } else if (char === " ") {
            let spaceElement = document.createElement("div");
            spaceElement.classList.add("space");  
            spaceElement.innerHTML = "&nbsp;";
            outputDiv.appendChild(spaceElement);
        }
    }
}


function speakText() {
    let text = document.getElementById("textInput").value;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";  
    speech.rate = 1; 
    window.speechSynthesis.speak(speech);
}
