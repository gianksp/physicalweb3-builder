// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "https://raw.githubusercontent.com/smartcontractkit/chainlink/develop/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    string public response;
    string public baseUrl;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    
    /**
     * Network: Kovan
     * Oracle: 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8 (Chainlink Devrel   
     * Node)
     * Job ID: d5270d1c311941d0b08bead21fea7747
     * Fee: 0.1 LINK
     */
    constructor() {
        setPublicChainlinkToken();
        oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
        jobId = "d5270d1c311941d0b08bead21fea7747";
        fee = 0.1 * 10 ** 18; // (Varies by network and job)
    }
    
    function sendMessage(string calldata message) public returns (bytes32 requestId) 
    {
        require(bytes (baseUrl).length > 0, "Base URL must be set");
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
        string memory URI = string(abi.encodePacked(baseUrl, message));
        request.add("get", URI);

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }
    
    function fulfill(bytes32 _requestId, string calldata _response) public recordChainlinkFulfillment(_requestId)
    {
        response = _response;
    }

    function setBaseUrl(string calldata burl) public returns (string memory burlset) 
    {
        baseUrl = burl;
        return baseUrl;
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}

