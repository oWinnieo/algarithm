/*
【堆排序动画演示】https://www.bilibili.com/video/BV1Mr4y1b7HX?vd_source=4e03c23dad636a1f83555277f3900371
*/

class MaxHeap {
    constructor () {
        this.heap = []
    }

    getParentIndex (index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex (index) {
        return 2 * index + 1
    }

    getRightChildIndex (index) {
        return 2 * index + 2
    }

    swap (index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    siftUp () {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index)
            if (this.heap[parentIndex] >= this.heap[index]) break
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }
    // wtest here ...
    siftDown () { 
        let index = 0
        const length = this.heap.length
        while (true) {
            let leftChildIndex = this.getLeftChildIndex(index)
            let rightChildIndex = this.getRightChildIndex(index)
            let largestIndex = index
            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex
            }
            if (largestIndex === index) break;
            this.swap(index, largestIndex)
            index = largestIndex
        }
    }

    insert (value) { // wtest here
        this.heap.push(value)
        this.siftUp()
    }

    extractMax () {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown()
        return max
    }

    getMax () {
        return this.heap.length > 0 ? this.heap[0] : null
    }

    size () {
        return this.heap.length
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
console.log(maxHeap.getMax()); // 输出: 20
console.log(maxHeap.extractMax()); // 输出: 20
console.log(maxHeap.getMax()); // 输出: 15