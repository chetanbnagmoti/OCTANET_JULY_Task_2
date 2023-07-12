$(document).ready(function() {
  $('#btn').click(function() {
    var inputVal = $('#list').val();
    if(inputVal==""){
      $('#list').val(''); // Clear the input field after appending
      return
    }else{
      $('#list-show-table').show();
      $('#list-show-body').append(
        '<tr class="list-item">' +
        '<td scope="col"><span class="task-text"  style="color: white; font-weight: bold;  font-size: larger;"> ' + inputVal + '</span></td>' +
        '<td scope="col"><button class="edit-btn btn btn-warning"><i class="fa fa-edit"></i></button></td>' +
        '<td scope="col"><button class="delete-btn btn btn-danger"><i class="fa fa-remove"></i></button></td>' +
        '<td scope="col"><button class="done-btn btn btn-success"><i class="fa fa-check"></i></button></td>'+
      '</tr>'
      )
      $('#list').val(''); // Clear the input field after appending
    }
  });
  
  
  $(document).on('click','.delete-btn',function(){
    var listItem = $(this).closest('.list-item');
    listItem.remove();
  })


  $(document).on('click', '.edit-btn', function() {
    var listItem = $(this).closest('.list-item');
    var taskText = listItem.find('.task-text');
    var inputField = $('<input type="text" class="edit-input w-75 ">').val(taskText.text());
    taskText.replaceWith(inputField);
    // listItem.find('.edit-btn').hide();
    // listItem.find('.done-btn').hide();
    inputField.focus();
  });

  $(document).on('click', '.done-btn', function() {
   
    var listItem = $(this).closest('.list-item');
    var taskText = listItem.find('.edit-input').val() || listItem.find('.task-text').text();
    var currentDate = new Date().toLocaleString();
    listItem.remove();
    $('#completed-task-table').hide();
    $('#completed-task-body').append(
      '<tr  style="color: white; font-weight: bold;  font-size: larger;">' +
        '<td scope="col">' + taskText + '</td>' +
        '<td scope="col" class="starting-time">' + currentDate + '</td>' +
        '<td scope="col" class="completed-time"></td>' +
        '<td scope="col"><button class="completed-task-btn btn btn-info ">Complete</button></td>' +
      '</tr>'
    );
  });

  $(document).on('click', '.completed-task-btn', function() {
    var tableRow = $(this).closest('tr');
    var currentDate = new Date().toLocaleString();
    tableRow.find('.completed-time').text(currentDate);
    tableRow.find('td:first-child').css('text-decoration-line', 'line-through','solid');
    tableRow.find('.completed-task-btn').replaceWith('<span class="completed-message text-warning">Task Completed</span>');
    $(this).remove();
  });
  
  

  $("#completed-task").click(function() {
    $('#completed-task-heading').toggle();
    $('#completed-task-table').toggle();
    $("#list-show-table").hide();
    $("#Add-task-heading").hide();
  });

  $("#add-list").click(function() {
    $('#completed-task-heading').hide();
    $('#completed-task-table').hide();
    $("#Add-task-heading").toggle();
    $("#list-show-table").toggle();
  });

});
