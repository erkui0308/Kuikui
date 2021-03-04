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
    // for (var i = 0; i < 12; i++) {
        // var txts = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var txts = ['.'];
        ctx.beginPath();s
        ctx.font = '12px black'
        ctx.fillStyle = 'white'
        ctx.fillText(txts, 25 + (Math.sin(s * 6 * deg) * 25), 35 - (Math.cos(s * 6 * deg) * 25))
    // }
    // 阴影~
    ctx.shadowBlur = 30;
    ctx.shadowColor = 'pink'
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    // 时针
    var hx = 30 + 14 * (Math.sin(h * 30 * deg + m * 0.5 * deg));
    var hy = 30 - 14 * (Math.cos(h * 30 * deg + m * 0.5 * deg));
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(hx, hy);
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // 分针 如果想让秒针转一圈分针跳动一下到下一格就去掉+s0.1deg哦~
    // var mx = 400 + 130 * (Math.sin(m * 6 * deg + s * 0.1 * deg));
    // var my = 400 - 130 * (Math.cos(m * 6 * deg + s * 0.1 * deg));
    var mx = 30 + 18 * (Math.sin(m * 6 * deg));
    var my = 30 - 18 * (Math.cos(m * 6 * deg));
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(mx, my);
    ctx.strokeStyle = 'cornflowerblue';
    ctx.lineWidth =1;
    ctx.stroke();
    // 秒针同理
    var sx = 30 + 20 * (Math.sin(s * 6 * deg + ms * 0.006 * deg));
    var sy = 30 - 20 * (Math.cos(s * 6 * deg + ms * 0.006 * deg));
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(sx, sy);
    ctx.strokeStyle = 'ghostwhite';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    // 随便加上一行文字~哈哈
    var txt = '解忧音乐库';
    ctx.beginPath();
    ctx.font = '22px black'
    ctx.fillStyle = 'white'
    ctx.fillText(txt, 100, 40)
}


