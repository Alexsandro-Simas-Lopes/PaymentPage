document.getElementById("inform-pix").addEventListener("click", function() {
    const amount = document.getElementById("pix-amount").value;
    if (amount === "") {
      alert("O campo valor deve ser preenchido.");
    } else {
      const discount = amount * 0.1;
      document.getElementById("pix-total").textContent = `Total com 10% de desconto: R$${(amount - discount).toFixed(2)}`;
    }
  });
  
  document.getElementById("inform-credit-card").addEventListener("click", function() {
    const amount = document.getElementById("pix-amount").value;
    const cardNumber = document.getElementById("credit-card-number").value;
    const cardFlagIcon = document.getElementById("card-flag-icon");
    const installments = document.getElementById("credit-card-installments").value;
  
    if (amount === "") {
      alert("O campo valor deve ser preenchido.");
      return;
    }
  
    if (cardNumber.startsWith("1234")) {
      cardFlagIcon.textContent = "Ícone da bandeira (1234)"; // Substitua pelo ícone desejado.
    } else if (cardNumber.startsWith("4321")) {
      cardFlagIcon.textContent = "Ícone da bandeira (4321)"; // Substitua pelo ícone desejado.
    } else {
      cardFlagIcon.textContent = "Número de cartão inválido";
      return;
    }
  
    let total = 0;
    if (installments <= 3) {
      total = amount;
    } else if (installments === "4") {
      total = amount * 1.05;
    } else if (installments === "5") {
      total = amount * 1.1;
    }
    document.getElementById("credit-card-total").textContent = `Total a pagar: R$${total.toFixed(2)}`;
  });
  
  document.querySelector('input[name="payment-method"]').addEventListener("change", function() {
    const pixPanel = document.getElementById("pix-panel");
    const creditCardPanel = document.getElementById("credit-card-panel");
  
    if (this.value === "pix") {
      pixPanel.classList.remove("hidden");
      creditCardPanel.classList.add("hidden");
    } else if (this.value === "credit-card") {
      creditCardPanel.classList.remove("hidden");
      pixPanel.classList.add("hidden");
    }
  });
  
  document.getElementById("pay").addEventListener("click", function() {
    alert("Pagamento efetuado com sucesso.");
  });