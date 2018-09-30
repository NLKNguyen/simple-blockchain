#!/bin/sh

echo  "Start Node REPL and print out blockchain data"
node -i -e "$(< ./simpleChain.js) $(< ./test_printChain.js )"
