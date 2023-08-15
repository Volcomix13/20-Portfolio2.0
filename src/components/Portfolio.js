import React from "react";

const portfolio =  [
  {
      title: "Musical Travelings",
      description: "A blog to organize and archive my journey as I travel the US (mostly California) to see kpop groups",
      image: "./Dreamcatcher.svg",
      link: "https://www.google.com/",
  }
];


const Portfolio = () => {

    return (
        <section id="portfolio" >
            <div>
                <h1>
                    Projects I have worked on
                </h1>
            </div>
            <div>
                {portfolio.map((portfolio) => (
                    <a
                    href={portfolio.link}
                    key={portfolio.image}>
                    <div>
                      <img
                        alt="images"
                        src={portfolio.image}
                      />
                      <div>
                        <h1>
                          {portfolio.title}
                        </h1>
                        <p>{portfolio.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
        
        </section>
    )
};


export default Portfolio;