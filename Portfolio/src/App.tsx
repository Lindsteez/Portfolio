import AppRoutes from "./Routes";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="AppLayout">
      <Navbar />
      <main className="appContent">
        <AppRoutes />
      </main>

    </div>
  );
}