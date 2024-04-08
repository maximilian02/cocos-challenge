import { Router, Route } from "preact-router";
import { Home } from "./screens/Home";
import { Instruments } from "./screens/Instruments";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./app.scss";

export function App() {
  return (
    <>
      <div class="wrapper">
        <aside>
          <Header />
          <Sidebar />
        </aside>
        <main>
          <div class="wrapper_inner">
            <Router>
              <Route path="/" component={Home} />
              <Route path="/instruments" component={Instruments} />
            </Router>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
