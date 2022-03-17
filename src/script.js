function add()
{
    var task = document.getElementById('new-task').value;
    var id = "1";
    var taskList = document.createElement("li");
    taskList.setAttribute("id", task);

    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    // checkBox.setAttribute("value", task);
    checkBox.setAttribute("class", "check");
    checkBox.setAttribute("name", "check");
    // checkBox.setAttribute("id", task);


    // console.log(task);

    var taskLabel = document.createElement("label");
    // taskLabel.setAttribute("type", "text");
    taskLabel.setAttribute("value", task);
    taskLabel.setAttribute("for", "check");

    var editBtn = document.createElement("button");
    editBtn.setAttribute("value", "Edit");
    editBtn.setAttribute("class", "edit");

    var delBtn = document.createElement("button");
    delBtn.setAttribute("value", "Delete");
    delBtn.setAttribute("class", "delted");

    // taskList.appendChild(checkBox);
    // taskList.appendChild(taskLabel);
    // taskList.appendChild(editBtn);
    // taskList.appendChild(delBtn);

    document.getElementById("incomplete-tasks").appendChild(taskList);

    var html = '<input type="checkbox" id="'+task+'" name="check" class="check">\
                    <label for="check">'+task+'</label>\
                    <button class="edit">Edit</button>\
                    <button class="delete">Delete</button>\
                ';

    document.getElementById(task).innerHTML(html);


    

}