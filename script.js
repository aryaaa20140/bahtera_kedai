// script.js - Fungsionalitas Pop-up Modal

document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan semua elemen card produk
    const productCards = document.querySelectorAll('.product-card');
    
    // Dapatkan elemen modal dan tombol close
    const modal = document.getElementById("productModal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalImage = document.getElementById("modalImagePlaceholder");

    // Fungsi untuk menampilkan modal
    const showModal = (title, description, price, imageText) => {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
        modalImage.textContent = [Image: ${imageText}]; // Placeholder image text
        modal.style.display = "block";
    };

    // Tambahkan event listener ke setiap card produk
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-name');
            const description = card.getAttribute('data-desc');
            const price = card.getAttribute('data-price');
            const imageText = card.querySelector('.product-image').textContent;
            
            showModal(title, description, price, imageText);
        });
    });

    // Fungsi untuk menyembunyikan modal ketika tombol X ditekan
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Fungsi untuk menyembunyikan modal ketika klik di luar area modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
