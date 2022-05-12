function saveToMemory(type, adress, number)
{
    finallAdress = finallAdressCount(adress);

    if (localStorage.getItem(`${type}:${finallAdress}`) != null) {
        localStorage.removeItem(`${type}:${finallAdress}`);  
    }
    localStorage.setItem(`${type}:${finallAdress}`, number);
}

function getFromMemory(type, adress)
{
    let finallAdress = finallAdressCount(adress);
    
    if(localStorage.getItem(`${type}:${finallAdress}`) == null)
    {
        return "";
    }
    return localStorage.getItem(`${type}:${finallAdress}`);
}

function xchgMemoryRegister(type,adress,number)
{
    let finallAdress = finallAdressCount(adress);

    const current = localStorage.getItem(`${type}:${finallAdress}`);
    localStorage.removeItem(`${type}:${finallAdress}`);
    localStorage.setItem(`${type}:${finallAdress}`, number);
    return current;
}

function finallAdressCount(adress)
{
    adressesTab = adress.split("+");
    let finallAdress = 0;
    adressesTab.forEach(element => {
        finallAdress += parseInt(element, 16);
    });
    return finallAdress.toString(16).toUpperCase();
}