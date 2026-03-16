
/**
 * ╔══════════════════════════════════════════════════════╗
 * ║        PATTERN: DYNAMIC PROGRAMMING                  ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Companies: Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐ ║
 * ╚══════════════════════════════════════════════════════╝
 *
 *  DP Framework (ask yourself these 5 questions):
 *  1. What is the objective function? (what are we optimizing?)
 *  2. What are the states? (what info do we need at each step?)
 *  3. What is the recurrence relation? (how do states connect?)
 *  4. What are the base cases?
 *  5. What is the order of computation? (bottom-up direction)
 */
import java.util.*;

public class DPPatterns {

    // ============================================================
    // TEMPLATE 1: Linear DP (Climbing Stairs — LC 70)
    // ============================================================
    // State: dp[i] = number of ways to reach step i
    // Recurrence: dp[i] = dp[i-1] + dp[i-2]

    public static int climbStairs(int n) {
        if (n <= 2)
            return n;
        int prev2 = 1, prev1 = 2; // Space-optimized from dp array
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    // ============================================================
    // TEMPLATE 2: Decision DP — Take or Skip (House Robber — LC 198)
    // ============================================================
    // State: dp[i] = max money robbing houses 0..i
    // Recurrence: dp[i] = max(dp[i-1], dp[i-2] + nums[i])

    public static int rob(int[] nums) {
        if (nums.length == 1)
            return nums[0];
        int prev2 = 0, prev1 = 0;
        for (int num : nums) {
            int curr = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    // ============================================================
    // TEMPLATE 3: Unbounded Knapsack (Coin Change — LC 322)
    // ============================================================
    // State: dp[amount] = min coins to make this amount
    // Recurrence: dp[a] = min(dp[a], dp[a - coin] + 1) for each coin

    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // "infinity"
        dp[0] = 0;

        for (int a = 1; a <= amount; a++) {
            for (int coin : coins) {
                if (coin <= a) {
                    dp[a] = Math.min(dp[a], dp[a - coin] + 1);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }

    // ============================================================
    // TEMPLATE 4: 0/1 Knapsack (Partition Equal Subset Sum — LC 416)
    // ============================================================
    // State: dp[s] = can we form sum s using some subset?
    // Traverse amounts in REVERSE to avoid reusing items

    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int n : nums)
            total += n;
        if (total % 2 != 0)
            return false;
        int target = total / 2;

        boolean[] dp = new boolean[target + 1];
        dp[0] = true;

        for (int num : nums) {
            for (int s = target; s >= num; s--) { // Reverse!
                dp[s] = dp[s] || dp[s - num];
            }
        }

        return dp[target];
    }

    // ============================================================
    // TEMPLATE 5: String DP — LCS (LC 1143)
    // ============================================================
    // State: dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]
    // Recurrence: match → 1 + dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1])

    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    // ============================================================
    // TEMPLATE 6: Subsequence DP — LIS (LC 300)
    // ============================================================
    // O(n log n) approach using patience sorting

    public static int lengthOfLIS(int[] nums) {
        List<Integer> tails = new ArrayList<>(); // tails[i] = smallest tail of LIS of length i+1

        for (int num : nums) {
            int pos = Collections.binarySearch(tails, num);
            if (pos < 0)
                pos = -(pos + 1);

            if (pos == tails.size())
                tails.add(num);
            else
                tails.set(pos, num);
        }

        return tails.size();
    }

    // ============================================================
    // TEMPLATE 7: Grid DP — Unique Paths (LC 62)
    // ============================================================
    // State: dp[r][c] = number of paths to reach (r, c)

    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        for (int r = 0; r < m; r++)
            dp[r][0] = 1;
        for (int c = 0; c < n; c++)
            dp[0][c] = 1;

        for (int r = 1; r < m; r++)
            for (int c = 1; c < n; c++)
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1];

        return dp[m - 1][n - 1];
    }

    // ============================================================
    // TEMPLATE 8: Word Break (LC 139) — BFS/DP hybrid
    // ============================================================

    public static boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length()];
    }

    /*
     * DP CHEAT SHEET:
     * ┌────────────────────────────────────────────────────┐
     * │ Fibonacci-like → Template 1 (Linear) │
     * │ Take/skip decisions → Template 2 (Decision) │
     * │ Unlimited choices → Template 3 (Unbounded) │
     * │ Subset / partition → Template 4 (0/1 Knap) │
     * │ Two string comparison → Template 5 (LCS/Edit) │
     * │ Longest subsequence → Template 6 (LIS) │
     * │ Grid path counting → Template 7 (Grid) │
     * │ String segmentation → Template 8 (Word Break) │
     * └────────────────────────────────────────────────────┘
     * TIP: Always start with brute force recursion, add memo,
     * then convert to bottom-up if interviewer asks.
     */
}
