interface iUser{
    name: string;
    age: number;
    isMale: boolean; // ; , doesnt matter but ; is recommended for interface and , is recommended for type, 
        // both are optional tho
        // also interface is recommended for object types and type is recommended for union types
    startTrail : () => string; // function/method type
    // startTrail () : string; // same as above but with different syntax
    getCoupon : (discount:number) => string; // function types
}

// adding in interface
 interface iUser{
     email:string;
    } //while this cant be done in type 

let imUser:iUser = {
    name: 'John',
    age: 30,
    email: 'xyz',
    isMale: true,
    startTrail(){
        return 'trial started';
    },
    getCoupon(discount:number){
        return `coupon of ${discount}% applied`;
    }
}

interface iAdmin extends iUser{
    role: string;
}


// after class module (9_classes.ts)


interface TakePhoto{
    camera: string;
    pixel: number;
    mode: string;
    takePhoto(): void;
}

class mobile implements TakePhoto {
    constructor(
        public os: string,
        public camera: string,
        public pixel: number,
        public mode: string
    ){}

    takePhoto(){
        console.log('photo taken');
    }
}

let mobile1 = new mobile('android','sony',12,'auto');

mobile1.takePhoto(); // photo taken

// it ensures that the object contains the properties and methods of the interface
