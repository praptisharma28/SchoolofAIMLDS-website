import React, { useEffect, useRef } from 'react';


const Stats = () => {
    const countersRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(countersRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const startCounting = () => {
        const counters = countersRef.current.querySelectorAll('.counter');

        counters.forEach(counter => {
            const countTo = parseInt(counter.getAttribute('data-count'));
            const duration = 3000;
            let startTime;

            function animateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const increment = Math.floor((progress / duration) * countTo);

                if (increment < countTo) {
                    counter.textContent = increment;
                    requestAnimationFrame(animateCounter);
                } else {
                    counter.textContent = countTo + "+";
                }
            }

            requestAnimationFrame(animateCounter);
        });
    };

    return (
        <div id='stats'>
            <h1 className="mt-[120px] text-center px-2"
            >
                TALLYING THE SUCCESSES...
            </h1>
            <div ref={countersRef} className="count-up">

                <div className="wrapper">

                    <i className="fas fa-users"></i>
                    <div className='statsName'> Active members </div>
                    <div className="counter" data-count="100">0</div>
                </div>

                <div className="wrapper">
                    <i className="fas fa-newspaper"></i>
                    <div className='statsName'>Students trained </div>
                    <div className="counter" data-count="300">0</div>
                </div>

                <div className="wrapper">
                    <i className="fas fa-clock"></i>
                    <div className='statsName'>Hackathon Victories </div>
                    <div className="counter" data-count="10">0</div>
                </div>
                <div className="wrapper">
                    <i className="fas fa-clock"></i>
                    <div className='statsName'> Papers published </div>
                    <div className="counter" data-count="35">0</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;