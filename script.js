(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn'); // Select all buttons
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e) {
        try {
            let answer = eval(screen.value);
            screen.value = answer;
        } catch {
            screen.value = 'Error';
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = '';
    });
})();
