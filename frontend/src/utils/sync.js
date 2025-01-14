export function calculateLatency(serverTime, clientTime) {
    return Math.abs(serverTime - clientTime);
}
