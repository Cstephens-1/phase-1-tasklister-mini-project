document.addEventListener("DOMContentLoaded", () => {

  //isolate the html for the description and button
  let descTag = document.querySelector("#new-task-description")
  const subBttn = document.querySelector("form").childNodes[5]
  const taskList = document.querySelector("ul#tasks")
  
  //add event listener to the submit button. 
  subBttn.addEventListener("click", (e)=> {
    e.preventDefault();
    addTask(descTag)
    e.target.value.reset
    
  })

  function addTask(task){
    let li = document.createElement("li")
    const delBtn = document.createElement("button")
    let editBtn = document.createElement("button")

    editBtn.textContent = "Edit"
    delBtn.addEventListener("click", handleDelete)
    editBtn.addEventListener("click", e => li.textContent = `${task.value} `)
    li.textContent = `${task.value} `
    delBtn.textContent = " x"
    li.append(delBtn, editBtn)
    taskList.appendChild(li)
  }

 function handleDelete(e){
   e.target.parentNode.remove()
 }

 function handleEdit(e){
   e.textContent = `${e.value} `
 }
});
