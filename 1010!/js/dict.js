var color = {
    default: 'default',
    colorList: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'],
    random: function() {
        return this.colorList[Math.floor(Math.random() * this.colorList.length)];
    }
};

var matrix = {
    matrixList: [
        //one block
        [[1]],
        //row
        [[1,1,1,1,1]],
        [[1,1,1,1]],
        [[1,1,1]],
        [[1,1]],
        //column
        [[1],[1],[1],[1],[1]],
        [[1],[1],[1],[1]],
        [[1],[1],[1]],
        [[1],[1]],
        //2*2 blocks
        [[1,1],[1,1]],
        [[1,1],[1,0]],
        [[1,1],[0,1]],
        [[1,0],[1,1]],
        [[0,1],[1,1]],
        //3*3 blocks
        [[1,1,1],[1,1,1],[1,1,1]],
        [[1,1,1],[1,0,0],[1,0,0]],
        [[1,1,1],[0,0,1],[0,0,1]],
        [[1,0,0],[1,0,0],[1,1,1]],
        [[0,0,1],[0,0,1],[1,1,1]]
    ],
    random: function() {
        return this.matrixList[Math.floor(Math.random() * this.matrixList.length)];
    }
};

var params = {
    currentBrick : null,
    flag: false
};
