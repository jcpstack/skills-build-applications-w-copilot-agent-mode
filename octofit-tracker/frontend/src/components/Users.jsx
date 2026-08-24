import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import DataView from './DataView.jsx'

const endpoint = '/api/users/'

function Users() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchCollection(endpoint).then(setItems).catch(() => setError(true)).finally(() => setLoading(false))
  }, [])

  return <DataView description="Your athlete roster, ready for the next session." error={error} items={items} loading={loading} title="Athletes" />
}

export default Users