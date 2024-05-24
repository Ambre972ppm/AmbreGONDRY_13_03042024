// Account.jsx
// This component displays individual bank account information.
// Props:
// - account: an object containing account details (title, amount, description)

const Account = (props) => {
  const { account } = props;

  return (
    <section className="account" key={account.title}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

export default Account