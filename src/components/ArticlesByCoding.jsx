import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import * as api from '../api'

export default function ArticlesByCoding() {
  const [articles, selectArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    
  })






    return (
      <div className="articlesbycoding">
        <p>no</p>
    </div>
    );
  };