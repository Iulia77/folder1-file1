let count = 0;


const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease') && count > 1) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        value.textContent = count;
        });
        
    });


