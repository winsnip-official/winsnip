# Block Explorer

Explore blockchain blocks and their contents on WinScan.

## Overview

The Block Explorer allows you to view detailed information about blocks, including transactions, validators, timestamps, and block metadata.

## Accessing Blocks

1. Navigate to any chain on WinScan
2. Click on "Blocks" in the navigation menu
3. Or visit: `https://winscan.org/[chain]/blocks`

## Block List

The block list displays recent blocks with:

- **Block Height**: Sequential block number
- **Proposer**: Validator who proposed the block
- **Transactions**: Number of transactions in block
- **Timestamp**: When block was created
- **Block Hash**: Unique block identifier

## Block Details

Click on any block height to view comprehensive information:

### Block Information
- **Height**: Block number in the chain
- **Hash**: Unique block identifier
- **Parent Hash**: Previous block hash
- **Timestamp**: Block creation time
- **Proposer**: Validator who created the block

### Block Statistics
- **Transaction Count**: Total transactions in block
- **Gas Used**: Total gas consumed
- **Gas Limit**: Maximum gas allowed
- **Block Size**: Size in bytes

### Transactions
View all transactions included in the block:
- Transaction hashes
- Transaction types
- Senders and receivers
- Transaction amounts
- Transaction status

### Validator Information
Details about the block proposer:
- Validator name and address
- Validator voting power
- Commission rate
- Uptime statistics

## Search Blocks

Find specific blocks using:
- **Block Height**: Direct block number
- **Block Hash**: Unique identifier
- **Validator Address**: Blocks proposed by validator

## Block Time

Average block time varies by chain:
- Most Cosmos chains: ~5-7 seconds
- View real-time block time on chain dashboard

## Block Rewards

Validators earn rewards for proposing blocks:
- **Block Reward**: New tokens minted
- **Transaction Fees**: Fees from included transactions
- **Total Reward**: Block reward + transaction fees

## Understanding Block Data

### Block Height
Sequential number starting from genesis block (height 0 or 1).

### Block Hash
Cryptographic hash of block contents, ensuring immutability.

### Parent Hash
Hash of previous block, creating the blockchain.

### Proposer
Validator selected to create the block based on voting power.

## Block Finality

Blocks are considered final after:
- Immediate finality on most Cosmos chains
- No reorganizations after confirmation
- Transactions are irreversible

## Empty Blocks

Blocks can be empty (0 transactions):
- Still maintain chain continuity
- Validators still earn block rewards
- Normal blockchain operation

## API Access

Access block data via API:

```bash
# Get block by height
GET /api/block?height={blockHeight}

# Get recent blocks
GET /api/blocks?limit=50

# Get blocks by validator
GET /api/blocks?proposer={validatorAddress}
```

## Block Explorer Features

### Real-time Updates
- Live block streaming
- Automatic page refresh
- WebSocket connections

### Historical Data
- Access any historical block
- Complete transaction history
- Validator performance tracking

### Analytics
- Block time charts
- Transaction volume graphs
- Gas usage statistics

## Best Practices

1. **Verify Confirmations**: Wait for block confirmation
2. **Check Block Time**: Monitor network health
3. **Track Validators**: Follow block proposers
4. **Use Block Height**: Reference specific blocks
5. **Monitor Gas Usage**: Optimize transaction costs

## Troubleshooting

### Block Not Found
- Verify block height is correct
- Check if block exists on the chain
- Ensure you're on the correct network

### Missing Transactions
- Transaction may be in mempool
- Check next block for inclusion
- Verify transaction was broadcasted

### Slow Block Times
- Network congestion
- Validator issues
- Check chain status page

## Advanced Features

### Block Signatures
View validator signatures on blocks:
- Participating validators
- Signature timestamps
- Voting power distribution

### Block Evidence
See any evidence of misbehavior:
- Double signing
- Invalid proposals
- Slashing events

### Block Metadata
Additional block information:
- Chain ID
- Protocol version
- Consensus parameters

## Need Help?

- Join [Telegram community](https://t.me/winsnip)
- Read [API documentation](/docs/developers/api-reference)
- Email [support@winscan.org](mailto:support@winscan.org)
