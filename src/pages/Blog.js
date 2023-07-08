import Cover from "../components/Cover";
import "../styles/components/blog.scss";
import search from "../assets/images/search.svg";
import { Tab } from "bootstrap";
import { Tabs } from "react-bootstrap";
import quant from "../assets/images/quant.svg";
import clicks from "../assets/images/clicks.svg";
import solana from "../assets/images/solana.svg";
import ethereum from "../assets/images/etherium.svg";
import bitcoin from "../assets/images/bitcoin.svg";
import CustomButton from "../components/CustomButton";
import { useContext } from "react";
import { ApiDataContext } from "../services/context/ApiData";
import { useNavigate } from "react-router-dom";

const photos = [quant, solana, ethereum, bitcoin];

export default function Blog() {
  const { blogs } = useContext(ApiDataContext);

  const heading = "Our Latest Blog & News";
  const para =
    "In this section you will find answers to the most important questions about cryptocurrencies. In addition, some sections provide you with additional materials in the form of videos, documents or affiliate links that can help you gain an even deeper understanding.";
  return (
    <>
      <Cover heading={heading} para={para} btnText={"Read Now"} />
      <div className="events">
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-6 text">
              <h2>News & Events</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div
              className="col-6 d-flex justify-content-end position-relative"
              style={{ width: "240px" }}
            >
              <input
                type="search"
                name="search"
                id="search"
                className="custom-search"
                placeholder="search..."
              />
              <img src={search} alt="search-icon" className="search-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container coin-tabs">
        <Tabs
          defaultActiveKey="all"
          id="justify-tab-example"
          className="mb-5"
          justify
        >
          <Tab eventKey="all" title="All">
            <TabData blogs={blogs} />
            <div className="d-flex justify-content-center mb-5">
              <div className="mb-5">
                <CustomButton
                  text={"Load More"}
                  styles={{ borderRadius: "4px" }}
                />
              </div>
            </div>
          </Tab>
          <Tab eventKey="bitcoin" title="Bitcoin">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "bitcoin")}
            />
          </Tab>
          <Tab eventKey="ethereum" title="Ethereum">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "ethereum")}
            />
          </Tab>
          <Tab eventKey="cardano" title="Cardano">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "cardano")}
            />
          </Tab>
          <Tab eventKey="cosmos" title="Cosmos">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "cosmos")}
            />
          </Tab>
          <Tab eventKey="polygon" title="Polygon">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "polygon")}
            />
          </Tab>
          <Tab eventKey="quant" title="Quant">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "quant")}
            />
          </Tab>
          <Tab eventKey="solana" title="Solana">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "solana")}
            />
          </Tab>
          <Tab eventKey="vechain" title="VeChain">
            <TabData
              blogs={blogs.filter((blog) => blog.category === "veChain")}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

const TabData = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className="currencies">
      {blogs.map((blog) => {
        return (
          <div
            className="currency"
            onClick={() => navigate("/bitcoin/blog", { state: { blog } })}
          >
            <div className="image">
              <div className="name">{blog.category}</div>
              <div className="img">
                <img
                  src={photos[Math.floor(Math.random() * photos.length)]}
                  alt="quant"
                  width={"173px"}
                  height={"120px"}
                />
              </div>
              <div className="date">{blog.date}</div>
            </div>
            <h4>{blog.heading}</h4>
            <p>{blog.sections[0].description.slice(0, 67)}</p>
            <div className="more">
              <p className="read">Read More &gt;</p>
              <p className="clicks">
                <img src={clicks} alt="click" /> 12k clicks
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
