/*TODO: get and displaay all products*/
function getprds() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  let xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let products = xhr.responseText;
      let prdObjects = JSON.parse(products);
      displayAll(prdObjects);
    }
  };
  xhr.send();
}
function displayAll(prds) {
  let table = document.getElementById("table");
    table.innerHTML = "";
    let thead = document.createElement("tr");

    let thId = document.createElement("th");
    let thTitle = document.createElement("th");
    let thBody = document.createElement("th");

    thId.innerHTML = "Id";
    thTitle.innerHTML = "Title";
    thBody.innerHTML = "Body";

    thead.append(thId, thTitle, thBody);
    table.append(thead);

  for (let i = 0; i < prds.length; i++) {
    let tr = document.createElement("tr");

    let tdId = document.createElement("td");
    let tdTitle = document.createElement("td");
    let tdBody = document.createElement("td");

    tdId.append(prds[i].id);
    tdTitle.append(prds[i].title);
    tdBody.append(prds[i].body);

    tr.append(tdId, tdTitle, tdBody);
    table.append(tr);
  }
}

/*TODO: get and display products by id*/
function getprdsById() {
  let id = Number(document.getElementById("prdId").value);
  let url = "https://jsonplaceholder.typicode.com/posts/";

  let xhr = new XMLHttpRequest();
  xhr.open("get", url + id, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let products = xhr.responseText;
      let prdObjects = JSON.parse(products);
      displayAllById(prdObjects);
    }
  };
  xhr.send();
}

function displayAllById(prds) {
    
    let table = document.getElementById("table");
    table.innerHTML = "";
    
    let thead = document.createElement("tr");

    let thId = document.createElement("th");
    let thTitle = document.createElement("th");
    let thBody = document.createElement("th");

    thId.innerHTML = "Id";
    thTitle.innerHTML = "Title";
    thBody.innerHTML = "Body";

    thead.append(thId, thTitle, thBody);
    table.append(thead);


  let tr = document.createElement("tr");

  let tdId = document.createElement("td");
  let tdTitle = document.createElement("td");
  let tdBody = document.createElement("td");

  tdId.append(prds.id);
  tdTitle.append(prds.title);
  tdBody.append(prds.body);

  tr.append(tdId, tdTitle, tdBody);
  table.append(tr);
}


