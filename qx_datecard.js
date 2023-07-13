var targetDates = [
    {name: '生日', date: new Date('2024-07-09')},
    {name: '考研', date: new Date('2023-12-23')},
];

function getDaysUntilTargetDate(target) {
    var now = new Date();
    var timeDiff = target.date - now;
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return {
        name: target.name,
        daysDiff: daysDiff,
        message: '距离' + target.name + '还有 ' + daysDiff + ' 天 '
    };
}

var messages = targetDates
    .map(getDaysUntilTargetDate)
    .sort((a, b) => a.daysDiff - b.daysDiff)
    .map(item => item.message)
    .join('\n');

$task.fetch({
  url: "https://v1.hitokoto.cn/?c=a&c=b&encode=json&maxlength=15"
}).then(response => {
  try {
    // 尝试解析获取的数据
    let data = JSON.parse(response.body);
    // 取出句子和出处
    let sentence = data.hitokoto;
    let source = data.from;
    // 生成通知的内容，句子和出处分别在不同的行
    let content = sentence + '\n' + source;
    // 发送通知
    $notify(content, '', messages);
  } catch (error) {
    // 如果解析数据时有错误，发送一个包含错误信息的通知
    $notify('解析数据时出错', '', error.toString());
  }
  $done();
}, reason => {
  // 如果请求失败，发送一个包含错误信息的通知
  $notify('请求数据时出错', '', reason.error);
  $done();
});
