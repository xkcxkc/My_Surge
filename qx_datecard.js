// 设定目标日期列表，每个日期都有一个名字
var targetDates = [
    {name: '生日', date: new Date('2024-07-09')},
    {name: '考研', date: new Date('2023-12-23')},
    // 添加更多日期...
];

// 定义一个函数，该函数计算并返回距离目标日期的天数
function getDaysUntilTargetDate(target) {
    var now = new Date();
    var timeDiff = target.date - now;
    var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return {
        message: '距离' + target.name + '还有 ' + daysDiff + ' 天，目标日期：' + target.date.toDateString(),
        daysDiff: daysDiff
    };
}

// 计算每个日期的天数差，并将结果拼接成一个字符串
var messages = targetDates
    .map(getDaysUntilTargetDate)
    .sort((a, b) => a.daysDiff - b.daysDiff)
    .map(item => item.message)
    .join('\n');

// 在Quantumult X中发送通知
$notify('倒数日', '', messages);
