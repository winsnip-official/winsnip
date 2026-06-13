# Transactions

View and analyze blockchain transactions on WinScan.

## Overview

The Transactions page provides comprehensive information about all transactions on the blockchain, including transaction details, status, fees, and involved parties.

## Accessing Transactions

1. Navigate to any chain on WinScan
2. Click on "Transactions" in the navigation menu
3. Or visit directly: `https://winscan.org/[chain]/transactions`

## Transaction List

The transaction list displays:

- **Transaction Hash**: Unique identifier for the transaction
- **Block Height**: Block number where transaction was included
- **Timestamp**: When the transaction was processed
- **From/To**: Sender and receiver addresses
- **Amount**: Transaction value
- **Fee**: Transaction fee paid
- **Status**: Success or Failed

## Viewing Transaction Details

Click on any transaction hash to view detailed information:

### Basic Information
- Transaction hash
- Block height and timestamp
- Transaction status
- Gas used and gas wanted
- Transaction fee

### Messages
View all messages included in the transaction:
- Message type (Send, Delegate, Vote, etc.)
- Message details and parameters
- Execution results

### Events
See all events emitted during transaction execution:
- Event types
- Event attributes
- Event data

### Raw Data
Access raw transaction data:
- JSON format
- Hex encoded data
- Signature information

## Transaction Types

WinScan supports various transaction types:

### Bank Transactions
- **Send**: Transfer tokens between accounts
- **Multi-Send**: Send to multiple recipients

### Staking Transactions
- **Delegate**: Stake tokens to validators
- **Undelegate**: Unstake tokens
- **Redelegate**: Move stake between validators
- **Claim Rewards**: Withdraw staking rewards

### Governance Transactions
- **Submit Proposal**: Create governance proposal
- **Vote**: Vote on proposals
- **Deposit**: Add deposit to proposals

### IBC Transactions
- **IBC Transfer**: Cross-chain token transfers
- **IBC Receive**: Receive cross-chain transfers

### Smart Contract Transactions
- **Execute Contract**: Call smart contract functions
- **Instantiate Contract**: Deploy new contracts
- **Migrate Contract**: Upgrade contracts

## Search Transactions

Use the search bar to find specific transactions:
- Search by transaction hash
- Search by address (sender or receiver)
- Search by block height

## Filter Transactions

Filter transactions by:
- **Status**: Success or Failed
- **Type**: Transaction message type
- **Time Range**: Date range filter
- **Amount Range**: Min/max transaction value

## Transaction Status

### Success
Transaction was executed successfully and included in a block.

### Failed
Transaction failed during execution. Common reasons:
- Insufficient funds
- Invalid parameters
- Gas limit exceeded
- Contract execution error

## Understanding Transaction Fees

Transaction fees are calculated based on:
- **Gas Used**: Computational resources consumed
- **Gas Price**: Price per unit of gas
- **Total Fee**: Gas Used × Gas Price

Tips to optimize fees:
- Set appropriate gas limits
- Monitor network congestion
- Use recommended gas prices

## Transaction Memo

Add memo to transactions for:
- Exchange deposit identification
- Payment references
- Custom notes

**Note**: Memos are public and visible on the blockchain.

## Broadcasting Transactions

WinScan provides transaction broadcasting:
1. Connect your wallet (Keplr, Leap, Cosmostation)
2. Prepare transaction details
3. Sign with your wallet
4. Broadcast to the network
5. Track transaction status

## API Access

Access transaction data programmatically:

```bash
# Get transaction by hash
GET /api/transactions?hash={txHash}

# Get transactions by address
GET /api/transactions?address={address}

# Get recent transactions
GET /api/transactions?limit=50
```

## Best Practices

1. **Verify Addresses**: Always double-check recipient addresses
2. **Set Appropriate Gas**: Avoid transaction failures
3. **Use Memos Wisely**: For exchange deposits and references
4. **Monitor Status**: Check transaction confirmation
5. **Keep Records**: Save transaction hashes for reference

## Troubleshooting

### Transaction Not Found
- Wait for block confirmation (5-10 seconds)
- Verify transaction hash is correct
- Check if transaction was broadcasted

### Transaction Failed
- Check error message in transaction details
- Verify account has sufficient balance
- Ensure gas limit is adequate
- Review transaction parameters

### Pending Transaction
- Normal confirmation time: 5-10 seconds
- If pending > 1 minute, check network status
- Transaction may have been dropped

## Need Help?

- Join our [Telegram community](https://t.me/winsnip)
- Check [API documentation](/docs/developers/api-reference)
- Contact [support@winscan.org](mailto:support@winscan.org)
