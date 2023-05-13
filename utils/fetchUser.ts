import formatDate from "./formatDate";

const fetchUser = async (userId: string, dateToShow: boolean) => {
    try {
        const response = await fetch(`http://localhost:3333/user/${userId}`);
        const data = await response.json();
        data.date = formatDate(data.date, dateToShow);
        data.createdAt = formatDate(data.createdAt, dateToShow);
        data.updatedAt = formatDate(data.updatedAt, dateToShow);
        return data;
    } catch (err) {
        console.log(err);
    }
};

export default fetchUser;
