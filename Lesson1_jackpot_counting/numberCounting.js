const myNumber = Math.round(Math.random()*100);
let result;

if ( 0 <= myNumber && myNumber <= 10){
    switch(myNumber){
        case 0:
            result = "Nolla";
            break;
        case 1:
            result = "Yksi";
            break;
        case 2:
            result = "Kaksi";
            break;
        case 3:
            result = "Kolme";
            break;
        case 4:
            result = "Nelja";
            break;
        case 5:
            result = "Visi";
            break;
        case 6:
            result = "Kusi";
            break;
        case 7:
            result = "Setsaman";
            break;
        case 8:
            result = "Kahdeksan";
            break;
        case 9:
            result = "Yhdeksan";
            break;
        case 10:
            result = "Kymmenen";
            break;
        default:
            break;
    }
}
if ( 10 < myNumber && myNumber < 20){
    let tensNumber = myNumber-10;
    switch(tensNumber){
        case 1:
            result = "Yksi";
            break;
        case 2:
            result = "Kaksi";
            break;
        case 3:
            result = "Kolme";
            break;
        case 4:
            result = "Nelja";
            break;
        case 5:
            result = "Visi";
            break;
        case 6:
            result = "Kuusi";
            break;
        case 7:
            result = "Setsaman";
            break;
        case 8:
            result = "Kahdeksan";
            break;
        case 9:
            result = "Yhdeksan";
            break;
    }
    result += 'toista';
}

if (20 <= myNumber && myNumber < 30){
let aboveTwenty = myNumber -20;
result = 'Kaksikymmenta-';
switch (aboveTwenty){
    case 0:
        result ='Kaksikymmenta';
        break;
    case 1:
            result += "Yksi";
            break;
        case 2:
            result += "Kaksi";
            break;
        case 3:
            result += "Kolme";
            break;
        case 4:
            result += "Nelja";
            break;
        case 5:
            result += "Visi";
            break;
        case 6:
            result += "Kuusi";
            break;
        case 7:
            result += "Setsaman";
            break;
        case 8:
            result += "Kahdeksan";
            break;
        case 9:
            result += "Yhdeksan";
            break;
    }
}
if (30 <= myNumber && myNumber < 40){
    let aboveTwenty = myNumber -30;
    result = 'Kolmekymmenta-';
    switch (aboveTwenty){
        case 0:
            result ='Kaksikymmenta';
            break;
        case 1:
                result += "Yksi";
                break;
            case 2:
                result += "Kaksi";
                break;
            case 3:
                result += "Kolme";
                break;
            case 4:
                result += "Nelja";
                break;
            case 5:
                result += "Visi";
                break;
            case 6:
                result += "Kuusi";
                break;
            case 7:
                result += "Setsaman";
                break;
            case 8:
                result += "Kahdeksan";
                break;
            case 9:
                result += "Yhdeksan";
                break;
        }
    }
    if (40 <= myNumber && myNumber < 50){
    let aboveTwenty = myNumber -40;
    result = 'Neljakymmenta-';
    switch (aboveTwenty){
        case 0:
            result ='Neljakymmenta';
            break;
        case 1:
                result += "Yksi";
                break;
            case 2:
                result += "Kaksi";
                break;
            case 3:
                result += "Kolme";
                break;
            case 4:
                result += "Nelja";
                break;
            case 5:
                result += "Visi";
                break;
            case 6:
                result += "Kuusi";
                break;
            case 7:
                result += "Setsaman";
                break;
            case 8:
                result += "Kahdeksan";
                break;
            case 9:
                result += "Yhdeksan";
                break;
        }
    }
console.log(myNumber);
console.log(result);
