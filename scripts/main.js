

var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicsthings';

var Task = function (options) {
  options = options || {};
  this.item = options.item || '';
  this.status = options.status || 'false';
  this.checked = function(){
    this.status = 'true';
  };
};

var task_list;
var task_template =$('#task_items').html();
var rendered = _.template(task_template);

$.getJSON(my_server).done(function(data){
  task_list = data;

  _.each(task_list, function(item){

  })
})

var add_task = function(){
  var input = $('#task-item').val();
  if(input === ''){
    return;
  };
  task = new Task({
    item: input,
    status:$(this).status,
  });

  $.ajax({
    type:'POST',
    url: my_server,
    data: task
  }).done(function(data){
    task_list.push(data);

  $('#Task-List').append(rendered(data));
  $('#task-item').val('');
  task_list.push(task);
});

};


$('#btnNew').on('click', function
(event){

  event.preventDefault();
  add_task();
});

$('#task-item').keyup(function (e){
  if (e.keyCode == 13) {
    add_task();
  }
});

var checked;
$('#Task-List').on('click', 'li', function
(event){
  event.preventDefault();
  var myID = $(this).attr('id')
  checked = _.findWhere(task_list, {_id:myID});

  if (checked.status === 'true') {
    checked.status = 'false';
    $(this).removeClass('done');
  } else {
    checked.status = 'true';
    $(this).addClass('done');
  }

$.ajax({
  type: 'PUT',
  url: my_server + "/" + checked._id,
  data: checked
})
});
