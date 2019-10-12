
    if(bother_on){
        window.clearInterval(recurring_bother);
        bother_on = false;
    }
    else{
        recurring_bother = window.setInterval(bother, 7000);
        bother_on = true;
    }