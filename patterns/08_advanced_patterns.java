
/**
 * ╔══════════════════════════════════════════════════════╗
 * ║      PATTERN: STACKS, HEAPS, TRIES, INTERVALS       ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Essential data structures for MAANG interviews      ║
 * ╚══════════════════════════════════════════════════════╝
 */
import java.util.*;

public class AdvancedPatterns {

    // ============ MONOTONIC STACK ============
    // Daily Temperatures (LC 739) — Google/Amazon
    // Time: O(n) | Space: O(n)
    public static int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>(); // stores indices

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
                int prevIdx = stack.pop();
                result[prevIdx] = i - prevIdx;
            }
            stack.push(i);
        }
        return result;
    }

    // ============ TRIE ============
    // Implement Trie (LC 208) — All MAANG
    static class Trie {
        Trie[] children = new Trie[26];
        boolean isEnd = false;

        public void insert(String word) {
            Trie node = this;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (node.children[idx] == null)
                    node.children[idx] = new Trie();
                node = node.children[idx];
            }
            node.isEnd = true;
        }

        public boolean search(String word) {
            Trie node = searchPrefix(word);
            return node != null && node.isEnd;
        }

        public boolean startsWith(String prefix) {
            return searchPrefix(prefix) != null;
        }

        private Trie searchPrefix(String word) {
            Trie node = this;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (node.children[idx] == null)
                    return null;
                node = node.children[idx];
            }
            return node;
        }
    }

    // ============ HEAP / PRIORITY QUEUE ============
    // Find Median from Data Stream (LC 295) — All MAANG
    static class MedianFinder {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder()); // left half
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(); // right half

        public void addNum(int num) {
            maxHeap.offer(num);
            minHeap.offer(maxHeap.poll()); // Balance
            if (minHeap.size() > maxHeap.size())
                maxHeap.offer(minHeap.poll());
        }

        public double findMedian() {
            if (maxHeap.size() > minHeap.size())
                return maxHeap.peek();
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        }
    }

    // Top K Frequent Elements (LC 347) — Amazon/Google
    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int n : nums)
            freq.put(n, freq.getOrDefault(n, 0) + 1);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]); // min-heap by freq
        for (var entry : freq.entrySet()) {
            pq.offer(new int[] { entry.getKey(), entry.getValue() });
            if (pq.size() > k)
                pq.poll();
        }
        int[] result = new int[k];
        for (int i = 0; i < k; i++)
            result[i] = pq.poll()[0];
        return result;
    }

    // ============ INTERVALS ============
    // Merge Intervals (LC 56) — All MAANG
    public static int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> merged = new ArrayList<>();
        merged.add(intervals[0]);
        for (int i = 1; i < intervals.length; i++) {
            int[] last = merged.get(merged.size() - 1);
            if (intervals[i][0] <= last[1]) {
                last[1] = Math.max(last[1], intervals[i][1]);
            } else {
                merged.add(intervals[i]);
            }
        }
        return merged.toArray(new int[0][]);
    }

    // ============ LRU CACHE (LC 146) ============
    // All MAANG — Uses LinkedHashMap or custom doubly linked list
    static class LRUCache {
        int capacity;
        LinkedHashMap<Integer, Integer> map;

        LRUCache(int capacity) {
            this.capacity = capacity;
            this.map = new LinkedHashMap<>(capacity, 0.75f, true) {
                protected boolean removeEldestEntry(Map.Entry eldest) {
                    return size() > capacity;
                }
            };
        }

        public int get(int key) {
            return map.getOrDefault(key, -1);
        }

        public void put(int key, int value) {
            map.put(key, value);
        }
    }

    /*
     * QUICK REFERENCE:
     * Next greater/smaller → Monotonic Stack
     * Prefix matching/autocomplete → Trie
     * Top K / median → Heap (PriorityQueue)
     * Overlapping ranges → Sort + merge intervals
     * Recent access / eviction → LRU Cache (LinkedHashMap)
     */
}
