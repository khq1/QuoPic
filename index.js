
window.onload = getimageandtext


function getimageandtext(){fetch ('https://api.quotable.io/random') .then(response => response.json())
.then( data =>{
document.getElementById("text_box").innerHTML = `${data.content} <br><br>${data.author}`

var linktest = "https://picsum.photos/400/600?random=1";
var random = Math.floor(Math.random() *9999);
const string1 = "https://picsum.photos/";
var imageheight = document.body.clientHeight;
var string2 = "/";
var imagewidth = document.body.clientWidth;
const string3 = "?random=";
linktorandomIMGapi = string1+imageheight+string2+imagewidth+string3+random; document.getElementById("tlo").style.background = 
"url("+linktorandomIMGapi+")";

console.log(random)
console.log(linktorandomIMGapi)
console.log(linktest)
speak('hello world!')
});
}

document.addEventListener("click",getimageandtext);
