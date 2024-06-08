"use strict";
const tableRows = [
    ...document.querySelector("table").rows
];
const columnIndexCopy = 1;
const columnIndexPaste = 4;
tableRows.forEach((row)=>{
    if (row.cells.length <= columnIndexCopy || row.cells.length < columnIndexPaste) throw new Error("Table does not have enough cells");
    const dupNode = row.cells[columnIndexCopy].cloneNode(true);
    row.insertBefore(dupNode, row.cells[columnIndexPaste]);
});

//# sourceMappingURL=index.f75de5e1.js.map
