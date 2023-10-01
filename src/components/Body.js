'use client'

import Banner from "./Banner";
import Categories from "./Categories";
import TodayDeal from "./TodayDeal";
import TopPicks from "./TopPicks";

function Body() {
    return (
        <>
            <Banner />
            <TodayDeal />
            <TopPicks />
            <Categories />
        </>
    )
}

export default Body;