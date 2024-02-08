// console.log(document.forms[0])
// let form = document.forms.registration

// console.log(form.elements[1])
// console.log(form.elements.email)

// // for (let i of form.elements){
//     // console.log(i)
// // }

// console.log(elem.form)

// console.log(form.elements[0])
// console.log(form.elements[2].classList[0])

// console.log(form.elements[5].checked)

// console.log(form.elements.gender[0].checked)

// console.log(form.elements[3].value)

// let select = form.elements[3];
// console.log(form.elements[3].options[2].selected = true)
// select.selectedIndex = 1;
// select.value = 'Izhevsk';

// let option = new Option('Челябинск', 'Chelyabinsk');
// select[select.options.length] = option
// console.log(option.text)
// let option2 = new Option('Сочи', 'Sochi')
// select[select.options.length] = option2

// let email = form.elements[1]

// email.onblur = () => {
//     if (!email.value.includes('@') || !email.value.includes('.')){
//         let error = document.querySelector('.error');
//         error.innerHTML = 'Email error'
//     }
// }

// email.onfocus = () => {
//     let error = document.querySelector('.error');
//     error.innerHTML = ''
// }

// form.addEventListener('focus', () => console.log('focus'))
// form.addEventListener('blur', () => console.log('blur'))
// form.addEventListener('focusin', () => console.log('focus'))
// form.addEventListener('focusout', () => console.log('blur'))

// email.addEventListener('input', () => console.log(email.value))

// function subm(event){
//     event.preventDefault();
//     console.log('A')
// }

let elem = document.querySelector('.wrap')
let token = 'girejgnrope'

// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//     if (data.ok){
//         let todos = await data.json();
//         printInfo(todos)
//     }
// }
// getData()

let newPost = {
    userId: 1,
    title: 'new title',
    body: 'new body',
}

async function getData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/3', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Barer ${token}',
            },
            body: JSON.stringify(newPost)
        });
            
    if (data.ok){
        console.log(data.headers.get('Content-Type'));
        let todo = await data.json()
        // printInfo(todos)
        console.log(todo);
        elem.insertAdjacentHTML('beforeend',
        `<h2> ${todo.title} </h2>
        <p> ${todo.body} </p>`)
    }
}
getData()



// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => data.json())
//         .then(data => printInfo(todos))
// }

function printInfo(todos){
    todos.forEach(todo => {
        return elem.insertAdjacentHTML('beforeend',
        `<h2>${todo.title}</h2>`)
    })
}