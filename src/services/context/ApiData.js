import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../BASE_URL";

export const ApiDataContext = createContext();

export default function ApiDataContextProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getBlogs();
    getFAQS();
  }, []);
  const getBlogs = () => {
    axios
      .get(`${base_url}api/blogs`)
      .then((response) => {
        const data = response.data;
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getFAQS = () => {
    axios
      .get(`${base_url}api/faqs`)
      .then((response) => {
        const data = response.data;
        setFaqs(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ApiDataContext.Provider value={{ blogs, faqs }}>
      {children}
    </ApiDataContext.Provider>
  );
}
