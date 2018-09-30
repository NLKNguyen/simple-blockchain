let blockchain = new Blockchain();

// change hash of previous blocks in order to test error on previous hash
[0, 2, 4].map(height => {
  blockchain.getBlock(height)
    .then((block) => {
    const original = JSON.stringify(block).toString();

    let tamperedBlock = block;
    tamperedBlock.hash = 'BAD'; 

    const tampered = JSON.stringify(tamperedBlock).toString();
    const key = height.toString();

    // replace
    return blockchain.db.put(key, tampered).then(() => {
      console.log('')
      console.log('Block #' + height)
      console.log('Original: ' + original);
      console.log('Tampered: ' + tampered);
    });

  })
});

[5, 7, 9].map(height => {
  blockchain.getBlock(height)
    .then((block) => {
    const original = JSON.stringify(block).toString();

    let tamperedBlock = block;
    tamperedBlock.body = 'BAD'; // should yield "Wrong hash"
    // tamperedBlock.previousBlockHash = 'BAD'; // should yield "Wrong previous hash"

    const tampered = JSON.stringify(tamperedBlock).toString();
    const key = height.toString();

    // replace
    return blockchain.db.put(key, tampered).then(() => {
      console.log('')
      console.log('Block #' + height)
      console.log('Original: ' + original);
      console.log('Tampered: ' + tampered);
    });

  })
});


