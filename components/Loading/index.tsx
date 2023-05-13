import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <ReactLoading
                type="spinningBubbles"
                color='#000000'
                width={80}
                height={80}
            />
        </div>
    );
};

export default Loading;
