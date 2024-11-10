import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/blurry-developing-photos-darkroom.jpg';

type LoginValues = {
    email: string;
    password: string;
};

const initialValues: LoginValues = {
    email: '',
    password: '',
};

// Define constants for admin credentials
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'admin123';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
    const [submittedData, setSubmittedData] = useState<LoginValues[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit = async (values: LoginValues) => {
        // Check if the provided email and password match the admin credentials
        if (values.email === ADMIN_EMAIL && values.password === ADMIN_PASSWORD) {
            const userId = 'admin123';  // Use a fixed userId for admin
            localStorage.setItem('userId', userId);  // Store userId in localStorage
            localStorage.setItem('role', 'admin');  // Store role as 'admin'

            setSubmittedData([...submittedData, values]);
            formik.resetForm();
            setError(null);
            alert('Login Successful');
            navigate('/admin');  // Redirect to admin page
        } else {
            setError('Invalid credentials');  // Show error if credentials don't match
        }
    };

    const formik = useFormik<LoginValues>({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4 text-center">Login</h2>
                    {error && <div className="text-red-600 mb-4">{error}</div>}
                    <div>
                        <label className="block mb-2 text-sm font-bold" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 p-2 w-full rounded mb-4"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-bold" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="border border-gray-300 p-2 w-full rounded mb-4"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-600">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">Login</button>
                    <div className="mt-4 text-center">
                        <span className="text-sm"><a href="/register" className="text-blue-600 hover:underline">Don't have an account? Register</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
