import { Router, Route } from "preact-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Home } from "./screens/Home"
import { Instruments } from "./screens/Instruments"
import { Portfolio } from "./screens/Portfolio"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import "./app.scss"

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <div class="wrapper">
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/instruments" component={Instruments} />
              <Route path="/portfolio" component={Portfolio} />
            </Router>
          </main>
        </div>
        <Footer />
      </>
    </QueryClientProvider>
  )
}
