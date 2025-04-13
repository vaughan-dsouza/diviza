import { Head, useForm, router  } from '@inertiajs/react';
import axios from '@/axios'

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = async (e) => {
        e.preventDefault();

        // await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post('/api/login', {
            email: data.email,
            password: data.password
        })

        const token = response.data.token;
        localStorage.setItem('token', token);

        // Redirect to home or dashboard
        // window.location.href = '/';
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        router.visit('/');

    };

    return (
        <>
            <Head title="Login" />

            <h1 className="title">Login</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={`input ${errors.email ? '!ring-red-500' : ''}`}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={`input ${errors.password ? '!ring-red-500' : ''}`}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="primary-btn mt-4"
                        disabled={processing}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </>
    );
};

Login.layout = null;
export default Login;
