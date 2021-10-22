
import { ToDoList } from '../components/Todo';
import { NotFound } from '../components/NotFound';
import { SignInForm } from '../components/SignIn';
import { TodoAppTimeline } from '../components/TodoAppTimeline';

export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "Timeline"
    },
  
    {
        path: "/todo",
        component: ToDoList,
        label: "TODO"
    },
    {
        path: "/signin",
        component: SignInForm,
        label: "SIGN IN"
    },
    {
        path: "*",
        component: NotFound,
        // label: "Not Found"
    }
];