const { assert } = require("chai");

describe("Game4", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();

    const signer = ethers.provider.getSigner(0);
    const address = await signer.getAddress();

    const signer2 = ethers.provider.getSigner(1);
    const address2 = await signer2.getAddress();

    await game.deployed();
    await game.write(address2);
    await game.connect(signer).write(address2);

    // nested mappings are rough :}

    await game.connect(signer2).win(address);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
