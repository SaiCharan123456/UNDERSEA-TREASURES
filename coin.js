AFRAME.registerComponent ("coins", {
    init: function () {
        for (var i = 1; i <= 100; i++) {
            const id = 'coin${i}' 
        
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);

            var position = { x: posX, y: posY, z: posZ };
        

            this.createCoins(id, position);
        }
    },    
    createCoins: function (id, position) {
        var treasureEntity = document.querySelector("#bubble1");
        var coinEl = document.createElement("a-entity");

        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);
        
        coinEl. setAttribute("material", "color", "#ff9100");
        coinEl. setAttribute("geometry",{ primitive: "circle",radius: 5 });
        
        coinEl.setAttribute("animation", {        
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
        });
        
        treasureEntity.appendChild(coinEl);
    }
});
        
            