import { useState, useEffect } from 'react'

export default function useCounter(max: number) {
  const [count, setCount] = useState(0)
  let step = 1
  useEffect(() => {
    const counter = setInterval(() => {
      setCount(Math.round(max * (step / 100)))
      if (step === 100) {
        clearInterval(counter)
      } else {
        step++
      }
    }, 0)
  }, [])
  return count
}
