import "./styles.css";
import { Hero, Teams, Header } from "./components";
export default function App() {
  return (
    <div className="App">
      <Header theme="dark" />
      <Header theme="white" />
      <Hero title="hero" subtitle="hero subtitle" link="" />
      <Teams />
    </div>
  );
}
