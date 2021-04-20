var mqtt = require('mqtt')
var options = {
  port: '1883',
  username: 'admin:8a067e',
  password: '8a067e',
};
var client  = mqtt.connect('mqqt://10.211.8.219', options)

console.log('inicio do programa');

client.on('connect', function () {
  console.log('conectou');
  client.subscribe('admin:8a067e/config');

  setInterval(function() {
    valor = getRandomArbitrary(1, 100);
    valor2 = getRandomArbitrary(1, 100);
    client.publish("admin:8a067e/attrs", '{"temperatura":'+ valor +'}');
    client.publish("admin:8a067e/attrs", '{"umidade":'+ valor2 +'}');
  }, 2000);
});

client.on('message', function (topic, message) {
  console.log("msg recebida => " + message.toString());
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
