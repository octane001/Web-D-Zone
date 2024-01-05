let myLeads = [];
const inputBtn = document.getElementById("input-btn"); // Corrected the ID
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const deletebtn = document.getElementById("del");
const storage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (storage) {
  myLeads = storage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active : true , currentWindow: true}, function (tabs) {
    myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
  });
});


function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li>
      <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItem;
}

deletebtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
