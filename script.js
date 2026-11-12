function calculatediscount() {
  let salesprice = document.getElementById('bill').value
  let discount = document.getElementById('discount').value
  let discountprice = salesprice * (discount / 100);
  let totalprice = salesprice - discountprice
  document.getElementById('result-discount').innerHTML = 'Your discount N' + discountprice
  document.getElementById('result-total').innerHTML = 'You will N' + totalprice
}
document.getElementById('bill').value = ""
document.getElementById('discount').value = ""