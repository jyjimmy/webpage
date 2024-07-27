function typeWriter(elementId, text, i, callback) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        setTimeout(function() {
            typeWriter(elementId, text, i + 1, callback);
        }, 100); // 调整打字速度
    } else if (callback) {
        callback();
    }
}

function startTyping() {
    const astarText = document.getElementById('astar-pubs').innerText;
    const abq1Text = document.getElementById('abq1-pubs').innerText;

    document.getElementById('astar-pubs').innerText = ''; // 清空原文本
    document.getElementById('abq1-pubs').innerText = ''; // 清空原文本

    typeWriter('astar-pubs', astarText, 0, function() {
        typeWriter('abq1-pubs', abq1Text, 0);
    });
}

window.onload = function() {
    startTyping();
};
