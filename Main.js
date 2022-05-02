window.addEventListener('DOMContentLoaded', () => {
    // Input
    const axInput = document.querySelector("input#ax");
    const bxInput = document.querySelector("input#bx");
    const cxInput = document.querySelector("input#cx");
    const dxInput = document.querySelector("input#dx");

    const siInput = document.querySelector("input#si");
    const diInput = document.querySelector("input#di");
    const bpInput = document.querySelector("input#bp");
    const spInput = document.querySelector("input#sp");

    const inputsTab = [axInput, bxInput, cxInput, dxInput, siInput, diInput, bpInput, spInput];
    
    // Select
    const movRight = document.querySelector("#movRight");
    const movLeft = document.querySelector("#movLeft");
    const xchgRight = document.querySelector("#xchgRight");
    const xchgLeft = document.querySelector("#xchgLeft");

    // ResetAll buttons
    const resetAllRegisters = document.querySelector("#resetAllRegisters");
    const resetAllAdresses = document.querySelector("#resetAllAdresses");

    //Apply buttons
    const applyMov = document.querySelector("#applyMov");
    const applyXchg = document.querySelector("#applyXchg");
    
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

    // Validation of entered data
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

    // Reset buttons
    const indexTab = ["ax","bx","cx","dx","si","di","bp","sp"];
    
    indexTab.forEach(el => {
        let resetButton = document.querySelector(`#${el} + button`);
        resetButton.addEventListener('click', () => {
            document.querySelector(`input#${el}`).value = "";
        })
    })

    resetAllRegisters.addEventListener('click', () => {
        for (let i = 0; i < 4; i++) {
            document.querySelector(`input#${indexTab[i]}`).value = "";
        }
    })

    resetAllAdresses.addEventListener('click', () => {
        for (let i = 4; i < 8; i++) {
            document.querySelector(`input#${indexTab[i]}`).value = "";
        }
    })

    //Mov apply
    applyMov.addEventListener('click', (e) => {
        const movRightValue = movRight.value.toLowerCase();
        const movLeftValue = movLeft.value.toLowerCase();

        document.querySelector(`input#${movLeftValue}`).value = document.querySelector(`input#${movRightValue}`).value; 
    })

    applyXchg.addEventListener('click', (e) => {
        const movRightValue = movRight.value.toLowerCase();
        const movLeftValue = movLeft.value.toLowerCase();

        let tmp = document.querySelector(`input#${movRightValue}`).value;
        document.querySelector(`input#${movRightValue}`).value = document.querySelector(`input#${movLeftValue}`).value;
        document.querySelector(`input#${movLeftValue}`).value = tmp;
    })

});