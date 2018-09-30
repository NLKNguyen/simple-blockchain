#!/bin/sh

echo  "Start Node REPL and provide blockchain context"
node -i -e "$(< ./simpleChain.js) $(< ./test_simpleChain.js )"
