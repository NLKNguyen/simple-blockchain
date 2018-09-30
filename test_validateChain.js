let blockchain = new Blockchain();

blockchain.validateChain().then((issues) => {
  if (issues) {
    console.log('Invalid blocks:');
    console.log(issues);
  } else {
    console.log('All blocks are valid!');
  }
})

