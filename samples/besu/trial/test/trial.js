const Caller = artifacts.require("Caller");
const Receiver = artifacts.require("Receiver");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Caller", function (accounts) {
  it("should assert true", async function () {
    const CallerInstance = await Caller.deployed();
    const ReceiverInstance = await Receiver.deployed();
	var result = await CallerInstance.testCallFoo(ReceiverInstance.address);
    console.log('Result of testCallFoo', result);
    console.log('Result of testCallFoo DATA: ', result.logs[0].args.data);
	return assert.isTrue(true);
  });

});
