import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";
import NumberedRow from "../components/NumberedRow";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import HeaderKids from "../components/HeaderKids";

const Children = () => {
  return (
    <div className="bg-[#111] min-h-screen">
      <HeaderKids/>
      <Banner/>
      <div className="-mt-32 px-6 bg-transparent relative">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixKidsOriginals}
      />
      <Row
        title="Kids TV Shows"
        fetchUrl={requests.fetchKidsTV}
      />
      <Row
        title="Family Time"
        fetchUrl={requests.fetchFamilyTV}
      />
      <Row
        title="Kids Movies"
        fetchUrl={requests.fetchKidsMovies}
      />
      <Row
        title="Comedy Shows"
        fetchUrl={requests.fetchKidsComedyTV}
      />
      <Row
        title="Animated Series"
        fetchUrl={requests.fetchKidsAnimationTV}
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

export default Children;
