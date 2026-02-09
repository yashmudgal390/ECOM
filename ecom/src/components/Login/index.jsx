import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { loginDispatch, email, password } = useLogin();
    const navigate = useNavigate();
    const onFormSubmit = async (e) => {
        e.preventDefault();
        const data = await userLogin(email, password);
        loginDispatch({
            type: 'TOKEN',
            payload: {
                token: data
            }
        })
        if (data.access_token){
            navigate('/')
        }
    };

    const onEmailChange = (e) => {
        loginDispatch({
            type: "EMAIL",
            payload: { value: e.target.value },
        });
        if (data.access_token){
            navigate('/')
        }
    };

    const onPasswordChange = (e) => {
        loginDispatch({
            type: "PASSWORD",
            payload: { value: e.target.value },
        });
    };

    return (
        <form
            onSubmit={onFormSubmit}
            className="bg-white shadow-md rounded-lg p-6 w-80 mx-auto mt-10 flex flex-col gap-4"
        >
            {/* Email */}
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Email *</label>
                <input
                    type="email"
                    required
                    placeholder="abcd@gmail.com"
                    onChange={onEmailChange}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Password *</label>
                <input
                    type="password"
                    required
                    placeholder="••••••"
                    onChange={onPasswordChange}
                    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="mt-4 bg-sky-900 hover:bg-sky-700 text-white font-semibold py-2 rounded transition"
            >
                Login
            </button>
        </form>
    );
};
