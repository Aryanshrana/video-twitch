// if we don't want to show auth(folder) in our url and directly want to go to login and register page and also have a layout file common for both , we can not do that , so to achieve that we have concepts caled routes groups
// using parethesis on (auth) we tell browser , not to take auth as part of URL
const Page = () => {
    return(
        <div>
            RegisterPage
        </div>
    );
}
export default Page;