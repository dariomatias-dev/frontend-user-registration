const formatDate = (value: Date) => {
    const date = new Date(value);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const formattedDay = day >= 10 ? day : `0${day}`;
    const formattedMonth = month >= 10 ? month : `0${month}`;

    return `${formattedDay}/${formattedMonth}/${year}`;
};

export default formatDate;
