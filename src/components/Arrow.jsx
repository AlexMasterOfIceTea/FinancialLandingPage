export const AnimatedArrow = ({attr="", fromColor="white", toColor="orange", size=1}) => (
    <div className={"relative min-w-max"+attr}>
        <div className="absolute 
            scale-75 md:scale-100 inset-0 opacity-100 
            group-hover:opacity-0 group-hover:translate-x-16 
            transition-all duration-300
        ">
            <Arrow width={50*size} height={25*size} stroke={fromColor} />
        </div>
        <div className="absolute scale-75 md:scale-100 
            inset-0 invisible group-hover:visible opacity-0 
            group-hover:opacity-100 -translate-x-16 group-hover:translate-x-0 
            transition-all duration-300
        ">
            <Arrow width={50*size} height={25*size} stroke={toColor} />
        </div>
    </div>
);

export const Arrow = ({width, height, stroke="white"}) => (
    <svg {...{width, height}} viewBox="0 0 100 50">
        <line x1="5" y1="25" x2="95" y2="25" stroke={stroke} strokeWidth="5" strokeLinecap="round"/>
        <line x1="75" y1="5" x2="95" y2="25" stroke={stroke} strokeWidth="5" strokeLinecap="round"/>
        <line x1="75" y1="45" x2="95" y2="25" stroke={stroke} strokeWidth="5" strokeLinecap="round"/>
    </svg>
) 