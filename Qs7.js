let initialProduction = 200;
let initialMachines = 6;
let productionPerMachine = initialProduction / initialMachines;

let additionalMachine = 2;
let totalMachine = initialMachines + additionalMachine;
let totalProductionAfterAddedMachine = productionPerMachine * totalMachine;
console.log(totalProductionAfterAddedMachine)

let UnsoldProducts = 3;
let remainingProducts = totalProductionAfterAddedMachine - UnsoldProducts;
console.log(remainingProducts);


// উত্তর: ২টি মেশিন যোগ করার পর মোট উৎপাদন হবে 266.67 টি এবং ৩টি পণ্য বিক্রি না হলে অবশিষ্ট পণ্য 263টি। 