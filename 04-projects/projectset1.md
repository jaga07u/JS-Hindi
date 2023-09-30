# projects related to DOM

#project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

solution code 

## project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; //grey
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; //grey
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; //grey
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; //grey
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id; //grey
    }
  });
});
```
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Project2

project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-2iqkhm?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)


 solution

```javascript
const form = document.querySelector('form');
//this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}<span><br>
      Under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi}<span><br>
      Normal Weight`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}<span><br>
      Over Weight`;
    }
  }
});

```
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# project-3

 solution [click here]()

 ```javascript

 const clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
 ```


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++















 # project-4

 solution [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-j8onhh?file=6-unlimitedColors%2Findex.html,6-unlimitedColors%2Fchaiaurcode.js)
 ```javascript
 const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//console.log(Math.floor(Math.random() * 16));
//console.log(randomColor());
// const startChangingColor = function () {
//   document.body.style.backgroundColor = randomColor();
// };
let stop;
document.querySelector('#start').addEventListener('click', function () {
  if (!stop) {
    //const body = document.querySelector('body');
    stop = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(stop);
  stop = null;
});

 ```

 # Project -5

 solution [click here](https://stackblitz.com/edit/dom-project-chaiaurcode-j8onhh?file=5-keyboard%2Findex.html,5-keyboard%2Fchaiaurcode.js)

 ``` javascript
 console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
       <div class='color'>
       <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

       </div>
       
       `;
});

 ```