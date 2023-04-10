const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // We load the module rotate.js.
    rotate.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
