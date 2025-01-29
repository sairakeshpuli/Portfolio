import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "mloflo.com",
    image: "https://mloflo.com/wp-content/uploads/2022/06/mloflo-fb.png",
    link: "https://mloflo.com/",
  },
  {
    id: 2,
    name: "Helixsense",
    link: "https://helixsense.com/",
    image: "https://helixsense.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-19-at-4.18.12-PM.webp",
  },
  {
    id: 2,
    name: "Feet first",
    image: "https://portal.feetfirstnp.org/assets/undraw_meditation-074dc35a.svg",
    link: "https://www.feetfirstnp.org/",
  },
  {
    id: 2,
    name: "Emoji Game",
    image: "https://img.craftpix.net/2022/02/Emoji-Quiz-Game-GUI-Kit.jpg",

    link: "https://rakeshemoji.ccbp.tech",
  },
  {
    id: 3,
    name: "Emoji Game",
    image: "https://img.craftpix.net/2022/02/Emoji-Quiz-Game-GUI-Kit.jpg",

    link: "https://rakeshemoji.ccbp.tech",
  },
  {
    id: 3,
    name: "Feet first",
    image: "https://portal.feetfirstnp.org/assets/undraw_meditation-074dc35a.svg",
    link: "https://www.feetfirstnp.org",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }


  const filteredItems =
    filteredvalue === 1
      ? portfolioData.filter((item) => item.id === 2)
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link}>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>Visit</button>

                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
