import fetch from "node-fetch";

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all(arrayURL.map (async url =>{
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;
} 

function geraArrrayDeURL(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURL(arrayLinks){ 
    const links = geraArrrayDeURL(arrayLinks)
    const statusLinks = await checaStatus(links); 
    return statusLinks;
}

export default validaURL;