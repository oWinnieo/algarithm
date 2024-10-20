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