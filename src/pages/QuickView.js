import Cover from "../components/Cover";
import CustomButton from "../components/CustomButton";
import "../styles/components/quickview.scss";
import search from "../assets/images/search.svg";
import { useNavigate } from "react-router-dom";

const cryptocurrencies = [
  {
    name: "Bitcoin",
    image: require("../assets/images/bit.svg").default,
  },
  {
    name: "Ethereum",
    image: require("../assets/images/ethe.svg").default,
  },
  {
    name: "Solana",
    image: require("../assets/images/sola.svg").default,
  },
  {
    name: "Quant",
    image: require("../assets/images/quan.svg").default,
  },
  {
    name: "Cardano",
    image: require("../assets/images/cardana.svg").default,
  },
  {
    name: "Cosmos",
    image: require("../assets/images/cosmos.svg").default,
  },
  {
    name: "Polygon",
    image: require("../assets/images/polygon.svg").default,
  },
  {
    name: "VeChain",
    image: require("../assets/images/vechain.svg").default,
  },
  {
    name: "DAX",
    image: require("../assets/images/dax.svg").default,
  },
  {
    name: "GD",
    image: require("../assets/images/gd.svg").default,
  },
  {
    name: "US",
    image: require("../assets/images/us.svg").default,
  },
];

export default function QuickView() {
  const para =
    "In this section you will find answers to the most important questions about cryptocurrencies. In addition, some sections provide you with additional materials in the form of videos, documents or affiliate links that can help you gain an even deeper understanding.";
  const navigate = useNavigate();
  return (
    <>
      <Cover heading={"Cryptocurrencies"} para={para} btnText={"Explore Now"} />
      <div className="quick">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end position-relative">
              <div style={{ width: "360px" }} className="search-div">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="custom-search"
                  placeholder="search..."
                />
                <img src={search} alt="search-icon" className="search" />
              </div>
            </div>
          </div>
          <div className="digital">
            {cryptocurrencies.map((currency, index) => (
              <div className="one" key={index}>
                <div>
                  <img src={currency.image} alt={currency.name} />
                </div>
                <div className="my-4">
                  <h2>{currency.name}</h2>
                </div>
                <div style={{ width: "165px" }}>
                  <CustomButton
                    text={"Quick View"}
                    styles={{ borderRadius: "4px", width: "100%" }}
                    onClick={() => navigate("/bitcoin")}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
