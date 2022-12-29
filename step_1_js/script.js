
var tasksArray = [];
var val = document.getElementById('Task');


// Sign event
document.querySelector('#Task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        tasksArray.push({ val: val.value, active: "", id: tasksArray.length + 1 });
        updatedList(tasksArray);
    }
});

document.getElementById('list').addEventListener('click', (event) => {
    var checked = event.srcElement.checked;
    let index = tasksArray.findIndex(x => x.id == event.srcElement.id[0]);
    tasksArray[index].active = checked == true ? "checked='true'" : "";;
    if (checked == true) {
        $('#' + event.srcElement.id[0]).addClass("line-through");
    } else {
        $('#' + event.srcElement.id[0]).removeClass("line-through");
    }

})


function add() {
    tasksArray.push({ val: val.value, active: "", id: tasksArray.length + 1 });
    updatedList(tasksArray);
}

function filter(index) {
    switch (index) {
        case 1:
            updatedList(tasksArray);
            break;
        case 2:
            updatedList(tasksArray.filter(x => x.active == false));
            break;
        case 3:
            updatedList(tasksArray.filter(x => x.active == "checked='true'"));
            break;
        default:
    }
}


function updatedList(list) {
    document.getElementById('Task').value = "";
    $("#list").empty();
    for (var i = 0; i < list.length; i++) {
        $("#list").append($("<tr><td>  <input " + list[i].active + " name='settings' type=checkbox id=" + list[i].id + "check" + " >").append("</td><span id=" + list[i].id + "> &nbsp;" + list[i].val + "</span></tr>"))
        if (list[i].active != "") {
            $('#' + list[i].id).addClass("line-through");
        }
    }
}
