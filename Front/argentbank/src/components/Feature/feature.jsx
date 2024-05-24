// Feature.jsx
// This component displays a single feature of the bank.
// Props:
// - feature: an object containing feature details (icon, iconName, title, description)

import PropTypes from 'prop-types';

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

Feature.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Feature;
