import { useAuth } from "./hooks/useAuth";
import PrettyText from "./components/ui/PrettyText";
import Header from "./components/client/Header";
import HomeView from "./pages/HomeView";
import Footer from "./components/client/Footer";

import AdminHeader from "./components/admin/AdminHeader";
import AdminMain from "./pages/AdminMain";

import "./App.css";

function App() {
  const { isValid, isLoading, error, token, role } = useAuth();
  const user = token ? token.toString().split("@")[0] : null;

  if (isLoading) {
    return <PrettyText>Loading...</PrettyText>;
  }
  if (error) {
    return <PrettyText>Error: {error.message}</PrettyText>;
  }
  if (role === "admin") {
    return (
      <>
        <AdminHeader />
        <AdminMain />
      </>
    );
  }
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {!isValid ? <Header logged={null} /> : <Header logged={user} />}

      <div className="min-h-screen max-w-7xl mx-auto">
        <HomeView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
