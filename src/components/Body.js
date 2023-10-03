'use client'

import Banner from "./Banner";
import Categories from "./Categories";
import TodayDeal from "./TodayDeal";
import TopPicks from "./TopPicks";
import Image from "next/image";
import download from 'public/download.jpg'

function Body() {
    return (
        <div>
            <Image src={download} className="py-6"/>
            <Banner />
            <TodayDeal />
            <TopPicks />
            <Categories />
        </div>
    )
}

export default Body;