var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var deg = Math.PI / 180;
function quanju() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 获取当前时间
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    // 表盘外圈
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    // 表盘数字
    for (var i = 0; i < 12; i++) {
        var txts = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        ctx.beginPath();
        ctx.font = '10px KaiTi';
        ctx.fillStyle = 'white'
        ctx.fillText(txts[i], 23 + (Math.sin(i * 30 * deg) * 23), 30 - (Math.cos(i * 30 * deg) * 23))
    }
    // 阴影~
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'pink'
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    // 时针
    var hx = 25 + 14 * (Math.sin(h * 30 * deg + m * 0.5 * deg));
    var hy = 25 - 14 * (Math.cos(h * 30 * deg + m * 0.5 * deg));
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(hx, hy);
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // 分针 如果想让秒针转一圈分针跳动一下到下一格就去掉+s0.1deg哦~
    // var mx = 400 + 130 * (Math.sin(m * 6 * deg + s * 0.1 * deg));
    // var my = 400 - 130 * (Math.cos(m * 6 * deg + s * 0.1 * deg));
    var mx = 25 + 18 * (Math.sin(m * 6 * deg));
    var my = 25 - 18 * (Math.cos(m * 6 * deg));
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = 'cornflowerblue';
    ctx.lineWidth =1;
    ctx.stroke();
    // 秒针同理
    var sx = 25 + 20 * (Math.sin(s * 6 * deg + ms * 0.006 * deg));
    var sy = 25 - 20 * (Math.cos(s * 6 * deg + ms * 0.006 * deg));
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(sx, sy);
    ctx.strokeStyle = 'ghostwhite';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    // 随便加上一行文字~哈哈
    var txt = '解忧音乐库';
    ctx.beginPath();
    ctx.font = '17px black'
    ctx.fillStyle = 'white'
    ctx.fillText(txt, 120, 30)
}
