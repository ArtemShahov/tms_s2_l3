// /** 
//  * Что должно вывестись в консоль? Подумайте головой, сейчас - ваш моск и есть консоль!
//  * */

console.log(19 % 3 + +'6');
    // 7
console.log(i++);
    // undefind
console.log(+'5p');
    // NaN
console.log('pineapple'[4]);
    // 'a'
console.log('pear'.length);
    // 4
console.log([][4]);
    // undefind
console.log(['dog', 'fish', 'giraffe', 'hippo'][2][3]);
    // 'a'
console.log(('0' && 5 > 4 || !'🔥🔥🔥🔥🔥') && '🚀🚀🚀🚀🚀');
    // '🚀🚀🚀🚀🚀'
console.log(+'6' % 3 === 1 ? 'true' : 'false');
    // 'false'
console.log(`сейчас %c${new Date}`, 'color:red');


// /** 
//  * Конкатенируйте все слова в массиве, которые начинаются с буквы b и выведите результат в консоль 
//  * */

const arr1 = [34, [], "🔥🔥", "barbecues", "begin", "🚀🚀🚀", "by", "battering", true, "bacon"];

function joinArray(arr){
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if(arr1[i][0] === 'b'){
            res += arr1[i] + ' ';
        }    
    }
    return res;
}

console.log(joinArray(arr1));
// barbecues begin by battering bacon 

// /** 
//  * Дана матрица, проставьте 1цы в шахматном порядке
//  */

const matrix1 =
    [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ];


function getChessMatrix(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if((i + j) % 2 === 0){
                arr[i][j] = 1;
            }        
        }
    }
    return arr;
}

console.log(getChessMatrix(matrix1));

/** 
 * Дан пустой массив, создайте матрицу 5х5, заполните её числами по порядку, начиная с 1цы (1, 2, 3, ... 25)
 */

const matrix2 = [];

function getOrderedMatrix(arr, rows, columns){
    let count = 1;
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i][j] = count++;
        }        
    }
    return arr;
}

console.log(getOrderedMatrix(matrix2, 5, 5));

// /** 
//  * Посложнее! Есть шахматная доска, расставьте фигуры ('пешка', 'конь' ...) в правильном порядке перед началом игры
//  */

const matrix3 =
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

function resetBoard(board){
    const pawnRow = ['пешка', 'пешка', 'пешка', 'пешка', 'пешка', 'пешка', 'пешка', 'пешка'];
    const figureRow = ['ладья', 'конь', 'слон', 'ферзь', 'король', 'слон', 'конь', 'ладья'];
    board[0] = board[7] = figureRow;
    board[1] = board[6]  = pawnRow;
    return board;
}

console.log(resetBoard(matrix3));
