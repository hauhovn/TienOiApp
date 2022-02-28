export function SumJars(jars) {
    let sum = 0;
    jars.forEach(jar => {
        sum += jar.amount;
    });
    return sum;
}