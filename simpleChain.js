/* ===== Persist data with LevelDB ======================
   Learn more: level: https://github.com/Level/level     
   ====================================================== */

const level = require('level');


/* ===== SHA256 with Crypto-js ===============================
   Learn more: Crypto-js: https://github.com/brix/crypto-js  
   =========================================================== */

const SHA256 = require('crypto-js/sha256');


/* ===== Block Class ======================
   Class with a constructor for block 		 
   ======================================== */

class Block{
  constructor(data){
    this.hash = "",
      this.height = 0,
      this.body = data,
      this.time = 0,
      this.previousBlockHash = ""
  }
}


/* ===== Blockchain Class =========================
   Class with a constructor for new blockchain 		
   ================================================ */

class Blockchain{
  constructor(){
    this.chainDB = './chaindata';
    this.db = level(this.chainDB);
  }

  dbAdd(block) {
    return this.db.put(block.height, JSON.stringify(block).toString());
  }

  // Add new block
  addBlock(newBlock){

    // Misc. function to set up a given block with appropriate height and generated values
    const augmentBlock = (block, height) => {
      // Reset values that shouldn't be set by client code
      block.previousBlockHash = '';

      // Block height
      block.height = height;
      // console.log('augmentBlock: height = ' + block.height);

      // Function to integrate creation time to a block
      const setTime = (block) => {
        block.time = new Date().getTime().toString().slice(0,-3); // UTC timestamp
      };

      // Function to integrate hash value to a block
      const setHash = (block) => {
        block.hash = SHA256(JSON.stringify(block)).toString();
      };

      if (height > 0) { // has previous block
        return new Promise((resolve, reject) => { 
          this.getBlock(height - 1)
            .then((previousBlock) => {
              block.previousBlockHash = previousBlock.hash;
              setTime(block);
              setHash(block);
              resolve(block);
            });
        }); 
      } else { // need to add genesis block first
        return new Promise((resolve, reject) => { 
          let genesis = new Block("First block in the chain - Genesis block");
          setTime(genesis);
          setHash(genesis);

          this.dbAdd(genesis)
            .then(() => {
              block.height += 1; // after the genesis
              block.previousBlockHash = genesis.hash;
              setTime(block);
              setHash(block);
              resolve(block);
            });

        });
      }

    };

    return this.getBlockHeight()
      .then(height => augmentBlock(newBlock, height))
      .then(finalBlock => this.dbAdd(finalBlock).then(() => finalBlock));
  }

  // Get block height
  getBlockHeight(){
    // return a promise of the last key as block height
    return new Promise((resolve, reject) => {
      let i = 0;
      this.db.createKeyStream()
        .on('data',  (data) => { i++; })
        .on('error', (err)  => { reject(err); })
        .on('close', ()     => { resolve(i);  });
    });

  }

  // get block
  getBlock(blockHeight){
    const key = blockHeight.toString();
    return this.db.get(key).then(value => JSON.parse(value));
  }

  // validate block
  validateBlock(blockHeight) {
    // return issue of a block at given height; or empty if no error detected
    return this.getBlock(blockHeight)
      .then(block => {
        // get block hash
        let blockHash = block.hash;

        // remove block hash to test block integrity
        block.hash = '';

        // generate block hash
        let validBlockHash = SHA256(JSON.stringify(block)).toString();

        if (blockHash !== validBlockHash) {
          return {[blockHeight] : 'Wrong hash'};
        } 
        else if (blockHeight > 0) { // // now consider validity of the previous hash
          return this.getBlock(blockHeight - 1)
            .then(previousBlock => {
              if (block.previousBlockHash !== previousBlock.hash) {
                return {[blockHeight] : 'Wrong previous hash'};
              } 
            });
        } 
      });
  }

  // Validate blockchain
  validateChain(){
    // return an array of blocks with issue; empty means no error is detected
    return this.getBlockHeight().then((height) => {
        const validations = []; // promises to fulfill
        for (let i = 0; i < height; i++) {
          validations.push(this.validateBlock(i));
        }
        return Promise.all(validations).then(results => results.filter(Boolean)); // only keep real values (remove empty values)
      });
  }

  // Print all block data
  printAllBlocks() {
    return new Promise((resolve, reject) => {
      console.log('');
      console.log('Chain #BEGIN');
      this.db.createReadStream()
        .on('data', data => { console.log('block: #' + data.key + ' :: ' + data.value); })
        .on('error', err => { reject(err); })
        .on('close', () => {
          console.log('Chain #END');
          console.log('');
          resolve();
        });
    });
  }
}

