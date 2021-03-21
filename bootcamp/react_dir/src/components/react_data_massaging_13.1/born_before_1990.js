
const GetBornBefore = (dataArr, year) => {
    return (
        dataArr.filter(obj => {
            if (year >= obj.birthday.split('-')[2]) {
                return obj.birthday
            }
        })
    );
}

export default GetBornBefore;



