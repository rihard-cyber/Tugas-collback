const table = document.getElementById("data");
table.innerHTML = load();

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      table.innerHTML = render(res);
    });
}

function render(result) {
  let table = "";
  result.forEach((data) => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.company.name}</td>
              </tr>`;
  });
  return table;
}

function load() {
  return `<tr>
    <td colspan="6" class="text-center">Loading...</td>
  </tr>`;
}

setTimeout(getData, 1000);
