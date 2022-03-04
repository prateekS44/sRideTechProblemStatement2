const {sworkSort, findSubListMinimumIndex, reverse} = require('./index');

test('sworkSort', () => {
    const cost1 = sworkSort(4, {1:4,2:2,3:1,4:3});
    expect(cost1).toBe(6);
    const cost2 = sworkSort(2, {1:1,2:2});
    expect(cost2).toBe(1);
    const cost3 = sworkSort(7, {1:7,2:6,3:5,4:4,5:3,6:2,7:1});
    expect(cost3).toBe(12);
});

test('findSubListMinimumIndex', () => {
    const result1 = findSubListMinimumIndex({1:3,2:5,3:1,4:7}, 2, 3);
    expect(result1).toBe(3);
    const result2 = findSubListMinimumIndex({1:1,2:4,3:2,4:7}, 1, 4);
    expect(result2).toBe(1);
    const result3 = findSubListMinimumIndex({1:8,2:3,3:4,4:7,5:9}, 1, 4);
    expect(result3).toBe(2);
});

test('reverse', () => {
    const result1 = reverse({1:6,2:5,3:1,4:7}, 1, 2);
    console.log(result1)
    expect(result1).toEqual({1:5,2:6,3:1,4:7});
    const result2 = reverse({1:1,2:4,3:2,4:7}, 2, 3);
    expect(result2).toEqual({1:1,2:2,3:4,4:7});
})