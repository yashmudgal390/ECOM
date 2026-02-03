export const Navbar = () => {
    return (
        <header className="flex items-center bg-sky-950 py-4 px-8 text-white">

            <h1 className="text-3xl font-medium">Shop IT</h1>

            <nav className="flex ml-auto gap-6">
                <span className="material-icons-outlined text-3xl flex items-center justify-center cursor-pointer">

                    shopping_cart
                </span>
                <span className="material-icons-outlined text-3xl flex items-center justify-center cursor-pointer">

                    favorite
                </span>
                <span className="material-icons-outlined text-3xl flex items-center justify-center cursor-pointer">

                    account_circle
                </span>
            </nav>
        </header>
    );
};
