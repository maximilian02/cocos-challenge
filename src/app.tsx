import { Router, Route } from "preact-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Home } from "./screens/Home"
import { Instruments } from "./screens/Instruments"
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
    </QueryClientProvider>
  )
}
