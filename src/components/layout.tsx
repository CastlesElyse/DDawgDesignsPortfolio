import { PropsWithChildren } from "react";
import Header from "./Header/header";

const Layout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;