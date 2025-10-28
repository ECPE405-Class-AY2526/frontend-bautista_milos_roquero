import React, { useState, useEffect } from 'react';
import { Search, Download, Plus, Edit2, Trash2, Settings, LogOut, Users, AlertTriangle } from 'lucide-react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { getAdminDashboardData, logout } from '../../api/authService';
import logo from "../../assets/images/logo2.png";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const data = await getAdminDashboardData();
        setUsers(data.users || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        if (err.message.includes('Not authorized')) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [navigate]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role.toLowerCase() === roleFilter.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="dashboard-container">
      {error && (
        <div className="error-banner">
          <AlertTriangle size={20} />
          <span>{error}</span>
        </div>
      )}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading admin dashboard...</p>
        </div>
      )}
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
          <div class="logo-section">
          <div class="logo-box">
          <img src={logo} alt="" class="sidebar-logo" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-section">
          <button className="nav-item active">
            <Users size={16} />
            <span>Users</span>
          </button>
          <button className="nav-item">
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </nav>

        {/* Log Out */}
        <button 
          className="nav-item logout"
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          <LogOut size={16} />
          <span>Log Out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>USER MANAGEMENT</h1>
          <p>Manage all users in one place. Control access, assign roles, and monitor activity across your platform.</p>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <div className="toolbar">
            <div className="toolbar-left">
              <div className="search-box">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="role-filter">
                <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                  <option value="all">Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            <div className="toolbar-right">
              <button className="btn-secondary">
                <Download size={18} />
                Export
              </button>
              <button className="btn-primary">
                <Plus size={18} />
                Add User
              </button>
            </div>
          </div>

          <div className="user-table-card">
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td className="username">{user.username}</td>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <div className="actions">
                          <button className="icon-btn">
                            <Edit2 size={16} />
                          </button>
                          <button className="icon-btn delete">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}