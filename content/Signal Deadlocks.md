
One of the most frustrating "pain points" for any player—new or veteran—is the discovery of a gridlocked network. A single misplaced signal can halt an entire economic engine. 

## The Symptom
Trains are facing each other on a single track, or a junction is "frozen" with no trains able to enter or exit, even though there is empty track ahead.

## The Fix: "The Space Rule"
The primary cause of deadlocks is often **insufficient spacing** between signals or junctions. 

### 1. The Length Check
Ensure that the distance between two signals is at least as long as your **longest train**. 
* **The Problem:** If a train stops at a signal and its "tail" is still blocking a junction behind it, a deadlock is inevitable.
* **The Solution:** Use the `Measurement Tool` to verify tile counts.

### 2. Path Signal Logic
In modern OpenTTD, **Path Signals** are the gold standard. 
* Replace standard block signals at junction entrances with **Path Signals**.
* These allow trains to reserve a "path" through the junction, only entering if they have a clear exit.

## Technical Reference (Krypton Block)
If you are using specific NewGRFs that modify signal behavior, check your `openttd.cfg` for these entries to ensure pathfinding is optimized:
```
text
[pf]
pathfinder_for_trains = 2
wait_for_pbs_path = 30
reserve_paths_through_junctions = true
```

> [!TIP] **Curator's Note**
> Use the **High-Contrast Teal** signal highlights to easily spot signal directions in Dark Mode. It saved me hours of frustration when debugging the mainlines on my last map.