// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select(".btn-default");
var tbody = d3.select("tbody");
var form = d3.select("#ufo-form");

console.log(form);

// Display the table data on the html page
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

// On form submit, filter the data based on the criteria selection
function formSubmit() {

    console.log("Enering the function..........")
    d3.event.preventDefault();
    var getDate = d3.select("#datetime").property("value");
    var getCity = d3.select("#txt-city").property("value").toLowerCase();
    var getState = d3.select("#txt-state").property("value").toLowerCase();
    var getCountry = d3.select("#txt-country").property("value").toLowerCase();
    var getShape = d3.select("#txt-shape").property("value").toLowerCase();
    console.log(getDate);
    console.log(getCity);


    var filteredData = tableData
    if (getDate) {
        filteredData = filteredData.filter(ufodata => ufodata.datetime === getDate);
    }
    if (getCity) {
        filteredData = filteredData.filter(ufodata => ufodata.city === getCity);
    }
    if (getState) {
        filteredData = filteredData.filter(ufodata => ufodata.state === getState);
    }
    if (getCountry) {
        filteredData = filteredData.filter(ufodata => ufodata.country === getCountry);
    }
    if (getShape) {
        filteredData = filteredData.filter(ufodata => ufodata.shape === getShape);
    }        
    console.log(filteredData);    
    fillTheTable(filteredData);
}
fillTheTable(tableData);
form.on("submit", formSubmit);

button.on("click", formSubmit);
// form.on("change", formSubmit);

