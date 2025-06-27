const taskform = document.getElementById('task-form');
let tasks = [];

const createTask = taskform.addEventListener('submit', function(e){
    e.preventDefault();

    let task = new Object({
        id: tasks.length + 1,
        title : taskform.title.value,
        description: taskform.description.value
    });

    tasks.push(task);
    console.log(tasks);
    this.reset();
});