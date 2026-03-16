/* ═══════════════════════════════════════════════════════════
   DSA Prep Pro — Code Editor (Monaco + Piston API)
   ═══════════════════════════════════════════════════════════
   Features:
   - Monaco Editor (VS Code's editor engine)
   - 10+ programming languages
   - Live code execution via Piston API (free, no API key)
   - Custom input support
   - Execution history
   ═══════════════════════════════════════════════════════════ */

// ── Language Configurations ──────────────────────────────
const LANGUAGES = [
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    monacoLang: 'java',
    pistonLang: 'java',
    pistonVersion: '15.0.2',
    defaultCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Example: Two Sum
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        
        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
    
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    monacoLang: 'python',
    pistonLang: 'python',
    pistonVersion: '3.10.0',
    defaultCode: `from typing import List
from collections import defaultdict

def two_sum(nums: List[int], target: int) -> List[int]:
    """Classic Two Sum - O(n) with hash map"""
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
print(f"Input: nums={nums}, target={target}")
print(f"Output: {result}")
`,
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '⚡',
    monacoLang: 'cpp',
    pistonLang: 'c++',
    pistonVersion: '10.2.0',
    defaultCode: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.count(complement)) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};

int main() {
    Solution sol;
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    
    auto result = sol.twoSum(nums, target);
    cout << "Indices: [" << result[0] << ", " << result[1] << "]" << endl;
    
    return 0;
}`,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '💛',
    monacoLang: 'javascript',
    pistonLang: 'javascript',
    pistonVersion: '18.15.0',
    defaultCode: `/**
 * Two Sum - O(n) Hash Map approach
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Test
const nums = [2, 7, 11, 15];
const target = 9;
console.log(\`Input: nums=[\${nums}], target=\${target}\`);
console.log(\`Output: [\${twoSum(nums, target)}]\`);
`,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '🔷',
    monacoLang: 'typescript',
    pistonLang: 'typescript',
    pistonVersion: '5.0.3',
    defaultCode: `function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums: number[] = [2, 7, 11, 15];
const target: number = 9;
console.log(\`Result: \${JSON.stringify(twoSum(nums, target))}\`);
`,
  },
  {
    id: 'go',
    name: 'Go',
    icon: '🔵',
    monacoLang: 'go',
    pistonLang: 'go',
    pistonVersion: '1.16.2',
    defaultCode: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
    for i, num := range nums {
        complement := target - num
        if idx, ok := m[complement]; ok {
            return []int{idx, i}
        }
        m[num] = i
    }
    return []int{}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9
    result := twoSum(nums, target)
    fmt.Printf("Indices: %v\\n", result)
}`,
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: '🦀',
    monacoLang: 'rust',
    pistonLang: 'rust',
    pistonVersion: '1.68.2',
    defaultCode: `use std::collections::HashMap;

fn two_sum(nums: &[i32], target: i32) -> Vec<usize> {
    let mut map = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        let complement = target - num;
        if let Some(&idx) = map.get(&complement) {
            return vec![idx, i];
        }
        map.insert(num, i);
    }
    vec![]
}

fn main() {
    let nums = vec![2, 7, 11, 15];
    let target = 9;
    let result = two_sum(&nums, target);
    println!("Indices: {:?}", result);
}`,
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: '🟣',
    monacoLang: 'csharp',
    pistonLang: 'csharp.net',
    pistonVersion: '6.12.0',
    defaultCode: `using System;
using System.Collections.Generic;

class Program {
    static int[] TwoSum(int[] nums, int target) {
        var map = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (map.ContainsKey(complement)) {
                return new int[] { map[complement], i };
            }
            map[nums[i]] = i;
        }
        return Array.Empty<int>();
    }
    
    static void Main() {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        var result = TwoSum(nums, target);
        Console.WriteLine($"Indices: [{result[0]}, {result[1]}]");
    }
}`,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '🟠',
    monacoLang: 'kotlin',
    pistonLang: 'kotlin',
    pistonVersion: '1.8.20',
    defaultCode: `fun twoSum(nums: IntArray, target: Int): IntArray {
    val map = mutableMapOf<Int, Int>()
    for (i in nums.indices) {
        val complement = target - nums[i]
        map[complement]?.let { return intArrayOf(it, i) }
        map[nums[i]] = i
    }
    return intArrayOf()
}

fun main() {
    val nums = intArrayOf(2, 7, 11, 15)
    val target = 9
    val result = twoSum(nums, target)
    println("Indices: [" + result.joinToString(", ") + "]")
}`,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: '💎',
    monacoLang: 'ruby',
    pistonLang: 'ruby',
    pistonVersion: '3.0.1',
    defaultCode: `def two_sum(nums, target)
  map = {}
  nums.each_with_index do |num, i|
    complement = target - num
    return [map[complement], i] if map.key?(complement)
    map[num] = i
  end
  []
end

nums = [2, 7, 11, 15]
target = 9
result = two_sum(nums, target)
puts "Indices: #{result}"`,
  },
];

// ── Editor State ─────────────────────────────────────────
let monacoEditor = null;
let currentLanguage = 'java';
let isRunning = false;
let executionHistory = [];

// ── Initialize Monaco Editor ─────────────────────────────
function initCodeEditor() {
  // Configure AMD loader for Monaco
  require.config({
    paths: {
      vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs'
    }
  });

  // Ensure proper worker setup
  window.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      if (label === 'json') {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/' };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
        `)}`;
      }
      if (label === 'css' || label === 'less' || label === 'scss') {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/' };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
        `)}`;
      }
      if (label === 'html' || label === 'handlebars' || label === 'razor') {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/' };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
        `)}`;
      }
      if (label === 'typescript' || label === 'javascript') {
        return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
          self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/' };
          importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
        `)}`;
      }
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = { baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/' };
        importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');
      `)}`;
    }
  };

  require(['vs/editor/editor.main'], function () {
    // Define custom dark theme matching our site
    monaco.editor.defineTheme('dsaPrep', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'C586C0' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'type', foreground: '4EC9B0' },
        { token: 'function', foreground: 'DCDCAA' },
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'class', foreground: '4EC9B0' },
      ],
      colors: {
        'editor.background': '#0d1117',
        'editor.foreground': '#c9d1d9',
        'editor.lineHighlightBackground': '#161b22',
        'editor.selectionBackground': '#264f78',
        'editorCursor.foreground': '#818cf8',
        'editor.inactiveSelectionBackground': '#1c2333',
        'editorLineNumber.foreground': '#484f58',
        'editorLineNumber.activeForeground': '#818cf8',
        'editorIndentGuide.background': '#21262d',
        'editorIndentGuide.activeBackground': '#30363d',
        'editorBracketMatch.background': '#264f7833',
        'editorBracketMatch.border': '#818cf8',
        'scrollbarSlider.background': '#484f5833',
        'scrollbarSlider.hoverBackground': '#484f5855',
        'scrollbarSlider.activeBackground': '#484f5888',
        'minimap.background': '#0d1117',
      }
    });

    const lang = LANGUAGES.find(l => l.id === currentLanguage);

    monacoEditor = monaco.editor.create(document.getElementById('monaco-container'), {
      value: lang.defaultCode,
      language: lang.monacoLang,
      theme: 'dsaPrep',
      fontSize: 14,
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      fontLigatures: true,
      lineNumbers: 'on',
      minimap: { enabled: true, scale: 1 },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      padding: { top: 16, bottom: 16 },
      renderLineHighlight: 'all',
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      bracketPairColorization: { enabled: true },
      guides: {
        bracketPairs: true,
        indentation: true,
      },
      suggest: {
        showKeywords: true,
        showSnippets: true,
      },
      tabSize: 4,
      wordWrap: 'off',
      folding: true,
      links: true,
      roundedSelection: true,
      renderWhitespace: 'selection',
    });

    // Ctrl+Enter to run
    monacoEditor.addAction({
      id: 'run-code',
      label: 'Run Code',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
      run: function () {
        runCode();
      }
    });

    // Ctrl+S to save (prevent default)
    monacoEditor.addAction({
      id: 'save-code',
      label: 'Save Code',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
      run: function () {
        saveEditorCode();
      }
    });
  });
}

// ── Language Selector ────────────────────────────────────
function initLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (!selector) return;

  selector.innerHTML = LANGUAGES.map(lang => `
    <option value="${lang.id}" ${lang.id === currentLanguage ? 'selected' : ''}>
      ${lang.icon} ${lang.name}
    </option>
  `).join('');

  selector.addEventListener('change', (e) => {
    switchLanguage(e.target.value);
  });

  // Init language tabs
  const tabs = document.getElementById('lang-tabs');
  if (tabs) {
    const popularLangs = ['java', 'python', 'cpp', 'javascript', 'go'];
    tabs.innerHTML = popularLangs.map(langId => {
      const lang = LANGUAGES.find(l => l.id === langId);
      return `<button class="lang-tab ${langId === currentLanguage ? 'active' : ''}" 
                      data-lang="${langId}" onclick="switchLanguage('${langId}')">
                ${lang.icon} ${lang.name}
              </button>`;
    }).join('');
  }
}

function switchLanguage(langId) {
  // Save current code
  saveEditorCode();

  currentLanguage = langId;
  const lang = LANGUAGES.find(l => l.id === langId);
  if (!lang) return;

  // Load saved code or default
  const savedCode = localStorage.getItem(`dsaprep_code_${langId}`);
  const code = savedCode || lang.defaultCode;

  if (monacoEditor) {
    const model = monacoEditor.getModel();
    monaco.editor.setModelLanguage(model, lang.monacoLang);
    monacoEditor.setValue(code);
  }

  // Update selector
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = langId;

  // Update tabs
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === langId);
  });

  // Update run button text
  const runLabel = document.getElementById('run-label');
  if (runLabel) runLabel.textContent = `Run ${lang.name}`;
}

function saveEditorCode() {
  if (monacoEditor) {
    localStorage.setItem(`dsaprep_code_${currentLanguage}`, monacoEditor.getValue());
  }
}

// ── Code Execution (Piston API) ──────────────────────────
const PISTON_API = 'https://emkc.org/api/v1/piston/execute';

async function runCode() {
  if (isRunning) return;
  if (!monacoEditor) return;

  isRunning = true;
  const runBtn = document.getElementById('run-btn');
  const output = document.getElementById('code-output');
  const execTime = document.getElementById('exec-time');
  const statusIndicator = document.getElementById('exec-status');

  // Update UI
  if (runBtn) {
    runBtn.classList.add('running');
    runBtn.innerHTML = '<span class="run-spinner"></span> Running...';
  }
  if (output) {
    output.textContent = '⏳ Executing code...';
    output.className = 'output-content running';
  }
  if (statusIndicator) {
    statusIndicator.className = 'exec-status-dot running';
  }

  const lang = LANGUAGES.find(l => l.id === currentLanguage);
  const code = monacoEditor.getValue();
  const stdin = document.getElementById('code-stdin')?.value || '';

  const startTime = performance.now();

  try {
    const response = await fetch(PISTON_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: lang.pistonLang,
        source: code,
        stdin: stdin,
      }),
    });

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    // Process output
    let outputText = '';
    let hasError = false;

    if (result.message) {
      outputText += `❌ Error:\n${result.message}\n`;
      hasError = true;
    } else {
      if (result.stdout) {
        outputText += result.stdout;
      }
      if (result.stderr) {
        outputText += `\n⚠️ Error/Warning:\n${result.stderr}`;
        hasError = true;
      }
    }

    if (!outputText.trim() && result.output) {
      outputText = result.output;
    }

    if (!outputText.trim()) {
      outputText = '(No output)';
    }

    if (output) {
      output.textContent = outputText;
      output.className = `output-content ${hasError ? 'error' : 'success'}`;
    }
    if (execTime) {
      execTime.textContent = `${duration}s`;
    }
    if (statusIndicator) {
      statusIndicator.className = `exec-status-dot ${hasError ? 'error' : 'success'}`;
    }

    // Add to history
    executionHistory.unshift({
      language: lang.name,
      icon: lang.icon,
      time: new Date().toLocaleTimeString(),
      duration: `${duration}s`,
      status: hasError ? 'error' : 'success',
    });
    renderExecutionHistory();

  } catch (error) {
    if (output) {
      output.textContent = `❌ Error: ${error.message}\n\nMake sure you have an internet connection.\nThe Piston API is used for code execution.`;
      output.className = 'output-content error';
    }
    if (statusIndicator) {
      statusIndicator.className = 'exec-status-dot error';
    }
  } finally {
    isRunning = false;
    if (runBtn) {
      runBtn.classList.remove('running');
      runBtn.innerHTML = '▶ <span id="run-label">Run ' + (LANGUAGES.find(l => l.id === currentLanguage)?.name || '') + '</span>';
    }
  }
}

// ── Execution History ────────────────────────────────────
function renderExecutionHistory() {
  const container = document.getElementById('exec-history');
  if (!container) return;

  container.innerHTML = executionHistory.slice(0, 8).map(item => `
    <div class="history-item ${item.status}">
      <span class="history-icon">${item.icon}</span>
      <span class="history-lang">${item.language}</span>
      <span class="history-time">${item.time}</span>
      <span class="history-duration">${item.duration}</span>
      <span class="history-status-dot ${item.status}"></span>
    </div>
  `).join('');
}

// ── Editor Actions ───────────────────────────────────────
function clearOutput() {
  const output = document.getElementById('code-output');
  if (output) {
    output.textContent = 'Output will appear here after running your code...';
    output.className = 'output-content';
  }
  const statusIndicator = document.getElementById('exec-status');
  if (statusIndicator) {
    statusIndicator.className = 'exec-status-dot';
  }
}

function resetCode() {
  const lang = LANGUAGES.find(l => l.id === currentLanguage);
  if (lang && monacoEditor) {
    monacoEditor.setValue(lang.defaultCode);
    localStorage.removeItem(`dsaprep_code_${currentLanguage}`);
  }
}

function copyCode() {
  if (!monacoEditor) return;
  navigator.clipboard.writeText(monacoEditor.getValue()).then(() => {
    const btn = document.getElementById('copy-btn');
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '✅ Copied!';
      setTimeout(() => { btn.innerHTML = original; }, 1500);
    }
  });
}

function toggleStdin() {
  const stdinContainer = document.getElementById('stdin-container');
  if (stdinContainer) {
    stdinContainer.classList.toggle('hidden');
  }
}

// ── Font Size Controls ───────────────────────────────────
function increaseFontSize() {
  if (monacoEditor) {
    const current = monacoEditor.getOption(monaco.editor.EditorOption.fontSize);
    monacoEditor.updateOptions({ fontSize: Math.min(current + 1, 28) });
  }
}

function decreaseFontSize() {
  if (monacoEditor) {
    const current = monacoEditor.getOption(monaco.editor.EditorOption.fontSize);
    monacoEditor.updateOptions({ fontSize: Math.max(current - 1, 10) });
  }
}
