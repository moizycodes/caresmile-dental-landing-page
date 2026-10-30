import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />

      {/* Landing page sections */}
      <main>
        <section id="home">{/* Hero section */}</section>

        <section id="about">{/* About section */}</section>

        <section id="services">{/* Services section */}</section>

        <section id="dentists">{/* Dentists section */}</section>

        <section id="appointment">{/* Appointment section */}</section>

        <section id="testimonials">{/* Testimonials section */}</section>

        <section id="blog">{/* Blog section */}</section>

        <section id="contact">{/* Footer / Contact */}</section>
      </main>
    </>
  );
}

export default App;
