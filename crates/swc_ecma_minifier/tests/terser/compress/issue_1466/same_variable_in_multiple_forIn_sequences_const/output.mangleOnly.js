var o = [
    "a",
    "b",
    "c"
];
for(const n in o){
    console.log(n);
    let c;
    c = [
        "e",
        "f",
        "g"
    ];
    for(const f in o){
        console.log(f);
    }
}
