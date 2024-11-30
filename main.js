const battleship = {
   //creating battleship grids
   createElement(element, id) {
      const container = document.createElement(element);
      container.classList.add("mainBox");
      container.id = id;
      document.body.appendChild(container);
   },

   init() {
      //creates the grids for both players
      this.createElement("div", "humanPlayer");
      this.createElement("div", "computerPlayer");
   },
};

battleship.init();
