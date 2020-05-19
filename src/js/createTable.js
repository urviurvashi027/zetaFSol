import { sortCol } from './tableFilter';

var current_page = 1;
var records_per_page = 10;
var tableData ;
var tableHead;

function generateTableHead(table,head,data) {
    tableData = data;
    tableHead = head;
    let thead = document.querySelector('thead')
    let row = thead.insertRow();
    let tbody = document.querySelector("tbody");
    let filterRow = thead.insertRow(); 
    head.forEach((item,index) => {
    let th = document.createElement("th");
    th.onclick =  function x(e){
        rowClicked(e);
      }
    let text = document.createTextNode(item.title);
    th.appendChild(text);
    row.appendChild(th);
    let filterColumn = filterRow.insertCell();
    var input = document.createElement("input");
    input.type = "text";
    input.id = item.title;
    input.name = item.keyName;
    input.placeholder = `${item.title} ...` ;
    filterColumn.appendChild(input);
    });
  }

  function rowClicked(e){
      console.log(e.target.innerHTML,'event');
      sortCol(e);
  }
  
//generate table body
  function generateTable(data,headArray) {
      if(data && headArray){
        console.log("coming here")
        let tbody = document.querySelector("tbody");
        let row = tbody.insertRow();
        headArray.forEach((item,inx)=>{
            let cell = row.insertCell();
            cell.setAttribute("data-label", item.keyName);
            let text = document.createTextNode(data[item.keyName]);
            cell.appendChild(text);
        })
      }
  }


 
// Can be obtained from another source, such as your tableData variable
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    console.log(page);

     var child = page_span.lastElementChild;  
     while (child) { 
        page_span.removeChild(child); 
         child = page_span.lastElementChild; 
     } 

    document.querySelector("tbody").innerHTML  = '';
    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        generateTable(tableData[i],tableHead);
    }

    if(page > 0 && page < numPages() ){
        console.log("coming here arey");
        for(var i =0;i<5;i++){
            var element = document.createElement("button");
            element.id = `btn${page+i}`;
            element.innerText = `${page+i}`
            page_span.appendChild(element);
            console.log("jdhfkjshjkfh",element)
        }
    }

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages(){
    return Math.ceil(tableData.length / records_per_page);
}

function setRecordPageNumber(n){
    records_per_page = n;
    changePage(1);
}

window.onload = function() {
    changePage(1);
};




  export { nextPage, generateTableHead, prevPage,setRecordPageNumber }