/*
79. 单词搜索
中等
相关标签
相关企业
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例 1：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
示例 3：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
 

提示：

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board 和 word 仅由大小写英文字母组成
 

进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？
*/
const board1 = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
const board1_demo = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]
const word1 = 'ABCCED'
const word2 = 'SEE'
const word3 = 'ABCB'
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
};



const wordSearch_250417_1 = (board, word) => {
    let m = board.length
    let n = board[0].length
    let usedBoard = new Array(m)
    for (let i = 0; i < m; i++) {
        usedBoard[i] = Array.from({length: n}, () => false)
    }
    console.log('usedBoard', usedBoard)
    const crossBorder = (i, j) => {
        return i < 0 || i >= m || j < 0 || j >= n
    }
    // const insideBoard = (i, j) => {
    //     return i >= 0 && i 
    // }

    const dfs = (i, j, indexCurr) => {
        debugger;
        if (usedBoard[i][j] || board[i][j] !== word[indexCurr]) return false
        if (board[i][j] === word[indexCurr] && indexCurr === word.length - 1) {
            return true
        }
        

        // let temp = board[i][j]
        // board[i][j] = undefined
        usedBoard[i][j] = true

        if (!crossBorder(i - 1, j) && dfs(i - 1, j, indexCurr + 1)) return true
        if (!crossBorder(i, j + 1) && dfs(i, j + 1, indexCurr + 1)) return true
        if (!crossBorder(i + 1, j) && dfs(i + 1, j, indexCurr + 1)) return true
        if (!crossBorder(i, j - 1) && dfs(i, j - 1, indexCurr + 1)) return true

        // const searchUp = () => {
        //     if (!crossBorder(i - 1, j) && dfs(i - 1, j, indexCurr + 1)) return true
        // }
        // const searchRight = () => {
        //     if (!crossBorder(i, j + 1) && dfs(i, j + 1, indexCurr + 1)) return true
        // }
        // const searchDown = () => {
        //     if (!crossBorder(i + 1, j) && dfs(i + 1, j, indexCurr + 1)) return true
        // }
        // const searchLeft = () => {
        //     if (!crossBorder(i, j - 1) && dfs(i, j - 1, indexCurr + 1)) return true
        // }
        // const searchRound = () => {
        //     if (searchUp()
        //         || searchRight()
        //         || searchDown()
        //         || searchLeft()
        //     ) return true
        // }
        // if (searchRound()) {
        //     return true
        // }
        
        // board[i][j] = temp
        usedBoard[i][j] = false

        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }
    // const wtest1 = board[0][2]
    // console.log('wtest1', wtest1)
    return false
}

const exist_demo_250417_1 = (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m);    // 二维矩阵used，存放bool值
    for (let i = 0; i < m; i++) {
        used[i] = new Array(n);
    }
    // canFind 判断当前点是否是目标路径上的点
    const canFind = (row, col, i) => { // row col 当前点的坐标，i当前考察的word字符索引
        if (i == word.length) {        // 递归的出口 i越界了就返回true
            return true;
        }
        if (row < 0 || row >= m || col < 0 || col >= n) { // 当前点越界 返回false
            return false;
        }
        if (used[row][col] || board[row][col] != word[i]) { // 当前点已经访问过，或，非目标点
            return false;
        }
        // 排除掉所有false的情况，当前点暂时没毛病，可以继续递归考察
        used[row][col] = true;  // 记录一下当前点被访问了
        // canFindRest：基于当前选择的点[row,col]，能否找到剩余字符的路径。
        const canFindRest = canFind(row + 1, col, i + 1) || canFind(row - 1, col, i + 1) ||
            canFind(row, col + 1, i + 1) || canFind(row, col - 1, i + 1); 

        if (canFindRest) { // 基于当前点[row,col]，可以为剩下的字符找到路径
            return true;    
        }
        used[row][col] = false; // 不能为剩下字符找到路径，返回false，撤销当前点的访问状态
        return false;
    };

    for (let i = 0; i < m; i++) { // 遍历找起点，作为递归入口
      for (let j = 0; j < n; j++) {
        if (board[i][j] == word[0] && canFind(i, j, 0)) { // 找到起点且递归结果为真，找到目标路径
          return true; 
        }
      }
    }
    return false; // 怎么样都没有返回true，则返回false
};

// 作者：笨猪爆破组
// 链接：https://leetcode.cn/problems/word-search/solutions/411749/shou-hua-tu-jie-79-dan-ci-sou-suo-dfs-si-lu-de-cha/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

const wordSearch_250417_2 = (board, word) => {
    let m = board.length
    let n = board[0].length
    let usedBoard = new Array(m)
    for (let i = 0; i < m; i++) {
        usedBoard[i] = Array.from({length: n}, () => false)
    }

    const ifInsideBoard = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n
    }

    const dfs = (i, j, index) => {
        if (usedBoard[i][j] || board[i][j] !== word[index]) return false
        if (board[i][j] === word[index] && index >= word.length - 1) return true

        usedBoard[i][j] = true
        if (ifInsideBoard(i - 1, j) && dfs(i - 1, j, index + 1)) return true
        if (ifInsideBoard(i, j + 1) && dfs(i, j + 1, index + 1)) return true
        if (ifInsideBoard(i + 1, j) && dfs(i + 1, j, index + 1)) return true
        if (ifInsideBoard(i, j - 1) && dfs(i, j - 1, index + 1)) return true
        usedBoard[i][j] = false

        return false
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }
    return false
}

const wordSearch_250418_1 = (board, word) => {
    let m = board.length;
    let n = board[0].length;
    let usedBoard = (new Array(m).fill(new Array(n).fill(false)))
    console.log('usedBoard', usedBoard)
    const ifInsideBoard = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n
    }
    const dfs = (i, j, index) => {
        if (usedBoard[i][j] || board[i][j] !== word[index]) return false
        if (board[i][j] === word[index] && index >= word.length - 1) return true

        usedBoard[i][j] = true
        if (ifInsideBoard(i - 1, j) && dfs(i - 1, j, index + 1)) return true
        if (ifInsideBoard(i, j + 1) && dfs(i, j + 1, index + 1)) return true
        if (ifInsideBoard(i + 1, j) && dfs(i + 1, j, index + 1)) return true
        if (ifInsideBoard(i, j - 1) && dfs(i, j - 1, index + 1)) return true
        usedBoard[i][j] = false

        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, 0)
        }
    }
    return false
}

console.log('word1', word1,
    'word2', word2,
    'word3', word3
)

const res1 = wordSearch_250418_1(board1, word1)
console.log('wordSearch_250418_1 res1', res1)
const res2 = wordSearch_250417_2(board1, word2)
console.log('res2', res2)
const res3 = wordSearch_250417_2(board1, word3)
console.log('res3', res3)

const wtest_arr1 = new Array(5)
console.log('wtest_arr1', wtest_arr1)


const res1_demo = exist_demo_250417_1(board1_demo, word1)
console.log('exist_demo_250417_1 res1_demo', res1_demo)
const res2_demo = exist_demo_250417_1(board1_demo, word2)
console.log('res2_demo', res2_demo)
const res3_demo = exist_demo_250417_1(board1_demo, word3)
console.log('res3_demo', res3_demo)