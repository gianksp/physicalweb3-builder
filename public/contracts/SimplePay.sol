// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

/// @title Pay - Facilitates payments.
contract SimplePay {

    address payable public beneficiary;
    
    event Payment(
        address _from,
        address _to,
        uint amount
    );

    constructor()public { 
        beneficiary = payable(msg.sender);
    }

    /// @dev Makes a payment.
    function pay() public payable {
        require(msg.value > 0);
        beneficiary.transfer(msg.value);
        emit Payment(msg.sender, beneficiary, msg.value);
    }
}