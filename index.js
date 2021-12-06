window.onload = getimageandtext;


function getimageandtext() { //get quotes
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "text_box"
      ).innerHTML = `<p>${data.content}<br><br><i>${data.author}</p>`;
      console.log(JSON.parse(JSON.stringify(data)))


      var msg = new SpeechSynthesisUtterance(); //define speech
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10]; // Note: some voices don't support altering params
      msg.voiceURI = "Google EN English";
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0.6; //0 to 2
      msg.text = `${data.content} ${data.author}`;
      msg.lang = "en-EN";



      
      function getBGimage() {
        var random = Math.floor(Math.random() * 9999); //get random number

        const string1 = "https://picsum.photos/";
        var imageheight = window.innerHeight;
        const string2 = "/";
        var imagewidth = window.innerWidth;
        const string3 = "?random=";

        var LinktoRandomApi =
          string1 + imagewidth + string2 + imageheight + string3 + random; //custom link

        document.getElementById("background").style.background =
          "url(" + LinktoRandomApi + ")";
      }//get background image with custom link
         getBGimage();
      
      document.addEventListener("click", speechSynthesis.speak(msg)); //speak Quotes
    });
}

document.addEventListener("click", getimageandtext);
 

