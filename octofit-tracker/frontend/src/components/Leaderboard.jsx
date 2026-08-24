import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import DataView from './DataView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCollection(endpoint).then(setItems).catch(() => setError(true)).finally(() => setLoading(false))
  }, [])

  return <DataView description="See who is setting the pace across the OctoFit community." error={error} items={items} loading={loading} title="Leaderboard" />
}

export default Leaderboard