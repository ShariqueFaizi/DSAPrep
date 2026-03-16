/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — A2Z Sheet Data
   Inspired by Striver's A2Z DSA Course Sheet
   ═══════════════════════════════════════════════════════════ */

const A2Z_SHEET = [
  {
    id: 1,
    title: 'Learn the Basics',
    icon: '📚',
    subtopics: [
      {
        id: '1.1',
        name: 'Things to Know in C++/Java/Python',
        icon: '🛠️',
        problems: [
          { id: 's1', name: 'User Input / Output',         diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's2', name: 'Data Types',                  diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's3', name: 'If-Else Statements',          diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's4', name: 'Switch Statements',           diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's5', name: 'Arrays Basics',               diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's6', name: 'Strings Basics',              diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's7', name: 'For Loops',                   diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's8', name: 'While Loops',                 diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's9', name: 'Functions / Methods',         diff: 'Easy',   lc: null,  note: 'Language fundamental' },
          { id: 's10',name: 'Pass by Value vs Reference',  diff: 'Easy',   lc: null,  note: 'Language fundamental' },
        ]
      },
      {
        id: '1.2',
        name: 'Build-up Logical Thinking (Patterns)',
        icon: '🔲',
        problems: [
          { id: 'p1',  name: 'Print 1 to N Without Loop',        diff: 'Easy',   lc: null,  gfg: 'print-1-to-n-without-using-loops' },
          { id: 'p2',  name: 'Reverse a Number',                  diff: 'Easy',   lc: 7 },
          { id: 'p3',  name: 'Check Armstrong Number',            diff: 'Easy',   lc: null },
          { id: 'p4',  name: 'Print Star Pattern (Right Triangle)',diff: 'Easy',   lc: null },
          { id: 'p5',  name: 'Print Star Pattern (Inverted)',      diff: 'Easy',   lc: null },
          { id: 'p6',  name: 'Print Diamond Pattern',             diff: 'Easy',   lc: null },
          { id: 'p7',  name: 'Floyd\'s Triangle',                  diff: 'Easy',   lc: null },
          { id: 'p8',  name: 'Pascal\'s Triangle Row',             diff: 'Easy',   lc: 118 },
        ]
      },
      {
        id: '1.3',
        name: 'Basic Math',
        icon: '🔢',
        problems: [
          { id: 'm1', name: 'Count Digits in a Number',    diff: 'Easy',   lc: null },
          { id: 'm2', name: 'Reverse a Number',            diff: 'Easy',   lc: 7    },
          { id: 'm3', name: 'Check Palindrome Number',     diff: 'Easy',   lc: 9    },
          { id: 'm4', name: 'GCD / HCF of Two Numbers',   diff: 'Easy',   lc: null },
          { id: 'm5', name: 'Armstrong Numbers',           diff: 'Easy',   lc: null },
          { id: 'm6', name: 'Print All Divisors',          diff: 'Easy',   lc: null },
          { id: 'm7', name: 'Check Prime',                 diff: 'Easy',   lc: null },
          { id: 'm8', name: 'Power of Two',                diff: 'Easy',   lc: 231  },
        ]
      },
      {
        id: '1.4',
        name: 'Basic Recursion',
        icon: '🔄',
        problems: [
          { id: 'r1', name: 'Understand Recursion — Print 1 to N', diff: 'Easy',   lc: null },
          { id: 'r2', name: 'Print N to 1 using Recursion',        diff: 'Easy',   lc: null },
          { id: 'r3', name: 'Sum of First N Numbers',              diff: 'Easy',   lc: null },
          { id: 'r4', name: 'Factorial of N',                      diff: 'Easy',   lc: null },
          { id: 'r5', name: 'Fibonacci Number',                    diff: 'Easy',   lc: 509  },
          { id: 'r6', name: 'Reverse an Array using Recursion',    diff: 'Easy',   lc: null },
          { id: 'r7', name: 'Check Palindrome String',             diff: 'Easy',   lc: 125  },
          { id: 'r8', name: 'Multiple Recursion Calls',            diff: 'Medium', lc: null },
        ]
      },
      {
        id: '1.5',
        name: 'Basic Hashing',
        icon: '🗂️',
        problems: [
          { id: 'h1', name: 'Counting Frequencies of Elements',    diff: 'Easy',   lc: null },
          { id: 'h2', name: 'Find Highest/Lowest Frequency',       diff: 'Easy',   lc: null },
          { id: 'h3', name: 'Two Sum',                             diff: 'Easy',   lc: 1    },
          { id: 'h4', name: 'Valid Anagram',                       diff: 'Easy',   lc: 242  },
          { id: 'h5', name: 'Group Anagrams',                      diff: 'Medium', lc: 49   },
        ]
      },
    ]
  },

  {
    id: 2,
    title: 'Sorting Algorithms',
    icon: '🔢',
    subtopics: [
      {
        id: '2.1',
        name: 'Sorting Basics',
        icon: '📊',
        problems: [
          { id: 'so1', name: 'Selection Sort',         diff: 'Easy',   lc: null },
          { id: 'so2', name: 'Bubble Sort',            diff: 'Easy',   lc: null },
          { id: 'so3', name: 'Insertion Sort',         diff: 'Easy',   lc: null },
          { id: 'so4', name: 'Merge Sort',             diff: 'Medium', lc: null },
          { id: 'so5', name: 'Quick Sort',             diff: 'Medium', lc: null },
          { id: 'so6', name: 'Sort Colors',            diff: 'Medium', lc: 75   },
          { id: 'so7', name: 'Sort an Array',          diff: 'Medium', lc: 912  },
        ]
      }
    ]
  },

  {
    id: 3,
    title: 'Arrays',
    icon: '📦',
    subtopics: [
      {
        id: '3.1',
        name: 'Easy Array Problems',
        icon: '🟢',
        problems: [
          { id: 'a1',  name: 'Largest Element in Array',              diff: 'Easy',   lc: null  },
          { id: 'a2',  name: 'Second Largest & Second Smallest',      diff: 'Easy',   lc: null  },
          { id: 'a3',  name: 'Check if Array is Sorted',              diff: 'Easy',   lc: 1752  },
          { id: 'a4',  name: 'Remove Duplicates from Sorted Array',   diff: 'Easy',   lc: 26    },
          { id: 'a5',  name: 'Left Rotate Array by One',              diff: 'Easy',   lc: null  },
          { id: 'a6',  name: 'Left/Right Rotate by D Places',         diff: 'Medium', lc: 189   },
          { id: 'a7',  name: 'Move Zeros to End',                     diff: 'Easy',   lc: 283   },
          { id: 'a8',  name: 'Linear Search',                         diff: 'Easy',   lc: null  },
          { id: 'a9',  name: 'Union of Two Sorted Arrays',            diff: 'Easy',   lc: null  },
          { id: 'a10', name: 'Intersection of Two Sorted Arrays',     diff: 'Easy',   lc: 350   },
          { id: 'a11', name: 'Find Missing Number',                   diff: 'Easy',   lc: 268   },
          { id: 'a12', name: 'Maximum Consecutive Ones',              diff: 'Easy',   lc: 485   },
          { id: 'a13', name: 'Find Number Appearing Once',            diff: 'Easy',   lc: 136   },
          { id: 'a14', name: 'Longest Subarray with Sum K',           diff: 'Medium', lc: null  },
        ]
      },
      {
        id: '3.2',
        name: 'Medium Array Problems',
        icon: '🟡',
        problems: [
          { id: 'a15', name: 'Two Sum',                               diff: 'Easy',   lc: 1    },
          { id: 'a16', name: 'Sort Colors (Dutch National Flag)',      diff: 'Medium', lc: 75   },
          { id: 'a17', name: 'Majority Element (>n/2)',                diff: 'Medium', lc: 169  },
          { id: 'a18', name: 'Maximum Subarray (Kadane\'s)',           diff: 'Medium', lc: 53   },
          { id: 'a19', name: 'Best Time to Buy and Sell Stock',        diff: 'Easy',   lc: 121  },
          { id: 'a20', name: 'Rearrange Array Alternately',           diff: 'Medium', lc: null  },
          { id: 'a21', name: 'Next Permutation',                      diff: 'Medium', lc: 31   },
          { id: 'a22', name: 'Leaders in an Array',                   diff: 'Easy',   lc: null  },
          { id: 'a23', name: 'Longest Consecutive Sequence',          diff: 'Medium', lc: 128  },
          { id: 'a24', name: 'Set Matrix Zeroes',                     diff: 'Medium', lc: 73   },
          { id: 'a25', name: 'Rotate Matrix 90 Degrees',              diff: 'Medium', lc: 48   },
          { id: 'a26', name: 'Spiral Order Traversal',                diff: 'Medium', lc: 54   },
          { id: 'a27', name: 'Count Subarrays with XOR = K',          diff: 'Medium', lc: null  },
          { id: 'a28', name: 'Merge Intervals',                       diff: 'Medium', lc: 56   },
          { id: 'a29', name: 'Merge Two Sorted Arrays Without Space', diff: 'Hard',   lc: 88   },
          { id: 'a30', name: 'Find the Duplicate Number',             diff: 'Medium', lc: 287  },
          { id: 'a31', name: 'Missing and Repeating Number',          diff: 'Medium', lc: null  },
          { id: 'a32', name: 'Count Inversions in Array',             diff: 'Hard',   lc: null  },
          { id: 'a33', name: 'Reverse Pairs',                         diff: 'Hard',   lc: 493  },
          { id: 'a34', name: 'Maximum Product Subarray',              diff: 'Medium', lc: 152  },
        ]
      },
      {
        id: '3.3',
        name: 'Hard Array Problems',
        icon: '🔴',
        problems: [
          { id: 'a35', name: 'Trapping Rain Water',                   diff: 'Hard',   lc: 42   },
          { id: 'a36', name: 'Product of Array Except Self',          diff: 'Medium', lc: 238  },
          { id: 'a37', name: '3-Sum',                                 diff: 'Medium', lc: 15   },
          { id: 'a38', name: '4-Sum',                                 diff: 'Medium', lc: 18   },
          { id: 'a39', name: 'Largest Rectangle in Histogram',        diff: 'Hard',   lc: 84   },
          { id: 'a40', name: 'Pascal\'s Triangle',                     diff: 'Easy',   lc: 118  },
        ]
      }
    ]
  },

  {
    id: 4,
    title: 'Binary Search',
    icon: '🔍',
    subtopics: [
      {
        id: '4.1',
        name: 'Binary Search Fundamentals',
        icon: '🎯',
        problems: [
          { id: 'bs1',  name: 'Binary Search',                         diff: 'Easy',   lc: 704  },
          { id: 'bs2',  name: 'Lower Bound / Upper Bound',             diff: 'Easy',   lc: null  },
          { id: 'bs3',  name: 'Search Insert Position',                diff: 'Easy',   lc: 35   },
          { id: 'bs4',  name: 'Floor/Ceil in Sorted Array',            diff: 'Easy',   lc: null  },
          { id: 'bs5',  name: 'First & Last Occurrence',               diff: 'Easy',   lc: 34   },
          { id: 'bs6',  name: 'Count Occurrences in Sorted Array',     diff: 'Easy',   lc: null  },
          { id: 'bs7',  name: 'Search in Rotated Sorted Array',        diff: 'Medium', lc: 33   },
          { id: 'bs8',  name: 'Search in Rotated Sorted Array II',     diff: 'Medium', lc: 81   },
          { id: 'bs9',  name: 'Find Minimum in Rotated Sorted Array',  diff: 'Medium', lc: 153  },
          { id: 'bs10', name: 'Find Rotation Count',                   diff: 'Medium', lc: null  },
          { id: 'bs11', name: 'Single Element in Sorted Array',        diff: 'Medium', lc: 540  },
          { id: 'bs12', name: 'Peak Index in Mountain Array',          diff: 'Medium', lc: 852  },
        ]
      },
      {
        id: '4.2',
        name: 'BS on Answer (Hard)',
        icon: '🔒',
        problems: [
          { id: 'bs13', name: 'Find Nth Root of a Number',             diff: 'Easy',   lc: null  },
          { id: 'bs14', name: 'Koko Eating Bananas',                   diff: 'Medium', lc: 875  },
          { id: 'bs15', name: 'Minimum Number of Days to Make Bouquet',diff: 'Medium', lc: 1482  },
          { id: 'bs16', name: 'Find the Smallest Divisor',             diff: 'Medium', lc: 1283  },
          { id: 'bs17', name: 'Capacity to Ship Packages',             diff: 'Medium', lc: 1011  },
          { id: 'bs18', name: 'Kth Missing Positive Number',           diff: 'Easy',   lc: 1539  },
          { id: 'bs19', name: 'Aggressive Cows',                       diff: 'Hard',   lc: null  },
          { id: 'bs20', name: 'Book Allocation Problem',               diff: 'Hard',   lc: null  },
          { id: 'bs21', name: 'Split Array — Largest Sum',             diff: 'Hard',   lc: 410  },
          { id: 'bs22', name: 'Painter\'s Partition Problem',           diff: 'Hard',   lc: null  },
          { id: 'bs23', name: 'Minimize Max Distance to Gas Station',  diff: 'Hard',   lc: 774  },
          { id: 'bs24', name: 'Median of Two Sorted Arrays',           diff: 'Hard',   lc: 4    },
          { id: 'bs25', name: 'Kth Element of Two Sorted Arrays',      diff: 'Hard',   lc: null  },
        ]
      },
      {
        id: '4.3',
        name: 'BS on 2D Arrays',
        icon: '🗺️',
        problems: [
          { id: 'bs26', name: 'Search a 2D Matrix',                   diff: 'Medium', lc: 74   },
          { id: 'bs27', name: 'Search a 2D Matrix II',                diff: 'Medium', lc: 240  },
          { id: 'bs28', name: 'Find Peak Element in 2D Grid',         diff: 'Hard',   lc: 1901  },
          { id: 'bs29', name: 'Row with Maximum Number of 1s',        diff: 'Easy',   lc: null  },
          { id: 'bs30', name: 'Find Median in Row-Wise Sorted Matrix',diff: 'Hard',   lc: null  },
        ]
      }
    ]
  },

  {
    id: 5,
    title: 'Strings',
    icon: '🔤',
    subtopics: [
      {
        id: '5.1',
        name: 'Easy String Problems',
        icon: '🟢',
        problems: [
          { id: 'st1',  name: 'Remove Outermost Parentheses',         diff: 'Easy',   lc: 1021  },
          { id: 'st2',  name: 'Reverse Words in a String',            diff: 'Medium', lc: 151   },
          { id: 'st3',  name: 'Largest Odd Number in String',         diff: 'Easy',   lc: 1903  },
          { id: 'st4',  name: 'Longest Common Prefix',                diff: 'Easy',   lc: 14    },
          { id: 'st5',  name: 'Isomorphic Strings',                   diff: 'Easy',   lc: 205   },
          { id: 'st6',  name: 'Check if Strings are Rotations',       diff: 'Easy',   lc: null  },
          { id: 'st7',  name: 'Check if String is Rotation of Another',diff: 'Easy',  lc: null  },
          { id: 'st8',  name: 'Valid Anagram',                        diff: 'Easy',   lc: 242   },
          { id: 'st9',  name: 'Sort Characters by Frequency',         diff: 'Medium', lc: 451   },
        ]
      },
      {
        id: '5.2',
        name: 'Medium/Hard String Problems',
        icon: '🟡',
        problems: [
          { id: 'st10', name: 'Maximum Nesting Depth of Parentheses', diff: 'Easy',   lc: 1614  },
          { id: 'st11', name: 'Roman Number to Integer / Vice Versa', diff: 'Easy',   lc: 13    },
          { id: 'st12', name: 'Implement ATOI / STRSTR',              diff: 'Medium', lc: 8     },
          { id: 'st13', name: 'Count and Say',                        diff: 'Medium', lc: 38    },
          { id: 'st14', name: 'Compare Version Numbers',              diff: 'Medium', lc: 165   },
          { id: 'st15', name: 'Minimum Add to Make Parentheses Valid',diff: 'Medium', lc: 921   },
          { id: 'st16', name: 'Number of Substrings with All 3 Chars',diff: 'Medium', lc: 1358  },
          { id: 'st17', name: 'Longest Palindromic Substring',        diff: 'Medium', lc: 5     },
          { id: 'st18', name: 'Sum of Beauty of All Substrings',      diff: 'Medium', lc: 1781  },
          { id: 'st19', name: 'Minimum Chars to Add for Palindrome',  diff: 'Hard',   lc: null  },
        ]
      },
      {
        id: '5.3',
        name: 'String Matching Algorithms',
        icon: '🔍',
        problems: [
          { id: 'st20', name: 'Index of First Occurrence in String',  diff: 'Easy',   lc: 28    },
          { id: 'st21', name: 'Repeated String Match',                diff: 'Medium', lc: 686   },
          { id: 'st22', name: 'KMP Algorithm for Pattern Matching',   diff: 'Hard',   lc: 28    },
          { id: 'st23', name: 'Minimum Chars for Palindrome (KMP)',   diff: 'Hard',   lc: 214   },
          { id: 'st24', name: 'Shortest Palindrome',                  diff: 'Hard',   lc: 214   },
          { id: 'st25', name: 'Find All Anagrams in String',          diff: 'Medium', lc: 438   },
          { id: 'st26', name: 'Z Function / Z-Algorithm',             diff: 'Hard',   lc: null  },
          { id: 'st27', name: 'Wildcard Pattern Matching',            diff: 'Hard',   lc: 44    },
        ]
      }
    ]
  },

  {
    id: 6,
    title: 'Linked Lists',
    icon: '🔗',
    subtopics: [
      {
        id: '6.1',
        name: 'Singly LL Basics',
        icon: '🟢',
        problems: [
          { id: 'll1',  name: 'Linked List Introduction & Insertion', diff: 'Easy',   lc: null  },
          { id: 'll2',  name: 'Delete Node in LL',                   diff: 'Easy',   lc: 237   },
          { id: 'll3',  name: 'Find Length of LL',                   diff: 'Easy',   lc: null  },
          { id: 'll4',  name: 'Search an Element in LL',             diff: 'Easy',   lc: null  },
          { id: 'll5',  name: 'Reverse a Linked List',               diff: 'Easy',   lc: 206   },
        ]
      },
      {
        id: '6.2',
        name: 'Doubly Linked Lists',
        icon: '🔀',
        problems: [
          { id: 'll6',  name: 'Introduction to DLL',                 diff: 'Easy',   lc: null  },
          { id: 'll7',  name: 'Delete Node in DLL',                  diff: 'Easy',   lc: null  },
          { id: 'll8',  name: 'Reverse a DLL',                       diff: 'Easy',   lc: null  },
        ]
      },
      {
        id: '6.3',
        name: 'Medium LL Problems',
        icon: '🟡',
        problems: [
          { id: 'll9',  name: 'Middle of Linked List',               diff: 'Easy',   lc: 876   },
          { id: 'll10', name: 'Detect a Cycle in LL',                diff: 'Easy',   lc: 141   },
          { id: 'll11', name: 'Find Length of Cycle',                diff: 'Easy',   lc: null  },
          { id: 'll12', name: 'Find Starting Point of Cycle',        diff: 'Medium', lc: 142   },
          { id: 'll13', name: 'Check if LL is Palindrome',           diff: 'Easy',   lc: 234   },
          { id: 'll14', name: 'Segregate Odd and Even Nodes',        diff: 'Medium', lc: 328   },
          { id: 'll15', name: 'Remove Nth Node from End',            diff: 'Medium', lc: 19    },
          { id: 'll16', name: 'Delete Middle Node',                  diff: 'Medium', lc: 2095  },
          { id: 'll17', name: 'Sort LL',                             diff: 'Medium', lc: 148   },
          { id: 'll18', name: 'Sort LL of 0s, 1s and 2s',           diff: 'Medium', lc: null  },
          { id: 'll19', name: 'Find Intersection of Two LL',        diff: 'Easy',   lc: 160   },
          { id: 'll20', name: 'Add 1 to Number Represented as LL',  diff: 'Medium', lc: null  },
          { id: 'll21', name: 'Add Two Numbers in LL',              diff: 'Medium', lc: 2     },
        ]
      },
      {
        id: '6.4',
        name: 'Hard LL Problems',
        icon: '🔴',
        problems: [
          { id: 'll22', name: 'Reverse LL in Groups of K',           diff: 'Hard',   lc: 25    },
          { id: 'll23', name: 'Rotate a LL',                         diff: 'Medium', lc: 61    },
          { id: 'll24', name: 'Flatten a LL',                        diff: 'Hard',   lc: 430   },
          { id: 'll25', name: 'Copy List with Random Pointer',       diff: 'Medium', lc: 138   },
          { id: 'll26', name: 'Merge Two Sorted LL',                 diff: 'Easy',   lc: 21    },
          { id: 'll27', name: 'Merge K Sorted LL',                   diff: 'Hard',   lc: 23    },
          { id: 'll28', name: 'LRU Cache',                           diff: 'Medium', lc: 146   },
        ]
      }
    ]
  },

  {
    id: 7,
    title: 'Recursion & Backtracking',
    icon: '🔙',
    subtopics: [
      {
        id: '7.1',
        name: 'Recursion Fundamentals',
        icon: '🔁',
        problems: [
          { id: 'bt1',  name: 'Subset Sum I',                         diff: 'Medium', lc: 78    },
          { id: 'bt2',  name: 'Subset Sum II',                        diff: 'Medium', lc: 90    },
          { id: 'bt3',  name: 'Combination Sum I',                    diff: 'Medium', lc: 39    },
          { id: 'bt4',  name: 'Combination Sum II',                   diff: 'Medium', lc: 40    },
          { id: 'bt5',  name: 'Combination Sum III',                  diff: 'Medium', lc: 216   },
          { id: 'bt6',  name: 'Letter Combinations (Phone Number)',   diff: 'Medium', lc: 17    },
          { id: 'bt7',  name: 'Permutations I',                       diff: 'Medium', lc: 46    },
          { id: 'bt8',  name: 'Permutations II',                      diff: 'Medium', lc: 47    },
        ]
      },
      {
        id: '7.2',
        name: 'Backtracking Problems',
        icon: '♟️',
        problems: [
          { id: 'bt9',  name: 'N-Queens',                             diff: 'Hard',   lc: 51    },
          { id: 'bt10', name: 'N-Queens II',                          diff: 'Hard',   lc: 52    },
          { id: 'bt11', name: 'Sudoku Solver',                        diff: 'Hard',   lc: 37    },
          { id: 'bt12', name: 'Word Search',                          diff: 'Medium', lc: 79    },
          { id: 'bt13', name: 'Rat in a Maze',                        diff: 'Medium', lc: null  },
          { id: 'bt14', name: 'Word Break II',                        diff: 'Hard',   lc: 140   },
          { id: 'bt15', name: 'M Coloring Problem',                   diff: 'Medium', lc: null  },
          { id: 'bt16', name: 'Palindrome Partitioning',              diff: 'Medium', lc: 131   },
          { id: 'bt17', name: 'Expression Add Operators',             diff: 'Hard',   lc: 282   },
          { id: 'bt18', name: 'Generate Parentheses',                 diff: 'Medium', lc: 22    },
        ]
      },
      {
        id: '7.3',
        name: 'String Backtracking',
        icon: '🔤',
        problems: [
          { id: 'bt19', name: 'Restore IP Addresses',                 diff: 'Medium', lc: 93    },
          { id: 'bt20', name: 'All Palindrome Partitions',            diff: 'Medium', lc: 131   },
          { id: 'bt21', name: 'Beautify IP Addresses',                diff: 'Medium', lc: null  },
        ]
      }
    ]
  },

  {
    id: 8,
    title: 'Bit Manipulation',
    icon: '🔢',
    subtopics: [
      {
        id: '8.1',
        name: 'Bit Manipulation Basics',
        icon: '⚙️',
        problems: [
          { id: 'bm1',  name: 'Introduction to Bit Manipulation',     diff: 'Easy',   lc: null  },
          { id: 'bm2',  name: 'Check if i-th bit is set or not',      diff: 'Easy',   lc: null  },
          { id: 'bm3',  name: 'Check if given number is odd or even', diff: 'Easy',   lc: null  },
          { id: 'bm4',  name: 'Check if a number is power of 2',      diff: 'Easy',   lc: 231   },
          { id: 'bm5',  name: 'Count number of set bits',             diff: 'Easy',   lc: 191   },
          { id: 'bm6',  name: 'Set / Reset / Toggle the i-th bit',    diff: 'Easy',   lc: null  },
          { id: 'bm7',  name: 'Remove the last set bit',              diff: 'Easy',   lc: null  },
          { id: 'bm8',  name: 'Check if a number is power of 2',      diff: 'Easy',   lc: 231   },
        ]
      },
      {
        id: '8.2',
        name: 'Bit Manipulation Problems',
        icon: '🔧',
        problems: [
          { id: 'bm9',  name: 'Single Number',                        diff: 'Easy',   lc: 136   },
          { id: 'bm10', name: 'Single Number II',                     diff: 'Medium', lc: 137   },
          { id: 'bm11', name: 'Single Number III',                    diff: 'Medium', lc: 260   },
          { id: 'bm12', name: 'Find the two non-repeating elements',  diff: 'Medium', lc: null  },
          { id: 'bm13', name: 'Counting Bits',                        diff: 'Easy',   lc: 338   },
          { id: 'bm14', name: 'Reverse Bits',                         diff: 'Easy',   lc: 190   },
          { id: 'bm15', name: 'Number of 1 Bits (Hamming Weight)',    diff: 'Easy',   lc: 191   },
          { id: 'bm16', name: 'Sum of Two Integers Without + or -',   diff: 'Medium', lc: 371   },
          { id: 'bm17', name: 'XOR Queries of a Subarray',            diff: 'Medium', lc: 1310  },
          { id: 'bm18', name: 'Subsets using Bitmask',                diff: 'Medium', lc: 78    },
        ]
      }
    ]
  },

  {
    id: 9,
    title: 'Stacks & Queues',
    icon: '📚',
    subtopics: [
      {
        id: '9.1',
        name: 'Stack & Queue Theory',
        icon: '📖',
        problems: [
          { id: 'sq1',  name: 'Implement Stack using Array',          diff: 'Easy',   lc: null  },
          { id: 'sq2',  name: 'Implement Queue using Array',          diff: 'Easy',   lc: null  },
          { id: 'sq3',  name: 'Implement Stack using Queue',          diff: 'Easy',   lc: 225   },
          { id: 'sq4',  name: 'Implement Queue using Stacks',         diff: 'Easy',   lc: 232   },
          { id: 'sq5',  name: 'Implement Stack using LL',             diff: 'Easy',   lc: null  },
          { id: 'sq6',  name: 'Implement Queue using LL',             diff: 'Easy',   lc: null  },
        ]
      },
      {
        id: '9.2',
        name: 'Stack Problems — Prefix/Infix/Postfix',
        icon: '🧮',
        problems: [
          { id: 'sq7',  name: 'Valid Parentheses',                    diff: 'Easy',   lc: 20    },
          { id: 'sq8',  name: 'Min Stack',                            diff: 'Medium', lc: 155   },
          { id: 'sq9',  name: 'Evaluate Reverse Polish Notation',     diff: 'Medium', lc: 150   },
          { id: 'sq10', name: 'Online Stock Span',                    diff: 'Medium', lc: 901   },
          { id: 'sq11', name: 'Basic Calculator II',                  diff: 'Medium', lc: 227   },
        ]
      },
      {
        id: '9.3',
        name: 'Monotonic Stack',
        icon: '📈',
        problems: [
          { id: 'sq12', name: 'Next Greater Element I',               diff: 'Easy',   lc: 496   },
          { id: 'sq13', name: 'Next Greater Element II',              diff: 'Medium', lc: 503   },
          { id: 'sq14', name: 'Daily Temperatures',                   diff: 'Medium', lc: 739   },
          { id: 'sq15', name: 'Largest Rectangle in Histogram',       diff: 'Hard',   lc: 84    },
          { id: 'sq16', name: 'Maximal Rectangle',                    diff: 'Hard',   lc: 85    },
          { id: 'sq17', name: 'Asteroid Collision',                   diff: 'Medium', lc: 735   },
          { id: 'sq18', name: 'Sum of Subarray Minimums',             diff: 'Medium', lc: 907   },
          { id: 'sq19', name: 'Car Fleet',                            diff: 'Medium', lc: 853   },
          { id: 'sq20', name: 'Trapping Rain Water',                  diff: 'Hard',   lc: 42    },
        ]
      },
      {
        id: '9.4',
        name: 'Queue & Deque Problems',
        icon: '🚌',
        problems: [
          { id: 'sq21', name: 'Sliding Window Maximum',               diff: 'Hard',   lc: 239   },
          { id: 'sq22', name: 'First Negative in Window of Size K',   diff: 'Medium', lc: null  },
          { id: 'sq23', name: 'LRU Cache',                            diff: 'Medium', lc: 146   },
          { id: 'sq24', name: 'LFU Cache',                            diff: 'Hard',   lc: 460   },
        ]
      }
    ]
  },

  {
    id: 10,
    title: 'Sliding Window & Two Pointers',
    icon: '🪟',
    subtopics: [
      {
        id: '10.1',
        name: 'Sliding Window Problems',
        icon: '🔭',
        problems: [
          { id: 'sw1',  name: 'Longest Subarray with Sum K (Positives)',diff: 'Easy',  lc: null  },
          { id: 'sw2',  name: 'Longest Subarray with Sum K (Positives + Negatives)', diff: 'Medium', lc: null },
          { id: 'sw3',  name: 'Longest Substring Without Repeating Chars', diff: 'Medium', lc: 3  },
          { id: 'sw4',  name: 'Longest Repeating Character Replacement', diff: 'Medium', lc: 424  },
          { id: 'sw5',  name: 'Permutation in String',                 diff: 'Medium', lc: 567   },
          { id: 'sw6',  name: 'Fruits into Baskets',                   diff: 'Medium', lc: 904   },
          { id: 'sw7',  name: 'Number of Substrings Containing All 3 Chars', diff: 'Medium', lc: 1358 },
          { id: 'sw8',  name: 'Maximum Points from Cards',             diff: 'Medium', lc: 1423  },
          { id: 'sw9',  name: 'Minimum Window Substring',              diff: 'Hard',   lc: 76    },
          { id: 'sw10', name: 'Count Subarrays with Max Element',      diff: 'Hard',   lc: 2444  },
          { id: 'sw11', name: 'Subarray Product Less Than K',          diff: 'Medium', lc: 713   },
        ]
      },
      {
        id: '10.2',
        name: 'Two Pointers',
        icon: '👆',
        problems: [
          { id: 'tp1',  name: 'Valid Palindrome',                      diff: 'Easy',   lc: 125   },
          { id: 'tp2',  name: 'Two Sum in Sorted Array',               diff: 'Medium', lc: 167   },
          { id: 'tp3',  name: '3-Sum',                                 diff: 'Medium', lc: 15    },
          { id: 'tp4',  name: '4-Sum',                                 diff: 'Medium', lc: 18    },
          { id: 'tp5',  name: 'Container With Most Water',             diff: 'Medium', lc: 11    },
          { id: 'tp6',  name: 'Trapping Rain Water',                   diff: 'Hard',   lc: 42    },
          { id: 'tp7',  name: 'Max Consecutive Ones III',              diff: 'Medium', lc: 1004  },
          { id: 'tp8',  name: 'Count Subarrays Where Max >= Threshold',diff: 'Hard',   lc: 2444  },
        ]
      }
    ]
  },

  {
    id: 11,
    title: 'Heaps',
    icon: '⛰️',
    subtopics: [
      {
        id: '11.1',
        name: 'Heap Fundamentals',
        icon: '📦',
        problems: [
          { id: 'hp1',  name: 'Introduction to Heaps',                diff: 'Easy',   lc: null  },
          { id: 'hp2',  name: 'Min Heap and Max Heap Implementation', diff: 'Easy',   lc: null  },
          { id: 'hp3',  name: 'Check if Array Represents Heap',       diff: 'Easy',   lc: null  },
          { id: 'hp4',  name: 'Convert Min Heap to Max Heap',         diff: 'Easy',   lc: null  },
          { id: 'hp5',  name: 'Heap Sort',                            diff: 'Medium', lc: null  },
        ]
      },
      {
        id: '11.2',
        name: 'Top-K Problems',
        icon: '🏆',
        problems: [
          { id: 'hp6',  name: 'Kth Largest Element in Array',         diff: 'Medium', lc: 215   },
          { id: 'hp7',  name: 'Kth Smallest Element',                 diff: 'Easy',   lc: null  },
          { id: 'hp8',  name: 'Top K Frequent Elements',              diff: 'Medium', lc: 347   },
          { id: 'hp9',  name: 'K Closest Points to Origin',           diff: 'Medium', lc: 973   },
          { id: 'hp10', name: 'Sort K-Sorted (Nearly Sorted) Array',  diff: 'Medium', lc: null  },
          { id: 'hp11', name: 'Last Stone Weight',                    diff: 'Easy',   lc: 1046  },
          { id: 'hp12', name: 'Task Scheduler',                       diff: 'Medium', lc: 621   },
        ]
      },
      {
        id: '11.3',
        name: 'Hard Heap Problems',
        icon: '🔴',
        problems: [
          { id: 'hp13', name: 'Merge K Sorted Lists',                 diff: 'Hard',   lc: 23    },
          { id: 'hp14', name: 'Smallest Range Covering K Lists',      diff: 'Hard',   lc: 632   },
          { id: 'hp15', name: 'Find Median from Data Stream',         diff: 'Hard',   lc: 295   },
          { id: 'hp16', name: 'IPO (Maximize Capital)',               diff: 'Hard',   lc: 502   },
          { id: 'hp17', name: 'Design Twitter',                       diff: 'Medium', lc: 355   },
          { id: 'hp18', name: 'Find K Pairs with Smallest Sums',      diff: 'Medium', lc: 373   },
        ]
      }
    ]
  },

  {
    id: 12,
    title: 'Graphs',
    icon: '🕸️',
    subtopics: [
      {
        id: '12.1',
        name: 'Graph Fundamentals',
        icon: '🗺️',
        problems: [
          { id: 'g1',  name: 'Graph and its Representations',         diff: 'Easy',   lc: null  },
          { id: 'g2',  name: 'BFS Traversal',                         diff: 'Easy',   lc: null  },
          { id: 'g3',  name: 'DFS Traversal',                         diff: 'Easy',   lc: null  },
          { id: 'g4',  name: 'Number of Islands',                     diff: 'Medium', lc: 200   },
          { id: 'g5',  name: 'Flood Fill',                            diff: 'Easy',   lc: 733   },
          { id: 'g6',  name: 'Rotten Oranges',                        diff: 'Medium', lc: 994   },
          { id: 'g7',  name: 'Cycle Detection in Undirected (BFS)',   diff: 'Medium', lc: null  },
          { id: 'g8',  name: 'Cycle Detection in Undirected (DFS)',   diff: 'Medium', lc: null  },
        ]
      },
      {
        id: '12.2',
        name: 'Graph Problems Medium',
        icon: '🟡',
        problems: [
          { id: 'g9',  name: 'Distance of Nearest Cell Having 1',     diff: 'Medium', lc: null  },
          { id: 'g10', name: 'Surrounded Regions',                    diff: 'Medium', lc: 130   },
          { id: 'g11', name: 'Number of Enclaves',                    diff: 'Medium', lc: 1020  },
          { id: 'g12', name: 'Word Ladder I',                         diff: 'Hard',   lc: 127   },
          { id: 'g13', name: 'Word Ladder II',                        diff: 'Hard',   lc: 126   },
          { id: 'g14', name: 'Bipartite Graph (BFS)',                 diff: 'Medium', lc: 785   },
          { id: 'g15', name: 'Bipartite Graph (DFS)',                 diff: 'Medium', lc: 785   },
          { id: 'g16', name: 'Cycle Detection in Directed (DFS)',     diff: 'Medium', lc: 207   },
          { id: 'g17', name: 'Eventual Safe States — BFS/DFS',        diff: 'Medium', lc: 802   },
          { id: 'g18', name: 'Topological Sort (DFS)',                diff: 'Medium', lc: null  },
          { id: 'g19', name: 'Topological Sort (BFS — Kahn\'s)',       diff: 'Medium', lc: null  },
          { id: 'g20', name: 'Course Schedule I',                     diff: 'Medium', lc: 207   },
          { id: 'g21', name: 'Course Schedule II',                    diff: 'Medium', lc: 210   },
          { id: 'g22', name: 'Find Eventual Safe States',             diff: 'Medium', lc: 802   },
          { id: 'g23', name: 'Alien Dictionary',                      diff: 'Hard',   lc: 269   },
        ]
      },
      {
        id: '12.3',
        name: 'Shortest Path Algorithms',
        icon: '🛤️',
        problems: [
          { id: 'g24', name: 'Shortest Path in Directed Acyclic Graph',diff: 'Medium', lc: null  },
          { id: 'g25', name: 'Shortest Path in Undirected Graph',      diff: 'Easy',   lc: null  },
          { id: 'g26', name: 'Word Ladder (Shortest Transformation)',   diff: 'Hard',   lc: 127   },
          { id: 'g27', name: 'Dijkstra\'s Algorithm',                   diff: 'Medium', lc: 743   },
          { id: 'g28', name: 'Bellman Ford Algorithm',                 diff: 'Medium', lc: 743   },
          { id: 'g29', name: 'Floyd Warshall Algorithm',               diff: 'Medium', lc: null  },
          { id: 'g30', name: 'City with Smallest # of Neighbors',      diff: 'Medium', lc: 1334  },
        ]
      },
      {
        id: '12.4',
        name: 'Minimum Spanning Tree',
        icon: '🌲',
        problems: [
          { id: 'g31', name: 'Minimum Spanning Tree (Prim\'s)',         diff: 'Medium', lc: null  },
          { id: 'g32', name: 'Minimum Spanning Tree (Kruskal\'s)',      diff: 'Medium', lc: 1584  },
          { id: 'g33', name: 'Min Cost to Connect All Points',         diff: 'Medium', lc: 1584  },
          { id: 'g34', name: 'Accounts Merge',                        diff: 'Medium', lc: 721   },
          { id: 'g35', name: 'Number of Operations to Make Network Connected', diff: 'Medium', lc: 1319 },
          { id: 'g36', name: 'Swim in Rising Water',                   diff: 'Hard',   lc: 778   },
        ]
      },
      {
        id: '12.5',
        name: 'Union Find',
        icon: '🤝',
        problems: [
          { id: 'g37', name: 'Number of Provinces',                   diff: 'Medium', lc: 547   },
          { id: 'g38', name: 'Find if Path Exists in Graph',          diff: 'Easy',   lc: 1971  },
          { id: 'g39', name: 'Redundant Connection',                  diff: 'Medium', lc: 684   },
          { id: 'g40', name: 'Number of Connected Components',        diff: 'Medium', lc: 323   },
          { id: 'g41', name: 'Graph Valid Tree',                      diff: 'Medium', lc: 261   },
          { id: 'g42', name: 'Most Stones Removed',                   diff: 'Medium', lc: 947   },
          { id: 'g43', name: 'Making a Large Island',                 diff: 'Hard',   lc: 827   },
        ]
      },
      {
        id: '12.6',
        name: 'Hard Graph Problems',
        icon: '🔴',
        problems: [
          { id: 'g44', name: 'Strongly Connected Components (Kosaraju)',diff: 'Hard',  lc: null  },
          { id: 'g45', name: 'Bridges in Graph',                      diff: 'Hard',   lc: 1192  },
          { id: 'g46', name: 'Articulation Point',                    diff: 'Hard',   lc: null  },
          { id: 'g47', name: 'Cheapest Flights K Stops',              diff: 'Medium', lc: 787   },
          { id: 'g48', name: 'Network Delay Time',                    diff: 'Medium', lc: 743   },
        ]
      }
    ]
  },

  {
    id: 13,
    title: 'Dynamic Programming',
    icon: '🧠',
    subtopics: [
      {
        id: '13.1',
        name: 'DP Introduction & 1D DP',
        icon: '📊',
        problems: [
          { id: 'dp1',  name: 'Fibonacci Number',                     diff: 'Easy',   lc: 509   },
          { id: 'dp2',  name: 'Climbing Stairs',                      diff: 'Easy',   lc: 70    },
          { id: 'dp3',  name: 'Frog Jump',                            diff: 'Medium', lc: null  },
          { id: 'dp4',  name: 'Frog Jump with K Distances',           diff: 'Medium', lc: null  },
          { id: 'dp5',  name: 'Maximum Sum of Non-Adjacent Elements', diff: 'Medium', lc: 198   },
          { id: 'dp6',  name: 'House Robber',                         diff: 'Medium', lc: 198   },
          { id: 'dp7',  name: 'House Robber II',                      diff: 'Medium', lc: 213   },
          { id: 'dp8',  name: 'Ninja\'s Training (Max Points)',        diff: 'Medium', lc: null  },
        ]
      },
      {
        id: '13.2',
        name: '2D DP / Grid DP',
        icon: '🗺️',
        problems: [
          { id: 'dp9',  name: 'Unique Paths',                         diff: 'Medium', lc: 62    },
          { id: 'dp10', name: 'Unique Paths II (with Obstacles)',      diff: 'Medium', lc: 63    },
          { id: 'dp11', name: 'Minimum Path Sum',                     diff: 'Medium', lc: 64    },
          { id: 'dp12', name: 'Triangle (Minimum Path Sum)',           diff: 'Medium', lc: 120   },
          { id: 'dp13', name: 'Minimum Falling Path Sum',             diff: 'Medium', lc: 931   },
          { id: 'dp14', name: 'Cherry Pickup II',                     diff: 'Hard',   lc: 1463  },
        ]
      },
      {
        id: '13.3',
        name: 'DP on Subsequences',
        icon: '🔡',
        problems: [
          { id: 'dp15', name: 'Subset Sum Equal to Target',           diff: 'Medium', lc: null  },
          { id: 'dp16', name: 'Partition Equal Subset Sum',           diff: 'Medium', lc: 416   },
          { id: 'dp17', name: 'Partition Array into Two Equal Parts', diff: 'Medium', lc: null  },
          { id: 'dp18', name: 'Count Subsets with Sum K',             diff: 'Medium', lc: null  },
          { id: 'dp19', name: 'Count Partitions with Given Difference',diff: 'Medium', lc: null  },
          { id: 'dp20', name: '0/1 Knapsack',                         diff: 'Medium', lc: null  },
          { id: 'dp21', name: 'Coin Change (Min Coins)',               diff: 'Medium', lc: 322   },
          { id: 'dp22', name: 'Coin Change II (Count Ways)',           diff: 'Medium', lc: 518   },
          { id: 'dp23', name: 'Target Sum',                           diff: 'Medium', lc: 494   },
          { id: 'dp24', name: 'Unbounded Knapsack',                   diff: 'Medium', lc: null  },
          { id: 'dp25', name: 'Rod Cutting Problem',                  diff: 'Medium', lc: null  },
        ]
      },
      {
        id: '13.4',
        name: 'DP on Strings',
        icon: '🔤',
        problems: [
          { id: 'dp26', name: 'Longest Common Subsequence (LCS)',     diff: 'Medium', lc: 1143  },
          { id: 'dp27', name: 'Print LCS',                           diff: 'Medium', lc: null  },
          { id: 'dp28', name: 'Longest Common Substring',             diff: 'Medium', lc: null  },
          { id: 'dp29', name: 'Longest Palindromic Subsequence',      diff: 'Medium', lc: 516   },
          { id: 'dp30', name: 'Minimum Insertions to make Palindrome',diff: 'Medium', lc: 1312  },
          { id: 'dp31', name: 'Minimum Insertions/Deletions in String',diff: 'Medium',lc: 583   },
          { id: 'dp32', name: 'Shortest Common Supersequence',        diff: 'Hard',   lc: 1092  },
          { id: 'dp33', name: 'Edit Distance',                        diff: 'Hard',   lc: 72    },
          { id: 'dp34', name: 'Wildcard Matching',                    diff: 'Hard',   lc: 44    },
          { id: 'dp35', name: 'Regular Expression Matching',          diff: 'Hard',   lc: 10    },
          { id: 'dp36', name: 'Distinct Subsequences',               diff: 'Hard',   lc: 115   },
        ]
      },
      {
        id: '13.5',
        name: 'DP on Stocks',
        icon: '📈',
        problems: [
          { id: 'dp37', name: 'Best Time to Buy and Sell Stock',      diff: 'Easy',   lc: 121   },
          { id: 'dp38', name: 'Best Time to Buy and Sell Stock II',   diff: 'Medium', lc: 122   },
          { id: 'dp39', name: 'Best Time to Buy and Sell Stock III',  diff: 'Hard',   lc: 123   },
          { id: 'dp40', name: 'Best Time to Buy and Sell Stock IV',   diff: 'Hard',   lc: 188   },
          { id: 'dp41', name: 'Stock with Cooldown',                  diff: 'Medium', lc: 309   },
          { id: 'dp42', name: 'Stock with Transaction Fee',           diff: 'Medium', lc: 714   },
        ]
      },
      {
        id: '13.6',
        name: 'DP on LIS',
        icon: '📏',
        problems: [
          { id: 'dp43', name: 'Longest Increasing Subsequence',       diff: 'Medium', lc: 300   },
          { id: 'dp44', name: 'Print LIS',                           diff: 'Medium', lc: null  },
          { id: 'dp45', name: 'Longest Increasing Subsequence (BSopt)',diff: 'Medium', lc: 300   },
          { id: 'dp46', name: 'Largest Divisible Subset',             diff: 'Medium', lc: 368   },
          { id: 'dp47', name: 'Longest String Chain',                 diff: 'Medium', lc: 1048  },
          { id: 'dp48', name: 'Longest Bitonic Subsequence',          diff: 'Medium', lc: null  },
          { id: 'dp49', name: 'Number of LIS',                        diff: 'Medium', lc: 673   },
        ]
      },
      {
        id: '13.7',
        name: 'MCM / Interval DP',
        icon: '🔲',
        problems: [
          { id: 'dp50', name: 'Matrix Chain Multiplication',          diff: 'Hard',   lc: null  },
          { id: 'dp51', name: 'Minimum Cost to Cut a Stick',          diff: 'Hard',   lc: 1547  },
          { id: 'dp52', name: 'Burst Balloons',                       diff: 'Hard',   lc: 312   },
          { id: 'dp53', name: 'Palindrome Partitioning II',           diff: 'Hard',   lc: 132   },
          { id: 'dp54', name: 'Partition Array for Maximum Sum',      diff: 'Medium', lc: 1043  },
          { id: 'dp55', name: 'Maximum Rectangle in Binary Matrix',   diff: 'Hard',   lc: 85    },
          { id: 'dp56', name: 'Count Square Submatrices',             diff: 'Medium', lc: 1277  },
        ]
      }
    ]
  }
];
