// HomeBanner.jsx
// This component displays the home banner with promotional content.

import FeaturesContainer from "../FeaturesContainer/featuresContainer"

const HomeBanner = () => (
  <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <FeaturesContainer/>
    </main>
)

export default HomeBanner