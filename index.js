window.onload = getimageandtext;
function getimageandtext() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "text_box"
      ).innerHTML = `<p>${data.content} <br><br><i>${data.author}</p>`;
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10]; // Note: some voices don't support altering params
      msg.voiceURI = "native";
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 0.5; //0 to 2
      msg.text = `${data.content} ${data.author}`;
      msg.lang = "en-EN";

      msg.onend = function (e) {
        console.log("Finished in " + event.elapsedTime + " seconds.");
      };

      var linktest = "https://picsum.photos/360/550?random=1";
      var random = Math.floor(Math.random() * 9999);
      const string1 = "https://picsum.photos/";
      var imageheight = window.innerHeight;
      var string2 = "/";
      var imagewidth = window.innerWidth;
      const string3 = "?random=";
      linktorandomIMGapi =
        string1 + imagewidth + string2 + imageheight + string3 + random;
      document.getElementById("background").style.background =
        "url(" + linktorandomIMGapi + ")";
document.addEventListener("click", speechSynthesis.speak(msg));
      console.log(random);
      console.log(linktorandomIMGapi);
      console.log(linktest);
    });
}
document.addEventListener("click", getimageandtext);
