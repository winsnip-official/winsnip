# How to Claim Staking Rewards

Learn how to claim your staking rewards and maximize your earnings.

## What are Staking Rewards?

Staking rewards are tokens you earn for delegating to validators. These rewards accumulate over time and can be claimed whenever you want.

### Reward Sources

- 🎁 **Block Rewards**: New tokens minted with each block
- 💰 **Transaction Fees**: Fees from network transactions
- 📊 **Inflation**: Network inflation distributed to stakers

---

## Prerequisites

- ✅ **Active Delegation**: You must have tokens delegated
- ✅ **Wallet Connected**: [Connect your wallet](../getting-started/wallet-setup.md)
- ✅ **Gas Fees**: Keep tokens for transaction fees

---

## Claiming Rewards

### Method 1: Claim from Account Page (Recommended)

#### Step 1: Navigate to Your Account

1. Go to [WinScan](https://winscan.org)
2. Click **"Accounts"** in sidebar
3. Enter your wallet address or click "My Account" if connected
4. Scroll to **"Delegations"** section

#### Step 2: View Pending Rewards

You'll see:
```
Total Pending Rewards: 15.5 PAXI
├─ WinSnip Validator: 10.2 PAXI
├─ Validator B: 3.8 PAXI
└─ Validator C: 1.5 PAXI
```

#### Step 3: Claim Rewards

**Option A: Claim All Rewards**
1. Click **"Claim All Rewards"** button
2. Review transaction details
3. Approve in your wallet
4. Wait for confirmation (5-10 seconds)

**Option B: Claim from Specific Validator**
1. Click **"Claim"** next to specific validator
2. Review transaction details
3. Approve in your wallet
4. Wait for confirmation

### Method 2: Claim from Validator Page

#### Step 1: Go to Validator Page

1. Click **"Validators"** in sidebar
2. Find your validator
3. Click on validator name

#### Step 2: Claim Rewards

1. You'll see your delegation and pending rewards
2. Click **"Claim Rewards"** button
3. Approve transaction in wallet
4. Wait for confirmation

---

## Claiming Strategies

### Strategy 1: Regular Claims (Weekly/Monthly)

**Best For**: Users who want regular income

**How It Works**:
- Claim rewards weekly or monthly
- Transfer to exchange or use immediately
- Simple and predictable

**Example**:
```
Week 1: Claim 10 PAXI → Sell or use
Week 2: Claim 10 PAXI → Sell or use
Week 3: Claim 10 PAXI → Sell or use
Week 4: Claim 10 PAXI → Sell or use
Total: 40 PAXI/month
```

**Pros**:
- Regular income stream
- Immediate access to rewards
- Easy to track

**Cons**:
- Pay gas fees each time
- Miss compound growth
- Lower long-term returns

### Strategy 2: Compound Strategy (Claim + Redelegate)

**Best For**: Long-term holders maximizing growth

**How It Works**:
- Claim rewards periodically
- Immediately redelegate to validators
- Earn rewards on rewards (compound interest)

**Example**:
```
Month 1: 
- Claim 40 PAXI
- Redelegate 40 PAXI
- New total: 1,040 PAXI

Month 2:
- Claim 41.6 PAXI (on 1,040 PAXI)
- Redelegate 41.6 PAXI
- New total: 1,081.6 PAXI

Month 3:
- Claim 43.3 PAXI (on 1,081.6 PAXI)
- Redelegate 43.3 PAXI
- New total: 1,124.9 PAXI
```

**Compound Growth Calculator**:
```
Starting: 1,000 PAXI
APR: 15%
Period: 1 year

Simple Interest: 1,150 PAXI (+150)
Compound Monthly: 1,161 PAXI (+161)
Compound Weekly: 1,162 PAXI (+162)
Compound Daily: 1,162.5 PAXI (+162.5)
```

**Pros**:
- Maximum long-term growth
- Exponential returns
- Wealth accumulation

**Cons**:
- More gas fees
- Requires active management
- Locked in staking

### Strategy 3: Threshold Strategy

**Best For**: Balance between income and growth

**How It Works**:
- Set a reward threshold (e.g., 50 tokens)
- Claim only when rewards reach threshold
- Redelegate claimed rewards

**Example**:
```
Threshold: 50 PAXI

Week 1: 10 PAXI → Wait
Week 2: 20 PAXI → Wait
Week 3: 30 PAXI → Wait
Week 4: 40 PAXI → Wait
Week 5: 50 PAXI → Claim & Redelegate
```

**Pros**:
- Fewer gas fees
- Still compounds
- Less management

**Cons**:
- Delayed access to rewards
- Requires tracking

### Strategy 4: Auto-Compound (If Available)

**Best For**: Hands-off investors

**How It Works**:
- Enable auto-compound feature
- Rewards automatically re-delegated
- No manual claiming needed

**Setup**:
1. Go to validator page
2. Enable "Auto-Compound"
3. Set frequency (daily/weekly)
4. Approve authorization
5. Done!

**Pros**:
- Fully automated
- Optimal compounding
- No management needed

**Cons**:
- Not available on all chains
- Requires authorization
- Less control

---

## Claim All vs Individual Claims

### Claim All Rewards

**When to Use**:
- You have delegations to multiple validators
- Want to save time
- Rewards are significant across all validators

**Transaction**:
```
Type: Withdraw All Delegator Rewards
Validators: 3
Total Rewards: 15.5 PAXI
Gas Fee: ~0.02 PAXI
Time: ~10 seconds
```

**Pros**:
- One transaction
- Single gas fee
- Fast and efficient

**Cons**:
- Claims from all validators (even small amounts)
- Can't be selective

### Individual Claims

**When to Use**:
- Want to claim from specific validator only
- Some rewards too small to claim
- Testing before claiming all

**Transaction**:
```
Type: Withdraw Delegator Reward
Validator: WinSnip Validator
Rewards: 10.2 PAXI
Gas Fee: ~0.01 PAXI
Time: ~10 seconds
```

**Pros**:
- Selective claiming
- Lower gas for single claim
- More control

**Cons**:
- Multiple transactions if claiming from many
- More gas fees total
- Takes more time

---

## Gas Fee Optimization

### Calculate Break-Even Point

**Formula**:
```
Break-Even = Gas Fee / Reward Amount

If Break-Even < 1%, claim is profitable
If Break-Even > 5%, wait for more rewards
```

**Example**:
```
Scenario 1:
Rewards: 100 PAXI
Gas Fee: 0.01 PAXI
Break-Even: 0.01%  ✅ Good to claim

Scenario 2:
Rewards: 1 PAXI
Gas Fee: 0.01 PAXI
Break-Even: 1%  ⚠️ Consider waiting

Scenario 3:
Rewards: 0.1 PAXI
Gas Fee: 0.01 PAXI
Break-Even: 10%  ❌ Wait for more rewards
```

### Tips to Minimize Gas Fees

1. **Batch Claims**: Claim all rewards at once
2. **Set Threshold**: Wait until rewards are substantial
3. **Off-Peak Hours**: Claim during low network activity
4. **Adjust Gas Price**: Use "Low" gas if not urgent

---

## Claim and Redelegate in One Transaction

Some wallets support claiming and redelegating in a single transaction.

### Using Keplr

1. Go to validator page
2. Click **"Claim & Redelegate"** button
3. Select validator to redelegate to
4. Approve transaction
5. Done!

**Benefits**:
- One transaction = One gas fee
- Faster process
- Immediate compounding

**Transaction**:
```
Type: Multi-Message Transaction
Messages:
  1. Withdraw Delegator Reward
  2. Delegate
Total Gas: ~0.015 PAXI
```

---

## Tracking Your Rewards

### View Reward History

1. Go to your account page
2. Click **"Reward History"** tab
3. See all past claims:
   ```
   Date         | Validator        | Amount    | TX Hash
   2026-02-15   | WinSnip         | 10.2 PAXI | 0x123...
   2026-02-08   | WinSnip         | 9.8 PAXI  | 0x456...
   2026-02-01   | WinSnip         | 10.1 PAXI | 0x789...
   ```

### Calculate Total Earned

**Method 1: Via WinScan**
- Account page shows "Total Rewards Earned"
- Includes all claimed rewards
- Updated in real-time

**Method 2: Manual Calculation**
```
Total Earned = Sum of all claimed rewards
             + Current pending rewards
             + Re-delegated rewards
```

### APR Tracking

Monitor your actual APR:
```
Actual APR = (Total Earned / Delegated Amount) × (365 / Days)

Example:
Delegated: 1,000 PAXI
Earned in 30 days: 12.5 PAXI
Actual APR = (12.5 / 1,000) × (365 / 30)
           = 0.0125 × 12.17
           = 15.2%
```

---

## Tax Considerations

### Record Keeping

Keep records of:
- Claim dates and amounts
- Token prices at claim time
- Transaction hashes
- Total annual rewards

### Tax Treatment (Varies by Country)

**Common Approaches**:
1. **Income**: Rewards taxed as income when claimed
2. **Capital Gains**: Taxed when sold
3. **Both**: Income at claim + capital gains at sale

**Consult a tax professional** for your jurisdiction.

---

## Common Issues

### Rewards Not Showing

**Causes**:
- Delegation too recent (wait 1-2 blocks)
- Validator inactive/jailed
- Display lag

**Solutions**:
1. Wait 30 seconds and refresh
2. Check validator status
3. Verify delegation is active

### Claim Transaction Failed

**Causes**:
- Insufficient gas fees
- Network congestion
- Validator issues

**Solutions**:
1. Increase gas limit
2. Wait and retry
3. Check validator status

### Rewards Lower Than Expected

**Causes**:
- Validator commission increased
- Validator downtime
- Network inflation changed
- More delegators joined

**Solutions**:
1. Check validator commission
2. Review validator uptime
3. Consider redelegating

---

## Best Practices

### ✅ Do's

- **Claim Regularly**: Don't let rewards sit too long
- **Compound**: Redelegate for maximum growth
- **Track Performance**: Monitor actual vs expected APR
- **Diversify**: Claim from multiple validators
- **Keep Records**: For tax purposes

### ❌ Don'ts

- **Don't Claim Too Often**: Wastes gas fees
- **Don't Ignore Small Rewards**: They add up
- **Don't Forget Gas**: Keep tokens for fees
- **Don't Claim During High Gas**: Wait for off-peak
- **Don't Ignore Validator Changes**: Monitor performance

---

## Next Steps

- [Redelegate Tokens →](./redelegate.md)
- [Undelegate Tokens →](./undelegate.md)
- [Staking Calculator →](./calculator.md)
- [Validator Guide →](../features/validators.md)

---

## Need Help?

- **Community**: [Telegram](https://t.me/winsnip)
- **Support**: support@winscan.org
- **FAQ**: [Common Issues](../troubleshooting/faq.md)
