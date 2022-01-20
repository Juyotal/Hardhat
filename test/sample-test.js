const { expect } = require("chai");
const { ethers } = require("hardhat");


// beforeEach(async () => {
//   const Inbox = await ethers.getContractFactory("Inbox");
//   const inbox = await Inbox.deploy("Hello, world!");
//   await inbox.deployed();


// });

describe("Inbox", () => {

  it("has a default message after construction", async function () {
    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Hello, world!");
    await inbox.deployed();
    expect(await inbox.getMessage()).to.equal("Hello, world!");

  });


  it("can change the message", async () => {
    const Inbox = await ethers.getContractFactory("Inbox");
    const inbox = await Inbox.deploy("Hello, world!");
    await inbox.deployed();
    
    const setMessageTxn = await inbox.setMessage("YoLo!");
    await setMessageTxn.wait();
    expect(await inbox.getMessage()).to.equal("YoLo!");
  });
});

