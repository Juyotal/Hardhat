//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


import "hardhat/console.sol";

contract Inbox {
    string public message;

    constructor(string memory initialMessage){
        console.log("Deploying an Inbox with message:", initialMessage);
        message = initialMessage;
    }
    
    function setMessage(string memory newMessage) public {
        console.log("Changing inbox message from '%s' to '%s'", message, newMessage);
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}