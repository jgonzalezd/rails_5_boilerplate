// Turbolinks - To disable remove the next two lines.
// https://github.com/turbolinks/turbolinks
// const Turbolinks = require("turbolinks");
// Turbolinks.start();

// Require https://github.com/rails/jquery-ujs
// require("jquery-ujs");

// import Hello from './components/hello';
// Import this if you wish to use CSS in your .vue files.
// See section below for more information.
// import "vueify/lib/insert-css";

let App = {
  init() {
      new Vue({
        el: '#root',
        data() {
          return {
            message: "Hello from Vue!"
          }
        }
      })
  }
}
module.exports = App;
