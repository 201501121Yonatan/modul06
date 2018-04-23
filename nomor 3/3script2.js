var obj = {nama:"Agus"};

var greeting = function(a,b,c) {
    return "Selamat Datang " + this.nama + " ke " + a + " " + b + " di " + c;
};

var bound = greeting.bind(obj);

console.dir(bound);
console.log("Output using .bind() below");
console.log(bound("Tambakreja", "Cilacap", "Jawa Tengah"));