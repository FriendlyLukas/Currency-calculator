let currency1AmountElement = document.querySelector(".js-currency1Amount");
let currency2AmountElement = document.querySelector(".js-currency2Amount");
let formElement = document.querySelector(".js-form");
let currency1Element = document.querySelector(".js-select1");
let currency2Element = document.querySelector(".js-select2");
                        
let plnRate = 1;
let eurRate = 4.68;
let usdRate = 4.32;
let nokRate = 0.41;
let gbpRate = 5.31;


formElement.addEventListener("input", () =>{

    let currency1 = currency1Element.value;
    let currency2 = currency2Element.value;
    let currency1Amount;
    let currency2Amount = currency2AmountElement.value;

    if (currency1AmountElement.value<0) {
        currency1AmountElement.value = 0;
    } else {
        currency1Amount = currency1AmountElement.value;
    }

    switch(currency1){
        case "EUR":
            switch(currency2){
                case "PLN":
                    currency2Amount = currency1Amount*(eurRate/plnRate);
                    break;
                case "EUR":
                    currency2Amount = currency1Amount*(eurRate/eurRate);
                    break;
                case "USD":
                    currency2Amount = currency1Amount*(eurRate/usdRate);
                    break;
                case "NOK":
                    currency2Amount = currency1Amount*(eurRate/nokRate);
                    break;
                case "GBP":
                    currency2Amount = currency1Amount*(eurRate/gbpRate);
                    break;
        }
        break;

        case "PLN":
            switch(currency2){
                case "PLN":
                    currency2Amount = currency1Amount*(plnRate/plnRate);
                    break;
                case "EUR": 
                    currency2Amount = currency1Amount*(plnRate/eurRate);
                    break;
                case "USD":
                    currency2Amount = currency1Amount*(plnRate/usdRate);
                    break;
                case "NOK":
                    currency2Amount = currency1Amount*(plnRate/nokRate);
                    break;
                case "GBP":
                    currency2Amount  =currency1Amount*(plnRate/gbpRate);
                break;
            }
            break;

        case "USD":
            switch(currency2){
                    case "PLN": 
                        currency2Amount = currency1Amount*(usdRate/plnRate);
                        break;
                    case "EUR":
                        currency2Amount = currency1Amount*(usdRate/eurRate);
                    break;
                    case "USD":
                        currency2Amount = currency1Amount*(usdRate/usdRate);
                        break;
                    case "NOK":
                        currency2Amount = currency1Amount*(usdRate/nokRate);
                        break;
                    case "GBP":
                        currency2Amount = currency1Amount*(usdRate/gbpRate);
                        break;
            }
        break;
        case "NOK":
            switch(currency2){
                    case "PLN": 
                        currency2Amount = currency1Amount*(nokRate/plnRate);
                        break;
                    case "EUR":
                        currency2Amount = currency1Amount*(nokRate/eurRate);
                    break;
                    case "USD":
                        currency2Amount = currency1Amount*(nokRate/usdRate);
                        break;
                    case "NOK":
                        currency2Amount = currency1Amount*(nokRate/nokRate);
                        break; 
                    case "GBP":
                        currency2Amount = currency1Amount*(nokRate/gbpRate);
                        break;
            }
        break;
        case "GBP":
            switch(currency2){
                    case "PLN": 
                        currency2Amount = currency1Amount*(gbpRate/plnRate);
                        break;                   
                    case "EUR":
                        currency2Amount = currency1Amount*(gbpRate/eurRate);
                        break; 
                    case "USD":
                        currency2Amount = currency1Amount*(gbpRate/usdRate);
                        break;    
                    case "NOK":
                        currency2Amount = currency1Amount*(gbpRate/nokRate);
                        break;   
                    case "GBP":
                        currency2Amount = currency1Amount*(gbpRate/gbpRate);
                        break;       
            }
        break;
    }

currency2AmountElement.innerText=currency2Amount.toFixed(2);

});  
