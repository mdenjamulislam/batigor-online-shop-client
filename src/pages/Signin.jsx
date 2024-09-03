import React from "react";

const Signin = () => {
    return (
        <>
            {/* Login */}
            <section className="sectionInner--padding">
                <div className="container xl:max-w-7xl">
                    <div className="grid grid-cols-1 items-center gap-4 overflow-hidden rounded-2xl border border-light lg:grid-cols-2">
                        <div className="hidden lg:block">
                            <img src="assets/images/poster/poster-1.jpg" alt="Login" className="h-[550px] w-full object-cover" />
                        </div>
                        <div className="space-y-5 rounded-lg p-4 md:space-y-6 md:p-6 lg:space-y-8 lg:p-8">
                            <div className="space-y-1">
                                <h1 className="heading--two text-primary">Login to your account</h1>
                                <p>Welcome back! Select login method.</p>
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
                            <form action="" className="space-y-4">
                                <div className="flex items-center gap-0">
                                    <label htmlFor="" className="rounded-l-lg border border-light bg-light px-3 py-2 text-xs md:py-3 md:text-base">
                                        <i className="fa-solid fa-user" />
                                    </label>
                                    <input type="email" id="email" className="field" placeholder="Enter your email" />
                                </div>
                                <div className="flex items-center gap-0">
                                    <label htmlFor="" className="rounded-l-lg border border-light bg-light px-3 py-2 text-xs md:py-3 md:text-base">
                                        <i className="fa-solid fa-user" />
                                    </label>
                                    <input type="password" id="password" className="field" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn--filled w-full">
                                    Login
                                </button>
                            </form>
                            {/* End of the form */}
                            <p>
                                Don't have an account?{" "}
                                <a href="signup.html" className="text-accent">
                                    Register
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* end of the container */}
            </section>
            {/* End of the login */}
        </>
    );
};

export default Signin;
