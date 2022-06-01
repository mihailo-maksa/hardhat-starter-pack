// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract SimpleStorage {
  string public message;
  uint public x;
  address public owner;

  event Log(address indexed caller, string message, uint num);

  constructor(string memory _message, uint _x) {
    message = _message;
    x = _x;
    owner = msg.sender;
  }

  receive() external payable {
    payable(owner).transfer(msg.value);
    emit Log(msg.sender, "receive triggered", msg.value);
  }

  fallback() external {
    emit Log(msg.sender, "fallback triggered", x);
  }

  function setData(string calldata _message, uint _x) public returns(bool, uint) {
    message = _message;
    x = _x;
    emit Log(msg.sender, message, x);
    return (true, x);
  }
}
