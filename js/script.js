{
    const calculateResult = (currency1,currency2,amount) => {

        const plnRate = 1;
        const eurRate = 4.68;
        const usdRate = 4.32;
        const nokRate = 0.41;
        const gbpRate = 5.31;    

        switch(currency1){
            case "EUR":
                switch(currency2){
                    case "PLN":
                        return amount*(eurRate/plnRate);
                        
                    case "EUR":
                        return amount*(eurRate/eurRate);
                        
                    case "USD":
                        return amount*(eurRate/usdRate);
                        
                    case "NOK":
                        return amount*(eurRate/nokRate);
                        
                    case "GBP":
                        return amount*(eurRate/gbpRate);
                        
            }
            
    
            case "PLN":
                switch(currency2){
                    case "PLN":
                        return amount*(plnRate/plnRate);
                        
                    case "EUR": 
                        return amount*(plnRate/eurRate);
                        
                    case "USD":
                        return amount*(plnRate/usdRate);
                        
                    case "NOK":
                        return amount*(plnRate/nokRate);
                        
                    case "GBP":
                        currency2Amount  =amount*(plnRate/gbpRate);
                    
            }
                
    
            case "USD":
                switch(currency2){
                        case "PLN": 
                            return amount*(usdRate/plnRate);
                            
                        case "EUR":
                            return amount*(usdRate/eurRate);
                        
                        case "USD":
                            return amount*(usdRate/usdRate);
                            
                        case "NOK":
                            return amount*(usdRate/nokRate);
                            
                        case "GBP":
                            return amount*(usdRate/gbpRate);
                            
            }
            
            case "NOK":
                switch(currency2){
                        case "PLN": 
                            return amount*(nokRate/plnRate);
                            
                        case "EUR":
                            return amount*(nokRate/eurRate);
                        
                        case "USD":
                            return amount*(nokRate/usdRate);
                            
                        case "NOK":
                            return amount*(nokRate/nokRate);
                             
                        case "GBP":
                            return amount*(nokRate/gbpRate);
                            
                }
            
            case "GBP":
                switch(currency2){
                        case "PLN": 
                            return amount*(gbpRate/plnRate);
                                               
                        case "EUR":
                            return amount*(gbpRate/eurRate);
                             
                        case "USD":
                            return amount*(gbpRate/usdRate);
                                
                        case "NOK":
                            return amount*(gbpRate/nokRate);
                               
                        case "GBP":
                            return amount*(gbpRate/gbpRate);                  
            }
        }
    }

    const updateResultText = (result, amount, currency1, currency2) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<i>${amount} ${currency1} = </i>${result.toFixed(2)} ${currency2}`;
    }

    const onFormInput = () => {
    
        const amountElement = document.querySelector(".js-amount");
        const currency1Element = document.querySelector(".js-select1");
        const currency2Element = document.querySelector(".js-select2");
    
        const currency1 = currency1Element.value;
        const currency2 = currency2Element.value;
        let amount;
    
        if (amountElement.value<0) {
            amountElement.value = 0;
        } else {
            amount = amountElement.value;
        }
    
        let  result = calculateResult(currency1, currency2, amount);
    
        updateResultText(result, amount, currency1, currency2);
    
    };

    const init = () =>{
        
        const formElement = document.querySelector(".js-form");
                                
        formElement.addEventListener("input", onFormInput);
    }
    
    init();
}