import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import SignInPage from "../pages/auth/signin/SignlnPage.tsx";
import SignUpPage from "../pages/auth/signup/SignUppage.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {                //       => "/"  홈페이지 연결
                path: "auth", // +auth => 자식 중 index 가 없어서 매칭되는 페이지가 없음
                children: [
                    // +auth/signin => / +auth +(/) + signin => SignInPage
                    //+auth/signup => / +auth +(/) + signup => SignUpPage
                    { path: "signin", element: <SignInPage /> },
                    { path: "signup", element: <SignUpPage /> },
                ],
            },
        ],
    },
]);


export default router;