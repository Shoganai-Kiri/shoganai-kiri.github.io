
function agegen(){
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth();
    var day=now.getDay();
    var age=year-2003;
    var month_b=4;
    var day_b=17;
    if (month<month_b || (month==month_b && day<day_b)) {
        age--;
    }
    return age;
}


