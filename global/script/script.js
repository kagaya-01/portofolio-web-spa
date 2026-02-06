// SIDEBAR
let isOpened = false;
function sidebar() { 
    const sidebarContainer = document.querySelector(".sidebar");
    const sidebarUl = document.getElementById("ul-sidebar");
    const sidebarBtn = document.querySelector(".close-icon");
    const line = document.querySelector(".line");
    const overlay = document.querySelector(".overlay");

    if (!isOpened) {
        isOpened = true;
        sidebarContainer.style.setProperty('left', '0');
        sidebarUl.style.setProperty('display', 'block');
        sidebarContainer.style.setProperty('backdrop-filter', 'blur(var(--backdrop-value))');
        sidebarBtn.style.setProperty("--rotate-before", "rotate(45deg)");
        sidebarBtn.style.setProperty("--rotate-after", "rotate(-45deg)");
        sidebarBtn.style.setProperty("--bottom", "0");
        sidebarBtn.style.setProperty("--top", "0");
        line.style.setProperty("opacity", "0");
        overlay.style.setProperty('display', 'block');
    }

    else if(isOpened) { 
        isOpened = false;
        sidebarContainer.style.setProperty('left', '-10rem');
        sidebarContainer.style.setProperty('backdrop-filter', 'blur(0px)');
        sidebarBtn.style.setProperty("--rotate-before", "rotate(0deg)");
        sidebarBtn.style.setProperty("--rotate-after", "rotate(0deg)");
        sidebarBtn.style.setProperty("--bottom", "1rem");
        sidebarBtn.style.setProperty("--top", "1rem");
        line.style.setProperty("opacity", "1");
        setTimeout(() => {
            sidebarUl.style.setProperty('display', 'none');
        }, 100);
        overlay.style.setProperty('display', 'none');
    }
}

// SEND EMAIL
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