
const queries = {};

function getInputFieldData(){
    const inputs = document.querySelectorAll("input");
    console.log(inputs)
   
    for (let input of inputs) {
      if(input.name != 'search'){
        input.addEventListener("input", e => {
          console.log("jsdhfjsdh")
        const name = input.name;
        queries[name] = input.value;
        filterTable();
      });
    }
      }

}

function searchTable(event) {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTbody");
  tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}


function filterRow(row, query, label) {
    console.log(query,row,label,"www")
  if (query) {
    const text = row.querySelector('td[data-label="' + label + '"]').innerText;
    if (text.toLowerCase().indexOf(query.toLowerCase()) < 0) {
      row.style.display = "none";
    }
  }
}

function filterTable() {
  document.querySelectorAll("tr").forEach((row, index) => {
    //   console.log(row,"rowwws")
    if (index <= 1) {
      return;
    }

    row.style.display = "table-row";

    for (let key in queries) {
      filterRow(row, queries[key], key);
    }
  });
}

function sortCol(ev) {
  console.log("coming here")
 
}





export { getInputFieldData,searchTable, sortCol } 