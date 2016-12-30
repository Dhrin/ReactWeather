//var names = ['Andrew', 'Julie', 'Jen'];
//
//names.forEach(function (name) {
//   console.log('forEach', name); 
//});
//
//names.forEach((name) => {
//    console.log('arrowFunc', name);
//});
//
//names.forEach((name) => console.log(name));

//var returnMe = (name) => name + '!';
//
//console.log(returnMe('Dhrin'));

//var person = {
//    name: 'Dhrin',
//    greet: function () {
//        names.forEach((name) => {
//            console.log(this.name + ' says hi to ' + name)
//        });
//    }
//};
//
//person.greet();

//function add (a, b) {
//    return a + b;
//}

var addState = (a, b) => {
    return a+b;
}

var addEx = (a, b) => a+b;

console.log(addEx(1, 3));
console.log(addEx(9, 0));