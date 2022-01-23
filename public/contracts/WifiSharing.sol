// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract WifiSharing {
    
    string internal info;
    address public owner;
  
    constructor() { 
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner of this contract");
        _;
    }

    function setInfo(string calldata message) public onlyOwner {
        info = message;
    }

   function getInfo() public view returns(string memory data) {
        return info;
    }
}