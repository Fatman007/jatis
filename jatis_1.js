var cariPrima = [], n = 2, banyak = 100, piramid = ''; // masukin banyak jumlah bilangan prima di var banyak

do if (isPrime(n++)) cariPrima.push(n - 1);
while (cariPrima.length < banyak);

function isPrime(n) {
    var pangkat = Math.sqrt(n);

    for (var i = 2; i <= pangkat; i++)
        if (n % i === 0) return false;
    return true;
}

for (x=1 ; x<(banyak) ; x++) {
            for ( y=1 ; y<=x ; y++){
                piramid += cariPrima.shift()+' '
                
            }
            piramid += '\n'
        }

console.log(piramid.replace(/undefined/gi, ''))