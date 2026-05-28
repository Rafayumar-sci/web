


let a=[1,2,3,4,5,8,9,10];

console.log(a);

console.log(a[0]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);


a.push(11);
a.unshift(0);
a.pop();
a.shift();

a.map((a)=>{
    console.log(a);
});

const greet = ()=>{
    console.log("Hello World");
}

greet();

let even = a.filter((a)=>{
    return a%2==0;
});

console.log(even);

let  array=[

    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(array[1][2]);

let array3d=[

    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [
        [10,11,12],
        [13,14,15],
        [16,17,18]

    ]

]
console.log(array3d[1][2][0]);


// const students=[]

// for(let i=0;i<5;i++){
//    let name=prompt("Enter student name");
//    students.push(name);
// }


// console.log(students);

// DOM Manipulation

// document.write("hello world");

// const  rafay=document.getElementById("rafay");
// console.log(rafay);

// rafay.innerHTML="Hello Rafay"

const readcode=document.getElementById("usercode");
console.log(readcode);

readcode.innerHTML="Code is 3547486448";



