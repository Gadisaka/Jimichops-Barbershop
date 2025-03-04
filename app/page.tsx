import About from "./pages/about/page";
import Footer from "./components/footer";
import Main from "./components/home";
import Ourshop from "./components/ourshop";
import Pricing from "./pages/pricing/page";
import Services from "./pages/service/page";
import Barbers from "./pages/barbers/page";
// import Call from "./pages/cal/page";

export default function Home() {
  return (
    <div className="bg-[#163F39]  flex flex-col">
      <Main />
      <Services />
      {/* <Call /> */}
      <About />
      <Barbers />
      <Pricing />
      <Ourshop />
      <hr className="border-t-2 border-[#F4CD54]" />
      <Footer />
    </div>
  );
}

{
  /* <a
  className="appointlet-button"
  data-appointlet-modal
  href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
  style={{ backgroundColor: "#009432" }}
>
  booking appointment
</a>
<script async defer src="https://js.appointlet.com/"></script>
<link href="https://js.appointlet.com/styles.css" rel="stylesheet"></link> */
}
