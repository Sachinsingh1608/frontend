function shakeFun()
{
    var title = document.getElementById("title1");
    var description = document.getElementById("description");
    if (title.value.trim() === "") {
    title.classList.add("shake");
   }
   if (description.value.trim() === "") {
    description.classList.add("shake");
   }
    setTimeout(function () {
    title.classList.remove("shake");
    description.classList.remove("shake");
  }, 500);

}
function checkEmpty()
{
    var titleElement = document.getElementById("title1");
  var descriptionElement = document.getElementById("description");

  // Remove existing red-border class
//   titleElement.classList.remove("red-border");
//   descriptionElement.classList.remove("red-border");

  // Check if the input fields are empty
  if (titleElement.value.trim() === "") {
    titleElement.classList.add("red-border");
    shakeFun();
  }

  if (descriptionElement.value.trim() === "") {
    descriptionElement.classList.add("red-border");
    shakeFun();
  }
  
}

function deleteDone() {
    console.log("done delete");
}
function deleteTodo(id) {
    fetch("https://management-back.onrender.com/todos/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(deleteDone)
    
}

function todosCallback(data) {
   
    var parentElement = document.getElementById("mainArea");
    // parentElement.innerHTML = JSON.stringify(data);
    for (var i = 0; i<data.length; i++) {
        var childElement = document.createElement("div");

        var grandChildElement1 = document.createElement("span");
        grandChildElement1.innerHTML = data[i].title
       
        var grandChildElement2 = document.createElement("span");
        grandChildElement2.innerHTML = data[i].description
        
        var grandChildElement3 = document.createElement("button");
        grandChildElement3.innerHTML = "Remove"
        grandChildElement3.setAttribute("onclick", "deleteTodo(" + data[i].id + ")")
      
        childElement.appendChild(grandChildElement1)
        childElement.appendChild(grandChildElement2)
        childElement.appendChild(grandChildElement3)

        parentElement.appendChild(childElement);
    }

}

function getDataCallback(resp) {
    resp.json().then(todosCallback);
}

function getData() {
    fetch("https://management-back.onrender.com/todos", {
        method: "GET",
    }).then(getDataCallback)
}

getData();

function parsedResponse(data) {
   
    
        var parentElement = document.getElementById("mainArea");
        var childElement = document.createElement("div");
    
    var grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = data.title
   
    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data.description
    
    var grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "Remove";
    
    childElement.appendChild(grandChildElement1)
    childElement.appendChild(grandChildElement2)
    childElement.appendChild(grandChildElement3)

    parentElement.appendChild(childElement);
   
}

function callback(resp) {
    resp.json().then(parsedResponse);
    var title = document.getElementById("title1");
    var description = document.getElementById("description");
    title.value='';
    description.value='';
description.classList.remove("red-border");
  title1.classList.remove("red-border");



}

function onPress() {
    var title = document.getElementById("title1").value;
    var description = document.getElementById("description").value;

  if (title.trim() === "" || description.trim() === "") {
    checkEmpty();
  }
// wheather a string empty or not

else{
    fetch("https://management-back.onrender.com/todos", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(callback)
  
}
}
function handleKey(event,inputId)
{
 
}


