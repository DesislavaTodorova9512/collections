class DynamicArray {

    array = [];
    arrayCopy = [];
    аrrayLength = 0;

    constructor(input) {
        this.аrrayLength = input;
    }

    add(value) {
        if (this.array.length >= this.аrrayLength) {
            this.arrayCopy = [...this.array, ...this.array];
            return this.arrayCopy;
        } else {
            this.array.push(value);
            return this.array;
        }
    }

    remove(index) {
        this.array = this.array.filter((_, i) => i !== index);
        return this.array;
    }
}

const dynamicArray = new DynamicArray(3);

dynamicArray.add(1)
console.log(dynamicArray.array)
dynamicArray.add(2)
console.log(dynamicArray.array)
dynamicArray.add(3)
console.log(dynamicArray.array)
dynamicArray.remove(0)
console.log(dynamicArray.array)
