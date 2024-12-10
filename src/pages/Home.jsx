import React from "react";
import GetJson from "../components/getJson";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jsonData from "../assets/data.json";

const Home = () => {
  const response = jsonData;

  console.log(jsonData);

  return (
    <div className="container">
      <Navbar />
      <main>
        <h1>Information om våra anställda</h1> <br />
        {response.map((post) => (
          <div class="card">
            <div key={post.id}>
              <h2>{post.userName}</h2>
              <p>E-post: {post.ePost}</p>
              <p>ID: {post.id}</p>
              <h3>Fakta om {post.userName}</h3>
              <p>Favorit rätt: {post.faktaOm.favoritRatt}</p>
              <p>Intresse: {post.faktaOm.intresse}</p>
              <p>Motto: {post.faktaOm.motto}</p>
              <p>Student: {post.student ? "Ja" : "Nej"}</p>

              <h3>Barn</h3>
              {post.faktaOm.barn && post.faktaOm.barn.length > 0 ? (
                <ul>
                  {post.faktaOm.barn.map((barn, index) => (
                    <li key={index}>
                      {barn.namn}, {barn["ålder"]} år
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Inga barn registrerade.</p>
              )}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
