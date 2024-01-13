document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const dueTimeInput = document.getElementById("dueTimeInput");
    const ampmInput = document.getElementById("ampmInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    function formatDateTime(date, time, ampm) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        const formattedDate = new Date(date + "T" + time + " " + ampm).toLocaleString(undefined, options);
        return formattedDate;
    }
    function addTaskToTable(taskText, dueDateText, dueTimeText, ampmText) {
        const row = taskList.insertRow();
        const taskCell = row.insertCell(0);
        const dueDateCell = row.insertCell(1);
        const timeCell = row.insertCell(2);
        const editCell = row.insertCell(3);
        const completeCell = row.insertCell(4);
        const deleteCell = row.insertCell(5);
        taskCell.textContent = taskText;
        dueDateCell.textContent = dueDateText;
        timeCell.textContent = dueTimeText + " " + ampmText;
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("completeBtn");
        completeCell.appendChild(completeBtn);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteCell.appendChild(deleteBtn);
        completeBtn.addEventListener("click", function () {
            row.classList.toggle("completed");
        });
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(row);
        });
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");
        editCell.appendChild(editBtn);
        editBtn.addEventListener("click", function () {
            document.getElementById("editFormContainer").classList.remove("hidden");
            document.getElementById("editTaskInput").value = taskText;
            document.getElementById("editDueDateInput").value = dueDateText;
            document.getElementById("editDueTimeInput").value = dueTimeText;
            document.getElementById("editAmpmInput").value = ampmText;
            document.getElementById("saveEditBtn").addEventListener("click", function () {
                taskCell.textContent = document.getElementById("editTaskInput").value;
                dueDateCell.textContent = document.getElementById("editDueDateInput").value;
                timeCell.textContent = document.getElementById("editDueTimeInput").value + " " + document.getElementById("editAmpmInput").value;
                document.getElementById("editFormContainer").classList.add("hidden");
            });
        });
    }
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const dueDateText = dueDateInput.value;
        const dueTimeText = dueTimeInput.value;
        const ampmText = ampmInput.value;
        if (taskText !== "") {
            addTaskToTable(taskText, dueDateText, dueTimeText, ampmText);
            taskInput.value = "";
            dueDateInput.value = "";
            dueTimeInput.value = "";
            ampmInput.value = "";
        }
    });
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});