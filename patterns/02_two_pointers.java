/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           PATTERN: TWO POINTERS                      ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Use When:                                           ║
 * ║  - Array is sorted (or can be sorted)                ║
 * ║  - Finding pairs/triplets with a target sum          ║
 * ║  - Comparing elements from both ends                 ║
 * ║  - In-place array manipulation                       ║
 * ║                                                      ║
 * ║  Companies: All MAANG ⭐⭐⭐                          ║
 * ╚══════════════════════════════════════════════════════╝
 */

import java.util.*;

public class TwoPointerPatterns {

    // ============================================================
    // TEMPLATE 1: Opposite Direction (Converging Pointers)
    // ============================================================
    // Problem: Two Sum II - Input Array Is Sorted (LC 167)
    // Time: O(n) | Space: O(1)

    /**
     * Two pointers from opposite ends, converging toward the middle.
     * Works when array is SORTED.
     */
    public static int[] twoSumSorted(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;

        while (left < right) {
            int currentSum = numbers[left] + numbers[right];

            if (currentSum == target) {
                return new int[]{left + 1, right + 1}; // 1-indexed
            } else if (currentSum < target) {
                left++;    // Need larger sum
            } else {
                right--;   // Need smaller sum
            }
        }

        return new int[]{};
    }


    // ============================================================
    // TEMPLATE 2: Three Pointers (3Sum)
    // ============================================================
    // Problem: 3Sum (LC 15) — ALL MAANG favorite
    // Time: O(n²) | Space: O(1) excluding output

    /**
     * Sort + fix one element + two-pointer on the rest.
     * Handle duplicates carefully!
     */
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for the first element
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.length - 1;

            while (left < right) {
                int total = nums[i] + nums[left] + nums[right];

                if (total == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (total < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }


    // ============================================================
    // TEMPLATE 3: Same Direction (Fast & Slow / Read & Write)
    // ============================================================
    // Problem: Remove Duplicates from Sorted Array (LC 26)
    // Time: O(n) | Space: O(1)

    /**
     * Two pointers moving in same direction.
     * 'write' pointer tracks where to write next unique element.
     * 'read' pointer scans ahead.
     */
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int write = 1; // Write pointer (slow)

        for (int read = 1; read < nums.length; read++) { // Read pointer (fast)
            if (nums[read] != nums[read - 1]) {
                nums[write] = nums[read];
                write++;
            }
        }

        return write;
    }


    // ============================================================
    // TEMPLATE 4: Fast & Slow (Floyd's Cycle Detection)
    // ============================================================
    // Problem: Linked List Cycle (LC 141) & Find Cycle Start (LC 142)
    // Time: O(n) | Space: O(1)

    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    /**
     * Floyd's Tortoise & Hare algorithm.
     * Slow moves 1 step, fast moves 2 steps.
     * If they meet → cycle exists.
     */
    public static boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) return true;
        }

        return false;
    }

    /**
     * Extension: Find WHERE the cycle starts.
     * After detection, reset one pointer to head.
     * Both move at speed 1 → they meet at cycle start.
     */
    public static ListNode findCycleStart(ListNode head) {
        ListNode slow = head, fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                // Reset slow to head
                slow = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow; // Cycle start
            }
        }

        return null;
    }


    // ============================================================
    // TEMPLATE 5: Container With Most Water (LC 11)
    // ============================================================
    // Time: O(n) | Space: O(1)

    /**
     * Greedy two-pointer approach.
     * Move the shorter line inward (can only improve by trying taller lines).
     */
    public static int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxWater = 0;

        while (left < right) {
            int width = right - left;
            int h = Math.min(height[left], height[right]);
            maxWater = Math.max(maxWater, width * h);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }


    // ============================================================
    // TEMPLATE 6: Trapping Rain Water (LC 42) — THE classic Hard
    // ============================================================
    // Time: O(n) | Space: O(1)

    /**
     * Track leftMax and rightMax with two pointers.
     * Process the side with the smaller max (guaranteed water level).
     */
    public static int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
                right--;
            }
        }

        return water;
    }


    // ============================================================
    // QUICK REFERENCE
    // ============================================================
    /*
     * ┌─────────────────────────────────────────────────────────┐
     * │  Sorted array + pair target   → Template 1 (Converge)   │
     * │  Triplet / k-sum              → Template 2 (Fix + 2ptr) │
     * │  In-place removal / partition → Template 3 (Read/Write) │
     * │  Cycle detection              → Template 4 (Fast/Slow)  │
     * │  Maximize area / distance     → Template 5 (Greedy)     │
     * │  Trapping rain water          → Template 6 (Two Max)    │
     * │  Palindrome check             → Converge from both ends │
     * │  Merge sorted arrays          → Two pointers on each    │
     * └─────────────────────────────────────────────────────────┘
     */
}
