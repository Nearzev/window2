const timer = (id, deadline) => {

    const addZero = num => num <= 9 ?  `0${num}` :  num;

    const getTimeRemaining = (endtime) => {
        const   time = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((time/1000) % 60),
                minutes = Math.floor((time/1000/60) % 60),
                hours = Math.floor((time/1000/60/60) % 24),
                days = Math.floor(time/1000/60/60/24);

        return {
            'total': time, days, hours, minutes, seconds
        };
    };

    const setClock = (selector, endtime) => {
        const   timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function updateClock() {
            const total = getTimeRemaining(endtime);

            days.textContent = addZero(total.days);
            hours.textContent = addZero(total.hours);
            minutes.textContent = addZero(total.minutes);
            seconds.textContent = addZero(total.seconds);

            if (total.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export  {timer};