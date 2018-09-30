#!/bin/sh

echo "Delete existing blockchain database"
rm -rf chaindata/

echo ""

echo  "Start Node REPL and populate new blockchain data"
node -i -e "$(< ./simpleChain.js) $(< ./test_populateChain.js)"
