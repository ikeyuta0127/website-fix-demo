// 壊れた版（意図的な不具合あり）。修正版は js/script.js を参照。
document.addEventListener('DOMContentLoaded', () => {
  // 不具合2：存在しないIDを探すため、ここでエラーになりメニューが開かない
  const menuButton = document.getElementById('menuBtn');
  menuButton.addEventListener('click', () => {
    document.getElementById('navList').classList.toggle('open');
  });

  // 不具合4：単価が文字列のまま + でつながる（500 + 2 = "5002"）
  const qty = document.getElementById('qty');
  const total = document.getElementById('total');
  const unitPrice = '500';
  const updateTotal = () => {
    total.textContent = unitPrice + qty.value;
  };
  if (qty && total) {
    qty.addEventListener('change', updateTotal);
    updateTotal();
  }

  // 不具合3：バリデーションなし。空でもそのまま送信扱いになる
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', () => {
      document.getElementById('formResult').textContent = '送信が完了しました。';
    });
  }
});
