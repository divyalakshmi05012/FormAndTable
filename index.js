
$(document).ready(function(){
    $('.my-select').selectpicker();
})


var n = 1;
var x = 0;

function AddRow() {
    var table = document.getElementById("show");
    var newRow = table.insertRow();

  
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("lname").value;
    cell3.innerHTML = document.getElementById("address").value;
    cell4.innerHTML = document.getElementById("pincode").value;
    cell5.innerHTML = document.getElementById("gender").value;
    cell6.innerHTML = document.getElementById("food").value;
    cell7.innerHTML = document.getElementById("state").value;
    cell8.innerHTML = document.getElementById("country").value;

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("food").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    n++;
    x++;
}




























