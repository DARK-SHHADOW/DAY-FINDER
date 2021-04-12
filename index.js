// var year = 2000;
// var date = 23;
var result = 0;
var k;
var flag = 0;
// var month = 09;
let btn = document.querySelector("#choose");
btn.onclick = function () {
    let date = document.querySelector("#datee").value;
    let month = document.querySelector("#monthh").value;
    let year = document.querySelector("#yearr").value;


    if (date == 29 && monyh == 2) {
        if (year % 4 != 0) {
            alert("THE DATE 29 FEB INS'T EXIST IN THIS YEAR");
        }
    }
    k = year % 100;
    result = k / 4;
    result = result + date;
    if (month == 1 || month == 10) {
        result = result + 1;
        if (1 <= date >= 31) {
            flag = 1;

        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA");

        }
    }
    if (month == 2) {
        result = result + 4;
        if (1 <= date >= 29) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA");

        }
    }
    if (month == 3) {
        result = result + 4;
        if (1 <= date >= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 11) {
        result = result + 4;
        if (1 <= date >= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 4) {
        result = result + 0;
        if (1 <= date >= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 7) {
        result = result + 0;
        if (1 <= date >= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 5) {
        result = result + 2;
        if (1 <= date >= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 6) {
        result = result + 5;
        if (1 <= date >= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 8) {
        result = result + 1;
        if (1 <= date >= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 9) {
        result = result + 6;
        if (1 <= date <= 30) {
            flag = 1;
            // flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 12) {
        result = result + 6;
        if (1 <= date >= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (year >= 2000) {
        result = result + 6;
    }
    result = result + k;
    result = result % 7;
    while (flag == 1) {

        switch (result) {
            case 1: alert("THE DAY IS -:SUNDAY:-");
                break;
            case 2: alert("THE DAY IS -:MONDAY:-");
                break;
            case 3: alert("THE DAY IS -:TUESDAY:-");
                break;
            case 4: alert("THE DAY IS -:WEDNESDAY:-");
                break;
            case 5: alert("THE DAY IS -:THURSDAY:-");
                break;
            case 6: alert("THE DAY IS -:FRIDAY:-");
                break;
            case 0: alert("THE DAY IS -:SATARDAY:-");
                break;
        }
        flag = 0;
    }
}
// alert("hello world ");
