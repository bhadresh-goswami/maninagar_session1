// class arrayExample{
function checkEven(element, index, array) {
    return (element % 2 == 0 ? true : false);
}
function withArray() {
    var arr = [3, 4, 2, 3, 34, 56, 4, 35, 65, 4];
    var evenArray = arr.filter(checkEven);
    console.log(evenArray);
}
// }
withArray();
