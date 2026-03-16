
/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           PATTERN: BINARY TREES (DFS & BFS)          ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Use When:                                           ║
 * ║  - Hierarchical data traversal                       ║
 * ║  - Path sum / depth / diameter problems              ║
 * ║  - BST validation, search, insert                    ║
 * ║  - Level-order processing                            ║
 * ║                                                      ║
 * ║  Companies: ALL MAANG ⭐⭐⭐ (Most tested topic!)    ║
 * ╚══════════════════════════════════════════════════════╝
 */

import java.util.*;

public class TreePatterns {

    static class TreeNode {
        int val;
        TreeNode left, right;

        TreeNode(int val) {
            this.val = val;
        }
    }

    // ============================================================
    // TEMPLATE 1: DFS — Recursive (Most Common)
    // ============================================================
    // Problem: Maximum Depth of Binary Tree (LC 104)
    // Time: O(n) | Space: O(h) where h = height

    /**
     * Classic DFS: process node, recurse left/right, combine results.
     * This template handles 70% of tree problems.
     */
    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }

    // ============================================================
    // TEMPLATE 2: DFS — Path Tracking with Global Variable
    // ============================================================
    // Problem: Diameter of Binary Tree (LC 543) — Meta/Google favorite
    // Time: O(n) | Space: O(h)

    /**
     * When the answer isn't just "return from recursion" but needs
     * to track a global state across recursive calls.
     */
    static int diameter;

    public static int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        height(root);
        return diameter;
    }

    private static int height(TreeNode node) {
        if (node == null)
            return 0;
        int leftH = height(node.left);
        int rightH = height(node.right);
        diameter = Math.max(diameter, leftH + rightH); // Update global
        return 1 + Math.max(leftH, rightH);
    }

    // ============================================================
    // TEMPLATE 3: DFS — Binary Tree Maximum Path Sum (LC 124)
    // ============================================================
    // Time: O(n) | Space: O(h) — Meta/Google HARD favorite

    static int maxPathSum;

    public static int maxPathSumSolution(TreeNode root) {
        maxPathSum = Integer.MIN_VALUE;
        maxGain(root);
        return maxPathSum;
    }

    private static int maxGain(TreeNode node) {
        if (node == null)
            return 0;
        int leftGain = Math.max(maxGain(node.left), 0); // Ignore negative paths
        int rightGain = Math.max(maxGain(node.right), 0);
        maxPathSum = Math.max(maxPathSum, node.val + leftGain + rightGain);
        return node.val + Math.max(leftGain, rightGain); // Return single path
    }

    // ============================================================
    // TEMPLATE 4: BFS — Level Order Traversal
    // ============================================================
    // Problem: Binary Tree Level Order Traversal (LC 102)
    // Time: O(n) | Space: O(w) where w = max width

    /**
     * BFS using a Queue. Process level by level.
     * Key: record queue size at start of each level.
     */
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size(); // ← KEY: snapshot the size
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);

                if (node.left != null)
                    queue.offer(node.left);
                if (node.right != null)
                    queue.offer(node.right);
            }

            result.add(level);
        }

        return result;
    }

    // ============================================================
    // TEMPLATE 5: BST — Validate (LC 98)
    // ============================================================
    // Time: O(n) | Space: O(h)

    /**
     * Pass valid range [min, max] down the recursion.
     * Left child must be < parent, right must be > parent.
     */
    public static boolean isValidBST(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private static boolean validate(TreeNode node, long min, long max) {
        if (node == null)
            return true;
        if (node.val <= min || node.val >= max)
            return false;
        return validate(node.left, min, node.val) &&
                validate(node.right, node.val, max);
    }

    // ============================================================
    // TEMPLATE 6: BST — Kth Smallest (Inorder Traversal) (LC 230)
    // ============================================================
    // Time: O(h + k) | Space: O(h)

    /**
     * Inorder traversal of BST gives sorted order.
     * Stop after k-th element for efficiency.
     */
    static int kthResult;
    static int count;

    public static int kthSmallest(TreeNode root, int k) {
        count = 0;
        kthResult = 0;
        inorder(root, k);
        return kthResult;
    }

    private static void inorder(TreeNode node, int k) {
        if (node == null)
            return;
        inorder(node.left, k);
        count++;
        if (count == k) {
            kthResult = node.val;
            return;
        }
        inorder(node.right, k);
    }

    // ============================================================
    // TEMPLATE 7: Lowest Common Ancestor (LC 236)
    // ============================================================
    // Time: O(n) | Space: O(h) — ALL MAANG favorite

    /**
     * If current node is p or q → return it.
     * If p and q are on different sides → current node is LCA.
     * Otherwise, return whichever side found a match.
     */
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q)
            return root;

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);

        if (left != null && right != null)
            return root; // Found on both sides
        return left != null ? left : right; // Found on one side
    }

    // ============================================================
    // TEMPLATE 8: Serialize / Deserialize Binary Tree (LC 297)
    // ============================================================
    // Time: O(n) | Space: O(n)

    public static String serialize(TreeNode root) {
        if (root == null)
            return "null";
        return root.val + "," + serialize(root.left) + "," + serialize(root.right);
    }

    static int deserializeIndex;

    public static TreeNode deserialize(String data) {
        deserializeIndex = 0;
        String[] nodes = data.split(",");
        return deserializeHelper(nodes);
    }

    private static TreeNode deserializeHelper(String[] nodes) {
        if (deserializeIndex >= nodes.length || nodes[deserializeIndex].equals("null")) {
            deserializeIndex++;
            return null;
        }
        TreeNode node = new TreeNode(Integer.parseInt(nodes[deserializeIndex]));
        deserializeIndex++;
        node.left = deserializeHelper(nodes);
        node.right = deserializeHelper(nodes);
        return node;
    }

    // ============================================================
    // QUICK REFERENCE
    // ============================================================
    /*
     * ┌─────────────────────────────────────────────────────────┐
     * │ Depth / height / count → Template 1 (DFS basic) │
     * │ Diameter / path length → Template 2 (Global var) │
     * │ Max path sum → Template 3 (Gain calc) │
     * │ Level-by-level processing → Template 4 (BFS) │
     * │ BST validation → Template 5 (Range) │
     * │ Kth element in BST → Template 6 (Inorder) │
     * │ Lowest Common Ancestor → Template 7 (LCA) │
     * │ Serialize / Deserialize → Template 8 (Preorder) │
     * └─────────────────────────────────────────────────────────┘
     *
     * KEY INSIGHT: Most tree problems are just DFS with different
     * return values and state tracking strategies!
     */
}
