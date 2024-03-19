const AuthLayout = ({
   Children
}: {
    Children: React.ReactNode;
}) => {
    return (
        <div>
            {Children}
        </div>
    );
};

export default AuthLayout;