var BORDER_WIDTH = 8;
var GAP_WIDTH = 4;
var OFFSET = BORDER_WIDTH * 2 + GAP_WIDTH * 2;

function draw() {
    var canvas = document.getElementById('progress-bar');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = BORDER_WIDTH;
    ctx.strokeRect(BORDER_WIDTH / 2, BORDER_WIDTH / 2, canvas.width - BORDER_WIDTH, canvas.height - BORDER_WIDTH);
    var origin = BORDER_WIDTH + GAP_WIDTH;
    var x = origin;
    var y = origin;
    var barHeight = canvas.height - OFFSET;
    var barWidth = (canvas.width - BORDER_WIDTH * 2 - GAP_WIDTH) / 20 - GAP_WIDTH;
    for (i = 0; i < 20; i++) {
        x = origin + (barWidth + GAP_WIDTH) * i;
        ctx.fillRect(x, y, barWidth, barHeight);
    }
}

window.onload = function() {
    draw();
};
