var BlockSale = artifacts.require("./BlockSale.sol");

//test suite
contract('BlockSale', function(accounts) {
	it("should be initialized with empty values", function() {
		return BlockSale.deployed().then(function(instance) {
			return instance.getArticle();
		}).then(function(data) { //data[] contains seller, name, desc, price
			assert.equal(data[0], 0x0, "seller must be empty"); //address is 0x0
			assert.equal(data[1], "", "article name must be empty"); //"" means empty
			assert.equal(data[2], "", "article description must be empty");
			assert.equal(data[3].toNumber(), 0, "article price must be zero"); //convert big number to number and it must be 0
		})
	});
});