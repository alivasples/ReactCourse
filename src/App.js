import logo from './logo.svg';
import './App.css';
import My1Component from './components/My1Component'
import My2CompWithProps from './components/My2CompWithProps'
import My3CompState from './components/My3CompState';
import My4CondRender from './components/My4CondRender';
import My5ElementsRender from './components/My5ElementsRender';
import {My6EventES6, My6EventES7, My6MoreAboutEvents} from './components/My6Events';
import My17UseEffect from './components/My17UseEffect';
import My18UseEffect2 from './components/My18UseEffect2';
import My19AjaxHooks from './components/My19AjaxHooks';
import My20CustomHooks from './components/My20CustomHooks';
import My21References from './components/My21References';
import My22Forms from './components/My22Forms';
import My23Styles from './components/My23Styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <My1Component msg="This is my first component" />
        <hr />
        <My2CompWithProps 
          msg = "Is current year a leap year?"
          year = {2022}
          isLeapYear = {2022%4 === 0} //false
          commingYears = {[2023, 2024, 2025, 2026]}
          event = {{date: '2022-08-13', name: 'Soccer Cup'}}
          reactElement = {<p> This is a React Element </p>}
          reactComp = {<My1Component msg = "A comp can also be a parameter"/>}
        />
        <hr />
      </section>
      <section> <My3CompState /> </section>
      <hr />
      <section> <My4CondRender/> </section>
      <hr />
      <section> <My5ElementsRender/> </section>
      <hr />
      <section> <My6EventES6/> </section>
      <section> <My6EventES7/> </section>
      <section> <My6MoreAboutEvents/> </section>
      <hr />
      <section> <My17UseEffect/> </section>
      <hr />
      <section><My18UseEffect2/></section>
      <hr />
      <section> <My19AjaxHooks/> </section>
      <hr />
      <section> <My20CustomHooks/> </section>
      <hr />
      <section> <My21References/> </section>
      <hr />
      <section> <My22Forms/> </section>
      <hr />
      <section> <My23Styles/> </section>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
