import { createContext, useCallback, useContext, useState } from "react";

const DarkmodeContext = createContext();

export const useDarkmode = () => useContext(DarkmodeContext);

export const DarkmodeProvider = ({children}) => {
    const [darkmode, setDarkmode] = useState(true);
    const toggle = useCallback(() => setDarkmode(d => !d), [setDarkmode]);
    return (
        <DarkmodeContext.Provider value={{darkmode, toggle}}>
            <div className={darkmode && "dark"}>
                {children}
            </div>
        </DarkmodeContext.Provider>
    )
}