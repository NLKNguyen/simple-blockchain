#!/bin/sh
echo  "Start Node REPL and validate blockchain data"

node -i -e "$(< ./simpleChain.js) $(< ./test_validateChain.js)"
