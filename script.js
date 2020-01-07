// 1) Select the section with an id of container without using querySelector.
var container = document.getElementById('container');

// 2) Select the section with an id of container using querySelector.
var containerQuery = document.querySelector('container');

// 3) Select all of the list items with a class of "second".
var listSecond = document.getElementsByClassName('second');

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
var listThird = document.getElementsByClassName('ol li.third');

// 5) Give the section with an id of container the text "Hello!".
container.innerHTML = "Hello!";

// 6) Add the class main to the div with a class of footer.
document.getElementsByClassName('footer').classList.add('main');

// 7) Remove the class main on the div with a class of footer.
document.getElementsByClassName('footer').classList.remove('main');

// 8) Create a new li element.
var newLi = document.createElement('LI');

// 9) Give the li the text "four".
var text = document.createTextNode('four');

// 10) Append the li to the ul element.
newLi.appendChild(text);
document.getElementsByClassName('container.ul');

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const olLi = document.getElementsByClassName('container.ol');
olLi.forEach(li => {
    li.style.backgroundColor = "green";
})

// 13) Remove the div with a class of footer.
document.getElementsByClassName('footer').remove();

