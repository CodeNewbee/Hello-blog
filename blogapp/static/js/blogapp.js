$( document ).ready(function() {
    $('.post-text').text(function(index, currentText) {
        if(currentText.length < 501) return currentText;
        for (i = 500; currentText[i] !== ' '; i++);
        return currentText.substr(0, i) + '...';
    });
});
