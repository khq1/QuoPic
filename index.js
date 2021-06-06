Jan Warzecha <panjanwarzecha@gmail.com>
	
15:06 (21 minut temu)
	
do mnie
<!DOCTYPE html>
<html>
    
<meta>
<script  src= 
type='text/javascript'
"https://github.com/kripken/speak.js/blob/9c6f642f7d78bab51d16b2e8b79cdf205643ec35/speakClient.js">
   </script>
       
   <script type='text/javascript'  src="https://github.com/kripken/speak.js/blob/9c6f642f7d78bab51d16b2e8b79cdf205643ec35/speakGenerator.js"></script>
   
 <script type='text/javascript'  src="https://github.com/kripken/speak.js/blob/9c6f642f7d78bab51d16b2e8b79cdf205643ec35/speakWorker.js">
    
</script>


</meta>


    <head>
        <title>cafe & clouds</title>
    </head>
    <body>
        <div id="tlo" class="tlo"></div>
        <div id="text_box" class="text_box"></div>
        <div id="audio"></div>
    </body>
</html>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
*{
    background-color:;
}

body {margin:0px;
    height:100vh;
width:100vw;
background-color:black;

}

.tlo{   
height:100vh;
width:100vw;
position:absolute;
background-color:black;
/*background:url("https://picsum.photos/400/600?random=1");*/
background-repeat: no-repeat;
background-size: auto;
color:black;
padding-top:;
font-size:1.5rem;
text-align: center;
text-shadow: 10px 10px 10px black;
text-shadow: 20px 2px 20px white;
padding:
font-family: 'Roboto', sans-serif;
}
.text_box{position:relative ;
    top:55vh;
    height:auto;
width: ;
background-color:;
/*background:url("https://picsum.photos/400/600?random=1");*/
background-repeat: no-repeat;
background-size: auto;
color:white;

font-size:1.5rem;
text-align: center;

padding:0px;
font-family:"roboto", courier,arial,helvetica;"
background:

rgba( 255, 255, 255, 0.25 );
box-shadow:

0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter:

blur( 4px );
-webkit-backdrop-filter:

blur( 4px );
border-radius:

10px;
border:

1px solid rgba( 255, 255, 255, 0.18 );

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
