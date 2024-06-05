// import React from 'react'

export default function ComingSoonPage() {

    var countDownDate = new Date("Jan 1, 2028 00:00:00").getTime();
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").textContent = days + "d";
        document.getElementById("hours").textContent = hours + "h";
        document.getElementById("minutes").textContent = minutes + "m";
        document.getElementById("seconds").textContent = seconds + "s";


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
  return (
    <div>

<section className="h-screen bg-gray-800 py-20">
    <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl lg:text-5xl text-white font-bold mb-8">Our This Serves is Coming Soon</h2>
        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12">
            Stay tuned for updates and get ready for an extraordinary experience!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 p-2">
            <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
                <div id="days" className="font-bold text-xl text-gray-800"></div>
                <div className="text-xs uppercase text-gray-500">days</div>
            </div>
            <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
                <div id="hours" className="font-bold text-xl text-gray-800"></div>
                <div className="text-xs uppercase text-gray-500">hours</div>
            </div>
            <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
                <div id="minutes" className="font-bold text-xl text-gray-800"></div>
                <div className="text-xs uppercase text-gray-500">minutes</div>
            </div>
            <div className="bg-white rounded-full px-6 py-2 min-w-[120px]">
                <div id="seconds" className="font-bold text-xl text-gray-800"></div>
                <div className="text-xs uppercase text-gray-500">seconds</div>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}
