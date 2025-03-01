import React from 'react'
import styles from './Filter.module.css'
const Filter = ({
    filter,
    setFilter
}) => {
  return (
    <div className={styles.filter}>
        <label>Сортировать по:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="likes">Лайкам</option>
            <option value="views">Просмотрам</option>
            <option value="comments">Комментариям</option>
        </select>
    </div>
  )
}

export default Filter