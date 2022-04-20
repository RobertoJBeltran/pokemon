import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import {useState} from 'react'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const [limit, setLimit] = useState('10')
  
  const { data, error } = useSWR(`/api/pokemon?limit=${limit}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  function handleChange(e) {
    setLimit(e.target.value);
  }

  return (
    <>
      <select value={limit} onChange={handleChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <div>
        {
          data.pokemon.map((pokeman, id)=>{
            return <p key={id}>{pokeman.name}</p>
          })
        }
      </div>
    </>
  )
}
//drop down box increments 10, changes limit
