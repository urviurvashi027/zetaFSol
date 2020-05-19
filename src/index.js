import { bro,debounce } from './js/utlil';
import './styles/main.scss';
import * as constant from "./js/constant";
import { fetchData } from "./js/dataProvider";
import { nextPage, generateTableHead, prevPage, setRecordPageNumber } from "./js/createTable";
import { getInputFieldData,searchTable } from "./js/tableFilter";

function getData (){
    fetchData().then(res =>{
        console.log(res);
        let data = res;
        let table = document.querySelector("table");
        let headArray = [{
            title:"Name",
            keyName:"name"},{
            title:"Capital",
            keyName:"capital"},{
            title:"Region",
            keyName:"region"},{
            title:"Sub Region",
            keyName:"subregion"},{
            title:"Flag",
            keyName:"flag"}
        ];
        generateTableHead(table,headArray,data);
    })
}

function select(){
    var e = document.getElementById("recordNumber");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    console.log("coming here")
    setRecordPageNumber(Number(text));
}

console.log(getData());


document.getElementById('btn_prev').addEventListener('click', prevPage);
document.getElementById('btn_next').addEventListener('click', nextPage);

document.getElementById('recordNumber').addEventListener('change', select);


const addSearchListeners = () => {
    const inputElement = document.getElementById("search");
    console.log("added listner")
    inputElement.addEventListener("input", debounce(inputChange, 1000));
  };

  const inputChange = event => {
    const queryString = event.target.value.trim();
    console.log(queryString);
    searchTable(event)
  };




window.addEventListener('load', function() {
    getInputFieldData();
    var e = document.getElementById("recordNumber");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    addSearchListeners();
});