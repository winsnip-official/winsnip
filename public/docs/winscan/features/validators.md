# Validators

Monitor and analyze validator performance on WinScan.

## Overview

Validators are essential to Proof-of-Stake blockchains. They propose blocks, validate transactions, and secure the network. WinScan provides comprehensive validator information and analytics.

## Accessing Validators

1. Navigate to any chain on WinScan
2. Click on "Validators" in the navigation menu
3. Or visit: `https://winscan.org/[chain]/validators`

## Validator List

The validator list displays all active and inactive validators:

### Active Validators
- **Rank**: Position by voting power
- **Validator Name**: Moniker and identity
- **Voting Power**: Staked tokens and percentage
- **Commission**: Fee charged to delegators
- **Uptime**: Block signing performance
- **Status**: Active, Jailed, or Unbonding

### Validator Metrics
- Total validators
- Active set size
- Total bonded tokens
- Average commission rate

## Validator Details

Click on any validator to view comprehensive information:

### Basic Information
- **Validator Address**: Operator address
- **Consensus Address**: Validator consensus pubkey
- **Moniker**: Validator name
- **Website**: Official website link
- **Description**: Validator details

### Staking Information
- **Total Stake**: Total delegated tokens
- **Self-Stake**: Validator's own stake
- **Voting Power**: Percentage of network power
- **Delegators**: Number of delegators
- **Commission Rate**: Current commission
- **Max Commission**: Maximum allowed commission
- **Max Change Rate**: Maximum commission change per day

### Performance Metrics
- **Uptime**: Block signing percentage
- **Missed Blocks**: Recent missed blocks
- **Proposed Blocks**: Total blocks proposed
- **Last Active**: Most recent activity
- **Jailed Status**: Slashing history

### Delegations
View all delegations to the validator:
- Delegator addresses
- Delegation amounts
- Delegation timestamps
- Rewards earned

## Validator Status

### Active
Validator is in the active set and proposing blocks.

### Inactive
Validator is not in the active set but can receive delegations.

### Jailed
Validator was slashed for misbehavior:
- Double signing
- Excessive downtime
- Must unjail to resume

### Unbonding
Validator is leaving the active set (21-day unbonding period).

## Commission Rates

Validators charge commission on staking rewards:
- **0-5%**: Low commission, competitive
- **5-10%**: Standard commission
- **10-20%**: Higher commission
- **20-100%**: Very high commission

**Note**: Lower commission doesn't always mean better validator. Consider uptime, security, and community involvement.

## Choosing a Validator

Consider these factors when delegating:

### 1. Uptime
- Target: >99% uptime
- Check missed blocks history
- Monitor recent performance

### 2. Commission
- Compare rates across validators
- Check commission change history
- Consider max commission rate

### 3. Voting Power
- Avoid over-concentrated validators
- Support decentralization
- Distribute stake across multiple validators

### 4. Security
- Validator infrastructure
- Security practices
- Slashing history

### 5. Community
- Active communication
- Governance participation
- Community contributions

### 6. Self-Stake
- Validators with higher self-stake have more "skin in the game"
- Shows commitment to the network

## Validator Operations

### Delegation
Stake tokens to validators to earn rewards:
1. Choose validator
2. Click "Delegate"
3. Enter amount
4. Confirm transaction

[Learn more about delegation](/docs/staking/delegate)

### Redelegation
Move stake between validators:
1. Select current validator
2. Choose new validator
3. Enter amount to redelegate
4. Confirm transaction

[Learn more about redelegation](/docs/staking/redelegate)

### Undelegation
Unstake tokens from validator:
1. Select validator
2. Click "Undelegate"
3. Enter amount
4. Wait 21-day unbonding period

[Learn more about undelegation](/docs/staking/undelegate)

## Validator Rewards

Validators earn rewards from:
- **Block Rewards**: New tokens minted
- **Transaction Fees**: Fees from transactions
- **Commission**: Percentage from delegator rewards

Delegators receive:
- Staking rewards minus validator commission
- Proportional to stake amount
- Compounding if claimed and restaked

## Slashing

Validators can be slashed for:

### Double Signing
- Signing two different blocks at same height
- Penalty: 5% of stake slashed
- Validator is jailed

### Downtime
- Missing too many blocks (typically >95% in 10,000 blocks)
- Penalty: 0.01% of stake slashed
- Validator is jailed

### Unjailing
Jailed validators must:
1. Fix the issue
2. Wait minimum jail time
3. Submit unjail transaction
4. Resume operations

## Governance Participation

Validators can vote on governance proposals:
- Delegators inherit validator's vote
- Delegators can override with own vote
- Important for network decisions

Check validator governance activity:
- Voting history
- Proposal participation rate
- Voting patterns

## Validator Analytics

### Performance Charts
- Uptime trends
- Voting power history
- Commission changes
- Delegation flow

### Comparison Tools
- Compare multiple validators
- Rank by various metrics
- Filter by criteria

### Alerts
Set up alerts for:
- Validator downtime
- Commission changes
- Jailing events
- Voting power changes

## API Access

Access validator data via API:

```bash
# Get all validators
GET /api/validators

# Get validator details
GET /api/validator?address={validatorAddress}

# Get validator delegations
GET /api/validator/delegations?address={validatorAddress}
```

## Best Practices

1. **Diversify**: Delegate to multiple validators
2. **Research**: Check validator history and reputation
3. **Monitor**: Track validator performance regularly
4. **Participate**: Vote on governance proposals
5. **Claim Rewards**: Regularly claim and restake rewards
6. **Stay Informed**: Follow validator announcements

## Troubleshooting

### Validator Not Found
- Verify validator address
- Check if validator is active
- Ensure correct network

### Cannot Delegate
- Check wallet connection
- Verify sufficient balance
- Ensure validator is not jailed

### Rewards Not Showing
- Wait for block confirmation
- Check delegation status
- Verify validator is active

## Running a Validator

Interested in becoming a validator?

Requirements:
- Technical expertise
- Reliable infrastructure
- Minimum self-stake
- Community support

Resources:
- Chain documentation
- Validator guides
- Community forums
- Technical support

## Need Help?

- Join [Telegram community](https://t.me/winsnip)
- Read [staking guides](/docs/staking/delegate)
- Contact [support@winscan.org](mailto:support@winscan.org)
