document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", function () {
        const input = document.getElementById("elems").value;
        alert(input);
    });
});
