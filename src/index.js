document.addEventListener("DOMContentLoaded", () => {
  // your code here


  document.querySelector('input[type=submit]').addEventListener("click", function(event){
    let taskInput = document.querySelector('#new-task-description').value

    let list = document.querySelector('#tasks')
    let task = document.createElement('li')
    task.innerText = taskInput
    list.appendChild(task)

    event.preventDefault();
  })


   //Delete Button
  let deleteButton = document.createElement('input')
  deleteButton.type= "button"
  deleteButton.value = "Delete Task"
  deleteButton.id= "delete"
  document.querySelector('#create-task-form').appendChild(deleteButton);
  
 
  document.querySelector('#delete').addEventListener("click", function(event){
    let taskInput = document.querySelector('#new-task-description').value
    let allTasks = document.querySelectorAll("#tasks li");
    allTasks.forEach(function(li){
      if (li && li.textContent == taskInput){
        li.remove()
      }
    });
  });
});
