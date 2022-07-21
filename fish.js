// Registering component in Collider.js
AFRAME.registerComponent("flying-fishs", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables
        var posX = Math.floor(Math.random() * 3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.flyingFishs(id, position);
      }
    },
    flyingFishs: (id, position) => {
      //Get the terrain element
      var terrainEl = document.querySelector("#island");
  
      //creating the fish model entity
      var fishEl = document.createElement("a-entity");
  
      //Setting multiple attributes
      fishEl.setAttribute("id", id);
  
      fishEl.setAttribute("position", position);
      //fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
  
      fishEl.setAttribute("gltf-model", "P154/fish/scene.gltf");
  
      //animated models
      fishEl.setAttribute("animation-mixer", {});
  
      //append the fish entity as the child of the terrain entity
      terrainEl.appendChild(fishEl);
    }
  });
  
  
  