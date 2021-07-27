class IndexGenerator
{
    constructor(name){
        this.name = name;
        this.increment();
    }

    increment(){
        IndexGenerator.indexes[this.name] = (IndexGenerator.indexes[this.name] || 0) + 1;
        this.index = IndexGenerator.indexes[this.name];
    }

    getIndex(){
        return this.index;
    }

    append(base, addName){
        return (addName? this.name: "") + base + this.index;
    }

}

IndexGenerator.indexes = {};