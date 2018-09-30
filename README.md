Simple Blockchain
=================

A simple private Blockchain implemented using `Node.js` -- project @ Udacity's Blockchain Developer Nanodegree

    Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.


# Project Structure

* `simpleChain.js` contains Simple Blockchain definition and persistent database connection. This must be loaded before any Blockchain activity. All functionalities are  implemented using Promises in native Node.js (`v7.5.0`)

Due to the suggested development workflow in Node.js REPL (by the instructor), the following scripts are created for convenience in testing.

* `test_populateChain.js` populates sample data for the blockchain. `simpleChain.js` must be loaded first.
* `repl_populateChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_populateChain.js`. Previous persistent chain data will be deleted.

// TODO: screenshot

* `test_printChain.js` print all blocks in the blockchain. `simpleChain.js` must be loaded first.
* `repl_printChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_printChain.js`.

// TODO: screenshot

* `test_validateChain.js` checks which blocks are tampered. `simpleChain.js` must be loaded first.
* `repl_validateChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_validateChain.js`.

// TODO: screenshot

* `test_tamperChain.js` tampers some blocks in the blockchain. `simpleChain.js` must be loaded first.
* `repl_tamperChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_tamperChain.js`.

// TODO: screenshot

// TODO: screenshot

## Setup

```
$ npm install
```


## Sample Usage

```shell
$ ./repl_populateChain.sh

$ ./repl_printChain.sh

$ ./repl_validateChain.sh

$ ./repl_tamperChain.sh

$ ./repl_validateChain.sh
```
