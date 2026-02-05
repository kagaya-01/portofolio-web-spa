function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value || "No Subject";
    const message = document.getElementById("message").value;

    // ubah ke alamat email kamu
    const receiver = "hibbanyama@gmail.com";

    // encode agar teks terbaca di URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(receiver)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nama: " + name + "\nEmail: " + email + "\n\nPesan:\n" + message)}`;

    // buka Gmail di tab baru
    window.open(gmailLink, "_blank");
}