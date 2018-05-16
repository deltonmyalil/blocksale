var BlockSale = artifacts.require("./BlockSale.sol");

//test suite
contract('BlockSale', function(accounts) {
	var blockSaleInstance;
	var seller = accounts[1];
	var articleName = "article 1";
	var articleDescription = "Description for article 1";
	var articlePrice = 10;

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

	it("should sell an article", function() {
		return BlockSale.deployed().then(function(instance) {
			blockSaleInstance = instance;
			return blockSaleInstance.sellArticle(articleName, articleDescription, web3.toWei(articlePrice, "ether"), {from: seller});
		}).then(function() {
			return blockSaleInstance.getArticle();
		}).then(function(data) {
			assert.equal(data[0], seller, "seller must be " + seller);
            assert.equal(data[1], articleName, "article name must be " + articleName);
            assert.equal(data[2], articleDescription, "article description must be " + articleDescription);
            assert.equal(data[3].toNumber(), web3.toWei(articlePrice, "ether"), "article price must be " + web3.toWei(articlePrice, "ether"));
		});
	});
});