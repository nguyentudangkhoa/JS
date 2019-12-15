var arr = [{name: 'khoa' , class:16}, {name: 'Tan',class:17},{name: 'Tan',class:17}];
var arrFilter = arr.filter((x)=>{
    return x.class > 16;
});
console.log(arrFilter);