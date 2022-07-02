
function like(){
    alert("like")
} 

let allpost=[];
let nameinput=[];

function submitBtn(){
let textarea = document.getElementById("postText");
let main =document.getElementById("main")
let nameid =document.getElementById("nameid")


allpost.unshift(textarea.value);
nameinput.unshift(nameid.value);
(nameid.value);
main.innerHTML="";

for (var i=0; i < allpost.length; i++)

main.innerHTML +=`

<p>${allpost[i]}</p>

`;
textarea.value="";
nameid.value="";

main.innerHTML +=`

<p>${nameinput}</p>
<img src="./img/iphone12.png" >
<div>
<button onclick="like()">like</button>
   </div>  

`;

}
