// FeatureContainer.jsx
// This component contains and displays a list of bank features.

import Feature from "../Feature/feature"
import ChatIcon from "../../assets/icon-chat.png";
import MoneyIcon from "../../assets/icon-money.png";
import SecurityIcon from "../../assets/icon-security.png";


const FeaturesContainer = () => {
  const features = [
    {
      icon: ChatIcon,
      iconName: "Chat Icon",
      title: "You are our #1 priority",
      description: `Need to talk to a representative? You can get in touch through our
      24/7 chat or through a phone call in less than 5 minutes.`
    },
    {
      icon: MoneyIcon,
      iconName: "Money icon",
      title: "More savings means higher rates",
      description: `The more you save with us, the higher your interest rate will be!`
    },
    {
      icon: SecurityIcon,
      iconName: "Security icon",
      title: "Security you can trust",
      description: `We use top of the line encryption to make sure your data and money
      is always safe.`
    }
  ]

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature) => (
        <Feature feature={feature} key={feature.iconName}/>
      ))}
    </section>
  )
  
}

export default FeaturesContainer