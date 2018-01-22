function toggle(someId) {
    let someElem = document.getElementById(someId);
    someElem.className = someElem.className == 'hidden' ? 'nothidden' : 'hidden';
}