import type { NextPage } from 'next'

import styles from 'styles/Awards.module.css'

const Awards: NextPage = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={`${styles.Item} ${styles.Playstore}`}>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </div>
      <div className={`${styles.Item} ${styles.Apple}`}>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </div>
    </div>
  )
}
export default Awards
