function AutoSpin_On(){
    $("#autoSpinButton").removeClass("off");
    $("#autoSpinButton").addClass("on");
}

function AutoSpin_Off(){
    $("#autoSpinButton").removeClass("on");
    $("#autoSpinButton").addClass("off");
}

function AutoSpin_Toggle(){
    if ($("#autoSpinButton").hasClass("off"))
        AutoSpin_On();
    else
        AutoSpin_Off();
}