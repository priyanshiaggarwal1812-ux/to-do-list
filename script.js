// ---------- Section 1: My Tasks ----------
/*let input1 = document.getElementById("taskinput");   // input for tasks1
let list1 = document.getElementById("tasklist");     // ol for tasks1
let counter1 = document.getElementById("taskcount"); // span for tasks1
let count1 = 0; // task counter for tasks1

function addtask() {
    let taskText = input1.value.trim(); // get text and remove spaces

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    // Task text
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
        list1.removeChild(li);
        count1--;
        counter1.textContent = count1;
    }

    li.appendChild(taskSpan);
    li.appendChild(removeBtn);

    list1.appendChild(li);

    count1++;
    counter1.textContent = count1;

    input1.value = "";
}

// Optional: remove all tasks at once
function removetasks1() {
    list1.innerHTML = "";
    count1 = 0;
    counter1.textContent = count1;
}


// ---------- Section 2: Remaining Tasks ----------
let input2 = document.getElementById("input");        // input for tasks2
let list2 = document.getElementById("tasklist1");     // ol for tasks2
let counter2 = document.getElementById("remainingtasks"); // span for tasks2
let count2 = 0; // task counter for tasks2

function addtasks() {
    let taskText = input2.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = function() {
        list2.removeChild(li);
        count2--;
        counter2.textContent = count2;
    }

    li.appendChild(taskSpan);
    li.appendChild(removeBtn);

    list2.appendChild(li);

    count2++;
    counter2.textContent = count2;

    input2.value = "";
}

// Optional: remove all tasks at once
function removetasks2() {
    list2.innerHTML = "";
    count2 = 0;
    counter2.textContent = count2;
}*/

document.addEventListener("DOMContentLoaded", function () {

    // ---------- Section 1: My Tasks ----------
    let input1 = document.getElementById("taskinput");
    let list1 = document.getElementById("tasklist");
    let counter1 = document.getElementById("taskcount");
    let count1 = 0;

    window.addtask = function () {
        let taskText = input1.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = function () {
            list1.removeChild(li);
            count1--;
            counter1.textContent = count1;
        };

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        list1.appendChild(li);

        count1++;
        counter1.textContent = count1;
        input1.value = "";
    };

    window.removetasks1 = function () {
        list1.innerHTML = "";
        count1 = 0;
        counter1.textContent = count1;
    };

    // ---------- Section 2: Remaining Tasks ----------
    let input2 = document.getElementById("input");
    let list2 = document.getElementById("tasklist1");
    let counter2 = document.getElementById("remainingtasks");
    let count2 = 0;

    window.addtasks = function () {
        let taskText = input2.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = function () {
            list2.removeChild(li);
            count2--;
            counter2.textContent = count2;
        };

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        list2.appendChild(li);

        count2++;
        counter2.textContent = count2;
        input2.value = "";
    };

    window.removetasks2 = function () {
        list2.innerHTML = "";
        count2 = 0;
        counter2.textContent = count2;
    };

});

