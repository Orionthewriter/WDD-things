function mysearchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
function fillTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("userID").value;
    cell2.innerHTML = document.getElementById("firstname").value;
    cell3.innerHTML = document.getElementById("lastname").value;
    cell4.innerHTML = document.getElementById("LOGO").value;
    return false;
}
function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
}
    function tableToCSV() {
 
      // Variable to store the final csv data
      var csv_data = [];

      // Get each row data
      var rows = document.getElementsByTagName('tr');
      for (var i = 0; i < rows.length; i++) {

          // Get each column data
          var cols = rows[i].querySelectorAll('td,th');

          // Stores each csv row data
          var csvrow = [];
          for (var j = 0; j < cols.length; j++) {

              // Get the text data of each cell
              // of a row and push it to csvrow
              csvrow.push(cols[j].innerHTML);
          }

          // Combine each column value with comma
          csv_data.push(csvrow.join(","));
      }

      // Combine each row data with new line character
      csv_data = csv_data.join('\n');

      // Call this function to download csv file 
      downloadCSVFile(csv_data);

  }

  function downloadCSVFile(csv_data) {

      // Create CSV file object and feed
      // our csv_data into it
      CSVFile = new Blob([csv_data], {
          type: "text/csv"
      });

      // Create to temporary link to initiate
      // download process
      var temp_link = document.createElement('a');

      // Download csv file
      temp_link.download = "GfG.csv";
      var url = window.URL.createObjectURL(CSVFile);
      temp_link.href = url;

      // This link should not be displayed
      temp_link.style.display = "none";
      document.body.appendChild(temp_link);

      // Automatically click the link to
      // trigger download
      temp_link.click();
      document.body.removeChild(temp_link);
  }