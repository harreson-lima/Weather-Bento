/* eslint-disable react/prop-types */
import styles from "./Block.module.css"

function Block({card}) {

  return (
    <div className={`${styles.block} ${card && styles.card}`}>
    </div>
  )
}

export default Block