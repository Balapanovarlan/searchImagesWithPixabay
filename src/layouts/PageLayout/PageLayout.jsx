import React from 'react'
import styles from "./PageLayout.module.css";
import Home from '../../pages/Home/Home';
import Sidebar from '../../components/Sidebar/Sidebar';
import Filter from '../../components/Filter/Filter';
import Images from '../../components/Images/Images';
import Search from '../../components/Search/Search';


const PageLayout = ({
  images, 
  history, 
  onSearch, 
  filter,
  setFilter,
}) => {
  return (
    <div className={styles.wrapper}>
        <Sidebar
            history={history} 
            onSearch={onSearch}
        />
        <div className={styles.contentWrapper}>
          <Search
              onSearch={onSearch}
          />
          <Filter
              filter={filter}
              setFilter={setFilter}
          />
          <Images
            images={images}
          />
        </div>
      
    </div>
  )
}

export default PageLayout