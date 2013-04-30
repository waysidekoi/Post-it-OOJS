var Board = {
 selector: "#selector",
 initialize: function(selector) {
    this.selector = selector;
    this.handlePostIts();
  },
  handlePostIts: function() {
    var self = this;
    $(this.selector).on('click', function(event){
      console.log("board clicked");
      var x = event.offsetX;
      var y = event.offsetY;
      self.renderPostIt(x, y);
    });
  },
  renderPostIt: function(x, y) {
    post = new PostIt(this.selector, x, y);
    post.render();
  }
};


function PostIt(selector, x, y) {
  this.html = $('<div class="post-it"><div class="header"><a class="delete">X</a></div><p contenteditable="true" class="content">aersgoij</p></div>');
  this.pos_x;
  this.pos_y;
  this.container;

  var self = this;

  function initialize(selector, x, y) {

    self.pos_x = x;
    self.pos_y = y;
    self.container = selector;

    self.makeCustomizable();
  }

  this.makeCustomizable = function() {
    $(self.html).draggable({handle: ".header"});

    self.html.click(function(event) {
      event.stopPropagation();
      $target = $(event.target);

      if ($target.is(".delete")) {
        $(this).remove();
      }
    });
  }

  this.render = function() {
    self.html.css("top", self.pos_y).css("left", self.pos_x);
    self.html.appendTo(self.container);
  }

  initialize(selector, x, y);
};

$(document).ready(function() {
  Board.initialize('#board');
});



