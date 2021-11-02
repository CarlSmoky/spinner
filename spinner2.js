
const char = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let ms = 100;
for (let i = 0; i < char.length; i++) {
  setTimeout(() => {
    i === char.length - 1 ? console.log(char[i]) : process.stdout.write(char[i]);
    // if (i === char.length - 1) {
    //   console.log(char[i]);
    // } else {
    //   process.stdout.write(char[i]);
    // }
  }, ms += 200);
}