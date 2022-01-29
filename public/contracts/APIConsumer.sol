// SPDX-License-Identifier: MIT
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * PLEASE DO NOT USE THIS CODE IN PRODUCTION.
 */
contract RESTInvoker is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    mapping(address => string) public uris;
    mapping(address => string) public paths;

    uint256 public r;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() {
        setChainlinkToken(0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846);
        oracle = 0xD2DE9f0bBe99C7100f8456548cDDb33103122e57;
        jobId = "3be403cbdf8544aa80d923dc1f0bc2ac";
        fee = 0.01 * 10 ** 18;
    }

    function sendMessage(string calldata msgTxt) public returns (bytes32 requestId) 
    {

        require(bytes (uris[msg.sender]).length > 0, "Base URL must be set");
        require(bytes (paths[msg.sender]).length > 0, "Path must be set");
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        request.add("path", paths[msg.sender]);
        string memory base = uris[msg.sender];
        string memory uriT = string(abi.encodePacked(base, msgTxt));
        request.add("get", uriT);
        
        
        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }
    
    function setBaseUrl(string calldata uri, string calldata path) public
    {
        uris[msg.sender] = uri;
        paths[msg.sender] = path;
    }

    /**
     * Receive the response in the form of uint256
     */ 
    function fulfill(bytes32 _requestId, uint256 _val) public recordChainlinkFulfillment(_requestId)
    {
        r = _val;
    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}