const { assert } = require("chai");

describe("Game2", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game2");
    const game = await Game.deploy();
    await game.deployed();
    await game.switchOn(20);
    await game.switchOn(47);
    await game.switchOn(212);

    // press all the right switches to win this stage

    await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
