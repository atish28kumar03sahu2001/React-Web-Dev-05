export const setInput = (field, value) => ({
    type: 'SET_INPUT',
    payload: { field, value }
});

export const setAge = (age) => ({
    type: 'SET_AGE',
    payload: age,
});

export const setYear = (year) => ({
    type: 'SET_YEAR',
    payload: year,
});

export const setNumber = (number) => ({
    type: 'SET_NUMBER',
    payload: number
})

export const setRange = (range) => ({
    type: 'SET_RANGE',
    payload: range
})

export const setResult = (result) => ({
    type: 'SET_RESULT',
    payload: result
})

export const setRange1 = (range1) => ({
    type: 'SET_RANGE1',
    payload: range1
})

export const setRange2 = (range2) => ({
    type: 'SET_RANGE2',
    payload: range2
})

export const EOsetResult = (result) => ({
    type: 'SET_RESULT',
    payload: result
})

export const SetPosNegNumber = (number) => ({
    type: 'SET_NUMBER',
    payload: number
})

export const setNumbers = (numA, numB) => ({
    type: 'SET_NUMBERS',
    payload: { numA, numB }
})

export const calculateAge = (day, month, year) => {
    return (dispatch) => {
        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        let ageYear = today.getFullYear() - birthDate.getFullYear();
        let ageMonth = today.getMonth() - birthDate.getMonth();
        let ageDay = today.getDate() - birthDate.getDate();

        if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
            ageYear--;
            ageMonth += 12;
        }

        if (ageDay < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            ageDay += lastMonth.getDate();
        }

        const calculatedAge = `${ageYear} years, ${ageMonth} months, and ${ageDay} days`;
        dispatch(setAge(calculatedAge));
    };
};

export const checkLeapYear = (year) => (dispatch) => {
    let isLeap = false;
  
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        isLeap = true;
    }

    dispatch({
        type: 'CHECK_LEAP_YEAR',
        payload: isLeap ? `${year} Is A Leap Year` : `${year} Is Not A Leap Year`,
    });
};

export const CalculateMultiplicationTable = (number, range) => (dispatch) => {
    const result = [];
    for(let i = 1; i <= range; i++) {
        result.push(`${number} * ${i} = ${number * i}`);
    }
    dispatch(setResult(result));
}

export const calculateEvenOdd = (range1, range2) => (dispatch) => {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let i = range1; i <= range2; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        } else {
            oddNumbers.push(i);
        }
    }

    dispatch(EOsetResult({ evenNumbers, oddNumbers }));
};

export const CheckPosNeg = (number) => (dispatch) => {
    const result = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
    dispatch({
        type: 'SET_RESULT',
        payload: result
    })
}

export const swapNumbers = () => (dispatch, getState) => {
    const state = getState();
    const { numA, numB } = state.Swap;
    
    if (numA !== undefined && numB !== undefined) {
        dispatch({
            type: 'SWAP_NUMBERS',
            payload: { swappedA: numB, swappedB: numA }
        });
    } else {
        console.error('numA or numB is undefined.');
    }
};