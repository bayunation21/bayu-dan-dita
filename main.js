// Fungsi untuk mengirim pesan cinta
function kirimPesan() {
    const inputPesan = document.getElementById("inputPesan").value;
    const message = document.getElementById("message");
    
    if (inputPesan) {
        message.innerHTML = `<p>${inputPesan}</p>`;
        buatHati();
        document.getElementById("inputPesan").value = ""; // Mengosongkan input setelah mengirim
    } else {
        alert("Tolong ketik pesan cinta terlebih dahulu!");
    }
}

// Fungsi untuk membuat animasi hati yang melayang
function buatHati() {
    const heartsContainer = document.getElementById("heartsContainer");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerHTML = "💖";
    
    heartsContainer.appendChild(heart);

    // Menghapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
