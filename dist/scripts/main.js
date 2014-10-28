
var Task = function (options) {
  options = options || {};
  this.item = options.item || '';
  this.status = options.status || false;
  this.checked = function(){
    this.status = true;
  };
};

var task_list =[];
var task_template =$('#task_items').html();
var rendered = _.template(task_template);
var add_task = function(){
  var input = $('#task-item').val();
  if(input === ''){
    return;
  };
  task = new Task({
    item: input,
    status:$(this).status,
  });
  $('#Task-List').append(rendered(task));
  $('#task-item').val('');
  
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
