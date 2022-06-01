const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('SimpleStorage', () => {
  it('should return message and x once they are changed', async () => {
    const SimpleStorage = await ethers.getContractFactory('SimpleStorage')
    const simpleStorage = await SimpleStorage.deploy('Hello', 0)
    await simpleStorage.deployed()
    console.log(`SimpleStorage deployed at ${simpleStorage.address}`)

    const initialMessage = await simpleStorage.message()
    expect(initialMessage).to.equal('Hello')
    console.log(`Initial message: ${initialMessage}`)
    const initialX = await simpleStorage.x()
    expect(initialX).to.equal(0)
    console.log(`Initial x: ${initialX}`)

    const tx = await simpleStorage.setData('Hi', 1)
    await tx.wait()

    const newMessage = await simpleStorage.message()
    expect(newMessage).to.equal('Hi')
    console.log(`New message: ${newMessage}`)
    const newX = await simpleStorage.x()
    expect(newX).to.equal(1)
    console.log(`New x: ${newX}`)
  })
})
