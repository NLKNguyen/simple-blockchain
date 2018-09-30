let blockchain = new Blockchain();

console.log("Create new blockchain with sample data");

(function theLoop (i) {
  setTimeout(function () {
    let blockTest = new Block("Test Block #" + (i + 1));
    // console.log(blockTest);

    blockchain.addBlock(blockTest)
      .then(block => { 
        console.log(block);

        i++;
        if (i < 10) theLoop(i);
      })

  }, 500);
})(0);
