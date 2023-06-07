import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRandomGreeting } from '../redux/greeting/greetingSlice'

const isObjEmpty = (object) => Object.keys(object).length === 0 && object.constructor === Object

export function Greeting() {
  const dispatch = useDispatch()
  const { greeting, status, error } = useSelector((store) => store.greeting)

  useEffect(() => {
    if (status !== 'idle') return
    dispatch(fetchRandomGreeting())
  }, [dispatch])

  let display = 'Loading...'
  switch (status) {
    case 'fulfilled':
      if (isObjEmpty(greeting)) {
        display = 'There are no greetings in the database yet!'
        break
      }
      display = greeting?.message
      break
    case 'rejected':
      display = error
  }

  return <h1>{display}</h1>
}
