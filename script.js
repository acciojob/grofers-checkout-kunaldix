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
  const ansDiv = document.getElementById("ans");
  ansDiv.textContent = sum;
  ansDiv.style.fontWeight = "bold";
  ansDiv.style.margin = "25px";
  ansDiv.style.fontSize = "1.2rem";
  
};

getSumBtn.addEventListener("click", getSum);

