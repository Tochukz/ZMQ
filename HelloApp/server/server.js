const zmq = require('zeromq');

async function runServer() {
  const sock = new zmq.Reply();
  try {
    await sock.bind('tcp://*:5555');
    for await (const [msg] of sock) {
      console.log('Received ' + ': [' + msg.toString() + ']');
      await sock.send('World');
    }
  } catch(err) {
    console.error("\x1b[31m", err);
  }
}

runServer();