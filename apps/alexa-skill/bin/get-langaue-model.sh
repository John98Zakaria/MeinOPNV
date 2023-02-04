mkdir -p temp
ask smapi get-interaction-model --skill-id amzn1.ask.skill.89f9587f-84f1-4005-9478-f0844a5221f1 --stage development --locale de-DE > temp/server-model.json && sleep 2
ts-node-esm bin/json-to-const.ts deModel ./temp/server-model.json ./src/de-model.ts
