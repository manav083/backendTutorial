// built-in modules

const os = require('os');  //no need of ./

// info about current user

const user = os.userInfo();
// console.log(user);

// method return system uptime in seconds

// console.log(`The system uptime is ${os.uptime()} seconds`);

// about the system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


// console.log(currentOS);
