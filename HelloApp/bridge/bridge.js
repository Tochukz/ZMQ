const zmq = require('zeromq');

function runClient() {
  try {
    console.log("\x1b[32m", 'Connecting to hello world server...');

    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5555');
    setInterval(async () => {
        console.log("\x1b[32m", 'Sending Hello');
        await sock.send('Hello');
        const [result] = await sock.receive();
        console.log("\x1b[32m", 'Received', result.toString());
    }, 2000)
  } catch(err) {
    console.error("\x1b[31m", err);
  }
}

runClient();