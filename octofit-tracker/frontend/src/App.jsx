import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { to: '/activities', label: 'Activities', icon: '↗' },
  { to: '/leaderboard', label: 'Leaderboard', icon: '◎' },
  { to: '/teams', label: 'Teams', icon: '◌' },
  { to: '/users', label: 'Athletes', icon: '◉' },
  { to: '/workouts', label: 'Workouts', icon: '▦' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark" aria-hidden="true">OF</div>
        <div className="brand-copy">
          <span className="eyebrow">OctoFit</span>
          <strong>Tracker</strong>
        </div>
        <div className="sidebar-rule" />
        <p className="nav-label">Workspace</p>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              key={item.to}
              to={item.to}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="status-dot" />
          API connected
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="kicker">Performance hub</p>
            <h1>Train with intent.</h1>
          </div>
          <div className="date-chip">Season 01 <span>•</span> 2026</div>
        </header>
        <Routes>
          <Route element={<Navigate replace to="/activities" />} path="/" />
          <Route element={<Activities />} path="/activities" />
          <Route element={<Leaderboard />} path="/leaderboard" />
          <Route element={<Teams />} path="/teams" />
          <Route element={<Users />} path="/users" />
          <Route element={<Workouts />} path="/workouts" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <section className="empty-view">
      <span className="section-index">404</span>
      <h2>Page not found</h2>
      <NavLink className="back-link" to="/activities">Return to activities</NavLink>
    </section>
  )
}

export default App
