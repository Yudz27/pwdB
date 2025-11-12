function fn_ValForm() {
    var sMsg = "";
    var syarat = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;
    var email = document.getElementById("email").value;

    if (document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (document.getElementById("name").value == "" || !syarat.test(email)) {
        sMsg += "\n* Email belum diisi atau format tidak valid";
    }

    if (document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        alert("Form berhasil dikirim!");
        return true;
    }
}
