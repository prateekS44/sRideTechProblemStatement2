const sworkSort = exports.sworkSort = (N,A) => {
    let cost = 0;
    let j;

    for(let i = 1; i < N; i ++) {
        j = findSubListMinimumIndex(A, i, N);
        cost += (j-i)+1;
        A = reverse(A, i, j);
    }
    return cost;
}

const findSubListMinimumIndex = exports.findSubListMinimumIndex = (L, left, right) => {
    let min = L[left];
    let minIndex = left;
    for(let i=left; i<right+1; i++){
        if(L[i] < min){
            min = L[i];
            minIndex = i;
        }
    }
    return minIndex;
}

const reverse = exports.reverse = (A, start, end) => {
    while(start < end) {
        startValue = A[start];
        A[start] = A[end];
        A[end] = startValue;
        start++;
        end--;
    }
    return A;
}

console.log("Result-1 = ", sworkSort(4, {1:4,2:2,3:1,4:3}));
console.log("Result-2 = ", sworkSort(2, {1:1,2:2}));
console.log("Result-3 = ", sworkSort(7, {1:7,2:6,3:5,4:4,5:3,6:2,7:1}));