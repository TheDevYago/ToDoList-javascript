function addTask() {
    var taskInput = document.getElementById ("newTask");
    var tasklist = document.getElementById("taskList");

    if(taskInput.value.trim() != "") {
        var newTask = document.createElement("li")
        newTask.className ="group flex items-center justify-between p-2 border-b w-[400px]"
        newTask.innerHTML = "<span>" + taskInput.value.trim() + "</span>" + "<button class='text-red-500 hidden group-hover:block' onclick='removeTask(this)'>Excluir</button>"

        tasklist.appendChild(newTask)
        taskInput.value = ""
        Toastify({
            text: "Tarefa criada com sucesso!",
            style: {
                background: "green"
            }
        }).showToast()
    } else {
        Toastify({
            text: "Preencha seus dados!",
            style: {
                background: "red"
            }
        }).showToast()
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem)

    Toastify({
        text: "Tarefa excluida com sucesso!",
        style: {
            background: "green"
        }
    }).showToast()
}
