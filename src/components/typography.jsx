export const SectionTitle = ({ children, classes }) => (
    <h2 className={"uppercase text-4xl md:text-6xl text-slate-800 font-medium "+classes}>{children}</h2>
)

export const SectionParagraph = ({ children, classes }) => (
    <p className={"text-md md:text-xl lg:text-2xl text-slate-600 "+classes}>{children}</p>
)

export const TextButton = ({children, onClick=()=>{}}) => (
    <div>
        <button onClick={onClick} className="font-medium text-slate-800 text-xl">{children}</button>
    </div>
)

export const Section = ({children, classes}) => (
    <div className={`flex flex-col gap-12 ${classes}`}>
        {children}
    </div>
)
