let i = 0;
        while (i < 100) {
            i++;

            if (i % 3 == 0 && i % 5 == 0) {
                console.log(i + ". FizzBuzz<br/>");
            } else if (i % 3 == 0) {
                console.log(i + ". Fizz<br/>")
            } else if (i % 5 == 0) {
                console.log(i + ". Buzz<br/>")
            } else {
                console.log(i + ". <br/>")
            }
        }
