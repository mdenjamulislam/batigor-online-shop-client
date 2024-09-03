import { useContext } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then((user) => {
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section className="sectionInner--padding">
            <div className="container xl:max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-4 overflow-hidden rounded-2xl border border-light lg:grid-cols-2">
                    <div className="hidden lg:flex">
                        <img src="https://cdn.pixabay.com/photo/2018/05/13/14/52/boys-3396713_1280.jpg" alt="Login" className="h-[600px] w-full object-cover" />
                    </div>
                    <div className="space-y-5 rounded-lg p-4 md:space-y-6 md:p-6 lg:space-y-8 lg:p-8">
                        <div className="space-y-1">
                            <h1 className="heading--two text-primary">Create a new account</h1>
                            <p>Welcome back! Select signup method.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#" className="btn--outline gap-2">
                                <img src="assets/images/google.png" alt="" className="h-5 w-5" />
                                <span>Google</span>
                            </a>
                            <a href="#" className="btn--outline gap-2">
                                <img src="assets/images/facebook.png" alt="" className="h-5 w-5" />
                                <span>Facebook</span>
                            </a>
                        </div>
                        <div className="divider">or continue with password</div> {/* Divider */}
                        {/* Form */}
                        <form onSubmit={handleSignUp} className="space-y-4">
                            <div className="flex items-center gap-0">
                                <label htmlFor="" className="rounded-l-lg border border-light bg-light px-3 py-2 text-xs md:py-3 md:text-base">
                                    <FaUser />
                                </label>
                                <input type="text" name="name" className="field" placeholder="Full name" />
                            </div>
                            <div className="flex items-center gap-0">
                                <label htmlFor="" className="rounded-l-lg border border-light bg-light px-3 py-2 text-xs md:py-3 md:text-base">
                                    <FaEnvelope />
                                </label>
                                <input type="email" name="email" className="field" placeholder="Email" />
                            </div>
                            <div className="flex items-center gap-0">
                                <label htmlFor="" className="rounded-l-lg border border-light bg-light px-3 py-2 text-xs md:py-3 md:text-base">
                                    <FaLock />
                                </label>
                                <input type="password" name="password" className="field" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn--filled w-full">
                                Login
                            </button>
                        </form>
                        {/* End of the form */}
                        <p>
                            Have an account?{" "}
                            <Link to="/signin" className="text-accent">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* end of the container */}
        </section>
    );
};

export default SignUp;
