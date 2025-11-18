import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <div>User page header</div>
        {children}
        <div>User page footer</div>
    </>
}