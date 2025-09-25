console.log(this);

function test() {
    console.log(this);
}

const test2 = () => {
    console.log(this);
}

const dog = {
    bark: function () {
        console.log(this);
    },
    bark2: () => {
        console.log(this);
    }
}

test();
test2();
dog.bark();
dog.bark2();