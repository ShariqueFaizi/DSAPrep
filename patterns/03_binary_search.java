/**
 * ╔══════════════════════════════════════════════════════╗
 * ║ PATTERN: BINARY SEARCH ║
 * ╠══════════════════════════════════════════════════════╣
 * ║ Use When: ║
 * ║ - Sorted array or search space ║
 * ║ - "Find min/max that satisfies condition" ║
 * ║ - Rotated sorted arrays ║
 * ║ - Answer monotonicity (if X works, X+1 also works) ║
 * ║ ║
 * ║ Companies: Google ⭐⭐⭐ | Meta ⭐⭐ | Amazon ⭐⭐⭐ ║
 * ╚══════════════════════════════════════════════════════╝
 */

public class BinarySearchPatterns {

    // ============================================================
    // TEMPLATE 1: Standard Binary Search
    // ============================================================
    // Time: O(log n) | Space: O(1)

    public static int binarySearch(int[] nums, int target) {
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Avoid integer overflow!

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // Not found
    }

    // ============================================================
    // TEMPLATE 2: Find First/Last Position (Lower/Upper Bound)
    // ============================================================
    // Problem: First and Last Position of Element in Sorted Array (LC 34)
    // Time: O(log n) | Space: O(1)

    /**
     * Find the FIRST (leftmost) occurrence of target.
     * Key: when nums[mid] == target, keep going LEFT (right = mid - 1).
     */
    public static int findFirst(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result = mid;
                right = mid - 1; // Keep searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    /**
     * Find the LAST (rightmost) occurrence of target.
     * Key: when nums[mid] == target, keep going RIGHT (left = mid + 1).
     */
    public static int findLast(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result = mid;
                left = mid + 1; // Keep searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // ============================================================
    // TEMPLATE 3: Search in Rotated Sorted Array (LC 33)
    // ============================================================
    // Time: O(log n) | Space: O(1) — Google/Amazon favorite

    /**
     * Key insight: One half is ALWAYS sorted.
     * Determine which half is sorted, then check if target is in that half.
     */
    public static int searchRotated(int[] nums, int target) {
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target)
                return mid;

            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1; // Target in left sorted half
                } else {
                    left = mid + 1; // Target in right half
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1; // Target in right sorted half
                } else {
                    right = mid - 1; // Target in left half
                }
            }
        }

        return -1;
    }

    // ============================================================
    // TEMPLATE 4: Find Minimum in Rotated Sorted Array (LC 153)
    // ============================================================
    // Time: O(log n) | Space: O(1)

    public static int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                left = mid + 1; // Min is in right half
            } else {
                right = mid; // Mid could be min, don't exclude
            }
        }

        return nums[left];
    }

    // ============================================================
    // TEMPLATE 5: Binary Search on Answer (Search Space Reduction)
    // ============================================================
    // Problem: Koko Eating Bananas (LC 875) — Google favorite
    // Time: O(n * log(max)) | Space: O(1)

    /**
     * Binary search on the ANSWER, not on array index.
     * Pattern: "Find minimum speed/capacity/value such that condition is met."
     * Search space: [1, max(piles)]
     */
    public static int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = 0;
        for (int p : piles)
            right = Math.max(right, p);

        int result = right;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (canFinish(piles, mid, h)) {
                result = mid;
                right = mid - 1; // Try smaller speed
            } else {
                left = mid + 1; // Need more speed
            }
        }

        return result;
    }

    private static boolean canFinish(int[] piles, int speed, int h) {
        long hours = 0;
        for (int pile : piles) {
            hours += (pile + speed - 1) / speed; // Ceiling division
        }
        return hours <= h;
    }

    // ============================================================
    // TEMPLATE 6: Search a 2D Matrix (LC 74)
    // ============================================================
    // Time: O(log(m*n)) | Space: O(1)

    /**
     * Treat 2D matrix as a flat sorted array.
     * Convert mid index to row/col: row = mid / cols, col = mid % cols.
     */
    public static boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length, cols = matrix[0].length;
        int left = 0, right = rows * cols - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midVal = matrix[mid / cols][mid % cols];

            if (midVal == target)
                return true;
            else if (midVal < target)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return false;
    }

    // ============================================================
    // QUICK REFERENCE
    // ============================================================
    /*
     * ┌─────────────────────────────────────────────────────────┐
     * │ Sorted array lookup → Template 1 (Standard) │
     * │ First/last occurrence → Template 2 (Bound) │
     * │ Rotated sorted array → Template 3 (Rotated) │
     * │ Find min in rotated → Template 4 (Min) │
     * │ "Min X such that ..." → Template 5 (Answer BS) │
     * │ 2D sorted matrix → Template 6 (2D) │
     * └─────────────────────────────────────────────────────────┘
     *
     * ⚠ ALWAYS use: mid = left + (right - left) / 2 to avoid overflow
     * ⚠ Watch for: left <= right vs left < right (off-by-one)
     */
}
