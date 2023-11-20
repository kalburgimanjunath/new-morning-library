import "./styles.css";
import { Hero, Teams } from "./components";
export default function App() {
  return (
    <div className="App">
      <Hero title="hero" subtitle="hero subtitle" link="" />
      <Teams />
    </div>
  );
}
