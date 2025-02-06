import About from "./components/about";
import Main from "./components/home";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="bg-[#163F39]  flex flex-col">
      <Main />
      <Services />
      <About />
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
