let count = 0

for (i = 1; i < 51; i++){
  count = i
  switch (count) {
    case 10:
      console.log('10回ループしました');
      break;
    case 20:
      console.log('20回ループしました');
      break;
    case 30:
      console.log('30回ループしました');
      break;
    case 40:
      console.log('40回ループしました');
      break;
    case 50:
      console.log('50回ループしました');
      alert('50回カウントが終わりました。');
      break;
  }
  if (count % 4 === 0) {
    console.log('4で割れる数です。[' + count + ']');
  }
}