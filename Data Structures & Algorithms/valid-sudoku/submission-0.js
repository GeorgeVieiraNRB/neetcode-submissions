class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let size_y = board.length
        const rows = Array.from({ length: 9 },() => new Map());
        const cols = Array.from({ length: 9 },() => new Map());
        const quads = Array.from({ length: 3 },() => Array.from({ length: 3 },() => new Map()));
        for(let y = 0; y < size_y ; y++){
            for(let x = 0 ; x < board[y].length ; x++){
                let value = board[x][y]
                
                if(value==='.'){continue}
                if(cols[y].has(value)) return false
                if(rows[x].has(value)) return false
                if(quads[ Math.floor( x / 3 )][Math.floor( y / 3 )].has(value)) return false

                cols[y].set(value,1)
                rows[x].set(value,1)
                quads[ Math.floor( x / 3 )][Math.floor( y / 3 )].set(value,1)
            }
        }
        return true
    }
}
