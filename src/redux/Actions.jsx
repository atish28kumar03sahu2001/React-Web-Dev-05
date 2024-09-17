export const setInput = (field, value) => ({
    type: 'SET_INPUT',
    payload: {field, value}
});

export const setAge = (age) => ({
    type: 'SET_AGE',
    payload: age
});

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
    }
}