# API Reference

Complete API documentation for integrating WinScan into your applications.

## Base URL

```
https://winscan.org/api
```

## Authentication

No authentication required. All endpoints are publicly accessible.

## Rate Limits

- Free tier: 100 requests per minute
- No API key required
- Fair use policy applies

---

## Endpoints

### Chains

#### Get All Chains

```http
GET /api/chains
```

Returns list of all supported chains.

**Response:**
```json
[
  {
    "chain_name": "paxi-mainnet",
    "chain_id": "paxichain",
    "pretty_name": "Paxi Network",
    "logo": "https://...",
    "bech32_prefix": "paxi",
    "rpc": [...],
    "rest": [...],
    "evm_rpc": [...],
    "evm_wss": [...]
  }
]
```

---

### Blocks

#### Get Latest Blocks

```http
GET /api/blocks?chain={chain_name}&limit={limit}
```

**Parameters:**
- `chain` (required): Chain name (e.g., `paxi-mainnet`)
- `limit` (optional): Number of blocks (default: 20, max: 100)

**Response:**
```json
{
  "blocks": [
    {
      "height": "12345",
      "hash": "ABC123...",
      "time": "2024-01-01T00:00:00Z",
      "proposer": "paxivaloper1...",
      "txs": 10
    }
  ]
}
```

#### Get Block by Height

```http
GET /api/blocks/{height}?chain={chain_name}
```

**Response:**
```json
{
  "block": {
    "height": "12345",
    "hash": "ABC123...",
    "time": "2024-01-01T00:00:00Z",
    "proposer": "paxivaloper1...",
    "transactions": [...]
  }
}
```

---

### Transactions

#### Get Latest Transactions

```http
GET /api/transactions?chain={chain_name}&limit={limit}
```

**Parameters:**
- `chain` (required): Chain name
- `limit` (optional): Number of transactions (default: 20, max: 100)

**Response:**
```json
{
  "transactions": [
    {
      "hash": "ABC123...",
      "height": "12345",
      "time": "2024-01-01T00:00:00Z",
      "type": "cosmos.bank.v1beta1.MsgSend",
      "status": "success"
    }
  ]
}
```

#### Get Transaction by Hash

```http
GET /api/transactions/{hash}?chain={chain_name}
```

**Response:**
```json
{
  "transaction": {
    "hash": "ABC123...",
    "height": "12345",
    "time": "2024-01-01T00:00:00Z",
    "messages": [...],
    "fee": {...},
    "memo": "...",
    "status": "success"
  }
}
```

---

### Validators

#### Get All Validators

```http
GET /api/validators?chain={chain_name}
```

**Response:**
```json
{
  "validators": [
    {
      "operator_address": "paxivaloper1...",
      "moniker": "WinSnip Validator",
      "commission": "0.05",
      "voting_power": "1000000",
      "status": "BOND_STATUS_BONDED",
      "uptime": "99.9"
    }
  ]
}
```

#### Get Validator Details

```http
GET /api/validator?address={validator_address}&chain={chain_name}
```

**Response:**
```json
{
  "validator": {
    "operator_address": "paxivaloper1...",
    "moniker": "WinSnip Validator",
    "description": {...},
    "commission": {...},
    "voting_power": "1000000",
    "delegators": 100,
    "uptime": "99.9"
  }
}
```

---

### Accounts

#### Get Account Balance

```http
GET /api/balance?address={address}&chain={chain_name}
```

**Response:**
```json
{
  "balances": [
    {
      "denom": "upaxi",
      "amount": "1000000"
    }
  ],
  "delegations": [...],
  "rewards": [...]
}
```

---

### Network

#### Get Network Info

```http
GET /api/network?chain={chain_name}
```

**Response:**
```json
{
  "chain_id": "paxichain",
  "block_height": "12345",
  "block_time": "5.2",
  "bonded_tokens": "10000000",
  "inflation": "0.15",
  "community_pool": [...]
}
```

#### Get Network Peers

```http
GET /api/network/peers?chain={chain_name}
```

**Response:**
```json
{
  "total_peers": 56,
  "total_locations": 15,
  "locations": [
    {
      "city": "Helsinki",
      "country": "Finland",
      "coordinates": [24.9384, 60.1699],
      "count": 5,
      "provider": "Hetzner"
    }
  ]
}
```

---

### Governance

#### Get Proposals

```http
GET /api/proposals?chain={chain_name}&status={status}
```

**Parameters:**
- `status` (optional): `voting`, `passed`, `rejected`, `all`

**Response:**
```json
{
  "proposals": [
    {
      "id": "1",
      "title": "Proposal Title",
      "description": "...",
      "status": "PROPOSAL_STATUS_VOTING_PERIOD",
      "submit_time": "2024-01-01T00:00:00Z",
      "voting_end_time": "2024-01-15T00:00:00Z"
    }
  ]
}
```

---

### IBC

#### Get IBC Channels

```http
GET /api/ibc/channels?chain={chain_name}
```

**Response:**
```json
{
  "channels": [
    {
      "channel_id": "channel-0",
      "port_id": "transfer",
      "state": "STATE_OPEN",
      "counterparty": {
        "channel_id": "channel-42",
        "port_id": "transfer"
      }
    }
  ]
}
```

---

### Tools

#### IP Lookup

```http
GET /api/tools/ip-lookup?query={ip_or_domain}
```

**Parameters:**
- `query` (required): IP address or domain name

**Response:**
```json
{
  "success": true,
  "query": "8.8.8.8",
  "ip": "8.8.8.8",
  "location": {
    "city": "Mountain View",
    "country": "United States",
    "countryCode": "US",
    "latitude": 37.4056,
    "longitude": -122.0775,
    "provider": "Google Cloud"
  }
}
```

---

## Code Examples

### JavaScript/TypeScript

```typescript
// Fetch latest blocks
async function getLatestBlocks(chain: string) {
  const response = await fetch(
    `https://winscan.org/api/blocks?chain=${chain}&limit=10`
  );
  const data = await response.json();
  return data.blocks;
}

// Get validator info
async function getValidator(address: string, chain: string) {
  const response = await fetch(
    `https://winscan.org/api/validator?address=${address}&chain=${chain}`
  );
  const data = await response.json();
  return data.validator;
}

// Check account balance
async function getBalance(address: string, chain: string) {
  const response = await fetch(
    `https://winscan.org/api/balance?address=${address}&chain=${chain}`
  );
  const data = await response.json();
  return data.balances;
}
```

### Python

```python
import requests

# Fetch latest blocks
def get_latest_blocks(chain, limit=10):
    url = f"https://winscan.org/api/blocks?chain={chain}&limit={limit}"
    response = requests.get(url)
    return response.json()['blocks']

# Get validator info
def get_validator(address, chain):
    url = f"https://winscan.org/api/validator?address={address}&chain={chain}"
    response = requests.get(url)
    return response.json()['validator']

# Check account balance
def get_balance(address, chain):
    url = f"https://winscan.org/api/balance?address={address}&chain={chain}"
    response = requests.get(url)
    return response.json()['balances']
```

### cURL

```bash
# Get latest blocks
curl "https://winscan.org/api/blocks?chain=paxi-mainnet&limit=10"

# Get validator info
curl "https://winscan.org/api/validator?address=paxivaloper1...&chain=paxi-mainnet"

# Check account balance
curl "https://winscan.org/api/balance?address=paxi1...&chain=paxi-mainnet"

# IP Lookup
curl "https://winscan.org/api/tools/ip-lookup?query=8.8.8.8"
```

---

## Error Handling

All endpoints return standard HTTP status codes:

- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found
- `500` - Internal Server Error

**Error Response:**
```json
{
  "error": "Error message",
  "details": "Additional details"
}
```

---

## Best Practices

### Caching

- Cache responses when possible
- Respect `Cache-Control` headers
- Use ETags for conditional requests

### Rate Limiting

- Implement exponential backoff
- Monitor rate limit headers
- Use batch endpoints when available

### Error Handling

```typescript
async function fetchWithRetry(url: string, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
      
      if (response.status === 429) {
        // Rate limited, wait and retry
        await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        continue;
      }
      
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

---

## WebSocket API

Real-time updates via WebSocket (coming soon):

```javascript
const ws = new WebSocket('wss://winscan.org/ws');

ws.onopen = () => {
  // Subscribe to new blocks
  ws.send(JSON.stringify({
    type: 'subscribe',
    channel: 'blocks',
    chain: 'paxi-mainnet'
  }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('New block:', data);
};
```

---

## Support

- **Documentation**: [https://winscan.org/docs](https://winscan.org/docs)
- **GitHub**: [https://github.com/winsnip-official/winscan.org](https://github.com/winsnip-official/winscan.org)
- **Telegram**: [https://t.me/winsnip](https://t.me/winsnip)
- **Email**: support@winscan.org

---

## Changelog

### v1.0.0 (Current)
- Initial API release
- Support for 30+ Cosmos chains
- Block, transaction, validator endpoints
- Network and governance endpoints
- IBC channel information
- IP lookup tool

---

## Next Steps

- [Integration Guide →](./integration.md)
- [Chain Configuration →](./chain-config.md)
- [Contributing →](./contributing.md)
