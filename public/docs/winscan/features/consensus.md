# Consensus State

Monitor real-time consensus state and validator participation on the network.

## Overview

The Consensus page shows the current state of the Tendermint consensus mechanism, including which validators are actively participating in block production and their voting power.

## What is Consensus?

Consensus is the process by which validators agree on the next block to add to the blockchain. Cosmos chains use Tendermint BFT (Byzantine Fault Tolerant) consensus.

## Accessing Consensus State

Navigate to any chain and click "Network" → "Consensus" in the sidebar, or visit:
```
https://winscan.org/[chain]/consensus
```

## Consensus Information

### Current Round State

- **Height**: Current block height being proposed
- **Round**: Current consensus round (usually 0)
- **Step**: Current consensus step (Propose, Prevote, Precommit, Commit)
- **Start Time**: When the current round started

### Validator Set

View all validators participating in consensus:

- **Moniker**: Validator name
- **Voting Power**: Validator's voting power
- **Proposer Priority**: Priority for being selected as proposer
- **Status**: Active, Jailed, or Unbonding

### Proposer

The validator currently proposing the block:
- Rotates based on voting power and priority
- Selected deterministically
- Can be predicted in advance

## Consensus Steps

### 1. Propose

The selected proposer broadcasts a block proposal:
- Contains transactions from mempool
- Includes previous block hash
- Signed by proposer

### 2. Prevote

Validators vote on the proposed block:
- ✅ Vote "yes" if block is valid
- ❌ Vote "nil" if block is invalid or not received
- Requires >2/3 voting power to proceed

### 3. Precommit

Validators commit to the block:
- Only if >2/3 prevoted for the same block
- Locks validators to this block
- Prepares for finalization

### 4. Commit

Block is finalized and added to blockchain:
- Requires >2/3 precommits
- Block becomes immutable
- New round starts for next block

## Monitoring Consensus

### Healthy Consensus

Signs of healthy consensus:
- ✅ Blocks produced every ~6 seconds
- ✅ >2/3 validators participating
- ✅ No missed rounds
- ✅ Low round numbers (0 or 1)

### Consensus Issues

Warning signs:
- ⚠️ High round numbers (>3)
- ⚠️ Slow block times (>10 seconds)
- ⚠️ <2/3 validators voting
- ⚠️ Frequent proposer changes

## Validator Participation

### Active Validators

Validators currently in the active set:
- Participate in consensus
- Earn block rewards
- Can be slashed for misbehavior

### Voting Power Distribution

- Total voting power: Sum of all active validators
- Individual voting power: Validator's stake
- Minimum voting power: Required to be in active set

### Proposer Selection

Proposers are selected based on:
1. **Voting Power**: Higher stake = higher chance
2. **Proposer Priority**: Adjusted after each block
3. **Deterministic Algorithm**: Predictable and fair

## Consensus Parameters

### Block Time

Target time between blocks:
- Usually 5-7 seconds
- Configurable per chain
- Affects transaction finality

### Timeout Parameters

```toml
[consensus]
timeout_propose = "3s"
timeout_propose_delta = "500ms"
timeout_prevote = "1s"
timeout_prevote_delta = "500ms"
timeout_precommit = "1s"
timeout_precommit_delta = "500ms"
timeout_commit = "5s"
```

### Evidence Parameters

```toml
[consensus]
max_age_num_blocks = "100000"
max_age_duration = "172800000000000"  # 48 hours
```

## Use Cases

### For Validators

Monitor your validator's participation:
- Check if you're proposing blocks
- Verify voting power is correct
- Ensure you're not missing votes

### For Delegators

Verify validator performance:
- Check uptime and participation
- Monitor voting power changes
- Identify inactive validators

### For Developers

Understand consensus behavior:
- Debug consensus issues
- Optimize transaction timing
- Monitor network health

## Consensus Metrics

### Block Production Rate

```
Blocks per minute = 60 / average_block_time
```

### Validator Participation

```
Participation rate = (active_validators / total_validators) * 100
```

### Consensus Efficiency

```
Efficiency = (blocks_at_round_0 / total_blocks) * 100
```

## Troubleshooting

### High Round Numbers

**Cause**: Validators can't reach consensus

**Solutions**:
- Check validator connectivity
- Verify >2/3 validators are online
- Check for network partitions

### Slow Block Times

**Cause**: Consensus taking too long

**Solutions**:
- Increase timeout parameters
- Check validator performance
- Verify network latency

### Missing Votes

**Cause**: Validator not participating

**Solutions**:
- Check validator is running
- Verify node is synced
- Check firewall settings

## Advanced Topics

### Double Sign Detection

Consensus tracks double signing:
- Validator signs two different blocks at same height
- Automatically detected and slashed
- Evidence stored on-chain

### Byzantine Fault Tolerance

Tendermint can tolerate up to 1/3 Byzantine validators:
- Malicious validators can't halt the chain
- Requires >2/3 honest validators
- Provides strong safety guarantees

### Consensus Upgrades

Consensus can be upgraded via governance:
- Change block time
- Adjust timeout parameters
- Modify evidence parameters

## Related Features

- [Validators](./validators.md) - View all validators
- [Network](./network.md) - Network statistics
- [Blocks](./blocks.md) - Recent blocks

## API Access

Query consensus state programmatically:

```bash
# Get consensus state
curl https://rpc.example.com/consensus_state

# Get validators
curl https://rpc.example.com/validators

# Get consensus parameters
curl https://rpc.example.com/consensus_params
```

## Support

Questions about consensus?
- Telegram: https://t.me/winsnip
- GitHub: https://github.com/winsnip-official/winscan.org
- Email: support@winscan.org
