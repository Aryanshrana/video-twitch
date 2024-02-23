"use client";

const TestPage = () => {
    const onClick = () => {
        console.log("Something");
    }
    return(
        <div onClick={onClick}>
            Hello TestPage
        </div>
    );
};
export default TestPage;
//every component that you create inside a app folder is a server component by default
//server components are rendered on server
//they also have a ability to immediately connect to database
//they are not good for user interactivity for that we need client component
// to turn this into normal component we use "use client" at top