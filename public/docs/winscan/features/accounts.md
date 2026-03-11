# Accounts

Track and analyze blockchain accounts on WinScan.

## Overview

View detailed information about any blockchain account, including balances, transaction history, delegations, and more.

## Accessing Accounts

1. Navigate to any chain on WinScan
2. Search for an address in the search bar
3. Or visit: `https://winscan.org/[chain]/accounts/{address}`

## Account Overview

The account page displays:

### Balance Information
- **Available Balance**: Tokens available for transactions
- **Staked Balance**: Tokens delegated to validators
- **Unbonding Balance**: Tokens in unbonding period
- **Rewards**: Pending staking rewards
- **Total Balance**: Sum of all balances

### Account Details
- **Address**: Account address
- **Public Key**: Account public key (if revealed)
- **Account Number**: Sequential account number
- **Sequence**: Transaction sequence number

## Transaction History

View all transactions involving the account:

### Transaction Types
- **Sent**: Outgoing transfers
- **Received**: Incoming transfers
- **Delegations**: Staking operations
- **Rewards**: Claimed rewards
- **Governance**: Proposal votes and deposits
- **IBC**: Cross-chain transfers
- **Smart Contracts**: Contract interactions

### Transaction Details
- Transaction hash
- Block height and timestamp
- Transaction type
- Amount and fee
- Status (success/failed)

### Filters
Filter transactions by:
- Transaction type
- Date range
- Amount range
- Status

## Delegations

View all active delegations:

### Delegation Information
- **Validator**: Validator name and address
- **Amount**: Delegated tokens
- **Rewards**: Pending rewards
- **APR**: Annual percentage rate
- **Delegation Date**: When delegation was made

### Actions
- Claim rewards
- Redelegate to another validator
- Undelegate tokens

## Unbonding Delegations

Track tokens in unbonding period:
- **Validator**: Source validator
- **Amount**: Unbonding tokens
- **Completion Time**: When tokens will be available
- **Remaining Time**: Time left in unbonding period

**Note**: Unbonding period is typically 21 days.

## Rewards

View and claim staking rewards:

### Reward Information
- **Total Rewards**: All pending rewards
- **By Validator**: Rewards per validator
- **Estimated APR**: Annual return rate
- **Last Claimed**: Most recent claim

### Claiming Rewards
1. Click "Claim All Rewards"
2. Review transaction details
3. Confirm with wallet
4. Wait for confirmation

**Tip**: Claim and restake rewards regularly to maximize returns.

## Token Balances

View all token holdings:

### Native Tokens
- Chain's native token
- Available balance
- Current price (if available)
- USD value

### IBC Tokens
- Cross-chain tokens
- Token origin chain
- IBC denom
- Balance and value

### CW20/PRC20 Tokens
- Smart contract tokens
- Token contract address
- Token metadata
- Balance and value

## Governance Activity

Track governance participation:

### Voting History
- Proposals voted on
- Vote choices (Yes/No/Abstain/Veto)
- Voting power used
- Vote timestamps

### Deposits
- Proposals deposited to
- Deposit amounts
- Deposit status

## IBC Transfers

View cross-chain transfer history:

### Outgoing Transfers
- Destination chain
- Amount transferred
- IBC channel
- Transfer status
- Transaction hash

### Incoming Transfers
- Source chain
- Amount received
- IBC channel
- Receive status
- Transaction hash

## Smart Contract Interactions

Track contract interactions:

### Contract Calls
- Contract address
- Function called
- Parameters
- Execution result
- Gas used

### Contract Deployments
- Deployed contracts
- Contract code ID
- Instantiation parameters
- Contract address

## Account Analytics

### Balance History
- Balance over time chart
- Token distribution
- Portfolio value (if prices available)

### Transaction Statistics
- Total transactions
- Transaction types breakdown
- Average transaction value
- Most active periods

### Staking Analytics
- Total staked amount
- Staking rewards earned
- APR history
- Validator distribution

## Exporting Data

Export account data:
- **CSV**: Transaction history
- **JSON**: Complete account data
- **PDF**: Account summary report

## Watching Accounts

Add accounts to watchlist:
1. Click "Add to Watchlist"
2. Set custom label
3. Enable notifications (optional)
4. Track multiple accounts

## Account Security

### Best Practices
1. **Never Share Private Keys**: Keep keys secure
2. **Verify Addresses**: Double-check before sending
3. **Use Hardware Wallets**: For large amounts
4. **Enable 2FA**: On exchanges and wallets
5. **Regular Backups**: Backup seed phrases securely

### Warning Signs
- Unexpected transactions
- Unknown delegations
- Suspicious contract interactions
- Unusual balance changes

## API Access

Access account data via API:

```bash
# Get account balance
GET /api/balance?address={address}

# Get account transactions
GET /api/transactions?address={address}

# Get account delegations
GET /api/delegations?address={address}
```

## Address Formats

Different address formats:
- **Bech32**: Standard Cosmos address (e.g., cosmos1...)
- **Hex**: Ethereum-style address (0x...)
- **Validator Address**: Validator operator address (cosmosvaloper1...)

## Multi-Chain Accounts

Same private key, different addresses:
- Each chain has unique address prefix
- Same account across compatible chains
- Use chain-specific addresses

## Account Types

### Regular Accounts
- Standard user accounts
- Controlled by private key
- Can send/receive tokens

### Validator Accounts
- Validator operator accounts
- Used for validator operations
- Special permissions

### Module Accounts
- System accounts
- Controlled by blockchain modules
- Special purposes (staking, governance, etc.)

### Smart Contract Accounts
- Contract addresses
- Controlled by contract code
- Programmable logic

## Troubleshooting

### Account Not Found
- Verify address is correct
- Check if account has been activated
- Ensure correct network

### Balance Not Updating
- Wait for block confirmation
- Refresh page
- Check transaction status

### Cannot Send Transactions
- Verify wallet connection
- Check sufficient balance for fees
- Ensure account is not frozen

## Privacy Considerations

Blockchain accounts are public:
- All transactions are visible
- Balances are public
- Consider privacy implications
- Use multiple accounts if needed

## Need Help?

- Join [Telegram community](https://t.me/winsnip)
- Read [wallet setup guide](/docs/getting-started/wallet-setup)
- Contact [support@winscan.org](mailto:support@winscan.org)
