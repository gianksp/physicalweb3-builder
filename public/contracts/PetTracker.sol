// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract PetTracker {
    
    string internal petInfo;
    address payable public owner;
  
    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner of this contract");
        _;
    }

    function setPetInfo(string calldata message) public onlyOwner {
        petInfo = message;
    }

    function getPetInfo() public view returns(string memory data) {
        return petInfo;
    }
}