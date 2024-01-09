document.getElementById("inform-pix").addEventListener("click", function() {
  const amount = document.getElementById("pix-amount").value;
  if (amount === "") {
    alert("O campo valor deve ser preenchido.");
  } else {
    const discount = amount * 0.1;
    document.getElementById("pix-total").textContent = `R$${(amount - discount).toFixed(2)}`;
  }
});

document.getElementById("inform-pay").addEventListener("click", function() {
  const amount = document.getElementById("pix-amount").value;
  const cardNumber = document.getElementById("credit-card-number").value;
  const installments = document.getElementById("credit-card-installments").value;
  let cardFlagIcon = document.getElementById("card-flag-icon");
  
  let img = document.querySelector(".img");

  if (amount === "") {
    alert("O campo valor deve ser preenchido.");
    return;
  }

  if (cardNumber.startsWith("1234")) {
    img.src = "/Payment/img/1.png";
  } else if (cardNumber.startsWith("4321")) {
    img.src = "/Payment/img/2.png";
  } else {
    Swal.fire({
      title: "Número de cartão inválido!",
      icon: "error"
    });
    return;
  }

  let total = 0;
  let text = " ";
  if (installments === "1") {
      total = amount * 1.0;
      text = "1x de "; 
  } else if (installments === "2") {
      total = amount / 2;
      text = "2x de ";
  } else if (installments === "3") {
      total = amount / 3;
      text = "3x de ";
  } else if (installments === "4") {
      total = amount * 1.05 / 4;
      text = "4x de "
  } else if (installments === "5") {
      total = amount * 1.1 / 5;
      text = "5x de "
  }
  document.getElementById("credit-card-total").textContent = `${text}R$${total.toFixed(2)}`;
});

// Tab selection
$('.pay-select__item').on('click', function(){
  $('.pay-select__item').removeClass('is-active');
  $(this).addClass('is-active');
  
  if($(this).hasClass('pay-select--card')) {
    $('.select-body__content').removeClass('is-active');
    $('.select-body--card').addClass('is-active');
  } else {
    $('.select-body__content').removeClass('is-active');
    $('.select-body--paypal').addClass('is-active');
  }
});