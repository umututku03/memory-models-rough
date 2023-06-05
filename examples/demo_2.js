const { MemoryModel } = require("../dist/memory_models_rough.node")

const m1 = new MemoryModel({ width: 1300, height: 1100 })
const m2 = new MemoryModel({ width: 1300, height: 1100 })

// A sample list of objects to be used as an argument for the 'drawAll' function.
const objs = [
    {isClass: true, x: 10, y:10, name: "Person", id: 99, value: {age: 12, name: 17}, stack_frame: false},
    {isClass: true, x: 10, y:350, name: "__main__", id: 82, value: {a: 31, b: 27}, stack_frame: true},
    {isClass: false, x: 10, y: 600, name: "list", id: 82, value: [19, 43, 28, 49]},
    {isClass: false, x: 350, y: 10, name: "list", id: 82, value: [32, 10, 90, 57], show_indexes: true}
]

// -----------------------Demonstration of the 'MemoryModel.drawAll' method-----------------------
m1.drawAll(objs);
m1.save("../docs/images/demo_2A.svg")

// -----------------------Demonstration of the 'MemoryModel.createFromJSON' method-----------------------
// creating a MemoryModel by calling the 'createFromJSON' with the 'sample_json.json' file.
m2.createFromJSON("../docs/sample_json.json");
m2.save("../docs/images/demo_2B.svg"); // saving the resulting MemoryModel object as an svg.