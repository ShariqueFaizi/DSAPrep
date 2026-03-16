
/**
 * ╔══════════════════════════════════════════════════════╗
 * ║            PATTERN: GRAPHS (BFS / DFS)               ║
 * ╠══════════════════════════════════════════════════════╣
 * ║  Companies: Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐ ║
 * ╚══════════════════════════════════════════════════════╝
 */
import java.util.*;

public class GraphPatterns {

    // TEMPLATE 1: DFS on Grid (Number of Islands — LC 200)
    // Time: O(m*n) | Space: O(m*n)
    public static int numIslands(char[][] grid) {
        int count = 0;
        for (int r = 0; r < grid.length; r++)
            for (int c = 0; c < grid[0].length; c++)
                if (grid[r][c] == '1') {
                    dfsGrid(grid, r, c);
                    count++;
                }
        return count;
    }

    private static void dfsGrid(char[][] grid, int r, int c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != '1')
            return;
        grid[r][c] = '0';
        dfsGrid(grid, r + 1, c);
        dfsGrid(grid, r - 1, c);
        dfsGrid(grid, r, c + 1);
        dfsGrid(grid, r, c - 1);
    }

    // TEMPLATE 2: BFS Multi-source (Rotting Oranges — LC 994)
    // Time: O(m*n) | Space: O(m*n)
    public static int orangesRotting(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> queue = new LinkedList<>();
        int fresh = 0;
        int[][] dirs = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
        for (int r = 0; r < rows; r++)
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 2)
                    queue.offer(new int[] { r, c });
                else if (grid[r][c] == 1)
                    fresh++;
            }
        if (fresh == 0)
            return 0;
        int minutes = 0;
        while (!queue.isEmpty() && fresh > 0) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                for (int[] d : dirs) {
                    int nr = cell[0] + d[0], nc = cell[1] + d[1];
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        queue.offer(new int[] { nr, nc });
                    }
                }
            }
            minutes++;
        }
        return fresh == 0 ? minutes : -1;
    }

    // TEMPLATE 3: Topological Sort — Kahn's (Course Schedule — LC 207/210)
    // Time: O(V + E) | Space: O(V + E)
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        for (int i = 0; i < numCourses; i++)
            adj.add(new ArrayList<>());
        for (int[] p : prerequisites) {
            adj.get(p[1]).add(p[0]);
            inDegree[p[0]]++;
        }
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++)
            if (inDegree[i] == 0)
                queue.offer(i);
        int[] order = new int[numCourses];
        int idx = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            order[idx++] = course;
            for (int next : adj.get(course))
                if (--inDegree[next] == 0)
                    queue.offer(next);
        }
        return idx == numCourses ? order : new int[0];
    }

    // TEMPLATE 4: Dijkstra's (Network Delay — LC 743)
    // Time: O((V+E) log V) | Space: O(V+E)
    public static int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] t : times)
            graph.computeIfAbsent(t[0], x -> new ArrayList<>()).add(new int[] { t[1], t[2] });
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[] { 0, k });
        Set<Integer> visited = new HashSet<>();
        int maxTime = 0;
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            if (visited.contains(curr[1]))
                continue;
            visited.add(curr[1]);
            maxTime = Math.max(maxTime, curr[0]);
            if (graph.containsKey(curr[1]))
                for (int[] e : graph.get(curr[1]))
                    if (!visited.contains(e[0]))
                        pq.offer(new int[] { curr[0] + e[1], e[0] });
        }
        return visited.size() == n ? maxTime : -1;
    }

    // TEMPLATE 5: Union-Find (Disjoint Set)
    // Time: O(α(n)) ≈ O(1) per op | Space: O(n)
    static class UnionFind {
        int[] parent, rank;
        int components;

        UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            components = n;
            for (int i = 0; i < n; i++)
                parent[i] = i;
        }

        int find(int x) {
            if (parent[x] != x)
                parent[x] = find(parent[x]);
            return parent[x];
        }

        boolean union(int x, int y) {
            int px = find(x), py = find(y);
            if (px == py)
                return false;
            if (rank[px] < rank[py]) {
                int t = px;
                px = py;
                py = t;
            }
            parent[py] = px;
            if (rank[px] == rank[py])
                rank[px]++;
            components--;
            return true;
        }
    }

    /*
     * QUICK REFERENCE:
     * Grid regions → Template 1 (Grid DFS)
     * Shortest/multi-source → Template 2 (Grid BFS)
     * Ordering/cycle → Template 3 (Topo Sort)
     * Weighted shortest → Template 4 (Dijkstra)
     * Components/union → Template 5 (Union-Find)
     */
}
