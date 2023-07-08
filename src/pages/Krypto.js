import React, { useState } from "react";
import Cover from "../components/Cover";
import know1 from "../assets/images/know1.svg";
import know2 from "../assets/images/know2.svg";
import know3 from "../assets/images/know3.svg";
import know4 from "../assets/images/know4.svg";
import KryptoCard from "../components/KryptoCard";
import QA from "../components/QA";
import { useContext } from "react";
import { ApiDataContext } from "../services/context/ApiData";
import { useEffect } from "react";

export default function Krypto() {
  const { faqs } = useContext(ApiDataContext);
  const [sortedFaqs, setSortedFaqs] = useState();
  useEffect(() => {
    setSortedFaqs(sortQuestionsByCategory(faqs));
  }, [faqs]);

  function sortQuestionsByCategory(data) {
    // Create an empty object to store the categorized questions
    const categorizedQuestions = {};

    // Iterate over the data and categorize the questions
    for (const question of data) {
      const { category } = question;

      if (categorizedQuestions.hasOwnProperty(category)) {
        categorizedQuestions[category].push(question);
      } else {
        categorizedQuestions[category] = [question];
      }
    }

    // Convert the categorized object into an array
    const sortedQuestions = Object.entries(categorizedQuestions).map(
      ([category, questions]) => {
        return { category, questions };
      }
    );

    return sortedQuestions;
  }

  //
  const tabs = [
    "stocks",
    "indices",
    "ETF's",
    "Commodities",
    "Cryptocurrencies",
    "Forex",
    "bonds",
  ];
  const cards = [
    {
      icon: know1,
      title: "Purchase",
      detail:
        "What should be considered when making a purchase? Where do I buy cryptocurrencies? How do I buy...",
    },
    {
      icon: know2,
      title: "Wallets",
      detail:
        "What is a wallet? What types are there? What are their advantages and disadvantages? Where do I buy a...",
    },
    {
      icon: know3,
      title: "Custody",
      detail:
        "How do I set up a cold wallet? What do I have to consider regarding safekeeping? Why should ...",
    },
    {
      icon: know4,
      title: "Transaction",
      detail:
        "How do I send cryptocurrencies? What should I put attention on? What happens if I...",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("stocks");
  return (
    <div>
      <Cover
        heading="Crypto Knowledge Hub"
        para="In this section you will find answers to the most important questions about cryptocurrencies. In addition, some sections provide you with additional materials in the form of videos, documents or affiliate links that can help you gain an even deeper understanding."
        btnText="Explore now"
      />
      <div className="px-[10px] sm:px-[80px]">
        <div className="flex sm:overflow-hidden overflow-scroll space-x-4 justify-between items-center my-8 border-b border-black px-4">
          {tabs.map((tab) => (
            <button
              onClick={() => setSelectedTab(tab)}
              className={`${
                selectedTab === tab && "border-b-4 border-[#E0B83C] "
              } pb-3 text-[16px] font-[1000] capitalize`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-16 ">
          {cards &&
            cards.map((card, index) => (
              <KryptoCard
                key={index}
                icon={card.icon}
                detail={card.detail}
                title={card.title}
              />
            ))}
        </div>
        <h1 className="text-[36px] font-[800] text-center mb-12">Purchase</h1>
        <div className="pb-20">
          {sortedFaqs &&
            sortedFaqs.map((category) => {
              const { questions } = category;
              return questions.map((item, index) => (
                <QA
                  key={item.id}
                  icons={index === questions.length - 1 ? [] : []} // Empty array for all items
                  answer={item.answer}
                  question={item.question}
                  showBorder={index === questions.length - 1} // Set to true for the last item
                  heading={index === 0 ? category.category : ""} // Set category as heading for the first item
                  info="" // Set info to an empty string for all items
                  btn={true} // Set btn prop to true for all items
                />
              ));
            })}
        </div>
      </div>
    </div>
  );
}
