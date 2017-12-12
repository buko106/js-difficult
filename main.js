var list1 = [ 0, "0", [], "\t", [0], ""];
var list2 = JSON.parse(JSON.stringify(list1));
var text = ['0', '"0"', '[]', '"\\t"', '[0]', '""' ];
var active = [ true, true, true, true, false, false ];
var n = list1.length;

function init() {
  refreshTable();
  refreshButtons();
}

function refreshTable(){
  var table = $("#table-js-difficult");
  var headerRow = $("<tr></tr>").append($("<th>==</th>"));
  for( var i = 0 ; i < n ; ++i ) {
    if( active[i] ) $("<th></th>").text(text[i]).appendTo(headerRow);
  }
  var tableHead = $("<thead></thead>").append(headerRow);

  var tableBody = $("<tbody></tbody>");
  for( var i = 0 ; i < n ; ++i ) {
    if( !active[i] ) continue;
    var row = $("<tr></tr>").append($("<th></th>").text(text[i]));
    for( var j = 0 ; j < n ; ++j ) {
      if( !active[j] ) continue;
      if(list1[i]==list2[j]){
        $("<td></td>").text("true").addClass("true").appendTo(row);
      } else {
        $("<td></td>").text("false").addClass("false").appendTo(row);
      }
    }
    tableBody.append(row);
  }
  table.html(tableHead).append(tableBody);
}

function refreshButtons(){
  var buttons = $("#buttons-js-difficult").empty();
  for( var i = 0 ; i < n ; ++i ){
    var button = $("<button></button>",{
      html: text[i],
      "class": "button",
      idx: i,
      on: { click: onClickButton }
    });
    if( !active[i] ) button.addClass("button--outline");
    buttons.append(button);
  }
}

function onClickButton(){
  var idx = $(this).attr("idx");
  active[idx] = !active[idx];
  refreshButtons();
  refreshTable();
}

$(window).on("load",init);
