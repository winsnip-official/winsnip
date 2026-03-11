# How to Delegate Tokens

Learn how to delegate your tokens to validators and start earning staking rewards.

## What is Delegation?

Delegation is the process of staking your tokens with a validator to help secure the network. In return, you earn staking rewards. Your tokens remain in your wallet and you can undelegate at any time (with an unbonding period).

### Benefits of Delegating

- 🎁 **Earn Rewards**: Receive staking rewards (typically 10-20% APR)
- 🔒 **Secure Network**: Help secure the blockchain
- 🗳️ **Governance Rights**: Vote on proposals (or inherit validator's vote)
- 💰 **Compound Growth**: Claim and re-delegate rewards for compound interest

### Important Notes

- ⏱️ **Unbonding Period**: Usually 21 days to undelegate
- 💸 **Slashing Risk**: Validators can be penalized for misbehavior
- 📊 **Commission**: Validators charge a commission (typically 5-10%)
- 🔓 **Tokens Stay in Your Wallet**: You maintain custody

---

## Prerequisites

Before you start:

1. ✅ **Wallet Connected**: [Connect your wallet](../getting-started/wallet-setup.md)
2. ✅ **Tokens Available**: Have tokens in your wallet
3. ✅ **Gas Fees**: Keep some tokens for transaction fees

---

## Step-by-Step Delegation Guide

### Step 1: Navigate to Validators Page

1. Go to [WinScan](https://winscan.org)
2. Select your chain from the chain selector
3. Click **"Validators"** in the sidebar menu
4. You'll see a list of all active validators

### Step 2: Choose a Validator

Consider these factors when choosing:

#### 🎯 Commission Rate
- Lower commission = More rewards for you
- Typical range: 5-10%
- Very low (<5%) or very high (>15%) might be red flags

#### 📊 Voting Power
- Avoid validators with >10% voting power (centralization risk)
- Spread your delegation across multiple validators

#### ⏰ Uptime
- Check validator uptime (should be >99%)
- Click validator name to see detailed uptime history

#### 🛡️ Reputation
- Research validator's background
- Check their website and social media
- Look for community involvement

#### 💰 Self-Bonded Amount
- Higher self-bonded = More "skin in the game"
- Shows validator's commitment

**Example Good Validator:**
```
Name: WinSnip Validator
Commission: 5%
Voting Power: 2.5%
Uptime: 99.8%
Self-Bonded: 100,000 tokens
```

### Step 3: Open Delegation Modal

1. **Click on the validator** you want to delegate to
2. You'll see the validator detail page
3. Click the **"Delegate"** button
4. A delegation modal will appear

### Step 4: Enter Delegation Amount

1. **Enter Amount**: Type the amount you want to delegate
   - Example: `100` (for 100 tokens)
   - Or click "Max" to delegate all available tokens
   
2. **Keep Gas Fees**: Always keep some tokens for future transactions
   - Recommended: Keep at least 1-5 tokens for gas

3. **Review Details**:
   ```
   Delegating: 100 PAXI
   To: WinSnip Validator
   Commission: 5%
   Estimated APR: 15%
   Gas Fee: ~0.01 PAXI
   ```

### Step 5: Confirm Transaction

1. **Click "Delegate"** button
2. **Wallet Popup**: Your wallet will open
3. **Review Transaction**:
   - Check validator address
   - Verify amount
   - Check gas fee
4. **Approve**: Click "Approve" in your wallet
5. **Wait**: Transaction will be processed (5-10 seconds)

### Step 6: Verify Delegation

After successful delegation:

1. **Success Message**: You'll see a confirmation
2. **Transaction Hash**: Click to view transaction details
3. **Check Your Account**:
   - Go to "Accounts" menu
   - Enter your address
   - See "Delegations" section
   - Your delegation will appear

---

## Delegation Examples

### Example 1: First-Time Delegation

**Scenario**: You have 1,000 PAXI tokens and want to start staking.

**Steps**:
1. Keep 10 PAXI for gas fees
2. Delegate 990 PAXI to a validator
3. Expected rewards: ~148.5 PAXI/year (at 15% APR)

**Transaction**:
```
Amount: 990 PAXI
Validator: WinSnip Validator (5% commission)
Gas Fee: 0.01 PAXI
Time: ~10 seconds
```

### Example 2: Diversified Delegation

**Scenario**: You want to spread risk across multiple validators.

**Strategy**:
- Total: 1,000 PAXI
- Validator A: 400 PAXI (5% commission, 99.9% uptime)
- Validator B: 300 PAXI (7% commission, 99.5% uptime)
- Validator C: 290 PAXI (6% commission, 99.7% uptime)
- Reserve: 10 PAXI (gas fees)

**Benefits**:
- Reduced slashing risk
- Support network decentralization
- Diversified reward sources

### Example 3: Additional Delegation

**Scenario**: You already have delegation and want to add more.

**Steps**:
1. Go to validator page
2. Click "Delegate" again
3. Enter additional amount
4. Confirm transaction

**Note**: You can delegate to the same validator multiple times. All delegations are combined.

---

## Understanding Rewards

### How Rewards Work

1. **Block Rewards**: Generated with each new block
2. **Distribution**: Proportional to your stake
3. **Commission**: Validator takes their commission first
4. **Your Share**: Remaining rewards go to delegators

### Reward Calculation

```
Your Rewards = (Your Delegation / Total Delegated) × Block Rewards × (1 - Commission)
```

**Example**:
- Your delegation: 1,000 PAXI
- Validator total stake: 100,000 PAXI
- Block reward: 10 PAXI
- Commission: 5%

```
Your reward = (1,000 / 100,000) × 10 × 0.95
            = 0.01 × 10 × 0.95
            = 0.095 PAXI per block
```

### When to Claim Rewards

**Option 1: Regular Claims**
- Claim weekly or monthly
- Immediate access to rewards
- Pay gas fees each time

**Option 2: Compound Strategy**
- Claim and re-delegate rewards
- Maximize compound growth
- Best for long-term holders

**Option 3: Auto-Compound**
- Some validators offer auto-compound
- Automatic re-delegation
- No manual claiming needed

---

## Common Mistakes to Avoid

### ❌ Delegating All Tokens
**Problem**: No tokens left for gas fees
**Solution**: Always keep 1-5 tokens for transactions

### ❌ Choosing Only by Commission
**Problem**: Low commission validator might have poor uptime
**Solution**: Consider all factors (uptime, reputation, voting power)

### ❌ Delegating to One Validator
**Problem**: Single point of failure
**Solution**: Spread across 3-5 validators

### ❌ Ignoring Validator Changes
**Problem**: Validator might increase commission or have issues
**Solution**: Check your validators monthly

### ❌ Not Claiming Rewards
**Problem**: Missing compound growth opportunity
**Solution**: Claim and re-delegate regularly

---

## Advanced Tips

### 🎯 Optimal Delegation Strategy

1. **Research Phase** (1-2 hours)
   - Review top 20 validators
   - Check uptime history
   - Read validator profiles
   - Join validator communities

2. **Diversification** (3-5 validators)
   - 40% to top-tier validator
   - 30% to mid-tier validator
   - 20% to smaller validator (support decentralization)
   - 10% reserve for gas and opportunities

3. **Monitoring** (Monthly)
   - Check validator performance
   - Review commission changes
   - Monitor uptime
   - Redelegate if needed

### 📊 Using Staking Calculator

1. Go to **"Staking Calculator"** in sidebar
2. Enter your delegation amount
3. Select validator commission
4. See estimated rewards:
   - Daily rewards
   - Monthly rewards
   - Annual rewards
   - 5-year projection

### 🔄 Auto-Compound Setup

Some chains support auto-compound:

1. Go to validator page
2. Look for "Auto-Compound" option
3. Enable auto-compound
4. Set frequency (daily/weekly)
5. Approve authorization

---

## Monitoring Your Delegation

### Check Delegation Status

1. **Via Account Page**:
   - Go to "Accounts" menu
   - Enter your address
   - See "Delegations" section

2. **Via Validator Page**:
   - Go to validator detail page
   - See your delegation amount

### Track Rewards

1. **Pending Rewards**:
   - Visible on account page
   - Updates in real-time
   - Shows unclaimed amount

2. **Reward History**:
   - See past claims
   - Track total earned
   - Calculate APR

### Performance Metrics

Monitor these metrics:
- **Actual APR**: Compare with estimated
- **Validator Uptime**: Should stay >99%
- **Commission Changes**: Get notified
- **Slashing Events**: Check for penalties

---

## Next Steps

After delegating:

- [Claim Rewards →](./claim-rewards.md)
- [Redelegate Tokens →](./redelegate.md)
- [Use Staking Calculator →](./calculator.md)
- [Vote on Proposals →](../governance/voting.md)

---

## Troubleshooting

### Transaction Failed

**Possible Causes**:
1. Insufficient gas fees
2. Network congestion
3. Validator jailed/inactive
4. Invalid amount

**Solutions**:
1. Increase gas limit
2. Wait and retry
3. Choose different validator
4. Check amount format

### Can't See Delegation

**Solutions**:
1. Wait 10-30 seconds for confirmation
2. Refresh the page
3. Check transaction hash
4. Verify correct chain selected

### Rewards Not Showing

**Solutions**:
1. Wait for first block (5-10 seconds)
2. Refresh account page
3. Check if validator is active
4. Verify delegation was successful

---

## Need Help?

- **Community**: [Telegram](https://t.me/winsnip)
- **Support**: support@winscan.org
- **Documentation**: [FAQ](../troubleshooting/faq.md)
