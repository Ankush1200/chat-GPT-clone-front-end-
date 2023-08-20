import './App.css';
import './Normal.css';
import { TiFlashOutline, TiAdjustBrightness, TiWarningOutline } from "react-icons/ti";
import { BsHouseGear, BsFillChatRightTextFill, BsBoxArrowRight, BsMoon } from "react-icons/bs";
function App() {

  function handleKeyDown(e) {

    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;

  }
  return (
    // ---------------------------------side menu bar of app-------------------------------------
    <div className="App">
      <aside className="sideMenu">
        <div className="chatbutton">
          <span>+</span> New chat
        </div>
        <div className="newchat">
          <span></span> Hair Oil Types
        </div>
        <div className="newchat">
          <span></span> E-Commerce Reference
        </div>

        <div className="side-bottom"><hr></hr>
          <div className="newchat">
            <span className='side-bar-icon'> <BsHouseGear /></span> Upgrade to Plus
          </div>
          <div className="newchat">
            <span className='side-bar-icon'> <BsMoon /></span>Dark mode
          </div>
          <div className="newchat">
            <span className='side-bar-icon'><BsFillChatRightTextFill /></span> Updates & FAQ
          </div>
          <div className="newchat">
            <button id='logout'><span className='side-bar-icon'><BsBoxArrowRight /></span>Log out</button>
          </div>

        </div>
      </aside>
      {/* --------------------------------side menu bar of app------------------------ */}

      <section className="chatbox">
        <h1>ChatGPT Clone</h1>

        <div className="input-text-box">
          <textarea className="text" rows="1" onChange={handleKeyDown} placeholder="Send a Query.........">


          </textarea>

        </div>
        <div className="quotes">Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</div>
        {/* --------------------------------------------------------------------------------------------- */}
        <div className="content">
          <div className="c">

            <div className='icons'><TiAdjustBrightness /></div>
            <h6>Examples</h6>
            <ul className="tex-content">
              <button className="b">"Explain qunatum computing
                in simple terms" →</button>
              <button className="b">"Got any creative ideas for 10
                year old's birthday?" →</button>
              <button className="b">"How do i make an HTTP request
                in javasript?" →</button>
            </ul>
          </div>
          <div className="c">
            <div className='icons'><TiFlashOutline /></div>
            <h6>Capabilities</h6>
            <ul className="tex-content">
              <li className="l">Remembers what user said earlier in the conversation</li>
              <li className="l">Allows user to provide follow-up corrections</li>
              <li className="l">Trained to decline inappropriate requests</li>
            </ul>
          </div>
          <div className="c">
            <div className='icons'><TiWarningOutline /></div>
            <h6>Limitations</h6>
            <ul className="tex-content">
              <li className="l">May occasionally generate  incorrect information</li>
              <li className="l">May occasionally produce  harmful instructions or biased content</li>
              <li className="l">Limited knowledge of world and events after 2021</li>
            </ul>
          </div>
        </div>


      </section>
    </div>
  );
}

export default App;
