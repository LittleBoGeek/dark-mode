import React, {useEffect} from "react"
import { useLocalStorage } from './useLocalStorage';


  const useDarkMode = () => {

    const [value, setValue] = useLocalStorage("darkMode")

    useEffect (() => {
        if (value) {
            window.document.body.classList.add("dark-mode");
            
        } else {
            window.docment.body.add.classList.remove("dark-mode")
        }
    }, [value]);
    return [value, setValue];
}


export default useDarkMode