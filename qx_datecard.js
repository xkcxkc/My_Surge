// 设定目标日期列表，每个日期都有一个名字
var targetDates = [
    {name: '生日', date: new Date('2024-07-09')},
    {name: '考研', date: new Date('2023-12-23')},
];

// 定义一个函数，该函数计算并返回距离目标日期的天数
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

// 计算每个日期的天数差，并将结果拼接成一个字符串
var messages = targetDates
    .map(getDaysUntilTargetDate)
    .sort((a, b) => a.daysDiff - b.daysDiff)
    .map(item => item.message)
    .join('\n');

// 定义一个包含激励语的数组
var quotes = [
    '一旦决定开始，就不要轻易放弃！',
    '请不要相信，胜利会像山坡上的蒲公英一样唾手可得！',
    '变好的过程都不太舒服，试试再努力点。',
    '将自己不安急躁的一面展现给对手，你未战便已经输了三分！',
    '瞬光斩黯黮,昭明破晦夜。',
    '越是困难，越要抬起头，地上可找不到任何希望！',
    '我之所以想变强，是为了活得轻松写意。',
    '跑得快不一定赢，不跌跟头才是成功。',
    '我是最强的！',
];

// 从数组中随机选择一条作为标题
var title = quotes[Math.floor(Math.random() * quotes.length)];

// 在Quantumult X中发送通知
$notify(title, '', messages);

// 告诉Quantumult X脚本已经完成了所有的工作
$done();
