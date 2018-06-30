///// cara pembagian volume

var panjang = 1200
var lebar = 250
var tinggi = 300

var volumeBola = 131

var volume = panjang*lebar*tinggi

console.log(volume/volumeBola)

///// cara looping

var banyak = 0

var volumeAwal = 0

while (volumeAwal < volume) {
    volumeAwal += 131
    banyak++
}

console.log(banyak)
