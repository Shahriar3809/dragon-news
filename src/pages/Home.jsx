import BreakingNews from "../Components/BreakingNews";
import NewsCard from "../Components/NewsCard";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import {useLoaderData} from 'react-router-dom'

const Home = () => {
    const news = useLoaderData()
    
    return (
      <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar> 
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
                {
                    news.map((item)=> <NewsCard key={item._id} news={item}></NewsCard>)
                }
            </div>
            <div className="">
                <RightSideNav></RightSideNav>
            </div>
        </div>
      </div>
    );
};

export default Home;