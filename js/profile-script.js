function validateForm() {
    var currentTime = new Date().toLocaleString(); // Get the current time
    var name = document.forms ["message-form"] ["name"] .value;
    var dob = document.forms ["message-form"] ["dob"] .value;
    var gender = document.forms ["message-form"] ["gender"] .value;
    var message = document.forms ["message-form"] ["message"] .value;

    if (name == "" || dob == "" || gender == "" || message == "") {alert ("Tidak boleh ada yang kosong");
    return false;}


setSenderUI (currentTime, name, dob, gender, message);

return false;
}

function setSenderUI (currentTime, name, dob, gender, message) {
    document.getElementById("current-time").innerText = currentTime; // Display the submission time
    document.getElementById("sender-name") .innerText = name;
    document.getElementById("sender-dob") .innerText = dob;
    document.getElementById("sender-gender") .innerText = gender;
    document.getElementById("sender-message") .innerText = message;
}