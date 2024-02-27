function AutoSpin_SetupEventListeners(){
    //let button = document.getElementById("autoSpinButton");
    //button.addEventListener("mousedown", AutoSpin_Clicked());
    //button.addEventListener("click", AutoSpin_Toggle());
}

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

function AutoSpin_Clicked(){
    $("#autoSpinButton").addClass("clicked");
}

function AutoSpin_Unclicked(){
    $("#autoSpinButton").removeClass("clicked");
}