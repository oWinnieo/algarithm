/*
51. N 皇后
困难
相关标签
相关企业
按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

示例 1：


输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：[["Q"]]
 

提示：

1 <= n <= 9
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
};

const queen_250418_1 = (n) => {
    let board = new Array(n).fill(new Array(n).fill(''))
    let rowInit = new Array(n).fill('.').join('')
    // let board = new Array(n).fill(rowInit)
    console.log('board', board)
    let resArr = []
    let boardStrArr = []

    const ifIsValid = (row, col, boardOri, n) => {
        // const checkRow = board[row].filter(value => value === 'Q')
        // console.log('boardOri', boardOri)
        // const boardForCheck = boardOri.map(row => {
        //     return row.split('')
        // })
        const boardForCheck = boardOri
        // console.log('boardForCheck', boardForCheck)
        for (let i = 0; i < row; i++) {
            if (boardForCheck[i][col] === 'Q') return false
        }
        for (let j = 0; j < n; j++) {
            if (boardForCheck[row][j] === 'Q') return false
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (boardForCheck[i][j] === 'Q') return false
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (boardForCheck[i][j] === 'Q') return false
        }
        return true
    }

    const dfs = (board, row, col) => {
        if (row >= n) {
            const boardRes = JSON.parse(JSON.stringify(board))
            // resArr.push(boardStrArr.slice(0))
            resArr.push(boardRes)
            return
        }
        for (let col = 0; col < n; col++) {
            if (ifIsValid(row, col, board, n)) {
                let rowCurr = Array.from({length: n}, (val, index) => {
                    return index === col ? 'Q' : '.'
                })
                // console.log('rowCurr', rowCurr)
                board[row][col] = 'Q'
                // board[row] = rowCurr.join('')
                // boardStrArr.push(board[row].slice(0))
                debugger;
                dfs(board, row + 1, col)
                // board[row] = rowInit
                board[row][col] = '.'
                // boardStrArr.pop()
                debugger;
            }
        }
    }
    // for (let row = 0; row < n; row++) {
    //     for (let col = 0; col < n; col++) {
    //         debugger;
    dfs(JSON.parse(JSON.stringify(board)), 0, 0)
    //     }
    // }
    return resArr
}

const queue_250418_2 = (n) => {
    let resArr = []
    let board = new Array(n).fill(new Array(n).fill(''))
    console.log('board', board)

    const isValid = (board, row, col) => {
        for (let j = 0; j < n; j++) {
            if (board[row][j] === 'Q') return false
        }
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false
        }
        return true
    }
    const dfs = (board, row, col) => {
        if (row >= n) {
            resArr.push(JSON.parse(JSON.stringify(board)))
            return
        }
        for (let j = 0; j < n; j++) {
            if (isValid(board, row, j)) {
                board[row][j] = 'Q'
                dfs(board, row + 1, j)
                board[row][j] = ''
            }
        }
    }
    dfs(JSON.parse(JSON.stringify(board)), 0, 0)
    return resArr
}

var queue_demo_250418_1 = function (n) {
	const ans = [];
	const path = [];
	const matrix = new Array(n).fill(0).map(() => new Array(n).fill("."));
    // console.log('matrix', matrix)
	// 判断是否能相互攻击
	const canAttack = (matrix, row, col) => {
		let i;
		let j;
		// 判断正上方和正下方是否有皇后
		for (i = 0, j = col; i < n; i++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		// 判断正左边和正右边是否有皇后
		for (i = row, j = 0; j < n; j++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		// 判断左上方是否有皇后
		for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
         // 判断右上方是否有皇后
		for (i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		return false;
	};
	const backtrack = (matrix, row, col) => {
		if (path.length === matrix.length) {
			ans.push(path.slice());
			return;
		}
		for (let i = row; i < matrix.length; i++) {
			for (let j = col; j < matrix.length; j++) {
				// 当前位置会导致互相攻击 继续下一轮搜索
				if (canAttack(matrix, i, j)) {
					continue;
				}
				matrix[i][j] = "Q";
				path.push(matrix[i].join("")); // wtest backup
                // path.push(matrix[i]);
				// 另起一行搜索 同一行只能有一个皇后
				backtrack(matrix, i + 1, 0);
				matrix[i][j] = ".";
				path.pop();
			}
		}
	};
	backtrack(matrix, 0, 0);
	return ans;
};

const res1_demo = queue_demo_250418_1(4)
console.log('res1_demo', res1_demo)
// const res2_demo = queue_demo_250418_1(1)
// console.log('res2_demo', res2_demo)

const res1 = queue_250418_2(4)
console.log('res1', res1)
const res2 = queue_250418_2(1)
console.log('res2', res2)