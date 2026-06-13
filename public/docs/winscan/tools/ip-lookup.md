# IP & Domain Lookup Tool

Learn how to use the IP Lookup tool to check IP addresses and domain locations, hosting providers, and network information.

## What is IP Lookup?

The IP Lookup tool allows you to:
- 🌍 Find geographic location of IP addresses
- 🏢 Identify hosting providers and ISPs
- 🔍 Resolve domain names to IP addresses
- 📍 View coordinates on map
- 🌐 Check network information

---

## Accessing the Tool

### Step 1: Navigate to IP Lookup

1. Go to [WinScan](https://winscan.org)
2. Select any chain from chain selector
3. Click **"Tools"** in sidebar
4. Click **"IP Lookup"**
5. You'll see the IP Lookup interface

**Direct URL**:
```
https://winscan.org/[chain]/ip-lookup
Example: https://winscan.org/paxi-mainnet/ip-lookup
```

---

## Using IP Lookup

### Lookup IP Address

#### Step 1: Enter IP Address

1. Type IP address in search box
2. Example: `8.8.8.8`
3. Click **"Lookup"** button

#### Step 2: View Results

You'll see:

```
Query Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Original Query: 8.8.8.8
IP Address: 8.8.8.8

Location Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
City: Mountain View
Country: 🇺🇸 United States
Country Code: US
Coordinates: 37.4056, -122.0775

Network Provider
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hosting Provider: Google Cloud
```

#### Step 3: View on Map

1. Click **"View on Google Maps"** link
2. Opens location in Google Maps
3. See exact coordinates

---

### Lookup Domain Name

#### Step 1: Enter Domain

1. Type domain name in search box
2. Examples:
   - `google.com`
   - `rpc.cosmos.network`
   - `api.winscan.org`
3. Click **"Lookup"** button

#### Step 2: DNS Resolution

The tool will:
1. Resolve domain to IP address
2. Lookup IP location
3. Show both domain and IP info

**Example Result**:
```
Query Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Original Query: rpc.cosmos.network
IP Address: 104.21.45.123
Resolved From Domain: rpc.cosmos.network

Location Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
City: San Francisco
Country: 🇺🇸 United States
Country Code: US
Coordinates: 37.7749, -122.4194

Network Provider
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hosting Provider: Cloudflare
```

---

### Lookup URL

#### Step 1: Enter Full URL

1. Type complete URL with protocol
2. Examples:
   - `https://api.winscan.org`
   - `https://rpc.paxi.network`
   - `wss://ws.osmosis.zone`
3. Click **"Lookup"** button

#### Step 2: View Results

The tool will:
1. Extract domain from URL
2. Resolve to IP address
3. Show location and provider

---

## Use Cases

### 1. Check Validator Node Location

**Scenario**: Want to know where validator is hosted

**Steps**:
1. Go to validator detail page
2. Copy validator IP or RPC endpoint
3. Use IP Lookup tool
4. See location and provider

**Example**:
```
Input: 65.21.123.45
Result:
  Location: Helsinki, Finland
  Provider: Hetzner
```

**Benefits**:
- Verify validator location
- Check hosting provider
- Assess geographic distribution

### 2. Verify RPC Endpoint

**Scenario**: Check if RPC endpoint is reliable

**Steps**:
1. Copy RPC URL from chain config
2. Use IP Lookup tool
3. Check provider and location

**Example**:
```
Input: https://rpc.cosmos.network
Result:
  IP: 104.21.45.123
  Location: San Francisco, US
  Provider: Cloudflare
```

**Benefits**:
- Verify endpoint authenticity
- Check hosting quality
- Assess reliability

### 3. Network Topology Analysis

**Scenario**: Analyze network distribution

**Steps**:
1. Get list of peer IPs from network page
2. Lookup each IP
3. Map geographic distribution

**Example**:
```
Peer 1: 65.21.123.45 → Helsinki, Finland (Hetzner)
Peer 2: 135.181.45.67 → Nuremberg, Germany (Hetzner)
Peer 3: 167.99.123.45 → New York, US (DigitalOcean)
```

**Benefits**:
- Understand network topology
- Identify centralization risks
- Plan node deployment

### 4. Troubleshoot Connection Issues

**Scenario**: RPC endpoint not responding

**Steps**:
1. Lookup RPC endpoint
2. Check if IP resolves
3. Verify provider status

**Example**:
```
Input: rpc.example.com
Result: Could not resolve domain
Action: Check DNS configuration
```

**Benefits**:
- Diagnose connectivity issues
- Verify DNS resolution
- Identify network problems

---

## Understanding Results

### Location Information

#### City
- Approximate city location
- Based on IP geolocation database
- May not be exact physical location

#### Country
- Country where IP is registered
- Shown with flag emoji
- Country code (ISO 3166-1 alpha-2)

#### Coordinates
- Latitude and longitude
- Approximate location
- Can view on Google Maps

**Accuracy**:
- Country: ~99% accurate
- City: ~80% accurate
- Coordinates: ±50km typical

### Network Provider

#### Hosting Providers
Common providers detected:
- **AWS** - Amazon Web Services
- **Google Cloud** - Google Cloud Platform
- **Microsoft Azure** - Azure cloud
- **Hetzner** - European hosting
- **DigitalOcean** - Cloud infrastructure
- **OVH** - European hosting
- **Contabo** - Budget hosting
- **Cloudflare** - CDN and security
- **Others** - Unknown or small providers

#### ISP Information
For non-hosting IPs:
- Internet Service Provider name
- Organization name
- AS Number (Autonomous System)

---

## Example Queries

### Example 1: Google DNS
```
Input: 8.8.8.8
Result:
  City: Mountain View
  Country: United States 🇺🇸
  Provider: Google Cloud
  Coordinates: 37.4056, -122.0775
```

### Example 2: Cloudflare DNS
```
Input: 1.1.1.1
Result:
  City: Los Angeles
  Country: United States 🇺🇸
  Provider: Cloudflare
  Coordinates: 34.0522, -118.2437
```

### Example 3: Cosmos RPC
```
Input: rpc.cosmos.network
Result:
  IP: 104.21.45.123
  City: San Francisco
  Country: United States 🇺🇸
  Provider: Cloudflare
  Coordinates: 37.7749, -122.4194
```

### Example 4: Hetzner Server
```
Input: 65.21.123.45
Result:
  City: Helsinki
  Country: Finland 🇫🇮
  Provider: Hetzner
  Coordinates: 60.1699, 24.9384
```

---

## API Usage

### Programmatic Access

You can use the IP Lookup API directly:

**Endpoint**:
```
GET /api/tools/ip-lookup?query={ip_or_domain}
```

**Example Request**:
```bash
curl "https://winscan.org/api/tools/ip-lookup?query=8.8.8.8"
```

**Example Response**:
```json
{
  "success": true,
  "query": "8.8.8.8",
  "ip": "8.8.8.8",
  "hostname": null,
  "location": {
    "city": "Mountain View",
    "country": "United States",
    "countryCode": "US",
    "latitude": 37.4056,
    "longitude": -122.0775,
    "provider": "Google Cloud",
    "coordinates": "37.4056, -122.0775"
  }
}
```

**Domain Lookup**:
```bash
curl "https://winscan.org/api/tools/ip-lookup?query=google.com"
```

**Response**:
```json
{
  "success": true,
  "query": "google.com",
  "ip": "142.250.185.46",
  "hostname": "google.com",
  "location": {
    "city": "Mountain View",
    "country": "United States",
    "countryCode": "US",
    "latitude": 37.4056,
    "longitude": -122.0775,
    "provider": "Google Cloud",
    "coordinates": "37.4056, -122.0775"
  }
}
```

---

## Limitations

### Accuracy
- **Country**: Very accurate (~99%)
- **City**: Approximate (~80%)
- **Coordinates**: ±50km typical
- **Provider**: Based on AS Number and IP ranges

### Privacy
- Only shows public IP information
- No personal data collected
- Uses public geolocation databases

### Rate Limits
- Free tier: 45 requests/minute
- No authentication required
- Fair use policy applies

---

## Technical Details

### Data Sources

**GeoIP Database**:
- GeoLite2-Country (MaxMind)
- GeoLite2-ASN (MaxMind)
- Updated monthly

**Fallback API**:
- ip-api.com (when database unavailable)
- 45 requests/minute limit

### Provider Detection

**Methods**:
1. AS Number matching
2. Organization name matching
3. IP range detection
4. Reverse DNS lookup

**Supported Providers**:
- 15+ major cloud providers
- 100+ hosting companies
- ISPs worldwide

---

## Best Practices

### ✅ Do's

- **Verify Results**: Cross-check with other tools
- **Use for Analysis**: Network topology, security
- **Batch Lookups**: Use API for multiple IPs
- **Cache Results**: Avoid repeated lookups

### ❌ Don'ts

- **Don't Rely Solely**: Use as one data point
- **Don't Expect Exact**: Location is approximate
- **Don't Abuse**: Respect rate limits
- **Don't Store PII**: Only public IP data

---

## Troubleshooting

### Domain Not Resolving

**Error**: "Could not resolve domain to IP address"

**Causes**:
- Domain doesn't exist
- DNS configuration issue
- Typo in domain name

**Solutions**:
1. Check domain spelling
2. Verify domain exists
3. Try with www prefix
4. Check DNS records

### No Location Data

**Error**: "Could not find location data for this IP"

**Causes**:
- Private IP address (192.168.x.x, 10.x.x.x)
- New IP not in database
- Invalid IP format

**Solutions**:
1. Verify IP is public
2. Check IP format
3. Try again later (database updates)

### Rate Limit Exceeded

**Error**: "Too many requests"

**Causes**:
- Exceeded 45 requests/minute
- API rate limit reached

**Solutions**:
1. Wait 1 minute
2. Reduce request frequency
3. Implement caching
4. Contact support for higher limits

---

## Related Tools

- [Network Status →](./network-status.md)
- [Endpoint Checker →](./endpoint-checker.md)
- [Validator Map →](../features/validators.md)

---

## Need Help?

- **Community**: [Telegram](https://t.me/winsnip)
- **Support**: support@winscan.org
- **API Docs**: [API Reference](../api/overview.md)
