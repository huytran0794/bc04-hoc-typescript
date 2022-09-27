console.log("Hello");

let account: string = "admin123";
let userAge: number = 2;

let isHoliday: boolean = true;
isHoliday = false;

// isHoliday = "yes" ==> false

let isMarried: null = null;
let is_Married: undefined = undefined;

// reference value: object, array


// advanced type
// interface
interface Todo {
    id: number;
    name: string;
    isComplete: boolean;
}

interface TodoChildren extends Todo {
    desc?: string;
}


let todo1: Todo = {
    id: 2,
    name: "Làm dự án cuối khóa",
    isComplete: false,
};

let todo2: Todo = {
    id: 3,
    name: "Capstone",
    isComplete: false,
}

let todo3: TodoChildren = {
    id: 4,
    name: 'Todo được kế thừa',
    isComplete: true,
    desc: "",
}


type User = {
    id: number;
    name: string;
    age: number;
};

let user1: User = {
    id: 11,
    name: 'alice',
    age: 2,
}

// interface vs type => ve doc


// let colors = ["black", "green", "blue"];


// Array<string> Generic

let colors: Array<string> = ['black', 'blue', 'green'];
colors.push("white");


// Array Todo generic
// cach 1
let todos: Array<Todo> = [
    {
        id: 2,
        name: "Làm dự án cuối khóa",
        isComplete: false,
    },
    {
        id: 3,
        name: "Làm dự án cuối khóa",
        isComplete: false,
    },
]

// cach2
let todos2: Todo[] = [
    {
        id: 2,
        name: "Làm dự án cuối khóa",
        isComplete: false,
    },
    {
        id: 3,
        name: "Làm dự án cuối khóa",
        isComplete: false,
    },
]


// union type


type ResponseTodoBE = null | Todo;
type ResponseUserBE = null | User;
type ResponseAgeBE = null | number;

let userAge1: ResponseAgeBE = null;
userAge1 = 1;

let details: null = null;
details = 2;
