const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://127.0.0.1:1883');

client.on("connect", function() {
    setInterval(function() {
        var random = Math.random()*50;
        console.log(random);
        if(random<30) {
            client.publish('vitorihaldijiran', 'Water Monitoring MQTT : ' +random.toString() + '.')
        }
    }), 30000;

});