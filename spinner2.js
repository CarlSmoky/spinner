
const chars = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let ms = 100;
for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    i === chars.length - 1 ? console.log(chars[i]) : process.stdout.write(chars[i]);
  }, ms += 200);
}