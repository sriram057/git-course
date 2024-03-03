const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
  .get("https://crudcrud.com/api/944ce205c1ed4a8d8db3a64234f41e25/Payload")
  .then((res) => console.log(res))
  .catch((err) => console.log(err))  
}

function postTodo() {
  // Write your code here
  axios
    .post("https://crudcrud.com/api/944ce205c1ed4a8d8db3a64234f41e25/Payload",{
      title:"Learn Axios",
      completed:"false"
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

function putTodo() {
  // Write your code here
  axios
    .put("https://crudcrud.com/api/944ce205c1ed4a8d8db3a64234f41e25/Payload/65e44f3c1d380403e8714158",{
      title:"Learn Axios",
      completed:"true"
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

function deleteTodo() {
  axios
    .delete("https://crudcrud.com/api/944ce205c1ed4a8d8db3a64234f41e25/Payload/65e44f141d380403e8714156")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
