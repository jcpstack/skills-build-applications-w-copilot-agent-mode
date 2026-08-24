function formatValue(value) {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function DataView({ title, description, items, loading, error }) {
  const columns = items.length > 0
    ? Object.keys(items[0]).filter((key) => key !== '_id').slice(0, 5)
    : []

  return (
    <section className="view-section">
      <div className="section-heading">
        <div>
          <span className="section-index">01 / 05</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <span className="record-count">{items.length.toString().padStart(2, '0')} records</span>
      </div>
      {loading && <div className="state-panel"><span className="loader" />Loading data</div>}
      {error && <div className="state-panel error-state">Unable to reach the API. Check that the backend is running on port 8000.</div>}
      {!loading && !error && items.length === 0 && (
        <div className="state-panel empty-state">
          <span className="empty-glyph">+</span>
          <strong>No records yet</strong>
          <span>Your connected API returned an empty collection.</span>
        </div>
      )}
      {!loading && !error && items.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead><tr>{columns.map((column) => <th key={column}>{column.replaceAll('_', ' ')}</th>)}</tr></thead>
            <tbody>{items.map((item, index) => <tr key={item._id || item.id || index}>{columns.map((column) => <td key={column}>{formatValue(item[column])}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default DataView