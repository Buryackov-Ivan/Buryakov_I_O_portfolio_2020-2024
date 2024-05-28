document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1000);
});

// Рабочий код для раскрывающихся разделов

document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.paddingTop = "0";
                panel.style.paddingBottom = "0";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.paddingTop = "18px";
                panel.style.paddingBottom = "18px";
            }
        });
    }
});