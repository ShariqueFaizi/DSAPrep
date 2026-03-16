/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — Data Layer
   ═══════════════════════════════════════════════════════════ */

const TOPICS = [
  { id: 'arrays', name: 'Arrays & Strings', icon: '📦', color: '#818cf8' },
  { id: 'hashmaps', name: 'Hash Maps', icon: '🗂️', color: '#60a5fa' },
  { id: 'twopointers', name: 'Two Pointers', icon: '👆', color: '#22d3ee' },
  { id: 'slidingwindow', name: 'Sliding Window', icon: '🪟', color: '#34d399' },
  { id: 'linkedlists', name: 'Linked Lists', icon: '🔗', color: '#a78bfa' },
  { id: 'stacks', name: 'Stacks & Queues', icon: '📚', color: '#fbbf24' },
  { id: 'trees', name: 'Binary Trees', icon: '🌳', color: '#f472b6' },
  { id: 'binarysearch', name: 'Binary Search', icon: '🔍', color: '#fb923c' },
  { id: 'graphs', name: 'Graphs', icon: '🕸️', color: '#f87171' },
  { id: 'dp', name: 'Dynamic Programming', icon: '🧠', color: '#818cf8' },
  { id: 'backtracking', name: 'Backtracking', icon: '🔙', color: '#22d3ee' },
  { id: 'heaps', name: 'Heaps / Priority Queue', icon: '⛰️', color: '#34d399' },
  { id: 'tries', name: 'Tries', icon: '🌲', color: '#fbbf24' },
  { id: 'unionfind', name: 'Union Find', icon: '🤝', color: '#a78bfa' },
  { id: 'greedy', name: 'Greedy', icon: '💰', color: '#fb923c' },
  { id: 'intervals', name: 'Intervals', icon: '📏', color: '#f472b6' },
  { id: 'bitmath', name: 'Bit Manipulation & Math', icon: '🔢', color: '#60a5fa' },
];

const PROBLEMS = [
  // ═══ Arrays & Strings ═══
  { id: 1, name: 'Two Sum', topic: 'arrays', difficulty: 'Easy', lc: 1, companies: ['Google','Amazon','Meta'] },
  { id: 2, name: 'Best Time to Buy and Sell Stock', topic: 'arrays', difficulty: 'Easy', lc: 121, companies: ['Amazon','Meta','Google'] },
  { id: 3, name: 'Contains Duplicate', topic: 'arrays', difficulty: 'Easy', lc: 217, companies: ['Amazon','Apple'] },
  { id: 4, name: 'Product of Array Except Self', topic: 'arrays', difficulty: 'Medium', lc: 238, companies: ['Amazon','Meta','Google'] },
  { id: 5, name: 'Maximum Subarray (Kadane\'s)', topic: 'arrays', difficulty: 'Medium', lc: 53, companies: ['Amazon','Google','Apple'] },
  { id: 6, name: 'Valid Palindrome', topic: 'arrays', difficulty: 'Easy', lc: 125, companies: ['Meta','Google'] },
  { id: 7, name: 'Container With Most Water', topic: 'arrays', difficulty: 'Medium', lc: 11, companies: ['Amazon','Google','Meta'] },
  { id: 8, name: 'Trapping Rain Water', topic: 'arrays', difficulty: 'Hard', lc: 42, companies: ['Google','Amazon','Meta'] },
  { id: 9, name: 'Rotate Image', topic: 'arrays', difficulty: 'Medium', lc: 48, companies: ['Amazon','Google','Apple'] },
  { id: 10, name: 'Spiral Matrix', topic: 'arrays', difficulty: 'Medium', lc: 54, companies: ['Amazon','Google','Meta'] },
  { id: 11, name: 'Set Matrix Zeroes', topic: 'arrays', difficulty: 'Medium', lc: 73, companies: ['Amazon','Meta'] },

  // ═══ Hash Maps ═══
  { id: 12, name: 'Valid Anagram', topic: 'hashmaps', difficulty: 'Easy', lc: 242, companies: ['Amazon','Google'] },
  { id: 13, name: 'Group Anagrams', topic: 'hashmaps', difficulty: 'Medium', lc: 49, companies: ['Amazon','Google','Meta'] },
  { id: 14, name: 'Top K Frequent Elements', topic: 'hashmaps', difficulty: 'Medium', lc: 347, companies: ['Amazon','Google','Meta'] },
  { id: 15, name: 'Encode and Decode Strings', topic: 'hashmaps', difficulty: 'Medium', lc: 271, companies: ['Google','Meta'] },
  { id: 16, name: 'Longest Consecutive Sequence', topic: 'hashmaps', difficulty: 'Medium', lc: 128, companies: ['Google','Amazon'] },

  // ═══ Two Pointers ═══
  { id: 17, name: '3Sum', topic: 'twopointers', difficulty: 'Medium', lc: 15, companies: ['Amazon','Google','Meta'] },
  { id: 18, name: 'Valid Palindrome II', topic: 'twopointers', difficulty: 'Easy', lc: 680, companies: ['Meta','Amazon'] },

  // ═══ Sliding Window ═══
  { id: 19, name: 'Minimum Window Substring', topic: 'slidingwindow', difficulty: 'Hard', lc: 76, companies: ['Meta','Google','Amazon'] },
  { id: 20, name: 'Longest Substring Without Repeating Characters', topic: 'slidingwindow', difficulty: 'Medium', lc: 3, companies: ['Amazon','Google','Meta'] },
  { id: 21, name: 'Longest Repeating Character Replacement', topic: 'slidingwindow', difficulty: 'Medium', lc: 424, companies: ['Google'] },
  { id: 22, name: 'Permutation in String', topic: 'slidingwindow', difficulty: 'Medium', lc: 567, companies: ['Amazon','Google'] },
  { id: 23, name: 'Sliding Window Maximum', topic: 'slidingwindow', difficulty: 'Hard', lc: 239, companies: ['Amazon','Google'] },

  // ═══ Linked Lists ═══
  { id: 24, name: 'Reverse Linked List', topic: 'linkedlists', difficulty: 'Easy', lc: 206, companies: ['Amazon','Google','Meta'] },
  { id: 25, name: 'Merge Two Sorted Lists', topic: 'linkedlists', difficulty: 'Easy', lc: 21, companies: ['Amazon','Google','Apple'] },
  { id: 26, name: 'Linked List Cycle', topic: 'linkedlists', difficulty: 'Easy', lc: 141, companies: ['Amazon','Google'] },
  { id: 27, name: 'Reorder List', topic: 'linkedlists', difficulty: 'Medium', lc: 143, companies: ['Amazon','Meta'] },
  { id: 28, name: 'Remove Nth Node From End', topic: 'linkedlists', difficulty: 'Medium', lc: 19, companies: ['Amazon','Meta','Google'] },
  { id: 29, name: 'Merge K Sorted Lists', topic: 'linkedlists', difficulty: 'Hard', lc: 23, companies: ['Amazon','Google','Meta'] },
  { id: 30, name: 'LRU Cache', topic: 'linkedlists', difficulty: 'Medium', lc: 146, companies: ['Amazon','Google','Meta'] },
  { id: 31, name: 'Copy List with Random Pointer', topic: 'linkedlists', difficulty: 'Medium', lc: 138, companies: ['Amazon','Meta'] },

  // ═══ Stacks & Queues ═══
  { id: 32, name: 'Valid Parentheses', topic: 'stacks', difficulty: 'Easy', lc: 20, companies: ['Amazon','Google','Meta'] },
  { id: 33, name: 'Min Stack', topic: 'stacks', difficulty: 'Medium', lc: 155, companies: ['Amazon','Google'] },
  { id: 34, name: 'Evaluate Reverse Polish Notation', topic: 'stacks', difficulty: 'Medium', lc: 150, companies: ['Amazon','Google'] },
  { id: 35, name: 'Daily Temperatures', topic: 'stacks', difficulty: 'Medium', lc: 739, companies: ['Amazon','Google'] },
  { id: 36, name: 'Next Greater Element I', topic: 'stacks', difficulty: 'Easy', lc: 496, companies: ['Amazon'] },
  { id: 37, name: 'Largest Rectangle in Histogram', topic: 'stacks', difficulty: 'Hard', lc: 84, companies: ['Amazon','Google'] },
  { id: 38, name: 'Implement Queue using Stacks', topic: 'stacks', difficulty: 'Easy', lc: 232, companies: ['Amazon','Google'] },
  { id: 39, name: 'Car Fleet', topic: 'stacks', difficulty: 'Medium', lc: 853, companies: ['Google'] },
  { id: 40, name: 'Basic Calculator II', topic: 'stacks', difficulty: 'Medium', lc: 227, companies: ['Amazon','Google','Meta'] },

  // ═══ Binary Trees ═══
  { id: 41, name: 'Invert Binary Tree', topic: 'trees', difficulty: 'Easy', lc: 226, companies: ['Google','Amazon'] },
  { id: 42, name: 'Maximum Depth of Binary Tree', topic: 'trees', difficulty: 'Easy', lc: 104, companies: ['Amazon','Google'] },
  { id: 43, name: 'Same Tree', topic: 'trees', difficulty: 'Easy', lc: 100, companies: ['Amazon','Google'] },
  { id: 44, name: 'Subtree of Another Tree', topic: 'trees', difficulty: 'Easy', lc: 572, companies: ['Amazon','Meta'] },
  { id: 45, name: 'Diameter of Binary Tree', topic: 'trees', difficulty: 'Easy', lc: 543, companies: ['Meta','Google'] },
  { id: 46, name: 'Balanced Binary Tree', topic: 'trees', difficulty: 'Easy', lc: 110, companies: ['Amazon','Google'] },
  { id: 47, name: 'Binary Tree Level Order Traversal', topic: 'trees', difficulty: 'Medium', lc: 102, companies: ['Amazon','Google','Meta'] },
  { id: 48, name: 'Binary Tree Right Side View', topic: 'trees', difficulty: 'Medium', lc: 199, companies: ['Meta','Amazon'] },
  { id: 49, name: 'Lowest Common Ancestor of BST', topic: 'trees', difficulty: 'Medium', lc: 235, companies: ['Amazon','Meta','Google'] },
  { id: 50, name: 'Validate Binary Search Tree', topic: 'trees', difficulty: 'Medium', lc: 98, companies: ['Amazon','Google','Meta'] },
  { id: 51, name: 'Kth Smallest Element in BST', topic: 'trees', difficulty: 'Medium', lc: 230, companies: ['Amazon','Google'] },
  { id: 52, name: 'Construct Binary Tree from Preorder & Inorder', topic: 'trees', difficulty: 'Medium', lc: 105, companies: ['Amazon','Google'] },
  { id: 53, name: 'Binary Tree Maximum Path Sum', topic: 'trees', difficulty: 'Hard', lc: 124, companies: ['Google','Meta','Amazon'] },
  { id: 54, name: 'Serialize and Deserialize Binary Tree', topic: 'trees', difficulty: 'Hard', lc: 297, companies: ['Google','Meta','Amazon'] },

  // ═══ Binary Search ═══
  { id: 55, name: 'Binary Search', topic: 'binarysearch', difficulty: 'Easy', lc: 704, companies: ['Amazon','Google'] },
  { id: 56, name: 'Search a 2D Matrix', topic: 'binarysearch', difficulty: 'Medium', lc: 74, companies: ['Amazon','Google'] },
  { id: 57, name: 'Koko Eating Bananas', topic: 'binarysearch', difficulty: 'Medium', lc: 875, companies: ['Google'] },
  { id: 58, name: 'Find Minimum in Rotated Sorted Array', topic: 'binarysearch', difficulty: 'Medium', lc: 153, companies: ['Amazon','Google','Meta'] },
  { id: 59, name: 'Search in Rotated Sorted Array', topic: 'binarysearch', difficulty: 'Medium', lc: 33, companies: ['Amazon','Google','Meta'] },
  { id: 60, name: 'Median of Two Sorted Arrays', topic: 'binarysearch', difficulty: 'Hard', lc: 4, companies: ['Amazon','Google','Meta'] },

  // ═══ Graphs ═══
  { id: 61, name: 'Number of Islands', topic: 'graphs', difficulty: 'Medium', lc: 200, companies: ['Amazon','Google','Meta'] },
  { id: 62, name: 'Clone Graph', topic: 'graphs', difficulty: 'Medium', lc: 133, companies: ['Amazon','Google','Meta'] },
  { id: 63, name: 'Pacific Atlantic Water Flow', topic: 'graphs', difficulty: 'Medium', lc: 417, companies: ['Google','Amazon'] },
  { id: 64, name: 'Course Schedule', topic: 'graphs', difficulty: 'Medium', lc: 207, companies: ['Amazon','Google','Meta'] },
  { id: 65, name: 'Course Schedule II', topic: 'graphs', difficulty: 'Medium', lc: 210, companies: ['Amazon','Google'] },
  { id: 66, name: 'Graph Valid Tree', topic: 'graphs', difficulty: 'Medium', lc: 261, companies: ['Google','Amazon'] },
  { id: 67, name: 'Number of Connected Components', topic: 'graphs', difficulty: 'Medium', lc: 323, companies: ['Google','Amazon'] },
  { id: 68, name: 'Redundant Connection', topic: 'graphs', difficulty: 'Medium', lc: 684, companies: ['Google'] },
  { id: 69, name: 'Word Ladder', topic: 'graphs', difficulty: 'Hard', lc: 127, companies: ['Amazon','Google','Meta'] },
  { id: 70, name: 'Walls and Gates', topic: 'graphs', difficulty: 'Medium', lc: 286, companies: ['Google','Meta'] },
  { id: 71, name: 'Rotting Oranges', topic: 'graphs', difficulty: 'Medium', lc: 994, companies: ['Amazon','Google'] },
  { id: 72, name: 'Accounts Merge', topic: 'graphs', difficulty: 'Medium', lc: 721, companies: ['Meta','Google'] },
  { id: 73, name: 'Alien Dictionary', topic: 'graphs', difficulty: 'Hard', lc: 269, companies: ['Google','Meta','Amazon'] },
  { id: 74, name: 'Shortest Path in Binary Matrix', topic: 'graphs', difficulty: 'Medium', lc: 1091, companies: ['Amazon','Meta'] },
  { id: 75, name: 'Network Delay Time', topic: 'graphs', difficulty: 'Medium', lc: 743, companies: ['Amazon','Google'] },
  { id: 76, name: 'Swim in Rising Water', topic: 'graphs', difficulty: 'Hard', lc: 778, companies: ['Google'] },
  { id: 77, name: 'Cheapest Flights Within K Stops', topic: 'graphs', difficulty: 'Medium', lc: 787, companies: ['Amazon','Google'] },
  { id: 78, name: 'Min Cost to Connect All Points', topic: 'graphs', difficulty: 'Medium', lc: 1584, companies: ['Amazon'] },

  // ═══ Dynamic Programming ═══
  { id: 79, name: 'Climbing Stairs', topic: 'dp', difficulty: 'Easy', lc: 70, companies: ['Amazon','Google','Apple'] },
  { id: 80, name: 'House Robber', topic: 'dp', difficulty: 'Medium', lc: 198, companies: ['Amazon','Google'] },
  { id: 81, name: 'House Robber II', topic: 'dp', difficulty: 'Medium', lc: 213, companies: ['Amazon','Google'] },
  { id: 82, name: 'Longest Palindromic Substring', topic: 'dp', difficulty: 'Medium', lc: 5, companies: ['Amazon','Google','Meta'] },
  { id: 83, name: 'Palindromic Substrings', topic: 'dp', difficulty: 'Medium', lc: 647, companies: ['Meta','Google'] },
  { id: 84, name: 'Decode Ways', topic: 'dp', difficulty: 'Medium', lc: 91, companies: ['Amazon','Google','Meta'] },
  { id: 85, name: 'Coin Change', topic: 'dp', difficulty: 'Medium', lc: 322, companies: ['Amazon','Google','Meta'] },
  { id: 86, name: 'Maximum Product Subarray', topic: 'dp', difficulty: 'Medium', lc: 152, companies: ['Amazon','Google'] },
  { id: 87, name: 'Word Break', topic: 'dp', difficulty: 'Medium', lc: 139, companies: ['Amazon','Google','Meta'] },
  { id: 88, name: 'Longest Increasing Subsequence', topic: 'dp', difficulty: 'Medium', lc: 300, companies: ['Amazon','Google'] },
  { id: 89, name: 'Partition Equal Subset Sum', topic: 'dp', difficulty: 'Medium', lc: 416, companies: ['Amazon'] },
  { id: 90, name: 'Unique Paths', topic: 'dp', difficulty: 'Medium', lc: 62, companies: ['Amazon','Google'] },
  { id: 91, name: 'Longest Common Subsequence', topic: 'dp', difficulty: 'Medium', lc: 1143, companies: ['Amazon','Google'] },
  { id: 92, name: 'Best Time to Buy/Sell Stock w/ Cooldown', topic: 'dp', difficulty: 'Medium', lc: 309, companies: ['Amazon','Google'] },
  { id: 93, name: 'Target Sum', topic: 'dp', difficulty: 'Medium', lc: 494, companies: ['Amazon','Meta'] },
  { id: 94, name: 'Interleaving String', topic: 'dp', difficulty: 'Medium', lc: 97, companies: ['Google'] },
  { id: 95, name: 'Edit Distance', topic: 'dp', difficulty: 'Medium', lc: 72, companies: ['Amazon','Google'] },
  { id: 96, name: 'Distinct Subsequences', topic: 'dp', difficulty: 'Hard', lc: 115, companies: ['Google'] },
  { id: 97, name: 'Burst Balloons', topic: 'dp', difficulty: 'Hard', lc: 312, companies: ['Google'] },
  { id: 98, name: 'Regular Expression Matching', topic: 'dp', difficulty: 'Hard', lc: 10, companies: ['Google','Meta','Amazon'] },

  // ═══ Backtracking ═══
  { id: 99, name: 'Subsets', topic: 'backtracking', difficulty: 'Medium', lc: 78, companies: ['Amazon','Google','Meta'] },
  { id: 100, name: 'Subsets II', topic: 'backtracking', difficulty: 'Medium', lc: 90, companies: ['Amazon'] },
  { id: 101, name: 'Combination Sum', topic: 'backtracking', difficulty: 'Medium', lc: 39, companies: ['Amazon','Google'] },
  { id: 102, name: 'Combination Sum II', topic: 'backtracking', difficulty: 'Medium', lc: 40, companies: ['Amazon'] },
  { id: 103, name: 'Permutations', topic: 'backtracking', difficulty: 'Medium', lc: 46, companies: ['Amazon','Google','Meta'] },
  { id: 104, name: 'Permutations II', topic: 'backtracking', difficulty: 'Medium', lc: 47, companies: ['Amazon'] },
  { id: 105, name: 'Word Search', topic: 'backtracking', difficulty: 'Medium', lc: 79, companies: ['Amazon','Google','Meta'] },
  { id: 106, name: 'Palindrome Partitioning', topic: 'backtracking', difficulty: 'Medium', lc: 131, companies: ['Amazon','Google'] },
  { id: 107, name: 'Letter Combinations of a Phone Number', topic: 'backtracking', difficulty: 'Medium', lc: 17, companies: ['Amazon','Google','Meta'] },
  { id: 108, name: 'N-Queens', topic: 'backtracking', difficulty: 'Hard', lc: 51, companies: ['Google','Amazon'] },
  { id: 109, name: 'Sudoku Solver', topic: 'backtracking', difficulty: 'Hard', lc: 37, companies: ['Google','Amazon'] },

  // ═══ Heaps ═══
  { id: 110, name: 'Find Median from Data Stream', topic: 'heaps', difficulty: 'Hard', lc: 295, companies: ['Amazon','Google','Meta'] },
  { id: 111, name: 'Kth Largest Element in a Stream', topic: 'heaps', difficulty: 'Easy', lc: 703, companies: ['Amazon'] },
  { id: 112, name: 'Task Scheduler', topic: 'heaps', difficulty: 'Medium', lc: 621, companies: ['Amazon','Meta','Google'] },
  { id: 113, name: 'Design Twitter', topic: 'heaps', difficulty: 'Medium', lc: 355, companies: ['Amazon'] },
  { id: 114, name: 'K Closest Points to Origin', topic: 'heaps', difficulty: 'Medium', lc: 973, companies: ['Amazon','Meta','Google'] },
  { id: 115, name: 'Reorganize String', topic: 'heaps', difficulty: 'Medium', lc: 767, companies: ['Amazon','Google'] },

  // ═══ Tries ═══
  { id: 116, name: 'Implement Trie', topic: 'tries', difficulty: 'Medium', lc: 208, companies: ['Amazon','Google','Meta'] },
  { id: 117, name: 'Design Add and Search Words', topic: 'tries', difficulty: 'Medium', lc: 211, companies: ['Amazon','Meta'] },
  { id: 118, name: 'Word Search II', topic: 'tries', difficulty: 'Hard', lc: 212, companies: ['Amazon','Google','Meta'] },

  // ═══ Union Find ═══
  { id: 119, name: 'Number of Provinces', topic: 'unionfind', difficulty: 'Medium', lc: 547, companies: ['Amazon','Google'] },

  // ═══ Greedy ═══
  { id: 120, name: 'Jump Game', topic: 'greedy', difficulty: 'Medium', lc: 55, companies: ['Amazon','Google'] },
  { id: 121, name: 'Jump Game II', topic: 'greedy', difficulty: 'Medium', lc: 45, companies: ['Amazon','Google'] },
  { id: 122, name: 'Gas Station', topic: 'greedy', difficulty: 'Medium', lc: 134, companies: ['Amazon','Google'] },
  { id: 123, name: 'Hand of Straights', topic: 'greedy', difficulty: 'Medium', lc: 846, companies: ['Google'] },
  { id: 124, name: 'Maximum Points on a Line', topic: 'greedy', difficulty: 'Hard', lc: 149, companies: ['Google','Amazon'] },

  // ═══ Intervals ═══
  { id: 125, name: 'Merge Intervals', topic: 'intervals', difficulty: 'Medium', lc: 56, companies: ['Amazon','Google','Meta'] },
  { id: 126, name: 'Insert Interval', topic: 'intervals', difficulty: 'Medium', lc: 57, companies: ['Google','Amazon'] },
  { id: 127, name: 'Non-overlapping Intervals', topic: 'intervals', difficulty: 'Medium', lc: 435, companies: ['Amazon','Google'] },
  { id: 128, name: 'Meeting Rooms', topic: 'intervals', difficulty: 'Easy', lc: 252, companies: ['Amazon','Meta','Google'] },
  { id: 129, name: 'Meeting Rooms II', topic: 'intervals', difficulty: 'Medium', lc: 253, companies: ['Amazon','Meta','Google'] },
  { id: 130, name: 'Min Interval to Include Each Query', topic: 'intervals', difficulty: 'Hard', lc: 1851, companies: ['Google'] },

  // ═══ Bit Manipulation & Math ═══
  { id: 131, name: 'Single Number', topic: 'bitmath', difficulty: 'Easy', lc: 136, companies: ['Amazon','Google'] },
  { id: 132, name: 'Number of 1 Bits', topic: 'bitmath', difficulty: 'Easy', lc: 191, companies: ['Amazon'] },
  { id: 133, name: 'Counting Bits', topic: 'bitmath', difficulty: 'Easy', lc: 338, companies: ['Amazon','Google'] },
  { id: 134, name: 'Reverse Bits', topic: 'bitmath', difficulty: 'Easy', lc: 190, companies: ['Amazon'] },
  { id: 135, name: 'Missing Number', topic: 'bitmath', difficulty: 'Easy', lc: 268, companies: ['Amazon','Google'] },
  { id: 136, name: 'Sum of Two Integers', topic: 'bitmath', difficulty: 'Medium', lc: 371, companies: ['Amazon'] },
];

const PATTERNS_DATA = [
  {
    name: 'Sliding Window',
    icon: '🪟',
    description: 'Maintain a window that slides across data to find optimal subarray/substring.',
    difficulty: 'Medium',
    problems: 5,
    useWhen: [
      'Subarray or substring problems',
      '"Find longest/shortest/max/min" with constraint',
      'Contiguous sequence of elements'
    ],
    template: `int left = 0;
for (int right = 0; right < n; right++) {
    // Expand window: add arr[right]
    while (/* window invalid */) {
        // Shrink: remove arr[left]
        left++;
    }
    // Update answer
}`,
    companies: 'Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐'
  },
  {
    name: 'Two Pointers',
    icon: '👆',
    description: 'Use two pointers moving in tandem or from both ends to optimize search.',
    difficulty: 'Easy–Medium',
    problems: 3,
    useWhen: [
      'Sorted array comparisons',
      'Finding pairs with a sum',
      'Palindrome checking',
      'Partitioning arrays'
    ],
    template: `int left = 0, right = n - 1;
while (left < right) {
    if (/* condition */) {
        left++;
    } else {
        right--;
    }
}`,
    companies: 'Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐'
  },
  {
    name: 'Binary Search',
    icon: '🔍',
    description: 'Divide search space in half each iteration for O(log n) solutions.',
    difficulty: 'Medium',
    problems: 6,
    useWhen: [
      'Sorted array search',
      '"Find minimum/maximum that satisfies X"',
      'Monotonic function optimization',
      'Search space can be halved'
    ],
    template: `int lo = min, hi = max;
while (lo < hi) {
    int mid = lo + (hi - lo) / 2;
    if (condition(mid)) {
        hi = mid;
    } else {
        lo = mid + 1;
    }
}
return lo;`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'DFS (Trees & Graphs)',
    icon: '🌳',
    description: 'Explore as deep as possible before backtracking. Foundation for tree/graph problems.',
    difficulty: 'Medium',
    problems: 14,
    useWhen: [
      'Tree traversals (inorder, preorder, postorder)',
      'Path finding in trees/graphs',
      'Connected components',
      'Cycle detection'
    ],
    template: `void dfs(Node node) {
    if (node == null) return;
    // Process node
    dfs(node.left);
    dfs(node.right);
}`,
    companies: 'Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐'
  },
  {
    name: 'BFS (Level Order)',
    icon: '🌊',
    description: 'Explore level by level using a queue. Best for shortest path in unweighted graphs.',
    difficulty: 'Medium',
    problems: 8,
    useWhen: [
      'Shortest path in unweighted graph',
      'Level-order tree traversal',
      'Finding nearest/minimum distance',
      'Multi-source BFS'
    ],
    template: `Queue<Node> queue = new LinkedList<>();
queue.add(start);
while (!queue.isEmpty()) {
    int size = queue.size();
    for (int i = 0; i < size; i++) {
        Node curr = queue.poll();
        // Process & add neighbors
    }
}`,
    companies: 'Google ⭐⭐⭐ | Meta ⭐⭐⭐ | Amazon ⭐⭐⭐'
  },
  {
    name: 'Dynamic Programming',
    icon: '🧠',
    description: 'Break problems into overlapping subproblems. Build solutions bottom-up or top-down.',
    difficulty: 'Medium–Hard',
    problems: 20,
    useWhen: [
      'Optimization problems (min/max)',
      'Counting problems',
      'Yes/No feasibility decisions',
      'Overlapping subproblems + optimal substructure'
    ],
    template: `// 1D DP
int[] dp = new int[n + 1];
dp[0] = base_case;
for (int i = 1; i <= n; i++) {
    dp[i] = /* recurrence relation */;
}
return dp[n];`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐⭐ | Meta ⭐⭐⭐'
  },
  {
    name: 'Backtracking',
    icon: '🔙',
    description: 'Build candidates incrementally, abandoning invalid paths early.',
    difficulty: 'Medium–Hard',
    problems: 11,
    useWhen: [
      'Generate all combinations/permutations/subsets',
      'Constraint satisfaction (N-Queens, Sudoku)',
      'Path finding with constraints',
      'Decision trees'
    ],
    template: `void backtrack(List<Integer> path, int start) {
    if (/* goal reached */) {
        result.add(new ArrayList<>(path));
        return;
    }
    for (int i = start; i < n; i++) {
        path.add(nums[i]);     // Choose
        backtrack(path, i + 1); // Explore
        path.remove(path.size() - 1); // Un-choose
    }
}`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Monotonic Stack',
    icon: '📚',
    description: 'Maintain a stack with monotonic ordering for next greater/smaller element problems.',
    difficulty: 'Medium',
    problems: 5,
    useWhen: [
      'Next greater/smaller element',
      'Daily temperatures',
      'Histogram problems',
      'Stock span problems'
    ],
    template: `Stack<Integer> stack = new Stack<>();
for (int i = 0; i < n; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
        int idx = stack.pop();
        result[idx] = arr[i]; // next greater
    }
    stack.push(i);
}`,
    companies: 'Amazon ⭐⭐⭐ | Google ⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Heap / Priority Queue',
    icon: '⛰️',
    description: 'Efficiently access min/max elements. Essential for top-K and streaming problems.',
    difficulty: 'Medium',
    problems: 6,
    useWhen: [
      'Top K elements / K-th largest/smallest',
      'Merge K sorted collections',
      'Streaming data (median, max)',
      'Scheduling problems'
    ],
    template: `PriorityQueue<int[]> pq = new PriorityQueue<>(
    (a, b) -> a[0] - b[0]  // min-heap
);
pq.offer(element);
int[] top = pq.poll();`,
    companies: 'Amazon ⭐⭐⭐ | Google ⭐⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Trie',
    icon: '🌲',
    description: 'Prefix tree for efficient string storage and lookup operations.',
    difficulty: 'Medium',
    problems: 3,
    useWhen: [
      'Prefix matching / autocomplete',
      'Word dictionary with wildcards',
      'Word search in grid',
      'Spell checking'
    ],
    template: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}
void insert(String word) {
    TrieNode node = root;
    for (char c : word.toCharArray()) {
        if (node.children[c - 'a'] == null)
            node.children[c - 'a'] = new TrieNode();
        node = node.children[c - 'a'];
    }
    node.isEnd = true;
}`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Union Find',
    icon: '🤝',
    description: 'Track disjoint sets with efficient union and find operations.',
    difficulty: 'Medium',
    problems: 4,
    useWhen: [
      'Connected components',
      'Cycle detection in undirected graph',
      'Minimum spanning tree (Kruskal\'s)',
      'Dynamic connectivity queries'
    ],
    template: `int[] parent, rank;
int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]); // Path compression
    return parent[x];
}
void union(int x, int y) {
    int px = find(x), py = find(y);
    if (rank[px] < rank[py]) parent[px] = py;
    else if (rank[px] > rank[py]) parent[py] = px;
    else { parent[py] = px; rank[px]++; }
}`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐ | Meta ⭐'
  },
  {
    name: 'Topological Sort',
    icon: '🔄',
    description: 'Order nodes in a DAG such that all edges go from earlier to later in the ordering.',
    difficulty: 'Medium',
    problems: 4,
    useWhen: [
      'Task scheduling / prerequisites',
      'Build system dependencies',
      'Course schedule problems',
      'Detecting cycles in directed graphs'
    ],
    template: `// Kahn's Algorithm (BFS)
Queue<Integer> queue = new LinkedList<>();
for (int i = 0; i < n; i++)
    if (inDegree[i] == 0) queue.add(i);
while (!queue.isEmpty()) {
    int node = queue.poll();
    order.add(node);
    for (int neighbor : graph.get(node)) {
        if (--inDegree[neighbor] == 0)
            queue.add(neighbor);
    }
}`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Greedy',
    icon: '💰',
    description: 'Make locally optimal choices at each step, hoping for a global optimum.',
    difficulty: 'Medium',
    problems: 5,
    useWhen: [
      'Interval scheduling (greedy by end time)',
      'Jump game problems',
      'Huffman coding',
      'Activity selection'
    ],
    template: `// Often requires sorting first
Arrays.sort(intervals, (a, b) -> a[1] - b[1]);
int count = 1, end = intervals[0][1];
for (int i = 1; i < n; i++) {
    if (intervals[i][0] >= end) {
        count++;
        end = intervals[i][1];
    }
}`,
    companies: 'Google ⭐⭐ | Amazon ⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Intervals',
    icon: '📏',
    description: 'Merge, insert, and process overlapping intervals efficiently.',
    difficulty: 'Medium',
    problems: 6,
    useWhen: [
      'Overlapping ranges',
      'Meeting rooms / scheduling',
      'Merge/insert intervals',
      'Interval intersection'
    ],
    template: `// Sort by start time
Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
List<int[]> merged = new ArrayList<>();
for (int[] interval : intervals) {
    if (merged.isEmpty() || 
        merged.get(merged.size()-1)[1] < interval[0]) {
        merged.add(interval);
    } else {
        merged.get(merged.size()-1)[1] = 
            Math.max(merged.get(merged.size()-1)[1], interval[1]);
    }
}`,
    companies: 'Google ⭐⭐⭐ | Amazon ⭐⭐⭐ | Meta ⭐⭐'
  },
  {
    name: 'Bit Manipulation',
    icon: '🔢',
    description: 'Use bitwise operations for space-efficient and fast solutions.',
    difficulty: 'Easy–Medium',
    problems: 6,
    useWhen: [
      'Find single/missing number',
      'Power of 2 checks',
      'Bit counting',
      'XOR-based pairing'
    ],
    template: `// XOR to find single number
int result = 0;
for (int num : nums) {
    result ^= num; // pairs cancel out
}
return result;

// Check if power of 2
boolean isPow2 = (n & (n - 1)) == 0;

// Count set bits
int count = Integer.bitCount(n);`,
    companies: 'Amazon ⭐⭐ | Google ⭐⭐ | Apple ⭐⭐'
  },
];

const COMPANY_DATA = [
  {
    name: 'Google',
    logo: '🔵',
    tips: [
      { icon: '🧠', text: 'Focus on algorithmic complexity — Google loves optimal solutions' },
      { icon: '📐', text: 'Graph problems are VERY frequent (BFS, DFS, shortest path)' },
      { icon: '🪟', text: 'Sliding Window & Binary Search are top patterns' },
      { icon: '💡', text: 'Be prepared to discuss trade-offs in your approach' },
      { icon: '⏱️', text: '45 min per interview — 5 min intro, 35 min coding, 5 min questions' },
      { icon: '🎯', text: 'Expect 2 medium or 1 medium + 1 hard per round' },
    ]
  },
  {
    name: 'Meta',
    logo: '🟦',
    tips: [
      { icon: '🔗', text: 'Heavy focus on Trees, Graphs, and String manipulation' },
      { icon: '⚡', text: 'Speed matters — they value clean, fast implementations' },
      { icon: '🧹', text: 'Code quality is critical: clear variable names, clean structure' },
      { icon: '📊', text: 'BFS problems are Meta\'s bread and butter' },
      { icon: '⏱️', text: 'You may get 2 problems in one 45-min slot' },
      { icon: '🎯', text: 'Practice writing code without an IDE first' },
    ]
  },
  {
    name: 'Amazon',
    logo: '📦',
    tips: [
      { icon: '🏗️', text: 'System design questions heavily tied to Leadership Principles' },
      { icon: '📚', text: 'Stacks, Queues, and Heap problems are very common' },
      { icon: '🔄', text: 'BFS/DFS combined with real-world scenarios' },
      { icon: '💼', text: 'Always tie your solution back to a Leadership Principle' },
      { icon: '⏱️', text: '60 min interviews — behavioral + coding combined' },
      { icon: '🎯', text: 'Practice explaining your thought process out loud' },
    ]
  },
  {
    name: 'Apple',
    logo: '🍎',
    tips: [
      { icon: '🎨', text: 'Focus on clean, readable, production-quality code' },
      { icon: '🧵', text: 'Threading and concurrency questions are common' },
      { icon: '📱', text: 'May include platform-specific questions (iOS/macOS)' },
      { icon: '🔐', text: 'Security and privacy awareness is appreciated' },
      { icon: '⏱️', text: '45-60 min per round, mix of coding and design' },
      { icon: '🎯', text: 'Smaller team interviews — each interviewer has more weight' },
    ]
  },
  {
    name: 'Netflix',
    logo: '🔴',
    tips: [
      { icon: '⚡', text: 'Netflix values senior-level thinking and autonomy' },
      { icon: '🏗️', text: 'Heavy focus on system design and architecture' },
      { icon: '📈', text: 'Scalability and distributed systems knowledge expected' },
      { icon: '🧪', text: 'Testing and reliability are key discussion points' },
      { icon: '⏱️', text: 'Longer interviews — more discussion-based' },
      { icon: '🎯', text: 'Culture fit (Freedom & Responsibility) is crucial' },
    ]
  }
];

const SCHEDULE_DATA = [
  {
    week: 'Weeks 1–3',
    phase: 'Phase 1: Foundations',
    title: 'Arrays, Hash Maps, Two Pointers, Sliding Window, Linked Lists, Stacks',
    description: 'Build your foundation with the most common interview topics. Master the core patterns that appear in 60%+ of interviews.',
    topics: ['Arrays', 'Hash Maps', 'Two Pointers', 'Sliding Window', 'Linked Lists', 'Stacks']
  },
  {
    week: 'Weeks 4–6',
    phase: 'Phase 2: Trees & Graphs',
    title: 'Binary Trees, BSTs, BFS, DFS, Advanced Graphs, Heaps',
    description: 'Deep dive into tree traversals and graph algorithms. These are the most complex topics but highly rewarded in interviews.',
    topics: ['Binary Trees', 'BST', 'BFS', 'DFS', 'Dijkstra', 'Heaps']
  },
  {
    week: 'Weeks 7–9',
    phase: 'Phase 3: DP & Recursion',
    title: '1D DP, 2D DP, Backtracking, Memoization',
    description: 'Master dynamic programming patterns. Start with 1D DP, progress to 2D, and learn to recognize when DP is the right approach.',
    topics: ['1D DP', '2D DP', 'Backtracking', 'Memoization', 'Top-Down', 'Bottom-Up']
  },
  {
    week: 'Weeks 10–11',
    phase: 'Phase 4: Advanced Topics',
    title: 'Tries, Union-Find, Intervals, Bit Manipulation, Greedy',
    description: 'Cover advanced data structures and techniques. These appear less frequently but can be the difference between rejection and offer.',
    topics: ['Tries', 'Union Find', 'Intervals', 'Bit Manipulation', 'Greedy', 'Math']
  },
  {
    week: 'Week 12',
    phase: 'Phase 5: Mock Interviews',
    title: 'Company-Targeted Mock Sessions',
    description: 'Simulate real interview conditions with timed mock sessions targeting each MAANG company\'s unique question style.',
    topics: ['Google Mocks', 'Meta Mocks', 'Amazon Mocks', 'Apple+Netflix Mocks']
  }
];
