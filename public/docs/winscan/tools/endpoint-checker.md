# Endpoint Checker

Test and verify RPC, API, and gRPC endpoints for any Cosmos chain.

## Overview

The Endpoint Checker tool helps you verify the health and performance of blockchain endpoints. It's essential for node operators, developers, and users who need reliable connections to the network.

## Features

- **RPC Endpoint Testing**: Check if RPC endpoints are responsive
- **API Endpoint Testing**: Verify REST API availability
- **gRPC Testing**: Test gRPC connections
- **Response Time**: Measure endpoint latency
- **Block Height**: Check if endpoints are synced
- **SSL/TLS Verification**: Ensure secure connections

## How to Use

### 1. Access the Tool

Navigate to any chain and click "Tools" → "Endpoint Checker" in the sidebar, or visit:
```
https://winscan.org/[chain]/endpoint-checker
```

### 2. Test Endpoints

The tool automatically tests all configured endpoints for the selected chain:

- **RPC Endpoints**: Tests `/status` and `/health` endpoints
- **API Endpoints**: Tests `/cosmos/base/tendermint/v1beta1/node_info`
- **gRPC Endpoints**: Tests connection and availability

### 3. View Results

Results show:
- ✅ **Online**: Endpoint is working correctly
- ⚠️ **Slow**: Endpoint is responding but with high latency
- ❌ **Offline**: Endpoint is not responding

### 4. Response Time

Each endpoint shows:
- Response time in milliseconds
- Current block height
- Chain ID verification
- SSL certificate status

## Use Cases

### For Node Operators

Test your own endpoints to ensure they're accessible:
```bash
# Your RPC endpoint
https://rpc.yournode.com

# Your API endpoint
https://api.yournode.com

# Your gRPC endpoint
grpc.yournode.com:9090
```

### For Developers

Find the fastest endpoints for your application:
1. Test all available endpoints
2. Sort by response time
3. Use the fastest ones in your app

### For Users

Verify endpoint health before connecting your wallet:
- Check if endpoints are synced
- Ensure SSL/TLS is enabled
- Verify chain ID matches

## Endpoint Types

### RPC (Remote Procedure Call)

Used for:
- Querying blockchain data
- Broadcasting transactions
- Subscribing to events

Default port: `26657`

### REST API

Used for:
- HTTP queries
- Account information
- Transaction history

Default port: `1317`

### gRPC

Used for:
- High-performance queries
- Streaming data
- Client libraries

Default port: `9090`

## Best Practices

1. **Use Multiple Endpoints**: Don't rely on a single endpoint
2. **Check Regularly**: Endpoint status can change
3. **Prefer HTTPS**: Always use secure connections
4. **Monitor Latency**: Choose endpoints with low response times
5. **Verify Chain ID**: Ensure you're connecting to the correct network

## Troubleshooting

### Endpoint Shows Offline

- Check if the URL is correct
- Verify the endpoint is publicly accessible
- Check firewall rules
- Ensure the node is synced

### High Latency

- Try endpoints closer to your location
- Check your internet connection
- Consider using a different endpoint

### SSL/TLS Errors

- Ensure the endpoint has a valid SSL certificate
- Check if the certificate is expired
- Verify the domain name matches

## API Integration

You can also check endpoints programmatically:

```javascript
// Check RPC endpoint
const response = await fetch('https://rpc.example.com/status');
const data = await response.json();

console.log('Block Height:', data.result.sync_info.latest_block_height);
console.log('Chain ID:', data.result.node_info.network);
```

## Related Tools

- [Network Monitor](./network-monitor.md) - Monitor network health
- [IP Lookup](./ip-lookup.md) - Geolocate endpoints
- [State Sync](./state-sync.md) - Configure state sync

## Support

Need help? Contact us:
- Telegram: https://t.me/winsnip
- GitHub: https://github.com/winsnip-official/winscan.org
- Email: support@winscan.org
