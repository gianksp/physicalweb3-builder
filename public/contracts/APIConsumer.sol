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
    
    constructor() {
        // setPublicChainlinkToken();
        setChainlinkToken(0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846);
        oracle = 0xCC80934EAf22b2C8dBf7A69e8E0D356a7CAc5754;
        jobId = "5ca4fa9b2d64462290abfbda84e38cf4";
        fee = 0.1 * 10 ** 18; // (Varies by network and job)
        baseUrl="http://0218-86-45-255-5.ngrok.io?msg=";
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
