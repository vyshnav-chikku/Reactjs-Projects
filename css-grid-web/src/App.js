import "./App.css";
import image1 from "./images/image1.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Navigation section */}
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>{" "}
              {/* a is inline element take width as necessary*/}
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Top Box container */}
        <section className="top-container">
          <header className="showcase">
            <h1>Your Web Presence</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              ratione qui inventore, veniam perspiciatis consequuntur?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </header>
          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$199/month</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
          <div className="top-box top-box-b">
            <h4>Pro Membership</h4>
            <p className="price">$299/month</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
        {/* --Boxes-- */}
        <section className="boxes">
          <div className="box">
            <i class="fas fa-chart-pie fa-4x"></i>
            <h3>Analytics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              in!
            </p>
          </div>
          <div className="box">
            <i class="fas fa-globe fa-4x"></i>
            <h3>Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              in!
            </p>
          </div>{" "}
          <div className="box">
            <i class="fas fa-cogs fa-4x"></i>
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              in!
            </p>
          </div>{" "}
          <div className="box">
            <i class="fas fa-user fa-4x"></i>
            <h3>Support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              in!
            </p>
          </div>
        </section>
        {/* ----Info---- */}
        <section className="info">
          <img src={image1} alt="" />
          <div>
            <h2>Your Business on the web</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quisquam tenetur doloremque iste tempore natus ut
              assumenda corporis? Mollitia nihil nostrum est delectus possimus
              fuga natus molestias blanditiis voluptas cum.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </section>
        {/* ----section---- */}
        <section className="portfolio">
          <img src="https://source.unsplash.com/random/200x200" alt="" />
          <img src="https://source.unsplash.com/random/200x201" alt="" />
          <img src="https://source.unsplash.com/random/200x202" alt="" />
          <img src="https://source.unsplash.com/random/200x203" alt="" />
          <img src="https://source.unsplash.com/random/200x204" alt="" />
          <img src="https://source.unsplash.com/random/200x205" alt="" />
          <img src="https://source.unsplash.com/random/200x206" alt="" />
          <img src="https://source.unsplash.com/random/200x207" alt="" />
        </section>
        {/* ---footer--- */}
        <footer>
          <p>GridWeb &copy; 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
