let list = document.getElementById("list");
const taskInput = document.getElementById("taskInput");

// Add task on pressing key "Enter"
taskInput.addEventListener("keydown", function (ev) {
  if (ev.key == "Enter") {
    addTask();
  }
});

function addTask() {
  const listItem = document.createElement("li");
  const textTag = document.createElement("p");
  const dltBtn = document.createElement("button");
  const dltTxt = document.createTextNode("Delete");
  const text = document.createTextNode(taskInput.value);
  if (taskInput.value == "") {
    alert("Enter some text!");
  } else {
    textTag.appendChild(listItem);
    list.appendChild(listItem);
    listItem.appendChild(textTag);
    textTag.appendChild(text);
    dltBtn.appendChild(dltTxt);
    listItem.appendChild(dltBtn);
    dltBtn.className = "delete-task";
    taskInput.value = "";
  }

  const deleteButtons = document.querySelectorAll(".delete-task");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // console.log("Triggered!");
      let listItem = button.parentElement;
      list.removeChild(listItem);
    });
  });
}
