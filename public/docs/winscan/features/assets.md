# Assets

Explore and track blockchain assets on WinScan.

## Overview

View comprehensive information about native tokens, IBC tokens, and smart contract tokens across supported chains.

## Accessing Assets

1. Navigate to any chain on WinScan
2. Click on "Assets" in the navigation menu
3. Or visit: `https://winscan.org/[chain]/assets`

## Asset List

Browse all available assets on the chain:

### Asset Information
- **Token Name**: Full token name
- **Symbol**: Token ticker symbol
- **Type**: Native, IBC, or Contract token
- **Total Supply**: Total tokens in circulation
- **Holders**: Number of token holders
- **Price**: Current market price (if available)

### Asset Categories

#### Native Tokens
- Chain's primary token
- Used for gas fees
- Staking and governance
- Example: ATOM, OSMO, JUNO

#### IBC Tokens
- Tokens from other chains
- Transferred via IBC protocol
- Maintains origin chain properties
- Example: IBC/ATOM on Osmosis

#### CW20/PRC20 Tokens
- Smart contract tokens
- Custom token implementations
- Various use cases
- Example: Project tokens, stablecoins

## Asset Details

Click on any asset to view detailed information:

### Token Information
- **Name**: Full token name
- **Symbol**: Token ticker
- **Decimals**: Token decimal places
- **Contract Address**: For contract tokens
- **Total Supply**: Total tokens minted
- **Circulating Supply**: Tokens in circulation
- **Max Supply**: Maximum possible supply

### Market Data (if available)
- **Current Price**: USD value
- **Market Cap**: Total value
- **24h Volume**: Trading volume
- **24h Change**: Price change percentage
- **All-Time High**: Highest price
- **All-Time Low**: Lowest price

### Token Holders

View top holders and distribution:
- **Holder Address**: Account address
- **Balance**: Token amount held
- **Percentage**: % of total supply
- **Value**: USD value (if price available)

### Holder Statistics
- Total holders
- Top 10 holders percentage
- Distribution chart
- Holder growth over time

### Transfer History

Recent token transfers:
- **From**: Sender address
- **To**: Receiver address
- **Amount**: Transfer amount
- **Timestamp**: Transfer time
- **Transaction Hash**: Link to transaction

## IBC Assets

Special features for IBC tokens:

### IBC Information
- **Origin Chain**: Source blockchain
- **IBC Denom**: Full IBC denomination
- **Base Denom**: Original token denom
- **Channel**: IBC channel used
- **Port**: IBC port identifier

### IBC Path
View the complete IBC transfer path:
- Source chain
- Intermediate chains (if any)
- Destination chain
- Channel IDs

### Cross-Chain Transfers
Track IBC transfers:
- Outgoing transfers
- Incoming transfers
- Transfer volume
- Active channels

## Contract Tokens

For CW20/PRC20 tokens:

### Contract Information
- **Contract Address**: Token contract
- **Code ID**: Contract code identifier
- **Creator**: Contract deployer
- **Admin**: Contract administrator
- **Creation Date**: Deployment timestamp

### Token Metadata
- Token logo
- Token description
- Official website
- Social media links
- Whitepaper

### Contract Interactions
- Total transactions
- Unique users
- Contract calls
- Execution history

## Token Analytics

### Price Charts (if available)
- Price history
- Volume charts
- Market cap trends
- Holder growth

### Supply Analytics
- Total supply over time
- Circulating supply changes
- Burn events
- Mint events

### Holder Analytics
- New holders per day
- Holder distribution
- Whale movements
- Top holder changes

## Token Operations

### Send Tokens
1. Connect wallet
2. Select token
3. Enter recipient address
4. Enter amount
5. Confirm transaction

### Add to Wallet
Add token to your wallet:
1. Click "Add to Wallet"
2. Approve in wallet extension
3. Token appears in wallet

### IBC Transfer
Transfer tokens across chains:
1. Select destination chain
2. Enter amount
3. Confirm IBC transfer
4. Wait for confirmation

[Learn more about IBC transfers](/docs/ibc/transfer)

## Token Standards

### Native Tokens
- Built into blockchain protocol
- Used for gas and staking
- Highest security level

### IBC Tokens
- Cross-chain standard
- Trustless transfers
- Maintains origin properties

### CW20 (CosmWasm)
- Smart contract standard
- Cosmos ecosystem
- Flexible functionality

### PRC20 (Paxi Chain)
- Paxi Chain token standard
- Similar to CW20
- Custom features

## Token Verification

Verified tokens display:
- ✓ Verified badge
- Official information
- Trusted metadata
- Reduced scam risk

### Verification Criteria
- Official project submission
- Contract verification
- Community validation
- Security audit (recommended)

## Searching Assets

Find tokens using:
- **Token Name**: Search by name
- **Symbol**: Search by ticker
- **Contract Address**: Direct lookup
- **IBC Denom**: IBC denomination

## Filtering Assets

Filter tokens by:
- **Type**: Native, IBC, Contract
- **Chain**: Origin chain
- **Holders**: Minimum holders
- **Supply**: Supply range
- **Verified**: Only verified tokens

## Token Watchlist

Track favorite tokens:
1. Click "Add to Watchlist"
2. Set price alerts (optional)
3. Monitor from dashboard
4. Get notifications

## API Access

Access asset data via API:

```bash
# Get all assets
GET /api/assets

# Get asset details
GET /api/asset-detail?denom={denom}

# Get asset holders
GET /api/holders?denom={denom}
```

## Token Security

### Red Flags
- Unverified contracts
- Suspicious holder distribution
- No official information
- Recent creation with high claims

### Best Practices
1. **Verify Tokens**: Check verification status
2. **Research Projects**: Read documentation
3. **Check Holders**: Review distribution
4. **Test Small Amounts**: Start with small transfers
5. **Use Official Contracts**: Verify contract addresses

## Token Economics

Understanding tokenomics:

### Supply Types
- **Total Supply**: All tokens minted
- **Circulating Supply**: Tokens in circulation
- **Max Supply**: Maximum possible tokens
- **Burned Supply**: Permanently removed tokens

### Distribution
- Team allocation
- Community distribution
- Liquidity pools
- Staking rewards
- Treasury

### Utility
- Governance voting
- Staking rewards
- Fee payments
- Access to services
- Liquidity provision

## Troubleshooting

### Token Not Showing
- Verify token exists on chain
- Check correct network
- Refresh page
- Clear cache

### Incorrect Balance
- Wait for block confirmation
- Check transaction status
- Verify wallet connection
- Refresh wallet

### Cannot Transfer
- Check sufficient balance
- Verify gas fees
- Ensure token is not frozen
- Check recipient address

## Popular Assets

### Cosmos Ecosystem
- ATOM (Cosmos Hub)
- OSMO (Osmosis)
- JUNO (Juno Network)
- SCRT (Secret Network)
- STARS (Stargaze)

### Stablecoins
- USDC (USD Coin)
- USDT (Tether)
- DAI (Dai)
- BUSD (Binance USD)

### Wrapped Assets
- wBTC (Wrapped Bitcoin)
- wETH (Wrapped Ethereum)
- axlUSDC (Axelar USDC)

## Need Help?

- Join [Telegram community](https://t.me/winsnip)
- Read [IBC transfer guide](/docs/ibc/transfer)
- Contact [support@winscan.org](mailto:support@winscan.org)
