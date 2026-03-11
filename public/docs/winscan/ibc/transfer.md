# IBC Transfer Guide

Learn how to transfer tokens across different blockchain networks using IBC (Inter-Blockchain Communication).

## What is IBC?

IBC (Inter-Blockchain Communication) is a protocol that allows different blockchains to communicate and transfer assets between each other securely.

### Key Benefits

- 🌉 **Cross-Chain Transfers**: Send tokens between different chains
- 🔒 **Secure**: Cryptographically secured transfers
- ⚡ **Fast**: Transfers complete in seconds
- 💰 **Low Fees**: Minimal transaction costs
- 🔄 **Reversible**: Can transfer tokens back

---

## Prerequisites

Before making an IBC transfer:

1. ✅ **Wallet Connected**: [Connect your wallet](../getting-started/wallet-setup.md)
2. ✅ **Tokens Available**: Have tokens to transfer
3. ✅ **Gas Fees**: Keep tokens for transaction fees on both chains
4. ✅ **Destination Address**: Know the recipient address on destination chain

---

## Step-by-Step IBC Transfer

### Step 1: Navigate to IBC Transfer Page

1. Go to [WinScan](https://winscan.org)
2. Select your **source chain** from chain selector
3. Click **"IBC Transfer"** in the sidebar under Assets menu
4. You'll see the IBC transfer interface

### Step 2: Select Source and Destination

#### Source Chain
- Already selected (current chain)
- Shows your available balance
- Example: Paxi Network

#### Destination Chain
1. Click **"Select Destination Chain"** dropdown
2. Choose from available chains:
   - Osmosis
   - Cosmos Hub
   - Noble
   - Lumera
   - And more...

**Example**:
```
Source: Paxi Network
Destination: Osmosis
```

### Step 3: Select Token

1. Click **"Select Token"** dropdown
2. Choose token to transfer:
   - Native tokens (PAXI, OSMO, ATOM, etc.)
   - IBC tokens already on the chain
   - Supported tokens will show balance

**Example**:
```
Token: PAXI
Available: 1,000 PAXI
```

### Step 4: Enter Transfer Details

#### Amount
1. Enter amount to transfer
2. Or click **"Max"** to transfer all (minus gas)
3. Keep some tokens for gas fees

**Example**:
```
Amount: 100 PAXI
Available: 1,000 PAXI
Remaining: 900 PAXI
```

#### Recipient Address
1. Enter destination address
2. Must be valid address for destination chain
3. Double-check address format

**Address Formats**:
```
Paxi:    paxi1abc...xyz
Osmosis: osmo1abc...xyz
Cosmos:  cosmos1abc...xyz
Noble:   noble1abc...xyz
```

⚠️ **Important**: Use correct address prefix for destination chain!

### Step 5: Review Transfer Details

Before confirming, review:

```
Transfer Summary
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From:        Paxi Network
To:          Osmosis
Token:       100 PAXI
Recipient:   osmo1abc...xyz
Channel:     channel-0
Estimated Time: 10-30 seconds
Gas Fee:     ~0.01 PAXI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 6: Confirm Transaction

1. Click **"Transfer"** button
2. **Wallet Popup**: Review transaction in wallet
3. **Verify Details**:
   - Check recipient address
   - Verify amount
   - Check gas fee
4. **Approve**: Click "Approve" in wallet
5. **Wait**: Transaction processing (10-30 seconds)

### Step 7: Track Transfer

After submission:

1. **Transaction Hash**: Copy TX hash
2. **Status Tracking**: 
   - Pending → Sent → Received
   - Real-time status updates
3. **Confirmation**: Success message when complete

---

## IBC Transfer Examples

### Example 1: PAXI to Osmosis

**Scenario**: Transfer PAXI tokens to Osmosis for trading

**Steps**:
```
1. Source: Paxi Network
2. Destination: Osmosis
3. Token: PAXI
4. Amount: 100 PAXI
5. Recipient: osmo1abc...xyz
6. Confirm and send
```

**Result**:
- PAXI leaves Paxi Network
- IBC/PAXI arrives on Osmosis
- Can trade on Osmosis DEX
- Takes ~20 seconds

**IBC Denom on Osmosis**:
```
ibc/[hash]
Example: ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2
```

### Example 2: ATOM from Cosmos Hub to Paxi

**Scenario**: Bring ATOM to Paxi Network

**Steps**:
```
1. Source: Cosmos Hub
2. Destination: Paxi Network
3. Token: ATOM
4. Amount: 10 ATOM
5. Recipient: paxi1abc...xyz
6. Confirm and send
```

**Result**:
- ATOM leaves Cosmos Hub
- IBC/ATOM arrives on Paxi
- Can use ATOM on Paxi
- Takes ~15 seconds

### Example 3: Return Transfer (Back to Origin)

**Scenario**: Send IBC tokens back to origin chain

**Steps**:
```
1. Source: Osmosis (has IBC/PAXI)
2. Destination: Paxi Network
3. Token: IBC/PAXI
4. Amount: 50 PAXI
5. Recipient: paxi1abc...xyz
6. Confirm and send
```

**Result**:
- IBC/PAXI leaves Osmosis
- Native PAXI arrives on Paxi
- Tokens "unwrapped" to native
- Takes ~20 seconds

---

## Understanding IBC Channels

### What are IBC Channels?

Channels are pathways between chains for IBC transfers.

**Channel Information**:
```
Channel ID: channel-0
Port: transfer
State: OPEN
Counterparty: channel-42
```

### Finding Channel Information

1. Go to **"Relayers"** page
2. See all IBC channels
3. View channel status and activity

### Channel States

- ✅ **OPEN**: Active, can transfer
- ⏸️ **CLOSED**: Inactive, cannot transfer
- 🔄 **INIT**: Being established

---

## IBC Token Denominations

### Native vs IBC Tokens

**Native Token** (on origin chain):
```
Denom: upaxi
Display: PAXI
Decimals: 6
```

**IBC Token** (on other chains):
```
Denom: ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2
Display: PAXI (via IBC)
Decimals: 6
Origin: Paxi Network
```

### IBC Denom Hash

The IBC denom hash is calculated from:
```
Hash = SHA256("transfer/channel-0/upaxi")
```

This ensures unique identification across chains.

---

## Transfer Times and Fees

### Typical Transfer Times

| Route | Time | Status |
|-------|------|--------|
| Paxi → Osmosis | 15-30s | ✅ Fast |
| Cosmos → Paxi | 10-20s | ✅ Fast |
| Osmosis → Noble | 20-40s | ✅ Normal |
| Any → Any | 10-60s | ✅ Varies |

### Gas Fees

**Source Chain Fee**:
- Paxi: ~0.01 PAXI
- Cosmos: ~0.005 ATOM
- Osmosis: ~0.0025 OSMO

**Destination Chain Fee**:
- Usually none (paid by relayers)
- Some chains may charge receive fee

**Total Cost**:
```
Total = Source Gas Fee + (Optional Destination Fee)
Example: 0.01 PAXI + 0 = 0.01 PAXI
```

---

## Advanced Features

### Memo Field

Add memo to transfers:

**Use Cases**:
- Exchange deposits (required)
- Personal notes
- Smart contract calls

**Example**:
```
Memo: "Deposit to Osmosis DEX"
Memo: "12345" (exchange deposit ID)
```

⚠️ **Important**: Always include memo for exchange deposits!

### Timeout

Set transfer timeout:

**Default**: 10 minutes
**Custom**: 1 minute to 1 hour

If transfer doesn't complete within timeout:
- Tokens automatically refunded
- No loss of funds
- Try again with longer timeout

### Packet Tracking

Track IBC packet status:

1. Copy transaction hash
2. Go to transaction detail page
3. See packet lifecycle:
   - Send Packet
   - Receive Packet
   - Acknowledge Packet
   - Timeout (if failed)

---

## Common Issues and Solutions

### Transfer Stuck/Pending

**Causes**:
- Relayer offline
- Network congestion
- Channel issues

**Solutions**:
1. Wait 5-10 minutes
2. Check relayer status
3. Contact support if >1 hour

### Wrong Address Format

**Problem**: Used wrong address prefix

**Example**:
```
❌ Wrong: Sent to paxi1... on Osmosis
✅ Correct: Should use osmo1... on Osmosis
```

**Solution**:
- Always verify address prefix
- Use address converter if needed
- Test with small amount first

### Tokens Not Appearing

**Causes**:
- Transfer still processing
- Wrong chain selected in wallet
- Need to add token to wallet

**Solutions**:
1. Wait 1-2 minutes
2. Switch to correct chain
3. Add IBC token manually:
   ```
   Denom: ibc/[hash]
   Symbol: PAXI
   Decimals: 6
   ```

### Insufficient Gas

**Problem**: Not enough tokens for gas

**Solution**:
- Keep minimum balance for gas
- Recommended: 1-5 tokens
- Get gas tokens from faucet if needed

---

## Best Practices

### ✅ Do's

- **Test First**: Send small amount first
- **Verify Address**: Double-check recipient
- **Keep Gas**: Maintain balance for fees
- **Use Memo**: For exchange deposits
- **Track TX**: Save transaction hash
- **Check Channel**: Ensure channel is open

### ❌ Don'ts

- **Don't Rush**: Verify all details
- **Don't Use Wrong Prefix**: Check address format
- **Don't Transfer All**: Keep gas tokens
- **Don't Ignore Memo**: Required for exchanges
- **Don't Panic**: Transfers can take time

---

## IBC Transfer Checklist

Before sending:

- [ ] Wallet connected
- [ ] Correct source chain selected
- [ ] Destination chain verified
- [ ] Token selected
- [ ] Amount entered (kept gas reserve)
- [ ] Recipient address verified
- [ ] Address prefix correct
- [ ] Memo added (if needed)
- [ ] Gas fee acceptable
- [ ] Channel status checked

---

## Troubleshooting Guide

### Transfer Failed

1. **Check Transaction**:
   - View TX on explorer
   - Read error message
   - Check packet status

2. **Common Errors**:
   ```
   "insufficient funds" → Need more tokens
   "invalid address" → Wrong address format
   "channel not found" → Channel doesn't exist
   "timeout" → Transfer took too long
   ```

3. **Get Help**:
   - [Telegram Community](https://t.me/winsnip)
   - [GitHub Issues](https://github.com/winsnip-official/winscan.org/issues)
   - support@winscan.org

---

## Next Steps

- [IBC Channels →](./channels.md)
- [Relayers →](./relayers.md)
- [Asset Tracking →](../features/assets.md)
- [Bridge Guide →](./bridge.md)

---

## Need Help?

- **Community**: [Telegram](https://t.me/winsnip)
- **Support**: support@winscan.org
- **IBC Docs**: [IBC Protocol](https://ibc.cosmos.network)
