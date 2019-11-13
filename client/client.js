console.log('Hello world!');

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loader');
const API_URL='http://localhost:5000/mews';

loadingElement.style.display='none';

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  //try to get the data put in by the user
 const formData = new FormData(form);
 const name = formData.get('name');
 const content = formData.get('content');

 const mew = {
   name,content
 };
 console.log(mew);
 form.style.display='none';
 loadingElement.style.display=''
fetch(API_URL, {
  method:'POST',
  body:JSON.stringify(mew),
  headers:{
    'content-type':'application/json'
  }
}).then(response=>response.json())
  .then(createdMew=>{
    console.log(createdMew);
  });
});
