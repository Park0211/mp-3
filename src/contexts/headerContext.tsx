import { createContext} from "react";

export const headerContext = createContext({
    title: "",
    explain : "",
    setHeader : (title:string, explain: string)=>{
        console.log(title + explain)
    },
})


