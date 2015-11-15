/**
 * Created by alex on 15.10.2015.
 */

class A {

    get val() {
        return "val_A"
    }

    xxx() {
        console.log(this.val);
    }
}

export default class B extends A {

    constructor(props) {
        super(props);
    }

    get fn() {
        return e=>this.val;
    }

    get val() {
        return super.val + " val_B"
    }

    xxx() {
        //super.xxx()
        console.log(this.val);
    }
}

