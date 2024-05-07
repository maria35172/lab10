import Section from "./components/Section";

function App() {
  return (
    <main className="main">
      <h2 className="title">Что Вам необходимо?</h2>
      <div className="wrapper">
        <Section title="Первый блок" imageNumber="1" ending=""/>
        <Section title="Второй блок" imageNumber="2" ending="?"/>
        <Section title="Третий блок" imageNumber="3" ending="!"/>
      </div>
    </main>
  );
}

export default App;
