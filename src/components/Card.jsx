import { LearnMoreBtn, TextButton } from "./typography";

export const Card = ({ icon, title, description }) => (
    <div className={`pb-12 pt-24 px-12 rounded-md flex flex-col bg-white`}>
        {icon}
        <h2 className="mt-8 text-4xl tracking-wide font-medium text-slate-900" >{title}</h2>
        <p className="my-8 text-sm md:text-lg lg:text-xl text-slate-600">{description}</p>
        <TextButton>Learn More</TextButton>
    </div>
)