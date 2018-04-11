var newLink = document.createElement("a");

var allParagraphs = document.getElementsByTagName("p");

var firstParagraph = allParagrapgs[0];

function revealCopy(e){
  var allParagraphs=document.getElementsByTagName("p");
for(var i=0; i< allParagraphs.length;i++){
  if(i === 0){
    continue;
  }
  allParagraphs[i].style.display="block";
}

newLink.setAttribute("href","#");

newLink.innerHTML="Read More";

firstParagraph.appendChild(newLink);

newLink.style.display="inline-block";

newLink.style.marginLeft="0.5em";
