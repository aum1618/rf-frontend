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

// Example usage:
const data = [
  {
    id: 1,
    category: "Wallets",
    question: "What is a hardware wallet?",
    answer:
      "A hardware wallet is a physical device that stores your cryptocurrency keys offline. This makes it much more secure than storing your keys on a computer or mobile phone.",
    created_at: "2023-07-04",
  },
  {
    id: 2,
    category: "Wallets",
    question: "How do I choose a cryptocurrency wallet?",
    answer:
      "When choosing a cryptocurrency wallet, there are a few factors you should consider, such as the type of wallet, the security features, and the fees.",
    created_at: "2023-07-04",
  },
  {
    id: 3,
    category: "Wallets",
    question: "How do I secure my cryptocurrency wallet?",
    answer:
      "There are a number of things you can do to secure your cryptocurrency wallet, such as using a strong password, backing up your keys, and keeping your wallet offline.",
    created_at: "2023-07-04",
  },
  {
    id: 4,
    category: "Purchase",
    question:
      "What is the difference between a centralized exchange and a decentralized exchange?",
    answer:
      "A centralized exchange is an exchange that is owned and operated by a single entity. A decentralized exchange is an exchange that is run on a peer-to-peer network.",
    created_at: "2023-07-04",
  },
  {
    id: 5,
    category: "Purchase",
    question: "How do I find a reputable cryptocurrency exchange?",
    answer:
      "When looking for a cryptocurrency exchange, there are a few things you should consider, such as the exchange's reputation, the fees, and the supported cryptocurrencies.",
    created_at: "2023-07-04",
  },
  {
    id: 6,
    category: "Purchase",
    question: "How do I buy cryptocurrency with fiat currency?",
    answer:
      "To buy cryptocurrency with fiat currency, you will need to find an exchange that supports fiat deposits. Once you have deposited fiat currency into your account, you can then buy cryptocurrency.",
    created_at: "2023-07-04",
  },
  {
    id: 7,
    category: "Custody",
    question: "What are the benefits of using a custody service?",
    answer:
      "There are a number of benefits to using a custody service, such as increased security, convenience, and peace of mind.",
    created_at: "2023-07-04",
  },
  {
    id: 8,
    category: "Custody",
    question: "What are the risks of using a custody service?",
    answer:
      "There are a few risks associated with using a custody service, such as the risk of the custodian losing your funds or the risk of the custodian being hacked.",
    created_at: "2023-07-04",
  },
  {
    id: 9,
    category: "Custody",
    question: "How do I choose a reputable custody service?",
    answer:
      "When choosing a custody service, there are a few things you should consider, such as the service's reputation, the security features, and the insurance policies.",
    created_at: "2023-07-04",
  },
  {
    id: 10,
    category: "Transaction",
    question: "What is a blockchain?",
    answer:
      "A blockchain is a distributed ledger that records transactions in a secure and transparent way.",
    created_at: "2023-07-04",
  },
  {
    id: 11,
    category: "Transaction",
    question: "How does a cryptocurrency transaction work?",
    answer:
      "A cryptocurrency transaction works by sending cryptocurrency from one wallet to another. The transaction is recorded on the blockchain, which ensures that it is secure and transparent.",
    created_at: "2023-07-04",
  },
  {
    id: 12,
    category: "Transaction",
    question: "What is a confirmation?",
    answer:
      "A confirmation is a block that has been added to the blockchain. Once a transaction has been confirmed, it is considered to be irreversible.",
    created_at: "2023-07-04",
  },
];

const sortedData = sortQuestionsByCategory(data);
console.log(sortedData);
