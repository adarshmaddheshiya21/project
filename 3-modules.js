
const os = require('os');

const user = os.userInfo();
// console.log(user);

const release = os.release();
console.log(release);

console.log(os.tmpdir())
console.log(os.hostname());

// System uptime in seconds 
console.log(os.uptime());

const currentOs = {
    name: os.type(),
    rlease: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);

