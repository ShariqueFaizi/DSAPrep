/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           PATTERN: SLIDING WINDOW                    ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Use When:                                           ║
 * ║  - Subarray / substring problems                     ║
 * ║  - "Find longest/shortest/max/min" with constraint   ║
 * ║  - Contiguous sequence of elements                   ║
 * ║                                                      ║
 * ║  Companies: Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐ ║
 * ╚══════════════════════════════════════════════════════╝
 */

import java.util.*;

public class SlidingWindowPatterns {

    // ============================================================
    // TEMPLATE 1: Fixed-Size Sliding Window
    // ============================================================
    // Problem: Find maximum sum of k consecutive elements
    // Time: O(n) | Space: O(1)

    /**
     * Fixed window of size k.
     * Pattern: Compute first window, then slide by adding right and removing left.
     */
    public static int maxSumSubarray(int[] arr, int k) {
        int n = arr.length;
        if (n < k) return -1;

        // Compute sum of first window
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }
        int maxSum = windowSum;

        // Slide the window
        for (int i = k; i < n; i++) {
            windowSum += arr[i] - arr[i - k]; // Add right, remove left
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }


    // ============================================================
    // TEMPLATE 2: Variable-Size Sliding Window (Expand + Shrink)
    // ============================================================
    // Problem: Longest Substring Without Repeating Characters (LC 3)
    // Time: O(n) | Space: O(min(n, m)) where m = charset size

    /**
     * Variable window: expand right pointer, shrink left when constraint violated.
     * This is the MOST COMMON sliding window pattern.
     */
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> charSet = new HashSet<>();
        int left = 0;
        int maxLen = 0;

        for (int right = 0; right < s.length(); right++) {
            // Shrink window until constraint is satisfied
            while (charSet.contains(s.charAt(right))) {
                charSet.remove(s.charAt(left));
                left++;
            }

            // Expand window
            charSet.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }


    // ============================================================
    // TEMPLATE 3: Sliding Window with HashMap (Character Count)
    // ============================================================
    // Problem: Minimum Window Substring (LC 76) — HARD, Meta/Google favorite
    // Time: O(n) | Space: O(m)

    /**
     * Track character frequencies with a hashmap.
     * Expand until valid, then shrink to find minimum.
     */
    public static String minWindow(String s, String t) {
        if (s == null || t == null || s.length() < t.length()) return "";

        // Build frequency map for t
        Map<Character, Integer> need = new HashMap<>();
        for (char c : t.toCharArray()) {
            need.put(c, need.getOrDefault(c, 0) + 1);
        }

        Map<Character, Integer> have = new HashMap<>();
        int haveCount = 0, needCount = need.size();
        int resultStart = 0, resultLen = Integer.MAX_VALUE;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            have.put(c, have.getOrDefault(c, 0) + 1);

            if (need.containsKey(c) && have.get(c).intValue() == need.get(c).intValue()) {
                haveCount++;
            }

            // Try to shrink the window
            while (haveCount == needCount) {
                // Update result
                if ((right - left + 1) < resultLen) {
                    resultLen = right - left + 1;
                    resultStart = left;
                }

                // Shrink from left
                char leftChar = s.charAt(left);
                have.put(leftChar, have.get(leftChar) - 1);
                if (need.containsKey(leftChar) && have.get(leftChar) < need.get(leftChar)) {
                    haveCount--;
                }
                left++;
            }
        }

        return resultLen == Integer.MAX_VALUE ? "" : s.substring(resultStart, resultStart + resultLen);
    }


    // ============================================================
    // TEMPLATE 4: Sliding Window with At Most K Distinct
    // ============================================================
    // Problem: Longest Substring with At Most K Distinct Characters (LC 340)
    // Time: O(n) | Space: O(k)

    /**
     * Window where we allow at most k distinct characters.
     * Shrink window when distinct count exceeds k.
     */
    public static int longestWithKDistinct(String s, int k) {
        Map<Character, Integer> charCount = new HashMap<>();
        int left = 0;
        int maxLen = 0;

        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);

            while (charCount.size() > k) {
                char leftChar = s.charAt(left);
                charCount.put(leftChar, charCount.get(leftChar) - 1);
                if (charCount.get(leftChar) == 0) {
                    charCount.remove(leftChar);
                }
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }


    // ============================================================
    // TEMPLATE 5: Sliding Window with Array (Optimized HashMap)
    // ============================================================
    // Problem: Permutation in String (LC 567) — Amazon favorite
    // Time: O(n) | Space: O(1) — fixed 26 chars

    /**
     * Use int[26] instead of HashMap for pure lowercase letter problems.
     * Much faster in practice (cache-friendly, no boxing).
     */
    public static boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;

        int[] s1Count = new int[26];
        int[] windowCount = new int[26];

        // Build frequency of s1
        for (char c : s1.toCharArray()) {
            s1Count[c - 'a']++;
        }

        // Initialize first window
        for (int i = 0; i < s1.length(); i++) {
            windowCount[s2.charAt(i) - 'a']++;
        }

        if (Arrays.equals(s1Count, windowCount)) return true;

        // Slide the window
        for (int i = s1.length(); i < s2.length(); i++) {
            windowCount[s2.charAt(i) - 'a']++;                    // Add right
            windowCount[s2.charAt(i - s1.length()) - 'a']--;      // Remove left

            if (Arrays.equals(s1Count, windowCount)) return true;
        }

        return false;
    }


    // ============================================================
    // QUICK REFERENCE: When to use which template
    // ============================================================
    /*
     * ┌─────────────────────────────────────────────────────────┐
     * │  "Fixed window of size k"     → Template 1 (Fixed)      │
     * │  "Longest/shortest with X"    → Template 2 (Variable)   │
     * │  "Contains all chars of T"    → Template 3 (HashMap)    │
     * │  "At most K distinct"         → Template 4 (K Distinct) │
     * │  "Permutation / anagram"      → Template 5 (Array)      │
     * │  "Maximum of each window"     → Use Deque (Monotonic)   │
     * └─────────────────────────────────────────────────────────┘
     *
     * KEY INSIGHT: The left pointer only moves forward = O(n) not O(n²)
     */
}
