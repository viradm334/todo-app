require('./style.css');

document.addEventListener('DOMContentLoaded', () => {
const taskform = document.getElementById("task-form");
const taskList = document.getElementById("show-task");
const listContainer = document.getElementById("list-container");
const formSection = document.getElementById("form-section");
const addTask = document.getElementById("add-task");
const taskListSection = document.querySelector(".task-lists");
const checkoutMenu = document.getElementById("checkout-task");
const checkoutSection = document.querySelector(".checkout-section");
const checkoutBtn = document.getElementById("checkout-btn");
const grandTotalText = document.getElementById('grand-total');
const jmlBarangText = document.getElementById('jumlah-barang');
const totalHargaBarangText = document.getElementById('total-barang');
const tableContainer = document.getElementById('table-container');
const pajakText = document.getElementById('pajak');
const alertSuccess = document.querySelector('.alert');
let tasks = [];

const showAddTaskMenu = addTask.addEventListener("click", function () {
  formSection.classList.remove("d-none");
  taskListSection.classList.add("d-none");
  checkoutSection.classList.add("d-none");
  addTask.classList.add("active");
  addTask.classList.remove("text-white");
  taskList.classList.add("text-white");
  taskList.classList.remove("active");
  checkoutMenu.classList.add("text-white");
  checkoutMenu.classList.remove("active");
});

const createTask = taskform.addEventListener("submit", function (e) {
  e.preventDefault();

  let task = new Object({
    id: tasks.length + 1,
    title: taskform.title.value,
    description: taskform.description.value,
    price: parseInt(taskform.price.value)
  });

  tasks.push(task);
  taskform.reset();

  alertSuccess.classList.remove('d-none');

  setTimeout(() => {
    alertSuccess.classList.add('d-none');
  }, 5000);
});

const formatToIDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
});

const showtasks = taskList.addEventListener("click", function () {
  formSection.classList.add("d-none");
  taskListSection.classList.remove("d-none");
  checkoutSection.classList.add("d-none");
  addTask.classList.remove("active");
  addTask.classList.add("text-white");
  taskList.classList.remove("text-white");
  taskList.classList.add("active");
  checkoutMenu.classList.add("text-white");
  checkoutMenu.classList.remove("active");

  renderTaskHTML();
});

const showCheckoutSection = checkoutMenu.addEventListener("click", function () {
  checkoutSection.classList.remove("d-none");
  formSection.classList.add("d-none");
  taskListSection.classList.add("d-none");
  checkoutMenu.classList.add("active");
  checkoutMenu.classList.remove("text-white");
  addTask.classList.remove("active");
  addTask.classList.add("text-white");
  taskList.classList.add("text-white");
  taskList.classList.remove("active");

  const jumlah = tasks.length;
  const total_price = tasks.reduce((acc, item) => acc + item.price, 0);
  const tax = total_price * 0.1;
  const grand_total = total_price + tax;

  renderTable();

  jmlBarangText.textContent = `Jumlah barang: ${jumlah}`;
  totalHargaBarangText.textContent = `Total harga: ${formatToIDR.format(total_price)}`;
  pajakText.textContent = `Pajak (10%): ${formatToIDR.format(tax)}`;
  grandTotalText.textContent = `Grand total: ${formatToIDR.format(grand_total)}`;
});

const checkout = checkoutBtn.addEventListener('click', function(){
  alert('Pembayaran berhasil!');
});

function renderTaskHTML() {
  listContainer.innerHTML = "";

  tasks.forEach((item) => {
    listContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="col-sm-6 mb-3">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">${item.title}</h5>
                          <p class="card-text">${item.description}</p>
                          <p class="card-text">${formatToIDR.format(item.price)}</p>
                        </div>
                      </div>
                    </div>`
    );
  });
}

function renderTable(){
  const tbody = tableContainer.querySelector('tbody');
  tbody.innerHTML = '';

  tasks.forEach((item, index) => {
    tbody.insertAdjacentHTML('beforeend', 
      `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${item.title}</td>
                        <td>${item.description}</td>
                        <td>${formatToIDR.format(item.price)}</td>
                      </tr>`
    )
  });
}

})

