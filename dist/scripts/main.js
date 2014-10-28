
var Task = function (options) {

  options = options || {};
  this.item = options.item || '';
  this.status = options.status || 'incomplete';
  this.checked = function(){
    this.status = 'complete'
  };
};
