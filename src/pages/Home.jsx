import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";
import Header from "../components/Header";
import NumberedRow from "../components/NumberedRow";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#111] min-h-screen">
      <Header2/>
      <Banner />
      <div className="-mt-32 px-6 bg-transparent relative">
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <NumberedRow
        title="Top 10 movies in India Today"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="New Movies"
        fetchUrl={requests.fetchUpcomingMovies}
      />
      <Row
        title="Popular Movies"
        fetchUrl={requests.fetchPopularMovies}
      />
      </div>
      <div>

      </div>
      <div className="px-6 ml-6">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
