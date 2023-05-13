const formatDate = (value: string, dateToShow: boolean) => {
    const day = Number(value.slice(8, 10));
    const month = Number(value.slice(5, 7));
    const year = Number(value.slice(0, 4));
    const formattedDay = day >= 10 ? day : `0${day}`;
    const formattedMonth = month >= 10 ? month : `0${month}`;

    return dateToShow ?
        `${formattedDay}/${formattedMonth}/${year}`
        :
        `${year}-${formattedMonth}-${formattedDay}`;
};

export default formatDate;
