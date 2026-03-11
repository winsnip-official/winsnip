# IBC Channels

Understanding IBC channels and connections.

## What are IBC Channels?

IBC channels are pathways that connect different blockchains, enabling token transfers and communication.

## Channel Information
- **Channel ID**: Unique identifier (e.g., channel-0)
- **Port**: Usually "transfer"
- **State**: OPEN, CLOSED, or INIT
- **Counterparty**: Connected chain and channel
- **Version**: IBC protocol version

## How to View
1. Go to "Relayers" page
2. See all IBC channels
3. Click for channel details

## Channel States
- ✅ **OPEN**: Active, can transfer
- ❌ **CLOSED**: Inactive
- 🔄 **INIT**: Being established

## Example
\\\
Channel: channel-0
Port: transfer
State: OPEN
Counterparty: Osmosis (channel-42)
\\\

## Related
- [IBC Transfer →](./transfer.md)
- [Relayers →](./relayers.md)
