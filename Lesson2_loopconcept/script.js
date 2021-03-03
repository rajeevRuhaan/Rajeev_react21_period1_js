let chosenNumbers = [];
let RANDOMIZE_RANGE = 7;
        let counter = 0;

        while (counter < 5) {
            chosenNumbers[counter] = Math.floor(Math.random() * RANDOMIZE_RANGE);
            counter++;
        }
        console.log(chosenNumbers);