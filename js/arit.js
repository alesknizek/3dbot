var A = 10;
var B = 10;
var C = 10;

function windowOnload() {

}

function aritmetic() {
    /*posbírají se data z formuláře*/
    A = document.getElementById("osax").value;
    B = document.getElementById("osay").value;
    C = document.getElementById("osaz").value;
    console.log(A);
    console.log(B);
    console.log(C);
    /*délka prvního segmentu robota*/
    var ramenoA = 200;
    /*délka druhého segmentu robota*/
    var ramenoB = 100;
    if (A > 200 || A == 0) {
        document.getElementById("osaxE").innerHTML = "číslo musí větší než 0 a zároveň musí být menší než 200";
    } else {
        document.getElementById("osaxE").innerHTML = "";
        /*počítá se úhel pomocí cosinuse*/
        var D = new Big(A);
        D = D.div(200);
        console.log(D + "tady bude číslo s bigu");
        var E = Math.acos(D);
        E = Big(E);
        console.log(E + " zde se nachází asin")
        E = E.times(180.00000000000000000000000000000);
        E = E.div(Math.PI);
        console.log(E);
        /*počítá se výška do které rameno bude dosahovat*/
        var v1 = Math.pow(200, 2) - Math.pow(A, 2);
        v1 = Math.sqrt(v1);
        console.log(v1 + "v1");
        /*odečte se od celkové požadované výšky*/
    }
    if (B > 100 || B == 0) {
        document.getElementById("osayE").innerHTML = "číslo musí být větší než 0 a zároveň musí být menší než" + ramenoB;
    } else {
        document.getElementById("osayE").innerHTML = "";
    }

}