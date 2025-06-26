import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import PermissionGuard from "./components/PermissionGuard";
import HomeLayout from "./Pages/Home/HomeLayout";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import Setting from "./Pages/Admin/Setting";
import User from "./Pages/Admin/User_Interaction/User";
import Interaction from "./Pages/Admin/User_Interaction/Interaction";
import Help from "./Pages/Admin/Help";
import Report from "./Pages/Admin/Report";
import Movie from "./Pages/Admin/Movie/index";
import Genre  from "./Pages/Admin/Movie/Genre_index";
import Episode from "./Pages/Home/Episode";
import Episode_admin from "./Pages/Admin/Movie/Episode_index";
import People from "./Pages/Admin/Movie/People_index";
import Login from "./Pages/Admin/Login";
import Search from "./Pages/Home/Search";
import MovieDetail from './Pages/Home/MovieDetail';
import Profile from "./Pages/Home/Profile";
import History from "./Pages/Home/History";
import Favorites from "./Pages/Home/Favorites";
import { FavoriteProvider } from './context/FavoriteContext';
import { WatchHistoryProvider } from "./context/WatchHistoryContext";
import { PermissionProvider } from "./context/PermissionContext";

function App() {
  return (
    <FavoriteProvider>
      <WatchHistoryProvider>
        <Router>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/watch/:seasonId/:episodeId" element={<Episode />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<History />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>

            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<PermissionProvider><Admin /></PermissionProvider>}>
              <Route
                index
                element={
                  <AdminProtectedRoute>
                    <Dashboard />
                  </AdminProtectedRoute>
                }
              />
              <Route 
                path="movie-center"
                element={
                  <AdminProtectedRoute>
                    <PermissionGuard requiredPermission="canManageMovies">
                      <Outlet />
                    </PermissionGuard>
                  </AdminProtectedRoute>
                }
              >
                <Route
                  path="movies-management"
                  element={<Movie />}
                />
                <Route
                  path="genres"
                  element={<Genre />}
                />
                <Route
                  path="people"
                  element={<People />}
                />
                <Route
                  path="episode"
                  element={<Episode_admin />}
                />
              </Route>
              <Route 
                path="user-interaction"
                element={
                   <AdminProtectedRoute>
                    <PermissionGuard requiredPermission="canManageUsers">
                      <Outlet />
                    </PermissionGuard>
                  </AdminProtectedRoute>
                }
              >
                <Route
                  path="interaction"
                  element={<Interaction />}
                />
                <Route
                  path="user"
                  element={<User />}
                />
              </Route>
              <Route
                path="system-setting"
                element={
                  <AdminProtectedRoute>
                    <PermissionGuard requiredPermission="canManageSettings">
                      <Setting />
                    </PermissionGuard>
                  </AdminProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </WatchHistoryProvider>
    </FavoriteProvider>
  );
}

export default App;
