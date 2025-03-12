import _ from 'lodash';

const generate = (json1, json2) => {
    const diff = [];
    const json1Sorted = Object.keys(json1).sort().reduce((json1Sorted, key) => {json1Sorted[key] = json1[key]; return json1Sorted},{}); //_.sortBy(json1);
    const json2Sorted = Object.keys(json2).sort().reduce((json2Sorted, key) => {json2Sorted[key] = json2[key]; return json2Sorted},{}); //_.sortBy(json1);

    // надо перевести джейсона в массив пар-массивов ключ-значение, отсортировать, а затем сравнивать по порядку и писать в дифф
    const array1 = _.toPairs(json1Sorted);
    const array2 = _.toPairs(json2Sorted);
    
    for (let i = 0; i < array1.length ; i++) {
        if (_.has(json2Sorted, array1[i][0])) {
            json2Sorted[array1[i][0]] === array1[i][1] ? diff.push([' ', array1[i][0], array1[i][1]]) : diff.push(['+', array1[i][0], array1[i][1]]);
        } else {
            diff.push(['-', array1[i][0], array1[i][1]]);
        }
    }

    for (let j = 0; j < array2.length ; j++) {
        if (_.has(json1Sorted, array2[j][0])) {
            json1Sorted[array2[j][0]] === array2[j][1] ? console.log('\n') : diff.push(['-', array2[j][0], array2[j][1]]);
        } else {
            diff.push(['+', array2[j][0], array2[j][1]]);
        }
    }

    console.log('HERE IS the DIFF:');
    console.log(diff);

    return diff;
}

export default generate;