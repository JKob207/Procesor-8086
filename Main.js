window.addEventListener('DOMContentLoaded', () => {
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
 

});