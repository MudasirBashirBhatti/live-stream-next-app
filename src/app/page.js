import IframeComponent from "./components/IframeComponent";
import { Navigation } from "./components/Navigation";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <div>
        <Navigation />
        <IframeComponent />
      </div>
    </>
  );
}
