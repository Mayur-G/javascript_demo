var element = document.getElementById('h1');

console.log('element : ',element);
console.log(element.getAttribute('class'));
console.log(element.getAttribute('id'));
console.log(element.getAttribute('style'));
console.log(element.getAttribute('contenteditable'));
console.log(element.setAttribute('id','hh1'));
console.log('element : ',element);

var h1Element = document.getElementById('h2');
console.log('h1Element : ',h1Element);
console.log('contenteditable : ',h1Element.getAttribute('contenteditable'));

var mainElement = document.getElementById('main');
console.log('mainElement : ',mainElement);
console.log('mainElement has : ',mainElement.hasAttribute('id'));
console.log('mainElement get : ',mainElement.getAttribute('id'));


let text1 = document.getElementById("myP").innerText;

let text2 = document.getElementById("myP").innerHTML;

let text3 = document.getElementById("myP").textContent;
console.log('innerText   : '+text1);
console.log('innerHTML   : '+text2);
console.log('textContent : '+text3);


function getinnerText() {
    let text = document.getElementById("myP").innerText;
    document.getElementById("demo").innerText = text;
  }
  
  function getinnerHTML() {
    let text = document.getElementById("myP").innerHTML;
    document.getElementById("demo").innerText = text;
  }
  
  function gettextContent() {
    let text = document.getElementById("myP").textContent;
    document.getElementById("demo").innerText = text;
  }