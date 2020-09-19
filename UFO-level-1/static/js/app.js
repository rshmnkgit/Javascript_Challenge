// from data.js
var tableData = data;

// YOUR CODE HERE!
// .datetime
var button = d3.select(".btn-default");
var tbody = d3.select("tbody");
var form = d3.select("form");

//============== TRAIL & ERROR ==============================================================
function Add() {
    var ddl = document.getElementById("ddlFruits");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("txtText").value;
    option.value = document.getElementById("txtValue").value;
    ddl.options.add(option);
}
//==========================================================================================


// function formActivate(dataTable) {
function fillTheTable(dataTable) {
    tbody.html("");
    dataTable.forEach((ufodtata) => {
        var row = tbody.append("tr");
        Object.entries(ufodtata).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// function handleChange() {
//     var inputElement = d3.select("#datetime");

//     // Get the value property of the input element
//     var getDate = inputElement.property("value");
//     console.log(getDate);

//     console.log("-----------------------------------")
//     var filteredData = tableData.filter(ufodata => ufodata.datetime === getDate);
//     console.log(filteredData);

//     fillTheTable(filteredData); 

//     console.log("-----------------------------------")
// }

function formSubmit() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var getDate = inputField.property("value");
    if (getDate) {
        var filteredData = tableData.filter(ufodata => ufodata.datetime === getDate);
        console.log(filteredData);    
        fillTheTable(filteredData);
    }
    else {
        fillTheTable(tableData);
    }
}

fillTheTable(tableData);
button.on("click", formSubmit);
// form.on("change", formSub);
form.on("submit", formSubmit);
