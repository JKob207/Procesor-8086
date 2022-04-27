window.addEventListener('DOMContentLoaded', () => {
    //Input
    const axInput = document.querySelector("input#ax");
    const bxInput = document.querySelector("input#bx");
    const cxInput = document.querySelector("input#cx");
    const dxInput = document.querySelector("input#dx");

    const siInput = document.querySelector("input#si");
    const diInput = document.querySelector("input#di");
    const bpInput = document.querySelector("input#bp");
    const spInput = document.querySelector("input#sp");

    const inputsTab = [axInput, bxInput, cxInput, dxInput, siInput, diInput, bpInput, spInput];
    
    //Select
    const movRight = document.querySelector("#movRight");
    const movLeft = document.querySelector("#movLeft");
    const xchgRight = document.querySelector("#xchgRight");
    const xchgLeft = document.querySelector("#xchgLeft");

    // Check if not already selected (Select)
    let disabledMovLeft = "AX";
    let disabledMovRight = "BX";
    let disabledXchgLeft = "AX";
    let disabledXchgRight = "BX";

    movRight.addEventListener('change', (e) => {
        const oldDisabledMov = document.querySelector("#movLeft option[value='"+disabledMovLeft+"']");
        oldDisabledMov.removeAttribute("disabled");
        const newDisabledMov = document.querySelector("#movLeft option[value='"+e.target.value+"']");
        newDisabledMov.setAttribute("disabled", null);
        disabledMovLeft = e.target.value;
    })

    movLeft.addEventListener('change', (e) => {
        const oldDisabledMov = document.querySelector("#movRight option[value='"+disabledMovRight+"']");
        oldDisabledMov.removeAttribute("disabled");
        const newDisabledMov = document.querySelector("#movRight option[value='"+e.target.value+"']");
        newDisabledMov.setAttribute("disabled", null);
        disabledMovRight = e.target.value;
    })

    xchgRight.addEventListener('change', (e) => {
        const oldDisabledXchg = document.querySelector("#xchgLeft option[value='"+disabledXchgLeft+"']");
        oldDisabledXchg.removeAttribute("disabled");
        const newDisabledXchg = document.querySelector("#xchgLeft option[value='"+e.target.value+"']");
        newDisabledXchg.setAttribute("disabled", null);
        disabledXchgLeft = e.target.value;
    })

    xchgLeft.addEventListener('change', (e) => {
        const oldDisabledXchg = document.querySelector("#xchgRight option[value='"+disabledXchgRight+"']");
        oldDisabledMov.removeAttribute("disabled");
        const newDisabledXchg = document.querySelector("#xchgRight option[value='"+e.target.value+"']");
        newDisabledXchg.setAttribute("disabled", null);
        disabledXchgRight = e.target.value;
    })

    //Validation of entered data
    
    const inputPattern = /^[A-Fa-f0-9]*$/;
    inputsTab.forEach(element => {
        element.addEventListener("input", (e) => {
            let validateInput = inputPattern.test(element.value);
            if(validateInput == false || element.value.length == 5)
            {
                element.value = element.value.substr(0,element.value.length-1);
            }
        })
    });
 

});