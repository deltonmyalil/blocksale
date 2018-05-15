pragma solidity ^0.4.18;

contract BlockSale {
    //state vars
    address seller;
    string name;
    string description;
    uint256 price;

    //sell an article
    function sellArticle(string _name, string _description, uint256 _price) public {
        seller = msg.sender; //msg.sender will give the address of the transaction calling seller
        name = _name;
        description = _description;
        price = _price;
    }
}
