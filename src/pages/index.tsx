import {
  SalesHits,
  AboutUs,
  Footer,
  Hero,
  Navbar,
  QuestionsForm,
} from "src/components";

export default function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <AboutUs />
      <SalesHits />
      <QuestionsForm />
      <Footer />
    </div>
  );
}
