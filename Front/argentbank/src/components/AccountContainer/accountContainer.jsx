import Account from "../Account/account"

const AccountContainer = () => {
  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance"
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance"
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance"
    }
  ]

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account account={account} key={account.title}/>
      ))}
    </>
  )
}

export default AccountContainer