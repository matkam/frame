const geth = require('./geth')
const ipfs = require('./ipfs')

module.exports = {
  stop: () => {
    geth.stop()
    ipfs.stop()
  },
  update: (name, on) => {
    console.log('services update ' + name + ' ' + on)
    if (name === 'node') {
      if (on) {
        // Check if node is running
        // if it is, call node.restart
        // else
        geth.start()
      } else {
        geth.stop()
      }
    } else if (name === 'ipfs') {
      if (on) {
        // Check if ipfs is running
        // if it is, call node.restart
        // else
        ipfs.start()
      } else {
        ipfs.stop()
      }
    }
  }
}