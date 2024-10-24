/**
 * Homer 非常喜欢两种类型的汉堡，一种汉堡需要花费m分钟，另一种需要花费n分钟。
 * 假如Homer总共只有t分钟，你需要找到一种方法使得Homer <没有浪费任何时间的情况下><吃最大数量的汉堡>。
 * （通俗来讲，假如吃a个第一种汉堡，吃b个第二种汉堡，首先找到一种方式 a * m + b * n == t，这是没有浪费时间）
 * （吃最大汉堡数量也就是说，使 a + b 的值最大）
 * 
 * Input:
 *  - 输入包含3个整数在一排，分别代表 m, n, t （0 < m, n, t < 10000）
 * Output:
 *  - 输出Homer在没有浪费时间的情况下，吃的最大汉堡数量。
 * Case 1: m = 4, n = 9, t = 22
 *  答案是 3， Homer吃2个9分钟的汉堡，以及一个4分钟的汉堡。
 * Case 2: m = 4, n = 9, t = 54.
 *  答案是11， Homer 吃9个4分钟的汉堡，以及两个9分钟的汉堡。
 *  （虽然吃6个9分钟的汉堡也可以消耗完54分钟，但是11个汉堡更多）
 */
/**
 * 
 * @param {2} burger1 
 * @param {3} burger2 
 * @param {15} total_time 
 * @returns 
 */
/* 2, 4, 88 会卡住 */
const compute_max_burger = (burger1, burger2, total_time) => {
    if (total_time === 0) return 0;
    if (total_time < 0) return -1;
    /* predictive *
    if (burger1 === 0 && burger2 === 0) return 0;
    if (burger1 === 0) return burger2;
    if (burger2 === 0) return burger1;
    if (burger1 === burger2) return burger1 + burger2;
    if (burger1 > burger2) return burger1 + compute_max_burger(burger1 - burger2, burger2, total_time - 1);
    if (burger1 < burger2) return burger2 + compute_max_burger(burger1, burger2 - burger1, total_time - 1);
    /* /predictive */
    /**
     * recursive 要做出选择，选1还是2，选不同的会有不同的结果
     * 如果第一个吃1，2分钟，剩13分钟
     */
    const first_choice = compute_max_burger(burger1, burger2, total_time - burger1)
    /**
     * recursive 要做出选择，选1还是2，选不同的会有不同的结果
     * 如果第一个吃2，3分钟，剩12分钟
     */
    const second_choice = compute_max_burger(burger1, burger2, total_time - burger2)
    if (first_choice === -1 && second_choice === -1) {
        return -1;
    } else {
        return Math.max(first_choice, second_choice) + 1;
    }
}

console.log('res 2, 3, 15', compute_max_burger(2, 3, 15));
console.log('res 4, 9, 22', compute_max_burger(4, 9, 22));
console.log('res 4, 9, 54', compute_max_burger(4, 9, 54));
console.log('res 3, 5, 54', compute_max_burger(3, 5, 54));
console.log('res 3, 5, 55', compute_max_burger(3, 5, 55));