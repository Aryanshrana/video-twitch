const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className ="flex flex-col gap-y-4">
            <nav className="p-1 bg-red-500 w-full">
                Auth Navbar
            </nav>
            {children}
        </div>
    );
}

export default AuthLayout;
//you will always have children in props of layout fuction
// layout.tsx is useful when you want to create a set of reusable layout elements across multiple routes