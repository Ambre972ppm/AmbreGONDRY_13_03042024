const Feature = (props) => {
  const { feature } = props;

  return (
    <div className="feature-item">
      <img src={feature.icon} alt={feature.iconName} className="feature-icon" />
      <h3 className="feature-item-title">{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  )
}

export default Feature