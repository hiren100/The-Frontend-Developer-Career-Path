let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};



let acceptData = () => {
  data["text"] = input.value;

  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <tr>
    <td width="60%">${data.text}</td>
    <td width="40%">
    <button type="button" class="btn btn-outline-primary" onClick="editPost(this)">Edit</button>
    <button type="button" class="btn btn-outline-danger" onClick="deletePost(this)">Delete</button>
    </td>
  </tr>  
  `;
  input.value = "";

};

let deletePost = (e) => {

  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};


