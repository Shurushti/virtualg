// app.js

// Add interactivity to a 3D model
AFRAME.registerComponent('clickable', {
  init: function () {
    this.el.addEventListener('click', function () {
      console.log('You clicked the model!');
    });
  }
});
