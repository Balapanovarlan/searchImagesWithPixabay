import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = ({
    history,
    onSearch
}) => {
  return (
    <div className={styles.sidebar}>
        <h2>История запросов</h2>
        <ul>
            {
                history.map((item, index)=>(
                    <li key={index} onClick={
                        ()=> onSearch(item)
                    }>
                        {item}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Sidebar