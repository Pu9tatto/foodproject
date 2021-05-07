function timer() {

    const deadline = '2021-05-11';

    setClock('.timer', deadline);

    function getTimeRemaning(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            h = Math.floor((t / (1000 * 60 * 60)) % 24),
            minuts = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            h,
            minuts,
            seconds
        };
    }

    function get0(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minuts = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaning(endtime);

            if (t.total > 0) {

                days.innerHTML = get0(t.days);
                days.innerHTML = get0(t.days);
                hours.innerHTML = get0(t.h);
                minuts.innerHTML = get0(t.minuts);
                seconds.innerHTML = get0(t.seconds);
            } else {
                clearInterval(timeInterval);
            }
        }
    }
}

module.exports = timer;