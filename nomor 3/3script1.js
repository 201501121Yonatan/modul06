var obj = {nama:"Agus"};

var greeting = function(a,b,c) {
    return "Selamat Datang " + this.nama + " ke " + a + " " + b + " di " + c;
};
console.log(greeting.call(obj, "Tambakreja", "Cilacap", "Jawa Tengah"));