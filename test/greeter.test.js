const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Greeter', () => {
  it("should return greeting once it's changed", async () => {
    const Greeter = await ethers.getContractFactory('Greeter')
    const greeter = await Greeter.deploy('Hello, world!')
    await greeter.deployed()

    const greetingBeforeChange = await greeter.getGreeting()
    expect(greetingBeforeChange).to.equal('Hello, world!')
    console.log(`Greeting before change: ${greetingBeforeChange}`)

    const tx = await greeter.setGreeting('Hi, mom!')
    await tx.wait()

    const greetingAfterChange = await greeter.getGreeting()
    expect(greetingAfterChange).to.equal('Hi, mom!')
    console.log(`Greeting after change: ${greetingAfterChange}`)
  })
})
