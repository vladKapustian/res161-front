import {
  SalesHits,
  AboutUs,
  Footer,
  Hero,
  Navbar,
  QuestionsForm,
} from "src/components";
import { string } from "yup";

export default function Home() {
  return (
    <div>
      <AboutUs />
      <SalesHits />
      <QuestionsForm />
    </div>
  );
}
