var test = 'aaacccceddddsssffffff'; // ganti kata2 nya

var kali = 2 // masukkan angka maskimal pengulangan

var tulisan = ''

var satuKata = Array.from(new Set(test)).join('');

if (kali == 1) {
    console.log(satuKata)
}

else if (kali <= 0) {
    console.log('')
}

else {
    var hasil = Array.from(new Set(test))
    // console.log(hasil)
    for (x=0 ; x<hasil.length ; x++) {

        var baru = `${hasil[x]}`.repeat(kali)

        if (test.includes(`${baru}`) ) {
            tulisan += baru
        }

        else {
            tulisan += hasil[x]
        }
    }

    console.log(tulisan)
}

