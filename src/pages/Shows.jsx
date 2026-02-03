import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";
import Header from "../components/Header";
import NumberedRow from "../components/NumberedRow";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const Shows = () => {
  return (
    <div className="bg-[#111] min-h-screen">
      <Header2/>
      <Banner />
      <div className="-mt-32 px-6 bg-transparent relative">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <NumberedRow
        title="Top 10 movies in India Today"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Action & Adventure Shows"
        fetchUrl={requests.fetchActionndAdventureShows}
      />
      <Row
        title="Comedy Shows"
        fetchUrl={requests.fetchComedyShows}
      />
      <Row
        title="Mystery Shows"
        fetchUrl={requests.fetchMysteryShows}
      />
      <Row
        title="Sci-Fi & Fantasies"
        fetchUrl={requests.fetchSciFindFantasyShows}
      />
      <Row
        title="Drama"
        fetchUrl={requests.fetchDramaShows}
      />
      <Row
        title="Family Series"
        fetchUrl={requests.fetchFamily}
      />
      <Row
        title="Documentry"
        fetchUrl={requests.fetchDocumentry}
      />
      </div>
      <div>

      </div>
      <div className="px-6 ml-6">
        <Footer/>
      </div>
    </div>
  );
}

export default Shows