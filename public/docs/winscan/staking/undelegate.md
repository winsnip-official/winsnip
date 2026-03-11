# Undelegate Tokens

Learn how to unstake your tokens and return them to your wallet.

## What is Undelegation?

Undelegation is the process of unstaking your tokens from a validator. After undelegation, tokens go through an unbonding period (typically 21 days) before becoming liquid again.

## Important Notes

- ⏱️ **Unbonding Period**: 21 days (varies by chain)
- 💰 **No Rewards**: Stop earning rewards immediately  
- 🔒 **Cannot Cancel**: Undelegation cannot be reversed
- ⚠️ **Slashing Risk**: Tokens can still be slashed during unbonding

## How to Undelegate

### Step 1: Navigate to Your Delegations
1. Go to your account page
2. Connect your wallet
3. Scroll to "Delegations" section

### Step 2: Select Delegation
1. Find the validator you want to undelegate from
2. Click **"Undelegate"** button
3. Undelegation modal will appear

### Step 3: Enter Amount
1. Enter amount to undelegate
2. Or click "Max" to undelegate all
3. Review unbonding period (21 days)

### Step 4: Confirm Transaction
1. Click "Undelegate" button
2. Approve in your wallet
3. Wait for confirmation

### Step 5: Wait for Unbonding
1. Tokens enter unbonding period
2. Check "Unbonding" section to track progress
3. After 21 days, tokens return to your wallet

## When to Undelegate

✅ **Good Reasons**:
- Need liquid tokens for trading
- Exiting staking completely
- Emergency situations
- Moving tokens to different chain

❌ **Consider Alternatives**:
- Want to switch validators? → Use [Redelegate](./redelegate.md) instead
- Need small amount? → Keep some staked for rewards
- Validator issues? → Redelegate to better validator

## Unbonding Timeline

```
Day 0:  Undelegate initiated ✅
Day 1:  Unbonding... (20 days left)
Day 7:  Unbonding... (14 days left)
Day 14: Unbonding... (7 days left)
Day 21: Tokens available! ✅
```

## FAQ

**Q: Can I cancel undelegation?**
A: No, once initiated it cannot be cancelled.

**Q: Do I earn rewards during unbonding?**
A: No, rewards stop immediately.

**Q: Can I redelegate during unbonding?**
A: No, tokens are locked during unbonding.

**Q: What if validator gets slashed during unbonding?**
A: Your tokens can still be slashed during the unbonding period.

## Next Steps

- [Redelegate Instead →](./redelegate.md)
- [Claim Rewards →](./claim-rewards.md)
- [Delegate Again →](./delegate.md)
