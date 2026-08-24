import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import DataView from './DataView.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCollection(endpoint).then(setItems).catch(() => setError(true)).finally(() => setLoading(false))
  }, [])

  return <DataView description="A live pulse of every movement logged by your athletes." error={error} items={items} loading={loading} title="Activities" />
}

export default Activities