const taskform = document.getElementById('task-form');
const taskList = document.getElementById('show-task');
const listContainer = document.getElementById('list-container');
const formSection = document.getElementById('form-section');
const addTask = document.getElementById('add-task');
const taskListSection = document.querySelector('.task-lists');
let tasks = [];

const showAddTaskMenu = addTask.addEventListener('click', function(){
  formSection.classList.remove('d-none');
  taskListSection.classList.add('d-none');
  addTask.classList.add('active');
  addTask.classList.remove('link-dark');
  taskList.classList.add('link-dark');
  taskList.classList.remove('active');
});

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

const showtasks = taskList.addEventListener('click', function(){
    formSection.classList.add('d-none');
    taskListSection.classList.remove('d-none');
    addTask.classList.remove('active');
    addTask.classList.add('link-dark');
    taskList.classList.remove('link-dark');
    taskList.classList.add('active');

    listContainer.innerHTML = '';

    tasks.forEach(item => {
        listContainer.insertAdjacentHTML('beforeend', 
            `<div class="col-sm-6 mb-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">${item.title}</h5>
                          <p class="card-text">${item.description}</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>`
        )
    });
})