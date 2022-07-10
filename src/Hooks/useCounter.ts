import { useState, useEffect } from 'react'

export default function useCounter(max: number) {
  const [count, setCount] = useState(0)
  let cur = count
  // TODO : 숫자 올라가는 속도 점점 느려지게
  useEffect(() => {
    const counter = setInterval(() => {
      setCount(cur)
      if (cur >= max) {
        clearInterval(counter)
      } else {
        cur++
      }
    }, 0)
  }, [cur, max])
  return count
}
