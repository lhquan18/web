import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
});

const initData = [
    {
        "id": 1,
        "name": " ReactJS basic",
        "isCompleted": false,
        "deadline": '2021-9-11'
    },
    {
        "id": 2,
        "name": "Học React Hooks - useEffect",
        "isCompleted": false,
        "deadline": '2021-10-10'
    },
    {
        "id": 3,
        "name": "Học React Hooks - useContext",
        "isCompleted": true,
        "deadline": '2021-10-11'
    },
    {
        "id": 4,
        "name": "Học React Hooks - useState",
        "isCompleted": true,
        "deadline": '2021-10-12'
    },
    {
        "id": 5,
        "name": "FastAPI Basic",
        "isCompleted": false,
        "deadline": '2021-10-17'
    },
    {
        "id": 6,
        "name": "Material UI",
        "isCompleted": true,
        "deadline": '2021-10-19'
    },
    {
        "id": 7,
        "name": "Bài tập cá nhân",
        "isCompleted": false,
        "deadline": '2021-10-23'
    },
    {
        "id": 8,
        "name": "Đồ án giữa kì",
        "isCompleted": true,
        "deadline": '2021-10-30'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
        }}>
            {children}
        </TodoContext.Provider>
    )
};