/*
const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++) {
    //console.log(allLis[i].innerText);
    allLis[i].innerText = 'WE ARE THE CHAMPIONS';
}

for (let li of allLis) {
    li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}
*/

/*
// styles.....

const h1 = document.querySelector('h1');

h1.style;

const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((el, i) => {
    //console.log(el, i); // returns all li tags with the index
    const color = colors[i];
    el.style.color = color;
})
*/
/*
const todo = document.querySelector('#todos .todo')

// three separate lines, one per property. its not very ideal. let's use a class instead.
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo.getAttribute('class'); // I get todo
todo.setAttribute('class', 'done');
// took the original class out...... now it's done. downside of using setAttribute.. automatically replaces the current class... not the best approach either!

todo.classList  // an object representation.. it contains the classes and provides methods

// let's pretend we don't know if todo currently has done classes

todo.classList.remove('done'); // get rid of done if it's there! a lot nicer than using setAttribute

todo.classList.toggle('done'); // returns false when removes the class

todo.classList.add('done');

// todo.setAttribute('class', todo.getAttribute('class')+' done'); just use toggle instead
*/

/*
const newImg = document.createElement('img');

console.dir(newImg) // also an object but different type. image element

newImg.src = 'https://www.cookingclassy.com/wp-content/uploads/2020/04/carrot-cake-20-1-1024x1536.jpg';
newImg.style.width = '300px';



document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE'
newLink.href = 'https://www.youtube.com';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);
*/

