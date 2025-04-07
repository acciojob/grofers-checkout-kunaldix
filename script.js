const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
getSumBtn.setAttribute("class", "btn")
document.body.appendChild(getSumBtn);

let table = document.querySelector("table");

const getSum = () => {
//Add your code here
	const items = document.querySelectorAll(".price");
  let sum = 0;
  items.forEach((item, i) => {
    sum += parseInt(item.textContent);
  });
  table.innerHTML += `
  <tr>
    <td colspan = 2>${sum} </th>
  </tr> 
  `;
  
};

getSumBtn.addEventListener("click", getSum);

