

// const title = document.getElementById('main-heading');
// console.log(title);

// const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

// const tagItem = document.getElementsByTagName('li');
// console.log(tagItem);

// const container = document.querySelector('div');
// console.log(container);

// const containers = document.querySelectorAll('div');
// console.log(containers);

// const title = document.querySelector('#main-heading');

// title.style.color = 'red';
// console.log(title);

//********** Styling element***********

// const listItem = document.querySelectorAll('.list-item');

// for(i = 0 ; i< listItem.length ; i++){
//     listItem[i].style.fontSize ='3rem';
// }

//************  creating element ****** 

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);

// // const firstListItem =  document.querySelector('.list-item');
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);

// li.innerText = 'X-men';
// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// li.classList.remove('list-item')

// console.log(li.classList.contains("list-items"));

// li.remove();

//******* Parent Node ******* 

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentElement);
// console.log(html.parentNode);

//let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.nextSibling);
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// ul.childNodes[1].style.backgroundColor ='blue';

//*********** index1.html ************ 
 const buttonTwo = document.querySelector('.btn-2');

 function alertBtn()
 {
    alert('I love Box 2');
 }

 buttonTwo.addEventListener("click" , alertBtn);

 const buttonThree = document.querySelector('.btn-3');

 function changeBgColor()
 {
    buttonThree.style.backgroundColor = 'blue';
 };

 buttonThree.addEventListener("mouseover" , changeBgColor);

