Simple Blockchain
=================

A simple private Blockchain implemented using `Node.js` -- project @ Udacity's Blockchain Developer Nanodegree

> Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.

![getty_847491206_20001000200092802_361305](https://user-images.githubusercontent.com/4667129/46251722-f9d77280-c40f-11e8-8d9a-4aa4388a733e.jpg)

```
                                                                                        (Getty Images)
```

# Project Structure

* `simpleChain.js` contains Simple Blockchain definition and persistent database connection. This must be loaded before any Blockchain activity. All functionalities are  implemented using Promises in native Node.js (`v7.5.0`)

Due to the suggested development workflow in Node.js REPL (by the instructor), the following scripts are created for convenience in testing.

* `test_populateChain.js` populates sample data for the blockchain. `simpleChain.js` must be loaded first.
* `repl_populateChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_populateChain.js`. Previous persistent chain data will be deleted.

<img width="824" alt="screen shot 2018-09-29 at 4 58 31 pm" src="https://user-images.githubusercontent.com/4667129/46251688-f1cb0300-c40e-11e8-9787-0901df14335b.png">

* `test_printChain.js` print all blocks in the blockchain. `simpleChain.js` must be loaded first.
* `repl_printChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_printChain.js`.

<img width="895" alt="screen shot 2018-09-29 at 5 00 08 pm" src="https://user-images.githubusercontent.com/4667129/46251689-f1cb0300-c40e-11e8-9747-ac06c44953c9.png">

* `test_validateChain.js` checks which blocks are tampered. `simpleChain.js` must be loaded first.
* `repl_validateChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_validateChain.js`.

<img width="827" alt="screen shot 2018-09-29 at 5 00 47 pm" src="https://user-images.githubusercontent.com/4667129/46251690-f1cb0300-c40e-11e8-8242-8277851efee8.png">

* `test_tamperChain.js` tampers some blocks in the blockchain. `simpleChain.js` must be loaded first.
* `repl_tamperChain.sh` (UNIX shell) opens Node.js REPL and runs `simpleChain.js` then `test_tamperChain.js`.

<img width="862" alt="screen shot 2018-09-29 at 5 14 21 pm" src="https://user-images.githubusercontent.com/4667129/46251691-f2639980-c40e-11e8-8aa0-5a2bf16fc49b.png">


<img width="837" alt="screen shot 2018-09-29 at 5 14 58 pm" src="https://user-images.githubusercontent.com/4667129/46251693-f2639980-c40e-11e8-8019-7ce29e0a4f69.png">


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

# License MIT

Copyright © Nikyle Nguyen
