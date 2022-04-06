const Caller = artifacts.require('Caller')
const Receiver = artifacts.require('Receiver')

module.exports = function (deployer) {
	deployer.deploy(Caller)
	deployer.deploy(Receiver)
}
