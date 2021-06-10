window.onload = getimageandtext
function getimageandtext(){fetch ('https://api.quotable.io/random') .then(response => response.json()) 
.then( data =>{ 
document.getElementById("text_box").innerHTML = `${data.content} <br><br>${data.author}`

var linktest = "https://picsum.photos/360/550?random=1";
var random = Math.floor(Math.random() *9999);
const string1 = "https://picsum.photos/";
var imageheight   = window.innerHeight;
var string2 = "/";
var imagewidth   = window.innerWidth;
const string3 = "?random=";
linktorandomIMGapi = string1+imagewidth+string2+imageheight+string3+random; document.getElementById("tlo").style.background = 
"url("+linktorandomIMGapi+")"; 

console.log(random)
console.log(linktorandomIMGapi)
console.log(linktest)
speak('hello world!')

});
}

document.addEventListener("click",getimageandtext);