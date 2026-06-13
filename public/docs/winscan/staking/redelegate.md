# How to Redelegate Tokens

Learn how to move your staked tokens from one validator to another without waiting for the unbonding period.

## What is Redelegation?

Redelegation allows you to move your staked tokens from one validator to another instantly, without going through the unbonding period (typically 21 days).

### Benefits

- ⚡ **Instant**: No waiting period
- 💰 **No Loss**: Keep earning rewards during transfer
- 🔄 **Flexible**: Switch validators anytime
- 🛡️ **Risk Management**: Diversify or move away from underperforming validators

### Important Notes

- ⏱️ **One-Time Limit**: Can only redelegate from the same validator once every 21 days
- 🔒 **Cannot Undelegate**: Must wait 21 days before undelegating redelegated tokens
- 📊 **No Rewards Loss**: Continue earning rewards throughout

---

## When to Redelegate

### Good Reasons

✅ **Validator Performance Issues**
- Low uptime (<99%)
- Frequent downtime
- Jailed validator

✅ **Commission Changes**
- Validator increased commission
- Found better commission rates

✅ **Centralization Concerns**
- Validator has too much voting power (>10%)
- Want to support network decentralization

✅ **Better Opportunities**
- New validator with better track record
- Community-recommended validators

### Bad Reasons

❌ **Chasing APR**: Small APR differences don't justify frequent moves
❌ **Panic**: One missed block doesn't mean validator is bad
❌ **Too Frequent**: Redelegating too often limits flexibility

---

## Step-by-Step Guide

### Step 1: Navigate to Your Delegations

1. Go to [WinScan](https://winscan.org)
2. Connect your wallet
3. Click **"Accounts"** in sidebar
4. Enter your address or click "My Account"
5. Scroll to **"Delegations"** section

### Step 2: Select Validator to Redelegate From

1. Find the validator you want to move tokens from
2. Click **"Redelegate"** button next to that validator
3. Redelegation modal will appear

### Step 3: Choose New Validator

1. Click **"Select Validator"** dropdown
2. Search or browse available validators
3. Review validator details:
   - Commission rate
   - Uptime
   - Voting power
   - Description

**Example**:
```
From: Validator A (10% commission, 98% uptime)
To: WinSnip Validator (5% commission, 99.9% uptime)
```

### Step 4: Enter Amount

1. Enter amount to redelegate
2. Or click **"Max"** to move all tokens
3. Review remaining delegation

**Example**:
```
Current Delegation: 1,000 PAXI
Redelegate Amount: 500 PAXI
Remaining with Validator A: 500 PAXI
New Delegation with WinSnip: 500 PAXI
```

### Step 5: Confirm Transaction

1. Review redelegation details:
   ```
   From: Validator A
   To: WinSnip Validator
   Amount: 500 PAXI
   Gas Fee: ~0.01 PAXI
   ```

2. Click **"Redelegate"** button
3. Approve in your wallet
4. Wait for confirmation (5-10 seconds)

### Step 6: Verify Redelegation

After successful redelegation:
- Check "Delegations" section
- See updated amounts for both validators
- Rewards continue accumulating

---

## Redelegation Examples

### Example 1: Moving to Better Validator

**Scenario**: Current validator has poor uptime

**Current State**:
```
Validator A:
- Delegation: 1,000 PAXI
- Commission: 5%
- Uptime: 97% ⚠️
```

**Action**:
```
Redelegate 1,000 PAXI to WinSnip Validator
- Commission: 5%
- Uptime: 99.9% ✅
```

**Result**:
- Instant transfer
- Better rewards due to higher uptime
- No unbonding period

### Example 2: Diversification

**Scenario**: One validator has too much of your stake

**Current State**:
```
Validator A: 1,000 PAXI (100% of stake)
```

**Action**:
```
Redelegate 400 PAXI to Validator B
Redelegate 300 PAXI to Validator C
Keep 300 PAXI with Validator A
```

**Result**:
```
Validator A: 300 PAXI (30%)
Validator B: 400 PAXI (40%)
Validator C: 300 PAXI (30%)
```

**Benefits**:
- Reduced risk
- Support decentralization
- Multiple reward sources

### Example 3: Commission Increase Response

**Scenario**: Validator increased commission from 5% to 15%

**Before**:
```
Validator A: 1,000 PAXI at 5% commission
Expected Annual Rewards: 150 PAXI
After Commission: 142.5 PAXI
```

**After Redelegation**:
```
WinSnip Validator: 1,000 PAXI at 5% commission
Expected Annual Rewards: 150 PAXI
After Commission: 142.5 PAXI
```

**Savings**: Avoided 10% commission increase

---

## Redelegation Limits

### 21-Day Rule

Once you redelegate from Validator A to Validator B:
- ✅ Can redelegate from Validator B to Validator C immediately
- ❌ Cannot redelegate from Validator A again for 21 days
- ❌ Cannot undelegate from Validator B for 21 days

**Example Timeline**:
```
Day 0: Redelegate from A to B ✅
Day 1: Try to redelegate from A to C ❌ (must wait 20 more days)
Day 1: Redelegate from B to C ✅ (allowed)
Day 1: Try to undelegate from C ❌ (must wait 21 days)
Day 21: Can redelegate from A again ✅
Day 22: Can undelegate from C ✅
```

### Multiple Redelegations

You can have multiple active redelegations:
```
Day 0: A → B (500 PAXI)
Day 1: B → C (500 PAXI)
Day 2: C → D (500 PAXI)
```

All allowed, but remember the 21-day rule for each source validator.

---

## Comparing Options

### Redelegate vs Undelegate

| Feature | Redelegate | Undelegate |
|---------|-----------|------------|
| **Time** | Instant | 21 days |
| **Rewards** | Keep earning | Stop earning |
| **Flexibility** | Limited by 21-day rule | Can do anytime |
| **Use Case** | Switch validators | Exit staking |

### When to Use Each

**Use Redelegate When**:
- Want to switch validators
- Need to keep earning rewards
- Don't need liquid tokens immediately

**Use Undelegate When**:
- Need liquid tokens
- Exiting staking completely
- Can wait 21 days

---

## Best Practices

### Research Before Redelegating

1. **Check New Validator**:
   - Uptime history (>99%)
   - Commission rate (5-10%)
   - Community reputation
   - Self-bonded amount

2. **Verify Issues**:
   - Is current validator really underperforming?
   - Is it a temporary issue?
   - Have they communicated about it?

3. **Consider Timing**:
   - Don't redelegate during governance votes
   - Check if validator is fixing issues
   - Plan for 21-day restriction

### Diversification Strategy

**Recommended Distribution**:
```
Total Stake: 1,000 PAXI

Option 1 (Conservative):
- Validator A: 400 PAXI (40%)
- Validator B: 300 PAXI (30%)
- Validator C: 300 PAXI (30%)

Option 2 (Balanced):
- Validator A: 250 PAXI (25%)
- Validator B: 250 PAXI (25%)
- Validator C: 250 PAXI (25%)
- Validator D: 250 PAXI (25%)

Option 3 (Aggressive):
- 5-10 validators with 10-20% each
```

### Monitoring

After redelegation:
- ✅ Check rewards are accumulating
- ✅ Monitor new validator uptime
- ✅ Track commission changes
- ✅ Review monthly performance

---

## Common Issues

### Cannot Redelegate

**Error**: "Cannot redelegate from this validator"

**Causes**:
1. Already redelegated within 21 days
2. Validator is jailed
3. Insufficient balance

**Solutions**:
1. Wait for 21-day period to end
2. Choose different source validator
3. Check delegation amount

### Redelegation Failed

**Error**: "Transaction failed"

**Causes**:
1. Insufficient gas fees
2. Network congestion
3. Invalid validator address

**Solutions**:
1. Ensure enough tokens for gas
2. Wait and retry
3. Verify validator address

### Rewards Not Showing

**Issue**: Rewards not accumulating after redelegation

**Causes**:
1. Need to wait for next block
2. Display lag
3. New validator inactive

**Solutions**:
1. Wait 30 seconds and refresh
2. Check validator status
3. Verify redelegation succeeded

---

## Advanced Strategies

### Gradual Migration

Instead of moving all at once:

**Week 1**: Redelegate 25%
**Week 2**: Monitor performance
**Week 3**: Redelegate another 25%
**Week 4**: Complete migration if satisfied

**Benefits**:
- Test new validator
- Maintain diversification
- Reduce risk

### Commission Optimization

Track validator commissions:
```
Monthly Review:
1. Check all validator commissions
2. Compare with network average
3. Redelegate if >2% above average
4. Keep 1-2 validators as stable base
```

### Governance Participation

Consider validator voting:
- Check voting history
- Align with your preferences
- Redelegate if consistently disagree

---

## FAQ

**Q: Can I redelegate multiple times in one day?**
A: Yes, but only from different source validators. Cannot redelegate from the same validator twice within 21 days.

**Q: Do I lose rewards during redelegation?**
A: No, rewards continue accumulating throughout the process.

**Q: Can I cancel a redelegation?**
A: No, redelegations are instant and cannot be reversed.

**Q: What happens to pending rewards?**
A: They remain with the original validator. Claim them before or after redelegating.

**Q: Can I redelegate to multiple validators at once?**
A: No, each redelegation is a separate transaction.

---

## Next Steps

- [Undelegate Tokens →](./undelegate.md)
- [Claim Rewards →](./claim-rewards.md)
- [Staking Calculator →](./calculator.md)
- [Validator Guide →](../features/validators.md)

---

## Need Help?

- **Community**: [Telegram](https://t.me/winsnip)
- **Support**: support@winscan.org
- **Documentation**: [FAQ](../troubleshooting/faq.md)
