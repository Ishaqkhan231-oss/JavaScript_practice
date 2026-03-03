// Object desructring 
const band = {
    bandName: "led zepplin",
    famouseSong: "stairway to heaven",
    year:1996,
    anotherFamouseSong:"Kshmir",
};
// const bandName = band.bandName;
// const famouseSong = band.famouseSong;
// console.log(bandName, famouseSong);
// // Object desructring shortcut
const {bandName , famouseSong, ...restprops } = band;
 
console.log(bandName);
console.log(restprops);