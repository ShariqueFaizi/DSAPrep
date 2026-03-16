
/**
 * Week 1 — Arrays, Strings, Hash Maps
 * Top MAANG Interview Problems with Optimal Solutions
 */
import java.util.*;

public class WeekOneSolutions {

    // ─────────────────────────────────────────
    // #1: Two Sum (LC 1) — Easy | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(n)
    // Pattern: HashMap for complement lookup
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }

    // ─────────────────────────────────────────
    // #2: Best Time to Buy and Sell Stock (LC 121) — Easy | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(1)
    // Pattern: Track running minimum, compare profit at each step
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }

    // ─────────────────────────────────────────
    // #3: Contains Duplicate (LC 217) — Easy | Amazon, Google
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(n)
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num))
                return true; // add returns false if already exists
        }
        return false;
    }

    // ─────────────────────────────────────────
    // #4: Product of Array Except Self (LC 238) — Medium | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(1) (output array doesn't count)
    // Key insight: Left pass for prefix products, right pass for suffix products
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Left pass: result[i] = product of all elements to the left
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Right pass: multiply by product of all elements to the right
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return result;
    }

    // ─────────────────────────────────────────
    // #5: Maximum Subarray — Kadane's (LC 53) — Medium | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(1)
    // KEY INSIGHT: At each index, either extend previous subarray or start new
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    // ─────────────────────────────────────────
    // #6: Valid Anagram (LC 242) — Easy | Meta, Amazon
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(1) — fixed 26 chars
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int c : count)
            if (c != 0)
                return false;
        return true;
    }

    // ─────────────────────────────────────────
    // #7: Group Anagrams (LC 49) — Medium | Meta, Google
    // ─────────────────────────────────────────
    // Time: O(n * k log k) or O(n * k) | Space: O(n * k)
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    // ─────────────────────────────────────────
    // #8: Top K Frequent Elements (LC 347) — Medium | Amazon, Google
    // ─────────────────────────────────────────
    // Time: O(n) using bucket sort | Space: O(n)
    // Bucket Sort approach (optimal, no heap needed)
    @SuppressWarnings("unchecked")
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int n : nums)
            freq.merge(n, 1, Integer::sum);

        List<Integer>[] buckets = new List[nums.length + 1];
        for (var entry : freq.entrySet()) {
            int f = entry.getValue();
            if (buckets[f] == null)
                buckets[f] = new ArrayList<>();
            buckets[f].add(entry.getKey());
        }

        int[] result = new int[k];
        int idx = 0;
        for (int i = buckets.length - 1; i >= 0 && idx < k; i--) {
            if (buckets[i] != null) {
                for (int num : buckets[i]) {
                    result[idx++] = num;
                    if (idx == k)
                        break;
                }
            }
        }
        return result;
    }

    // ─────────────────────────────────────────
    // #9: Longest Consecutive Sequence (LC 128) — Medium | Google, Amazon
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(n)
    // Key: Only start counting from sequence START (n-1 not in set)
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums)
            set.add(n);

        int longest = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) { // Only if it's the START of a sequence
                int length = 1;
                while (set.contains(num + length))
                    length++;
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }

    // ─────────────────────────────────────────
    // #10: 3Sum (LC 15) — Medium | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n²) | Space: O(1)
    // Pattern: Sort + fix one + two pointers (see patterns/02_two_pointers.java)
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1])
                continue;
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1])
                        left++;
                    while (left < right && nums[right] == nums[right - 1])
                        right--;
                    left++;
                    right--;
                } else if (sum < 0)
                    left++;
                else
                    right--;
            }
        }
        return result;
    }

    // ─────────────────────────────────────────
    // #11: Trapping Rain Water (LC 42) — Hard | All MAANG
    // ─────────────────────────────────────────
    // Time: O(n) | Space: O(1) — Two pointer approach
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0, water = 0;
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
}
