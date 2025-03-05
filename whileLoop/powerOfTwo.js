// Print powers of 2 up to 2^n but stop at 256
const n = parseInt(process.argv[2]);
let i = 0, power = 1;

console.log(`Powers of 2 up to 2^${n} (max 256):`);
while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2;
    i++;
}
