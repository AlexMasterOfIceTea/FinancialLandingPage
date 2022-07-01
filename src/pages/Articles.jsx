import { useState } from "react";
import { SectionTitle, TextButton } from "../components/typography";

const articlesFromNetwork = [{
    date: "March 14, 2022",
    title: "Fundamentals of success investment",
    imageSrc: "article1.jpg",
    attribution: <>Photo by <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pankaj Patel</a> on <a href="https://unsplash.com/s/photos/javascript?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></>
}, {
    date: "April 3, 2021",
    title: "Money doesn't grow on trees - unless them are ganja trees",
    imageSrc: "article2.jpg",
    attribution: <>Photo by <a href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">micheile || visual stories</a> on <a href="https://unsplash.com/s/photos/finance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></>

}, {
    date: "October 23, 2021",
    title: "To invest or not no invest | How Bitcoin can play a role in your retirement plan",
    imageSrc: "article3.jpg",
    attribution: <>Photo by <a href="https://unsplash.com/@peiobty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pierre Borthiry</a> on <a href="https://unsplash.com/s/photos/bitcoin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></>
}, {
    date: "November 16, 2020",
    title: "Get smart with your taxes by employing tax-smart, Bezoz approved strategies.",
    imageSrc: "article4.jpg",
    attribution: <>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/accounting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </>
}, {
    date: "March 14, 2022",
    title: <>Predict the stock marked by using <p className="line-through">illegaly obtained</p> publicly avalible insider knowledge </>,
    imageSrc: "article5.jpg",
    attribution: <>Photo by <a href="https://unsplash.com/@nick604?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Chong</a> on <a href="https://unsplash.com/s/photos/stock-market?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </>
}, {
    date: "January 24, 2022",
    title: "How to Recurse - a practical Guide",
    imageSrc: "article6.jpg",
    attribution: <>Photo by Alexander Schneider || Cool Logo Inc.</>
}];

const Article = ({title, date, imageSrc, attribution}) => (
    <div className="max-w-xl inline-block">
        <div className="flex flex-col items-start justify-center w-full mb-16">
            <a href="#" target="_blank">
                <img src={imageSrc}/>
            </a>    
            <p className="text-xs text-slate-700">{attribution}</p>
            <p className="text-slate-700 mt-8 text-md sm:text-lg lg:text-xl">{date}</p>
            <h2 className="text-slate-900 text-xl md:text-2xl lg:text-4xl font-medium">{title}</h2>
        </div>
    </div>
);

export const Articles = () => {
    const [a1, a2] = articlesFromNetwork;
    const [articles, setArticles] = useState([a1, a2]);
    const [index, setIndex] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const [endReached, setEndReached] = useState(false);
    const viewMore = () => {
        if(isLoading || endReached)   return;
        setIsLoading(true);
        setTimeout(() => {
            if (index+2 === articlesFromNetwork.length)
                setEndReached(true);
            setArticles(a => [...a, articlesFromNetwork[index], articlesFromNetwork[index+1]]);
            setIndex(i => i+2);
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="content mt-16 md:mt-32">
            <SectionTitle>Our Articles</SectionTitle>
            <div className="columns-md my-12 gap-x-12">
                {articles.map(v => <Article {...v}/>)}
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TextButton onClick={viewMore}>{endReached ? "End reached":"View more"}</TextButton>
            )}
        </div>
    )
}