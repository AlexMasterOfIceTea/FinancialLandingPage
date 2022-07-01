export const investIcon = (
    <svg width="50" height="50" viewBox="0 0 100 100">
        <rect x="5" y="45" height="50" width="20" fill="none" stroke="orange" strokeWidth="3" />
        <rect x="40" y="25" height="50" width="20" fill="none" stroke="orange" strokeWidth="3" />
        <rect x="75" y="5" height="50" width="20" fill="none" stroke="orange" strokeWidth="3" />
    </svg>
);

//Photo by <a href="https://unsplash.com/@tiend_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">TienDat Nguyen</a> on <a href="https://unsplash.com/s/photos/meeting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  

export const fancyGraph = (
    <svg width="50" height="50" viewBox="0 0 100 100" stroke="orange" strokeWidth="3">
        <path d="M5 50 Q20 10, 35 50 T65 40 T95 30" fill="none" />
        <circle cx="20" cy="30" r="7" fill="white" />
        <circle cx="63" cy="45" r="7" fill="white" />
    </svg>
);

export const diamond = (
    <svg width="50" height="50" viewBox="-3 -3 106 106" stroke="orange" strokeWidth="3" fill="none">
        <polyline points="0,30 20,0 80,0 100,30 50,100 0,30 100,30" />
        <polyline points="25,30 40,0 60,0 75,30 50,100 25,30" />
    </svg>
);


export const lock = (
    <svg width="100" height="100" viewBox="-3 -3 106 160" fill="none" stroke="orange" strokeWidth="3">
        <rect x="0" y="30" ry="10" rx="10" width="70" height="70" />
        <path d="M15 30 L15 20 A1 1, 0, 0 1, 55 20 L55 30" />
        <path d="M20 30 L20 20 A1 1, 0, 0 1, 50 20 L50 30" />
        <path d="M33 65 L30 85 L40 85 L37 65 A5 5, 0, 1 0, 33 65 Z" />
    </svg>
);

export const chair = (
    <svg width="100" height="100" viewBox="-3 -3 106 160" fill="none" stroke="orange" strokeWidth="3">
        <path d="
            M0 70 A70 70,0, 0 0, 100 70 
            M88 79 A70 70,0, 0 1, 88 0
            L100 0        
            M12 79 A70 70,0, 0 0, 20 30
            M10 30 L76 30
            M20 60 L78 60"/>
    </svg>
);

export const coin = (
    <svg width="100" height="100" viewBox="-3 -3 106 160" fill="none" stroke="orange" strokeLinecap="round" strokeWidth="3">
        <circle cx="50" cy="20" r="20"/>
        <line x1="35" y1="50" x2="35" y2="80"/>
        <line x1="50" y1="70" x2="50" y2="100" />
        <line x1="65" y1="50" x2="65" y2="80"/>

        <path d="
            M55 14 C55 7 45 7 45 14
            S55 19 55 26
            S45 33 45 26
        " strokeWidth="2"/>

        <line x1="50" y1="5" x2="50" y2="35" strokeWidth="1"/>
    </svg>
);

export const LaptopStand = ({ classes, width, height }) => (
    <svg className={classes} {...{ width, height }} viewBox="-3 -3 106 36" stroke="black" fill="none" strokeWidth="1">
        <path d="M0 30 L100 30 Q100 0, 80 0 L20 0 Q0 0, 0 30 Z" />
    </svg>
);
