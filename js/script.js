var siteName = document.querySelector("#siteName");
var siteURL = document.querySelector("#siteURL");
var tableBody = document.querySelector("#table-body");
var overlay = document.querySelector("#overlay");

function checkName() {
  if (siteName.value.length < 3) {
    return false;
  } else {
    return true;
  }
}
function checkURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function checkNameInput() {
  if (checkName()) {
    siteName.classList.remove("is-invalid");
    siteName.classList.add("is-valid");
  } else {
    siteName.classList.remove("is-valid");
    siteName.classList.add("is-invalid");
  }
}

function checkURLInput() {
  if (checkURL(siteURL.value)) {
    siteURL.classList.remove("is-invalid");
    siteURL.classList.add("is-valid");
  } else {
    siteURL.classList.remove("is-valid");
    siteURL.classList.add("is-invalid");
  }
}

var sitesList = [];
function addSite() {
  var siteDetails = {
    name: siteName.value,
    url: siteURL.value,
  };
  if (checkName() && checkURL(siteURL.value)) {
    sitesList.push(siteDetails);
    displaySites();
    clearSite();
  } else {
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
  }
}

function displaySites() {
  var tableRow = "";
  for (let i = 0; i < sitesList.length; i++) {
    tableRow += `<tr>
                <td>${i + 1}</td>
              <td>${sitesList[i].name}</td>
                <td>
                  <button class="btn btn-visit text-white"  onclick="visitSite(${i})">
                    <i class="fa-regular fa-eye" style="color: #ffffff"></i>
                    Visit
                  </button>
                </td>
                <td>
                  <button class="btn btn-delete text-white" onclick="deleteSite(${i})">
                    <i class="fa-solid fa-trash-can" style="color: #ffffff"></i>
                    Delete
                  </button>
                </td>
              </tr>`;
  }
  tableBody.innerHTML = tableRow;
}
function clearSite() {
  siteName.value = "";
  siteURL.value = "";
  siteName.classList.remove("is-valid");
  siteURL.classList.remove("is-valid");
}

function deleteSite(index) {
  sitesList.splice(index, 1);
  displaySites();
}

function visitSite(index) {
  window.open(sitesList[index].url);
}

document.getElementById("btn-close").addEventListener("click", function () {
  overlay.classList.remove("d-flex");
  overlay.classList.add("d-none");
});
