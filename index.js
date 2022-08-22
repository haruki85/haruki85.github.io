const Peer = require('skyway-js');
const peer = new Peer({key: 'fa187ece-1636-4883-8218-2d44c8697d61'});


peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
});

const mediaConnection = peer.call("peerID", MediaStream,{videoBandwidth: 6000});



