
import type { NextPage } from 'next'
import styles from 'styles/Content.module.css'

const Content: NextPage = () => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.text}><strong><span>350</span>만 명</strong>의 사용자</div>
     <div className={styles.text}><strong><span>21</span>만 개</strong>의 리뷰</div>
     <div className={styles.text}><strong><span>650</span>만 개</strong>의 저장</div>
    </div> 
  )
}

export default Content
