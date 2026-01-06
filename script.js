const data = [
  { id: 201, user: "Alice", status: "pending" },
  { id: 202, user: "Bob", status: "pending" }
];

const tbody = document.getElementById("requests");

function render() {
  tbody.innerHTML = "";
  data.forEach((r, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${r.id}</td>
        <td>${r.user}</td>
        <td class="${r.status}">${r.status.toUpperCase()}</td>
        <td>
          <button onclick="approve(${i})">Approve</button>
          <button onclick="reject(${i})">Reject</button>
        </td>
      </tr>
    `;
  });
}

function approve(i) {
  data[i].status = "approved";
  render();
}

function reject(i) {
  data[i].status = "rejected";
  render();
}

render();
