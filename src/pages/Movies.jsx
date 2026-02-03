import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";
import Header from "../components/Header";
import NumberedRow from "../components/NumberedRow";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";

const Movies = () => {
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
        title="Action"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Adventure"
        fetchUrl={requests.fetchAdventureMovies}
      />
      <Row
        title="Sci-Fi"
        fetchUrl={requests.fetchSciFiMovies}
      />
      <Row
        title="Animated"
        fetchUrl={requests.fetchAnimatedMovies}
      />
      <Row
        title="War"
        fetchUrl={requests.fetchWarMovies}
      />
      <Row
        title="Thriller"
        fetchUrl={requests.fetchThrillerMovies}
      />
      <Row
        title="Documentry"
        fetchUrl={requests.fetchDocumentryMovies}
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

export default Movies