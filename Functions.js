function saveToMemory(type, adress, number)
{
    if (localStorage.getItem(`${type}:${adress}`) != null) {
        localStorage.removeItem(`${type}:${adress}`);  
    }
    localStorage.setItem(`${type}:${adress}`, number);
}

function getFromMemory(type, adress)
{
    if(localStorage.getItem(`${type}:${adress}`) == null)
    {
        return "";
    }
    return localStorage.getItem(`${type}:${adress}`);
}

function xchgMemoryRegister(type,adress,number)
{
    const current = localStorage.getItem(`${type}:${adress}`);
    localStorage.removeItem(`${type}:${adress}`);
    localStorage.setItem(`${type}:${adress}`, number);
    return current;
}