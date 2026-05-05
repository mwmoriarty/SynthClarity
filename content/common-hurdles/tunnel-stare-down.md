---
title: "Tunnel Stare-Down"
description: "Resolving the head-on deadlock at single-track bottlenecks."
theme: "Flow & Signaling"
tags: [signaling, pathfinding, bottlenecks, tunnels]
order: 2
---
I remember building my first long-distance line through a mountain range. To save money (the **Why**), I built a single-track tunnel. It worked fine for one train, but as soon as I added a second, I found them both parked at the tunnel mouths (the **Where**), staring each other down like two stubborn mules.

I was using the old block signals, and they both thought the track was clear until they were already committed. The **What** was a total network freeze. I realized that my 'saving money' logic was actually 'creating a deadlock' logic.

My **Aha! Moment** came when I replaced those entry signals with **One-Way Path Signals** at each end. I didn't even have to change the track. **Boom. Done.** The pathfinder became the 'tunnel guard,' making one train wait until the other was completely clear. It turned a point of frustration into a masterpiece of timing.

> [!CAUTION] The Reality Check: In the original TTD days, we had to build 'passing loops' or double-track everything to avoid this. With modern Path Signals, a single track can be efficient if you just trust the 'Magic Wand.' Do not over-engineer the track when the signal can do the thinking for you.