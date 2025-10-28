import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set, get) => ({
  // State
  user: null,
  token: localStorage.getItem("token") || "",
  loading: false,

  // Actions
  login: async (email, password) => {
    set({ loading: true });
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      console.log('Login response:', res.data); // Debug log
      
      if (!res.data) {
        throw new Error('No data received from server');
      }

      // Extract all user data from response
      const { token, _id, username, email: userEmail, role } = res.data;
      const user = { 
        _id, 
        username, 
        email: userEmail, 
        role: role || 'User' // Default to 'User' if role is not provided
      };
      
      console.log('Processed user data:', user); // Debug log
      
      // Store user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      
      // Update state
      set({
        token,
        user,
        loading: false,
      });
      
      return user; // Return the full user object
    } catch (err) {
      set({ loading: false });
      return false;
    }
  },

  register: async (username, email, password) => {
    set({ loading: true });
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        username,
        email,
        password,
      });
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      set({
        token,
        user,
        loading: false,
      });
      return true;
    } catch (err) {
      set({ loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({
      token: "",
      user: null,
    });
  },

  // Initialize user from token
  initializeAuth: async () => {
    const { token } = get();
    if (token && token !== "") {
      try {
        const res = await axios.get("/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        set({ user: res.data });
      } catch (err) {
        // Token is invalid, clear it
        get().logout();
      }
    }
  },
}));

export default useAuthStore;