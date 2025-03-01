import React, { useEffect, useState } from 'react'
import axios from "axios";
import PageLayout from '../../layouts/PageLayout/PageLayout'
import { API_URL } from '../../constants/constants';

const Home = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const [images, setImages] = useState([]);
  const [history, setHistory] = useState([]);
  const [sortedImages, setSortedImages] = useState([]);
  const [filter, setFilter] = useState("likes");


  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (savedHistory) {
      setHistory(savedHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  const searchImages = async (query) =>{
    const response = await axios.get(API_URL, {
      params:{
          key: API_KEY,
          q: query,
          image_type: 'photo',
          order: 'popular',
      },
    });
    setImages(response.data.hits);
    setHistory((prev) => (prev.includes(query) ? prev : [query, ...prev]));
  }

  useEffect(()=>{
    if(filter === 'likes'){
      setSortedImages(images);
    }else{
      const sorted = [...images].sort((a, b) => b[filter] - a[filter]);
      setSortedImages(sorted);
    }
  },[filter,images])
  return (
    <PageLayout
        images = {sortedImages}
        history = {history}
        onSearch = {searchImages}
        filter = {filter}
        setFilter = {setFilter}
    />
  )
}

export default Home