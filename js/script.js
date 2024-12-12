document.addEventListener("DOMContentLoaded", () => {
    const updateTotal = () => {
      let total = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const unitPrice = parseInt(card.querySelector(".unit-price").textContent);
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    };
  
    // Increase quantity
    document.querySelectorAll(".fa-plus-circle").forEach((plusBtn) => {
      plusBtn.addEventListener("click", () => {
        const quantityEl = plusBtn.parentElement.querySelector(".quantity");
        quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
        updateTotal();
      });
    });
  
    // Decrease quantity
    document.querySelectorAll(".fa-minus-circle").forEach((minusBtn) => {
      minusBtn.addEventListener("click", () => { 
        const quantityEl = minusBtn.parentElement.querySelector(".quantity");
        const currentQuantity = parseInt(quantityEl.textContent);
        if (currentQuantity > 0) {
          quantityEl.textContent = currentQuantity - 1;
          updateTotal();
        }
      });
    });
  
    // Delete item
    document.querySelectorAll(".fa-trash-alt").forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", () => {
        deleteBtn.closest(".card-body").remove();
        updateTotal();
      });
    });
  
    // Like item
    document.querySelectorAll(".fa-heart").forEach((likeBtn) => {
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
      });
    });
  
    // Add CSS for liked items dynamically
    const style = document.createElement("style");
    style.innerHTML = `
      .fa-heart.liked {
        color: red;
      }
    `;
    document.head.appendChild(style);
  });
  