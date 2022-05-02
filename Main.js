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

    const registerToRegister = document.querySelector("#registerToRegister");
    const registerToMemory = document.querySelector("#registerToMemory");

    const inputsTab = [axInput, bxInput, cxInput, dxInput, siInput, diInput, bpInput, spInput];
    const adressesId = ["si", "di", "bp", "si+bp", "di+bp"];
    const registerId = ["ax", "bx", "cx", "dx"];
    
    // Select
    const movRight = document.querySelector("#movRight");
    const movLeft = document.querySelector("#movLeft");
    const xchgRight = document.querySelector("#xchgRight");
    const xchgLeft = document.querySelector("#xchgLeft");

    // ResetAll buttons
    const resetAllRegisters = document.querySelector("#resetAllRegisters");
    const resetAllAdresses = document.querySelector("#resetAllAdresses");
    const memoryToRegister = document.querySelector("#memoryToRegister");

    //Apply buttons
    const applyMov = document.querySelector("#applyMov");
    const applyXchg = document.querySelector("#applyXchg");
    
    // Check if not already selected (Select registers)
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

    // Mov apply
    applyMov.addEventListener('click', () => {
        const movRightValue = movRight.value.toLowerCase();
        const movLeftValue = movLeft.value.toLowerCase();

        document.querySelector(`input#${movLeftValue}`).value = document.querySelector(`input#${movRightValue}`).value; 
    })


    // XCHG apply
    applyXchg.addEventListener('click', () => {
        const xchgRightValue = xchgRight.value.toLowerCase();
        const xchgLeftValue = xchgLeft.value.toLowerCase();

        let tmp = document.querySelector(`input#${xchgRightValue}`).value;
        document.querySelector(`input#${xchgRightValue}`).value = document.querySelector(`input#${xchgLeftValue}`).value;
        document.querySelector(`input#${xchgLeftValue}`).value = tmp;
    })

    // Register to register select option
    registerToRegister.addEventListener('change', () => {
        let tmpRigth = ["movRight", "xchgRight"];
        let tmpLeft = ["movLeft", "xchgLeft"];
        for(let i = 0;i<tmpRigth.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
            })

            document.querySelector(`#${tmpRigth[i]}`).value = "AX";
            document.querySelector(`#${tmpLeft[i]} option[value="AX"]`).setAttribute("disabled", null);
            document.querySelector(`#${tmpLeft[i]}`).value = "BX";
            document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).setAttribute("disabled", null);
        }
    })

    // Register to memory select option
    registerToMemory.addEventListener('change', () => {
        let tmpRigth = ["movRight", "xchgRight"];
        let tmpLeft = ["movLeft", "xchgLeft"];
        for(let i = 0;i<tmpLeft.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
            })

            document.querySelector(`#${tmpLeft[i]}`).value = "SI";
            document.querySelector(`#${tmpRigth[i]}`).value = "AX";
        }
    })

    //Memory to register select option
    memoryToRegister.addEventListener('change', () => {
        let tmpRigth = ["movRight", "xchgRight"];
        let tmpLeft = ["movLeft", "xchgLeft"];
        for(let i = 0;i<tmpRigth.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).setAttribute("disabled", null);
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).removeAttribute("disabled");
            })

            document.querySelector(`#${tmpRigth[i]}`).value = "SI";
            document.querySelector(`#${tmpLeft[i]}`).value = "AX";
        }
    })
});