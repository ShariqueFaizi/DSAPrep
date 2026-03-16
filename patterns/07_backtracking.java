
/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           PATTERN: BACKTRACKING                      ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Companies: Google ⭐⭐⭐ | Meta ⭐⭐ | Amazon ⭐⭐   ║
 * ╚══════════════════════════════════════════════════════╝
 *
 *  Backtracking Template:
 *  1. Choose   — pick an option
 *  2. Explore  — recurse with that option
 *  3. Unchoose — undo the pick (backtrack)
 */
import java.util.*;

public class BacktrackingPatterns {

    // TEMPLATE 1: Subsets (LC 78)
    // Time: O(n * 2^n) | Space: O(n)
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackSubsets(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrackSubsets(int[] nums, int start, List<Integer> current, List<List<Integer>> result) {
        result.add(new ArrayList<>(current)); // Add every combination (including empty)
        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]); // Choose
            backtrackSubsets(nums, i + 1, current, result); // Explore
            current.remove(current.size() - 1); // Unchoose
        }
    }

    // TEMPLATE 2: Permutations (LC 46)
    // Time: O(n * n!) | Space: O(n)
    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackPermute(nums, new boolean[nums.length], new ArrayList<>(), result);
        return result;
    }

    private static void backtrackPermute(int[] nums, boolean[] used, List<Integer> current,
            List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i])
                continue;
            used[i] = true;
            current.add(nums[i]);
            backtrackPermute(nums, used, current, result);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    // TEMPLATE 3: Combination Sum (LC 39) — reuse allowed
    // Time: O(2^target) | Space: O(target)
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        backtrackCombo(candidates, target, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrackCombo(int[] nums, int remaining, int start, List<Integer> current,
            List<List<Integer>> result) {
        if (remaining == 0) {
            result.add(new ArrayList<>(current));
            return;
        }
        if (remaining < 0)
            return;
        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);
            backtrackCombo(nums, remaining - nums[i], i, current, result); // i, not i+1 (reuse!)
            current.remove(current.size() - 1);
        }
    }

    // TEMPLATE 4: Word Search on Grid (LC 79)
    // Time: O(m*n * 4^L) | Space: O(L) where L = word length
    public static boolean exist(char[][] board, String word) {
        for (int r = 0; r < board.length; r++)
            for (int c = 0; c < board[0].length; c++)
                if (dfs(board, word, r, c, 0))
                    return true;
        return false;
    }

    private static boolean dfs(char[][] board, String word, int r, int c, int idx) {
        if (idx == word.length())
            return true;
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] != word.charAt(idx))
            return false;
        char temp = board[r][c];
        board[r][c] = '#'; // Mark visited
        boolean found = dfs(board, word, r + 1, c, idx + 1) || dfs(board, word, r - 1, c, idx + 1)
                || dfs(board, word, r, c + 1, idx + 1) || dfs(board, word, r, c - 1, idx + 1);
        board[r][c] = temp; // Undo
        return found;
    }

    // TEMPLATE 5: N-Queens (LC 51)
    // Time: O(N!) | Space: O(N²)
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board)
            Arrays.fill(row, '.');
        solveQueens(board, 0, result, n, new HashSet<>(), new HashSet<>(), new HashSet<>());
        return result;
    }

    private static void solveQueens(char[][] board, int row, List<List<String>> result, int n,
            Set<Integer> cols, Set<Integer> diag, Set<Integer> antiDiag) {
        if (row == n) {
            List<String> snapshot = new ArrayList<>();
            for (char[] r : board)
                snapshot.add(new String(r));
            result.add(snapshot);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols.contains(col) || diag.contains(row - col) || antiDiag.contains(row + col))
                continue;
            board[row][col] = 'Q';
            cols.add(col);
            diag.add(row - col);
            antiDiag.add(row + col);
            solveQueens(board, row + 1, result, n, cols, diag, antiDiag);
            board[row][col] = '.';
            cols.remove(col);
            diag.remove(row - col);
            antiDiag.remove(row + col);
        }
    }

    /*
     * BACKTRACKING CHEAT SHEET:
     * ─────────────────────────────────────────────────
     * Subsets: start from index, add at every node
     * Permutations: use boolean[] used array
     * Combinations: start index + remaining target
     * Grid search: mark visited, 4-directional DFS
     * Constraint: prune with sets (cols, diags...)
     *
     * KEY: "Subsets = i+1" | "Combos with reuse = i" | "Permutations = used[]"
     */
}
