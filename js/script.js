// 修正版
document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニュー：実際のIDで取得する
  const menuButton = document.getElementById('menuButton');
  const navList = document.getElementById('navList');
  if (menuButton && navList) {
    menuButton.addEventListener('click', () => {
      const opened = navList.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(opened));
    });
  }

  // 注文シミュレーション：数値は Number() に変換してから計算する
  const qty = document.getElementById('qty');
  const total = document.getElementById('total');
  const unitPrice = 500;
  const updateTotal = () => {
    total.textContent = (unitPrice * Number(qty.value)).toLocaleString();
  };
  if (qty && total) {
    qty.addEventListener('change', updateTotal);
    updateTotal();
  }

  // フォーム：バリデーションして、問題があれば送信を止める
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const result = document.getElementById('formResult');
      let valid = true;

      nameError.textContent = name.value.trim() ? '' : 'お名前を入力してください。';
      if (nameError.textContent) valid = false;

      emailError.textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
        ? '' : 'メールアドレスの形式を確認してください。';
      if (emailError.textContent) valid = false;

      messageError.textContent = message.value.trim() ? '' : 'お問い合わせ内容を入力してください。';
      if (messageError.textContent) valid = false;

      result.textContent = valid ? '送信が完了しました。ありがとうございます。（デモのため実際には送信していません）' : '';
    });
  }
});
