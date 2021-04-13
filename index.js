// var year = 2000;
// var date = 23;
var result;
var k;
var flag = 0;
// var month = 09;
let btn = document.querySelector("#choose");
btn.onclick = function () {
    var date = document.querySelector("#datee").value;
    var month = document.querySelector("#monthh").value;
    var year = document.querySelector("#yearr").value;


    if (date == 29 && month == 2) {
        if (year % 4 != 0) {
            alert("THE 29 FEB ISN'T EXIST IN THIS YEAR %d", year);
        }

    }


    k = year % 100;
    var x = k / 4;
    var y = Math.floor(x);

    result = y + date;
    // alert(result);

    if (month == 1 || month == 10) {
        result = result + 1;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 2) {
        result = result + 4;
        if (1 <= date && date <= 29) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 3) {
        result = result + 4;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 11) {
        result = result + 4;
        if (1 <= date && date <= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 4) {
        result = result + 0;
        if (1 <= date && date <= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 7) {
        result = result + 0;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 5) {
        result = result + 2;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 6) {
        result = result + 5;
        if (1 <= date && date <= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 8) {
        result = result + 1;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 9) {
        result = result + 6;
        if (1 <= date && date <= 30) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (month == 12) {
        result = result + 6;
        if (1 <= date && date <= 31) {
            flag = 1;
        } else {
            flag = 0;
            alert("PLEASE ENTER THE VALID DATA ");
        }
    }
    if (year % 4 == 0) {
        if (month == 1 || month == 2) {
            result = result - 1;
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

        break;
    }
}
// alert("hello world ");
