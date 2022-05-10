window.addEventListener('DOMContentLoaded', () => {
    // Addressing mode
    let adressMode = "RR";
    
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
    const memoryToRegister = document.querySelector("#memoryToRegister");

    const registerAdress = document.querySelector("#registerAdress");
    const indexAdress = document.querySelector("#indexAdress");
    const baseAdress = document.querySelector("#baseAdress");
    const indexBaseAdress = document.querySelector("#indexBaseAdress");

    const inputsTab = [axInput, bxInput, cxInput, dxInput, siInput, diInput, bpInput, spInput];
    const indexTab = ["ax","bx","cx","dx","si","di","bp","sp","disp"];
    const adressesId = ["si", "di", "bp", "si+bp", "si+bx", "di+bp", "di+bx"];
    const registerId = ["ax", "bx", "cx", "dx"];
    const tmpRigth = ["movRight", "xchgRight"];
    const tmpLeft = ["movLeft", "xchgLeft"];

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

        if(indexBaseAdress.checked == true)
        {
            for(let i=0;i<tmpLeft.length;i++)
            {
                document.querySelector(`#${tmpLeft[i]} option[value="BX"]`).disabled = false;
            }

            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

        for(let i=0;i<tmpLeft.length;i++)
        {
            if(e.target.value == "SI+BX" || e.target.value == "DI+BX")
            {
                document.querySelector(`#${tmpLeft[i]} option[value="BX"]`).disabled = true;
            }
        }
        
        // Validate which option can be choose when indexAdress is checked
        if(indexAdress.checked == true)
        {
            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }
    })

    movLeft.addEventListener('change', (e) => {
        const oldDisabledMov = document.querySelector("#movRight option[value='"+disabledMovRight+"']");
        oldDisabledMov.removeAttribute("disabled");
        const newDisabledMov = document.querySelector("#movRight option[value='"+e.target.value+"']");
        newDisabledMov.setAttribute("disabled", null);
        disabledMovRight = e.target.value;
        
        // Validate which option can be choose when indexBaseAdress is checked
        if(indexBaseAdress.checked == true)
        {
            for(let i=0;i<tmpRigth.length;i++)
            {
                document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = false;
            }

            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

        for(let i=0;i<tmpRigth.length;i++)
        {
            if(e.target.value == "SI+BX" || e.target.value == "DI+BX")
            {
                document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = true;
            }
        }

        // Validate which option can be choose when indexAdress is checked
        if(indexAdress.checked == true)
        {
            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }
    })

    xchgRight.addEventListener('change', (e) => {
        const oldDisabledXchg = document.querySelector("#xchgLeft option[value='"+disabledXchgLeft+"']");
        oldDisabledXchg.removeAttribute("disabled");
        const newDisabledXchg = document.querySelector("#xchgLeft option[value='"+e.target.value+"']");
        newDisabledXchg.setAttribute("disabled", null);
        disabledXchgLeft = e.target.value;

        // Validate which option can be choose when indexBaseAdress is checked
        if(indexBaseAdress.checked == true)
        {
            for(let i=0;i<tmpLeft.length;i++)
            {
                document.querySelector(`#${tmpLeft[i]} option[value="BX"]`).disabled = false;
            }

            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

        for(let i=0;i<tmpLeft.length;i++)
        {
            if(e.target.value == "SI+BX" || e.target.value == "DI+BX")
            {
                document.querySelector(`#${tmpLeft[i]} option[value="BX"]`).disabled = true;
            }
        }
        
        // Validate which option can be choose when indexAdress is checked
        if(indexAdress.checked == true)
        {
            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

    })

    xchgLeft.addEventListener('change', (e) => {
        const oldDisabledXchg = document.querySelector("#xchgRight option[value='"+disabledXchgRight+"']");
        oldDisabledXchg.removeAttribute("disabled");
        const newDisabledXchg = document.querySelector("#xchgRight option[value='"+e.target.value+"']");
        newDisabledXchg.setAttribute("disabled", null);
        disabledXchgRight = e.target.value;

        // Validate which option can be choose when indexBaseAdress is checked
        if(indexBaseAdress.checked == true)
        {
            for(let i=0;i<tmpRigth.length;i++)
            {
                document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = false;
            }

            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=3;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

        for(let i=0;i<tmpRigth.length;i++)
        {
            if(e.target.value == "SI+BX" || e.target.value == "DI+BX")
            {
                document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = true;
            }
        }

        // Validate which option can be choose when indexAdress is checked
        if(indexAdress.checked == true)
        {
            if(adressMode == "RM")
            {
                for(let i = 0;i<tmpLeft.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }else if(adressMode == "MR")
            {
                for(let i = 0;i<tmpRigth.length;i++)
                {
                    for(let j=0;j<adressesId.length;j++)
                    {
                        document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                    }
                }
            }
        }

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
        for (let i = 4; i < indexTab.length; i++) {
            document.querySelector(`input#${indexTab[i]}`).value = "";
        }
    })

    // Mov apply
    applyMov.addEventListener('click', () => {
        const movRightValue = movRight.value.toLowerCase();
        const movLeftValue = movLeft.value.toLowerCase();
        let disp = "";
        if(document.querySelector("input#disp").value != "")
        {
            disp = document.querySelector("input#disp").value;
        }

        if(adressMode == "RR")
        {
            document.querySelector(`input#${movLeftValue}`).value = document.querySelector(`input#${movRightValue}`).value; 
        }else if(adressMode == "RM")
        {
            const number = document.querySelector(`input#${movRightValue}`).value.toUpperCase();
            const type = movLeftValue.toUpperCase();
            const adress = document.querySelector(`input#${movLeftValue}`).value.toUpperCase()+"+"+disp;
            saveToMemory(type,adress,number);
            document.querySelector(`input#${movRightValue}`).value = "";
            document.querySelector(`input#${movLeftValue}`).value = "";
            document.querySelector("input#disp").value = "";
        }else if(adressMode == "MR")
        {
            const type = movRightValue.toUpperCase();
            const adress = document.querySelector(`input#${movRightValue}`).value.toUpperCase()+"+"+disp;
            document.querySelector(`input#${movLeftValue}`).value = getFromMemory(type,adress);
        }
    })


    // XCHG apply
    applyXchg.addEventListener('click', () => {
        const xchgRightValue = xchgRight.value.toLowerCase();
        const xchgLeftValue = xchgLeft.value.toLowerCase();

        if(adressMode == "RR")
        {
            let tmp = document.querySelector(`input#${xchgRightValue}`).value;
            document.querySelector(`input#${xchgRightValue}`).value = document.querySelector(`input#${xchgLeftValue}`).value;
            document.querySelector(`input#${xchgLeftValue}`).value = tmp;
        }else if(adressMode == "RM" || adressMode == "MR")
        {
            const number = document.querySelector(`input#${xchgRightValue}`).value.toUpperCase();
            const type = xchgLeftValue.toUpperCase();
            const adress = document.querySelector(`input#${xchgLeftValue}`).value.toUpperCase();
            document.querySelector(`input#${xchgRightValue}`).value = xchgMemoryRegister(type,adress, number);
        }
    })

    // Register to register select option
    registerToRegister.addEventListener('change', (e) => {
        adressMode = e.target.defaultValue;

        document.querySelector("#registerAdress").disabled = false;
        document.querySelector("#registerAdress").checked = true;
        document.querySelector("#indexAdress").disabled = true;
        document.querySelector("#baseAdress").disabled = true;
        document.querySelector("#indexBaseAdress").disabled = true;

        for(let i = 0;i<tmpRigth.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
            })

            document.querySelector(`#${tmpRigth[i]}`).value = "AX";
            document.querySelector(`#${tmpLeft[i]} option[value="AX"]`).disabled = true;
            document.querySelector(`#${tmpLeft[i]}`).value = "BX";
            document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = true;
        }
    })

    // Register to memory select option
    registerToMemory.addEventListener('change', (e) => {
        adressMode = e.target.defaultValue;

        document.querySelector("#indexAdress").disabled = false;
        document.querySelector("#baseAdress").disabled = false;
        document.querySelector("#indexBaseAdress").disabled = false;
        document.querySelector("#indexAdress").checked = true;
        document.querySelector("#registerAdress").disabled = true;
        
        for(let i = 0;i<tmpLeft.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
            })

            document.querySelector(`#${tmpLeft[i]}`).value = "SI";
            document.querySelector(`#${tmpRigth[i]}`).value = "AX";
        }

        indexAdress.dispatchEvent(new Event("change"));
    })

    // Memory to register select option
    memoryToRegister.addEventListener('change', (e) => {
        adressMode = e.target.defaultValue;

        document.querySelector("#indexAdress").disabled = false;
        document.querySelector("#baseAdress").disabled = false;
        document.querySelector("#indexBaseAdress").disabled = false;
        document.querySelector("#indexAdress").checked = true;
        document.querySelector("#registerAdress").disabled = true;

        for(let i = 0;i<tmpRigth.length;i++)
        {
            adressesId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
            })

            registerId.forEach(id => {
                document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
                document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
            })

            document.querySelector(`#${tmpRigth[i]}`).value = "SI";
            document.querySelector(`#${tmpLeft[i]}`).value = "AX";
        }

        indexAdress.dispatchEvent(new Event("change"));
    })

    // Register adress select
    registerAdress.addEventListener('change', () => {
        if(adressMode == "RR")
        {
            for(let i = 0;i<tmpRigth.length;i++)
            {
                adressesId.forEach(id => {
                    document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
                    document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = true;
                })

                registerId.forEach(id => {
                    document.querySelector(`#${tmpRigth[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
                    document.querySelector(`#${tmpLeft[i]} option[value="${id.toUpperCase()}"]`).disabled = false;
                })
    
                document.querySelector(`#${tmpRigth[i]}`).value = "AX";
                document.querySelector(`#${tmpLeft[i]} option[value="AX"]`).disabled = true;
                document.querySelector(`#${tmpLeft[i]}`).value = "BX";
                document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = true;
            }
        }
    })

    // Index adress select
    indexAdress.addEventListener('change', () => {
        if(adressMode == "RM")
        {
            for(let i = 0;i<tmpLeft.length;i++)
            {
                for(let j=0;j<registerId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${registerId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = false;
                }

                for(let j=2;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                document.querySelector(`#${tmpLeft[i]}`).value = "SI";
            }
        }else if(adressMode == "MR")
        {
            for(let i = 0;i<tmpRigth.length;i++)
            {
                for(let j=0;j<registerId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${registerId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = false;
                }

                for(let j=2;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                document.querySelector(`#${tmpRigth[i]}`).value = "SI";
            }
        }
    })

    // Base adress select
    baseAdress.addEventListener('change', () => {
        if(adressMode == "RM")
        {
            for(let i = 0;i<tmpLeft.length;i++)
            {
                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                document.querySelector(`#${tmpLeft[i]} option[value="BP"]`).disabled = false;
                if(document.querySelector(`#${tmpRigth[i]}`).value != "BX")
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="BX"]`).disabled = false;
                }
                document.querySelector(`#${tmpLeft[i]}`).value = "BP";
            }
        }else if(adressMode == "MR")
        {
            for(let i = 0;i<tmpRigth.length;i++)
            {
                for(let j=0;j<registerId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${registerId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                document.querySelector(`#${tmpRigth[i]} option[value="BP"]`).disabled = false;
                if(document.querySelector(`#${tmpLeft[i]}`).value != "BX")
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="BX"]`).disabled = false;
                }
                document.querySelector(`#${tmpRigth[i]}`).value = "BP";
            }
        }
    })

    // Index base adress select
    indexBaseAdress.addEventListener('change', () => {
        if(adressMode == "RM")
        {
            for(let i = 0;i<tmpLeft.length;i++)
            {
                for(let j=0;j<registerId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${registerId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=3;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpLeft[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = false;
                }

                for(let j=3;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                document.querySelector(`#${tmpLeft[i]}`).value = "SI+BP";
            }
        }else if(adressMode == "MR")
        {
            for(let i = 0;i<tmpRigth.length;i++)
            {
                for(let j=0;j<registerId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${registerId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=0;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = true;
                }

                for(let j=3;j<adressesId.length;j++)
                {
                    document.querySelector(`#${tmpRigth[i]} option[value="${adressesId[j].toUpperCase()}"]`).disabled = false;
                }

                document.querySelector(`#${tmpRigth[i]}`).value = "SI+BP";
            }
        }
    })


});