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
  url: "https://v1.hitokoto.cn/?c=a&c=b&encode=text&max_length=16"
}).then(response => {
  // 使用获取的数据作为通知的标题
  $notify(response.body, '', messages);
  $done();
}, reason => {
  // 如果请求失败，使用一个错误消息作为标题
  console.error(reason.error);
  $notify('出错啦！', '', messages);
  $done();
});
