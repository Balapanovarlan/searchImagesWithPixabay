import React, { useEffect, useState } from 'react'
import styles from './Search.module.css';
import { SearchOutlined } from '@mui/icons-material';


const Search = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleSearch = ()=>{ 
            if (query.trim()) {
                onSearch(query);
            }
        
    }

  return (
    <div className={styles.wrapper}>
         <input
                className={styles.search}
                type="search"
                placeholder='Поиск картинки'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className={styles.btn}><SearchOutlined fontSize='large'/></button>
    </div>
  )
}

export default Search