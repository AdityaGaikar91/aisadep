// script.js
function SendMail() {
	var params = {
	from_name : document.getElementById("fullName").value,
	email_id : document.getElementById("email_if").value,
	message : document.getElementById("message").value
    }
    emailjs.send("service_46fquf8","template_1009uj5",params).then(function (res) {
    	alert("Success! " + res.status);
    })
}