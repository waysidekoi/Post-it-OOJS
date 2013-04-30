var Board = {
 initialize: function(selector) {
  $(selector).on('click', function(event){

    var x = event.offsetX;
    var y = event.offsetY;

    post = new PostIt(x, y);
    post.initialize(selector);

    $(this).append(post.html(x, y));
  });

}
};

function PostIt() {
  this.html = function(x, y){
    return '<div class="post-it" style="left:'+x+';top:'+y+'"><div class="header"><a class="delete">X</a></div><p contenteditable="true" class="content">aersgoij</p></div>'
  }
  
  this.initialize = function(board){
    $(board).on('click', '.post-it', function(event){
      event.stopPropagation();
      $target = $(event.target);
      if ($target.is(".header")) {
        $(this).draggable();
      } else if ($target.is(".delete")) {
        $(this).remove();
      }
    });


  }
};

$(document).ready(function() {
  Board.initialize('#board');

});


