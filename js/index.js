function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

for (let year = 1900; year <= 2100; year++) {
    if (isLeapYear(year)) {
        console.log(`${year} - високосний рік`);
    } else {
        console.log(`${year} - не високосний рік`);
    }
}
