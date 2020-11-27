function eval(size, container)
{
  var percent = size / container;
  // ここはもっと数字に根拠を持たせる
  if (percent == 0) {
    return 'Empty';
  } else if (percent < 0.2) {
    return 'Good';
  } else if (percent < 0.4) {
    return 'Best';
  } else if (percent < 0.6) {
    return 'Normal';
  } else if (percent < 0.8) {
    return 'Bad';
  }
  return 'Death';
}

function getResembles(id)
{
  var list = resembles.filter(r => r['source'] == id || r['destination'] == id);

  var result = new Array();
  list.forEach(r => {
    if (r['source'] == id) {
      result.push(r['destination']);
    } else {
      result.push(r['source']);
    }
  });
  return result;
}
