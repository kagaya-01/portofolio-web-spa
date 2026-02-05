let isOpened = false;
function sidebar() { 
    const sidebarContainer = document.querySelector(".sidebar");
    const sidebarUl = document.getElementById("ul-sidebar");
    const sidebarBtn = document.querySelector(".close-icon");
    const line = document.querySelector(".line");

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
    }
}