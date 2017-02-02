(function() {

  /* Build canvas functionality
  Follow example by Brandon Ferioli https://codepen.io/bferioli/pen/qEGaPp */

  /* Define object that contains all information regarding falling
  objects and methods for initialising, drawing and moving objects on the canvas  */
  var FallingObjBackground = {
    objectHeight: 65,
    objectWidth: 60,
    objects: [],
    objectImage: '',
    maxFallingObj: 8,
    minScale: 0.4,
    draw: function() {
      this.setCanvasSize();
      this.ctx.clearRect(0, 0, this.w, this.h);
      for (var i = 0; i < this.objects.length; i++) {
        var object = this.objects[i];
        object.image = new Image();
        object.image.style.height = object.height;
        object.image.src = this.objectImage;
        this.ctx.globalAlpha = object.opacity;
        this.ctx.drawImage (object.image, object.x, object.y, object.width, object.height);
      }
      this.move();
    },
    move: function() {
      for(var b = 0; b < this.objects.length; b++) {
        var object = this.objects[b];
        object.y += object.ys;
        if(object.y > this.h) {
          object.x = Math.random() * this.w;
          object.y = -1 * this.objectHeight;
        }
      }
    },
    setCanvasSize: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.w = this.canvas.width;
      this.h = this.canvas.height;
    },
    initialize: function(imageSource) {
      this.canvas = $('#canvas')[0];
      this.objectImage = imageSource
      console.log(this);
      if(!this.canvas.getContext)
        return;

      this.setCanvasSize();
      this.ctx = this.canvas.getContext('2d');

      for(var a = 0; a < this.maxFallingObj; a++) {
        var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
        this.objects.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          ys: Math.random() + 1,
          height: scale * this.objectHeight,
          width: scale * this.objectWidth,
          opacity: scale
        });
      }

      function setTimedInterval(callback, repeat, timeout) {
        var interval = window.setInterval(callback, repeat);
        window.setTimeout(function(){
            window.clearInterval(interval);
        }, timeout);
      }

      // start setInterval that repeats every 10ms and stops after 3s
      setTimedInterval($.proxy(this.draw, this), 10, 5000);
    }
  };

  $(document).ready(function(){
    // initialise canvas drawing
    FallingObjBackground.initialize('../assets/icons/pin-black.png');
    // make all sticky notes appear one after the other
    $('.sticky-note').each(function(index) {
      console.log(index,this);
      $(this).hide().delay(800*index).fadeIn(1000);
    });
  });

})()
