document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('hello world')


  document.querySelector('input[type=submit]').addEventListener("click", function(event){
    let taskInput = document.querySelector('#new-task-description').value

    let list = document.querySelector('#tasks')
    let task = document.createElement('li')
    task.innerText = taskInput
    list.appendChild(task)

    event.preventDefault();
  })


});
