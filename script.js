      // set the end date of the countdown
      var countDownDate = new Date().getTime() + (5 * 60 * 1000);

      // update the countdown every second
      var x = setInterval(function() {
        // get the current date and time
        var now = new Date().getTime();
        
        // find the distance between now and the end date
        var distance = countDownDate - now;
        
        // calculate remaining minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // display the countdown in MM:SS format
        document.getElementById("countdown").innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        
        // check if the time has expired
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED!";
        }
      }, 1000);