#!/usr/bin/env node

const wait = (time) => new Promise((resolve) => { setTimeout(() => { resolve() }, time) });

const prettyColumns = (table) => {
    const DEFAULT_BUFFER = 5;
    const DEFAULT_ALIGNMENT = 'end';
    const DEFAULT_SPACER = ' ';

    let _setColLength = (table) => {

        const _getLengths = (lengths) => {
            for (let r in table){
                let row = table[r];
                let cols = Object.keys(row);

                for (let c in cols){
                    let col = row[c];
                    let content = col.content;
                    if(!lengths[c] || content.length > lengths[c]){
                        lengths[c] = content.length;
                    }
                }
            }
            return lengths;
        }

        const _setLengths = (table, lengths) => {
            for (let r in table){
                let row = table[r];
                let cols = Object.keys(row);

                for (let c in cols){
                    let col = row[c];
                    col.padding = (col.padding !== undefined) ? col.padding : lengths[c];
                }
            }
            return table;
        }

        return _setLengths(table, _getLengths({}));
    }

    let _printTable = (table) => {
        for (let r in table){
            let row = table[r];
            let cols = Object.keys(row);
            let output = '';

            for (let c in cols){
                let col = row[c];
                let content = col.content;
                let padding = (col.padding === 0) ? 0 : col.padding + DEFAULT_BUFFER;
                let alignment = col.alignment || DEFAULT_ALIGNMENT;
                let spacer = col.spacer || DEFAULT_SPACER;

                if(alignment === 'start'){
                    output += content.padStart(padding, spacer);
                }
                else{
                    output += content.padEnd(padding, spacer);
                }
            }

            console.log(output);
        }
    }

    _printTable(_setColLength(table));
}

module.exports = {
    wait,
    prettyColumns
}
