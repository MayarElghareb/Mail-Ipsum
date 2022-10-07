document.querySelector("#toggleBar").addEventListener("click", () => {
  document.querySelector(".toggledUl").classList.toggle("hideUl");
});
var emailContent = document.getElementById("email-content");
var emailLabels = document.getElementById("labels");
var sortedLabels = document.getElementById("sort");
var searchRow = document.getElementById("search-row");
var starredBtn = document.getElementById("starred-button");

let id = 1;
const dataMsgs = [
  {
    id: 1,
    name: "Marc john",
    starred: "false",
    message: "message1",
    date: "3-11-12",
    imgFile: "images/4 1.png",
    email: "ahmed@gmail.com",
    clock: "9:00am",
  },
  {
    id: 2,
    name: "Marc john",
    starred: "false",
    message: "message2",
    date: "3-11-12",
    email: "mar@gmaili.com",
    clock: "8:00am",
  },
  {
    id: 3,
    name: "Bank",
    starred: "false",
    message: "message3",
    date: "3-9-12",
    imgFile: "images/4 1.png",
    email: "bank@gmail.com",
    clock: "9:00am",
  },
  {
    id: 4,
    name: "Bank",
    starred: "false",
    message: "meesage4",
    date: "3-10-12",
    email: "misr@gmail.com",
    clock: "7:00am",
  },
  {
    id: 5,
    name: "Bank",
    starred: "false",
    message: "message5",
    date: "8-6-12",
    email: "cib@gmail.com",
    clock: "4:00pm",
  },
  {
    id: 6,
    name: "Bank",
    starred: "false",
    message: "message6",
    date: "3-4-12",
    email: "ahli@gmail.com",
    clock: "3:00pm",
  },
  {
    id: 7,
    name: "Bank",
    starred: "false",
    message: "message7",
    date: "3-1-12",
    email: "dubai@gmail.com",
    clock: "12:00pm",
  },
];
let starredArray = [];
dataMsgs.forEach((elem) => {
  let cardimg = elem.imgFile
    ? ` <img src="${elem.imgFile}" style="width:8%">`
    : `<div style="width:8%"></div>`;
  let recordId = elem.id;
  document.querySelector(".email-style").insertAdjacentHTML(
    "beforeend",
    `
   <div class="emailRow"> <input type="checkbox" name="" id="" />
    <img id="starred-icon" src="images/forma-1 1.png " onclick="starred(${recordId})">
<div class="emailRow-item" id="${id++}">
  <div class="emailRow__options">
    
  
  </div>
  
  <h3 class="emailRow__title"id="name">${elem.name}</h3>
  
  <h4 class="emailRow__message">
  ${elem.message}
    </h4>
  
  <p class="emailRow__time">${elem.date}</p>
 ${cardimg}
 </div>
  </div>`
  );
});

let msgItems = Array.from(document.querySelectorAll(".emailRow-item"));
var starredIcon = document.getElementById("starred-icon");

let nameFiltered = document.getElementById(name);
// selected obj
var targettedMsg = [];
// mapp to add onclick and filter
msgItems.map((msgItem) => {
  msgItem.addEventListener("click", () => {
    targettedMsg = dataMsgs.filter((e) => e.id == msgItem.id);

    emailContent.classList.add("emailDesc-container");
    let cardimg = targettedMsg[0].imgFile
      ? `<img src='${targettedMsg[0].imgFile}'  />`
      : "";
    sortedLabels.innerHTML = `<div class="option-mail"><span>Sort by</span> <img src="images/shape-1-copy-5 1.png"><img src="images/vertical view 1.png"><img src="images/horizontal view.png"></div>`;
    emailLabels.innerHTML = `<div style="display:flex;align-items:center;gap:10px"><img src="images/forward-right-arrow-button@2x 2.png"><span>Forward</span> <img src="images/reply 1.png"><span>Reply</span> <span>...</span></div>`;

    emailContent.innerHTML = `<div class="row-content"><div class="email-message"><div>${targettedMsg[0].message}</div></div><div class="message-options"><img src="images/download.png" ><img src="images/print.png" ><img src="images/close.png" id="img-close" style="cursor:pointer"></div></div><div class="email-text-row"><div class="email-text"><div>${targettedMsg[0].email}</div></div><img src="images/forward-right-arrow-button@2x 2.png"style="cursor:pointer"><img src="images/reply 1.png"  style="cursor:pointer"><span>...</span></div>
        <div class="row-timeZone">
        <div>${targettedMsg[0].date}</div>
        <div>${targettedMsg[0].clock}</div>
        </div>
        <div class="row-img">
        
        ${cardimg}
        </div>`;

    var imgClose = Array.from(document.querySelectorAll("#img-close"));
    imgClose.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.parentNode.innerHTML = "";
        emailContent.classList.remove("emailDesc-container");
      });
    });
  });
});

function starred(id) {
  emailObject = dataMsgs[id - 1];

  console.log(emailObject);
  if (emailObject.starred == "false") {
    emailObject.starred = "true";
    starredArray.push(emailObject);
    console.log(starredArray);
  } else if (emailObject.starred == "true") {
    let objIndex = starredArray.findIndex((o) => o.id === id);

    starredArray.splice(objIndex, 1);
  }

  starredBtn.addEventListener("click", () => {
    document.querySelector(".email-style").innerHTML = starredArray.map(
      function (elem) {
        return `<div class="emailRow" id="${id++}">
    <div class="emailRow__options">
      <input type="checkbox" name="" id="" />
      <img src="images/forma-1 1.png " onclick="starred()">
  
    
    </div>
    
    <h3 class="emailRow__title"id="name">${elem.name}</h3>
    
    <h4 class="emailRow__message">
    ${elem.message}
      </h4>
    
    <p class="emailRow__time">${elem.date}</p>

    </div>`;
      }
    );
  });
}
