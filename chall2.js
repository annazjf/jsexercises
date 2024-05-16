function sAddress(){
    console.log("Made it")
    let same = document.querySelector("#sameAddress").checked
    let bill = document.querySelector("#bill")
    let home = document.querySelector("#home")
    if (same == true){
        home.value = bill.value
        home.disabled = true
    }
    else {
        home.disabled = false
    }
}

