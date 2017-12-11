var n = 4;
var list = [ 0, "0", [], "\t" ];
var disp = ['0', '"0"', '[]', '"\\t"' ];

function init() {
  var table = $("#table-js-difficult");
  var headerRow = $("<tr></tr>").append($("<th>==</th>"));
  for( var i = 0 ; i < n ; ++i ) {
    $("<th></th>").text(disp[i]).appendTo(headerRow);
  }
  $("<thead></thead>").append(headerRow).appendTo(table);

  var tableBody = $("<tbody></tbody>");
  for( var i = 0 ; i < n ; ++i ) {
    var row = $("<tr></tr>").append($("<th></th>").text(disp[i]));
    for( var j = 0 ; j < n ; ++j ) {
      if(list[i]==list[j]){
        $("<td></td>").text("true").addClass("true").appendTo(row);
      } else {
        $("<td></td>").text("false").addClass("false").appendTo(row);
      }
    }
    tableBody.append(row);
  }
  tableBody.appendTo(table);
}

$(window).on("load",init);
