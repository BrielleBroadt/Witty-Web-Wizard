<<<<<<< HEAD
var button = document.getElementById("password-button");
var newPassword = document.getElementById("new-password");
var memeEl = document.getElementById("checkbox-meme");
var num = document.getElementById('num');
var char = document.getElementById('char');
var caps = document.getElementById('caps');
=======
const num = true;
const char = true;
const caps = true;
const len = 18; // min 7
const numEl = document.getElementById('num');
const charEl = document.getElementById('char');
const capsEl = document.getElementById('caps');
>>>>>>> a75dc1870a233da2f14753640a77dbcafcf87f1a

// Password API
button.addEventListener('click', function() {
  const fetchUrl = 'https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18';
  var password = "";
  fetch(fetchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      password = (data.data);
      newPassword.textContent = password;
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
})

num.addEventListener('click', function() {
  memeEl.style.display = 'block';
  if (num.checked + char.checked + caps.checked == 1) {
    memeEl.setAttribute("src", './assets/images/it-doesnt-do-anything.jpeg');
  } else if (num.checked + char.checked + caps.checked == 2) {
    memeEl.setAttribute("src", './assets/images/are-you-listening.gif');
  } else if (num.checked + char.checked + caps.checked == 3) {
    memeEl.setAttribute("src", './assets/images/you-have-no-power-here.jpeg');
  } else {
    memeEl.style.display = 'none';
  }
})

char.addEventListener('click', function() {
  memeEl.style.display = 'block';
  if (num.checked + char.checked + caps.checked == 1) {
    memeEl.setAttribute("src", './assets/images/it-doesnt-do-anything.jpeg');
  } else if (num.checked + char.checked + caps.checked == 2) {
    memeEl.setAttribute("src", './assets/images/are-you-listening.gif');
  } else if (num.checked + char.checked + caps.checked == 3) {
    memeEl.setAttribute("src", './assets/images/you-have-no-power-here.jpeg');
  } else {
    memeEl.style.display = 'none';
  }
})

caps.addEventListener('click', function() {
  memeEl.style.display = 'block';
  if (num.checked + char.checked + caps.checked == 1) {
    memeEl.setAttribute("src", './assets/images/it-doesnt-do-anything.jpeg');
  } else if (num.checked + char.checked + caps.checked == 2) {
    memeEl.setAttribute("src", './assets/images/are-you-listening.gif');
  } else if (num.checked + char.checked + caps.checked == 3) {
    memeEl.setAttribute("src", './assets/images/you-have-no-power-here.jpeg');
  } else {
    memeEl.style.display = 'none';
  }
})

// Joke API
document.getElementById('fetchJokeButton').addEventListener('click', () => {
const category = 'Programming';
const apiUrl = `https://v2.jokeapi.dev/joke/${category}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const jokeContainer = document.getElementById('jokeContainer');

    if (data.type === 'single') {
      jokeContainer.innerHTML = `<p>${data.joke}</p>`;
    } else if (data.type === 'twopart') {
      jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
});

function init() {
  memeEl.style.display = 'none';
}

init();