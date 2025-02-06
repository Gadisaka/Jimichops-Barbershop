export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <a
        className="appointlet-button"
        data-appointlet-modal
        href="https://appt.link/book-at-jimichops-RRolGdTP/in-person-meeting"
        style={{ backgroundColor: "#009432" }}
      >
        booking appointment
      </a>
      <script async defer src="https://js.appointlet.com/"></script>
      <link href="https://js.appointlet.com/styles.css" rel="stylesheet"></link>
    </div>
  );
}
